import Link from 'next/link';
import { Metadata } from 'next';
import { HomeIcon, ExclamationTriangleIcon, EnvelopeIcon } from '@heroicons/react/24/outline';
import { 
  HomeModernIcon, 
  HomeIcon as HomeIconSolid, 
  WrenchScrewdriverIcon 
} from '@heroicons/react/24/solid';

export const metadata: Metadata = {
  title: '404 - Página no encontrada | Reformix Barcelona',
  description: 'La página que buscas no existe. Volver al inicio o explorar nuestros servicios de reformas.',
  robots: {
    index: false,
    follow: false,
  },
};

export default function NotFound() {
  const popularLinks = [
    {
      name: 'Reformas Integrales',
      href: '/reformas-integrales',
      icon: HomeModernIcon,
      description: 'Transforma tu hogar por completo',
    },
    {
      name: 'Reformas por Estancia',
      href: '/reformas-por-estancia',
      icon: HomeIconSolid,
      description: 'Reforma cocinas, baños y más',
    },
    {
      name: 'Servicios Técnicos',
      href: '/servicios-tecnicos',
      icon: WrenchScrewdriverIcon,
      description: 'Soluciones técnicas especializadas',
    },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      {/* Main Content */}
      <main className="flex-grow flex items-center justify-center px-4 py-16 sm:py-24">
        <div className="max-w-4xl w-full text-center">
          {/* 404 Icon */}
          <div className="flex justify-center mb-8">
            <div className="relative">
              <div className="absolute inset-0 bg-brand-primary/20 rounded-full blur-3xl"></div>
              <div className="relative inline-flex items-center justify-center w-32 h-32 sm:w-40 sm:h-40 rounded-full bg-brand-primary/10">
                <ExclamationTriangleIcon className="w-16 h-16 sm:w-20 sm:h-20 text-brand-primary" />
              </div>
            </div>
          </div>

          {/* Error Code */}
          <h1 className="text-6xl sm:text-7xl lg:text-8xl font-bold text-brand-primary mb-4">
            404
          </h1>

          {/* Title */}
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-brand-text-heading mb-4">
            Página no encontrada
          </h2>

          {/* Description */}
          <p className="text-base sm:text-lg text-brand-text-body mb-8 max-w-2xl mx-auto leading-relaxed">
            Lo sentimos, la página que buscas no existe o ha sido movida. 
            No te preocupes, podemos ayudarte a encontrar lo que necesitas.
          </p>

          {/* Primary CTA */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Link
              href="/"
              className="inline-flex items-center justify-center gap-2 rounded-md bg-brand-primary px-6 py-3 text-base font-semibold text-white shadow-sm hover:opacity-90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-primary transition-all duration-200 hover:scale-105"
            >
              <HomeIcon className="w-5 h-5" />
              Volver al inicio
            </Link>
            <Link
              href="/contacto"
              className="inline-flex items-center justify-center gap-2 rounded-md bg-white border-2 border-brand-primary px-6 py-3 text-base font-semibold text-brand-primary shadow-sm hover:bg-brand-accent-neutral focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-primary transition-all duration-200 hover:scale-105"
            >
              <EnvelopeIcon className="w-5 h-5" />
              Contáctanos
            </Link>
          </div>

          {/* Popular Links Section */}
          <div className="border-t border-gray-200 pt-12">
            <h3 className="text-xl font-semibold text-brand-text-heading mb-6">
              Explora nuestros servicios
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              {popularLinks.map((link) => {
                const Icon = link.icon;
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="group relative bg-white border-2 border-gray-200 rounded-lg p-6 hover:border-brand-primary hover:shadow-lg transition-all duration-200 text-left"
                  >
                    <div className="flex items-start gap-4">
                      <div className="flex-shrink-0 inline-flex items-center justify-center w-12 h-12 rounded-lg bg-brand-primary/10 text-brand-primary group-hover:bg-brand-primary/20 transition-colors">
                        <Icon className="w-6 h-6" />
                      </div>
                      <div className="flex-grow">
                        <h4 className="text-base font-semibold text-brand-text-heading mb-1 group-hover:text-brand-primary transition-colors">
                          {link.name}
                        </h4>
                        <p className="text-sm text-brand-text-body">
                          {link.description}
                        </p>
                      </div>
                    </div>
                    <div className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity">
                      <svg
                        className="w-5 h-5 text-brand-primary"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M9 5l7 7-7 7"
                        />
                      </svg>
                    </div>
                  </Link>
                );
              })}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

