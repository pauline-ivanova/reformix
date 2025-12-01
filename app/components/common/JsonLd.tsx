interface JsonLdProps {
  data: object | object[];
}

export default function JsonLd({ data }: JsonLdProps) {
  const jsonLd = Array.isArray(data) ? data : [data];

  return (
    <>
      {jsonLd.map((item, index) => (
        <script
          key={index}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(item) }}
        />
      ))}
    </>
  );
}

/**
 * Generate Organization schema
 */
export function generateOrganizationSchema({
  name,
  url,
  description,
  contactPoint,
}: {
  name: string;
  url: string;
  description?: string;
  contactPoint?: {
    contactType: string;
    email?: string;
    telephone?: string;
  };
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name,
    url,
    description,
    contactPoint: contactPoint
      ? {
          '@type': 'ContactPoint',
          contactType: contactPoint.contactType,
          email: contactPoint.email,
          telephone: contactPoint.telephone,
        }
      : undefined,
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Sabadell',
      addressRegion: 'Vallès Occidental',
      addressCountry: 'ES',
    },
    areaServed: [
      {
        '@type': 'City',
        name: 'Barcelona',
      },
      {
        '@type': 'City',
        name: 'Sabadell',
      },
      {
        '@type': 'AdministrativeArea',
        name: 'Vallès Occidental',
      },
    ],
  };
}

/**
 * Generate WebSite schema
 */
export function generateWebSiteSchema({
  name,
  url,
  description,
}: {
  name: string;
  url: string;
  description?: string;
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name,
    url,
    description,
  };
}

/**
 * Generate LocalBusiness schema
 */
export function generateLocalBusinessSchema({
  name,
  url,
  description,
  telephone,
  email,
  priceRange,
}: {
  name: string;
  url: string;
  description?: string;
  telephone?: string;
  email?: string;
  priceRange?: string;
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    '@id': url,
    name,
    url,
    description,
    telephone,
    email,
    priceRange,
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Sabadell',
      addressRegion: 'Vallès Occidental',
      postalCode: '08201',
      addressCountry: 'ES',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: '41.5433',
      longitude: '2.1094',
    },
    areaServed: [
      {
        '@type': 'City',
        name: 'Barcelona',
      },
      {
        '@type': 'City',
        name: 'Sabadell',
      },
      {
        '@type': 'AdministrativeArea',
        name: 'Vallès Occidental',
      },
    ],
  };
}

/**
 * Generate FAQPage schema
 */
export function generateFAQSchema(faqs: Array<{ question: string; answer: string }>) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
  };
}

