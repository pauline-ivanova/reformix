import Image from 'next/image';
import Link from 'next/link';

interface Service {
  title: string;
  subtitle: string;
  description: string;
  services: string[];
  image: string;
  imageAlt: string;
  ctaText: string;
  ctaHref: string;
}

interface ServicesSectionProps {
  title?: string;
  titleLines?: string[];
  subtitle?: string;
  services: Service[];
}

export default function ServicesSection({
  title,
  titleLines,
  subtitle,
  services,
}: ServicesSectionProps) {
  // Default title lines for the specific long title
  const defaultTitleLines = title === 'Servicios de Reformas en Barcelona y Vallès Occidental' 
    ? {
        mobile: [
          'Servicios de Reformas',
          'en Barcelona',
          'y Vallès Occidental'
        ],
        desktop: [
          'Servicios de Reformas',
          'en Barcelona y Vallès Occidental'
        ]
      }
    : null;
  
  const displayTitleLines = titleLines 
    ? { mobile: titleLines, desktop: titleLines }
    : defaultTitleLines;

  return (
    <section className="relative py-16 bg-white overflow-hidden">
      <div className="container mx-auto px-4 max-w-7xl">
        {(title || displayTitleLines) && (
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 text-brand-text-heading leading-tight">
            {displayTitleLines ? (
              <>
                {/* Mobile version - 3 lines */}
                <span className="md:hidden">
                  {displayTitleLines.mobile.map((line, index) => (
                    <span key={index} className="block">
                      {line}
                    </span>
                  ))}
                </span>
                {/* Desktop version - 2 lines */}
                <span className="hidden md:block">
                  {displayTitleLines.desktop.map((line, index) => (
                    <span key={index} className="block">
                      {line}
                    </span>
                  ))}
                </span>
              </>
            ) : (
              title
            )}
          </h2>
        )}
        {subtitle && (
          <p className="text-lg text-center text-brand-text-body mb-12 max-w-3xl mx-auto">
            {subtitle}
          </p>
        )}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          {services.map((service, index) => (
            <div
              key={index}
              className="flex flex-col bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow"
            >
              {/* Image */}
              <div className="relative w-full h-64 md:h-80 overflow-hidden">
                <Image
                  src={service.image}
                  alt={service.imageAlt}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
              
              {/* Content */}
              <div className="p-6 md:p-8 flex flex-col flex-1">
                <h3 className="text-2xl md:text-3xl font-bold mb-2 text-brand-text-heading">
                  {service.title}
                </h3>
                <p className="text-lg text-brand-primary mb-4 font-medium">
                  {service.subtitle}
                </p>
                <p className="text-brand-text-body mb-6 leading-relaxed flex-1">
                  {service.description}
                </p>
                
                {/* Services List */}
                <ul className="mb-6 space-y-2">
                  {service.services.map((item, itemIndex) => (
                    <li key={itemIndex} className="flex items-start">
                      <svg
                        className="w-5 h-5 text-brand-primary mr-2 mt-0.5 flex-shrink-0"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                          clipRule="evenodd"
                        />
                      </svg>
                      <span className="text-brand-text-body">{item}</span>
                    </li>
                  ))}
                </ul>
                
                {/* CTA Button */}
                <Link
                  href={service.ctaHref}
                  className="inline-block bg-brand-primary text-white px-6 py-3 rounded-md font-semibold text-center hover:opacity-90 transition-opacity mt-auto"
                >
                  {service.ctaText}
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

