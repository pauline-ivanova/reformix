'use client'

import { Fragment } from 'react'
import Link from 'next/link'
import { Dialog, Transition } from '@headlessui/react'
// Inline SVG icon to avoid loading @heroicons/react bundle
const XMarkIcon = ({ className }: { className?: string }) => (
  <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
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
  )
}

