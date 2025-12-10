'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'

// Inline SVG icons to avoid loading @heroicons/react bundle
const Bars3Icon = ({ className }: { className?: string }) => (
  <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
  </svg>
)

const HomeIcon = ({ className }: { className?: string }) => (
  <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
  </svg>
)

const WrenchScrewdriverIcon = ({ className }: { className?: string }) => (
  <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11.42 15.17L17.25 21A2.652 2.652 0 0021 17.25l-5.877-5.877M11.42 15.17l2.496-3.03c.317-.384.74-.626 1.208-.766M11.42 15.17l-4.655-5.653a2.548 2.548 0 00-4.005 4.005l4.655 5.653m0 0l3.59-3.59m0 0a2.548 2.548 0 004.005-4.005m-4.005 4.005V9.75" />
  </svg>
)

const HomeModernIcon = ({ className }: { className?: string }) => (
  <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.25 21v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21m0 0h4.5V3.545M12.75 21h7.5V10.75M2.25 21h1.5m18 0h-18M2.25 9l4.5-1.636M18.75 3l-1.5.545m0 3.75l-1.5.545M18.75 3l-1.5.545m0 3.75l-1.5.545M9.75 9l-1.5.545M10.5 7.5l-1.5.545M4.5 21h9M3.75 9H7.5m-1.5 3h6m-6 3h6m-3-9v3m0 0v3m0-3h3m-3 0h3" />
  </svg>
)

const BuildingOfficeIcon = ({ className }: { className?: string }) => (
  <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.75 21h16.5M4.5 3h15m-15 18v-8.25c0-.621.504-1.125 1.125-1.125h12.75c.621 0 1.125.504 1.125 1.125V21M4.5 3v8.25m0-8.25H3m1.5 0h15m-15 0v8.25m0-8.25H3m13.5 0v8.25m0-8.25h-3m3 0h3m-9 0v8.25m0-8.25h-1.5m1.5 0h1.5" />
  </svg>
)

// Dynamic import for DesktopMenu - it uses heavy @headlessui/react, defer loading
import dynamic from 'next/dynamic';
import MobileMenu from './MobileMenu';

// Defer DesktopMenu loading until after page is interactive to reduce TBT
const DesktopMenu = dynamic(() => import('./DesktopMenu'), {
  ssr: false, // Defer @headlessui/react bundle loading
  loading: () => null, // No placeholder to avoid any JS execution
});

const navigation = [
  { 
    name: 'Reformas Integrales', 
    href: '/reformas-integrales',
    icon: HomeModernIcon,
    subservices: [
      { name: 'Reformas Integrales de Pisos', href: '/reformas-integrales-pisos' },
      { name: 'Rehabilitación de Casas', href: '/rehabilitacion-casas' },
      { name: 'Interiorismo en Colaboración', href: '/interiorismo-colaboracion' },
    ],
  },
  { 
    name: 'Reformas por Estancia', 
    href: '/reformas-por-estancia',
    icon: HomeIcon,
    subservices: [
      { name: 'Reformas de Cocinas', href: '/reformas-cocinas' },
      { name: 'Reformas de Baños', href: '/reformas-banos' },
      { name: 'Reformas de Salones', href: '/reformas-salones' },
      { name: 'Reformas de Habitaciones', href: '/reformas-habitaciones' },
      { name: 'Reformas de Terrazas y Balcones', href: '/reformas-terrazas-balcones' },
      { name: 'Reformas de Recibidores', href: '/reformas-recibidores' },
    ],
  },
  { 
    name: 'Servicios Técnicos', 
    href: '/servicios-tecnicos',
    icon: WrenchScrewdriverIcon,
    subservices: [
      { name: 'Aislamiento Térmico y Acústico', href: '/aislamiento-termico-acustico' },
      { name: 'Pladur y Falsos Techos', href: '/pladur' },
      { name: 'Carpintería', href: '/carpinteria' },
      { name: 'Fontanería', href: '/fontaneria' },
      { name: 'Electricidad', href: '/electricidad' },
      { name: 'Pintura Interior', href: '/pintura-interior' },
      { name: 'Albañilería', href: '/albanileria' },
      { name: 'Calefacción y Climatización', href: '/calefaccion-climatizacion' },
      { name: 'Impermeabilizaciones', href: '/impermeabilizaciones' },
    ],
  },
  { 
    name: 'Reformas Comerciales', 
    href: '/reformas-comerciales',
    icon: BuildingOfficeIcon,
    subservices: [
      { name: 'Reformas de Oficinas', href: '/reformas-oficinas' },
      { name: 'Locales Comerciales y Retail', href: '/locales-comerciales-retail' },
      { name: 'Restaurantes y Bares', href: '/restaurantes-bares' },
      { name: 'Clínicas y Centros Sanitarios', href: '/clinicas-centros-sanitarios' },
      { name: 'Gimnasios y Centros Deportivos', href: '/gimnasios-centros-deportivos' },
      { name: 'Hoteles y Alojamientos', href: '/hoteles-alojamientos' },
    ],
  },
]

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [shouldLoadDesktopMenu, setShouldLoadDesktopMenu] = useState(false)

  // Defer DesktopMenu loading until after initial render to reduce TBT
  useEffect(() => {
    // Only load on desktop viewport
    if (typeof window !== 'undefined' && window.innerWidth >= 1024) {
      // Load after a short delay to allow critical content to render first
      // Use requestIdleCallback for better performance, but with shorter timeout
      const loadMenu = () => {
        setShouldLoadDesktopMenu(true);
      };

      if ('requestIdleCallback' in window) {
        (window as any).requestIdleCallback(loadMenu, { timeout: 1500 });
      } else {
        // Fallback: load after DOMContentLoaded
        if (document.readyState === 'loading') {
          document.addEventListener('DOMContentLoaded', () => {
            setTimeout(loadMenu, 500);
          });
        } else {
          setTimeout(loadMenu, 500);
        }
      }
    }
  }, []);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm">
      <nav className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8" aria-label="Global">
        <div className="flex lg:flex-1">
          <Link href="/" className="-m-1.5 p-1.5 flex items-center">
            <Image
              src="/reformix-logo.svg"
              alt="Reformix Barcelona"
              width={150}
              height={40}
              className="h-10 w-auto"
              priority
            />
          </Link>
        </div>
        <div className="flex lg:hidden">
          <button
            type="button"
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-brand-text-heading"
            onClick={() => setMobileMenuOpen(true)}
          >
            <span className="sr-only">Abrir menú principal</span>
            <Bars3Icon className="h-6 w-6" />
          </button>
        </div>
        {/* Desktop menu - lazy loaded, only renders when visible, deferred until interactive */}
        <div className="hidden lg:flex lg:gap-x-10 lg:flex-shrink-0">
          {shouldLoadDesktopMenu && <DesktopMenu navigation={navigation} />}
        </div>
        <div className="hidden lg:flex lg:flex-1 lg:justify-end lg:ml-6 lg:flex-shrink-0">
          <Link
            href="/contacto"
            className="group relative rounded-lg bg-brand-primary px-4 py-2.5 xl:px-6 text-sm font-semibold text-white shadow-md hover:shadow-lg hover:bg-brand-primary/95 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-primary transition-all duration-200 overflow-hidden whitespace-nowrap"
          >
            <span className="relative z-10">Presupuesto Gratis</span>
            <span className="absolute inset-0 bg-gradient-to-r from-brand-accent to-brand-primary opacity-0 group-hover:opacity-100 transition-opacity duration-200"></span>
          </Link>
        </div>
      </nav>
      {mobileMenuOpen && (
        <MobileMenu 
          mobileMenuOpen={mobileMenuOpen} 
          setMobileMenuOpen={setMobileMenuOpen}
          navigation={navigation}
        />
      )}
    </header>
  )
}

