/**
 * Compatibility entrypoint for project landings.
 * One project = one file under lib/proyectos/{slug}.ts
 */
export {
  getAllProyectos,
  getProyectoBySlug,
  getProyectoSlugs,
  proyectos,
} from './proyectos/index';

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
} from './proyectos/types';
