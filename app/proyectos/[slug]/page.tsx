import { notFound } from 'next/navigation';
import Hero from '@/app/components/blocks/Hero';
import CTA from '@/app/components/blocks/CTA';
import FAQTwoColumn from '@/app/components/blocks/FAQTwoColumn';
import ProjectFicha from '@/app/components/blocks/ProjectFicha';
import ProjectGallery from '@/app/components/blocks/ProjectGallery';
import ProjectNarrative from '@/app/components/blocks/ProjectNarrative';
import JsonLd from '@/app/components/common/JsonLd';
import { generateFAQSchema } from '@/app/components/common/JsonLd';
import { Metadata } from 'next';
import { generateStandardMetadata } from '@/lib/metadata-utils';
import { getAllProyectos, getProyectoBySlug, getProyectoSlugs } from '@/lib/proyectos-data';
import { buildProyectoArticleJsonLd } from '@/lib/schema/proyectos';
import { getSiteUrl } from '@/lib/site-url';

type PageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return getProyectoSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = getProyectoBySlug(slug);
  if (!project) {
    return { title: 'Proyecto no encontrado | Reformix' };
  }

  const url = `${getSiteUrl()}/proyectos/${project.slug}`;
  return {
    title: project.metaTitle,
    description: project.metaDescription,
    ...generateStandardMetadata({
      title: project.metaTitle,
      description: project.metaDescription,
      url,
      pagePath: `/proyectos/${project.slug}`,
      keywords: project.keywords,
      image: project.heroImage,
    }),
  };
}

export default async function ProyectoPage({ params }: PageProps) {
  const { slug } = await params;
  const project = getProyectoBySlug(slug);
  if (!project) notFound();

  const articleJsonLd = buildProyectoArticleJsonLd(project);
  const faqSchema = generateFAQSchema(project.faqs);
  const siblings = getAllProyectos().filter((p) => p.slug !== project.slug);

  return (
    <>
      <JsonLd data={articleJsonLd} />
      {faqSchema && <JsonLd data={faqSchema} />}

      <Hero
        title={project.h1}
        subtitle={project.subtitle}
        primaryCTA={
          project.heroPrimaryCta ?? { text: 'Pedir presupuesto', href: '/contacto' }
        }
        secondaryCTA={
          project.heroSecondaryCta ?? {
            text: 'Ver todos los proyectos',
            href: '/proyectos',
          }
        }
        backgroundImage={project.heroImage}
        imageAlt={project.heroImageAlt}
      />

      <ProjectFicha ficha={project.ficha} />
      <ProjectNarrative
        headings={project.headings}
        reto={project.reto}
        solucion={project.solucion}
        proceso={project.proceso}
        resultado={project.resultado}
        trustPoints={project.trustPoints}
        midCta={project.midCta}
        takeaways={project.takeaways}
        relatedServices={project.relatedServices}
      />
      <ProjectGallery images={project.gallery} intro={project.galleryIntro} />

      {project.faqs.length > 0 && (
        <FAQTwoColumn titleLines={project.faqTitleLines} items={project.faqs} />
      )}

      {siblings.length > 0 && (
        <section className="py-12 bg-white">
          <div className="container mx-auto px-4 max-w-5xl text-center">
            <h2 className="text-2xl font-bold text-brand-text-heading mb-4">Más proyectos</h2>
            <ul className="space-y-2">
              {siblings.map((p) => (
                <li key={p.slug}>
                  <a
                    href={`/proyectos/${p.slug}`}
                    className="text-brand-primary font-medium underline underline-offset-2"
                  >
                    {p.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </section>
      )}

      <CTA
        title={project.closingCta.title}
        description={project.closingCta.description}
        buttonText={project.closingCta.buttonText}
        buttonHref={project.closingCta.buttonHref}
        features={project.closingCta.features}
      />
    </>
  );
}
