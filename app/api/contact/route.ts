import * as Sentry from '@sentry/nextjs';
import { NextRequest, NextResponse } from 'next/server';
import { Resend } from 'resend';
import {
  buildContactEmailSubject,
  resolveServiceLabel,
} from '@/lib/contact-email';
import {
  buildMontajeContactEmailBlock,
  buildMontajeContactTelegramHtml,
  shouldAttachMontajeNotify,
} from '@/lib/contact-montaje-notify';
import { normalizeContactService } from '@/lib/contact-services';

// Initialize Resend only if API key is provided
const resend = process.env.RESEND_API_KEY 
  ? new Resend(process.env.RESEND_API_KEY) 
  : null;

// Telegram Bot configuration
const TELEGRAM_BOT_TOKEN = process.env.TELEGRAM_BOT_TOKEN;
const TELEGRAM_CHAT_ID = process.env.TELEGRAM_CHAT_ID;

/**
 * Send notification to Telegram
 */
async function sendTelegramNotification(data: {
  name: string;
  email: string;
  phone: string;
  service?: string;
  message: string;
}) {
  if (!TELEGRAM_BOT_TOKEN || !TELEGRAM_CHAT_ID) {
    console.warn('Telegram credentials not configured. Telegram notification not sent.');
    return;
  }

  try {
    const serviceLabel = resolveServiceLabel(data.service);
    const telegramMessage = `
🔔 Nuevo contacto desde reformix.barcelona

👤 Nombre: ${data.name}
📧 Email: ${data.email}
📱 Teléfono: ${data.phone}
${serviceLabel ? `🔧 Servicio: ${serviceLabel}` : ''}

💬 Mensaje:
${data.message}

⏰ Fecha: ${new Date().toLocaleString('es-ES', { timeZone: 'Europe/Madrid' })}
    `.trim();

    const response = await fetch(
      `https://api.telegram.org/bot${TELEGRAM_BOT_TOKEN}/sendMessage`,
      {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          chat_id: TELEGRAM_CHAT_ID,
          text: telegramMessage,
        }),
      },
    );

    if (!response.ok) {
      const responseData = await response.json();
      console.error('Telegram API error:', response.status, responseData);
    }

    if (shouldAttachMontajeNotify(data.service)) {
      const montajeHtml = buildMontajeContactTelegramHtml({
        name: data.name,
        phone: data.phone,
      });
      const montajeRes = await fetch(
        `https://api.telegram.org/bot${TELEGRAM_BOT_TOKEN}/sendMessage`,
        {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            chat_id: TELEGRAM_CHAT_ID,
            text: montajeHtml,
            parse_mode: 'HTML',
            disable_web_page_preview: true,
          }),
        },
      );
      if (!montajeRes.ok) {
        console.error(
          'Telegram montaje follow-up error:',
          montajeRes.status,
          await montajeRes.text(),
        );
      }
    }
  } catch (error: unknown) {
    const message = error instanceof Error ? error.message : String(error);
    console.error('Error sending Telegram notification:', message);
  }
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, email, phone, message, service, turnstileToken } = body;

    // Verify Cloudflare Turnstile token if configured
    const turnstileSecretKey = process.env.TURNSTILE_SECRET_KEY;
    if (turnstileSecretKey) {
      if (!turnstileToken || typeof turnstileToken !== 'string') {
        return NextResponse.json(
          { error: 'La verificación de seguridad ha fallado. Por favor, inténtalo de nuevo.' },
          { status: 400 }
        );
      }

      try {
        const ip =
          request.headers.get('x-forwarded-for')?.split(',')[0]?.trim() ||
          (request as any).ip ||
          undefined;

        const verifyResponse = await fetch(
          'https://challenges.cloudflare.com/turnstile/v0/siteverify',
          {
            method: 'POST',
            headers: {
              'Content-Type': 'application/x-www-form-urlencoded',
            },
            body: new URLSearchParams({
              secret: turnstileSecretKey,
              response: turnstileToken,
              ...(ip ? { remoteip: ip } : {}),
            }).toString(),
          }
        );

        const verifyData: any = await verifyResponse.json();

        if (!verifyData.success) {
          console.error('Turnstile verification failed:', verifyData);
          return NextResponse.json(
            {
              error:
                'La verificación de seguridad ha fallado. Por favor, inténtalo de nuevo.',
            },
            { status: 400 }
          );
        }
      } catch (verificationError) {
        console.error('Error verifying Turnstile token:', verificationError);
        return NextResponse.json(
          {
            error:
              'Hubo un problema con la verificación de seguridad. Por favor, inténtalo de nuevo.',
          },
          { status: 400 }
        );
      }
    } else {
      console.warn('TURNSTILE_SECRET_KEY not configured. Skipping Turnstile verification.');
    }

    // Basic validation
    if (!name || !email || !phone || !message) {
      return NextResponse.json(
        { error: 'Por favor, completa todos los campos obligatorios.' },
        { status: 400 }
      );
    }

    // Validate name length
    if (name.trim().length < 2 || name.length > 100) {
      return NextResponse.json(
        { error: 'El nombre debe tener entre 2 y 100 caracteres.' },
        { status: 400 }
      );
    }

    // Validate email length
    if (email.length > 255) {
      return NextResponse.json(
        { error: 'El email es demasiado largo.' },
        { status: 400 }
      );
    }

    // Validate message length
    if (message.trim().length < 10 || message.length > 2000) {
      return NextResponse.json(
        { error: 'El mensaje debe tener entre 10 y 2000 caracteres.' },
        { status: 400 }
      );
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: 'Por favor, introduce un email válido.' },
        { status: 400 }
      );
    }

    // Phone validation - International format
    const cleanedPhone = phone.replace(/[\s\-()]/g, '');
    
    if (cleanedPhone.startsWith('+')) {
      // International format: + followed by country code and number
      // Minimum: +1 and 7 digits = 8 chars, Maximum: +999 and 15 digits = 18 chars
      if (cleanedPhone.length < 8 || cleanedPhone.length > 18) {
        return NextResponse.json(
          { error: 'Por favor, introduce un número de teléfono válido (ej: +34 642 029 572).' },
          { status: 400 }
        );
      }
      // Should have at least country code (1-3 digits) and number (7-15 digits)
      const digitsAfterPlus = cleanedPhone.slice(1);
      if (!/^\d{7,15}$/.test(digitsAfterPlus)) {
        return NextResponse.json(
          { error: 'Por favor, introduce un número de teléfono válido (ej: +34 642 029 572).' },
          { status: 400 }
        );
      }
    } else {
      // Local format: should have 7-15 digits
      if (!/^\d{7,15}$/.test(cleanedPhone)) {
        return NextResponse.json(
          { error: 'Por favor, introduce un número de teléfono válido (mínimo 7 dígitos).' },
          { status: 400 }
        );
      }
    }

    // Log the submission
    console.log('Contact form submission:', {
      name,
      email,
      phone,
      service,
      message,
      timestamp: new Date().toISOString(),
    });

    const normalizedService = normalizeContactService(service);

    // Send Telegram notification
    try {
      await sendTelegramNotification({
        name,
        email,
        phone,
        service: normalizedService,
        message,
      });
    } catch (error) {
      console.error('Failed to send Telegram notification:', error);
    }

    const serviceLabel = resolveServiceLabel(normalizedService);
    const emailSubject = buildContactEmailSubject(name, normalizedService);
    const montajeBlock = shouldAttachMontajeNotify(normalizedService)
      ? buildMontajeContactEmailBlock({ name, phone })
      : '';
    const emailHtml = `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
        <h2 style="color: #1a1a1a; border-bottom: 2px solid #d97706; padding-bottom: 10px;">
          Nuevo contacto desde reformix.barcelona
        </h2>
        <div style="background-color: #f9fafb; padding: 20px; border-radius: 8px; margin-top: 20px;">
          <p style="margin: 10px 0;"><strong>Nombre:</strong> ${name}</p>
          <p style="margin: 10px 0;"><strong>Email:</strong> <a href="mailto:${email}">${email}</a></p>
          <p style="margin: 10px 0;"><strong>Teléfono:</strong> ${phone}</p>
          <p style="margin: 10px 0;"><strong>Servicio:</strong> ${serviceLabel || 'No especificado'}</p>
        </div>
        <div style="margin-top: 20px; padding: 20px; background-color: #ffffff; border-left: 4px solid #d97706;">
          <h3 style="color: #1a1a1a; margin-top: 0;">Mensaje:</h3>
          <p style="color: #4b5563; white-space: pre-wrap;">${message}</p>
        </div>
        ${montajeBlock}
        <div style="margin-top: 20px; padding: 15px; background-color: #f3f4f6; border-radius: 8px; font-size: 12px; color: #6b7280;">
          <p style="margin: 0;">Fecha: ${new Date().toLocaleString('es-ES', { timeZone: 'Europe/Madrid' })}</p>
        </div>
      </div>
    `;

    // Send email to admin
    const recipients = ['reformix.barcelona@gmail.com'];
    
    // Only send email if Resend is configured
    if (resend) {
      try {
        // For testing: use onboarding@resend.dev
        // For production: verify your domain in Resend dashboard and use your domain
        // Example: 'Reformix Barcelona <noreply@reformix.barcelona>'
        const fromEmail = process.env.RESEND_FROM_EMAIL || 'onboarding@resend.dev';
        
        await resend.emails.send({
          from: fromEmail,
          to: recipients,
          subject: emailSubject,
          html: emailHtml,
          replyTo: email,
        });
        console.log('Email sent successfully to:', recipients);
      } catch (emailError: any) {
        console.error('Error sending email:', emailError);
        // Log detailed error for debugging
        if (emailError.message) {
          console.error('Error message:', emailError.message);
        }
        // Still return success to user, but log the error
        // In production, you might want to handle this differently
      }
    } else {
      console.warn('RESEND_API_KEY not configured. Email not sent. Form submission logged only.');
      console.log('Would send email to:', recipients);
      console.log('Subject:', emailSubject);
    }

    return NextResponse.json(
      { 
        success: true,
        message: 'Gracias por contactarnos. Te responderemos lo antes posible.' 
      },
      { status: 200 }
    );
  } catch (error) {
    console.error('Error processing contact form:', error);
    Sentry.captureException(error);
    return NextResponse.json(
      { error: 'Hubo un error al procesar tu solicitud. Por favor, inténtalo de nuevo.' },
      { status: 500 }
    );
  }
}

