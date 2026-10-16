import Link from 'next/link';
import CtaLink from '@/app/components/analytics/CtaLink';
import type { ProjectMidCta, ProjectSectionHeadings } from '@/lib/proyectos-data';

type ProcessStep = { title: string; text: string };

const defaultHeadings: ProjectSectionHeadings = {
  reto: 'El reto',
  solucion: 'La solución',
  proceso: 'Cómo lo hicimos',
  resultado: 'El resultado',
  takeaways: 'Qué puedes llevarte',
};

export default function ProjectNarrative({
  headings = defaultHeadings,
  reto,
  solucion,
  proceso,
  resultado,
  trustPoints,
  midCta,
  takeaways,
  relatedServices,
}: {
  headings?: ProjectSectionHeadings;
  reto: string;
  solucion: string;
  proceso: ProcessStep[];
  resultado: string;
  trustPoints: string[];
  midCta: ProjectMidCta;
  takeaways: string[];
  relatedServices: Array<{ name: string; href: string }>;
}) {
  return (
    <section className="py-12 md:py-16 bg-white">
      <div className="container mx-auto px-4 max-w-3xl space-y-12">
        <div>
          <h2 className="text-2xl md:text-3xl font-bold text-brand-text-heading mb-4">
            {headings.reto}
          </h2>
          <p className="text-brand-text-body text-base md:text-lg leading-relaxed">{reto}</p>
        </div>

        <div>
          <h2 className="text-2xl md:text-3xl font-bold text-brand-text-heading mb-4">
            {headings.solucion}
          </h2>
          <p className="text-brand-text-body text-base md:text-lg leading-relaxed">{solucion}</p>
        </div>

        <div>
          <h2 className="text-2xl md:text-3xl font-bold text-brand-text-heading mb-6">
            {headings.proceso}
          </h2>
          <ol className="space-y-5">
            {proceso.map((step, index) => (
              <li key={step.title} className="flex gap-4">
                <span className="flex-shrink-0 w-8 h-8 rounded-full bg-brand-primary/10 text-brand-primary font-bold text-sm flex items-center justify-center">
                  {index + 1}
                </span>
                <div>
                  <h3 className="font-semibold text-brand-text-heading mb-1">{step.title}</h3>
                  <p className="text-brand-text-body leading-relaxed">{step.text}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>

        <div>
          <h2 className="text-2xl md:text-3xl font-bold text-brand-text-heading mb-4">
            {headings.resultado}
          </h2>
          <p className="text-brand-text-body text-base md:text-lg leading-relaxed">{resultado}</p>
          {trustPoints.length > 0 && (
            <ul
              className={
                trustPoints.length === 3
                  ? 'mt-5 grid grid-cols-1 sm:grid-cols-3 gap-3'
                  : 'mt-5 grid grid-cols-1 sm:grid-cols-2 gap-3'
              }
            >
              {trustPoints.map((point) => (
                <li
                  key={point}
                  className="flex items-start gap-2 rounded-xl border border-gray-100 bg-gray-50 px-3 py-3 text-sm text-brand-text-body"
                >
                  <svg
                    className="w-4 h-4 text-brand-primary flex-shrink-0 mt-0.5"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    aria-hidden
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span>{point}</span>
                </li>
              ))}
            </ul>
          )}
        </div>

        <aside
          className="rounded-2xl border border-gray-200 bg-gray-50 px-6 py-7 md:px-8 md:py-8 text-center"
          aria-label="Siguiente paso"
        >
          <h2 className="text-xl md:text-2xl font-bold text-brand-text-heading mb-2">
            {midCta.title}
          </h2>
          <p className="text-brand-text-body text-base leading-relaxed mb-5 max-w-2xl mx-auto">
            {midCta.description}
          </p>
          <div className="flex justify-center mb-4">
            <CtaLink
              href={midCta.buttonHref}
              ctaId="proyecto_mid_cta"
              className="inline-flex justify-center bg-brand-primary text-white px-7 py-3 rounded-lg font-semibold hover:opacity-90 transition-opacity text-center"
            >
              {midCta.buttonText}
            </CtaLink>
          </div>
          {midCta.features.length > 0 && (
            <p className="text-sm text-brand-text-body/80">
              {midCta.features.join(' · ')}
            </p>
          )}
        </aside>

        <div>
          <h2 className="text-2xl md:text-3xl font-bold text-brand-text-heading mb-4">
            {headings.takeaways}
          </h2>
          <ul className="space-y-3">
            {takeaways.map((item) => (
              <li key={item} className="flex gap-3 text-brand-text-body leading-relaxed">
                <span className="text-brand-primary mt-1" aria-hidden>
                  ✓
                </span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>

        {relatedServices.length > 0 && (
          <p className="text-brand-text-body text-base leading-relaxed border-t border-gray-100 pt-8">
            Si estás valorando una intervención similar, consulta{' '}
            {relatedServices.map((service, index) => (
              <span key={service.href}>
                {index > 0 && (index === relatedServices.length - 1 ? ' o ' : ', ')}
                <Link
                  href={service.href}
                  className="text-brand-primary font-medium underline underline-offset-2 hover:opacity-80"
                >
                  {service.name}
                </Link>
              </span>
            ))}
            , o{' '}
            <Link
              href="/contacto"
              className="text-brand-primary font-medium underline underline-offset-2 hover:opacity-80"
            >
              escríbenos
            </Link>
            .
          </p>
        )}
      </div>
    </section>
  );
}
