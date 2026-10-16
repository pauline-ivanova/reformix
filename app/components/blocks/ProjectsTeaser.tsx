import Link from 'next/link';
import ProjectCard from '@/app/components/blocks/ProjectCard';
import type { Project } from '@/lib/proyectos-data';

interface ProjectsTeaserProps {
  projects: Project[];
  title?: string;
  subtitle?: string;
  ctaText?: string;
  ctaHref?: string;
}

export default function ProjectsTeaser({
  projects,
  title = 'Proyectos de reformas en Barcelona y Vallès Occidental',
  subtitle = 'Obras reales documentadas: rehabilitación, acabados y reformas por estancia.',
  ctaText = 'Ver todos los proyectos',
  ctaHref = '/proyectos',
}: ProjectsTeaserProps) {
  if (projects.length === 0) return null;

  return (
    <section className="py-16 md:py-20 bg-brand-accent-neutral/40">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="text-center max-w-3xl mx-auto mb-10 md:mb-12">
          <h2 className="text-2xl md:text-3xl font-bold text-brand-text-heading mb-3">
            {title}
          </h2>
          <p className="text-brand-text-body text-base md:text-lg leading-relaxed">
            {subtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-10">
          {projects.map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}
        </div>

        <div className="text-center">
          <Link
            href={ctaHref}
            className="inline-flex items-center justify-center rounded-lg bg-brand-primary px-8 py-3 text-sm font-semibold text-white shadow-md hover:shadow-lg hover:bg-brand-primary/95 transition-all duration-200"
          >
            {ctaText}
          </Link>
        </div>
      </div>
    </section>
  );
}
