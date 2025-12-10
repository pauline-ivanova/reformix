import { getContentBySlug, getAllContentFiles, parseContentFileName } from "@/lib/content-utils";
import { notFound } from "next/navigation";
import { Metadata } from "next";
import { generateStandardMetadata } from "@/lib/metadata-utils";
import MarkdownContent from "@/app/components/content/MarkdownContent";

// Generate static params for all content files
export async function generateStaticParams() {
  const contentFiles = getAllContentFiles();
  
  const params = contentFiles
    .filter(file => {
      // Exclude homepage (00-000-homepage)
      const parsed = parseContentFileName(file.slug);
      return parsed && parsed.slug !== 'homepage';
    })
    .map((file) => {
      const parsed = parseContentFileName(file.slug);
      if (parsed) {
        // Return the slug without category and order prefix
        return { slug: parsed.slug };
      }
      // For files that don't match the pattern, use the full slug
      return { slug: file.slug };
    });

  return params;
}

// Generate metadata for each page
export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const contentFiles = getAllContentFiles();
  const contentFile = contentFiles.find(file => {
    const parsed = parseContentFileName(file.slug);
    return parsed?.slug === params.slug || file.slug === params.slug;
  });

  if (!contentFile) {
    return {
      title: 'Página no encontrada',
    };
  }

  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://reformix.barcelona';
  const pageUrl = `${baseUrl}/${params.slug}`;

  const title = contentFile.metadata.title || 'Reformix Barcelona';
  const description = contentFile.metadata.description || 
    'Empresa de reformas en Barcelona y Vallès Occidental con más de 10 años de experiencia.';

  const standardMetadata = generateStandardMetadata({
    title,
    description,
    url: pageUrl,
    pagePath: `/${params.slug}`,
    image: contentFile.metadata.image || '/images/hero-bg.webp', // Use page-specific image if available
    keywords: contentFile.metadata.keywords || [],
  });

  return {
    title,
    description,
    ...standardMetadata,
  };
}

export default async function ServicePage({ params }: { params: { slug: string } }) {
  const contentFiles = getAllContentFiles();
  const contentFile = contentFiles.find(file => {
    const parsed = parseContentFileName(file.slug);
    return parsed?.slug === params.slug || file.slug === params.slug;
  });

  if (!contentFile) {
    notFound();
  }

  return (
    <div className="container mx-auto px-4 py-8 max-w-7xl">
      <MarkdownContent content={contentFile.content} />
    </div>
  );
}

