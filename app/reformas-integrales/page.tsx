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
  CalendarDaysIcon,
  KeyIcon,
  UserGroupIcon,
  ShieldCheckIcon,
  HomeIcon,
  BuildingOfficeIcon,
  SparklesIcon,
} from '@heroicons/react/24/solid';

export const metadata: Metadata = {
  title: "Reformas Integrales en Barcelona y Vallès Occidental",
  description: "Reformas Integrales en Barcelona y Vallès Occidental. Proyectos llave en mano con garantía y presupuesto cerrado. ¡Pide tu presupuesto!",
  ...generateStandardMetadata({
    title: "Reformas Integrales en Barcelona y Vallès Occidental",
    description: "Reformas Integrales en Barcelona y Vallès Occidental. Proyectos llave en mano con garantía y presupuesto cerrado. ¡Pide tu presupuesto!",
    url: "https://reformix.barcelona/reformas-integrales",
    pagePath: "/reformas-integrales",
    keywords: ["reformas integrales", "reforma integral Barcelona", "reforma integral llave en mano", "rehabilitación casas", "reforma integral pisos"],
  }),
};

export default async function ReformasIntegralesPage() {
  const features = [
    {
      title: "+10 Años de Experiencia",
      description: "Hemos gestionado decenas de reformas integrales, lo que nos permite anticipar problemas y garantizar un resultado impecable y duradero.",
      icon: (
        <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-brand-primary/10 text-brand-primary">
          <CalendarDaysIcon className="w-8 h-8" />
        </div>
      ),
    },
    {
      title: 'Proyectos "Llave en Mano"',
      description: "Ofrecemos una gestión integral de tu reforma. Nos encargamos de todo, desde la demolición y licencias hasta la limpieza final, para que tú solo tengas que entrar a disfrutar.",
      icon: (
        <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-brand-primary/10 text-brand-primary">
          <KeyIcon className="w-8 h-8" />
        </div>
      ),
    },
    {
      title: "Coordinación Total de Gremios",
      description: "Contamos con un equipo propio y coordinado (albañiles, pintores, electricistas...) para cumplir los plazos acordados sin excusas.",
      icon: (
        <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-brand-primary/10 text-brand-primary">
          <UserGroupIcon className="w-8 h-8" />
        </div>
      ),
    },
    {
      title: "Garantía Completa por Escrito",
      description: "Tu gran inversión está protegida. Ofrecemos una garantía que cubre tanto los materiales como la mano de obra de todo el proyecto.",
      icon: (
        <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-brand-primary/10 text-brand-primary">
          <ShieldCheckIcon className="w-8 h-8" />
        </div>
      ),
    },
  ];

  const services = [
    {
      title: "Reformas Integrales de Pisos",
      subtitle: "— Maximiza el Espacio y la Luz",
      description: "Maximizamos el espacio y la luz en pisos urbanos. Redistribuimos estancias, renovamos instalaciones y creamos ambientes modernos y funcionales, optimizando cada metro cuadrado.",
      services: [
        "Redistribución de espacios",
        "Renovación de instalaciones",
        "Optimización de luz natural",
        "Diseño funcional y moderno"
      ],
      image: "/images/reforma-integral-salon.webp",
      imageAlt: "Reforma integral de piso en Barcelona",
      ctaText: "Saber más",
      ctaHref: "/reformas-integrales-pisos"
    },
    {
      title: "Rehabilitación Integral de Casas",
      subtitle: "— Devuelve el Esplendor a tu Hogar",
      description: "Abordamos la rehabilitación completa de casas y chalets. Mejoramos la eficiencia energética, reforzamos estructuras e integramos espacios para devolverle todo el esplendor a tu hogar.",
      services: [
        "Rehabilitación estructural",
        "Mejora de eficiencia energética",
        "Integración de espacios",
        "Refuerzo de estructuras"
      ],
      image: "/images/reforma-integral-salon.webp",
      imageAlt: "Rehabilitación de casa en Vallès Occidental",
      ctaText: "Ver proyectos",
      ctaHref: "/rehabilitacion-casas"
    },
    {
      title: 'Proyectos "Llave en Mano"',
      subtitle: "— Tu Tranquilidad es Nuestra Prioridad",
      description: 'Tu tranquilidad es nuestra prioridad. Gestionamos tu reforma de principio a fin: diseño, licencias, ejecución y limpieza. Un único interlocutor para un control total y cero preocupaciones.',
      services: [
        "Gestión completa del proyecto",
        "Coordinación de todos los gremios",
        "Un único interlocutor",
        "Control total y sin preocupaciones"
      ],
      image: "/images/reforma-oficinas.webp",
      imageAlt: "Proyecto llave en mano de reforma integral",
      ctaText: "Ver proceso",
      ctaHref: "/contacto"
    }
  ];

  return (
    <>
      <Hero
        title="Reformas Integrales en Barcelona y Vallès Occidental"
        titleLines={[
          "Reformas Integrales",
          "en Barcelona",
          "y Vallès Occidental"
        ]}
        subtitle="De un piso anticuado a un hogar moderno y funcional. Gestionamos tu reforma integral llave en mano para que tú solo te ocupes de disfrutar del resultado."
        primaryCTA={{
          text: "Pedir presupuesto para mi reforma",
          href: "/contacto"
        }}
        backgroundImage="/images/reforma-integral-salon.webp"
      />
      <FeatureGrid
        title="La Tranquilidad de un Proyecto bien Gestionado"
        features={features}
        columns={4}
      />
      <AboutSection
        logoPath="/images/reformix-logo-vertical-white.png"
        text="Somos una empresa de reformas con sede en Sabadell y damos servicio a toda el área de Barcelona y el Vallès Occidental. ¿Nuestra clave? Un equipo propio y coordinado. Esto nos permite gestionar la rehabilitación completa de tu piso de principio a fin, garantizando una perfecta coordinación de gremios y el cumplimiento estricto de los plazos. Sin intermediarios y con un único responsable para tu total tranquilidad."
      />
      <ServicesSection
        title="Soluciones para Pisos, Casas y Proyectos Llave en Mano"
        subtitle="Cada proyecto es único. Nos especializamos en la transformación completa de diferentes tipos de viviendas, ofreciendo siempre una solución a medida, desde la redistribución de un piso hasta la rehabilitación completa de una casa."
        services={services}
      />
      <FeatureGrid
        title="Tranquilidad y Valor: Nuestros Compromisos Contigo"
        subtitle="Ya sea en un piso urbano o en una casa unifamiliar, nuestro enfoque integral aporta una serie de beneficios transversales que garantizan no solo un resultado estético, sino también una revalorización de tu propiedad y, sobre todo, tu tranquilidad durante el proceso."
        features={[
          {
            title: "Revaloriza tu Inmueble",
            description: "Una reforma integral bien ejecutada puede aumentar el valor de tu propiedad hasta un 20%.",
            icon: (
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-brand-primary/10 text-brand-primary">
                <HomeIcon className="w-8 h-8" />
              </div>
            ),
          },
          {
            title: "Mejora la Eficiencia Energética",
            description: "Reduce tus facturas con un mejor aislamiento térmico y ventanas de alta calidad.",
            icon: (
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-brand-primary/10 text-brand-primary">
                <SparklesIcon className="w-8 h-8" />
              </div>
            ),
          },
          {
            title: "Un Proceso sin Estrés",
            description: "Como único interlocutor, gestionamos todo el proyecto, liberándote de la coordinación y los problemas.",
            icon: (
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-brand-primary/10 text-brand-primary">
                <UserGroupIcon className="w-8 h-8" />
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
            question: "¿Cuánto tarda una reforma integral de un piso de 90m²?",
            answer: "Aunque cada proyecto es único, de media, una reforma integral de un piso de estas características suele durar entre 3 y 4 meses, dependiendo de la complejidad y los acabados."
          },
          {
            question: "¿Es necesario contratar a un arquitecto por separado?",
            answer: "Para una reforma integral que implica cambios de distribución, es necesaria la firma de un técnico. Colaboramos con arquitectos e interioristas de confianza o, si lo prefieres, podemos trabajar con el profesional que tú elijas."
          },
          {
            question: "¿Qué garantías ofrecéis en una reforma integral?",
            answer: "Ofrecemos una garantía completa por escrito que cubre tanto los materiales como la mano de obra, además de contar con un seguro de Responsabilidad Civil para tu total tranquilidad."
          },
          {
            question: "¿El presupuesto es cerrado o pueden haber costes extra?",
            answer: "Sí, todos nuestros presupuestos para reformas integrales son cerrados y detallados. Salvo que tú decidas hacer cambios durante la obra, el precio acordado es el precio final. Sin sorpresas."
          },
          {
            question: "¿Quién se encarga de los permisos de obra?",
            answer: "Nosotros nos encargamos de todo el proceso. Analizamos qué tipo de licencia necesita tu reforma (comunicado de obras, licencia de obras mayores, etc.) y gestionamos toda la documentación con el ayuntamiento correspondiente, ya sea en Barcelona, Sabadell o cualquier otro municipio. Tú no tienes que preocuparte por el papeleo."
          },
          {
            question: "¿Cómo funciona la elección de materiales (suelos, azulejos, etc.)?",
            answer: "Nosotros te asesoramos y te acompañamos. Te presentamos un catálogo de nuestros proveedores de confianza, с которыми часто получаем лучшие цены. Sin embargo, la decisión final es siempre tuya. Si prefieres comprar los materiales por tu cuenta, nos adaptamos sin problema, asegurándonos de que cumplen con la calidad necesaria para la garantía."
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
        title="¿Listo para Dar el Primer Paso hacia la Casa de tus Sueños?"
        description="Hablemos de tu proyecto. Contacta con nosotros para una primera visita y un presupuesto detallado sin compromiso. Descubre por qué nuestros clientes nos recomiendan."
        buttonText="Pedir Presupuesto Gratuito"
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

