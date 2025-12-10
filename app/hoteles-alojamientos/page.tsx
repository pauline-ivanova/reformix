import Hero from "@/app/components/blocks/Hero";
import FeatureGrid from "@/app/components/blocks/FeatureGrid";
import AboutSection from "@/app/components/blocks/AboutSection";
import TestimonialsCarousel from "@/app/components/blocks/TestimonialsCarousel";
import FAQTwoColumn from "@/app/components/blocks/FAQTwoColumn";
import ServiceAreas from "@/app/components/blocks/ServiceAreas";
import CTA from "@/app/components/blocks/CTA";
import JsonLd from "@/app/components/common/JsonLd";
import { generateFAQSchema, generateServiceSchema, generateBreadcrumbSchema } from "@/app/components/common/JsonLd";
import { Metadata } from "next";
import { generateStandardMetadata } from "@/lib/metadata-utils";
import {
  BuildingOfficeIcon,
  SparklesIcon,
  UserGroupIcon,
  ShieldCheckIcon,
  ClockIcon,
  BoltIcon,
  ChartBarIcon,
  HeartIcon,
} from '@heroicons/react/24/solid';


export const metadata: Metadata = {
  title: "Reformas de Hoteles en Barcelona y Vallès",
  description: "Especialistas en reformas de hoteles y alojamientos en Barcelona y Vallès. Renovación de espacios hoteleros que mejora la experiencia de huéspedes. ¡Pide presupuesto!",
  ...generateStandardMetadata({
    title: "Reformas de Hoteles en Barcelona y Vallès",
    description: "Especialistas en reformas de hoteles y alojamientos en Barcelona y Vallès. Renovación de espacios hoteleros que mejora la experiencia de huéspedes. ¡Pide presupuesto!",
    url: "https://reformix.barcelona/hoteles-alojamientos",
    pagePath: "/hoteles-alojamientos",
    keywords: ["reforma hoteles Barcelona", "reforma alojamientos Barcelona", "diseño hoteles Barcelona", "renovación hoteles Barcelona"],
  }),
};

export default async function HotelesAlojamientosPage() {
  const features = [
    {
      title: "Diseño y Funcionalidad",
      description: "Renovamos habitaciones, recepciones y zonas comunes con diseño y funcionalidad profesional. Espacios que mejoran la experiencia del huésped y reflejan la identidad de tu establecimiento.",
      icon: (
        <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-brand-primary/10 text-brand-primary">
          <BuildingOfficeIcon className="w-8 h-8" />
        </div>
      ),
    },
    {
      title: "Renovación por Fases",
      description: "Planificamos las obras por fases para minimizar el impacto en la operación del hotel. Renovamos habitaciones, plantas o zonas mientras mantienes el resto del establecimiento operativo.",
      icon: (
        <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-brand-primary/10 text-brand-primary">
          <ClockIcon className="w-8 h-8" />
        </div>
      ),
    },
    {
      title: "Acabados de Calidad",
      description: "Utilizamos materiales y acabados de calidad hotelera que resisten el uso intensivo, facilitan el mantenimiento y mantienen su aspecto con el paso del tiempo.",
      icon: (
        <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-brand-primary/10 text-brand-primary">
          <SparklesIcon className="w-8 h-8" />
        </div>
      ),
    },
    {
      title: "Cumplimiento Normativo",
      description: "Garantizamos el cumplimiento de todas las normativas hoteleras: accesibilidad, seguridad contra incendios, eficiencia energética y requisitos específicos del sector.",
      icon: (
        <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-brand-primary/10 text-brand-primary">
          <ShieldCheckIcon className="w-8 h-8" />
        </div>
      ),
    },
  ];

  const advantages = [
    {
      title: "Mejora de la Experiencia",
      description: "Espacios renovados mejoran significativamente la experiencia del huésped, aumentan las valoraciones positivas y pueden justificar tarifas más altas.",
      icon: (
        <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-brand-primary/10 text-brand-primary">
          <HeartIcon className="w-8 h-8" />
        </div>
      ),
    },
    {
      title: "Aumento de Ocupación",
      description: "Hoteles renovados atraen más clientes, reciben mejores valoraciones y pueden aumentar la ocupación y los ingresos, mejorando la rentabilidad del establecimiento.",
      icon: (
        <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-brand-primary/10 text-brand-primary">
          <ChartBarIcon className="w-8 h-8" />
        </div>
      ),
    },
    {
      title: "Imagen Competitiva",
      description: "Un hotel moderno y bien mantenido proyecta una imagen profesional y de calidad, diferenciándote de la competencia y reforzando tu posicionamiento en el mercado.",
      icon: (
        <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-brand-primary/10 text-brand-primary">
          <BoltIcon className="w-8 h-8" />
        </div>
      ),
    },
  ];

  return (
    <>
      <Hero
        title="Reformas de Hoteles y Alojamientos en Barcelona y Vallès Occidental"
        titleLines={[
          "Reformas de Hoteles",
          "y Alojamientos",
          "en Barcelona"
        ]}
        subtitle="Renovación de espacios hoteleros que mejora la experiencia de tus huéspedes. Habitaciones, recepciones y zonas comunes con diseño y funcionalidad profesional."
        primaryCTA={{
          text: "Solicitar Presupuesto",
          href: "/contacto"
        }}
        backgroundImage="/images/hotel.webp"
        overlayOpacity="strong"
      />
      <FeatureGrid
        title="Especialistas en Renovación Hotelera"
        subtitle="Transformamos hoteles y alojamientos en espacios modernos y atractivos que mejoran la experiencia del huésped. Cada proyecto se adapta a tu categoría, estilo y necesidades operativas."
        features={features}
        columns={4}
      />
      <AboutSection
        logoPath="/images/reformix-logo-vertical-white.png"
        text="En Reformix Barcelona realizamos reformas de hoteles y alojamientos en Barcelona y el Vallès Occidental. Entendemos los desafíos únicos del sector hotelero: desde la necesidad de minimizar las interrupciones hasta la importancia de crear ambientes que atraigan y fidelicen huéspedes. Nuestro equipo coordina todas las disciplinas necesarias para crear espacios que no solo cumplen con la normativa, sino que también mejoran la experiencia del huésped y aumentan la rentabilidad del establecimiento."
      />
      <FeatureGrid
        title="Ventajas de una Renovación Hotelera Profesional"
        subtitle="Una renovación bien planificada y ejecutada es una inversión que se recupera a través de mejor experiencia del huésped, mayor ocupación y mayor rentabilidad."
        features={advantages}
        columns={3}
        backgroundClassName="bg-gray-50"
        paddingClassName="py-20"
      />
      <TestimonialsCarousel
        title="Hoteles que Confiaron en Nosotros"
        subtitle="La satisfacción de nuestros clientes del sector hotelero es nuestra mejor garantía. Establecimientos de Barcelona y el Vallès Occidental han confiado en nosotros para transformar sus espacios."
        testimonials={[
          {
            text: "Renovamos varias habitaciones por fases sin cerrar el hotel. El resultado fue excelente y los huéspedes han notado la mejora. Las valoraciones han mejorado significativamente.",
            initials: "EM",
            name: "Eva M.",
            location: "Barcelona"
          },
          {
            text: "La reforma de la recepción y zonas comunes transformó completamente nuestro hotel. Ahora proyecta una imagen mucho más moderna y profesional.",
            initials: "RG",
            name: "Ricard G.",
            location: "Sabadell"
          },
          {
            text: "Reformamos todas las habitaciones y el resultado superó nuestras expectativas. La calidad de los acabados es excelente y el diseño ha mejorado mucho la experiencia del huésped.",
            initials: "AM",
            name: "Anna M.",
            location: "Terrassa"
          },
        ]}
      />
      {(() => {
        const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://reformix.barcelona';
        const faqs = [
          {
            question: "¿Es posible reformar el hotel sin cerrarlo completamente?",
            answer: "Sí, es posible reformar por fases. Renovamos habitaciones, plantas o zonas mientras mantienes el resto del establecimiento operativo. Esto minimiza el impacto en tus ingresos y te permite mantener la actividad durante la renovación."
          },
          {
            question: "¿Qué normativas hoteleras debemos cumplir?",
            answer: "Deben cumplirse normativas de accesibilidad, seguridad contra incendios, eficiencia energética, seguridad laboral y requisitos específicos según la categoría del hotel. Nosotros garantizamos el cumplimiento de todas las normativas aplicables."
          },
          {
            question: "¿Cuánto tiempo suele durar una renovación hotelera?",
            answer: "Depende del alcance de la renovación. Una habitación individual puede reformarse en 1-2 semanas, mientras que una renovación completa del establecimiento puede requerir varios meses. Trabajamos por fases para minimizar el impacto."
          },
          {
            question: "¿Gestionáis las licencias y permisos necesarios?",
            answer: "Sí, gestionamos toda la documentación necesaria: licencias de obra, comunicaciones al ayuntamiento, certificados de instalaciones y cualquier trámite administrativo requerido para tu establecimiento hotelero."
          },
          {
            question: "¿Qué materiales utilizáis para habitaciones hoteleras?",
            answer: "Utilizamos materiales de calidad hotelera: resistentes al uso intensivo, fáciles de limpiar y mantener, y que cumplen con los estándares del sector. Todo adaptado a tu categoría y presupuesto."
          },
          {
            question: "¿Qué garantías ofrecéis?",
            answer: "Ofrecemos garantía por escrito que cubre tanto la mano de obra como los materiales instalados, conforme a la normativa vigente. Además, proporcionamos toda la documentación técnica y certificaciones necesarias."
          }
        ];
        const faqSchema = generateFAQSchema(faqs);
        const serviceSchema = generateServiceSchema({
          name: "Reformas de Hoteles y Alojamientos en Barcelona y Vallès Occidental",
          description: "Especialistas en reformas de hoteles y alojamientos en Barcelona y Vallès Occidental. Renovación de espacios hoteleros que mejora la experiencia de huéspedes.",
          provider: {
            '@type': 'HomeAndConstructionBusiness',
            name: 'Reformix Barcelona',
          },
          serviceType: 'Hotel Remodeling',
          url: '/hoteles-alojamientos',
        });
        const breadcrumbSchema = generateBreadcrumbSchema([
          { name: 'Inicio', url: '/' },
          { name: 'Reformas Comerciales', url: '/reformas-comerciales' },
          { name: 'Hoteles y Alojamientos', url: '/hoteles-alojamientos' },
        ]);
        
        return (
          <>
            {faqSchema && <JsonLd data={faqSchema} />}
            {serviceSchema && <JsonLd data={serviceSchema} />}
            {breadcrumbSchema && <JsonLd data={breadcrumbSchema} />}
            <FAQTwoColumn titleLines={["Preguntas Frecuentes", "sobre Hoteles y Alojamientos"]} items={faqs} />
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
      <CTA
        title="Transforma tu Hotel o Alojamiento"
        description="Tanto si renuevas habitaciones, zonas comunes o todo el establecimiento, estamos aquí para ayudarte. Contáctanos para una consulta inicial sin compromiso y recibirás un presupuesto detallado adaptado a las necesidades específicas de tu negocio hotelero."
        buttonText="Solicitar Presupuesto"
        buttonHref="/contacto"
        features={[
          "Consulta inicial gratuita",
          "Visita y evaluación sin coste",
          "Presupuesto detallado y cerrado",
          "Cumplimiento normativo garantizado"
        ]}
      />
    </>
  );
}

