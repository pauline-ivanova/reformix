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
  BoltIcon,
  ShieldCheckIcon,
  UserGroupIcon,
  SparklesIcon,
  ClockIcon,
  FireIcon,
  ChartBarIcon,
  BuildingOfficeIcon,
} from '@heroicons/react/24/solid';


export const metadata: Metadata = {
  title: "Reformas de Gimnasios en Barcelona y Vallès",
  description: "Especialistas en reformas de gimnasios y centros deportivos en Barcelona y Vallès. Instalaciones resistentes y funcionales. ¡Pide presupuesto!",
  ...generateStandardMetadata({
    title: "Reformas de Gimnasios en Barcelona y Vallès",
    description: "Especialistas en reformas de gimnasios y centros deportivos en Barcelona y Vallès. Instalaciones resistentes y funcionales. ¡Pide presupuesto!",
    url: "https://reformix.barcelona/gimnasios-centros-deportivos",
    pagePath: "/gimnasios-centros-deportivos",
    keywords: ["reforma gimnasios Barcelona", "reforma centros deportivos Barcelona", "diseño gimnasios Barcelona", "instalaciones deportivas Barcelona"],
  }),
};

export default async function GimnasiosCentrosDeportivosPage() {
  const features = [
    {
      title: "Materiales Resistentes",
      description: "Utilizamos materiales específicos para entornos deportivos: resistentes al uso intensivo, fáciles de limpiar y mantener, y que soportan el tráfico constante de usuarios.",
      icon: (
        <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-brand-primary/10 text-brand-primary">
          <ShieldCheckIcon className="w-8 h-8" />
        </div>
      ),
    },
    {
      title: "Instalaciones Funcionales",
      description: "Diseñamos vestuarios, salas de entrenamiento y zonas comunes optimizadas para el uso intensivo. Distribuciones que maximizan el espacio y facilitan el mantenimiento.",
      icon: (
        <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-brand-primary/10 text-brand-primary">
          <BoltIcon className="w-8 h-8" />
        </div>
      ),
    },
    {
      title: "Sistemas de Ventilación",
      description: "Instalamos sistemas de ventilación adecuados para espacios con alta ocupación y actividad física intensa, mejorando la calidad del aire y el confort.",
      icon: (
        <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-brand-primary/10 text-brand-primary">
          <FireIcon className="w-8 h-8" />
        </div>
      ),
    },
    {
      title: "Minimización de Interrupciones",
      description: "Planificamos las obras por fases para minimizar el cierre del centro. Trabajamos en horarios flexibles para que puedas mantener la actividad durante la reforma.",
      icon: (
        <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-brand-primary/10 text-brand-primary">
          <ClockIcon className="w-8 h-8" />
        </div>
      ),
    },
  ];

  const advantages = [
    {
      title: "Aumento de Capacidad",
      description: "Un espacio bien diseñado puede aumentar la capacidad de usuarios simultáneos, mejorando la rentabilidad del centro sin comprometer la experiencia.",
      icon: (
        <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-brand-primary/10 text-brand-primary">
          <UserGroupIcon className="w-8 h-8" />
        </div>
      ),
    },
    {
      title: "Mejora de la Experiencia",
      description: "Espacios modernos y bien diseñados mejoran la experiencia del usuario, aumentan la satisfacción y reducen la rotación de clientes.",
      icon: (
        <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-brand-primary/10 text-brand-primary">
          <SparklesIcon className="w-8 h-8" />
        </div>
      ),
    },
    {
      title: "Reducción de Mantenimiento",
      description: "Materiales de calidad y diseño adecuado reducen los costes de mantenimiento y las averías, ahorrando dinero a largo plazo.",
      icon: (
        <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-brand-primary/10 text-brand-primary">
          <ChartBarIcon className="w-8 h-8" />
        </div>
      ),
    },
  ];

  return (
    <>
      <Hero
        title="Reformas de Gimnasios y Centros Deportivos en Barcelona y Vallès Occidental"
        titleLines={[
          "Reformas de Gimnasios",
          "y Centros Deportivos",
          "en Barcelona"
        ]}
        subtitle="Instalaciones deportivas con materiales resistentes y acabados funcionales. Vestuarios, salas de entrenamiento y zonas comunes optimizadas para el uso intensivo."
        primaryCTA={{
          text: "Solicitar Presupuesto",
          href: "/contacto"
        }}
        backgroundImage="/images/centros-deportivos.webp"
        overlayOpacity="strong"
      />
      <FeatureGrid
        title="Especialistas en Instalaciones Deportivas"
        subtitle="Transformamos gimnasios y centros deportivos en espacios funcionales, resistentes y optimizados para el uso intensivo. Cada proyecto se adapta a tu tipo de actividad y necesidades operativas."
        features={features}
        columns={4}
      />
      <AboutSection
        logoPath="/images/reformix-logo-vertical-white.png"
        text="En Reformix Barcelona realizamos reformas de gimnasios y centros deportivos en Barcelona y el Vallès Occidental. Entendemos los requisitos únicos del sector deportivo: desde la necesidad de materiales resistentes al uso intensivo hasta la importancia de sistemas de ventilación adecuados. Nuestro equipo coordina todas las disciplinas necesarias para crear instalaciones que no solo cumplen con la normativa, sino que también mejoran la experiencia del usuario y reducen los costes de mantenimiento."
      />
      <FeatureGrid
        title="Ventajas de una Reforma Deportiva Profesional"
        subtitle="Una reforma bien planificada y ejecutada es una inversión que se recupera a través de mayor capacidad, mejor experiencia del usuario y menores costes de mantenimiento."
        features={advantages}
        columns={3}
        backgroundClassName="bg-gray-50"
        paddingClassName="py-20"
      />
      <TestimonialsCarousel
        title="Centros Deportivos que Confiaron en Nosotros"
        subtitle="La satisfacción de nuestros clientes del sector deportivo es nuestra mejor garantía. Gimnasios de Barcelona y el Vallès Occidental han confiado en nosotros para transformar sus instalaciones."
        testimonials={[
          {
            text: "Reformamos nuestro gimnasio y quedó perfecto. Las nuevas instalaciones son más funcionales y resistentes. Los usuarios han notado la mejora y hemos podido aumentar la capacidad.",
            initials: "AR",
            name: "Alex R.",
            location: "Barcelona"
          },
          {
            text: "Necesitábamos renovar los vestuarios y las salas de entrenamiento. Reformix lo hizo rápido y profesional. Ahora tenemos un espacio más moderno y fácil de mantener.",
            initials: "SG",
            name: "Sergi G.",
            location: "Sabadell"
          },
          {
            text: "La reforma completa del centro fue un éxito. El nuevo diseño ha mejorado el flujo de usuarios y la experiencia general. Muy satisfecho con el resultado.",
            initials: "PM",
            name: "Pau M.",
            location: "Terrassa"
          },
        ]}
      />
      {(() => {
        const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://reformix.barcelona';
        const faqs = [
          {
            question: "¿Qué materiales son más adecuados para un gimnasio?",
            answer: "Para gimnasios utilizamos materiales específicos: suelos de caucho o vinilo deportivo, revestimientos resistentes a impactos, sistemas de ventilación reforzados y acabados fáciles de limpiar y mantener. Todo adaptado al uso intensivo."
          },
          {
            question: "¿Cuánto tiempo estará cerrado el centro durante la reforma?",
            answer: "Depende del alcance de la reforma. Podemos planificar por fases para minimizar el tiempo de cierre, trabajando en horarios que permitan mantener cierta actividad. Evaluamos cada caso específico para encontrar la mejor solución."
          },
          {
            question: "¿Gestionáis la licencia de actividad?",
            answer: "Sí, gestionamos toda la documentación necesaria: licencias de obra, licencias de actividad, comunicaciones al ayuntamiento y cualquier certificación requerida para tu centro deportivo."
          },
          {
            question: "¿Qué sistemas de ventilación instalan?",
            answer: "Instalamos sistemas de ventilación adecuados para espacios con alta ocupación y actividad física, que aseguran una buena calidad del aire y cumplen con la normativa de salubridad."
          },
          {
            question: "¿Pueden trabajar fuera del horario de apertura?",
            answer: "Sí, podemos adaptarnos a horarios flexibles para minimizar la interrupción de tu actividad. Trabajamos en horarios nocturnos, fines de semana o por fases según las necesidades específicas de tu centro."
          },
          {
            question: "¿Qué garantías ofrecéis?",
            answer: "Ofrecemos garantía por escrito que cubre tanto la mano de obra como los materiales instalados, conforme a la normativa vigente. Además, proporcionamos toda la documentación técnica y certificaciones necesarias."
          }
        ];
        const faqSchema = generateFAQSchema(faqs);
        const serviceSchema = generateServiceSchema({
          name: "Reformas de Gimnasios y Centros Deportivos en Barcelona y Vallès Occidental",
          description: "Especialistas en reformas de gimnasios y centros deportivos en Barcelona y Vallès Occidental. Instalaciones resistentes y funcionales.",
          provider: {
            '@type': 'HomeAndConstructionBusiness',
            name: 'Reformix Barcelona',
          },
          serviceType: 'Gym and Sports Facility Remodeling',
          url: '/gimnasios-centros-deportivos',
        });
        const breadcrumbSchema = generateBreadcrumbSchema([
          { name: 'Inicio', url: '/' },
          { name: 'Reformas Comerciales', url: '/reformas-comerciales' },
          { name: 'Gimnasios y Centros Deportivos', url: '/gimnasios-centros-deportivos' },
        ]);
        
        return (
          <>
            {faqSchema && <JsonLd data={faqSchema} />}
            {serviceSchema && <JsonLd data={serviceSchema} />}
            {breadcrumbSchema && <JsonLd data={breadcrumbSchema} />}
            <FAQTwoColumn titleLines={["Preguntas Frecuentes", "sobre Gimnasios y Centros Deportivos"]} items={faqs} />
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
        title="Transforma tu Gimnasio o Centro Deportivo"
        description="Tanto si abres un nuevo centro, renuevas uno existente o necesitas optimizar tus instalaciones, estamos aquí para ayudarte. Contáctanos para una consulta inicial sin compromiso y recibirás un presupuesto detallado adaptado a las necesidades específicas de tu centro deportivo."
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

