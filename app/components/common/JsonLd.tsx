import {
  absoluteSchemaUrl,
  providerLocalBusinessRef,
  schemaLocalBusinessId,
  schemaOrgId,
  schemaWebsiteId,
} from '@/lib/schema/ids';

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
 * Generate Organization schema (full node — layout only; elsewhere use orgRef).
 */
export function generateOrganizationSchema({
  name,
  url,
  description,
  contactPoint,
  sameAs,
  slogan,
  knowsAbout,
}: {
  name: string;
  url: string;
  description?: string;
  contactPoint?: {
    contactType: string;
    email?: string;
    telephone?: string;
  };
  sameAs?: string[]; // Социальные сети
  slogan?: string;
  knowsAbout?: string[]; // Темы экспертизы
}) {
  const schema: Record<string, unknown> = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    '@id': schemaOrgId(),
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

  if (sameAs && sameAs.length > 0) {
    schema.sameAs = sameAs;
  }

  if (slogan) {
    schema.slogan = slogan;
  }

  if (knowsAbout && knowsAbout.length > 0) {
    schema.knowsAbout = knowsAbout;
  }

  return schema;
}

/**
 * Generate WebSite schema (full node — layout only; elsewhere use websiteRef).
 * Do not attach SearchAction until a real site search exists (ops Phase F).
 */
export function generateWebSiteSchema({
  name,
  url,
  description,
  potentialAction,
}: {
  name: string;
  url: string;
  description?: string;
  potentialAction?: {
    '@type': string;
    target: {
      '@type': string;
      urlTemplate: string;
    };
    'query-input': string;
  };
}) {
  const schema: Record<string, unknown> = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    '@id': schemaWebsiteId(),
    name,
    url,
    description,
    inLanguage: 'es-ES',
    publisher: { '@id': schemaOrgId() },
  };

  if (potentialAction) {
    schema.potentialAction = potentialAction;
  }

  return schema;
}

/**
 * Generate LocalBusiness schema (HomeAndConstructionBusiness)
 */
export function generateLocalBusinessSchema({
  name,
  url,
  description,
  telephone,
  email,
  priceRange,
  logo,
  image,
  openingHours,
  streetAddress,
  postalCode,
}: {
  name: string;
  url: string;
  description?: string;
  telephone?: string;
  email?: string;
  priceRange?: string;
  logo?: string;
  image?: string;
  openingHours?: string;
  streetAddress?: string;
  postalCode?: string;
}) {
  const logoUrl = logo ? absoluteSchemaUrl(logo) : absoluteSchemaUrl('/reformix-logo.svg');
  const imageUrl = image ? absoluteSchemaUrl(image) : absoluteSchemaUrl('/images/hero-bg.webp');

  return {
    '@context': 'https://schema.org',
    '@type': ['LocalBusiness', 'HomeAndConstructionBusiness'],
    '@id': schemaLocalBusinessId(),
    name,
    alternateName: 'Empresa de reformas en Sabadell',
    url,
    description,
    telephone: telephone || '+34 642 029 572',
    email: email || 'reformix.barcelona@gmail.com',
    priceRange: priceRange || '€€',
    logo: logoUrl,
    image: imageUrl,
    openingHours: openingHours || 'Mo-Sa 08:00-20:00',
    openingHoursSpecification: [
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
        opens: '08:00',
        closes: '20:00',
      },
    ],
    paymentAccepted: ['Cash', 'Credit Card', 'Bank Transfer'],
    address: {
      '@type': 'PostalAddress',
      streetAddress: streetAddress || 'Carrer de Concepción Arenal, 100',
      addressLocality: 'Sabadell',
      addressRegion: 'Vallès Occidental',
      postalCode: postalCode || '08204',
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
        '@type': 'City',
        name: 'Terrassa',
      },
      {
        '@type': 'City',
        name: 'Sant Cugat del Vallès',
      },
      {
        '@type': 'AdministrativeArea',
        name: 'Vallès Occidental',
      },
    ],
    contactPoint: {
      '@type': 'ContactPoint',
      telephone: telephone || '+34 642 029 572',
      contactType: 'Customer Service',
      email: email || 'reformix.barcelona@gmail.com',
      areaServed: 'ES',
      availableLanguage: ['Spanish', 'Catalan'],
    },
    parentOrganization: { '@id': schemaOrgId() },
  };
}

/**
 * Generate FAQPage schema
 */
export function generateFAQSchema(faqs: Array<{ question: string; answer: string }>) {
  if (!faqs || faqs.length === 0) {
    return null;
  }

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

/**
 * Generate BreadcrumbList schema
 */
export function generateBreadcrumbSchema(items: Array<{ name: string; url: string }>) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: absoluteSchemaUrl(item.url),
    })),
  };
}

/**
 * Generate Service schema
 */
export function generateServiceSchema({
  name,
  description,
  provider,
  areaServed,
  serviceType,
  url,
}: {
  name: string;
  description: string;
  provider: {
    '@type': string;
    name: string;
  };
  areaServed?: Array<{ '@type': string; name: string }>;
  serviceType?: string;
  url?: string;
}) {
  // Обязательные города: Barcelona и Sabadell (всегда должны быть первыми)
  const requiredCities = [
    {
      '@type': 'City',
      name: 'Barcelona',
    },
    {
      '@type': 'City',
      name: 'Sabadell',
    },
  ];

  // Если передан areaServed, объединяем с обязательными городами
  let finalAreaServed: Array<{ '@type': string; name: string }>;
  if (areaServed && areaServed.length > 0) {
    // Фильтруем переданные города, исключая Barcelona и Sabadell (они будут добавлены первыми)
    const otherCities = areaServed.filter(
      city => city.name !== 'Barcelona' && city.name !== 'Sabadell'
    );
    
    // Обязательные города всегда первыми, затем остальные
    finalAreaServed = [...requiredCities, ...otherCities];
  } else {
    // Если areaServed не передан, используем обязательные города + Vallès Occidental
    finalAreaServed = [
      ...requiredCities,
      {
        '@type': 'AdministrativeArea',
        name: 'Vallès Occidental',
      },
    ];
  }
  
  const schema: Record<string, unknown> = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name,
    description,
    provider: {
      ...providerLocalBusinessRef(),
      ...provider,
      '@id': schemaLocalBusinessId(),
    },
    areaServed: finalAreaServed,
  };

  if (serviceType) {
    schema.serviceType = serviceType;
  }

  if (url) {
    const abs = absoluteSchemaUrl(url);
    schema.url = abs;
    schema['@id'] = `${abs}#service`;
  }

  return schema;
}

/**
 * Generate Review entities for visible testimonials.
 * Does NOT attach AggregateRating to LocalBusiness — Google rejects self-serving
 * review rich results on local businesses and flags incomplete duplicate nodes.
 */
export function generateReviewSchema({
  reviews,
}: {
  reviews?: Array<{
    author: string;
    reviewBody: string;
    ratingValue: number;
    datePublished?: string;
  }>;
  /** @deprecated Ignored — self-serving AggregateRating fails Google rich results. */
  aggregateRating?: {
    ratingValue: number;
    bestRating?: number;
    worstRating?: number;
    ratingCount: number;
  };
}) {
  if (!reviews || reviews.length === 0) {
    return null;
  }

  return reviews.map((review) => ({
    '@context': 'https://schema.org',
    '@type': 'Review',
    itemReviewed: { '@id': schemaLocalBusinessId() },
    author: {
      '@type': 'Person',
      name: review.author,
    },
    reviewBody: review.reviewBody,
    reviewRating: {
      '@type': 'Rating',
      ratingValue: review.ratingValue.toString(),
      bestRating: '5',
      worstRating: '1',
    },
    datePublished: review.datePublished || new Date().toISOString().split('T')[0],
  }));
}

/**
 * Generate ImageObject schema for better image understanding
 */
export function generateImageObjectSchema({
  url,
  caption,
  width,
  height,
}: {
  url: string;
  caption?: string;
  width?: number;
  height?: number;
}) {
  const imageUrl = absoluteSchemaUrl(url);

  return {
    '@context': 'https://schema.org',
    '@type': 'ImageObject',
    url: imageUrl,
    caption: caption || '',
    width: width || 1200,
    height: height || 630,
  };
}

/**
 * Generate Offer schema for services
 */
export function generateOfferSchema({
  name,
  description,
  price,
  priceCurrency = 'EUR',
  availability = 'https://schema.org/InStock',
  validFrom,
  url,
}: {
  name: string;
  description?: string;
  price?: string;
  priceCurrency?: string;
  availability?: string;
  validFrom?: string;
  url?: string;
}) {
  const schema: Record<string, unknown> = {
    '@context': 'https://schema.org',
    '@type': 'Offer',
    name,
    description,
    availability: availability,
    priceCurrency,
  };

  if (price) {
    schema.price = price;
    schema.priceSpecification = {
      '@type': 'UnitPriceSpecification',
      price,
      priceCurrency,
      valueAddedTaxIncluded: true,
    };
  }

  if (validFrom) {
    schema.validFrom = validFrom;
  }

  if (url) {
    schema.url = absoluteSchemaUrl(url);
  }

  return schema;
}

/**
 * Generate HasOfferCatalog schema - каталог всех услуг
 */
export function generateOfferCatalogSchema({
  name,
  description,
  services,
}: {
  name: string;
  description?: string;
  services: Array<{
    name: string;
    description?: string;
    url: string;
  }>;
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'OfferCatalog',
    name,
    description: description || 'Servicios de reformas ofrecidos por Reformix Barcelona',
    numberOfItems: services.length.toString(),
    itemListElement: services.map((service, index) => ({
      '@type': 'OfferCatalog',
      position: (index + 1).toString(),
      itemOffered: {
        '@type': 'Service',
        name: service.name,
        description: service.description,
        url: absoluteSchemaUrl(service.url),
        provider: { '@id': schemaLocalBusinessId() },
      },
    })),
  };
}

