import Link from 'next/link';
import { Metadata } from 'next';

// Inline SVG icons to avoid loading @heroicons/react bundle (reduces unused JS)
const HomeIcon = () => (
  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
  </svg>
);

const EnvelopeIcon = () => (
  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
  </svg>
);

const HomeModernIcon = () => (
  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
    <path d="M19.006 3.705a.75.75 0 00-.512-1.41L6 6.838V3a.75.75 0 00-.75-.75h-1.5A.75.75 0 003 3v4.93L1.353 8.688a.75.75 0 00.512 1.41l17.141-2.483zM17.5 10.5l-15-2.07v9.32c0 .414.336.75.75.75h13.5a.75.75 0 00.75-.75v-7.25zM6 19.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM9.75 19.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM13.5 19.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM17.25 19.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM21 19.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z" />
  </svg>
);

const HomeIconSolid = () => (
  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
    <path d="M11.47 3.84a.75.75 0 011.06 0l8.69 8.69a.75.75 0 101.06-1.06l-8.689-8.69a2.25 2.25 0 00-3.182 0l-8.69 8.69a.75.75 0 001.061 1.06l8.69-8.69z" />
    <path d="M12 5.432l8.159 8.159c.03.03.06.058.091.086v6.198c0 1.035-.84 1.875-1.875 1.875H15a.75.75 0 01-.75-.75v-4.5a.75.75 0 00-.75-.75h-3a.75.75 0 00-.75.75V21a.75.75 0 01-.75.75H5.625a1.875 1.875 0 01-1.875-1.875v-6.198a2.29 2.29 0 00.091-.086L12 5.43z" />
  </svg>
);

const WrenchScrewdriverIcon = () => (
  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
    <path fillRule="evenodd" d="M12 6.75a5.25 5.25 0 016.775-5.025.75.75 0 01.313 1.248l-3.32 3.319c.063.475.276.934.641 1.299.365.365.824.578 1.3.64l3.318-3.319a.75.75 0 011.248.313 5.25 5.25 0 01-5.025 6.775c-1.12-.145-2.287-.38-3.419-.679a6.778 6.778 0 01-1.53-.206l7.5-7.5A4.5 4.5 0 0118.75 12v.008a.75.75 0 01-.363.724l-5.25 2.25a.75.75 0 01-.927-.928l2.25-5.25a.75.75 0 01.724-.363H18a.75.75 0 00.75-.75V6.787a6.75 6.75 0 01-1.756 1.979l-7.5-7.5A6.75 6.75 0 016.787 2.25H9.75a.75.75 0 000-1.5H6.787a8.25 8.25 0 00-2.25 1.756l7.5 7.5a8.25 8.25 0 001.756 2.25H12a.75.75 0 00.75-.75V9.75a.75.75 0 011.5 0v.008z" clipRule="evenodd" />
  </svg>
);

const ExclamationTriangleIcon = () => (
  <svg className="w-16 h-16 sm:w-20 sm:h-20" fill="currentColor" viewBox="0 0 24 24">
    <path fillRule="evenodd" d="M9.401 3.003c1.155-2 4.043-2 5.197 0l7.355 12.748c1.154 2-.29 4.5-2.599 4.5H4.645c-2.309 0-3.752-2.5-2.598-4.5L9.401 3.003zM12 8.25a.75.75 0 01.75.75v3.75a.75.75 0 01-1.5 0V9a.75.75 0 01.75-.75zm0 8.25a.75.75 0 100-1.5.75.75 0 000 1.5z" clipRule="evenodd" />
  </svg>
);

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
  ] as const;

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
                <div className="text-brand-primary">
                  <ExclamationTriangleIcon />
                </div>
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
              <HomeIcon />
              Volver al inicio
            </Link>
            <Link
              href="/contacto"
              className="inline-flex items-center justify-center gap-2 rounded-md bg-white border-2 border-brand-primary px-6 py-3 text-base font-semibold text-brand-primary shadow-sm hover:bg-brand-accent-neutral focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-primary transition-all duration-200 hover:scale-105"
            >
              <EnvelopeIcon />
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
                        <Icon />
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

