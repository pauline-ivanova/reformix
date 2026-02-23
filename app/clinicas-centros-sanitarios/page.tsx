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
  HeartIcon,
  ShieldCheckIcon,
  UserGroupIcon,
  SparklesIcon,
  ClockIcon,
  BoltIcon,
  CheckCircleIcon,
  BuildingOfficeIcon,
} from '@heroicons/react/24/solid';


export const metadata: Metadata = {
  title: "Reformas de Clínicas en Barcelona y Vallès",
  description: "Especialistas en reformas de clínicas y centros sanitarios en Barcelona y Vallès. Cumplimiento normativa higiene y seguridad sanitaria. ¡Pide presupuesto!",
  ...generateStandardMetadata({
    title: "Reformas de Clínicas en Barcelona y Vallès",
    description: "Especialistas en reformas de clínicas y centros sanitarios en Barcelona y Vallès. Cumplimiento normativa higiene y seguridad sanitaria. ¡Pide presupuesto!",
    url: "https://reformix.barcelona/clinicas-centros-sanitarios",
    pagePath: "/clinicas-centros-sanitarios",
    keywords: ["reforma clínicas Barcelona", "reforma centros sanitarios Barcelona", "diseño clínicas Barcelona", "normativa sanitaria Barcelona"],
  }),
};

export default async function ClinicasCentrosSanitariosPage() {
  const features = [
    {
      title: "Normativa Sanitaria",
      description: "Conocemos y cumplimos toda la normativa de higiene y seguridad sanitaria. Materiales y acabados que facilitan la desinfección y cumplen con los requisitos sanitarios.",
      icon: (
        <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-brand-primary/10 text-brand-primary">
          <ShieldCheckIcon className="w-8 h-8" />
        </div>
      ),
    },
    {
      title: "Espacios Funcionales",
      description: "Diseñamos salas de espera, consultas y zonas técnicas adaptadas a tus necesidades profesionales. Distribuciones que optimizan el flujo de pacientes y personal.",
      icon: (
        <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-brand-primary/10 text-brand-primary">
          <HeartIcon className="w-8 h-8" />
        </div>
      ),
    },
    {
      title: "Materiales Sanitarios",
      description: "Utilizamos materiales específicos para entornos sanitarios: impermeables, fáciles de limpiar, resistentes a productos desinfectantes y que cumplen normativa sanitaria.",
      icon: (
        <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-brand-primary/10 text-brand-primary">
          <CheckCircleIcon className="w-8 h-8" />
        </div>
      ),
    },
    {
      title: "Instalaciones Técnicas",
      description: "Instalamos sistemas de ventilación, electricidad y fontanería adaptados a entornos sanitarios, cumpliendo con todos los requisitos técnicos y de seguridad.",
      icon: (
        <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-brand-primary/10 text-brand-primary">
          <BoltIcon className="w-8 h-8" />
        </div>
      ),
    },
  ];

  const advantages = [
    {
      title: "Cumplimiento Normativo",
      description: "Garantizamos el cumplimiento de todas las normativas sanitarias, evitando problemas con inspecciones y asegurando que tu centro pueda operar sin incidencias.",
      icon: (
        <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-brand-primary/10 text-brand-primary">
          <ShieldCheckIcon className="w-8 h-8" />
        </div>
      ),
    },
    {
      title: "Mejora de la Experiencia",
      description: "Espacios bien diseñados mejoran la experiencia del paciente, crean un ambiente de confianza y reflejan profesionalidad y cuidado.",
      icon: (
        <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-brand-primary/10 text-brand-primary">
          <UserGroupIcon className="w-8 h-8" />
        </div>
      ),
    },
    {
      title: "Eficiencia Operativa",
      description: "Distribuciones optimizadas mejoran el flujo de trabajo del personal sanitario, reducen tiempos de espera y facilitan la atención al paciente.",
      icon: (
        <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-brand-primary/10 text-brand-primary">
          <SparklesIcon className="w-8 h-8" />
        </div>
      ),
    },
  ];

  return (
    <>
      <Hero
        title="Reformas de Clínicas y Centros Sanitarios en Barcelona y Vallès Occidental"
        titleLines={[
          "Reformas de Clínicas",
          "y Centros Sanitarios",
          "en Barcelona"
        ]}
        subtitle="Espacios sanitarios que cumplen con normativa de higiene y seguridad. Salas de espera, consultas y zonas técnicas adaptadas a tus necesidades profesionales."
        primaryCTA={{
          text: "Solicitar Presupuesto",
          href: "/contacto"
        }}
        backgroundImage="/images/clinica.webp"
        overlayOpacity="strong"
      />
      <FeatureGrid
        title="Especialistas en Espacios Sanitarios"
        subtitle="Transformamos clínicas y centros sanitarios en espacios funcionales, seguros y que cumplen con toda la normativa. Cada proyecto se adapta a tu especialidad y necesidades operativas."
        features={features}
        columns={4}
      />
      <AboutSection
        logoPath="/images/reformix-logo-vertical-white.png"
        text="En Reformix Barcelona realizamos reformas de clínicas y centros sanitarios en Barcelona y el Vallès Occidental. Entendemos los requisitos únicos del sector sanitario: desde la necesidad de cumplir estrictas normativas de higiene hasta la importancia de crear ambientes que transmitan confianza y profesionalidad. Nuestro equipo coordina todas las disciplinas necesarias para crear espacios que no solo cumplen con la normativa, sino que también mejoran la experiencia del paciente y la eficiencia operativa."
      />
      <FeatureGrid
        title="Ventajas de una Reforma Sanitaria Profesional"
        subtitle="Una reforma bien planificada y ejecutada es una inversión que se recupera a través de mejor cumplimiento normativo, mayor satisfacción del paciente y mayor eficiencia operativa."
        features={advantages}
        columns={3}
        backgroundClassName="bg-gray-50"
        paddingClassName="py-20"
      />
      <TestimonialsCarousel
        title="Centros Sanitarios que Confiaron en Nosotros"
        subtitle="La satisfacción de nuestros clientes del sector sanitario es nuestra mejor garantía. Clínicas de Barcelona y el Vallès Occidental han confiado en nosotros para transformar sus espacios."
        testimonials={[
          {
            text: "Reformamos nuestra clínica dental y quedó perfecto. Las nuevas consultas cumplen con toda la normativa y el diseño ha mejorado mucho la experiencia de nuestros pacientes.",
            initials: "DR",
            name: "Dr. Ramón",
            location: "Barcelona"
          },
          {
            text: "Necesitábamos adaptar nuestro centro de fisioterapia a la nueva normativa. Reformix lo hizo rápido y profesional. Ahora tenemos un espacio más funcional y moderno.",
            initials: "MG",
            name: "María G.",
            location: "Sabadell"
          },
          {
            text: "La reforma de las salas de espera y consultas fue un éxito. El nuevo diseño ha mejorado el flujo de pacientes y la satisfacción general.",
            initials: "JS",
            name: "Jordi S.",
            location: "Terrassa"
          },
        ]}
      />
      {(() => {
        const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://reformix.barcelona';
        const faqs = [
          {
            question: "¿Qué normativas sanitarias debemos cumplir?",
            answer: "Deben cumplirse normativas de higiene y seguridad sanitaria, materiales aptos para entornos sanitarios, sistemas de ventilación adecuados, accesibilidad y requisitos específicos según el tipo de centro. Nosotros garantizamos el cumplimiento de todas las normativas aplicables."
          },
          {
            question: "¿Cuánto tiempo estará cerrado el centro durante la reforma?",
            answer: "Depende del alcance de la reforma. Podemos planificar por fases para minimizar el tiempo de cierre, trabajando en horarios que permitan mantener cierta actividad. Evaluamos cada caso específico para encontrar la mejor solución."
          },
          {
            question: "¿Qué materiales utilizáis para zonas sanitarias?",
            answer: "Utilizamos materiales específicos para entornos sanitarios: revestimientos impermeables y fáciles de desinfectar, suelos antideslizantes, sistemas de ventilación adecuados y todo según normativa de seguridad sanitaria."
          },
          {
            question: "¿Pueden trabajar fuera del horario de atención?",
            answer: "Sí, podemos adaptarnos a horarios flexibles para minimizar la interrupción de tu actividad. Trabajamos en horarios nocturnos, fines de semana o por fases según las necesidades específicas de tu centro."
          },
          {
            question: "¿Qué garantías ofrecéis?",
            answer: "Ofrecemos garantía por escrito que cubre tanto la mano de obra como los materiales instalados, conforme a la normativa vigente. Además, proporcionamos toda la documentación técnica y certificaciones necesarias para tu actividad."
          }
        ];
        const faqSchema = generateFAQSchema(faqs);
        const serviceSchema = generateServiceSchema({
          name: "Reformas de Clínicas y Centros Sanitarios en Barcelona y Vallès Occidental",
          description: "Especialistas en reformas de clínicas y centros sanitarios en Barcelona y Vallès Occidental. Cumplimiento normativa higiene y seguridad sanitaria.",
          provider: {
            '@type': 'HomeAndConstructionBusiness',
            name: 'Reformix Barcelona',
          },
          serviceType: 'Medical Facility Remodeling',
          url: '/clinicas-centros-sanitarios',
        });
        const breadcrumbSchema = generateBreadcrumbSchema([
          { name: 'Inicio', url: '/' },
          { name: 'Reformas Comerciales', url: '/reformas-comerciales' },
          { name: 'Clínicas y Centros Sanitarios', url: '/clinicas-centros-sanitarios' },
        ]);
        
        return (
          <>
            {faqSchema && <JsonLd data={faqSchema} />}
            {serviceSchema && <JsonLd data={serviceSchema} />}
            {breadcrumbSchema && <JsonLd data={breadcrumbSchema} />}
            <FAQTwoColumn titleLines={["Preguntas Frecuentes", "sobre Clínicas y Centros Sanitarios"]} items={faqs} />
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
        title="Transforma tu Clínica o Centro Sanitario"
        description="Tanto si abres un nuevo centro, renuevas uno existente o necesitas adaptar tu espacio a la normativa, estamos aquí para ayudarte. Contáctanos para una consulta inicial sin compromiso y recibirás un presupuesto detallado adaptado a las necesidades específicas de tu actividad sanitaria."
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

