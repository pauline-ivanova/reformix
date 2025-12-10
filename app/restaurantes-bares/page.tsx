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
  CakeIcon,
  SparklesIcon,
  ShieldCheckIcon,
  ClockIcon,
  UserGroupIcon,
  BoltIcon,
  ChartBarIcon,
  FireIcon,
} from '@heroicons/react/24/solid';


export const metadata: Metadata = {
  title: "Reformas de Restaurantes y Bares en Barcelona",
  description: "Especialistas en reformas de restaurantes y bares en Barcelona y Vallès. Cumplimiento normativa seguridad alimentaria y hostelería. ¡Pide presupuesto!",
  ...generateStandardMetadata({
    title: "Reformas de Restaurantes y Bares en Barcelona",
    description: "Especialistas en reformas de restaurantes y bares en Barcelona y Vallès. Cumplimiento normativa seguridad alimentaria y hostelería. ¡Pide presupuesto!",
    url: "https://reformix.barcelona/restaurantes-bares",
    pagePath: "/restaurantes-bares",
    keywords: ["reforma restaurantes Barcelona", "reforma bares Barcelona", "diseño restaurantes Barcelona", "normativa hostelería Barcelona"],
  }),
};

export default async function RestaurantesBaresPage() {
  const features = [
    {
      title: "Normativa de Seguridad Alimentaria",
      description: "Conocemos y cumplimos toda la normativa de seguridad alimentaria, higiene y hostelería. Cocinas funcionales, sistemas de ventilación y acabados que facilitan la limpieza.",
      icon: (
        <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-brand-primary/10 text-brand-primary">
          <ShieldCheckIcon className="w-8 h-8" />
        </div>
      ),
    },
    {
      title: "Diseño Funcional",
      description: "Creamos cocinas eficientes con flujo de trabajo optimizado y salones acogedores que maximizan la capacidad y mejoran la experiencia del cliente.",
      icon: (
        <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-brand-primary/10 text-brand-primary">
          <CakeIcon className="w-8 h-8" />
        </div>
      ),
    },
    {
      title: "Acabados Duraderos",
      description: "Utilizamos materiales resistentes al uso intensivo, fáciles de limpiar y que mantienen su aspecto con el paso del tiempo en entornos hosteleros.",
      icon: (
        <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-brand-primary/10 text-brand-primary">
          <FireIcon className="w-8 h-8" />
        </div>
      ),
    },
    {
      title: "Apertura Rápida",
      description: "Entendemos la importancia de minimizar el tiempo de cierre. Planificamos eficientemente las obras para que puedas reabrir lo antes posible.",
      icon: (
        <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-brand-primary/10 text-brand-primary">
          <ClockIcon className="w-8 h-8" />
        </div>
      ),
    },
  ];

  const advantages = [
    {
      title: "Cumplimiento Normativo",
      description: "Garantizamos el cumplimiento de todas las normativas de seguridad alimentaria, higiene y hostelería, evitando problemas con inspecciones y multas.",
      icon: (
        <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-brand-primary/10 text-brand-primary">
          <ShieldCheckIcon className="w-8 h-8" />
        </div>
      ),
    },
    {
      title: "Mejora de la Experiencia",
      description: "Un espacio bien diseñado mejora la experiencia del cliente, aumenta la rotación de mesas y puede justificar precios más altos, aumentando la rentabilidad.",
      icon: (
        <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-brand-primary/10 text-brand-primary">
          <UserGroupIcon className="w-8 h-8" />
        </div>
      ),
    },
    {
      title: "Eficiencia Operativa",
      description: "Cocinas bien diseñadas mejoran el flujo de trabajo, reducen tiempos de preparación y facilitan el trabajo del personal, aumentando la eficiencia.",
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
        title="Reformas de Restaurantes y Bares en Barcelona y Vallès Occidental"
        titleLines={[
          "Reformas de Restaurantes",
          "y Bares",
          "en Barcelona"
        ]}
        subtitle="Adaptamos espacios gastronómicos cumpliendo normativa de seguridad alimentaria y hostelería. Cocinas funcionales, salones acogedores y acabados duraderos."
        primaryCTA={{
          text: "Solicitar Presupuesto",
          href: "/contacto"
        }}
        backgroundImage="/images/bar.webp"
        overlayOpacity="strong"
      />
      <FeatureGrid
        title="Especialistas en Espacios Gastronómicos"
        subtitle="Transformamos restaurantes y bares en espacios funcionales, atractivos y que cumplen con toda la normativa. Cada proyecto se adapta a tu concepto gastronómico y necesidades operativas."
        features={features}
        columns={4}
      />
      <AboutSection
        logoPath="/images/reformix-logo-vertical-white.png"
        text="En Reformix Barcelona realizamos reformas de restaurantes y bares en Barcelona y el Vallès Occidental. Entendemos los desafíos únicos del sector hostelería: desde la necesidad de cumplir estrictas normativas de seguridad alimentaria hasta la importancia de crear ambientes que atraigan clientes. Nuestro equipo coordina todas las disciplinas necesarias para crear espacios que no solo cumplen con la normativa, sino que también mejoran la experiencia del cliente y la eficiencia operativa."
      />
      <FeatureGrid
        title="Ventajas de una Reforma Gastronómica Profesional"
        subtitle="Una reforma bien planificada y ejecutada es una inversión que se recupera a través de mejor cumplimiento normativo, mayor satisfacción del cliente y mayor eficiencia operativa."
        features={advantages}
        columns={3}
        backgroundClassName="bg-gray-50"
        paddingClassName="py-20"
      />
      <TestimonialsCarousel
        title="Restaurantes y Bares que Confiaron en Nosotros"
        subtitle="La satisfacción de nuestros clientes del sector hostelería es nuestra mejor garantía. Establecimientos de Barcelona y el Vallès Occidental han confiado en nosotros para transformar sus espacios."
        testimonials={[
          {
            text: "Reformamos nuestro restaurante y quedó perfecto. La nueva cocina es mucho más funcional y cumple con toda la normativa. Los clientes han notado la mejora y hemos aumentado la capacidad.",
            initials: "CR",
            name: "Carlos R.",
            location: "Barcelona"
          },
          {
            text: "Necesitábamos adaptar nuestro bar a la nueva normativa y mejorar el espacio. Reformix lo hizo rápido y profesional. Ahora tenemos un ambiente más acogedor y moderno.",
            initials: "LM",
            name: "Laura M.",
            location: "Sabadell"
          },
          {
            text: "La reforma del salón y la cocina fue un éxito. El flujo de trabajo es mucho mejor y el nuevo diseño ha mejorado la experiencia de nuestros clientes.",
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
            question: "¿Qué normativas de seguridad alimentaria debemos cumplir?",
            answer: "Deben cumplirse normativas de higiene y seguridad alimentaria (APPCC), sistemas de ventilación adecuados, materiales aptos para contacto con alimentos, sistemas de drenaje y almacenamiento. Nosotros garantizamos el cumplimiento de todas las normativas aplicables."
          },
          {
            question: "¿Cuánto tiempo estará cerrado el restaurante durante la reforma?",
            answer: "Depende del alcance de la reforma. Una reforma completa puede requerir 8-12 semanas, pero podemos planificar por fases o trabajar en horarios que permitan mantener cierta actividad. Evaluamos cada caso específico."
          },
          {
            question: "¿Gestionáis la licencia de actividad y apertura?",
            answer: "Sí, gestionamos toda la documentación necesaria: licencias de obra, licencias de actividad hostelería, comunicaciones al ayuntamiento y cualquier certificación requerida para tu establecimiento."
          },
          {
            question: "¿Qué materiales utilizáis para cocinas y zonas de preparación?",
            answer: "Utilizamos materiales específicos para hostelería: revestimientos cerámicos o de resina impermeables, sistemas de ventilación adecuados, suelos antideslizantes y fáciles de limpiar, y todo según normativa de seguridad alimentaria."
          },
          {
            question: "¿Pueden trabajar fuera del horario de servicio?",
            answer: "Sí, podemos adaptarnos a horarios flexibles para minimizar la interrupción de tu actividad. Trabajamos en horarios nocturnos, días de cierre o por fases según las necesidades específicas de tu establecimiento."
          },
          {
            question: "¿Qué garantías ofrecéis?",
            answer: "Ofrecemos garantía por escrito que cubre tanto la mano de obra como los materiales instalados, conforme a la normativa vigente. Además, proporcionamos toda la documentación técnica y certificaciones necesarias para tu actividad."
          }
        ];
        const faqSchema = generateFAQSchema(faqs);
        const serviceSchema = generateServiceSchema({
          name: "Reformas de Restaurantes y Bares en Barcelona y Vallès Occidental",
          description: "Especialistas en reformas de restaurantes y bares en Barcelona y Vallès Occidental. Cumplimiento normativa seguridad alimentaria y hostelería.",
          provider: {
            '@type': 'HomeAndConstructionBusiness',
            name: 'Reformix Barcelona',
          },
          serviceType: 'Restaurant Remodeling',
          url: '/restaurantes-bares',
        });
        const breadcrumbSchema = generateBreadcrumbSchema([
          { name: 'Inicio', url: '/' },
          { name: 'Reformas Comerciales', url: '/reformas-comerciales' },
          { name: 'Restaurantes y Bares', url: '/restaurantes-bares' },
        ]);
        
        return (
          <>
            {faqSchema && <JsonLd data={faqSchema} />}
            {serviceSchema && <JsonLd data={serviceSchema} />}
            {breadcrumbSchema && <JsonLd data={breadcrumbSchema} />}
            <FAQTwoColumn titleLines={["Preguntas Frecuentes", "sobre Restaurantes y Bares"]} items={faqs} />
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
        title="Transforma tu Restaurante o Bar"
        description="Tanto si abres un nuevo establecimiento, renuevas uno existente o necesitas adaptar tu espacio a la normativa, estamos aquí para ayudarte. Contáctanos para una consulta inicial sin compromiso y recibirás un presupuesto detallado adaptado a las necesidades específicas de tu negocio gastronómico."
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

