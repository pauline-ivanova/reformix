/**
 * Shared types for project landing pages (/proyectos/[slug]).
 */

export type ProjectImagePhase = 'antes' | 'proceso' | 'despues';

export type ProjectImage = {
  src: string;
  alt: string;
  caption: string;
  phase: ProjectImagePhase;
};

export type ProjectFaq = {
  question: string;
  answer: string;
};

export type ProjectFicha = {
  tipo: string;
  zona: string;
  trabajos: string;
  /** Real duration only — omit if not confirmed. */
  plazo?: string;
  /** Real area only — omit if not confirmed. */
  superficie?: string;
  /** Short system / method summary when useful for the ficha. */
  sistema?: string;
  /** Extra remates executed in the same campaign. */
  remates?: string;
  /** Real year only — omit if not confirmed. */
  year?: string;
};

export type RelatedService = {
  name: string;
  href: string;
};

export type ProjectSectionHeadings = {
  reto: string;
  solucion: string;
  proceso: string;
  resultado: string;
  takeaways: string;
};

/** Mid-page conversion block after resultado (trust peak). */
export type ProjectMidCta = {
  title: string;
  description: string;
  buttonText: string;
  buttonHref: string;
  features: string[];
};

export type ProjectClosingCta = {
  title: string;
  description: string;
  buttonText: string;
  buttonHref: string;
  features: string[];
};

export type ProjectHeroCta = {
  text: string;
  href: string;
};

export type Project = {
  slug: string;
  title: string;
  metaTitle: string;
  metaDescription: string;
  h1: string;
  subtitle: string;
  heroImage: string;
  heroImageAlt: string;
  /** Optional overrides for the project hero CTAs. */
  heroPrimaryCta?: ProjectHeroCta;
  heroSecondaryCta?: ProjectHeroCta;
  keywords: string[];
  ficha: ProjectFicha;
  headings: ProjectSectionHeadings;
  reto: string;
  solucion: string;
  proceso: Array<{ title: string; text: string }>;
  resultado: string;
  /** USP strip under resultado — commercial proof, not narrative. */
  trustPoints: string[];
  midCta: ProjectMidCta;
  takeaways: string[];
  galleryIntro: string;
  gallery: ProjectImage[];
  relatedServices: RelatedService[];
  faqs: ProjectFaq[];
  /** Two-line FAQ section title for FAQTwoColumn. */
  faqTitleLines: [string, string];
  closingCta: ProjectClosingCta;
  cardSummary: string;
};
