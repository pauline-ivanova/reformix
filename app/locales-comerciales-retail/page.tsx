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
  ShoppingBagIcon,
  SparklesIcon,
  ClockIcon,
  ShieldCheckIcon,
  BuildingStorefrontIcon,
  BoltIcon,
  ChartBarIcon,
  UserGroupIcon,
} from '@heroicons/react/24/solid';


export const metadata: Metadata = {
  title: "Reformas de Locales Comerciales en Barcelona",
  description: "Retail fit-out completo en Barcelona y Vallès. Reformas de locales comerciales desde la estructura hasta el diseño interior. ¡Pide presupuesto!",
  ...generateStandardMetadata({
    title: "Reformas de Locales Comerciales en Barcelona",
    description: "Retail fit-out completo en Barcelona y Vallès. Reformas de locales comerciales desde la estructura hasta el diseño interior. ¡Pide presupuesto!",
    url: "https://www.reformix.barcelona/locales-comerciales-retail",
    pagePath: "/locales-comerciales-retail",
    keywords: ["reforma locales comerciales Barcelona", "retail fit-out Barcelona", "reforma tiendas Barcelona", "diseño locales comerciales"],
  }),
};

export default async function LocalesComercialesRetailPage() {
  const features = [
    {
      title: "Retail Fit-Out Completo",
      description: "Gestionamos todo el proceso desde la estructura hasta los acabados finales. Creamos espacios comerciales que atraen clientes y optimizan la experiencia de compra.",
      icon: (
        <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-brand-primary/10 text-brand-primary">
          <BuildingStorefrontIcon className="w-8 h-8" />
        </div>
      ),
    },
    {
      title: "Diseño Comercial",
      description: "Creamos distribuciones que guían al cliente por el espacio, maximizan la exposición de productos y facilitan las ventas mediante una experiencia de compra optimizada.",
      icon: (
        <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-brand-primary/10 text-brand-primary">
          <ShoppingBagIcon className="w-8 h-8" />
        </div>
      ),
    },
    {
      title: "Iluminación Comercial",
      description: "Diseñamos sistemas de iluminación que destacan tus productos, crean ambientes atractivos y mejoran la percepción del espacio, aumentando el atractivo visual del local.",
      icon: (
        <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-brand-primary/10 text-brand-primary">
          <SparklesIcon className="w-8 h-8" />
        </div>
      ),
    },
    {
      title: "Cumplimiento Normativo",
      description: "Garantizamos el cumplimiento de todas las normativas comerciales: accesibilidad, seguridad contra incendios, eficiencia energética y requisitos específicos de tu actividad.",
      icon: (
        <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-brand-primary/10 text-brand-primary">
          <ShieldCheckIcon className="w-8 h-8" />
        </div>
      ),
    },
  ];

  const advantages = [
    {
      title: "Aumento de Ventas",
      description: "Un local bien diseñado mejora la experiencia del cliente, aumenta el tiempo de permanencia y optimiza la exposición de productos, lo que se traduce directamente en más ventas.",
      icon: (
        <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-brand-primary/10 text-brand-primary">
          <ChartBarIcon className="w-8 h-8" />
        </div>
      ),
    },
    {
      title: "Imagen de Marca",
      description: "El diseño de tu local es la primera impresión que tienen tus clientes. Un espacio atractivo y bien diseñado refuerza la identidad de tu marca y proyecta profesionalidad.",
      icon: (
        <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-brand-primary/10 text-brand-primary">
          <BoltIcon className="w-8 h-8" />
        </div>
      ),
    },
    {
      title: "Apertura Rápida",
      description: "Planificamos las obras para minimizar el tiempo de cierre. Trabajamos con eficiencia y coordinación para que puedas abrir tu local lo antes posible.",
      icon: (
        <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-brand-primary/10 text-brand-primary">
          <ClockIcon className="w-8 h-8" />
        </div>
      ),
    },
  ];

  return (
    <>
      <Hero
        title="Reformas de Locales Comerciales y Retail en Barcelona y Vallès Occidental"
        titleLines={[
          "Reformas de Locales",
          "Comerciales y Retail",
          "en Barcelona"
        ]}
        subtitle="Retail fit-out completo: desde la estructura hasta el diseño interior. Creamos espacios que atraen a tus clientes y optimizan la experiencia de compra."
        primaryCTA={{
          text: "Solicitar Presupuesto",
          href: "/contacto"
        }}
        backgroundImage="/images/retail.webp"
        overlayOpacity="strong"
      />
      <FeatureGrid
        title="Especialistas en Retail Fit-Out"
        subtitle="Transformamos locales vacíos o anticuados en espacios comerciales modernos y funcionales. Cada proyecto se adapta a tu marca, productos y clientes objetivo."
        features={features}
        columns={4}
      />
      <AboutSection
        logoPath="/images/reformix-logo-vertical-white.png"
        text="En Reformix Barcelona realizamos reformas de locales comerciales y retail en Barcelona y el Vallès Occidental. Entendemos que cada negocio tiene necesidades únicas: desde tiendas de moda que buscan espacios elegantes hasta supermercados que requieren funcionalidad máxima. Nuestro equipo coordina todas las disciplinas necesarias para crear locales que no solo cumplen con la normativa, sino que también mejoran la experiencia del cliente y aumentan las ventas."
      />
      <FeatureGrid
        title="Ventajas de una Reforma Comercial Profesional"
        subtitle="Un local bien diseñado y reformado es una inversión que se recupera a través de mejores ventas, mayor satisfacción del cliente y una imagen de marca reforzada."
        features={advantages}
        columns={3}
        backgroundClassName="bg-gray-50"
        paddingClassName="py-20"
      />
      <TestimonialsCarousel
        title="Comercios que Confiaron en Nosotros"
        subtitle="La satisfacción de nuestros clientes comerciales es nuestra mejor garantía. Empresas de Barcelona y el Vallès Occidental han confiado en nosotros para transformar sus espacios comerciales."
        testimonials={[
          {
            text: "La reforma de nuestro local comercial fue rápida y profesional. El nuevo diseño ha mejorado significativamente la experiencia de nuestros clientes y hemos notado un aumento en las ventas.",
            initials: "JL",
            name: "Javier L.",
            location: "Sabadell"
          },
          {
            text: "Reformix reformó nuestro local comercial y el falso techo con paneles registrables quedó perfecto. Es funcional, permite mantenimiento fácil y mejora la iluminación general. Rápidos y organizados.",
            initials: "AS",
            name: "Ana S.",
            location: "Terrassa"
          },
          {
            text: "Abrimos un local en Badalona y necesitábamos rapidez. Reformix nos ofreció un proyecto llave en mano y funcionó perfecto. Entregaron en fecha y los clientes notaron el cambio desde el primer día.",
            initials: "DM",
            name: "David M.",
            location: "Badalona"
          },
        ]}
      />
      {(() => {
        const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://www.reformix.barcelona';
        const faqs = [
          {
            question: "¿Cuánto tiempo estará cerrado el local durante la reforma?",
            answer: "Depende del alcance de la reforma. Una reforma completa puede requerir 6-10 semanas, pero podemos planificar por fases para minimizar el tiempo de cierre o trabajar en horarios que permitan mantener cierta actividad."
          },
          {
            question: "¿Qué normativas debemos cumplir para un local comercial?",
            answer: "Los locales comerciales deben cumplir normativas de accesibilidad, seguridad contra incendios, eficiencia energética, seguridad laboral y requisitos específicos según el tipo de actividad (alimentación, textil, etc.). Nos encargamos de asegurar el cumplimiento de todas ellas."
          },
          {
            question: "¿Pueden trabajar de noche o fines de semana para no interrumpir las ventas?",
            answer: "Sí, podemos adaptarnos a horarios flexibles para minimizar la interrupción de tu actividad. Trabajamos en horarios nocturnos, fines de semana o por fases según las necesidades específicas de tu negocio."
          },
          {
            question: "¿Qué garantías ofrecéis?",
            answer: "Ofrecemos garantía por escrito que cubre tanto la mano de obra como los materiales instalados, conforme a la normativa vigente. Además, proporcionamos toda la documentación técnica y certificaciones necesarias."
          },
          {
            question: "¿Trabajáis con diseñadores de interiores?",
            answer: "Sí, podemos trabajar con tu diseñador de interiores o recomendarte profesionales de confianza especializados en retail y espacios comerciales. Coordinamos todos los aspectos técnicos y de ejecución."
          }
        ];
        const faqSchema = generateFAQSchema(faqs);
        const serviceSchema = generateServiceSchema({
          name: "Reformas de Locales Comerciales y Retail en Barcelona y Vallès Occidental",
          description: "Retail fit-out completo en Barcelona y Vallès Occidental. Reformas de locales comerciales desde la estructura hasta el diseño interior.",
          provider: {
            '@type': 'HomeAndConstructionBusiness',
            name: 'Reformix Barcelona',
          },
          serviceType: 'Retail Fit-Out',
          url: '/locales-comerciales-retail',
        });
        const breadcrumbSchema = generateBreadcrumbSchema([
          { name: 'Inicio', url: '/' },
          { name: 'Reformas Comerciales', url: '/reformas-comerciales' },
          { name: 'Locales Comerciales y Retail', url: '/locales-comerciales-retail' },
        ]);
        
        return (
          <>
            {faqSchema && <JsonLd data={faqSchema} />}
            {serviceSchema && <JsonLd data={serviceSchema} />}
            {breadcrumbSchema && <JsonLd data={breadcrumbSchema} />}
            <FAQTwoColumn titleLines={["Preguntas Frecuentes", "sobre Locales Comerciales"]} items={faqs} />
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
        title="Transforma tu Local Comercial"
        description="Tanto si abres un nuevo local, renuevas uno existente o necesitas adaptar tu espacio comercial, estamos aquí para ayudarte. Contáctanos para una consulta inicial sin compromiso y recibirás un presupuesto detallado adaptado a las necesidades específicas de tu negocio."
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

