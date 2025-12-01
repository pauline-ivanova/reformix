'use client';

import { useState } from 'react';
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/outline';

interface Testimonial {
  text: string;
  initials: string;
  name: string;
  location: string;
}

const testimonials: Testimonial[] = [
  {
    text: "Reformaron nuestra cocina y ahora tiene luz, espacio y es mucho más práctica. Hasta cocinar se ha vuelto un placer.",
    initials: "LG",
    name: "Laura G.",
    location: "Sabadell"
  },
  {
    text: "Nos hicieron el aislamiento y el cambio se nota muchísimo. Ya no entra ruido de la calle y la casa mantiene mejor la temperatura.",
    initials: "MP",
    name: "Marta P.",
    location: "Barberà del Vallès"
  },
  {
    text: "Encargamos la reforma completa de nuestro local y cumplieron los plazos al detalle. El espacio quedó justo como lo imaginamos y pudimos abrir a tiempo. Nuestros clientes lo notaron desde el primer día.",
    initials: "DL",
    name: "David L.",
    location: "Sabadell"
  },
  {
    text: "Reformamos todo el piso con ellos y la experiencia fue muy buena. Se ocuparon de licencias y materiales, y nosotros solo tuvimos que decidir acabados. El piso parece nuevo.",
    initials: "AR",
    name: "Ana R.",
    location: "Sabadell"
  },
  {
    text: "Queríamos abrir el salón al pasillo y ahora el espacio parece el doble de grande. Un cambio total en la casa.",
    initials: "JT",
    name: "Jordi T.",
    location: "Terrassa"
  },
  {
    text: "La reforma del baño fue rápida y sin molestias. Todo quedó moderno y muy funcional. Nos sorprendió lo limpios que fueron trabajando.",
    initials: "MV",
    name: "Marc V.",
    location: "Cerdanyola"
  },
  {
    text: "Necesitábamos modernizar la oficina y la transformación ha sido enorme. Ahora tenemos un espacio cómodo y práctico que el equipo agradece cada día.",
    initials: "SM",
    name: "Sílvia M.",
    location: "Sant Cugat"
  }
];

const ITEMS_PER_PAGE = 3;

export default function TestimonialsCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  
  const totalPages = Math.ceil(testimonials.length / ITEMS_PER_PAGE);
  const currentTestimonials = testimonials.slice(
    currentIndex * ITEMS_PER_PAGE,
    (currentIndex + 1) * ITEMS_PER_PAGE
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
    <section className="py-20 bg-white relative z-20">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-brand-text-heading mb-6">
            Opiniones Reales de Nuestras Reformas
          </h2>
          <p className="text-brand-text-body text-lg leading-relaxed">
            La confianza que depositan en nosotros nuestros clientes de Sabadell, Terrassa y toda la comarca del Vallès Occidental es nuestra mejor carta de presentación. Aquí puedes leer algunas de sus experiencias.
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
                    <div className="text-[13px] text-[#777]">
                      {testimonial.location}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Pagination Dots */}
          <div className="flex justify-center gap-2 mt-8">
            {Array.from({ length: totalPages }).map((_, index) => (
              <button
                key={index}
                onClick={() => goToPage(index)}
                className={`w-2 h-2 rounded-full transition-all ${
                  index === currentIndex
                    ? 'bg-brand-primary w-8'
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

