import Hero from '@/app/components/blocks/Hero';
import CTA from '@/app/components/blocks/CTA';
import ProjectCard from '@/app/components/blocks/ProjectCard';
import JsonLd from '@/app/components/common/JsonLd';
import { Metadata } from 'next';
import { generateStandardMetadata } from '@/lib/metadata-utils';
import { getAllProyectos } from '@/lib/proyectos-data';
import { buildProyectosIndexJsonLd } from '@/lib/schema/proyectos';

const title = 'Proyectos realizados en Barcelona y Vallès Occidental | Reformix';
const description =
  'Informes de obra reales: fachadas, reformas y rehabilitaciones en Barcelona y Vallès Occidental. Mira el proceso y el resultado. ¡Pide presupuesto!';

export const metadata: Metadata = {
  title,
  description,
  ...generateStandardMetadata({
    title,
    description,
    url: 'https://www.reformix.barcelona/proyectos',
    pagePath: '/proyectos',
    keywords: [
      'proyectos reformas Barcelona',
      'obras realizadas Vallès Occidental',
      'rehabilitación fachada ejemplos',
      'casos reforma Sabadell',
    ],
    image: '/images/rehabilitacion-integral-de-casas-en-barcelona.webp',
  }),
};

export default function ProyectosIndexPage() {
  const projects = getAllProyectos();
  const jsonLd = buildProyectosIndexJsonLd({
    title,
    description,
    items: projects.map((p) => ({
      name: p.title,
      url: `/proyectos/${p.slug}`,
    })),
  });

  return (
    <>
      <JsonLd data={jsonLd} />
      <Hero
        title="Proyectos realizados en Barcelona y Vallès Occidental"
        titleLines={['Proyectos realizados', 'en Barcelona y Vallès Occidental']}
        subtitle="Informes de obra con el reto, el proceso y el resultado. Transparencia real para decidir tu reforma con tranquilidad."
        primaryCTA={{ text: 'Pedir presupuesto', href: '/contacto' }}
        backgroundImage="/images/rehabilitacion-integral-de-casas-en-barcelona.webp"
        imageAlt="Proyectos de reforma y rehabilitación realizados por Reformix en Barcelona y Vallès Occidental"
      />

      <section className="py-14 md:py-20 bg-white">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="text-center max-w-3xl mx-auto mb-10">
            <h2 className="text-2xl md:text-3xl font-bold text-brand-text-heading mb-3">
              Obras que explican cómo trabajamos
            </h2>
            <p className="text-brand-text-body text-base md:text-lg leading-relaxed">
              Cada proyecto resume el problema de partida, la solución técnica y el acabado final.
              Úsalos como referencia si estás valorando una{' '}
              <a
                href="/rehabilitacion-casas"
                className="text-brand-primary font-medium underline underline-offset-2"
              >
                rehabilitación de casa
              </a>{' '}
              o una intervención de fachada en Barcelona, Vallès Occidental o el Baix Llobregat.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {projects.map((project) => (
              <ProjectCard key={project.slug} project={project} />
            ))}
          </div>
        </div>
      </section>

      <CTA
        title="¿Quieres un resultado parecido en tu casa?"
        description="Cuéntanos tu caso. Te proponemos un plan claro y un presupuesto cerrado sin sorpresas."
        buttonText="Solicitar presupuesto"
        buttonHref="/contacto"
        features={['Visita técnica', 'Presupuesto cerrado', 'Equipo propio']}
      />
    </>
  );
}
