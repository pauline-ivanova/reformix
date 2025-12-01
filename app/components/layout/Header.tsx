'use client'

import { useState, useEffect, Fragment } from 'react'
import Link from 'next/link'
import { Dialog, Menu, Transition } from '@headlessui/react'
import {
  Bars3Icon,
  XMarkIcon,
  HomeIcon,
  WrenchScrewdriverIcon,
  HomeModernIcon,
  ChevronDownIcon,
} from '@heroicons/react/24/solid'

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
      { name: 'Carpintería', href: '/carpinteria' },
      { name: 'Fontanería', href: '/fontaneria' },
      { name: 'Electricidad', href: '/electricidad' },
      { name: 'Pintura Interior', href: '/pintura-interior' },
    ],
  },
]

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-white shadow-md' : 'bg-white/95 backdrop-blur-sm'
    }`}>
      <nav className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8" aria-label="Global">
        <div className="flex lg:flex-1">
          <Link href="/" className="-m-1.5 p-1.5 flex items-center">
            <img
              src="/reformix-logo.svg"
              alt="Reformix Barcelona"
              className="h-10 w-auto"
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
            <Bars3Icon className="h-6 w-6" aria-hidden="true" />
          </button>
        </div>
        <div className="hidden lg:flex lg:gap-x-10">
          {navigation.map((item) => (
            <Menu key={item.name} as="div" className="relative">
              <Menu.Button className="group flex items-center gap-x-1.5 text-sm font-semibold leading-6 text-brand-text-heading hover:text-brand-primary transition-all duration-200 relative">
                {item.name}
                <ChevronDownIcon className="h-3.5 w-3.5 transition-transform duration-200 group-hover:rotate-180" aria-hidden="true" />
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-brand-primary transition-all duration-200 group-hover:w-full"></span>
              </Menu.Button>
              <Transition
                as={Fragment}
                enter="transition ease-out duration-200"
                enterFrom="opacity-0 translate-y-2 scale-95"
                enterTo="opacity-100 translate-y-0 scale-100"
                leave="transition ease-in duration-150"
                leaveFrom="opacity-100 translate-y-0 scale-100"
                leaveTo="opacity-0 translate-y-2 scale-95"
              >
                <Menu.Items className="absolute left-0 z-10 mt-3 w-64 origin-top-left rounded-xl bg-white shadow-xl ring-1 ring-gray-900/5 focus:outline-none overflow-hidden">
                  <div className="py-2">
                    {item.subservices.map((subservice) => (
                      <Menu.Item key={subservice.name}>
                        {({ active }) => (
                          <Link
                            href={subservice.href}
                            className={`group/item relative flex items-center px-5 py-3 text-sm transition-all duration-150 ${
                              active 
                                ? 'bg-gradient-to-r from-brand-accent-neutral to-transparent text-brand-primary font-medium' 
                                : 'text-gray-700 hover:text-brand-primary'
                            }`}
                          >
                            <span className={`absolute left-0 top-0 bottom-0 w-1 bg-brand-primary transition-all duration-200 ${
                              active ? 'opacity-100' : 'opacity-0 group-hover/item:opacity-50'
                            }`}></span>
                            <span className="flex-1">{subservice.name}</span>
                            <svg 
                              className={`w-4 h-4 transition-transform duration-200 ${
                                active ? 'translate-x-0 opacity-100' : '-translate-x-2 opacity-0 group-hover/item:translate-x-0 group-hover/item:opacity-100'
                              }`}
                              fill="none" 
                              viewBox="0 0 24 24" 
                              stroke="currentColor"
                            >
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                            </svg>
                          </Link>
                        )}
                      </Menu.Item>
                    ))}
                    <div className="my-2 border-t border-gray-100"></div>
                    <Menu.Item>
                      {({ active }) => (
                        <Link
                          href={item.href}
                          className={`flex items-center px-5 py-3 text-sm font-semibold transition-all duration-150 ${
                            active 
                              ? 'bg-brand-primary text-white' 
                              : 'text-brand-primary hover:bg-brand-accent-neutral'
                          }`}
                        >
                          <span className="mr-2">
                            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                            </svg>
                          </span>
                          Ver todas las opciones
                        </Link>
                      )}
                    </Menu.Item>
                  </div>
                </Menu.Items>
              </Transition>
            </Menu>
          ))}
        </div>
        <div className="hidden lg:flex lg:flex-1 lg:justify-end">
          <Link
            href="/contacto"
            className="group relative rounded-lg bg-brand-primary px-6 py-2.5 text-sm font-semibold text-white shadow-md hover:shadow-lg hover:bg-brand-primary/95 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-primary transition-all duration-200 overflow-hidden"
          >
            <span className="relative z-10">Presupuesto Gratis</span>
            <span className="absolute inset-0 bg-gradient-to-r from-brand-accent to-brand-primary opacity-0 group-hover:opacity-100 transition-opacity duration-200"></span>
          </Link>
        </div>
      </nav>
      <Dialog as="div" className="lg:hidden" open={mobileMenuOpen} onClose={setMobileMenuOpen}>
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 z-50 bg-black/50 backdrop-blur-sm" />
        </Transition.Child>
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300 transform"
          enterFrom="translate-x-full"
          enterTo="translate-x-0"
          leave="ease-in duration-200 transform"
          leaveFrom="translate-x-0"
          leaveTo="translate-x-full"
        >
          <Dialog.Panel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm shadow-2xl">
            <div className="flex items-center justify-between mb-8">
              <Link href="/" className="-m-1.5 p-1.5 flex items-center" onClick={() => setMobileMenuOpen(false)}>
                <img
                  src="/reformix-logo.svg"
                  alt="Reformix Barcelona"
                  className="h-8 w-auto"
                />
              </Link>
              <button
                type="button"
                className="-m-2.5 rounded-lg p-2.5 text-brand-text-heading hover:bg-brand-accent-neutral transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                <span className="sr-only">Cerrar menú</span>
                <XMarkIcon className="h-6 w-6" aria-hidden="true" />
              </button>
            </div>
            <div className="space-y-1">
              {navigation.map((item) => (
                <div key={item.name} className="mb-4">
                  <Link
                    href={item.href}
                    className="flex items-center justify-between rounded-xl px-4 py-3 text-base font-semibold leading-7 text-brand-text-heading hover:bg-brand-accent-neutral hover:text-brand-primary transition-all duration-200 group"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    <span className="flex items-center gap-2">
                      <item.icon className="h-5 w-5 text-brand-primary" />
                      {item.name}
                    </span>
                    <svg className="w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </Link>
                  {item.subservices && item.subservices.length > 0 && (
                    <div className="ml-6 mt-2 space-y-1 border-l-2 border-brand-accent-neutral pl-4">
                      {item.subservices.map((subservice) => (
                        <Link
                          key={subservice.name}
                          href={subservice.href}
                          className="block rounded-lg px-4 py-2.5 text-sm leading-6 text-gray-600 hover:bg-brand-accent-neutral hover:text-brand-primary transition-all duration-200"
                          onClick={() => setMobileMenuOpen(false)}
                        >
                          {subservice.name}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
            <div className="mt-8 pt-6 border-t border-gray-200">
              <Link
                href="/contacto"
                className="group relative rounded-lg bg-brand-primary px-6 py-3 text-sm font-semibold text-white shadow-md hover:shadow-lg w-full block text-center transition-all duration-200 overflow-hidden"
                onClick={() => setMobileMenuOpen(false)}
              >
                <span className="relative z-10">Presupuesto Gratis</span>
                <span className="absolute inset-0 bg-gradient-to-r from-brand-accent to-brand-primary opacity-0 group-hover:opacity-100 transition-opacity duration-200"></span>
              </Link>
            </div>
          </Dialog.Panel>
        </Transition.Child>
      </Dialog>
    </header>
  )
}

