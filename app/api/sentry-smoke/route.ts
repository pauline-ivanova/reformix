import * as Sentry from '@sentry/nextjs'
import { NextRequest, NextResponse } from 'next/server'
import { isSentrySmokeAllowed } from '@/lib/sentry/shared'

/**
 * Non-prod smoke for Sentry (server).
 * POST ?side=server — throws (captured by onRequestError / SDK)
 * POST ?side=capture — captureException without crashing the route
 * GET — status / instructions
 */
export async function GET() {
  if (!isSentrySmokeAllowed()) {
    return NextResponse.json({ error: 'Not available' }, { status: 404 })
  }

  return NextResponse.json({
    ok: true,
    enabled: Boolean(process.env.NEXT_PUBLIC_SENTRY_DSN),
    vercelEnv: process.env.VERCEL_ENV ?? null,
    nodeEnv: process.env.NODE_ENV,
    usage: {
      serverThrow: 'POST /api/sentry-smoke?side=server',
      serverCapture: 'POST /api/sentry-smoke?side=capture',
      clientPage: '/sentry-smoke',
    },
  })
}

export async function POST(request: NextRequest) {
  if (!isSentrySmokeAllowed()) {
    return NextResponse.json({ error: 'Not available' }, { status: 404 })
  }

  const side = request.nextUrl.searchParams.get('side') ?? 'capture'

  if (side === 'server') {
    throw new Error('Reformix Sentry smoke: intentional server error')
  }

  const err = new Error('Reformix Sentry smoke: intentional captureException')
  Sentry.captureException(err)
  await Sentry.flush(2000)

  return NextResponse.json({
    ok: true,
    side: 'capture',
    message: 'Event sent (check Sentry Issues)',
  })
}
