/**
 * Utility functions for reading and parsing Markdown content files
 */

import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

export interface ContentMetadata {
  title?: string;
  description?: string;
  slug?: string;
  [key: string]: any;
}

export interface ContentFile {
  metadata: ContentMetadata;
  content: string;
  slug: string;
}

/**
 * Reads a markdown file and parses frontmatter
 */
export function getContentBySlug(slug: string, contentDir: string = 'A-landings-content'): ContentFile | null {
  try {
    const fullPath = path.join(process.cwd(), contentDir, `${slug}.md`);
    
    if (!fs.existsSync(fullPath)) {
      return null;
    }

    const fileContents = fs.readFileSync(fullPath, 'utf8');
    const { data, content } = matter(fileContents);

    return {
      metadata: data as ContentMetadata,
      content,
      slug,
    };
  } catch (error) {
    console.error(`Error reading content file ${slug}:`, error);
    return null;
  }
}

/**
 * Gets all content files from a directory
 */
export function getAllContentFiles(contentDir: string = 'A-landings-content'): ContentFile[] {
  try {
    const directory = path.join(process.cwd(), contentDir);
    
    if (!fs.existsSync(directory)) {
      return [];
    }

    const files = fs.readdirSync(directory);
    const contentFiles: ContentFile[] = [];

    for (const file of files) {
      if (file.endsWith('.md')) {
        const slug = file.replace(/\.md$/, '');
        const content = getContentBySlug(slug, contentDir);
        
        if (content) {
          contentFiles.push(content);
        }
      }
    }

    return contentFiles;
  } catch (error) {
    console.error(`Error reading content directory ${contentDir}:`, error);
    return [];
  }
}

/**
 * Extracts metadata from content file name
 * Example: "01-000-reformas-integrales.md" -> { category: "01", order: "000", slug: "reformas-integrales" }
 * Also works without .md extension: "01-000-reformas-integrales"
 */
export function parseContentFileName(filename: string): {
  category: string;
  order: string;
  slug: string;
  fullSlug: string;
} | null {
  // Match with or without .md extension
  const match = filename.match(/^(\d+)-(\d+)-(.+?)(?:\.md)?$/);
  
  if (!match) {
    return null;
  }

  return {
    category: match[1],
    order: match[2],
    slug: match[3],
    fullSlug: filename.replace(/\.md$/, ''),
  };
}

/**
 * Gets all static pages from the app directory
 * Excludes dynamic routes, API routes, sitemap routes, and content pages
 */
export interface StaticPage {
  slug: string;
  lastModified: Date;
  changeFrequency: 'always' | 'hourly' | 'daily' | 'weekly' | 'monthly' | 'yearly' | 'never';
  priority: number;
  title?: string;
}

export function getAllStaticPages(appDir: string = 'app'): StaticPage[] {
  try {
    const directory = path.join(process.cwd(), appDir);
    
    if (!fs.existsSync(directory)) {
      return [];
    }

    const staticPages: StaticPage[] = [];
    const contentFiles = getAllContentFiles();
    const contentSlugs = new Set(
      contentFiles
        .map(file => {
          const parsed = parseContentFileName(file.slug);
          return parsed ? parsed.slug : null;
        })
        .filter((slug): slug is string => slug !== null)
    );

    // Directories to exclude
    const excludeDirs = [
      'api',
      'components',
      '[slug]',
      'sitemap',
      'sitemap_index.xml',
      'sitemap-reformas-integrales.xml',
      'sitemap-reformas-estancia.xml',
      'sitemap-servicios-tecnicos.xml',
      'sitemap-legal.xml',
      'sitemap.xml',
      'site-map',
      '_next',
    ];

    const scanDirectory = (dir: string, baseSlug: string = ''): void => {
      const items = fs.readdirSync(dir, { withFileTypes: true });

      for (const item of items) {
        // Skip hidden files and directories
        if (item.name.startsWith('.')) {
          continue;
        }

        // Skip excluded directories
        if (excludeDirs.includes(item.name)) {
          continue;
        }

        const fullPath = path.join(dir, item.name);

        if (item.isDirectory()) {
          // Recursively scan subdirectories
          const newSlug = baseSlug ? `${baseSlug}/${item.name}` : item.name;
          scanDirectory(fullPath, newSlug);
        } else if (item.name === 'page.tsx' || item.name === 'page.js') {
          // Found a page file
          const slug = baseSlug || '';
          
          // Skip if it's a content page (handled by [slug] route)
          if (contentSlugs.has(slug)) {
            continue;
          }

          // Skip root page (homepage is in reformas-integrales sitemap)
          if (!slug) {
            continue;
          }

          // Get file modification date
          let lastModified: Date;
          try {
            const stats = fs.statSync(fullPath);
            lastModified = stats.mtime;
          } catch {
            lastModified = new Date();
          }

          // Determine priority and change frequency based on page type
          const { priority, changeFrequency, title } = getPageMetadata(slug);

          staticPages.push({
            slug,
            lastModified,
            changeFrequency,
            priority,
            title,
          });
        }
      }
    };

    scanDirectory(directory);

    // Sort by slug for consistent ordering
    return staticPages.sort((a, b) => a.slug.localeCompare(b.slug));
  } catch (error) {
    console.error(`Error scanning static pages from ${appDir}:`, error);
    return [];
  }
}

/**
 * Determines metadata (priority, changeFrequency, title) for a static page based on its slug
 */
function getPageMetadata(slug: string): {
  priority: number;
  changeFrequency: StaticPage['changeFrequency'];
  title: string;
} {
  // Legal pages - low priority, yearly updates
  if (['privacidad', 'aviso-legal', 'cookies'].includes(slug)) {
    return {
      priority: 0.4,
      changeFrequency: 'yearly',
      title: formatPageTitle(slug),
    };
  }

  // Contact page - high priority, monthly updates
  if (slug === 'contacto') {
    return {
      priority: 0.8,
      changeFrequency: 'monthly',
      title: 'Contacto',
    };
  }

  // Default for other static pages
  return {
    priority: 0.6,
    changeFrequency: 'monthly',
    title: formatPageTitle(slug),
  };
}

/**
 * Formats a slug into a readable title
 */
function formatPageTitle(slug: string): string {
  return slug
    .split('-')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');
}

/**
 * Known reformas comerciales pages
 * This includes the hub page and all subpages
 */
export const REFORMAS_COMERCIALES_SLUGS = new Set([
  'reformas-comerciales',
  'reformas-oficinas',
  'locales-comerciales-retail',
  'restaurantes-bares',
  'clinicas-centros-sanitarios',
  'gimnasios-centros-deportivos',
  'hoteles-alojamientos',
]);

/**
 * Known servicios técnicos pages
 * This includes all pages that are part of servicios técnicos category
 */
export const SERVICIOS_TECNICOS_SLUGS = new Set([
  'servicios-tecnicos',
  'aislamiento-termico-acustico',
  'pladur',
  'carpinteria',
  'fontaneria',
  'electricidad',
  'pintura-interior',
  'albanileria',
  'calefaccion-climatizacion',
  'impermeabilizaciones',
  'alicatado',
  'montaje-muebles-cocinas',
  'ventanas',
]);

/**
 * Reformas Integrales pages (category 01)
 */
export const REFORMAS_INTEGRALES_SLUGS = new Set([
  'reformas-integrales',
  'reformas-integrales-pisos',
  'rehabilitacion-casas',
  'interiorismo-colaboracion',
]);

/**
 * Reformas por Estancia pages (category 02)
 */
export const REFORMAS_ESTANCIA_SLUGS = new Set([
  'reformas-por-estancia',
  'reformas-cocinas',
  'reformas-banos',
  'reformas-salones',
  'reformas-habitaciones',
  'reformas-terrazas-balcones',
  'reformas-recibidores',
]);

/**
 * Legal and Informational pages
 */
export const LEGAL_SLUGS = new Set([
  'aviso-legal',
  'privacidad',
  'cookies',
  'contacto',
]);

/**
 * Gets pages for Reformas Comerciales based on known slugs
 */
export function getReformasComercialesPages(): StaticPage[] {
  // Use known slugs instead of scanning directory to be safe in production
  return Array.from(REFORMAS_COMERCIALES_SLUGS).map(slug => ({
    slug,
    lastModified: new Date(), // We could try to get real date but new Date() is safer fallback
    changeFrequency: 'monthly',
    priority: slug === 'reformas-comerciales' ? 0.8 : 0.7,
    title: formatPageTitle(slug),
  }));
}

/**
 * Gets pages for Servicios Técnicos based on known slugs
 * Merges with content files if any (though slugs list covers them)
 */
export function getServiciosTecnicosPages(): StaticPage[] {
  const contentFiles = getAllContentFiles();
  const pages: StaticPage[] = [];
  const addedSlugs = new Set<string>();

  // Add from known slugs list (prioritized)
  Array.from(SERVICIOS_TECNICOS_SLUGS).forEach(slug => {
    pages.push({
      slug,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: slug === 'servicios-tecnicos' ? 0.8 : 0.7,
      title: formatPageTitle(slug),
    });
    addedSlugs.add(slug);
  });

  // Add any content files in category 03 that aren't in the list
  contentFiles.forEach(file => {
    const parsed = parseContentFileName(file.slug);
    if (parsed && parsed.category === '03' && !addedSlugs.has(parsed.slug)) {
      pages.push({
        slug: parsed.slug,
        lastModified: new Date(),
        changeFrequency: 'monthly',
        priority: 0.7,
        title: file.metadata.title,
      });
      addedSlugs.add(parsed.slug);
    }
  });

  return pages;
}

/**
 * Gets pages for Reformas Integrales
 * Mainly from content files category 01
 */
export function getReformasIntegralesPages(): StaticPage[] {
  const contentFiles = getAllContentFiles();
  const pages: StaticPage[] = [];
  
  // Add homepage (implicitly part of this section)
  pages.push({
      slug: '', // Represents homepage
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 1.0,
      title: 'Inicio'
  });

  contentFiles.forEach(file => {
    const parsed = parseContentFileName(file.slug);
    if (parsed && parsed.category === '01') {
      pages.push({
        slug: parsed.slug,
        lastModified: new Date(),
        changeFrequency: 'monthly',
        priority: 0.8,
        title: file.metadata.title,
      });
    }
  });
  
  return pages;
}

/**
 * Gets pages for Reformas por Estancia
 * Mainly from content files category 02
 */
export function getReformasEstanciaPages(): StaticPage[] {
  const contentFiles = getAllContentFiles();
  const pages: StaticPage[] = [];
  
  contentFiles.forEach(file => {
    const parsed = parseContentFileName(file.slug);
    if (parsed && parsed.category === '02') {
      pages.push({
        slug: parsed.slug,
        lastModified: new Date(),
        changeFrequency: 'monthly',
        priority: 0.7,
        title: file.metadata.title,
      });
    }
  });
  
  return pages;
}

/**
 * Gets only legal/informational pages for the legal sitemap
 */
export function getLegalPages(appDir: string = 'app'): StaticPage[] {
  // Use known slugs instead of scanning
  return Array.from(LEGAL_SLUGS).map(slug => {
    const { priority, changeFrequency, title } = getPageMetadata(slug);
    return {
      slug,
      lastModified: new Date(),
      changeFrequency,
      priority,
      title: title || formatPageTitle(slug),
    };
  });
}

