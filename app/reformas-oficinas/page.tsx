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
  UserGroupIcon,
  LightBulbIcon,
  ShieldCheckIcon,
  ClockIcon,
  SparklesIcon,
  WifiIcon,
  CalendarDaysIcon,
  DocumentCheckIcon,
  BoltIcon,
} from '@heroicons/react/24/solid';


export const metadata: Metadata = {
  title: "Reformas de Oficinas en Barcelona y Vallès",
  description: "Especialistas en reformas de oficinas en Barcelona y Vallès. Espacios de trabajo modernos y funcionales que mejoran la productividad. ¡Pide presupuesto!",
  ...generateStandardMetadata({
    title: "Reformas de Oficinas en Barcelona y Vallès",
    description: "Especialistas en reformas de oficinas en Barcelona y Vallès. Espacios de trabajo modernos y funcionales que mejoran la productividad. ¡Pide presupuesto!",
    url: "https://reformix.barcelona/reformas-oficinas",
    pagePath: "/reformas-oficinas",
    keywords: ["reforma oficinas Barcelona", "reforma oficinas Vallès", "diseño oficinas Barcelona", "reforma espacios trabajo"],
  }),
};

export default async function ReformasOficinasPage() {
  const features = [
    {
      title: "Diseño Funcional",
      description: "Creamos distribuciones que optimizan el flujo de trabajo, mejoran la colaboración entre equipos y maximizan el uso del espacio disponible.",
      icon: (
        <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-brand-primary/10 text-brand-primary">
          <BuildingOfficeIcon className="w-8 h-8" />
        </div>
      ),
    },
    {
      title: "Iluminación Óptima",
      description: "Diseñamos sistemas de iluminación que combinan luz natural y artificial para reducir la fatiga visual y mejorar el bienestar de tu equipo.",
      icon: (
        <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-brand-primary/10 text-brand-primary">
          <LightBulbIcon className="w-8 h-8" />
        </div>
      ),
    },
    {
      title: "Instalaciones Modernas",
      description: "Renovamos y adaptamos las instalaciones eléctricas, de climatización y de datos para soportar la tecnología actual y futura de tu empresa.",
      icon: (
        <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-brand-primary/10 text-brand-primary">
          <BoltIcon className="w-8 h-8" />
        </div>
      ),
    },
    {
      title: "Minimización de Interrupciones",
      description: "Planificamos las obras por fases y trabajamos en horarios flexibles para que puedas seguir operando durante la reforma con la mínima disrupción.",
      icon: (
        <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-brand-primary/10 text-brand-primary">
          <ClockIcon className="w-8 h-8" />
        </div>
      ),
    },
  ];

  const advantages = [
    {
      title: "Aumento de Productividad",
      description: "Un espacio bien diseñado mejora la concentración, facilita la comunicación y reduce las distracciones, lo que se traduce directamente en mayor productividad.",
      icon: (
        <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-brand-primary/10 text-brand-primary">
          <SparklesIcon className="w-8 h-8" />
        </div>
      ),
    },
    {
      title: "Mejora del Bienestar",
      description: "Espacios con buena iluminación, ventilación y acústica mejoran la salud y el bienestar de tus empleados, reduciendo el absentismo laboral.",
      icon: (
        <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-brand-primary/10 text-brand-primary">
          <UserGroupIcon className="w-8 h-8" />
        </div>
      ),
    },
    {
      title: "Imagen Corporativa",
      description: "Una oficina moderna y profesional proyecta una imagen positiva a clientes, socios y empleados, reforzando la identidad de tu empresa.",
      icon: (
        <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-brand-primary/10 text-brand-primary">
          <ShieldCheckIcon className="w-8 h-8" />
        </div>
      ),
    },
  ];

  return (
    <>
      <Hero
        title="Reformas de Oficinas en Barcelona y Vallès Occidental"
        titleLines={[
          "Reformas de Oficinas",
          "en Barcelona",
          "y Vallès Occidental"
        ]}
        subtitle="Espacios de trabajo modernos y funcionales que mejoran la productividad y el bienestar de tu equipo. Distribuciones flexibles, iluminación óptima y acabados profesionales."
        primaryCTA={{
          text: "Solicitar Presupuesto",
          href: "/contacto"
        }}
        backgroundImage="/images/reformas-de-oficinas.png"
        overlayOpacity="strong"
      />
      <FeatureGrid
        title="Especialistas en Espacios de Trabajo"
        subtitle="Transformamos oficinas anticuadas en espacios modernos que fomentan la productividad, la colaboración y el bienestar. Cada proyecto se adapta a las necesidades específicas de tu empresa."
        features={features}
        columns={4}
      />
      <AboutSection
        logoPath="/images/reformix-logo-vertical-white.png"
        text="En Reformix Barcelona realizamos reformas de oficinas en Barcelona y el Vallès Occidental. Entendemos que cada empresa tiene necesidades únicas: desde startups que buscan espacios flexibles hasta corporaciones que requieren entornos formales. Nuestro equipo coordina todas las disciplinas necesarias para crear oficinas que no solo cumplen con la normativa de accesibilidad y seguridad, sino que también mejoran la experiencia de trabajo de tu equipo."
      />
      <FeatureGrid
        title="Ventajas de una Reforma de Oficina Profesional"
        subtitle="Una oficina bien diseñada va más allá de la estética. Impacta directamente en la productividad, el bienestar de los empleados y la imagen de tu empresa."
        features={advantages}
        columns={3}
        backgroundClassName="bg-gray-50"
        paddingClassName="py-20"
      />
      <TestimonialsCarousel
        title="Empresas que Confiaron en Nosotros"
        subtitle="La satisfacción de nuestros clientes comerciales es nuestra mejor garantía. Empresas de Barcelona y el Vallès Occidental han confiado en nosotros para transformar sus espacios de trabajo."
        testimonials={[
          {
            text: "Reformamos nuestra oficina y el resultado superó nuestras expectativas. El espacio ahora es mucho más funcional y el equipo está encantado con el nuevo diseño. La productividad ha mejorado notablemente.",
            initials: "MR",
            name: "María R.",
            location: "Barcelona"
          },
          {
            text: "La reforma se realizó sin interrumpir nuestra actividad. Trabajaron por fases y siempre nos mantuvieron informados. La nueva distribución ha mejorado mucho la comunicación entre departamentos.",
            initials: "JL",
            name: "Javier L.",
            location: "Sabadell"
          },
          {
            text: "Buscábamos un espacio más moderno y colaborativo. Reformix entendió perfectamente nuestras necesidades y creó una oficina que refleja nuestros valores como empresa.",
            initials: "AS",
            name: "Ana S.",
            location: "Terrassa"
          },
        ]}
      />
      {(() => {
        const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://reformix.barcelona';
        const faqs = [
          {
            question: "¿Podemos seguir trabajando durante la reforma?",
            answer: "Sí, en la mayoría de los casos es posible. Planificamos las obras por fases y trabajamos en horarios flexibles (fines de semana, horarios nocturnos) para minimizar la interrupción de tu actividad. Evaluamos cada caso específico para encontrar la mejor solución."
          },
          {
            question: "¿Qué normativas debemos cumplir en una reforma de oficina?",
            answer: "Las oficinas deben cumplir normativas de accesibilidad, seguridad contra incendios, eficiencia energética y seguridad laboral. Nosotros nos encargamos de asegurar que tu espacio cumpla con todos los requisitos legales aplicables."
          },
          {
            question: "¿Cuánto suele durar una reforma de oficina?",
            answer: "Depende del tamaño y complejidad del proyecto. Una reforma de oficina pequeña (hasta 100m²) puede durar 4-6 semanas, mientras que proyectos más grandes pueden requerir 8-12 semanas. Te proporcionamos un calendario detallado desde el inicio."
          },
          {
            question: "¿Incluyen el diseño interior en la reforma?",
            answer: "Podemos trabajar con tu diseñador de interiores o recomendarte profesionales de confianza. También podemos coordinar el diseño funcional básico para optimizar la distribución y las instalaciones técnicas."
          },
          {
            question: "¿Qué garantías ofrecéis?",
            answer: "Ofrecemos garantía por escrito que cubre tanto la mano de obra como los materiales instalados, conforme a la normativa vigente. Además, proporcionamos toda la documentación técnica y certificaciones necesarias para tu actividad."
          }        ];
        const faqSchema = generateFAQSchema(faqs);
        const serviceSchema = generateServiceSchema({
          name: "Reformas de Oficinas en Barcelona y Vallès Occidental",
          description: "Especialistas en reformas de oficinas en Barcelona y Vallès Occidental. Espacios de trabajo modernos y funcionales que mejoran la productividad.",
          provider: {
            '@type': 'HomeAndConstructionBusiness',
            name: 'Reformix Barcelona',
          },
          serviceType: 'Office Remodeling',
          url: '/reformas-oficinas',
        });
        const breadcrumbSchema = generateBreadcrumbSchema([
          { name: 'Inicio', url: '/' },
          { name: 'Reformas Comerciales', url: '/reformas-comerciales' },
          { name: 'Reformas de Oficinas', url: '/reformas-oficinas' },
        ]);
        
        return (
          <>
            {faqSchema && <JsonLd data={faqSchema} />}
            {serviceSchema && <JsonLd data={serviceSchema} />}
            {breadcrumbSchema && <JsonLd data={breadcrumbSchema} />}
            <FAQTwoColumn titleLines={["Preguntas Frecuentes", "sobre Reformas de Oficinas"]} items={faqs} />
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
        title="Transforma tu Espacio de Trabajo"
        description="Tanto si necesitas renovar una oficina completa, reestructurar espacios o mejorar las instalaciones, estamos aquí para ayudarte. Contáctanos para una consulta inicial sin compromiso y recibirás un presupuesto detallado adaptado a las necesidades específicas de tu empresa."
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

