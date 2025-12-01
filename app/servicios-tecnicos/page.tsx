import Hero from "@/app/components/blocks/Hero";
import FeatureGrid from "@/app/components/blocks/FeatureGrid";
import AboutSection from "@/app/components/blocks/AboutSection";
import ServicesSection from "@/app/components/blocks/ServicesSection";
import WhyChooseUs from "@/app/components/blocks/WhyChooseUs";
import TestimonialsCarousel from "@/app/components/blocks/TestimonialsCarousel";
import FAQTwoColumn from "@/app/components/blocks/FAQTwoColumn";
import ServiceAreas from "@/app/components/blocks/ServiceAreas";
import CTA from "@/app/components/blocks/CTA";
import { Metadata } from "next";
import { generateStandardMetadata } from "@/lib/metadata-utils";
import {
  UserGroupIcon,
  CalendarDaysIcon,
  ShieldCheckIcon,
  DocumentCheckIcon,
  ClockIcon,
  WrenchScrewdriverIcon,
} from '@heroicons/react/24/solid';

export const metadata: Metadata = {
  title: "Servicios Técnicos de Reforma en Barcelona y Vallès Occidental",
  description: "Servicios técnicos de reforma en Barcelona y Vallès Occidental. Equipo propio: aislamiento, pladur, carpintería, fontanería, electricidad y pintura. ¡Pide tu presupuesto!",
  ...generateStandardMetadata({
    title: "Servicios Técnicos de Reforma en Barcelona y Vallès Occidental",
    description: "Servicios técnicos de reforma en Barcelona y Vallès Occidental. Equipo propio: aislamiento, pladur, carpintería, fontanería, electricidad y pintura. ¡Pide tu presupuesto!",
    url: "https://reformix.barcelona/servicios-tecnicos",
    pagePath: "/servicios-tecnicos",
    keywords: ["servicios técnicos de reforma", "aislamiento Barcelona", "carpintería Barcelona", "fontanería Barcelona", "electricidad Barcelona", "pintura Barcelona"],
  }),
};

export default async function ServiciosTecnicosPage() {
  const features = [
    {
      title: "Equipo Propio y Coordinado",
      description: "Técnicos internos, responsables y alineados en todo el proyecto. Esto nos permite garantizar la coordinación perfecta entre todos los oficios.",
      icon: (
        <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-brand-primary/10 text-brand-primary">
          <UserGroupIcon className="w-8 h-8" />
        </div>
      ),
    },
    {
      title: "Planificación y Plazos Reales",
      description: "Calendario claro, hitos y seguimiento diario para cumplir. Nuestro método integra planificación, ejecución y control de calidad para un resultado predecible.",
      icon: (
        <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-brand-primary/10 text-brand-primary">
          <CalendarDaysIcon className="w-8 h-8" />
        </div>
      ),
    },
    {
      title: "Calidad y Seguridad Certificadas",
      description: "Materiales homologados y procedimientos seguros en obra. Supervisamos cada fase para garantizar que el resultado final cumpla con nuestros más altos estándares.",
      icon: (
        <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-brand-primary/10 text-brand-primary">
          <ShieldCheckIcon className="w-8 h-8" />
        </div>
      ),
    },
    {
      title: "Presupuesto Cerrado y Garantía",
      description: "Partidas definidas, sin extras, y garantía por escrito. El precio que firmamos es el precio final, sin sorpresas en la factura.",
      icon: (
        <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-brand-primary/10 text-brand-primary">
          <DocumentCheckIcon className="w-8 h-8" />
        </div>
      ),
    },
  ];

  const services = [
    {
      title: "Aislamiento Térmico y Acústico",
      subtitle: "— Confort y Ahorro Energético",
      description: "Instalamos soluciones para mejorar el confort y reducir las facturas energéticas. Desde aislamiento en fachadas hasta insonorización entre viviendas.",
      services: [
        "Aislamiento térmico en fachadas",
        "Insonorización acústica",
        "Aislamiento de techos y suelos",
        "Ventanas de alta eficiencia"
      ],
      image: "/images/servicios-tecnicos-planos.webp",
      imageAlt: "Servicio de aislamiento térmico y acústico",
      ctaText: "Ver servicio",
      ctaHref: "/aislamiento-termico-acustico"
    },
    {
      title: "Carpintería",
      subtitle: "— Precisión en Cada Detalle",
      description: "Instalación de puertas, frentes de armario y rodapiés con ajustes precisos. Trabajamos con los mejores materiales para garantizar durabilidad y acabados impecables.",
      services: [
        "Puertas interiores y exteriores",
        "Frentes de armario a medida",
        "Rodapiés y zócalos",
        "Carpintería decorativa"
      ],
      image: "/images/servicios-tecnicos-planos.webp",
      imageAlt: "Servicio de carpintería",
      ctaText: "Ver servicio",
      ctaHref: "/carpinteria"
    },
    {
      title: "Fontanería",
      subtitle: "— Instalaciones que Durarán",
      description: "Renovamos por completo las redes de agua y saneamiento con garantía. Instalamos sistemas modernos y eficientes que te durarán décadas.",
      services: [
        "Renovación de instalaciones de agua",
        "Instalación de sistemas de calefacción",
        "Fontanería para cocinas y baños",
        "Reparaciones y mantenimiento"
      ],
      image: "/images/servicios-tecnicos-planos.webp",
      imageAlt: "Servicio de fontanería",
      ctaText: "Ver servicio",
      ctaHref: "/fontaneria"
    },
    {
      title: "Electricidad",
      subtitle: "— Seguridad y Modernidad",
      description: "Actualizamos tu instalación, iluminación y mecanismos para mayor seguridad y confort. Cumplimos con todas las normativas vigentes.",
      services: [
        "Instalación eléctrica completa",
        "Iluminación LED y sistemas inteligentes",
        "Actualización de cuadro eléctrico",
        "Instalación de mecanismos y enchufes"
      ],
      image: "/images/servicios-tecnicos-planos.webp",
      imageAlt: "Servicio de electricidad",
      ctaText: "Ver servicio",
      ctaHref: "/electricidad"
    },
    {
      title: "Pintura Interior",
      subtitle: "— Acabados Perfectos",
      description: "Alisamos paredes y aplicamos pintura para un acabado impecable y duradero. Trabajamos con las mejores marcas para garantizar resultados de calidad.",
      services: [
        "Alisado de paredes y techos",
        "Pintura decorativa",
        "Barnizado de carpintería",
        "Tratamientos especiales"
      ],
      image: "/images/servicios-tecnicos-planos.webp",
      imageAlt: "Servicio de pintura interior",
      ctaText: "Ver servicio",
      ctaHref: "/pintura-interior"
    },
    {
      title: "Pladur y Falsos Techos",
      subtitle: "— Distribuciones Modernas",
      description: "Creamos distribuciones y soluciones decorativas con acabados de alta calidad. El pladur nos permite crear espacios funcionales y estéticos.",
      services: [
        "Tabiquería de pladur",
        "Falsos techos",
        "Revestimientos decorativos",
        "Nivelación de techos"
      ],
      image: "/images/servicios-tecnicos-planos.webp",
      imageAlt: "Servicio de pladur y falsos techos",
      ctaText: "Ver servicio",
      ctaHref: "/contacto"
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
        backgroundImage="/images/hero-bg.webp"
      />
      <FeatureGrid
        title="Compromisos Claros para un Resultado Profesional"
        subtitle="Técnicos propios, planificación precisa y control de calidad en cada fase. Centralizamos la dirección de obra y la comunicación, evitando retrasos, sobrecostes y acabados irregulares."
        features={features}
        columns={4}
      />
      <AboutSection
        logoPath="/images/reformix-logo-vertical-white.png"
        text="Desde Sabadell coordinamos todas las disciplinas técnicas de reforma en Barcelona y el Vallès Occidental. Centralizamos la dirección de obra y la comunicación, evitando retrasos, sobrecostes y acabados irregulares. Nuestro método integra planificación, ejecución y control de calidad para un resultado predecible y de alto nivel."
      />
      <ServicesSection
        title="Nuestros Servicios Técnicos: coordinación y calidad en cada especialidad"
        subtitle="Desde el aislamiento hasta la pintura final, aquí puedes ver en detalle cada uno de los servicios técnicos que ofrecemos. Nos encargamos de coordinarlos a la perfección para garantizar plazos, costes y acabados de alta calidad."
        services={services}
      />
      <FeatureGrid
        title="Las Ventajas de una Reforma Bien Coordinada"
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
      <WhyChooseUs />
      <TestimonialsCarousel />
      <FAQTwoColumn
        items={[
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
            question: "¿Gestionáis licencias y permisos?",
            answer: "Sí. Si tu reforma requiere de una licencia de obra menor o una comunicación al ayuntamiento, nuestro equipo técnico puede gestionar toda la documentación para que no tengas que preocuparte por el papeleo."
          },
          {
            question: "¿Cómo se gestionan los cambios durante la obra?",
            answer: "Cualquier cambio se gestiona de forma transparente. Antes de realizarlo, te presentamos un anexo al presupuesto que detalla el nuevo trabajo, su coste y cómo afecta al plazo final. Solo procedemos con tu aprobación por escrito."
          }
        ]}
      />
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

