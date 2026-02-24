import Hero from "@/app/components/blocks/Hero";
import FeatureGrid from "@/app/components/blocks/FeatureGrid";
import HeroPreload from "@/app/components/common/HeroPreload";
import JsonLd from "@/app/components/common/JsonLd";
import { generateFAQSchema, generateReviewSchema } from "@/app/components/common/JsonLd";
import dynamic from 'next/dynamic';
import { defaultTestimonials } from "@/app/components/blocks/testimonials-data";
import { Metadata } from 'next';
import { generateStandardMetadata } from '@/lib/metadata-utils';
import { 
  reformasIntegralesPageData as reformasIntegralesData,
  reformasPorEstanciaPageData as reformasPorEstanciaData,
  serviciosTecnicosPageData as serviciosTecnicosData,
  reformasComercialesPageData as reformasComercialesData
} from '@/lib/page-data';

const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://www.reformix.barcelona';

export const metadata: Metadata = {
  title: "Reformas en Barcelona y Vallès Occidental | Reformix",
  description: "Empresa de reformas en Barcelona y Vallès Occidental. Reformas integrales y por estancia con presupuestos cerrados y garantía por escrito. ¡Pide presupuesto!",
  ...generateStandardMetadata({
    title: "Reformas en Barcelona y Vallès Occidental | Reformix",
    description: "Empresa de reformas en Barcelona y Vallès Occidental. Reformas integrales y por estancia con presupuestos cerrados y garantía por escrito. ¡Pide presupuesto!",
    url: baseUrl,
    pagePath: '/',
    image: '/images/hero-bg.webp', // Hero image for social sharing
    keywords: [
      'reformas Barcelona',
      'reformas integrales',
      'empresa de reformas',
      'reformas Sabadell',
      'Vallès Occidental',
      'rehabilitación',
      'presupuesto cerrado',
      'garantía por escrito'
    ],
  }),
};

// AboutSection is below fold - defer JS loading to reduce TBT and improve TTI
const AboutSection = dynamic(() => import("@/app/components/blocks/AboutSection"), {
  ssr: false, // Defer to reduce initial JS bundle
  loading: () => <div className="py-20 bg-brand-primary" />, // Placeholder to prevent layout shift
});

// ServicesSection is below fold - defer JS loading to reduce TBT and improve TTI
const ServicesSection = dynamic(() => import("@/app/components/blocks/ServicesSection"), {
  ssr: false, // Defer to reduce initial JS bundle
  loading: () => <div className="py-16" />, // Placeholder
});

// Below-fold components - defer JS loading to improve Time to Interactive
const ProcessSection = dynamic(() => import("@/app/components/blocks/ProcessSection"), {
  ssr: false, // Defer to reduce initial JS bundle
  loading: () => <div className="py-16" />, // Placeholder
});

const CompanySection = dynamic(() => import("@/app/components/blocks/CompanySection"), {
  ssr: false, // Client component with heavy JS, defer loading
  loading: () => <div className="py-20 bg-brand-primary" />, // Placeholder
});

const WhyChooseUs = dynamic(() => import("@/app/components/blocks/WhyChooseUs"), {
  ssr: false, // Defer to reduce initial JS bundle
  loading: () => <div className="py-16" />, // Placeholder
});

const TestimonialsCarousel = dynamic(() => import("@/app/components/blocks/TestimonialsCarousel"), {
  ssr: false, // Carousel with JS, defer loading
  loading: () => <div className="py-16" />, // Placeholder
});

const FAQTwoColumn = dynamic(() => import("@/app/components/blocks/FAQTwoColumn"), {
  ssr: false, // Interactive component, defer loading
  loading: () => <div className="py-16" />, // Placeholder
});

const ServiceAreas = dynamic(() => import("@/app/components/blocks/ServiceAreas"), {
  ssr: false, // Defer to reduce initial JS bundle
  loading: () => <div className="py-16" />, // Placeholder
});

const ContactSection = dynamic(() => import("@/app/components/blocks/ContactSection"), {
  ssr: false, // Defer to reduce initial JS bundle
  loading: () => <div className="py-16" />, // Placeholder
});

// Use inline SVG instead of icons to avoid loading @heroicons/react bundle
// This reduces initial JavaScript bundle size significantly
const DocumentIcon = () => (
  <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
  </svg>
);

const UserIcon = () => (
  <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
  </svg>
);

const CalendarIcon = () => (
  <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
  </svg>
);

const ShieldIcon = () => (
  <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
  </svg>
);

export default async function HomePage() {
  const features = [
    {
      title: "Control Total de tu Inversión",
      description: "Te entregamos un presupuesto cerrado y transparente. Sin costes ocultos ni sorpresas en la factura final.",
      icon: (
        <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-brand-primary/10 text-brand-primary">
          <DocumentIcon />
        </div>
      ),
    },
    {
      title: "Un Único Interlocutor Responsable",
      description: "Olvídate de coordinar gremios. Seremos tu único punto de contacto y nos responsabilizaremos de todo el proyecto.",
      icon: (
        <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-brand-primary/10 text-brand-primary">
          <UserIcon />
        </div>
      ),
    },
    {
      title: "Respeto Absoluto por los Plazos",
      description: "Planificamos cada fase con rigor para cumplir las fechas acordadas y que puedas disfrutar de tu hogar cuanto antes.",
      icon: (
        <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-brand-primary/10 text-brand-primary">
          <CalendarIcon />
        </div>
      ),
    },
    {
      title: "Tranquilidad Después de la Obra",
      description: "Tu reforma está protegida. Nuestro trabajo tiene una garantía real por escrito y un servicio postventa a tu disposición.",
      icon: (
        <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-brand-primary/10 text-brand-primary">
          <ShieldIcon />
        </div>
      ),
    },
  ];

  return (
    <>
      <HeroPreload imagePath="/images/hero-bg.webp" />
      <Hero
        title="Empresa de Reformas en Barcelona y Vallès Occidental"
        titleLines={[
          "Empresa de Reformas",
          "en Barcelona",
          "y Vallès Occidental"
        ]}
        subtitle="Transformamos la incertidumbre de una reforma en la tranquilidad de un trabajo bien hecho. Más de 10 años de experiencia, presupuestos cerrados y garantía por escrito para tu total confianza."
        primaryCTA={{
          text: "SOLICITA TU PRESUPUESTO SIN COMPROMISO",
          href: "/contacto"
        }}
        backgroundImage="/images/hero-bg.webp"
        imageAlt="Reforma integral de vivienda en Barcelona con acabados de alta calidad"
      />
      <FeatureGrid
        features={features}
        columns={4}
      />
      <AboutSection
        logoPath="/images/reformix-logo-vertical-white.png"
        text="Con sede en Sabadell, Reformix Barcelona es una empresa de reformas que sirve a toda el área de Barcelona y el Vallès Occidental. Contamos con equipo propio de profesionales para la rehabilitación completa de pisos, asegurando siempre la coordinación de gremios y el cumplimiento de plazos."
      />
      <ServicesSection
        title="Servicios de Reformas en Barcelona y Vallès Occidental"
        subtitle="Desde una reforma integral llave en mano que transforme por completo tu hogar, hasta los detalles técnicos que garantizan su confort. Descubre cómo podemos mejorar tu calidad de vida."
        columns={2}
        services={[
          {
            title: "Reformas Integrales",
            subtitle: "— Tu Hogar, Completamente Nuevo",
            description: "El verdadero potencial de tu hogar está esperando. Realizamos la rehabilitación completa de casas y la reforma integral de pisos para crear espacios luminosos y adaptados a tu estilo de vida. Nos encargamos de todo para que tu única preocupación sea disfrutar del resultado.",
            services: [
              "Reformas integrales de pisos",
              "Rehabilitación de casas",
              "Proyectos de interiorismo"
            ],
            image: reformasIntegralesData.image,
            imageAlt: reformasIntegralesData.imageAlt,
            ctaText: "Ver más sobre reformas integrales",
            ctaHref: "/reformas-integrales"
          },
          {
            title: "Reformas por Estancia",
            subtitle: "— Renovamos Cada Rincón",
            description: "Imagina empezar el día en un baño que te llena de energía, o cocinar en una cocina abierta donde puedes conversar con tu familia. Transformamos cómo vives en tu hogar, ya sea con una reforma de cocina para ganar espacio o una reforma de baño para crear tu oasis personal.",
            services: [
              "Reforma de cocina",
              "Reforma de baño",
              "Reforma de salón o habitaciones"
            ],
            image: reformasPorEstanciaData.image,
            imageAlt: reformasPorEstanciaData.imageAlt,
            ctaText: "Descubre las reformas por estancia",
            ctaHref: "/reformas-por-estancia"
          },
          {
            title: "Servicios Técnicos",
            subtitle: "— Los Detalles que Marcan la Diferencia",
            description: "La tranquilidad de tu hogar se basa en lo que no se ve. Nuestro equipo se encarga de las instalaciones críticas de electricidad y fontanería, el aislamiento térmico y acústico y los acabados perfectos que garantizan tu confort y seguridad durante décadas.",
            services: [
              "Instalaciones de electricidad y fontanería",
              "Carpintería, pladur y pintura decorativa",
              "Aislamiento térmico y acústico"
            ],
            image: serviciosTecnicosData.image,
            imageAlt: serviciosTecnicosData.imageAlt,
            ctaText: "Conoce nuestros servicios técnicos",
            ctaHref: "/servicios-tecnicos"
          },
          {
            title: "Reformas Comerciales",
            subtitle: "— Impulsa Tu Negocio",
            description: "Un espacio de trabajo funcional o un local atractivo son clave para tu éxito. Realizamos reformas de oficinas y locales comerciales que no solo renuevan la estética, sino que mejoran la productividad y la experiencia de tus clientes, cumpliendo siempre la normativa vigente.",
            services: [
              "Reformas de oficinas y locales",
              "Retail fit-out",
              "Adaptación de espacios para clínicas, restaurantes y más"
            ],
            image: reformasComercialesData.image,
            imageAlt: reformasComercialesData.imageAlt,
            ctaText: "Ver soluciones para empresas",
            ctaHref: "/reformas-comerciales"
          }
        ]}
      />
      <ProcessSection
        title="Proceso de Reforma, Paso a Paso"
        subtitle="Una reforma exitosa no es cuestión de suerte, sino de método. Te presentamos nuestra hoja de ruta hacia tu tranquilidad: un proceso de 4 fases diseñado para eliminar la incertidumbre y garantizar los mejores resultados."
      />
      <CompanySection />
      <WhyChooseUs />
      <TestimonialsCarousel testimonials={defaultTestimonials} />
      {(() => {
        const reviewSchema = generateReviewSchema({
          reviews: defaultTestimonials.map(t => ({
            author: t.name,
            reviewBody: t.text,
            ratingValue: 5
          })),
          aggregateRating: {
            ratingValue: 5,
            ratingCount: defaultTestimonials.length,
            bestRating: 5,
            worstRating: 1
          }
        });
        return reviewSchema && <JsonLd data={reviewSchema} />;
      })()}
      {(() => {
        const faqs = [
          {
            question: "¿Cuánto cuesta una reforma de baño en el área de Barcelona?",
            answer: "El precio varía según los metros y calidades, pero para darte transparencia, en Reformix Barcelona siempre ofrecemos presupuestos cerrados con un desglose completo por partidas."
          },
          {
            question: "¿En qué no debería ahorrar para que una reforma dure años?",
            answer: "Nuestra recomendación como profesionales es no ahorrar nunca en lo que no se ve: las instalaciones de fontanería y electricidad. Un acabado (como la pintura o un grifo) es fácil de cambiar, pero una instalación interna de mala calidad puede causar problemas muy caros en el futuro."
          },
          {
            question: "¿Qué incluye exactamente un servicio \"llave en mano\"?",
            answer: "Para nosotros, \"llave en mano\" significa que nos encargamos de absolutamente todo: desde el diseño inicial y la planificación, pasando por la coordinación de todos los gremios, hasta la limpieza final profesional. Tu única tarea es entrar a disfrutar de tu nuevo espacio."
          },
          {
            question: "¿Puedo vivir en casa durante una reforma de cocina?",
            answer: "En reformas parciales como una cocina o un baño es posible, y siempre nos organizamos para causar las menores molestias. Para una reforma integral, lo habitual es no hacerlo."
          },
          {
            question: "¿Ofrecéis garantía por escrito y servicio postventa?",
            answer: "Por supuesto. Todos nuestros trabajos están garantizados por escrito y ofrecemos un servicio postventa para tu total tranquilidad."
          }
        ];
        const faqSchema = generateFAQSchema(faqs);
        return (
          <>
            {faqSchema && <JsonLd data={faqSchema} />}
            <FAQTwoColumn items={faqs} />
          </>
        );
      })()}
      <ServiceAreas
        areas={[
          {
            title: "Barcelona y Área Metropolitana",
            cities: [
              "Barcelona",
              "L'Hospitalet de Llobregat",
              "Badalona",
              "Santa Coloma de Gramenet",
              "Cornellà de Llobregat",
              "Esplugues de Llobregat",
              "Sant Just Desvern",
              "Sant Joan Despí",
              "Sant Boi de Llobregat",
              "El Prat de Llobregat",
              "Viladecans",
              "Castelldefels",
              "Gavà",
              "Sant Adrià de Besòs",
              "Montcada i Reixac"
            ]
          },
          {
            title: "Vallès Occidental",
            cities: [
              "Sabadell",
              "Terrassa",
              "Sant Cugat del Vallès",
              "Cerdanyola del Vallès",
              "Ripollet",
              "Barberà del Vallès",
              "Sant Quirze del Vallès",
              "Badia del Vallès",
              "Castellar del Vallès",
              "Sentmenat",
              "Santa Perpètua de Mogoda",
              "Polinyà",
              "Palau-solità i Plegamans",
              "Rellinars",
              "Ullastrell",
              "Matadepera",
              "Gallifa"
            ]
          }
        ]}
      />
      <ContactSection />
    </>
  );
}

