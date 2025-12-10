'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { XMarkIcon, InformationCircleIcon } from '@heroicons/react/24/outline'

type CookieType = 'necessary' | 'analytics' | 'preferences'

interface CookiePreferences {
  necessary: boolean
  analytics: boolean
  preferences: boolean
}

export default function CookieConsent() {
  const [isVisible, setIsVisible] = useState(false)
  const [showSettings, setShowSettings] = useState(false)
  const [preferences, setPreferences] = useState<CookiePreferences>({
    necessary: true, // Always true, cannot be disabled
    analytics: false,
    preferences: false,
  })

  useEffect(() => {
    // Check if consent has been given previously
    const consent = localStorage.getItem('cookie-consent')
    if (!consent) {
      // Show banner after a short delay
      setTimeout(() => setIsVisible(true), 500)
    } else {
      // Load saved preferences
      try {
        const savedPreferences = JSON.parse(consent)
        setPreferences(savedPreferences)
      } catch (e) {
        // If parsing fails, show banner again
        setIsVisible(true)
      }
    }

    // Listen for custom event to open cookie settings
    const handleOpenCookieSettings = () => {
      setIsVisible(true)
      setShowSettings(true)
      // Load current preferences if they exist
      const savedConsent = localStorage.getItem('cookie-consent')
      if (savedConsent) {
        try {
          const savedPreferences = JSON.parse(savedConsent)
          setPreferences(savedPreferences)
        } catch (e) {
          // Ignore parse errors
        }
      }
    }

    window.addEventListener('openCookieSettings', handleOpenCookieSettings)

    return () => {
      window.removeEventListener('openCookieSettings', handleOpenCookieSettings)
    }
  }, [])

  const handleAcceptAll = () => {
    const allAccepted: CookiePreferences = {
      necessary: true,
      analytics: true,
      preferences: true,
    }
    savePreferences(allAccepted)
  }

  const handleAcceptNecessary = () => {
    const necessaryOnly: CookiePreferences = {
      necessary: true,
      analytics: false,
      preferences: false,
    }
    savePreferences(necessaryOnly)
  }

  const handleSavePreferences = () => {
    savePreferences(preferences)
  }

  const savePreferences = (prefs: CookiePreferences) => {
    localStorage.setItem('cookie-consent', JSON.stringify(prefs))
    localStorage.setItem('cookie-consent-date', new Date().toISOString())
    setIsVisible(false)
    setShowSettings(false)
    
    // Here you would typically initialize analytics or other services based on preferences
    if (prefs.analytics) {
      // Initialize analytics (e.g., Google Analytics)
      // Example: gtag('consent', 'update', { analytics_storage: 'granted' })
    }
  }

  const togglePreference = (type: CookieType) => {
    if (type === 'necessary') return // Cannot disable necessary cookies
    setPreferences((prev) => ({
      ...prev,
      [type]: !prev[type],
    }))
  }

  if (!isVisible) return null

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 p-4 md:p-6">
      <div className="mx-auto max-w-4xl">
        {!showSettings ? (
          // Main Cookie Banner
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
                  Utilizamos cookies para mejorar tu experiencia, analizar el tráfico del sitio y personalizar el contenido. 
                  Al hacer clic en "Aceptar todas", aceptas el uso de todas las cookies. 
                  Puedes gestionar tus preferencias en cualquier momento.{' '}
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
                    onClick={handleAcceptAll}
                    className="px-6 py-2.5 bg-brand-accent text-white rounded-md font-medium hover:bg-brand-accent-hover transition-colors text-sm"
                  >
                    Aceptar todas
                  </button>
                  <button
                    onClick={handleAcceptNecessary}
                    className="px-6 py-2.5 bg-gray-100 text-brand-text-heading rounded-md font-medium hover:bg-gray-200 transition-colors text-sm"
                  >
                    Solo necesarias
                  </button>
                  <button
                    onClick={() => setShowSettings(true)}
                    className="px-6 py-2.5 border border-gray-300 text-brand-text-heading rounded-md font-medium hover:bg-gray-50 transition-colors text-sm"
                  >
                    Personalizar
                  </button>
                </div>
              </div>
              <button
                onClick={() => setIsVisible(false)}
                className="flex-shrink-0 text-gray-400 hover:text-gray-600 transition-colors"
                aria-label="Cerrar"
              >
                <XMarkIcon className="w-6 h-6" />
              </button>
            </div>
          </div>
        ) : (
          // Cookie Settings Panel
          <div className="bg-white rounded-lg shadow-2xl border border-gray-200 p-6 md:p-8 max-h-[80vh] overflow-y-auto">
            <div className="mb-6">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-xl font-semibold text-brand-text-heading flex items-center gap-2">
                  <InformationCircleIcon className="w-6 h-6 text-brand-accent" />
                  Configuración de Cookies
                </h3>
                <button
                  onClick={() => setShowSettings(false)}
                  className="text-gray-400 hover:text-gray-600 transition-colors"
                  aria-label="Cerrar"
                >
                  <XMarkIcon className="w-6 h-6" />
                </button>
              </div>
              <p className="text-sm text-brand-text-body">
                Puedes activar o desactivar las cookies según tus preferencias. 
                Las cookies necesarias no se pueden desactivar ya que son esenciales para el funcionamiento del sitio.
              </p>
            </div>

            <div className="space-y-6 mb-6">
              {/* Necessary Cookies */}
              <div className="border border-gray-200 rounded-lg p-4">
                <div className="flex items-start justify-between mb-2">
                  <div className="flex-1">
                    <h4 className="font-semibold text-brand-text-heading mb-1">
                      Cookies Necesarias
                    </h4>
                    <p className="text-sm text-brand-text-body">
                      Estas cookies son esenciales para que el sitio web funcione correctamente. 
                      No se pueden desactivar.
                    </p>
                  </div>
                  <label className="relative inline-flex items-center cursor-pointer ml-4">
                    <input
                      type="checkbox"
                      checked={preferences.necessary}
                      disabled
                      className="sr-only peer"
                    />
                    <div className="w-11 h-6 bg-brand-accent peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-all"></div>
                  </label>
                </div>
              </div>

              {/* Analytics Cookies */}
              <div className="border border-gray-200 rounded-lg p-4">
                <div className="flex items-start justify-between mb-2">
                  <div className="flex-1">
                    <h4 className="font-semibold text-brand-text-heading mb-1">
                      Cookies de Análisis
                    </h4>
                    <p className="text-sm text-brand-text-body">
                      Estas cookies nos ayudan a entender cómo los visitantes interactúan con nuestro sitio web, 
                      proporcionándonos información sobre las áreas visitadas y el tiempo de permanencia.
                    </p>
                  </div>
                  <label className="relative inline-flex items-center cursor-pointer ml-4">
                    <input
                      type="checkbox"
                      checked={preferences.analytics}
                      onChange={() => togglePreference('analytics')}
                      className="sr-only peer"
                    />
                    <div className={`w-11 h-6 rounded-full peer peer-focus:outline-none peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-all ${
                      preferences.analytics 
                        ? 'bg-brand-accent' 
                        : 'bg-gray-300'
                    }`}></div>
                  </label>
                </div>
              </div>

              {/* Preferences Cookies */}
              <div className="border border-gray-200 rounded-lg p-4">
                <div className="flex items-start justify-between mb-2">
                  <div className="flex-1">
                    <h4 className="font-semibold text-brand-text-heading mb-1">
                      Cookies de Preferencias
                    </h4>
                    <p className="text-sm text-brand-text-body">
                      Estas cookies permiten que el sitio web recuerde información que cambia la forma 
                      en que el sitio se comporta o se ve, como tu idioma preferido.
                    </p>
                  </div>
                  <label className="relative inline-flex items-center cursor-pointer ml-4">
                    <input
                      type="checkbox"
                      checked={preferences.preferences}
                      onChange={() => togglePreference('preferences')}
                      className="sr-only peer"
                    />
                    <div className={`w-11 h-6 rounded-full peer peer-focus:outline-none peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-all ${
                      preferences.preferences 
                        ? 'bg-brand-accent' 
                        : 'bg-gray-300'
                    }`}></div>
                  </label>
                </div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-3 pt-4 border-t border-gray-200">
              <button
                onClick={handleSavePreferences}
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

