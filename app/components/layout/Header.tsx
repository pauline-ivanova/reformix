'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import CtaLink from '@/app/components/analytics/CtaLink'

// Inline SVG icons to avoid loading @heroicons/react bundle
const Bars3Icon = ({ className }: { className?: string }) => (
  <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
  </svg>
)

/** Llave en mano — reforma integral completa */
const KeyIcon = ({ className }: { className?: string }) => (
  <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.75 5.25a3 3 0 013 3m3 0a6 6 0 01-7.029 5.912c-.563-.097-1.159.026-1.563.43L10.5 17.25H8.25v2.25H6v2.25H2.25v-2.818c0-.597.237-1.17.659-1.591l6.499-6.499c.404-.404.527-1 .43-1.563A6 6 0 1121.75 8.25z" />
  </svg>
)

/** Cuadrícula de estancias — cocina, baño, salón… */
const Squares2X2Icon = ({ className }: { className?: string }) => (
  <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.75 6A2.25 2.25 0 016 3.75h2.25A2.25 2.25 0 0110.5 6v2.25a2.25 2.25 0 01-2.25 2.25H6a2.25 2.25 0 01-2.25-2.25V6zM3.75 15.75A2.25 2.25 0 016 13.5h2.25a2.25 2.25 0 012.25 2.25V18a2.25 2.25 0 01-2.25 2.25H6A2.25 2.25 0 013.75 18v-2.25zM13.5 6a2.25 2.25 0 012.25-2.25H18A2.25 2.25 0 0120.25 6v2.25A2.25 2.25 0 0118 10.5h-2.25a2.25 2.25 0 01-2.25-2.25V6zM13.5 15.75a2.25 2.25 0 012.25-2.25H18a2.25 2.25 0 012.25 2.25V18A2.25 2.25 0 0118 20.25h-2.25A2.25 2.25 0 0113.5 18v-2.25z" />
  </svg>
)

/** Oficios e instalaciones técnicas */
const WrenchScrewdriverIcon = ({ className }: { className?: string }) => (
  <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11.42 15.17L17.25 21A2.652 2.652 0 0021 17.25l-5.877-5.877M11.42 15.17l2.496-3.03c.317-.384.74-.626 1.208-.766M11.42 15.17l-4.655-5.653a2.548 2.548 0 00-4.005 4.005l4.655 5.653m0 0l3.59-3.59m0 0a2.548 2.548 0 004.005-4.005m-4.005 4.005V9.75" />
  </svg>
)

/** Local / retail / negocio */
const BuildingStorefrontIcon = ({ className }: { className?: string }) => (
  <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.5 21v-7.5a.75.75 0 01.75-.75h3a.75.75 0 01.75.75V21m-4.5 0H2.36m11.14 0H18m0 0h3.64m-1.39 0V9.349M3.75 21V9.349m0 0a3.001 3.001 0 004.501-.189.75.75 0 01.926-.53 3 3 0 004.5 0 .75.75 0 01.926.53A3 3 0 0018.75 9.35M3.75 9.349V4.875c0-.621.504-1.125 1.125-1.125H9.75v2.25c0 .621.504 1.125 1.125 1.125h2.25c.621 0 1.125-.504 1.125-1.125V3.75h4.875c.621 0 1.125.504 1.125 1.125v4.599" />
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
    icon: KeyIcon,
    subservices: [
      { name: 'Reformas Integrales de Pisos', href: '/reformas-integrales-pisos' },
      { name: 'Rehabilitación de Casas', href: '/rehabilitacion-casas' },
      { name: 'Interiorismo en Colaboración', href: '/interiorismo-colaboracion' },
    ],
  },
  { 
    name: 'Reformas por Estancia', 
    href: '/reformas-por-estancia',
    icon: Squares2X2Icon,
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
      { name: 'Alicatado y Solados', href: '/alicatado' },
      { name: 'Pladur y Falsos Techos', href: '/pladur' },
      { name: 'Ventanas y Aluminio', href: '/ventanas' },
      { name: 'Pintura Interior', href: '/pintura-interior' },
      { name: 'Instalación de papel pintado', href: '/instalacion-papel-pintado' },
      { name: 'Aislamiento Térmico y Acústico', href: '/aislamiento-termico-acustico' },
      { name: 'Fontanería', href: '/fontaneria' },
      { name: 'Electricidad', href: '/electricidad' },
      { name: 'Calefacción y Climatización', href: '/calefaccion-climatizacion' },
      { name: 'Carpintería', href: '/carpinteria' },
      { name: 'Albañilería', href: '/albanileria' },
      { name: 'Impermeabilizaciones', href: '/impermeabilizaciones' },
      { name: 'Montaje de Muebles y Cocinas', href: '/montaje-muebles-cocinas' },
    ],
  },
  { 
    name: 'Reformas Comerciales', 
    href: '/reformas-comerciales',
    icon: BuildingStorefrontIcon,
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
        <div className="hidden lg:flex lg:flex-1 lg:justify-end lg:ml-6 lg:flex-shrink-0 lg:items-center">
          <CtaLink
            href="/contacto"
            ctaId="header_presupuesto"
            className="group relative rounded-lg bg-brand-primary px-4 py-2.5 xl:px-6 text-sm font-semibold text-white shadow-md hover:shadow-lg hover:bg-brand-primary/95 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-primary transition-all duration-200 overflow-hidden whitespace-nowrap"
          >
            <span className="relative z-10">Presupuesto Gratis</span>
            <span className="absolute inset-0 bg-gradient-to-r from-brand-accent to-brand-primary opacity-0 group-hover:opacity-100 transition-opacity duration-200"></span>
          </CtaLink>
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

