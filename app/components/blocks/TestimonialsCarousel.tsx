'use client';

import { useEffect, useState } from 'react';
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/outline';

interface Testimonial {
  text: string;
  initials: string;
  name: string;
  location: string;
}

const defaultTestimonials: Testimonial[] = [
  {
    text: "Lo que más valoramos fue la seriedad con los plazos. El proyecto se entregó en fecha y pudimos inaugurar el espacio sin retrasos. La coordinación con nuestro equipo fue muy ágil.",
    initials: "DO",
    name: "Daniel O.",
    location: "Director de coworking, Barcelona"
  },
  {
    text: "Como interiorista, es fundamental trabajar con un equipo que entienda la importancia de los detalles. Con Reformix tuve la tranquilidad de que mis ideas se llevaron a la realidad tal como las había planteado.",
    initials: "ML",
    name: "Marta L.",
    location: "Interiorista, Barcelona"
  },
  {
    text: "Encargamos a Reformix la ejecución de nuestro nuevo espacio de oficinas en Barcelona. Se ocuparon de toda la obra y el resultado fue un entorno funcional y representativo de la marca.",
    initials: "RP",
    name: "Raúl P.",
    location: "Responsable de proyectos, empresa tecnológica, Barcelona"
  },
  {
    text: "Necesitábamos una reforma integral rápida para abrir el restaurante en la fecha prevista. Reformix coordinó el proyecto de interiorismo de forma impecable y el local quedó espectacular.",
    initials: "JP",
    name: "Javier P.",
    location: "Propietario de restaurante, Barcelona"
  },
  {
    text: "Trabajar con Reformix en la ejecución del interiorismo de nuestra oficina fue una experiencia fluida. Irina estuvo pendiente de la comunicación en todo momento y eso nos dio mucha confianza.",
    initials: "AM",
    name: "Ana M.",
    location: "Agencia de marketing, Sabadell"
  },
  {
    text: "Colaboramos con Reformix en un proyecto de interiorismo en el Eixample y la experiencia fue excelente. Respetaron cada detalle del diseño y los acabados quedaron impecables.",
    initials: "CS",
    name: "Clara S.",
    location: "Arquitecta, Barcelona"
  }
];

interface TestimonialsCarouselProps {
  testimonials?: Testimonial[];
  title?: string | React.ReactNode;
  subtitle?: string;
  paddingClassName?: string;
}

export default function TestimonialsCarousel({ 
  testimonials = defaultTestimonials,
  title = "Opiniones Reales de Nuestras Reformas",
  subtitle = "La confianza que depositan en nosotros nuestros clientes de Sabadell, Terrassa y toda la comarca del Vallès Occidental es nuestra mejor carta de presentación. Aquí puedes leer algunas de sus experiencias.",
  paddingClassName = "py-20",
}: TestimonialsCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [itemsPerPage, setItemsPerPage] = useState(3);

  // Adapt items per page to viewport (phones:1, tablets:2, desktop:3)
  useEffect(() => {
    const computeItems = () => {
      const width = typeof window !== 'undefined' ? window.innerWidth : 0;
      if (width < 768) return 1;
      if (width < 1024) return 2;
      return 3;
    };

    const handleResize = () => setItemsPerPage(computeItems());

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const totalPages = Math.ceil(testimonials.length / itemsPerPage);
  const currentTestimonials = testimonials.slice(
    currentIndex * itemsPerPage,
    (currentIndex + 1) * itemsPerPage
  );

  const goToPrevious = () => {
    setCurrentIndex((prev) => (prev === 0 ? totalPages - 1 : prev - 1));
  };

  const goToNext = () => {
    setCurrentIndex((prev) => (prev === totalPages - 1 ? 0 : prev + 1));
  };

  const goToPage = (pageIndex: number) => {
    setCurrentIndex(pageIndex);
  };

  return (
    <section className={`${paddingClassName} bg-white relative z-20`}>
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-brand-text-heading mb-6">
            {title}
          </h2>
          <p className="text-brand-text-body text-lg leading-relaxed">
            {subtitle}
          </p>
        </div>

        <div className="relative">
          {/* Navigation Arrows */}
          <button
            onClick={goToPrevious}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 md:-translate-x-12 z-10 bg-white rounded-full p-2 shadow-lg hover:shadow-xl transition-shadow border border-gray-200"
            aria-label="Previous slide"
          >
            <ChevronLeftIcon className="w-6 h-6 text-brand-primary" />
          </button>

          <button
            onClick={goToNext}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 md:translate-x-12 z-10 bg-white rounded-full p-2 shadow-lg hover:shadow-xl transition-shadow border border-gray-200"
            aria-label="Next slide"
          >
            <ChevronRightIcon className="w-6 h-6 text-brand-primary" />
          </button>

          {/* Testimonials Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-4 md:px-0">
            {currentTestimonials.map((testimonial, index) => (
              <div
                key={`${currentIndex}-${index}`}
                className="bg-[#f9f9f9] rounded-xl p-5 max-w-[350px] mx-auto w-full shadow-[0_2px_8px_rgba(0,0,0,0.08)] relative"
              >
                {/* Quote Mark */}
                <div className="text-right text-[100px] text-[#002e7c] leading-[0.6] mb-2">
                  ❞
                </div>

                {/* Testimonial Text */}
                <p className="text-[15px] leading-relaxed mb-4 text-[#333]">
                  {testimonial.text}
                </p>

                {/* Rating */}
                <div className="text-[#f5c518] text-xl mb-4">
                  ★★★★★
                </div>

                {/* Author Info */}
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-[#002e7c] flex items-center justify-center text-base font-bold text-white flex-shrink-0">
                    {testimonial.initials}
                  </div>
                  <div>
                    <div className="font-bold text-sm text-[#333]">
                      {testimonial.name}
                    </div>
                    <div className="text-[13px] text-[#666]">
                      {testimonial.location}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Pagination Dots */}
          <div className="flex justify-center gap-3 mt-8">
            {Array.from({ length: totalPages }).map((_, index) => (
              <button
                key={index}
                onClick={() => goToPage(index)}
                className={`w-6 h-6 rounded-full transition-all flex items-center justify-center ${
                  index === currentIndex
                    ? 'bg-brand-primary w-12'
                    : 'bg-gray-300 hover:bg-gray-400'
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

