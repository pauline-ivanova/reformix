'use client'

import * as Sentry from '@sentry/nextjs'
import { useEffect } from 'react'

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  useEffect(() => {
    Sentry.captureException(error)
  }, [error])

  return (
    <html lang="es">
      <body className="min-h-screen bg-white text-gray-900 antialiased">
        <main className="flex min-h-screen flex-col items-center justify-center px-4 py-16">
          <h1 className="mb-4 text-3xl font-bold sm:text-4xl">Algo salió mal</h1>
          <p className="mb-8 max-w-md text-center text-gray-600">
            Ha ocurrido un error inesperado. Puedes intentar de nuevo o volver al inicio.
          </p>
          <div className="flex flex-col gap-3 sm:flex-row">
            <button
              type="button"
              onClick={reset}
              className="rounded-md bg-amber-700 px-6 py-3 text-base font-semibold text-white hover:opacity-90"
            >
              Intentar de nuevo
            </button>
            <a
              href="/"
              className="rounded-md border-2 border-amber-700 px-6 py-3 text-center text-base font-semibold text-amber-800 hover:bg-amber-50"
            >
              Volver al inicio
            </a>
          </div>
        </main>
      </body>
    </html>
  )
}
