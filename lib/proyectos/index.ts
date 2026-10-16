/**
 * Proyectos realizados — registry for /proyectos and /proyectos/[slug].
 *
 * Add a new project:
 * 1. Create lib/proyectos/{slug}.ts exporting `project`
 * 2. Import it below and append to `proyectos`
 * 3. Add content/proyectos/{slug}.md ficha + public images under public/images/proyectos/{slug}/
 */

import type { Project } from './types';
import { project as rehabilitacionFachadaCastelldefels } from './rehabilitacion-fachada-castelldefels-casa-familiar';
import { project as papelPintadoSantGervasi } from './papel-pintado-piso-sant-gervasi-barcelona';

export type {
  Project,
  ProjectClosingCta,
  ProjectFaq,
  ProjectFicha,
  ProjectImage,
  ProjectImagePhase,
  ProjectMidCta,
  ProjectSectionHeadings,
  RelatedService,
} from './types';

/** Ordered list — newest last (or reorder intentionally for the index). */
export const proyectos: Project[] = [
  rehabilitacionFachadaCastelldefels,
  papelPintadoSantGervasi,
];

export function getAllProyectos(): Project[] {
  return proyectos;
}

export function getProyectoBySlug(slug: string): Project | undefined {
  return proyectos.find((p) => p.slug === slug);
}

export function getProyectoSlugs(): string[] {
  return proyectos.map((p) => p.slug);
}
