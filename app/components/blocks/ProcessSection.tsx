'use client';

import Link from 'next/link';
import { ArrowRightIcon } from '@heroicons/react/24/solid';

interface ProcessStep {
  number: string;
  title: string;
  description: string;
  shape?: 'none' | 'banner' | 'house';
  color?: 'blue' | 'orange';
  ctaButton?: {
    text: string;
    href: string;
  };
}

interface ProcessSectionProps {
  title?: string;
  subtitle?: string;
  steps?: ProcessStep[];
}

const defaultSteps: ProcessStep[] = [
  {
    number: '01',
    title: 'Contacto y visita',
    description: 'Hablamos de tu idea, visitamos el espacio para entender tus necesidades y tomar medidas. Te asesoramos sin ningún compromiso.',
    shape: 'none',
    ctaButton: {
      text: 'LLÁMANOS AHORA',
      href: '/contacto',
    },
  },
  {
    number: '02',
    title: 'Presupuesto detallado',
    description: 'Recibes un presupuesto fijo y desglosado por partidas. Sabrás exactamente en qué se invierte tu dinero, sin sorpresas.',
    shape: 'banner',
    color: 'orange',
  },
  {
    number: '03',
    title: 'Ejecución de la obra',
    description: 'Nuestro equipo se pone manos a la obra. Coordinamos todos los trabajos para cumplir los plazos acordados, manteniéndote siempre Informado.',
    shape: 'house',
    color: 'blue',
  },
  {
    number: '04',
    title: 'Entrega y garantía',
    description: 'Finalizamos la reforma, realizamos una limpieza completa y te entregamos tu nuevo espacio, listo para disfrutar y con nuestra garantía por escrito.',
    shape: 'none',
  },
];

export default function ProcessSection({
  title = 'Proceso de Reforma, Paso a Paso',
  subtitle,
  steps = defaultSteps,
}: ProcessSectionProps) {
  return (
    <section className="relative py-20 bg-white overflow-hidden">
      <div className="container mx-auto px-4 max-w-6xl">
        {title && (
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 text-brand-text-heading">
            {title}
          </h2>
        )}
        {subtitle && (
          <p className="text-lg text-center text-brand-text-body mb-16 max-w-3xl mx-auto">
            {subtitle}
          </p>
        )}

        {/* Mobile: Stacked Layout */}
        <div className="md:hidden space-y-8">
          {steps.map((step, index) => (
            <div key={index} className="relative">
              {step.shape === 'banner' ? (
                <div className="relative bg-brand-secondary text-white p-8 pb-16 clip-path-banner">
                  <div className="mb-2">
                    <span className="text-6xl font-bold text-white leading-none opacity-90">
                      {step.number}
                    </span>
                  </div>
                  <h3 className="text-2xl font-bold mb-3 text-white">
                    {step.title}
                  </h3>
                  <p className="text-base text-white leading-relaxed">
                    {step.description}
                  </p>
                </div>
              ) : step.shape === 'house' ? (
                <div className="relative bg-brand-primary text-white p-8 pt-16 clip-path-house mt-4">
                  <div className="mb-2">
                    <span className="text-6xl font-bold text-white leading-none opacity-90">
                      {step.number}
                    </span>
                  </div>
                  <h3 className="text-2xl font-bold mb-3 text-white">
                    {step.title}
                  </h3>
                  <p className="text-base text-white leading-relaxed mb-6">
                    {step.description}
                  </p>
                  {step.ctaButton && (
                    <Link
                      href={step.ctaButton.href}
                      className="inline-block bg-[#002e7c] text-white font-bold py-2 px-6 transition-colors text-sm border-2 border-white hover:bg-white hover:text-[#002e7c]"
                    >
                      {step.ctaButton.text}
                    </Link>
                  )}
                </div>
              ) : (
                <div className="p-4">
                  <div className="mb-2">
                    <span className="text-6xl font-bold text-brand-primary leading-none">
                      {step.number}
                    </span>
                  </div>
                  <h3 className="text-2xl font-bold mb-3 text-brand-text-heading">
                    {step.title}
                  </h3>
                  <p className="text-base text-brand-text-body leading-relaxed">
                    {step.description}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Desktop: Grid-based Layout matching the reference */}
        <div className="hidden md:grid grid-cols-2 gap-x-0 gap-y-0 max-w-5xl mx-auto relative bg-white">
          
          {/* Column 1 */}
          <div className="flex flex-col items-center relative">
             {/* Vertical Line Connector removed */}

            {/* Step 01 */}
            <div className="w-full max-w-sm mb-0 pr-8 relative z-10 text-left pt-10">
               <div className="mb-2">
                <span className="text-[10rem] font-black text-brand-primary leading-none block -mb-4">
                  {steps[0].number}
                </span>
              </div>
              <h3 className="text-2xl font-bold mb-3 text-brand-text-heading">
                {steps[0].title}
              </h3>
              <p className="text-base text-brand-text-body leading-relaxed mb-6">
                {steps[0].description}
              </p>
              
              {steps[0].ctaButton && (
                <Link
                  href={steps[0].ctaButton.href}
                  className="inline-flex items-center gap-2 bg-[#002e7c] hover:bg-brand-primary/90 text-white font-bold py-3 px-8 transition-colors text-sm uppercase tracking-wider"
                >
                  {steps[0].ctaButton.text}
                  <ArrowRightIcon className="w-5 h-5" />
                </Link>
              )}
            </div>

             {/* Step 02 - Banner Shape */}
             <div className="w-full relative z-10 mt-12">
                <div className="relative w-full" style={{ paddingBottom: '120%' }}>
                   <div className="absolute inset-0 bg-[#C4572f] border-none outline-none" style={{ clipPath: 'polygon(0% 0%, 100% 0%, 100% 85%, 50% 100%, 0% 85%)' }}>
                      <div className="p-10 flex flex-col h-full items-start text-left pt-20">
                         <span className="text-[10rem] font-black text-white leading-none block mb-2 opacity-90">
                            {steps[1].number}
                         </span>
                         <h3 className="text-3xl font-bold mb-4 text-white leading-tight">
                            {steps[1].title}
                         </h3>
                         <p className="text-lg text-white leading-relaxed">
                            {steps[1].description}
                         </p>
                      </div>
                   </div>
                </div>
             </div>
          </div>

          {/* Column 2 */}
          <div className="flex flex-col relative pt-32">
            {/* Step 03 - House Shape */}
            <div className="w-full relative z-10 mb-12">
               <div className="relative w-full" style={{ paddingBottom: '110%' }}>
                  <div className="absolute inset-0 bg-[#002e7c] border-none outline-none" style={{ clipPath: 'polygon(50% 0%, 100% 20%, 100% 100%, 0% 100%, 0% 20%)' }}>
                      <div className="p-12 pl-16 flex flex-col h-full justify-center items-start text-left pt-32">
                         <span className="text-[10rem] font-black text-white leading-none block mb-4 opacity-90">
                            {steps[2].number}
                         </span>
                         <h3 className="text-3xl font-bold mb-4 text-white leading-tight">
                            {steps[2].title}
                         </h3>
                         <p className="text-lg text-white leading-relaxed">
                            {steps[2].description}
                         </p>
                      </div>
                  </div>
               </div>
            </div>

            {/* Step 04 */}
             <div className="w-full max-w-sm pl-12 relative z-10">
                {/* Vertical Line Connector from Step 3 removed */}
               
               <div className="mb-2">
                <span className="text-[10rem] font-black text-brand-primary leading-none block -mb-4">
                  {steps[3].number}
                </span>
              </div>
              <h3 className="text-2xl font-bold mb-3 text-brand-text-heading">
                {steps[3].title}
              </h3>
              <p className="text-base text-brand-text-body leading-relaxed">
                {steps[3].description}
              </p>
            </div>
          </div>

        </div>
      </div>

      {/* CSS for Clip Paths if needed elsewhere or for fallback */}
      <style jsx>{`
        .clip-path-banner {
          clip-path: polygon(0% 0%, 100% 0%, 100% 90%, 50% 100%, 0% 90%);
        }
        .clip-path-house {
          clip-path: polygon(50% 0%, 100% 15%, 100% 100%, 0% 100%, 0% 15%);
        }
      `}</style>
    </section>
  );
}
