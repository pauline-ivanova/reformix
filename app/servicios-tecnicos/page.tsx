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
import Image from "next/image";
import {
  UserGroupIcon,
  CalendarDaysIcon,
  ShieldCheckIcon,
  DocumentCheckIcon,
  ClockIcon,
  WrenchScrewdriverIcon,
  ExclamationTriangleIcon,
  CurrencyDollarIcon,
  UserIcon,
} from '@heroicons/react/24/solid';


export const metadata: Metadata = {
  title: "Servicios Técnicos en Barcelona y Vallès | Reformix",
  description: "Servicios técnicos de reforma en Barcelona y Vallès. Equipo propio: aislamiento, pladur, carpintería, fontanería, electricidad y pintura. ¡Pide presupuesto!",
  ...generateStandardMetadata({
    title: "Servicios Técnicos en Barcelona y Vallès | Reformix",
    description: "Servicios técnicos de reforma en Barcelona y Vallès. Equipo propio: aislamiento, pladur, carpintería, fontanería, electricidad y pintura. ¡Pide presupuesto!",
    url: "https://www.reformix.barcelona/servicios-tecnicos",
    pagePath: "/servicios-tecnicos",
    keywords: ["servicios técnicos de reforma", "aislamiento Barcelona", "carpintería Barcelona", "fontanería Barcelona", "electricidad Barcelona", "pintura Barcelona"],
  }),
};

export default async function ServiciosTecnicosPage() {
  const features = [
    {
      title: "Equipo Propio y Coordinado",
      description: "Técnicos internos, responsables y alineados en todo el proyecto.",
      icon: (
        <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-brand-primary/10 text-brand-primary">
          <UserGroupIcon className="w-8 h-8" />
        </div>
      ),
    },
    {
      title: "Planificación y Plazos Reales",
      description: "Calendario claro, hitos y seguimiento diario para cumplir.",
      icon: (
        <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-brand-primary/10 text-brand-primary">
          <CalendarDaysIcon className="w-8 h-8" />
        </div>
      ),
    },
    {
      title: "Calidad y Seguridad",
      description: "Materiales certificados y procedimientos seguros en obra.",
      icon: (
        <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-brand-primary/10 text-brand-primary">
          <ShieldCheckIcon className="w-8 h-8" />
        </div>
      ),
    },
    {
      title: "Presupuesto Cerrado y Garantía",
      description: "Partidas claras, sin sorpresas, y garantía por escrito.",
      icon: (
        <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-brand-primary/10 text-brand-primary">
          <DocumentCheckIcon className="w-8 h-8" />
        </div>
      ),
    },
  ];

  const services = [
    {
      title: "Alicatado y Solados",
      subtitle: "",
      description: "Servicio de alicatado y colocación de suelos en Barcelona. Expertos en cerámica, porcelánico y piedra. Acabados nivelados y duraderos.",
      services: [],
      image: "/images/alicatado-y-solados.png",
      imageAlt: "Alicatado y Solados en Barcelona",
      ctaText: "Ver Servicio",
      ctaHref: "/alicatado"
    },
    {
      title: "Pladur y Falsos Techos",
      subtitle: "",
      description: "Creamos distribuciones y soluciones decorativas con acabados de alta calidad.",
      services: [],
      image: "/images/pladur.webp",
      imageAlt: "Pladur y falsos techos",
      ctaText: "Ver Servicio",
      ctaHref: "/pladur"
    },
    {
      title: "Ventanas y Aluminio",
      subtitle: "",
      description: "Instalación de ventanas de aluminio y PVC. Mejora el aislamiento térmico y acústico de tu hogar con soluciones eficientes.",
      services: [],
      image: "/images/ventanas-aluminio.png",
      imageAlt: "Ventanas y Aluminio en Barcelona",
      ctaText: "Ver Servicio",
      ctaHref: "/ventanas"
    },
    {
      title: "Pintura Interior",
      subtitle: "",
      description: "Alisamos paredes y aplicamos pintura para un acabado impecable y duradero.",
      services: [],
      image: "/images/pintura-interior.webp",
      imageAlt: "Servicio de pintura interior",
      ctaText: "Ver Servicio",
      ctaHref: "/pintura-interior"
    },
    {
      title: "Aislamiento Térmico y Acústico",
      subtitle: "",
      description: "Aislamiento térmico y acústico en Barcelona con materiales de alta eficiencia energética. Instalamos soluciones para mejorar el confort y reducir las facturas energéticas.",
      services: [],
      image: "/images/aislamiento-termico-en-barcelona.webp",
      imageAlt: "Aislamiento térmico y acústico en Barcelona",
      ctaText: "Ver Servicio",
      ctaHref: "/aislamiento-termico-acustico"
    },
    {
      title: "Fontanería",
      subtitle: "",
      description: "Renovamos por completo las redes de agua y saneamiento con garantía.",
      services: [],
      image: "/images/fontaneria.webp",
      imageAlt: "Servicio de fontanería",
      ctaText: "Ver Servicio",
      ctaHref: "/fontaneria"
    },
    {
      title: "Electricidad",
      subtitle: "",
      description: "Servicios de electricidad en Barcelona con instalación y mantenimiento profesional. Actualizamos tu instalación, iluminación y mecanismos para mayor seguridad y confort.",
      services: [],
      image: "/images/servicio-de-electricidad.webp",
      imageAlt: "Servicios de electricidad en Barcelona",
      ctaText: "Ver Servicio",
      ctaHref: "/electricidad"
    },
    {
      title: "Calefacción y Climatización",
      subtitle: "",
      description: "Instalamos sistemas eficientes de climatización para tu confort todo el año.",
      services: [],
      image: "/images/calefaccion.webp",
      imageAlt: "Servicio de calefacción y climatización",
      ctaText: "Ver Servicio",
      ctaHref: "/calefaccion-climatizacion"
    },
    {
      title: "Carpintería",
      subtitle: "",
      description: "Servicio de carpintería en Barcelona: fabricación e instalación de muebles y puertas a medida. Instalación de puertas, frentes de armario y rodapiés con ajustes precisos.",
      services: [],
      image: "/images/carpinteria-en-barcelona.webp",
      imageAlt: "Servicio de carpintería en Barcelona",
      ctaText: "Ver Servicio",
      ctaHref: "/carpinteria"
    },
    {
      title: "Albañilería",
      subtitle: "",
      description: "Realizamos revestimientos, solados y pequeñas obras con acabados de calidad.",
      services: [],
      image: "/images/albanileria.webp",
      imageAlt: "Servicio de albañilería",
      ctaText: "Ver Servicio",
      ctaHref: "/albanileria"
    },
    {
      title: "Impermeabilizaciones",
      subtitle: "",
      description: "Aplicamos soluciones técnicas contra humedades en terrazas, cubiertas y baños.",
      services: [],
      image: "/images/impermeabilizaciones.webp",
      imageAlt: "Servicio de impermeabilizaciones",
      ctaText: "Ver Servicio",
      ctaHref: "/impermeabilizaciones"
    },
    {
      title: "Montaje de Muebles y Cocinas",
      subtitle: "",
      description: "Servicio profesional de montaje de cocinas y muebles (Ikea, Leroy Merlin, Obramat). Instalación rápida y a medida.",
      services: [],
      image: "/images/montaje-muebles-cocinas.png",
      imageAlt: "Montaje de Muebles y Cocinas",
      ctaText: "Ver Servicio",
      ctaHref: "/montaje-muebles-cocinas"
    }
  ];

  return (
    <>
      <Hero
        title="Servicios Técnicos de Reforma en Barcelona y Vallès Occidental"
        titleLines={[
          "Servicios Técnicos",
          "de Reforma en Barcelona",
          "y Vallès Occidental"
        ]}
        subtitle="Un único equipo, todas las especialidades. Coordinamos y ejecutamos los trabajos técnicos de tu reforma con calidad certificada, plazos realistas y garantía por escrito."
        primaryCTA={{
          text: "Solicita tu Presupuesto",
          href: "/contacto"
        }}
        backgroundImage="/images/servicios-tecnicos.webp"
        overlayOpacity="strong"
      />
      <FeatureGrid
        title=""
        subtitle=""
        features={features}
        columns={4}
      />
      <AboutSection
        logoPath="/images/reformix-logo-vertical-white.png"
        text="Desde Sabadell coordinamos todas las disciplinas técnicas de reforma en Barcelona y el Vallès Occidental. Centralizamos la dirección de obra y la comunicación, evitando retrasos, sobrecostes y acabados irregulares. Nuestro método integra planificación, ejecución y control de calidad para un resultado predecible y de alto nivel."
      />
      <ServicesSection
        title="Nuestros Servicios Técnicos"
        subtitle="Desde el aislamiento hasta la pintura final, aquí puedes ver en detalle cada uno de los servicios técnicos que ofrecemos. Nos encargamos de coordinarlos a la perfección para garantizar plazos, costes y acabados de alta calidad."
        services={services}
      />
      <FeatureGrid
        title="Riesgos de Mala Coordinación"
        subtitle="Cuando faltan planificación y un único interlocutor, los servicios técnicos de reforma acaban en retrasos, sobrecostes y acabados irregulares. Estos son los problemas más habituales y cómo evitarlos."
        features={[
          {
            title: "Retrasos en Cadena",
            description: "El electricista no puede avanzar porque el albañil no ha terminado. Este tipo de fallos de coordinación paraliza la obra y alarga los plazos.",
            icon: (
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-red-100 text-red-600">
                <ClockIcon className="w-8 h-8" />
              </div>
            ),
          },
          {
            title: "Acabados Irregulares",
            description: "Cuando cada industrial trabaja por su cuenta, aparecen juntas mal rematadas, enchufes torcidos o instalaciones que no coinciden con el plano.",
            icon: (
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-red-100 text-red-600">
                <ExclamationTriangleIcon className="w-8 h-8" />
              </div>
            ),
          },
          {
            title: "Sobrecostes Inesperados",
            description: "Una mala definición de las partidas o la falta de previsión generan costes extra que no estaban en el presupuesto inicial, rompiendo tu planificación.",
            icon: (
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-red-100 text-red-600">
                <CurrencyDollarIcon className="w-8 h-8" />
              </div>
            ),
          },
          {
            title: "Sin Un Interlocutor",
            description: "Sin un coordinador, eres tú quien debe perseguir a los industriales, resolver conflictos y asumir la responsabilidad final si algo sale mal.",
            icon: (
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-red-100 text-red-600">
                <UserIcon className="w-8 h-8" />
              </div>
            ),
          },
        ]}
        columns={4}
        backgroundClassName="bg-gray-50"
      />
      <FeatureGrid
        title="Ventajas de una Reforma Coordinada"
        subtitle="Al centralizar todos los oficios técnicos bajo una misma dirección, tu proyecto avanza sin fricciones. Ganas en tranquilidad, aseguras la calidad y evitas sorpresas en presupuesto y plazos."
        features={[
          {
            title: "Tranquilidad y Cero Estrés",
            description: "Un único gestor se encarga de todo. No tendrás que perseguir a diferentes industriales ni resolver conflictos entre ellos.",
            icon: (
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-brand-primary/10 text-brand-primary">
                <UserGroupIcon className="w-8 h-8" />
              </div>
            ),
          },
          {
            title: "Presupuesto y Plazos Garantizados",
            description: "Nuestro plan de obra integrado evita sorpresas. Lo que presupuestamos es lo que pagas, en el tiempo acordado.",
            icon: (
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-brand-primary/10 text-brand-primary">
                <ClockIcon className="w-8 h-8" />
              </div>
            ),
          },
          {
            title: "Acabados Perfectos y Duraderos",
            description: "Supervisamos cada fase para garantizar que el resultado final cumpla con nuestros más altos estándares de calidad.",
            icon: (
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-brand-primary/10 text-brand-primary">
                <WrenchScrewdriverIcon className="w-8 h-8" />
              </div>
            ),
          },
        ]}
        columns={3}
      />
      <FeatureGrid
        title="Nuestro Proceso en 6 Pasos"
        subtitle="Para que todos los oficios trabajen en perfecta sintonía, aplicamos un método riguroso que garantiza un flujo de trabajo sin interrupciones y un resultado final predecible."
        backgroundClassName="bg-gray-50"
        paddingClassName="py-20"
        features={[
          {
            title: "Diagnóstico Técnico y Propuesta",
            description: "Analizamos las necesidades de tu proyecto, evaluamos las instalaciones existentes y te presentamos una propuesta técnica detallada con las mejores soluciones.",
            icon: (
              <div className="inline-flex items-center justify-center w-16 h-16">
                <Image
                  src="/images/1.webp"
                  alt="Diagnóstico Técnico"
                  width={64}
                  height={64}
                  className="object-contain"
                />
              </div>
            ),
          },
          {
            title: "Presupuesto Cerrado y Materiales",
            description: "Recibirás un presupuesto desglosado por partidas, sin letra pequeña. Te asesoramos en la elección de materiales para asegurar calidad y durabilidad.",
            icon: (
              <div className="inline-flex items-center justify-center w-16 h-16">
                <Image
                  src="/images/2.webp"
                  alt="Presupuesto Cerrado"
                  width={64}
                  height={64}
                  className="object-contain"
                />
              </div>
            ),
          },
          {
            title: "Planificación de Tiempos y Equipos",
            description: "Creamos un calendario de obra donde cada especialista sabe cuándo y dónde intervenir, evitando tiempos muertos y solapamientos.",
            icon: (
              <div className="inline-flex items-center justify-center w-16 h-16">
                <Image
                  src="/images/3.webp"
                  alt="Planificación"
                  width={64}
                  height={64}
                  className="object-contain"
                />
              </div>
            ),
          },
          {
            title: "Ejecución Coordinada y Supervisión",
            description: "Nuestro jefe de obra supervisa diariamente los trabajos, asegurando que todo se ejecute según el plan y con los más altos estándares de calidad.",
            icon: (
              <div className="inline-flex items-center justify-center w-16 h-16">
                <Image
                  src="/images/4.webp"
                  alt="Ejecución Coordinada"
                  width={64}
                  height={64}
                  className="object-contain"
                />
              </div>
            ),
          },
          {
            title: "Acabados Finales y Verificación",
            description: "Revisamos contigo cada detalle, realizamos los ajustes finales y dejamos el espacio completamente limpio, listo para que lo disfrutes.",
            icon: (
              <div className="inline-flex items-center justify-center w-16 h-16">
                <Image
                  src="/images/5.webp"
                  alt="Acabados Finales"
                  width={64}
                  height={64}
                  className="object-contain"
                />
              </div>
            ),
          },
          {
            title: "Entrega del Proyecto y Garantías",
            description: "Hacemos la entrega formal de la obra y te proporcionamos toda la documentación y las garantías por escrito para tu total tranquilidad.",
            icon: (
              <div className="inline-flex items-center justify-center w-16 h-16">
                <Image
                  src="/images/6.webp"
                  alt="Entrega del Proyecto"
                  width={64}
                  height={64}
                  className="object-contain"
                />
              </div>
            ),
          },
        ]}
        columns={3}
      />
      <TestimonialsCarousel />
      {(() => {
        const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://www.reformix.barcelona';
        const faqs = [
          {
            question: "¿Trabajáis con equipo propio o subcontratas?",
            answer: "La base de nuestro equipo es personal propio de plantilla. Para especialidades muy concretas, colaboramos con una red estable de industriales de confianza con los que llevamos años trabajando y que comparten nuestros estándares de calidad."
          },
          {
            question: "¿Cómo garantizáis los plazos?",
            answer: "Mediante un calendario de obra detallado que define la intervención de cada especialista. Realizamos un seguimiento diario para anticipar y resolver cualquier imprevisto, asegurando el cumplimiento de la fecha de entrega acordada."
          },
          {
            question: "¿Qué garantías ofrecéis?",
            answer: "Ofrecemos una garantía completa por escrito que cubre tanto la mano de obra de nuestros equipos como los materiales que instalamos, conforme a la normativa vigente. Tu tranquilidad es nuestra prioridad."
          },
          {
            question: "¿Podéis coordinar solo una parte de la obra?",
            answer: "Por supuesto. Aunque nuestra especialidad es la coordinación integral, podemos encargarnos de un conjunto específico de trabajos (por ejemplo, toda la fontanería y electricidad) y coordinarnos con tu arquitecto o jefe de obra."
          },
          {
            question: "¿Cómo se gestionan los cambios durante la obra?",
            answer: "Cualquier cambio se gestiona de forma transparente. Antes de realizarlo, te presentamos un anexo al presupuesto que detalla el nuevo trabajo, su coste y cómo afecta al plazo final. Solo procedemos con tu aprobación por escrito."
          }
        ];
        const faqSchema = generateFAQSchema(faqs);
        const serviceSchema = generateServiceSchema({
          name: "Servicios Técnicos de Reforma en Barcelona y Vallès Occidental",
          description: "Servicios técnicos de reforma en Barcelona y Vallès Occidental. Equipo propio: aislamiento, pladur, carpintería, fontanería, electricidad y pintura.",
          provider: {
            '@type': 'HomeAndConstructionBusiness',
            name: 'Reformix Barcelona',
          },
          serviceType: 'Construction Technical Services',
          url: '/servicios-tecnicos',
        });
        const breadcrumbSchema = generateBreadcrumbSchema([
          { name: 'Inicio', url: '/' },
          { name: 'Servicios Técnicos', url: '/servicios-tecnicos' },
        ]);
        
        return (
          <>
            {faqSchema && <JsonLd data={faqSchema} />}
            {serviceSchema && <JsonLd data={serviceSchema} />}
            {breadcrumbSchema && <JsonLd data={breadcrumbSchema} />}
            <FAQTwoColumn titleLines={["Preguntas Frecuentes"]} items={faqs} />
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
        title="Pide Presupuesto para tu Reforma"
        description="Tanto si necesitas un único especialista como la coordinación completa de varios oficios, estamos aquí para ayudarte. Explícanos tu caso y te daremos una valoración detallada y sin compromiso."
        buttonText="Solicitar Presupuesto"
        buttonHref="/contacto"
      />
    </>
  );
}

