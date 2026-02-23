import { NextResponse } from 'next/server';

export async function GET() {
  const token = process.env.TELEGRAM_BOT_TOKEN;
  const chatId = process.env.TELEGRAM_CHAT_ID;

  if (!token || !chatId) {
    return NextResponse.json({
      error: 'Missing env vars',
      token: token ? 'SET' : 'MISSING',
      chatId: chatId ? 'SET' : 'MISSING'
    }, { status: 400 });
  }

  try {
    const url = `https://api.telegram.org/bot${token}/sendMessage`;
    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        chat_id: chatId,
        text: "🔔 Test message from Reformix Barcelona\n\nIf you see this, the bot is working!",
      }),
    });

    const data = await response.json();

    return NextResponse.json({
      success: response.ok,
      telegramResponse: data,
      debug: {
        chatIdUsed: chatId,
        tokenPrefix: token.substring(0, 5) + '...'
      }
    });
  } catch (error: any) {
    return NextResponse.json({
      success: false,
      error: error.message
    }, { status: 500 });
  }
}
