'use client';

import { useEffect } from 'react';
import Link from 'next/link';
import { HomeIcon, ExclamationTriangleIcon, ArrowPathIcon } from '@heroicons/react/24/outline';

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error('Error:', error);
  }, [error]);

  return (
    <div className="min-h-screen flex flex-col">
      <main className="flex-grow flex items-center justify-center px-4 py-16 sm:py-24">
        <div className="max-w-2xl w-full text-center">
          {/* Error Icon */}
          <div className="flex justify-center mb-8">
            <div className="relative">
              <div className="absolute inset-0 bg-red-500/20 rounded-full blur-3xl"></div>
              <div className="relative inline-flex items-center justify-center w-32 h-32 sm:w-40 sm:h-40 rounded-full bg-red-500/10">
                <ExclamationTriangleIcon className="w-16 h-16 sm:w-20 sm:h-20 text-red-500" />
              </div>
            </div>
          </div>

          {/* Title */}
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-brand-text-heading mb-4">
            Algo salió mal
          </h1>

          {/* Description */}
          <p className="text-base sm:text-lg text-brand-text-body mb-8 max-w-xl mx-auto leading-relaxed">
            Lo sentimos, ha ocurrido un error inesperado. Por favor, intenta recargar la página o vuelve al inicio.
          </p>

          {/* Error Details (only in development) */}
          {process.env.NODE_ENV === 'development' && error.message && (
            <div className="mb-8 p-4 bg-red-50 border border-red-200 rounded-lg text-left">
              <p className="text-sm font-mono text-red-800 break-all">
                {error.message}
              </p>
            </div>
          )}

          {/* Actions */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button
              onClick={reset}
              className="inline-flex items-center justify-center gap-2 rounded-md bg-brand-primary px-6 py-3 text-base font-semibold text-white shadow-sm hover:opacity-90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-primary transition-all duration-200 hover:scale-105"
            >
              <ArrowPathIcon className="w-5 h-5" />
              Intentar de nuevo
            </button>
            <Link
              href="/"
              className="inline-flex items-center justify-center gap-2 rounded-md bg-white border-2 border-brand-primary px-6 py-3 text-base font-semibold text-brand-primary shadow-sm hover:bg-brand-accent-neutral focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-primary transition-all duration-200 hover:scale-105"
            >
              <HomeIcon className="w-5 h-5" />
              Volver al inicio
            </Link>
          </div>
        </div>
      </main>
    </div>
  );
}

