import Hero from "@/app/components/blocks/Hero";
import FeatureGrid from "@/app/components/blocks/FeatureGrid";
import AboutSection from "@/app/components/blocks/AboutSection";
import ServicesSection from "@/app/components/blocks/ServicesSection";
import ProcessSection from "@/app/components/blocks/ProcessSection";
import TestimonialsCarousel from "@/app/components/blocks/TestimonialsCarousel";
import FAQTwoColumn from "@/app/components/blocks/FAQTwoColumn";
import ServiceAreas from "@/app/components/blocks/ServiceAreas";
import CTA from "@/app/components/blocks/CTA";
import JsonLd from "@/app/components/common/JsonLd";
import { generateFAQSchema, generateServiceSchema, generateBreadcrumbSchema } from "@/app/components/common/JsonLd";
import { Metadata } from "next";
import { generateStandardMetadata } from "@/lib/metadata-utils";
import {
  CalendarDaysIcon,
  KeyIcon,
  UserGroupIcon,
  ShieldCheckIcon,
  HomeIcon,
  SparklesIcon,
  ClockIcon,
  BoltIcon,
  WrenchScrewdriverIcon,
} from '@heroicons/react/24/solid';


export const metadata: Metadata = {
  title: "Reformas por Estancia en Barcelona y Vallès Occidental",
  description: "Reformas por estancia en Barcelona y Vallès Occidental. Cocina, baño y salón con presupuesto cerrado y garantía. Solicita tu visita gratis.",
  ...generateStandardMetadata({
    title: "Reformas por Estancia en Barcelona y Vallès Occidental",
    description: "Reformas por estancia en Barcelona y Vallès Occidental. Cocina, baño y salón con presupuesto cerrado y garantía. Solicita tu visita gratis.",
    url: "https://reformix.barcelona/reformas-por-estancia",
    pagePath: "/reformas-por-estancia",
    keywords: ["reformas por estancia", "reforma cocina Barcelona", "reforma baño Barcelona", "reforma salón Barcelona", "reforma habitación Barcelona"],
  }),
};

export default async function ReformasPorEstanciaPage() {
  const features = [
    {
      title: "Presupuesto Cerrado, Sin Extras",
      description: "Importes desglosados y pactados desde el inicio. Si surge un imprevisto, lo consensuamos antes de actuar.",
      icon: (
        <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-brand-primary/10 text-brand-primary">
          <ShieldCheckIcon className="w-8 h-8" />
        </div>
      ),
    },
    {
      title: "Plazos Realistas y Cumplidos",
      description: "Planificación detallada y jefe de obra asignado. Te informamos del avance sin que tengas que perseguirnos.",
      icon: (
        <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-brand-primary/10 text-brand-primary">
          <CalendarDaysIcon className="w-8 h-8" />
        </div>
      ),
    },
    {
      title: "Equipo Propio y Control de Calidad",
      description: "Oficios coordinados y supervisión constante en obra para asegurar la calidad de cada acabado.",
      icon: (
        <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-brand-primary/10 text-brand-primary">
          <UserGroupIcon className="w-8 h-8" />
        </div>
      ),
    },
    {
      title: "Garantía por Escrito",
      description: "Entrega con garantía y documentación necesaria. Estamos para responder también en el postventa.",
      icon: (
        <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-brand-primary/10 text-brand-primary">
          <ShieldCheckIcon className="w-8 h-8" />
        </div>
      ),
    },
  ];

  const services = [
    {
      title: "Reformas de Cocinas",
      subtitle: "",
      description: "De espacio de trabajo a corazón del hogar. Diseños funcionales y luminosos.",
      services: [],
      image: "/images/reformas-cocinas.webp",
      imageAlt: "Reforma de cocinas en Barcelona con muebles modernos e instalación profesional",
      ctaText: "Ver Soluciones",
      ctaHref: "/reformas-cocinas"
    },
    {
      title: "Reformas de Baños",
      subtitle: "",
      description: "Tu oasis de relax y funcionalidad. Materiales modernos y eficientes.",
      services: [],
      image: "/images/reformas-de-banos-en-barcelona.webp",
      imageAlt: "Reforma de baño moderno en Barcelona con ducha de obra y acabados de diseño",
      ctaText: "Ver Soluciones",
      ctaHref: "/reformas-banos"
    },
    {
      title: "Reformas de Salón",
      subtitle: "",
      description: "El corazón de tu hogar, ahora más abierto, integrado y lleno de luz natural.",
      services: [],
      image: "/images/reformas-salones.webp",
      imageAlt: "Reforma de salón moderno en Barcelona con diseño elegante y luz natural",
      ctaText: "Ver Soluciones",
      ctaHref: "/reformas-salones"
    },
    {
      title: "Reformas de Dormitorios",
      subtitle: "",
      description: "Tu refugio personal, optimizado para garantizar el mejor descanso y el orden.",
      services: [],
      image: "/images/reformas-de-habitaciones-en-barcelona.webp",
      imageAlt: "Reforma de dormitorio moderno en Barcelona con diseño elegante y tonos grises",
      ctaText: "Ver Soluciones",
      ctaHref: "/reformas-habitaciones"
    },
    {
      title: "Terrazas y Balcones",
      subtitle: "",
      description: "Gana un espacio extra para disfrutar del exterior durante todo el año.",
      services: [],
      image: "/images/reformas-de-terrazas.webp",
      imageAlt: "Terraza reformada con suelo cerámico moderno y vistas al mar al atardecer",
      ctaText: "Ver Soluciones",
      ctaHref: "/reformas-terrazas-balcones"
    },
    {
      title: "Entradas y Almacenaje",
      subtitle: "",
      description: "La primera impresión y el orden diario son clave. Soluciones a tu medida.",
      services: [],
      image: "/images/reforma-de-recibidores-en-barcelona.webp",
      imageAlt: "Reforma de recibidor moderno en Barcelona con diseño elegante y funcional",
      ctaText: "Ver Soluciones",
      ctaHref: "/reformas-recibidores"
    }
  ];

  return (
    <>
      <Hero
        title="Reformas por Estancia en Barcelona y Vallès Occidental"
        titleLines={[
          "Reformas por Estancia",
          "en Barcelona",
          "y Vallès Occidental"
        ]}
        subtitle="Elige la estancia que quieres transformar y te guiamos con soluciones concretas, presupuesto cerrado y plazos claros."
        primaryCTA={{
          text: "Pedir visita",
          href: "/contacto"
        }}
        backgroundImage="/images/reforma-cocina-moderna.webp"
      />
      <FeatureGrid
        features={features}
        columns={4}
        disableFeatureHeadings
      />
      <AboutSection
        logoPath="/images/reformix-logo-vertical-white.png"
        text="Somos una empresa de reformas con equipo propio que trabaja en Barcelona, Sabadell y Vallès Occidental. Nos especializamos en intervenciones por estancia, planificando para minimizar molestias en casa, proteger el resto de la vivienda y coordinar oficios para acabados coherentes con el estilo de tu hogar."
      />
      <ServicesSection
        title="Cada Estancia, una Nueva Oportunidad"
        subtitle="Haz clic en el espacio que quieres renovar y descubre soluciones específicas, ejemplos reales de nuestro trabajo y un proceso claro para transformar tu hogar."
        services={services}
        columns={3}
      />
      <FeatureGrid
        title="Tu Hogar, Mejorado. Tu Rutina, Intacta."
        subtitle="Nuestro método de trabajo está diseñado para que la mejora de tu casa no signifique un caos en tu vida. Nos enfocamos tanto en la calidad del resultado como en la tranquilidad del proceso."
        features={[
          {
            title: "Mínimas Molestias",
            description: "Protegemos las zonas de paso, aislamos el área de trabajo y realizamos una limpieza diaria para que el polvo y el desorden no invadan tu espacio.",
            icon: (
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-brand-primary/10 text-brand-primary">
                <ShieldCheckIcon className="w-8 h-8" />
              </div>
            ),
          },
          {
            title: "Rapidez y Eficiencia",
            description: "Gracias a nuestro equipo propio y una planificación exhaustiva, optimizamos los tiempos para que recuperes tu espacio lo antes posible.",
            icon: (
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-brand-primary/10 text-brand-primary">
                <BoltIcon className="w-8 h-8" />
              </div>
            ),
          },
          {
            title: "Integración Perfecta",
            description: "Cuidamos que los nuevos acabados, materiales y estilo se integren de forma natural con el resto de tu vivienda, creando un resultado coherente y armonioso.",
            icon: (
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-brand-primary/10 text-brand-primary">
                <HomeIcon className="w-8 h-8" />
              </div>
            ),
          },
        ]}
        columns={3}
        backgroundClassName="bg-gray-50"
        paddingClassName="py-20"
      />
      <TestimonialsCarousel
        title="Clientes que Transformaron su Hogar, Estancia por Estancia"
        subtitle="La satisfacción de quienes ya han confiado en nosotros es nuestra mejor carta de presentación. Lee las opiniones de clientes de Barcelona y el Vallès Occidental."
        testimonials={[
          {
            text: "El baño quedó moderno, cómodo y muy práctico. La diferencia se nota cada día, especialmente en los detalles de funcionalidad.",
            initials: "JR",
            name: "Jorge R.",
            location: "Sabadell"
          },
          {
            text: "Abrimos el salón hacia el pasillo y el espacio parece el doble de grande. Mucha más luz y sensación de amplitud.",
            initials: "CM",
            name: "Carla M.",
            location: "Terrassa"
          },
          {
            text: "Con los nuevos armarios y la distribución, el dormitorio transmite calma y orden. Irina nos asesoró en la elección y el resultado fue perfecto.",
            initials: "VL",
            name: "Víctor L.",
            location: "Cerdanyola del Vallès"
          },
          {
            text: "La entrada de casa cambió por completo. Ahora tenemos espacio para todo y da una bienvenida mucho más acogedora.",
            initials: "DT",
            name: "David T.",
            location: "Badalona"
          },
          {
            text: "Reformamos el balcón y ahora lo disfrutamos todo el año. Se ha convertido en nuestro rincón favorito para relajarnos.",
            initials: "LP",
            name: "Laura P.",
            location: "Sant Cugat del Vallès"
          },
          {
            text: "Nuestra cocina pasó de ser un espacio pequeño y oscuro a convertirse en el lugar donde más tiempo pasamos en familia. Con Reformix todo el proceso fue sencillo y sin complicaciones.",
            initials: "AG",
            name: "Ana G.",
            location: "Barcelona"
          },
        ]}
      />
      {(() => {
        const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://reformix.barcelona';
        const faqs = [
          {
            question: "¿Puedo seguir viviendo en casa durante la reforma?",
            answer: "Sí. Nuestro proceso está diseñado para ello. Aislamos la zona de trabajo, protegemos los accesos y realizamos limpieza diaria para minimizar las molestias."
          },
          {
            question: "¿Cuánto suele durar la reforma de una cocina o un baño?",
            answer: "Depende del tamaño y la complejidad, pero una reforma estándar de baño suele durar entre 2-3 semanas, y una de cocina entre 3-4 semanas, incluyendo mobiliario."
          },
          {
            question: "¿Gestionáis todos los oficios (fontanero, electricista, pintor)?",
            answer: "Sí, nuestro equipo propio incluye todos los oficios necesarios. No tendrás que coordinar a diferentes industriales; tu jefe de obra se encarga de todo."
          },
          {
            question: "¿Qué pasa si quiero cambiar algo a mitad de la obra?",
            answer: "Es posible. Analizamos el cambio, te presentamos un anexo al presupuesto con el coste y el impacto en el plazo, y solo procedemos con tu aprobación por escrito."
          },
          {
            question: "¿Cómo protegéis el resto de la vivienda del polvo y los daños?",
            answer: "Es nuestra prioridad. Cubrimos suelos de zonas de paso, sellamos puertas con plásticos con cremallera y usamos aspiración industrial en las herramientas de corte."
          },
          {
            question: "El presupuesto que me dais, ¿incluye los materiales y acabados?",
            answer: "El presupuesto inicial incluye la mano de obra y materiales de construcción. Los acabados (baldosas, grifería, sanitarios) se cotizan aparte según tu elección, aunque podemos incluir una partida estimada para que tengas una visión global."
          }
        ];
        const faqSchema = generateFAQSchema(faqs);
        const serviceSchema = generateServiceSchema({
          name: "Reformas por Estancia en Barcelona y Vallès Occidental",
          description: "Reformas por estancia en Barcelona y Vallès Occidental. Cocina, baño y salón con presupuesto cerrado y garantía.",
          provider: {
            '@type': 'HomeAndConstructionBusiness',
            name: 'Reformix Barcelona',
          },
          serviceType: 'Room-by-Room Remodeling',
          url: '/reformas-por-estancia',
        });
        const breadcrumbSchema = generateBreadcrumbSchema([
          { name: 'Inicio', url: '/' },
          { name: 'Reformas por Estancia', url: '/reformas-por-estancia' },
        ]);
        
        return (
          <>
            {faqSchema && <JsonLd data={faqSchema} />}
            {serviceSchema && <JsonLd data={serviceSchema} />}
            {breadcrumbSchema && <JsonLd data={breadcrumbSchema} />}
            <FAQTwoColumn titleLines={["Preguntas Frecuentes", "sobre Reformas por Estancia"]} items={faqs} />
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
        title="¿Empezamos a dar forma a tu idea?"
        description="Contacta con nosotros para agendar una visita sin compromiso. Medimos el espacio, escuchamos tus necesidades y en 48-72 horas te entregamos un presupuesto cerrado y detallado."
        buttonText="Pedir Presupuesto"
        buttonHref="/contacto"
        features={[
          "Asesoramiento inicial gratuito",
          "Visita y medición sin coste",
          "Presupuesto detallado y cerrado"
        ]}
      />
    </>
  );
}

