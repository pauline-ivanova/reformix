'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { XMarkIcon, InformationCircleIcon } from '@heroicons/react/24/outline'
import {
  applyCookieConsent,
  defaultCookiePreferences,
  normalizeCookiePreferences,
  persistCookieConsent,
  readStoredCookieConsent,
  type CookiePreferences,
} from '@/lib/cookie-consent'

type CookieType = keyof Omit<CookiePreferences, 'necessary'>

export default function CookieConsent() {
  const [isVisible, setIsVisible] = useState(false)
  const [showSettings, setShowSettings] = useState(false)
  const [preferences, setPreferences] = useState<CookiePreferences>(defaultCookiePreferences)

  useEffect(() => {
    const stored = readStoredCookieConsent()
    if (stored) {
      setPreferences(stored)
      return
    }

    // Defer banner past LCP — show on interaction or after timeout
    const show = () => setIsVisible(true)
    const events = ['scroll', 'pointerdown', 'keydown', 'touchstart'] as const

    const onInteract = () => {
      show()
      cleanup()
    }

    for (const event of events) {
      window.addEventListener(event, onInteract, { once: true, passive: true })
    }

    const timer = window.setTimeout(() => {
      show()
      cleanup()
    }, 10000)

    function cleanup() {
      window.clearTimeout(timer)
      for (const event of events) {
        window.removeEventListener(event, onInteract)
      }
    }

    return cleanup
  }, [])

  useEffect(() => {
    const handleOpenCookieSettings = () => {
      setIsVisible(true)
      setShowSettings(true)
      const stored = readStoredCookieConsent()
      if (stored) setPreferences(stored)
    }

    window.addEventListener('openCookieSettings', handleOpenCookieSettings)
    return () => {
      window.removeEventListener('openCookieSettings', handleOpenCookieSettings)
    }
  }, [])

  const savePreferences = (prefs: CookiePreferences) => {
    const normalized = normalizeCookiePreferences(prefs)
    persistCookieConsent(normalized)
    applyCookieConsent(normalized)
    setPreferences(normalized)
    setIsVisible(false)
    setShowSettings(false)
  }

  const handleAcceptAll = () => {
    savePreferences({
      necessary: true,
      analytics: true,
      preferences: true,
      marketing: true,
    })
  }

  const handleAcceptNecessary = () => {
    savePreferences(defaultCookiePreferences())
  }

  const togglePreference = (type: CookieType) => {
    setPreferences((prev) => ({
      ...prev,
      necessary: true,
      [type]: !prev[type],
    }))
  }

  if (!isVisible) return null

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 p-4 md:p-6">
      <div className="mx-auto max-w-4xl">
        {!showSettings ? (
          <div className="bg-white rounded-lg shadow-2xl border border-gray-200 p-6 md:p-8">
            <div className="flex flex-col md:flex-row md:items-start gap-4">
              <div className="flex-shrink-0">
                <InformationCircleIcon className="w-8 h-8 text-brand-accent" />
              </div>
              <div className="flex-1">
                <h3 className="text-lg font-semibold text-brand-text-heading mb-2">
                  Uso de Cookies
                </h3>
                <p className="text-sm text-brand-text-body mb-4">
                  Utilizamos cookies propias y, en su caso, de terceros. Las técnicas son
                  necesarias. Análisis, preferencias y marketing (p. ej. Google Analytics /
                  Clarity) solo se activan con tu consentimiento. Puedes aceptar todas,
                  rechazar las no necesarias o personalizar. El cierre o la navegación no
                  equivalen a aceptar cookies no esenciales.{' '}
                  <Link
                    href="/cookies"
                    className="text-brand-accent hover:underline font-medium"
                    aria-label="Más información sobre cookies"
                  >
                    Más información sobre cookies
                  </Link>
                </p>
                <div className="flex flex-col sm:flex-row gap-3">
                  <button
                    type="button"
                    onClick={handleAcceptAll}
                    className="px-6 py-2.5 bg-brand-accent text-white rounded-md font-medium hover:bg-brand-accent-hover transition-colors text-sm"
                  >
                    Aceptar todas
                  </button>
                  <button
                    type="button"
                    onClick={handleAcceptNecessary}
                    className="px-6 py-2.5 bg-gray-100 text-brand-text-heading rounded-md font-medium hover:bg-gray-200 transition-colors text-sm"
                  >
                    Solo necesarias
                  </button>
                  <button
                    type="button"
                    onClick={() => setShowSettings(true)}
                    className="px-6 py-2.5 border border-gray-300 text-brand-text-heading rounded-md font-medium hover:bg-gray-50 transition-colors text-sm"
                  >
                    Personalizar
                  </button>
                </div>
              </div>
              <button
                type="button"
                onClick={handleAcceptNecessary}
                className="flex-shrink-0 text-gray-400 hover:text-gray-600 transition-colors"
                aria-label="Cerrar y aceptar solo cookies necesarias"
              >
                <XMarkIcon className="w-6 h-6" />
              </button>
            </div>
          </div>
        ) : (
          <div className="bg-white rounded-lg shadow-2xl border border-gray-200 p-6 md:p-8 max-h-[80vh] overflow-y-auto">
            <div className="mb-6">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-xl font-semibold text-brand-text-heading flex items-center gap-2">
                  <InformationCircleIcon className="w-6 h-6 text-brand-accent" />
                  Configuración de Cookies
                </h3>
                <button
                  type="button"
                  onClick={() => setShowSettings(false)}
                  className="text-gray-400 hover:text-gray-600 transition-colors"
                  aria-label="Volver"
                >
                  <XMarkIcon className="w-6 h-6" />
                </button>
              </div>
              <p className="text-sm text-brand-text-body">
                Activa o desactiva categorías. Las necesarias no se pueden desactivar.
              </p>
            </div>

            <div className="space-y-6 mb-6">
              <CookieToggle
                title="Cookies necesarias"
                description="Esenciales para el sitio (p. ej. recordar tu elección de cookies). No se pueden desactivar."
                checked={preferences.necessary}
                disabled
              />
              <CookieToggle
                title="Cookies de análisis"
                description="Nos ayudan a entender el uso del sitio (páginas, tiempo de visita, mapas de calor). Incluye Google Analytics 4 y Microsoft Clarity, si están configuradas."
                checked={preferences.analytics}
                onChange={() => togglePreference('analytics')}
              />
              <CookieToggle
                title="Cookies de preferencias"
                description="Recuerdan opciones que cambian el comportamiento o la apariencia del sitio."
                checked={preferences.preferences}
                onChange={() => togglePreference('preferences')}
              />
              <CookieToggle
                title="Cookies de marketing"
                description="Permiten medir campañas y mostrar anuncios relevantes (p. ej. Meta Pixel). Solo se cargan si las activas."
                checked={preferences.marketing}
                onChange={() => togglePreference('marketing')}
              />
            </div>

            <div className="flex flex-col sm:flex-row gap-3 pt-4 border-t border-gray-200">
              <button
                type="button"
                onClick={() => savePreferences(preferences)}
                className="flex-1 px-6 py-2.5 bg-brand-accent text-white rounded-md font-medium hover:bg-brand-accent-hover transition-colors"
              >
                Guardar preferencias
              </button>
              <Link
                href="/cookies"
                className="flex items-center justify-center gap-2 px-6 py-2.5 text-brand-accent hover:underline font-medium text-sm"
              >
                <InformationCircleIcon className="w-5 h-5" />
                Más información sobre cookies
              </Link>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

function CookieToggle({
  title,
  description,
  checked,
  disabled,
  onChange,
}: {
  title: string
  description: string
  checked: boolean
  disabled?: boolean
  onChange?: () => void
}) {
  return (
    <div className="border border-gray-200 rounded-lg p-4">
      <div className="flex items-start justify-between mb-2">
        <div className="flex-1">
          <h4 className="font-semibold text-brand-text-heading mb-1">{title}</h4>
          <p className="text-sm text-brand-text-body">{description}</p>
        </div>
        <label
          className={`relative inline-flex items-center ml-4 ${
            disabled ? 'cursor-not-allowed' : 'cursor-pointer'
          }`}
        >
          <input
            type="checkbox"
            checked={checked}
            disabled={disabled}
            onChange={onChange}
            className="sr-only peer"
          />
          <div
            className={`w-11 h-6 rounded-full peer peer-focus:outline-none peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-all ${
              checked ? 'bg-brand-accent' : 'bg-gray-300'
            }`}
          />
        </label>
      </div>
    </div>
  )
}
