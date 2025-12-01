/**
 * Utility functions for generating SEO-optimized metadata for Reformix Barcelona
 */

import type { Metadata } from 'next';

/**
 * Truncates text to a maximum length, ensuring it ends at a word boundary
 */
export function truncateText(text: string, maxLength: number, suffix: string = '...'): string {
  if (!text || text.length <= maxLength) {
    return text;
  }

  const truncated = text.substring(0, maxLength - suffix.length);
  const lastSpace = truncated.lastIndexOf(' ');

  if (lastSpace > 0) {
    return truncated.substring(0, lastSpace) + suffix;
  }

  return truncated + suffix;
}

/**
 * Generates standard metadata fields including robots, keywords, and publisher
 */
export interface StandardMetadataOptions {
  title: string;
  description: string;
  url: string;
  pagePath?: string;
  robots?: {
    index?: boolean;
    follow?: boolean;
    noarchive?: boolean;
    nosnippet?: boolean;
    noimageindex?: boolean;
  };
  keywords?: string[];
  language?: string;
}

export function generateStandardMetadata(options: StandardMetadataOptions): Partial<Metadata> {
  const {
    title,
    description,
    url,
    pagePath = '/',
    robots = { index: true, follow: true },
    keywords = [],
    language = 'es-ES',
  } = options;

  const keywordsString = keywords.length > 0 ? keywords.join(', ') : '';

  // Build robots string
  const robotsParts: string[] = [];
  if (robots.index === false) {
    robotsParts.push('noindex');
  } else {
    robotsParts.push('index');
  }
  if (robots.follow === false) {
    robotsParts.push('nofollow');
  } else {
    robotsParts.push('follow');
  }
  if (robots.noarchive) robotsParts.push('noarchive');
  if (robots.nosnippet) robotsParts.push('nosnippet');
  if (robots.noimageindex) robotsParts.push('noimageindex');

  const metadata: Partial<Metadata> = {
    robots: robotsParts.join(', '),
    other: {
      'keywords': keywordsString,
      'publisher': 'Reformix Barcelona',
      'geo.region': 'ES-CT',
      'geo.placename': 'Barcelona, Vallès Occidental',
      'geo.position': '41.3851;2.1734',
      'ICBM': '41.3851, 2.1734',
    },
    alternates: {
      canonical: url,
      languages: {
        [language]: url,
        'x-default': url,
      },
    },
  };

  return metadata;
}

