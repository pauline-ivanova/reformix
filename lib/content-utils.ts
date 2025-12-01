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

