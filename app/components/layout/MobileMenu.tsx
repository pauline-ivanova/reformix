'use client'

import { Fragment, useState } from 'react'
import Link from 'next/link'
import { Dialog, Transition } from '@headlessui/react'
import CtaLink from '@/app/components/analytics/CtaLink'

const XMarkIcon = ({ className }: { className?: string }) => (
  <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
  </svg>
)

const ChevronDownIcon = ({ className }: { className?: string }) => (
  <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
  </svg>
)

/** Informes / obras documentadas */
const ClipboardDocumentCheckIcon = ({ className }: { className?: string }) => (
  <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M11.35 3.836c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 00.75-.75 2.25 2.25 0 00-.1-.664m-5.8 0A2.251 2.251 0 0113.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m8.9-4.414c.376.023.75.05 1.124.08 1.131.094 1.976 1.057 1.976 2.192V16.5A2.25 2.25 0 0118 18.75h-2.25m-7.5-10.5H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V18.75m-7.5-10.5h6.375c.621 0 1.125.504 1.125 1.125v9.375m-8.25-3l1.5 1.5 3-3.75"
    />
  </svg>
)

interface NavigationItem {
  name: string
  href: string
  icon: React.ComponentType<{ className?: string }>
  subservices?: Array<{ name: string; href: string }>
}

interface MobileMenuProps {
  mobileMenuOpen: boolean
  setMobileMenuOpen: (open: boolean) => void
  navigation: NavigationItem[]
}

export default function MobileMenu({ mobileMenuOpen, setMobileMenuOpen, navigation }: MobileMenuProps) {
  const [openSections, setOpenSections] = useState<Record<string, boolean>>({})

  const toggleSection = (name: string) => {
    setOpenSections((prev) => ({ ...prev, [name]: !prev[name] }))
  }

  const closeMenu = () => setMobileMenuOpen(false)

  return (
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
            <Link href="/" className="-m-1.5 p-1.5 flex items-center" onClick={closeMenu}>
              <img
                src="/reformix-logo.svg"
                alt="Reformix Barcelona"
                width={100}
                height={32}
                className="h-8 w-auto"
              />
            </Link>
            <button
              type="button"
              className="-m-2.5 rounded-lg p-2.5 text-brand-text-heading hover:bg-brand-accent-neutral transition-colors"
              onClick={closeMenu}
            >
              <span className="sr-only">Cerrar menú</span>
              <XMarkIcon className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>

          <div className="space-y-1">
            {navigation.map((item) => {
              const hasSubs = Boolean(item.subservices?.length)
              const isOpen = Boolean(openSections[item.name])

              return (
                <div key={item.name} className="mb-2">
                  <div className="flex items-center gap-1 rounded-xl hover:bg-brand-accent-neutral transition-colors">
                    <Link
                      href={item.href}
                      className="flex flex-1 items-center gap-2 rounded-xl px-4 py-3 text-base font-semibold leading-7 text-brand-text-heading hover:text-brand-primary transition-colors"
                      onClick={closeMenu}
                    >
                      <item.icon className="h-5 w-5 text-brand-primary shrink-0" />
                      <span>{item.name}</span>
                    </Link>
                    {hasSubs && (
                      <button
                        type="button"
                        className="mr-2 rounded-lg p-2 text-brand-text-heading hover:text-brand-primary"
                        aria-expanded={isOpen}
                        aria-label={isOpen ? `Cerrar ${item.name}` : `Abrir ${item.name}`}
                        onClick={() => toggleSection(item.name)}
                      >
                        <ChevronDownIcon
                          className={`h-5 w-5 transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`}
                        />
                      </button>
                    )}
                  </div>

                  {hasSubs && (
                    <div
                      className={`overflow-hidden transition-all duration-300 ease-in-out ${
                        isOpen ? 'max-h-[40rem] opacity-100' : 'max-h-0 opacity-0'
                      }`}
                    >
                      <div className="ml-6 mt-1 space-y-1 border-l-2 border-brand-accent-neutral pl-4 pb-2">
                        {item.subservices!.map((subservice) => (
                          <Link
                            key={subservice.name}
                            href={subservice.href}
                            className="block rounded-lg px-4 py-2.5 text-sm leading-6 text-gray-600 hover:bg-brand-accent-neutral hover:text-brand-primary transition-all duration-200"
                            onClick={closeMenu}
                          >
                            {subservice.name}
                          </Link>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              )
            })}

            {/* Proyectos — same visual weight as a section, no accordion */}
            <div className="mb-2">
              <Link
                href="/proyectos"
                className="flex items-center gap-2 rounded-xl px-4 py-3 text-base font-semibold leading-7 text-brand-text-heading hover:bg-brand-accent-neutral hover:text-brand-primary transition-all duration-200"
                onClick={closeMenu}
              >
                <ClipboardDocumentCheckIcon className="h-5 w-5 text-brand-primary shrink-0" />
                <span>Proyectos realizados</span>
              </Link>
            </div>
          </div>

          <div className="mt-8 pt-6 border-t border-gray-200">
            <CtaLink
              href="/contacto"
              ctaId="mobile_presupuesto"
              className="group relative rounded-lg bg-brand-primary px-6 py-3 text-sm font-semibold text-white shadow-md hover:shadow-lg w-full block text-center transition-all duration-200 overflow-hidden"
              onClick={closeMenu}
            >
              <span className="relative z-10">Presupuesto Gratis</span>
              <span className="absolute inset-0 bg-gradient-to-r from-brand-accent to-brand-primary opacity-0 group-hover:opacity-100 transition-opacity duration-200"></span>
            </CtaLink>
          </div>
        </Dialog.Panel>
      </Transition.Child>
    </Dialog>
  )
}
