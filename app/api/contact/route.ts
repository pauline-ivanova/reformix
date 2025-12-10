import { NextRequest, NextResponse } from 'next/server';
import { Resend } from 'resend';

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
  console.log('Attempting to send Telegram notification...');
  console.log('TELEGRAM_BOT_TOKEN exists:', !!TELEGRAM_BOT_TOKEN);
  console.log('TELEGRAM_CHAT_ID exists:', !!TELEGRAM_CHAT_ID);
  
  if (!TELEGRAM_BOT_TOKEN || !TELEGRAM_CHAT_ID) {
    console.warn('Telegram credentials not configured. Telegram notification not sent.');
    console.warn('TELEGRAM_BOT_TOKEN:', TELEGRAM_BOT_TOKEN ? 'SET' : 'MISSING');
    console.warn('TELEGRAM_CHAT_ID:', TELEGRAM_CHAT_ID ? 'SET' : 'MISSING');
    return;
  }

  try {
    // Escape special Markdown characters to avoid parsing errors
    const escapeMarkdown = (text: string) => {
      return text.replace(/([_*\[\]()~`>#+\-=|{}.!])/g, '\\$1');
    };

    const telegramMessage = `
🔔 *Nuevo contacto desde reformix.barcelona*

👤 *Nombre:* ${escapeMarkdown(data.name)}
📧 *Email:* ${escapeMarkdown(data.email)}
📱 *Teléfono:* ${escapeMarkdown(data.phone)}
${data.service ? `🔧 *Servicio:* ${escapeMarkdown(data.service)}` : ''}

💬 *Mensaje:*
${escapeMarkdown(data.message)}

⏰ *Fecha:* ${escapeMarkdown(new Date().toLocaleString('es-ES', { timeZone: 'Europe/Madrid' }))}
    `.trim();

    const url = `https://api.telegram.org/bot${TELEGRAM_BOT_TOKEN}/sendMessage`;
    
    console.log('Sending to Telegram API:', url.replace(TELEGRAM_BOT_TOKEN, 'TOKEN_HIDDEN'));
    console.log('Chat ID:', TELEGRAM_CHAT_ID);
    
    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        chat_id: TELEGRAM_CHAT_ID,
        text: telegramMessage,
        parse_mode: 'Markdown',
      }),
    });

    const responseData = await response.json();
    
    if (!response.ok) {
      console.error('Telegram API error:', response.status, responseData);
      throw new Error(`Telegram API error: ${response.status} - ${JSON.stringify(responseData)}`);
    }

    console.log('Telegram notification sent successfully:', responseData);
  } catch (error: any) {
    console.error('Error sending Telegram notification:', error);
    console.error('Error details:', error.message);
    // Don't throw - we don't want to fail the entire request if Telegram fails
  }
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, email, phone, message, service } = body;

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

    // Send Telegram notification (non-blocking)
    sendTelegramNotification({
      name,
      email,
      phone,
      service,
      message,
    }).catch((error) => {
      console.error('Failed to send Telegram notification:', error);
    });

    // Send email notification to both addresses
    const emailSubject = `Nuevo contacto desde la web: ${name}`;
    const emailHtml = `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
        <h2 style="color: #1a1a1a; border-bottom: 2px solid #d97706; padding-bottom: 10px;">
          Nuevo contacto desde reformix.barcelona
        </h2>
        <div style="background-color: #f9fafb; padding: 20px; border-radius: 8px; margin-top: 20px;">
          <p style="margin: 10px 0;"><strong>Nombre:</strong> ${name}</p>
          <p style="margin: 10px 0;"><strong>Email:</strong> <a href="mailto:${email}">${email}</a></p>
          <p style="margin: 10px 0;"><strong>Teléfono:</strong> ${phone}</p>
          <p style="margin: 10px 0;"><strong>Servicio:</strong> ${service || 'No especificado'}</p>
        </div>
        <div style="margin-top: 20px; padding: 20px; background-color: #ffffff; border-left: 4px solid #d97706;">
          <h3 style="color: #1a1a1a; margin-top: 0;">Mensaje:</h3>
          <p style="color: #4b5563; white-space: pre-wrap;">${message}</p>
        </div>
        <div style="margin-top: 20px; padding: 15px; background-color: #f3f4f6; border-radius: 8px; font-size: 12px; color: #6b7280;">
          <p style="margin: 0;">Fecha: ${new Date().toLocaleString('es-ES', { timeZone: 'Europe/Madrid' })}</p>
        </div>
      </div>
    `;

    // Send email to both addresses
    const recipients = ['info@reformix.barcelona', 'reformix.barcelona@gmail.com'];
    
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
    return NextResponse.json(
      { error: 'Hubo un error al procesar tu solicitud. Por favor, inténtalo de nuevo.' },
      { status: 500 }
    );
  }
}

