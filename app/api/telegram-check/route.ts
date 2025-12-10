import { NextResponse } from 'next/server';

export async function GET() {
  const token = process.env.TELEGRAM_BOT_TOKEN;
  const chatId = process.env.TELEGRAM_CHAT_ID;
  const nodeEnv = process.env.NODE_ENV;

  return NextResponse.json({
    environment: nodeEnv,
    telegramConfigured: {
      token: token ? 'SET' : 'MISSING',
      chatId: chatId ? 'SET' : 'MISSING',
      tokenLength: token?.length || 0,
      chatIdValue: chatId || 'NOT_SET',
    },
    allEnvVars: {
      hasResend: !!process.env.RESEND_API_KEY,
      hasTelegramToken: !!process.env.TELEGRAM_BOT_TOKEN,
      hasTelegramChatId: !!process.env.TELEGRAM_CHAT_ID,
    },
  });
}

