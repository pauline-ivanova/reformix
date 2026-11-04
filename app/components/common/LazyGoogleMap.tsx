'use client'

import { useState } from 'react'
import { MapPinIcon } from '@heroicons/react/24/outline'

const MAP_EMBED_SRC =
  'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2992.5!2d2.120084!3d41.526423!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12a4957449e543b3%3A0xaf29167c9c57be09!2sReformas%20IriSmile!5e0!3m2!1ses!2ses!4v1700000000000!5m2!1ses!2ses'

type LazyGoogleMapProps = {
  title?: string
  className?: string
  height?: number
}

/**
 * Click-to-load Maps facade — avoids pulling ~1.5MB of maps JS during Lighthouse /
 * initial navigation. iframe only mounts after an explicit user gesture.
 */
export default function LazyGoogleMap({
  title = 'Ubicación de Reformix Barcelona en Sabadell',
  className = 'rounded-lg',
  height = 400,
}: LazyGoogleMapProps) {
  const [active, setActive] = useState(false)

  if (active) {
    return (
      <iframe
        src={MAP_EMBED_SRC}
        width="100%"
        height={height}
        style={{ border: 0 }}
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        className={className}
        title={title}
      />
    )
  }

  return (
    <button
      type="button"
      onClick={() => setActive(true)}
      className={`${className} relative flex w-full flex-col items-center justify-center gap-3 bg-white/10 text-white transition-colors hover:bg-white/15 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white`}
      style={{ height }}
      aria-label="Cargar mapa de Google"
    >
      <MapPinIcon className="h-10 w-10" aria-hidden="true" />
      <span className="text-sm font-semibold tracking-wide">Cargar mapa</span>
      <span className="max-w-xs px-4 text-center text-xs text-white/80">
        Carrer de Concepción Arenal, 100 · Sabadell
      </span>
    </button>
  )
}
