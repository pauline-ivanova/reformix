'use client'

import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { openCookieSettings } from '@/lib/cookie-utils'

// Inline SVG icons to avoid loading @heroicons/react bundle
const EnvelopeIcon = ({ className }: { className?: string }) => (
  <svg className={className} fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" aria-hidden="true">
    <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
  </svg>
)

const PhoneIcon = ({ className }: { className?: string }) => (
  <svg className={className} fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" aria-hidden="true">
    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
  </svg>
)

const ChevronDownIcon = ({ className }: { className?: string }) => (
  <svg className={className} fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" aria-hidden="true">
    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
  </svg>
)

const Cog6ToothIcon = ({ className }: { className?: string }) => (
  <svg className={className} fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" aria-hidden="true">
    <path strokeLinecap="round" strokeLinejoin="round" d="M9.594 3.94c.09-.542.56-.94 1.11-.94h2.593c.55 0 1.02.398 1.11.94l.213 1.281c.063.374.313.686.645.87.074.04.147.083.22.127.324.196.72.257 1.075.124l1.217-.456a1.125 1.125 0 011.37.49l1.296 2.247a1.125 1.125 0 01-.26 1.431l-1.003.827c-.293.24-.438.613-.431.992a6.759 6.759 0 010 .255c-.007.378.138.75.43.99l1.005.828c.424.35.534.954.26 1.43l-1.298 2.247a1.125 1.125 0 01-1.369.491l-1.217-.456c-.355-.133-.75-.072-1.076.124a6.57 6.57 0 01-.22.128c-.331.183-.581.495-.644.869l-.213 1.28c-.09.543-.56.941-1.11.941h-2.594c-.55 0-1.02-.398-1.11-.94l-.213-1.281c-.062-.374-.312-.686-.644-.87a6.52 6.52 0 01-.22-.127c-.325-.196-.72-.257-1.076-.124l-1.217.456a1.125 1.125 0 01-1.369-.49l-1.297-2.247a1.125 1.125 0 01.26-1.431l1.004-.827c.292-.24.437-.613.43-.992a6.932 6.932 0 010-.255c.007-.378-.138-.75-.43-.99l-1.004-.828a1.125 1.125 0 01-.26-1.43l1.297-2.247a1.125 1.125 0 011.37-.491l1.216.456c.356.133.751.072 1.076-.124.072-.044.146-.087.22-.128.332-.183.582-.495.644-.869l.214-1.281z" />
    <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
  </svg>
)

const navigation = {
  reformasIntegrales: {
    title: 'Reformas Integrales',
    main: { name: 'Reformas Integrales', href: '/reformas-integrales' },
    subservices: [
      { name: 'Reformas Integrales de Pisos', href: '/reformas-integrales-pisos' },
      { name: 'Rehabilitación de Casas', href: '/rehabilitacion-casas' },
      { name: 'Interiorismo en Colaboración', href: '/interiorismo-colaboracion' },
    ],
  },
  reformasEstancia: {
    title: 'Reformas por Estancia',
    main: { name: 'Reformas por Estancia', href: '/reformas-por-estancia' },
    subservices: [
      { name: 'Reformas de Cocinas', href: '/reformas-cocinas' },
      { name: 'Reformas de Baños', href: '/reformas-banos' },
      { name: 'Reformas de Salones', href: '/reformas-salones' },
      { name: 'Reformas de Habitaciones', href: '/reformas-habitaciones' },
      { name: 'Reformas de Terrazas y Balcones', href: '/reformas-terrazas-balcones' },
      { name: 'Reformas de Recibidores', href: '/reformas-recibidores' },
    ],
  },
  serviciosTecnicos: {
    title: 'Servicios Técnicos',
    main: { name: 'Servicios Técnicos', href: '/servicios-tecnicos' },
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
  reformasComerciales: {
    title: 'Reformas Comerciales',
    main: { name: 'Reformas Comerciales', href: '/reformas-comerciales' },
    subservices: [
      { name: 'Reformas de Oficinas', href: '/reformas-oficinas' },
      { name: 'Locales Comerciales y Retail', href: '/locales-comerciales-retail' },
      { name: 'Restaurantes y Bares', href: '/restaurantes-bares' },
      { name: 'Clínicas y Centros Sanitarios', href: '/clinicas-centros-sanitarios' },
      { name: 'Gimnasios y Centros Deportivos', href: '/gimnasios-centros-deportivos' },
      { name: 'Hoteles y Alojamientos', href: '/hoteles-alojamientos' },
    ],
  },
  legal: [
    { name: 'Política de Privacidad', href: '/privacidad' },
    { name: 'Aviso Legal', href: '/aviso-legal' },
    { name: 'Política de Cookies', href: '/cookies' },
    { name: 'Sitemap', href: '/sitemap_index.xml' },
  ],
}

export default function Footer() {
  const [isLegalOpen, setIsLegalOpen] = useState(false)
  const [openServices, setOpenServices] = useState<Record<string, boolean>>({
    reformasIntegrales: false,
    reformasEstancia: false,
    serviciosTecnicos: false,
    reformasComerciales: false,
  })

  return (
    <footer className="bg-brand-primary relative overflow-hidden" aria-labelledby="footer-heading">
      {/* Decorative gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-brand-primary via-brand-primary to-blue-900/30 opacity-50"></div>
      
      <div className="relative">
        <div id="footer-heading" className="sr-only" aria-label="Footer">
          Footer
        </div>
        <div className="mx-auto max-w-7xl px-6 pb-12 pt-16 sm:pt-20 lg:px-8 lg:pt-24">
          <div className="grid grid-cols-1 md:grid-cols-4 lg:grid-cols-5 gap-8">
            {/* Brand Section - Wider Column */}
            <div className="space-y-6 md:col-span-2 lg:col-span-2">
              <Link href="/" className="flex items-center group">
                <Image
                  src="/reformix-logo.svg"
                  alt="Reformix Barcelona"
                  width={150}
                  height={48}
                  className="h-12 w-auto brightness-0 invert transition-transform duration-300 group-hover:scale-105"
                />
              </Link>
              <p className="text-sm leading-relaxed text-gray-200 max-w-sm">
                Especialistas en reformas integrales y rehabilitación. Trato directo, sin intermediarios, con equipo propio. Tu reforma, nuestra responsabilidad.
              </p>

              {/* Social Links */}
              <div className="flex items-center space-x-4 pt-2">
                <a 
                  href="#" 
                  className="text-gray-300 hover:text-white transition-all duration-300 hover:scale-110"
                  aria-label="Facebook"
                >
                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" />
                  </svg>
                </a>
                <a 
                  href="#" 
                  className="text-gray-300 hover:text-white transition-all duration-300 hover:scale-110"
                  aria-label="Instagram"
                >
                  <svg className="h-7 w-7" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" aria-hidden="true">
                    <rect x="2" y="2" width="20" height="20" rx="5" ry="5" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" strokeLinecap="round" strokeLinejoin="round"/>
                    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </a>
              </div>
            </div>

            {/* Servicios Column 1 */}
            <div className="mt-12 md:mt-0">
              <div className="text-base font-bold leading-6 text-white mb-4">Servicios</div>
              
              {/* Reformas Integrales - Collapsible */}
              <div className="mb-6">
                <button
                  onClick={() => setOpenServices({ ...openServices, reformasIntegrales: !openServices.reformasIntegrales })}
                  className="w-full text-left flex items-center justify-between text-sm font-semibold leading-6 text-white mb-2 group"
                  aria-expanded={openServices.reformasIntegrales}
                >
                  <Link 
                    href={navigation.reformasIntegrales.main.href} 
                    className="hover:text-brand-accent transition-colors"
                    onClick={(e) => e.stopPropagation()}
                  >
                    {navigation.reformasIntegrales.title}
                  </Link>
                  <ChevronDownIcon
                    className={`w-4 h-4 flex-shrink-0 transition-transform duration-200 ml-2 ${
                      openServices.reformasIntegrales ? 'transform rotate-180' : ''
                    }`}
                  />
                </button>
                <div
                  className={`overflow-hidden transition-all duration-300 ease-in-out ${
                    openServices.reformasIntegrales ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                  }`}
                >
                  <ul role="list" className="space-y-2 pl-4 pt-1">
                    {navigation.reformasIntegrales.subservices.map((item) => (
                      <li key={item.name}>
                        <Link 
                          href={item.href} 
                          className="text-sm leading-6 text-gray-300 hover:text-white transition-colors duration-200 inline-block hover:translate-x-1"
                        >
                          {item.name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Reformas por Estancia - Collapsible */}
              <div className="mb-6">
                <button
                  onClick={() => setOpenServices({ ...openServices, reformasEstancia: !openServices.reformasEstancia })}
                  className="w-full text-left flex items-center justify-between text-sm font-semibold leading-6 text-white mb-2 group"
                  aria-expanded={openServices.reformasEstancia}
                >
                  <Link 
                    href={navigation.reformasEstancia.main.href} 
                    className="hover:text-brand-accent transition-colors"
                    onClick={(e) => e.stopPropagation()}
                  >
                    {navigation.reformasEstancia.title}
                  </Link>
                  <ChevronDownIcon
                    className={`w-4 h-4 flex-shrink-0 transition-transform duration-200 ml-2 ${
                      openServices.reformasEstancia ? 'transform rotate-180' : ''
                    }`}
                  />
                </button>
                <div
                  className={`overflow-hidden transition-all duration-300 ease-in-out ${
                    openServices.reformasEstancia ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                  }`}
                >
                  <ul role="list" className="space-y-2 pl-4 pt-1">
                    {navigation.reformasEstancia.subservices.map((item) => (
                      <li key={item.name}>
                        <Link 
                          href={item.href} 
                          className="text-sm leading-6 text-gray-300 hover:text-white transition-colors duration-200 inline-block hover:translate-x-1"
                        >
                          {item.name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            {/* Servicios Column 2 */}
            <div className="mt-12 md:mt-0">
              <div className="text-base font-bold leading-6 text-white mb-4 opacity-0 pointer-events-none">Servicios</div>
              
              {/* Servicios Técnicos - Collapsible */}
              <div className="mb-6">
                <button
                  onClick={() => setOpenServices({ ...openServices, serviciosTecnicos: !openServices.serviciosTecnicos })}
                  className="w-full text-left flex items-center justify-between text-sm font-semibold leading-6 text-white mb-2 group"
                  aria-expanded={openServices.serviciosTecnicos}
                >
                  <Link 
                    href={navigation.serviciosTecnicos.main.href} 
                    className="hover:text-brand-accent transition-colors"
                    onClick={(e) => e.stopPropagation()}
                  >
                    {navigation.serviciosTecnicos.title}
                  </Link>
                  <ChevronDownIcon
                    className={`w-4 h-4 flex-shrink-0 transition-transform duration-200 ml-2 ${
                      openServices.serviciosTecnicos ? 'transform rotate-180' : ''
                    }`}
                  />
                </button>
                <div
                  className={`overflow-hidden transition-all duration-300 ease-in-out ${
                    openServices.serviciosTecnicos ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                  }`}
                >
                  <ul role="list" className="space-y-2 pl-4 pt-1">
                    {navigation.serviciosTecnicos.subservices.map((item) => (
                      <li key={item.name}>
                        <Link 
                          href={item.href} 
                          className="text-sm leading-6 text-gray-300 hover:text-white transition-colors duration-200 inline-block hover:translate-x-1"
                        >
                          {item.name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Reformas Comerciales - Collapsible */}
              <div className="mb-6">
                <button
                  onClick={() => setOpenServices({ ...openServices, reformasComerciales: !openServices.reformasComerciales })}
                  className="w-full text-left flex items-center justify-between text-sm font-semibold leading-6 text-white mb-2 group"
                  aria-expanded={openServices.reformasComerciales}
                >
                  <Link 
                    href={navigation.reformasComerciales.main.href} 
                    className="hover:text-brand-accent transition-colors"
                    onClick={(e) => e.stopPropagation()}
                  >
                    {navigation.reformasComerciales.title}
                  </Link>
                  <ChevronDownIcon
                    className={`w-4 h-4 flex-shrink-0 transition-transform duration-200 ml-2 ${
                      openServices.reformasComerciales ? 'transform rotate-180' : ''
                    }`}
                  />
                </button>
                <div
                  className={`overflow-hidden transition-all duration-300 ease-in-out ${
                    openServices.reformasComerciales ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                  }`}
                >
                  <ul role="list" className="space-y-2 pl-4 pt-1">
                    {navigation.reformasComerciales.subservices.map((item) => (
                      <li key={item.name}>
                        <Link 
                          href={item.href} 
                          className="text-sm leading-6 text-gray-300 hover:text-white transition-colors duration-200 inline-block hover:translate-x-1"
                        >
                          {item.name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            {/* Contact Section with Legal */}
            <div className="mt-12 md:mt-0">
              <div className="text-base font-bold leading-6 text-white mb-4">Contacto</div>
              <ul role="list" className="space-y-4">
                <li>
                  <a 
                    href="tel:+34642029572" 
                    className="flex items-start gap-3 text-sm leading-6 text-gray-300 hover:text-white transition-colors duration-200 group"
                  >
                    <PhoneIcon className="h-5 w-5 flex-shrink-0 mt-0.5 text-white group-hover:scale-110 transition-transform" />
                    <span>+34 642 029 572</span>
                  </a>
                </li>
                <li>
                  <a 
                    href="mailto:info@reformix.barcelona" 
                    className="flex items-start gap-3 text-sm leading-6 text-gray-300 hover:text-white transition-colors duration-200 group"
                  >
                    <EnvelopeIcon className="h-5 w-5 flex-shrink-0 mt-0.5 text-white group-hover:scale-110 transition-transform" />
                    <span className="break-all">info@reformix.barcelona</span>
                  </a>
                </li>
              </ul>

              {/* Legal Section - Collapsible */}
              <div className="mt-8">
                <button
                  onClick={() => setIsLegalOpen(!isLegalOpen)}
                  className="w-full text-left flex items-center justify-between text-base font-bold leading-6 text-white mb-4 group"
                  aria-expanded={isLegalOpen}
                >
                  <span>Legal</span>
                  <ChevronDownIcon
                    className={`w-5 h-5 flex-shrink-0 transition-transform duration-200 ${
                      isLegalOpen ? 'transform rotate-180' : ''
                    }`}
                  />
                </button>
                <div
                  className={`overflow-hidden transition-all duration-300 ease-in-out ${
                    isLegalOpen ? 'max-h-80 opacity-100' : 'max-h-0 opacity-0'
                  }`}
                >
                  <ul role="list" className="space-y-3 pt-1">
                    {navigation.legal.map((item) => (
                      <li key={item.name}>
                        <Link 
                          href={item.href} 
                          className="text-sm leading-6 text-gray-300 hover:text-white transition-colors duration-200 inline-block hover:translate-x-1"
                        >
                          {item.name}
                        </Link>
                      </li>
                    ))}
                    <li>
                      <button
                        onClick={openCookieSettings}
                        className="flex items-center gap-2 text-sm leading-6 text-gray-300 hover:text-white transition-colors duration-200 hover:translate-x-1"
                      >
                        <Cog6ToothIcon className="w-4 h-4" />
                        <span>Gestionar Cookies</span>
                      </button>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="mt-12 border-t border-white/20 pt-8">
            <div className="flex flex-col space-y-4">
              {/* Main Copyright Row */}
              <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
                <div className="flex flex-col gap-2 text-center sm:text-left">
                  <p className="text-sm text-gray-300">
                    &copy; {new Date().getFullYear()} Reformix Barcelona. Todos los derechos reservados.
                  </p>
                  <p className="text-sm text-gray-300">
                    Reformas en Barcelona y Vallès Occidental desde 2014
                  </p>
                </div>
                <div className="flex flex-col gap-2 text-center sm:text-right">
                  <p className="text-xs text-gray-400/90 tracking-wide">
                    Desarrollado por
                  </p>
                  <a 
                    href="https://qwantix.agency" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center sm:justify-end gap-1.5 text-gray-300 hover:text-white transition-all duration-300 font-medium group/link"
                  >
                    <span className="relative">
                      qwantix.agency
                      <span className="absolute bottom-0 left-0 w-0 h-px bg-white transition-all duration-300 group-hover/link:w-full"></span>
                    </span>
                    <svg 
                      className="w-3.5 h-3.5 opacity-70 group-hover/link:opacity-100 group-hover/link:translate-x-0.5 transition-all duration-300" 
                      fill="none" 
                      stroke="currentColor" 
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

