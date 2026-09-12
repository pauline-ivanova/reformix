'use client'

import * as Sentry from '@sentry/nextjs'
import { useState } from 'react'

/** Client smoke controls — parent page is gated + noindex. */
export default function SentrySmokeClient() {
  const [status, setStatus] = useState<string | null>(null)

  return (
    <main className="mx-auto max-w-lg px-4 py-16">
      <h1 className="mb-2 text-2xl font-bold text-brand-text-heading">Sentry smoke (client)</h1>
      <p className="mb-6 text-sm text-brand-text-body">
        Solo preview / local. No uses en producción.
      </p>
      <div className="flex flex-col gap-3">
        <button
          type="button"
          className="rounded-md bg-brand-primary px-4 py-2 font-semibold text-white"
          onClick={async () => {
            Sentry.captureException(
              new Error('Reformix Sentry smoke: intentional client error'),
            )
            await Sentry.flush(2000)
            setStatus('captureException enviado — revisa Issues en Sentry')
          }}
        >
          Capturar error (sin crash)
        </button>
        <button
          type="button"
          className="rounded-md border-2 border-brand-primary px-4 py-2 font-semibold text-brand-primary"
          onClick={() => {
            throw new Error('Reformix Sentry smoke: intentional client throw')
          }}
        >
          Throw (error boundary)
        </button>
        <button
          type="button"
          className="rounded-md border border-gray-300 px-4 py-2 text-sm"
          onClick={async () => {
            const res = await fetch('/api/sentry-smoke?side=capture', { method: 'POST' })
            const data = await res.json()
            setStatus(JSON.stringify(data))
          }}
        >
          POST server capture
        </button>
      </div>
      {status && <p className="mt-4 text-sm text-brand-text-body">{status}</p>}
    </main>
  )
}
