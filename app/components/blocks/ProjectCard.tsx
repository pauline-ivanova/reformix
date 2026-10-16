import Link from 'next/link';
import Image from 'next/image';
import type { Project } from '@/lib/proyectos-data';

export default function ProjectCard({ project }: { project: Project }) {
  return (
    <article className="group bg-white rounded-2xl border border-gray-100 overflow-hidden shadow-sm hover:shadow-md transition-shadow">
      <Link href={`/proyectos/${project.slug}`} className="block">
        <div className="relative aspect-[16/10]">
          <Image
            src={project.heroImage}
            alt={project.heroImageAlt}
            fill
            className="object-cover transition-transform duration-300 group-hover:scale-[1.02]"
            sizes="(max-width: 768px) 100vw, 50vw"
          />
        </div>
        <div className="p-6">
          <p className="text-xs uppercase tracking-wide text-brand-primary font-semibold mb-2">
            {project.ficha.zona}
          </p>
          <h3 className="text-xl font-bold text-brand-text-heading mb-2 group-hover:text-brand-primary transition-colors">
            {project.title}
          </h3>
          <p className="text-brand-text-body text-sm leading-relaxed mb-4">{project.cardSummary}</p>
          <span className="text-sm font-semibold text-brand-primary">Ver proyecto →</span>
        </div>
      </Link>
    </article>
  );
}
