'use client'

import { useState } from 'react'
import Link from 'next/link'
import { EnvelopeIcon, PhoneIcon, ChevronDownIcon, Cog6ToothIcon } from '@heroicons/react/24/outline'
import { openCookieSettings } from '@/lib/cookie-utils'

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
      { name: 'Carpintería', href: '/carpinteria' },
      { name: 'Fontanería', href: '/fontaneria' },
      { name: 'Electricidad', href: '/electricidad' },
      { name: 'Pintura Interior', href: '/pintura-interior' },
    ],
  },
  empresa: [
    { name: 'Sobre Nosotros', href: '/sobre-nosotros' },
    { name: 'Contacto', href: '/contacto' },
    { name: 'Áreas de Servicio', href: '/areas-servicio' },
    { name: 'Proyectos', href: '/proyectos' },
  ],
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
  })

  return (
    <footer className="bg-brand-primary relative overflow-hidden" aria-labelledby="footer-heading">
      {/* Decorative gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-brand-primary via-brand-primary to-blue-900/30 opacity-50"></div>
      
      <div className="relative">
        <h2 id="footer-heading" className="sr-only">
          Footer
        </h2>
        <div className="mx-auto max-w-7xl px-6 pb-12 pt-16 sm:pt-20 lg:px-8 lg:pt-24">
          <div className="grid grid-cols-1 md:grid-cols-4 lg:grid-cols-4 xl:grid-cols-5 gap-8">
            {/* Brand Section - Wider Column */}
            <div className="space-y-6 md:col-span-2 lg:col-span-2 xl:col-span-2">
              <Link href="/" className="flex items-center group">
                <img
                  src="/reformix-logo.svg"
                  alt="Reformix Barcelona"
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

            {/* Servicios Column */}
            <div className="mt-12 md:mt-0">
              <h3 className="text-base font-bold leading-6 text-white mb-4">Servicios</h3>
              
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
            </div>

            {/* Empresa Column */}
            <div className="mt-12 md:mt-0">
              <h3 className="text-base font-bold leading-6 text-white mb-4">Empresa</h3>
              <ul role="list" className="space-y-3">
                {navigation.empresa.map((item) => (
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

            {/* Contact Section with Legal */}
            <div className="mt-12 md:mt-0">
              <h3 className="text-base font-bold leading-6 text-white mb-4">Contacto</h3>
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
            <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
              <p className="text-xs leading-5 text-gray-400">
                &copy; {new Date().getFullYear()} Reformix Barcelona. Todos los derechos reservados.
              </p>
              <p className="text-xs leading-5 text-gray-400">
                Reformas en Barcelona y Vallès Occidental desde 2014
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

