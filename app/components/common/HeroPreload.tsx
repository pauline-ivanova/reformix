interface HeroPreloadProps {
  imagePath: string;
}

/**
 * Server component that adds a preload link for hero image in the document head
 * This improves LCP (Largest Contentful Paint) by starting image download earlier
 * 
 * Note: In Next.js App Router, we use a script tag to inject the preload link
 * as early as possible in the document head
 */
export default function HeroPreload({ imagePath }: HeroPreloadProps) {
  return (
    <script
      dangerouslySetInnerHTML={{
        __html: `
          (function() {
            if (document.querySelector('link[rel="preload"][href="${imagePath}"]')) return;
            const link = document.createElement('link');
            link.rel = 'preload';
            link.as = 'image';
            link.href = '${imagePath}';
            link.setAttribute('fetchpriority', 'high');
            document.head.insertBefore(link, document.head.firstChild);
          })();
        `,
      }}
    />
  );
}

