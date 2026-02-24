import Hero from "@/app/components/blocks/Hero";
import FeatureGrid from "@/app/components/blocks/FeatureGrid";
import AboutSection from "@/app/components/blocks/AboutSection";
import ServicesSection from "@/app/components/blocks/ServicesSection";
import TestimonialsCarousel from "@/app/components/blocks/TestimonialsCarousel";
import FAQTwoColumn from "@/app/components/blocks/FAQTwoColumn";
import ServiceAreas from "@/app/components/blocks/ServiceAreas";
import CTA from "@/app/components/blocks/CTA";
import JsonLd from "@/app/components/common/JsonLd";
import { generateFAQSchema, generateServiceSchema, generateBreadcrumbSchema } from "@/app/components/common/JsonLd";
import { Metadata } from "next";
import { generateStandardMetadata } from "@/lib/metadata-utils";
import { 
  reformasOficinasPageData as reformasOficinasData,
  localesComercialesRetailPageData as localesComercialesRetailData,
  restaurantesBaresPageData as restaurantesBaresData,
  clinicasCentrosSanitariosPageData as clinicasCentrosSanitariosData,
  gimnasiosCentrosDeportivosPageData as gimnasiosCentrosDeportivosData,
  hotelesAlojamientosPageData as hotelesAlojamientosData
} from '@/lib/page-data';
import {
  CalendarDaysIcon,
  BuildingOfficeIcon,
  UserGroupIcon,
  ShieldCheckIcon,
  ClockIcon,
  DocumentCheckIcon,
  BoltIcon,
  SparklesIcon,
  CheckCircleIcon,
  ClipboardDocumentCheckIcon,
} from '@heroicons/react/24/solid';


export const metadata: Metadata = {
  title: "Reformas Comerciales en Barcelona y Vallès",
  description: "Reformas comerciales en Barcelona y Vallès. Oficinas, locales, restaurantes y clínicas con cumplimiento normativo y presupuesto cerrado. ¡Pide presupuesto!",
  ...generateStandardMetadata({
    title: "Reformas Comerciales en Barcelona y Vallès",
    description: "Reformas comerciales en Barcelona y Vallès. Oficinas, locales, restaurantes y clínicas con cumplimiento normativo y presupuesto cerrado. ¡Pide presupuesto!",
    url: "https://www.reformix.barcelona/reformas-comerciales",
    pagePath: "/reformas-comerciales",
    keywords: ["reformas comerciales", "reforma oficinas Barcelona", "reforma locales comerciales", "retail fit-out Barcelona", "reforma restaurantes Barcelona", "reforma clínicas Barcelona"],
  }),
};

export default async function ReformasComercialesPage() {
  const features = [
    {
      title: "Cumplimiento Normativo",
      description: "Conocemos la normativa vigente de accesibilidad, seguridad y eficiencia energética para que tu espacio comercial cumpla con todos los requisitos legales.",
      icon: (
        <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-brand-primary/10 text-brand-primary">
          <ClipboardDocumentCheckIcon className="w-8 h-8" />
        </div>
      ),
    },
    {
      title: "Plazos Respetados",
      description: "Planificamos las obras para minimizar la interrupción de tu actividad comercial. Trabajamos en horarios flexibles y cumplimos los plazos acordados.",
      icon: (
        <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-brand-primary/10 text-brand-primary">
          <CalendarDaysIcon className="w-8 h-8" />
        </div>
      ),
    },
    {
      title: "Equipo Coordinado",
      description: "Contamos con técnicos especializados que coordinan todas las disciplinas necesarias para un resultado impecable y sin contratiempos.",
      icon: (
        <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-brand-primary/10 text-brand-primary">
          <UserGroupIcon className="w-8 h-8" />
        </div>
      ),
    },
    {
      title: "Presupuesto Cerrado",
      description: "Presupuesto detallado y cerrado desde el inicio, sin sorpresas. Te informamos de cualquier cambio antes de proceder y solo actuamos con tu aprobación.",
      icon: (
        <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-brand-primary/10 text-brand-primary">
          <ShieldCheckIcon className="w-8 h-8" />
        </div>
      ),
    },
  ];

  const services = [
    {
      title: "Reformas de Oficinas",
      subtitle: "",
      description: "Espacios de trabajo modernos y funcionales que mejoran la productividad y el bienestar de tu equipo. Distribuciones flexibles, iluminación óptima y acabados profesionales.",
      services: [],
      image: reformasOficinasData.image,
      imageAlt: reformasOficinasData.imageAlt,
      ctaText: "Saber más",
      ctaHref: "/reformas-oficinas"
    },
    {
      title: "Locales Comerciales y Retail",
      subtitle: "",
      description: "Retail fit-out completo: desde la estructura hasta el diseño interior. Creamos espacios que atraen a tus clientes y optimizan la experiencia de compra.",
      services: [],
      image: localesComercialesRetailData.image,
      imageAlt: localesComercialesRetailData.imageAlt,
      ctaText: "Saber más",
      ctaHref: "/locales-comerciales-retail"
    },
    {
      title: "Restaurantes y Bares",
      subtitle: "",
      description: "Adaptamos espacios gastronómicos cumpliendo normativa de seguridad alimentaria y hostelería. Cocinas funcionales, salones acogedores y acabados duraderos.",
      services: [],
      image: restaurantesBaresData.image,
      imageAlt: restaurantesBaresData.imageAlt,
      ctaText: "Saber más",
      ctaHref: "/restaurantes-bares"
    },
    {
      title: "Clínicas y Centros Sanitarios",
      subtitle: "",
      description: "Espacios sanitarios que cumplen con normativa de higiene y seguridad. Salas de espera, consultas y zonas técnicas adaptadas a tus necesidades profesionales.",
      services: [],
      image: clinicasCentrosSanitariosData.image,
      imageAlt: clinicasCentrosSanitariosData.imageAlt,
      ctaText: "Saber más",
      ctaHref: "/clinicas-centros-sanitarios"
    },
    {
      title: "Gimnasios y Centros Deportivos",
      subtitle: "",
      description: "Instalaciones deportivas con materiales resistentes y acabados funcionales. Vestuarios, salas de entrenamiento y zonas comunes optimizadas para el uso intensivo.",
      services: [],
      image: gimnasiosCentrosDeportivosData.image,
      imageAlt: gimnasiosCentrosDeportivosData.imageAlt,
      ctaText: "Saber más",
      ctaHref: "/gimnasios-centros-deportivos"
    },
    {
      title: "Hoteles y Alojamientos",
      subtitle: "",
      description: "Renovación de espacios hoteleros que mejora la experiencia de tus huéspedes. Habitaciones, recepciones y zonas comunes con diseño y funcionalidad profesional.",
      services: [],
      image: hotelesAlojamientosData.image,
      imageAlt: hotelesAlojamientosData.imageAlt,
      ctaText: "Saber más",
      ctaHref: "/hoteles-alojamientos"
    }
  ];

  return (
    <>
      <Hero
        title="Reformas Comerciales en Barcelona y Vallès Occidental"
        titleLines={[
          "Reformas Comerciales",
          "en Barcelona",
          "y Vallès Occidental"
        ]}
        subtitle="Un espacio funcional y atractivo es clave para el éxito de tu negocio. Realizamos reformas de oficinas, locales, restaurantes y clínicas que mejoran la productividad, atraen clientes y cumplen la normativa vigente."
        primaryCTA={{
          text: "Solicitar Presupuesto",
          href: "/contacto"
        }}
        backgroundImage="/images/reforma-oficinas.webp"
        imageAlt="Reforma de oficina moderna y funcional en Barcelona"
        overlayOpacity="strong"
      />
      <FeatureGrid
        title="Especialistas en Espacios Comerciales"
        subtitle="Entendemos las necesidades específicas de cada sector y adaptamos nuestros servicios para cumplir normativas, optimizar espacios y crear ambientes que impulsen tu negocio."
        features={features}
        columns={4}
      />
      <AboutSection
        logoPath="/images/reformix-logo-vertical-white.png"
        text="En Reformix Barcelona realizamos reformas comerciales en Barcelona y el Vallès Occidental, desde oficinas corporativas hasta locales de retail, restaurantes y clínicas. Nos especializamos en adaptar espacios comerciales cumpliendo la normativa vigente de accesibilidad, seguridad y eficiencia energética, mientras creamos ambientes que mejoran la productividad y la experiencia de clientes y trabajadores."
      />
      <ServicesSection
        title="Soluciones para Cada Tipo de Negocio"
        subtitle="Cada sector tiene sus propias necesidades. Desde oficinas que fomentan la colaboración hasta restaurantes que optimizan el flujo de trabajo, adaptamos cada proyecto a los requisitos específicos de tu actividad."
        services={services}
        columns={3}
      />
      <FeatureGrid
        title="Ventajas de una Reforma Comercial Profesional"
        subtitle="Una reforma comercial bien ejecutada no solo mejora la estética de tu espacio, sino que aumenta la productividad, mejora la experiencia del cliente y cumple con todas las normativas vigentes."
        features={[
          {
            title: "Minimización de Interrupciones",
            description: "Planificamos las obras para que puedas seguir operando. Trabajamos en horarios flexibles y coordinamos fases para reducir el impacto en tu actividad.",
            icon: (
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-brand-primary/10 text-brand-primary">
                <ClockIcon className="w-8 h-8" />
              </div>
            ),
          },
          {
            title: "Cumplimiento Normativo",
            description: "Conocemos la normativa de accesibilidad, seguridad, higiene y eficiencia energética. Garantizamos que tu espacio cumpla con todos los requisitos legales.",
            icon: (
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-brand-primary/10 text-brand-primary">
                <CheckCircleIcon className="w-8 h-8" />
              </div>
            ),
          },
          {
            title: "Mejora de Productividad",
            description: "Diseñamos espacios que mejoran el flujo de trabajo, optimizan la iluminación y crean ambientes que fomentan la productividad y el bienestar de tu equipo.",
            icon: (
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-brand-primary/10 text-brand-primary">
                <BoltIcon className="w-8 h-8" />
              </div>
            ),
          },
        ]}
        columns={3}
        backgroundClassName="bg-gray-50"
        paddingClassName="py-20"
      />
      <TestimonialsCarousel
        title="Empresas que Confiaron en Nosotros"
        subtitle="La satisfacción de nuestros clientes comerciales es nuestra mejor garantía. Empresas de Barcelona y el Vallès Occidental han confiado en nosotros para transformar sus espacios."
        testimonials={[
          {
            text: "Reformix se encargó de la reforma completa de nuestra tienda. Cumplieron los plazos al día, coordinaron a todos los oficios y el resultado fue exactamente como en el plano. Pudimos reabrir sin perder ni una semana de ventas.",
            initials: "CA",
            name: "Carlos A.",
            location: "Barcelona (Eixample)"
          },
          {
            text: "Necesitábamos renovar la oficina sin detener la actividad. Trabajaron por fases, por la tarde y los fines de semana, y lo dejaron todo listo antes de lo previsto. Eficientes y muy discretos.",
            initials: "MG",
            name: "Marta G.",
            location: "Terrassa"
          },
          {
            text: "Convertimos un local antiguo en un estudio moderno. Irina nos ayudó con la distribución y los acabados. El espacio ganó luz y funcionalidad, y ahora recibimos clientes con orgullo.",
            initials: "JN",
            name: "Jordi N.",
            location: "Sabadell"
          },
          {
            text: "El restaurante necesitaba un lavado de cara urgente. Pintura, iluminación y nuevo revestimiento en el baño. En una semana, el local parecía otro. Los clientes lo notaron desde el primer día.",
            initials: "CR",
            name: "Claudia R.",
            location: "L'Hospitalet de Llobregat"
          },
          {
            text: "Encargamos la adaptación de un pequeño almacén a zona de atención al público. Reformix se ocupó de todo, desde permisos hasta mobiliario a medida. Orden, limpieza y cero sorpresas en la factura.",
            initials: "AM",
            name: "Albert M.",
            location: "Sant Cugat del Vallès"
          },
          {
            text: "Reformaron nuestra clínica dental y cuidaron cada detalle: suelos, paredes y puntos de luz. El ambiente es más cálido y profesional, justo lo que queríamos transmitir a los pacientes.",
            initials: "NF",
            name: "Núria F.",
            location: "Badalona"
          },
        ]}
      />
      {(() => {
        const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://www.reformix.barcelona';
        const faqs = [
          {
            question: "¿Puedo seguir operando durante la reforma?",
            answer: "Sí, en la mayoría de los casos es posible. Planificamos las obras por fases y trabajamos en horarios flexibles para minimizar la interrupción de tu actividad comercial. Evaluamos cada caso específico para encontrar la mejor solución."
          },
          {
            question: "¿Cómo garantizáis el cumplimiento normativo?",
            answer: "Conocemos la normativa vigente de accesibilidad, seguridad, higiene y eficiencia energética aplicable a cada sector. Incluimos en nuestros proyectos todos los requisitos legales y gestionamos las inspecciones y certificaciones necesarias."
          },
          {
            question: "¿Cuánto suele durar una reforma comercial?",
            answer: "Depende del tamaño y complejidad del proyecto. Una reforma de oficina pequeña puede durar 4-6 semanas, mientras que proyectos más complejos como restaurantes o clínicas pueden requerir 8-12 semanas. Te proporcionamos un calendario detallado desde el inicio."
          },
          {
            question: "¿Qué garantías ofrecéis?",
            answer: "Ofrecemos garantía por escrito que cubre tanto la mano de obra como los materiales instalados, conforme a la normativa vigente. Además, proporcionamos toda la documentación técnica y certificaciones necesarias para tu actividad."
          },
          {
            question: "¿Trabajáis en horarios fuera del horario comercial?",
            answer: "Sí, podemos adaptarnos a horarios flexibles para minimizar la interrupción de tu actividad. Trabajamos en horarios nocturnos, fines de semana o por fases según las necesidades específicas de tu negocio."
          }
        ];
        const faqSchema = generateFAQSchema(faqs);
        const serviceSchema = generateServiceSchema({
          name: "Reformas Comerciales en Barcelona y Vallès Occidental",
          description: "Reformas comerciales en Barcelona y Vallès Occidental. Oficinas, locales, restaurantes y clínicas con cumplimiento normativo y presupuesto cerrado.",
          provider: {
            '@type': 'HomeAndConstructionBusiness',
            name: 'Reformix Barcelona',
          },
          serviceType: 'Commercial Remodeling',
          url: '/reformas-comerciales',
        });
        const breadcrumbSchema = generateBreadcrumbSchema([
          { name: 'Inicio', url: '/' },
          { name: 'Reformas Comerciales', url: '/reformas-comerciales' },
        ]);
        
        return (
          <>
            {faqSchema && <JsonLd data={faqSchema} />}
            {serviceSchema && <JsonLd data={serviceSchema} />}
            {breadcrumbSchema && <JsonLd data={breadcrumbSchema} />}
            <FAQTwoColumn titleLines={["Preguntas Frecuentes", "sobre Reformas Comerciales"]} items={faqs} />
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
        title="Transforma tu Espacio Comercial"
        description="Tanto si necesitas renovar una oficina, adaptar un local comercial o reformar un restaurante o clínica, estamos aquí para ayudarte. Contáctanos para una consulta inicial sin compromiso y recibirás un presupuesto detallado adaptado a las necesidades específicas de tu negocio."
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

