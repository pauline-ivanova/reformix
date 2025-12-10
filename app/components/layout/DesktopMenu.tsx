'use client'

import { Fragment } from 'react'
import Link from 'next/link'
import { Menu, Transition } from '@headlessui/react'
// Inline SVG icon to avoid loading @heroicons/react bundle
const ChevronDownIcon = ({ className }: { className?: string }) => (
  <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
  </svg>
)

interface NavigationItem {
  name: string
  href: string
  icon: React.ComponentType<{ className?: string }>
  subservices: Array<{ name: string; href: string }>
}

interface DesktopMenuProps {
  navigation: NavigationItem[]
}

export default function DesktopMenu({ navigation }: DesktopMenuProps) {
  return (
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
  )
}

