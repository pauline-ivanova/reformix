/**
 * Utility functions for generating SEO-optimized metadata for Reformix Barcelona
 */

import type { Metadata } from 'next';

/**
 * Truncates text to a maximum length, ensuring it ends at a word boundary.
 * Length includes all spaces between words.
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
 * SEO-optimized title truncation.
 * Recommended length: 45-55 characters (including spaces).
 * Truncates to 55 characters max, ensuring it ends at a word boundary.
 */
export function truncateTitle(title: string, maxLength: number = 55): string {
  return truncateText(title, maxLength);
}

/**
 * SEO-optimized description truncation.
 * Recommended length: up to 150 characters (including spaces).
 * Truncates to 150 characters max, ensuring it ends at a word boundary.
 */
export function truncateDescription(description: string, maxLength: number = 150): string {
  return truncateText(description, maxLength);
}

/**
 * Generates standard metadata fields including robots, keywords, publisher, Open Graph, and Twitter Card.
 * 
 * Note: Title should be 45-55 characters (including spaces), Description should be up to 150 characters (including spaces).
 * Use truncateTitle() and truncateDescription() helpers if needed.
 */
export interface StandardMetadataOptions {
  description: string; // Recommended: up to 150 characters (including spaces)
  url: string;
  pagePath?: string;
  title?: string; // Optional title for Open Graph (if different from page title). Recommended: 45-55 characters (including spaces)
  image?: string; // Optional image URL for Open Graph (defaults to hero-bg.webp)
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
    description,
    url,
    pagePath = '/',
    title,
    image,
    robots = { index: true, follow: true },
    keywords = [],
    language = 'es-ES',
  } = options;

  const keywordsString = keywords.length > 0 ? keywords.join(', ') : '';
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://www.reformix.barcelona';
  
  // Default OG image - use hero-bg.webp as fallback
  const ogImage = image || `${baseUrl}/images/hero-bg.webp`;
  // Ensure absolute URL for OG image
  const ogImageUrl = ogImage.startsWith('http') ? ogImage : `${baseUrl}${ogImage.startsWith('/') ? '' : '/'}${ogImage}`;

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
    description,
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
    // Open Graph metadata for social media sharing (Facebook, WhatsApp, Telegram, etc.)
    openGraph: {
      type: 'website',
      url: url,
      title: title || 'Reformix Barcelona | Empresa de Reformas en Barcelona y Vallès Occidental',
      description: description,
      siteName: 'Reformix Barcelona',
      images: [
        {
          url: ogImageUrl,
          width: 1200,
          height: 630,
          alt: title || 'Reformix Barcelona - Empresa de Reformas',
        },
      ],
      locale: language,
    },
    // Twitter Card metadata
    twitter: {
      card: 'summary_large_image',
      title: title || 'Reformix Barcelona | Empresa de Reformas en Barcelona y Vallès Occidental',
      description: description,
      images: [ogImageUrl],
    },
  };

  return metadata;
}

