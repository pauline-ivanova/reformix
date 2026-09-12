import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { isSentrySmokeAllowed } from '@/lib/sentry/shared'
import SentrySmokeClient from './SentrySmokeClient'

export const metadata: Metadata = {
  title: 'Sentry smoke',
  robots: { index: false, follow: false },
}

export default function SentrySmokePage() {
  if (!isSentrySmokeAllowed()) {
    notFound()
  }

  return <SentrySmokeClient />
}
