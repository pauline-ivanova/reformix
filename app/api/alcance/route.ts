import * as Sentry from '@sentry/nextjs';
import { NextRequest, NextResponse } from 'next/server';
import { Resend } from 'resend';
import {
  alcanceFullName,
  alcanceVCardFilename,
  buildAlcanceClientAckHtml,
  buildAlcanceClientAckSubject,
  buildAlcanceEmailSubject,
  buildAlcanceSummaryHtml,
  buildAlcanceSummaryTelegramHtml,
  buildAlcanceVCard,
  isAlcanceMimeAllowed,
  isValidCodigoPostalES,
  MAX_ALCANCE_FILE_BYTES,
  MAX_ALCANCE_FILES,
  type AlcanceMontajePayload,
} from '@/lib/alcance-summary';

export const runtime = 'nodejs';

const resend = process.env.RESEND_API_KEY
  ? new Resend(process.env.RESEND_API_KEY)
  : null;

const TELEGRAM_BOT_TOKEN = process.env.TELEGRAM_BOT_TOKEN;
const TELEGRAM_CHAT_ID = process.env.TELEGRAM_CHAT_ID;

async function verifyTurnstile(
  token: string | undefined,
  request: NextRequest,
): Promise<{ ok: true } | { ok: false; response: NextResponse }> {
  const turnstileSecretKey = process.env.TURNSTILE_SECRET_KEY;
  if (!turnstileSecretKey) {
    console.warn('TURNSTILE_SECRET_KEY not configured. Skipping Turnstile verification.');
    return { ok: true };
  }

  if (!token) {
    return {
      ok: false,
      response: NextResponse.json(
        { error: 'La verificación de seguridad ha fallado. Por favor, inténtalo de nuevo.' },
        { status: 400 },
      ),
    };
  }

  try {
    const ip =
      request.headers.get('x-forwarded-for')?.split(',')[0]?.trim() || undefined;

    const verifyResponse = await fetch(
      'https://challenges.cloudflare.com/turnstile/v0/siteverify',
      {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: new URLSearchParams({
          secret: turnstileSecretKey,
          response: token,
          ...(ip ? { remoteip: ip } : {}),
        }).toString(),
      },
    );

    const verifyData: { success?: boolean } = await verifyResponse.json();
    if (!verifyData.success) {
      return {
        ok: false,
        response: NextResponse.json(
          {
            error:
              'La verificación de seguridad ha fallado. Por favor, inténtalo de nuevo.',
          },
          { status: 400 },
        ),
      };
    }
    return { ok: true };
  } catch (error) {
    console.error('Error verifying Turnstile token:', error);
    return {
      ok: false,
      response: NextResponse.json(
        {
          error:
            'Hubo un problema con la verificación de seguridad. Por favor, inténtalo de nuevo.',
        },
        { status: 400 },
      ),
    };
  }
}

function validatePayload(
  data: AlcanceMontajePayload,
): string | null {
  if (!data.nombre?.trim() || data.nombre.trim().length < 2 || data.nombre.length > 80) {
    return 'El nombre debe tener entre 2 y 80 caracteres.';
  }
  if (
    !data.apellidos?.trim() ||
    data.apellidos.trim().length < 2 ||
    data.apellidos.length > 120
  ) {
    return 'Los apellidos deben tener entre 2 y 120 caracteres.';
  }
  if (!data.phone?.trim()) {
    return 'El teléfono es obligatorio.';
  }
  const cleanedPhone = data.phone.replace(/[\s\-()]/g, '');
  if (cleanedPhone.startsWith('+')) {
    if (cleanedPhone.length < 8 || cleanedPhone.length > 18) {
      return 'Por favor, introduce un número de teléfono válido.';
    }
    if (!/^\d{7,15}$/.test(cleanedPhone.slice(1))) {
      return 'Por favor, introduce un número de teléfono válido.';
    }
  } else if (!/^\d{7,15}$/.test(cleanedPhone)) {
    return 'Por favor, introduce un número de teléfono válido.';
  }

  if (!data.email?.trim()) {
    return 'El email es obligatorio.';
  }
  if (data.email.length > 255 || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)) {
    return 'Por favor, introduce un email válido.';
  }

  if (!Array.isArray(data.tipos) || data.tipos.length === 0) {
    return 'Selecciona al menos un tipo de montaje.';
  }
  if (!data.marca || !data.sistema || !data.materialEstado) {
    return 'Completa marca, sistema y estado del material.';
  }
  if (!data.desmontar || !data.retiradaResiduos || !data.retiradaEmbalajes) {
    return 'Completa desmontaje y retiradas.';
  }
  if (!data.direccion?.trim() || data.direccion.trim().length < 5) {
    return 'Indica la dirección de la obra (calle y número).';
  }
  if (!isValidCodigoPostalES(data.codigoPostal || '')) {
    return 'Introduce un código postal válido (5 dígitos).';
  }
  if (!data.municipio?.trim()) {
    return 'El municipio es obligatorio.';
  }
  if (!data.urgencia || !data.horario || !data.habitada || !data.medidasModo) {
    return 'Completa urgencia, horario, ocupación y medidas.';
  }
  if (data.medidasModo === 'approx' && !data.medidasValor?.trim()) {
    return 'Indica la medida aproximada.';
  }
  if (!data.privacyConsent) {
    return 'Debes aceptar el tratamiento de datos para continuar.';
  }

  if (data.tipos.includes('cocina')) {
    if (
      !data.tipoMontaje ||
      !data.distribucion ||
      !data.encimera ||
      !data.cortes ||
      !data.tomas ||
      !data.fregadero ||
      !data.electrodomesticos ||
      !data.campana
    ) {
      return 'Completa los detalles técnicos de la cocina.';
    }
  }

  return null;
}

function chunkTelegramHtml(html: string, maxLen = 3900): string[] {
  if (html.length <= maxLen) return [html];
  const chunks: string[] = [];
  const blocks = html.split('\n\n');
  let current = '';
  for (const block of blocks) {
    const next = current ? `${current}\n\n${block}` : block;
    if (next.length > maxLen && current) {
      chunks.push(current);
      current = block.length > maxLen ? block.slice(0, maxLen) : block;
    } else if (block.length > maxLen) {
      if (current) chunks.push(current);
      for (let i = 0; i < block.length; i += maxLen) {
        chunks.push(block.slice(i, i + maxLen));
      }
      current = '';
    } else {
      current = next;
    }
  }
  if (current) chunks.push(current);
  return chunks;
}

async function sendTelegramText(
  html: string,
  parseMode: 'HTML' | undefined = 'HTML',
): Promise<void> {
  if (!TELEGRAM_BOT_TOKEN || !TELEGRAM_CHAT_ID) {
    console.warn('Telegram credentials not configured.');
    return;
  }

  const chunks = chunkTelegramHtml(html);

  for (const chunk of chunks) {
    const response = await fetch(
      `https://api.telegram.org/bot${TELEGRAM_BOT_TOKEN}/sendMessage`,
      {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          chat_id: TELEGRAM_CHAT_ID,
          text: chunk,
          ...(parseMode ? { parse_mode: parseMode } : {}),
          disable_web_page_preview: true,
        }),
      },
    );
    if (!response.ok) {
      const body = await response.text();
      console.error('Telegram sendMessage error:', response.status, body);
    }
  }
}

async function sendTelegramDocument(
  file: { filename: string; content: Buffer; contentType: string },
  caption?: string,
): Promise<{ ok: boolean; error?: string }> {
  if (!TELEGRAM_BOT_TOKEN || !TELEGRAM_CHAT_ID) {
    return { ok: false, error: 'Telegram not configured' };
  }

  try {
    const form = new FormData();
    form.append('chat_id', TELEGRAM_CHAT_ID);
    form.append(
      'document',
      new Blob([new Uint8Array(file.content)], { type: file.contentType }),
      file.filename,
    );
    form.append('caption', caption || `Alcance · ${file.filename}`);

    const response = await fetch(
      `https://api.telegram.org/bot${TELEGRAM_BOT_TOKEN}/sendDocument`,
      { method: 'POST', body: form },
    );

    if (!response.ok) {
      const body = await response.text();
      console.error('Telegram sendDocument error:', response.status, body);
      return { ok: false, error: body };
    }
    return { ok: true };
  } catch (error: unknown) {
    const message = error instanceof Error ? error.message : String(error);
    console.error('Telegram sendDocument exception:', message);
    return { ok: false, error: message };
  }
}

export async function POST(request: NextRequest) {
  try {
    const formData = await request.formData();
    const payloadRaw = formData.get('payload');
    const turnstileToken = formData.get('turnstileToken');

    if (typeof payloadRaw !== 'string') {
      return NextResponse.json(
        { error: 'Faltan los datos del cuestionario.' },
        { status: 400 },
      );
    }

    let payload: AlcanceMontajePayload;
    try {
      payload = JSON.parse(payloadRaw) as AlcanceMontajePayload;
    } catch {
      return NextResponse.json(
        { error: 'No se pudieron leer los datos del cuestionario.' },
        { status: 400 },
      );
    }

    const turnstile = await verifyTurnstile(
      typeof turnstileToken === 'string' ? turnstileToken : undefined,
      request,
    );
    if (!turnstile.ok) return turnstile.response;

    const validationError = validatePayload(payload);
    if (validationError) {
      return NextResponse.json({ error: validationError }, { status: 400 });
    }

    const files: { filename: string; content: Buffer; contentType: string }[] =
      [];
    const fileEntries = formData.getAll('files');

    if (fileEntries.length > MAX_ALCANCE_FILES) {
      return NextResponse.json(
        { error: `Máximo ${MAX_ALCANCE_FILES} archivos.` },
        { status: 400 },
      );
    }

    for (const entry of fileEntries) {
      if (!(entry instanceof File)) continue;
      if (entry.size <= 0) continue;
      if (entry.size > MAX_ALCANCE_FILE_BYTES) {
        return NextResponse.json(
          { error: `El archivo ${entry.name} supera 10 MB.` },
          { status: 400 },
        );
      }
      const mime = entry.type || 'application/octet-stream';
      if (!isAlcanceMimeAllowed(mime)) {
        return NextResponse.json(
          {
            error: `Tipo no permitido: ${entry.name}. Usa JPG, PNG, WebP o PDF.`,
          },
          { status: 400 },
        );
      }
      const buffer = Buffer.from(await entry.arrayBuffer());
      files.push({
        filename: entry.name.slice(0, 180) || 'adjunto',
        content: buffer,
        contentType: mime,
      });
    }

    const fileNames = files.map((f) => f.filename);
    const summaryTelegramHtml = buildAlcanceSummaryTelegramHtml(
      payload,
      fileNames,
    );
    const summaryHtml = buildAlcanceSummaryHtml(payload, fileNames);
    const fullName = alcanceFullName(payload);
    const subject = buildAlcanceEmailSubject(fullName);
    const vcardContent = buildAlcanceVCard(payload);
    const vcardFilename = alcanceVCardFilename(
      payload.nombre,
      payload.apellidos,
    );
    const vcardAttachment = {
      filename: vcardFilename,
      content: Buffer.from(vcardContent, 'utf8'),
      contentType: 'text/vcard',
    };

    const fileErrors: string[] = [];

    try {
      await sendTelegramText(summaryTelegramHtml, 'HTML');
    } catch (error) {
      console.error('Failed to send Telegram summary:', error);
    }

    const vcardTg = await sendTelegramDocument(
      {
        ...vcardAttachment,
        contentType: 'text/vcard;charset=utf-8',
      },
      '📇 Tarjeta de contacto (.vcf) — tocar para guardar',
    );
    if (!vcardTg.ok) {
      console.error('Failed to send alcance vCard to Telegram:', vcardTg.error);
    }

    for (const file of files) {
      const result = await sendTelegramDocument(file);
      if (!result.ok) {
        fileErrors.push(file.filename);
      }
    }

    const recipients = ['reformix.barcelona@gmail.com'];
    if (resend) {
      try {
        const fromEmail =
          process.env.RESEND_FROM_EMAIL || 'onboarding@resend.dev';
        await resend.emails.send({
          from: fromEmail,
          to: recipients,
          subject,
          html: summaryHtml,
          // No replyTo — avoid opening a second client thread
          attachments: [
            {
              filename: vcardAttachment.filename,
              content: vcardAttachment.content,
              contentType: vcardAttachment.contentType,
            },
            ...files.map((f) => ({
              filename: f.filename,
              content: f.content,
            })),
          ],
        });
      } catch (emailError) {
        console.error('Error sending alcance admin email:', emailError);
      }

      if (payload.email?.trim()) {
        try {
          const fromEmail =
            process.env.RESEND_FROM_EMAIL || 'onboarding@resend.dev';
          await resend.emails.send({
            from: fromEmail,
            to: [payload.email.trim()],
            subject: buildAlcanceClientAckSubject(),
            html: buildAlcanceClientAckHtml(payload),
          });
        } catch (ackError) {
          console.error('Error sending alcance client ack:', ackError);
        }
      }
    } else {
      console.warn('RESEND_API_KEY not configured. Alcance email not sent.');
    }

    return NextResponse.json({
      success: true,
      message:
        'Gracias. Hemos recibido el alcance. Te responderemos en el hilo de la solicitud o por WhatsApp.',
      fileWarnings: fileErrors.length
        ? `Algunos archivos no se enviaron a Telegram: ${fileErrors.join(', ')}`
        : undefined,
    });
  } catch (error) {
    console.error('Alcance API error:', error);
    Sentry.captureException(error);
    return NextResponse.json(
      { error: 'Hubo un error al enviar el cuestionario. Inténtalo de nuevo.' },
      { status: 500 },
    );
  }
}
