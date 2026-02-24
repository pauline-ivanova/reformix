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
  WrenchScrewdriverIcon,
  ShieldCheckIcon,
  UserGroupIcon,
  DocumentCheckIcon,
  HomeIcon,
  SparklesIcon,
  BuildingOfficeIcon,
  Square3Stack3DIcon,
  ExclamationTriangleIcon,
  ChartBarIcon,
  PaintBrushIcon,
  CubeIcon,
} from '@heroicons/react/24/solid';

export const metadata: Metadata = {
  title: "Servicios de Albañilería en Barcelona y Vallès Occidental",
  description: "Especialistas en albañilería para reformas en Barcelona y Vallès Occidental. Revestimientos, solados y pequeñas obras con acabados de calidad.",
  ...generateStandardMetadata({
    title: "Servicios de Albañilería en Barcelona y Vallès Occidental",
    description: "Especialistas en albañilería para reformas en Barcelona y Vallès Occidental. Revestimientos, solados y pequeñas obras con acabados de calidad.",
    url: "https://www.reformix.barcelona/albanileria",
    pagePath: "/albanileria",
    keywords: ["albañilería Barcelona", "revestimientos Barcelona", "solados Barcelona", "obras albañilería", "reforma albañilería"],
  }),
};

export default async function AlbanileriaPage() {
  const features = [
    {
      title: "Albañiles Experimentados",
      description: "Nuestro equipo tiene años de experiencia en trabajos de albañilería, desde pequeñas reparaciones hasta obras más complejas.",
      icon: (
        <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-brand-primary/10 text-brand-primary">
          <UserGroupIcon className="w-8 h-8" />
        </div>
      ),
    },
    {
      title: "Materiales de Calidad",
      description: "Utilizamos materiales certificados y de primera calidad para garantizar la durabilidad y resistencia de nuestros trabajos.",
      icon: (
        <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-brand-primary/10 text-brand-primary">
          <ShieldCheckIcon className="w-8 h-8" />
        </div>
      ),
    },
    {
      title: "Coordinación con Otros Oficios",
      description: "Trabajamos en perfecta coordinación con fontaneros, electricistas y pintores para un resultado impecable.",
      icon: (
        <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-brand-primary/10 text-brand-primary">
          <WrenchScrewdriverIcon className="w-8 h-8" />
        </div>
      ),
    },
    {
      title: "Acabados Profesionales",
      description: "Aplicamos técnicas profesionales para conseguir acabados perfectos, lisos y preparados para cualquier revestimiento.",
      icon: (
        <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-brand-primary/10 text-brand-primary">
          <SparklesIcon className="w-8 h-8" />
        </div>
      ),
    },
  ];

  const solutions = [
    {
      title: "Revestimientos y Alicatados",
      description: "Instalamos azulejos, gres porcelánico y otros revestimientos en baños, cocinas y otras estancias con precisión milimétrica.",
      icon: (
        <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-brand-primary/10 text-brand-primary">
          <Square3Stack3DIcon className="w-8 h-8" />
        </div>
      ),
    },
    {
      title: "Solados y Pavimentos",
      description: "Colocamos suelos de cerámica, gres o porcelánico con nivelación perfecta y juntas uniformes para un acabado profesional.",
      icon: (
        <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-brand-primary/10 text-brand-primary">
          <HomeIcon className="w-8 h-8" />
        </div>
      ),
    },
    {
      title: "Pequeñas Obras y Reparaciones",
      description: "Realizamos demoliciones, apertura de huecos, construcción de muros y cualquier trabajo de albañilería necesario en tu reforma.",
      icon: (
        <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-brand-primary/10 text-brand-primary">
          <BuildingOfficeIcon className="w-8 h-8" />
        </div>
      ),
    },
  ];

  const benefits = [
    {
      title: "Base Sólida para tu Reforma",
      description: "Una buena albañilería es la base de cualquier reforma. Paredes rectas, suelos nivelados y muros sólidos garantizan el éxito del proyecto.",
      icon: (
        <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-brand-primary/10 text-brand-primary">
          <ShieldCheckIcon className="w-8 h-8" />
        </div>
      ),
    },
    {
      title: "Durabilidad y Resistencia",
      description: "Los trabajos de albañilería bien ejecutados duran décadas, protegiendo tu inversión y garantizando la estabilidad de tu hogar.",
      icon: (
        <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-brand-primary/10 text-brand-primary">
          <CubeIcon className="w-8 h-8" />
        </div>
      ),
    },
    {
      title: "Preparación para Acabados",
      description: "Superficies perfectamente preparadas facilitan la instalación de revestimientos, pintura y otros acabados, mejorando el resultado final.",
      icon: (
        <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-brand-primary/10 text-brand-primary">
          <PaintBrushIcon className="w-8 h-8" />
        </div>
      ),
    },
  ];

  return (
    <>
      <Hero
        title="Servicios de Albañilería en Barcelona y Vallès Occidental"
        titleLines={[
          "Servicios de Albañilería",
          "en Barcelona",
          "y Vallès Occidental"
        ]}
        subtitle="Realizamos revestimientos, solados y pequeñas obras con acabados de calidad. La base sólida de tu reforma, ejecutada con precisión y profesionalidad."
        primaryCTA={{
          text: "Solicitar Presupuesto",
          href: "/contacto"
        }}
        backgroundImage="/images/albanileria.webp"
        imageAlt="Trabajos de albañilería profesional en reforma de vivienda"
        overlayOpacity="stronger"
      />
      <FeatureGrid
        title="Calidad y Precisión en Cada Obra"
        subtitle="Nuestro compromiso se basa en la experiencia, materiales de primera calidad y una coordinación impecable con el resto de oficios."
        features={features}
        columns={4}
      />
      <AboutSection
        logoPath="/images/reformix-logo-vertical-white.png"
        text="En Reformix Barcelona, nuestro equipo de albañiles trabaja en Barcelona y el Vallès Occidental para realizar los trabajos de base de tu reforma. Desde revestimientos y solados hasta pequeñas obras y reparaciones, nos encargamos de crear la base sólida sobre la que se construirá el resto de tu proyecto. Coordinamos nuestro trabajo con fontaneros, electricistas y pintores para garantizar un resultado perfecto."
      />
      <FeatureGrid
        title={
          <>
            ¿Por qué es Importante
            <br />
            una Buena Albañilería?
          </>
        }
        subtitle="La albañilería es la base de cualquier reforma. Un trabajo mal ejecutado puede arruinar todo el proyecto. Estos son los problemas que evitamos."
        features={[
          {
            title: "Paredes Irregulares",
            description: "Paredes torcidas o con irregularidades dificultan la instalación de revestimientos y carpintería, arruinando el acabado final.",
            icon: (
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-brand-primary/10 text-brand-primary">
                <ExclamationTriangleIcon className="w-8 h-8" />
              </div>
            ),
          },
          {
            title: "Suelos Desnivelados",
            description: "Un suelo mal nivelado provoca problemas en la instalación de pavimentos y puede causar filtraciones y humedades.",
            icon: (
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-brand-primary/10 text-brand-primary">
                <HomeIcon className="w-8 h-8" />
              </div>
            ),
          },
          {
            title: "Revestimientos Mal Colocados",
            description: "Azulejos o revestimientos mal instalados se desprenden, tienen juntas irregulares y arruinan la estética del espacio.",
            icon: (
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-brand-primary/10 text-brand-primary">
                <Square3Stack3DIcon className="w-8 h-8" />
              </div>
            ),
          },
          {
            title: "Falta de Coordinación",
            description: "Sin coordinación con otros oficios, aparecen problemas como rozas mal hechas o instalaciones que no encajan correctamente.",
            icon: (
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-brand-primary/10 text-brand-primary">
                <WrenchScrewdriverIcon className="w-8 h-8" />
              </div>
            ),
          },
        ]}
        columns={4}
      />
      <FeatureGrid
        title="Servicios de Albañilería para tu Reforma"
        subtitle="Desde revestimientos hasta pequeñas obras, cubrimos todas las necesidades de albañilería en tu proyecto."
        features={solutions}
        columns={3}
        backgroundClassName="bg-gray-50"
        paddingClassName="py-20"
      />
      <FeatureGrid
        title={
          <>
            Invierte en Albañilería:
            <br />
            La Base de una Reforma Exitosa
          </>
        }
        subtitle="Una buena albañilería no es solo estética, es la garantía de durabilidad y calidad de toda tu reforma."
        features={benefits}
        columns={3}
      />
      <TestimonialsCarousel
        title="Clientes Satisfechos con Nuestros Trabajos de Albañilería"
        subtitle="La calidad de nuestros trabajos de albañilería es la base del éxito de nuestras reformas. Lee las experiencias de nuestros clientes en Barcelona y el Vallès Occidental."
        testimonials={[
          {
            text: "Nos arreglaron un muro del patio que tenía grietas por la humedad. Picar, enfoscar y repasar — todo en dos días. Quedó liso, firme y bien nivelado. Da gusto ver un trabajo tan limpio.",
            initials: "AP",
            name: "Albert P.",
            location: "Barcelona (Les Corts)"
          },
          {
            text: "El suelo del pasillo estaba desnivelado y se notaba al caminar. Nivelaron con mortero y colocaron el nuevo pavimento sin cortar esquinas. No se nota la transición entre estancias, un acabado de diez.",
            initials: "CM",
            name: "Cristina M.",
            location: "Sabadell"
          },
          {
            text: "Queríamos abrir un hueco entre la cocina y el comedor. Reformix lo hizo con refuerzo metálico y remate perfecto. Ahora entra más luz y la casa parece más amplia sin perder la separación visual.",
            initials: "TG",
            name: "Toni G.",
            location: "Terrassa"
          },
          {
            text: "Rehicieron los alicatados del baño y ajustaron las juntas al milímetro. Irina nos ayudó a elegir el formato del azulejo y los colores. El baño quedó moderno y muy fácil de limpiar.",
            initials: "LF",
            name: "Laura F.",
            location: "Sant Cugat del Vallès"
          },
          {
            text: "Tenía una terraza con baldosas levantadas. Cambiaron el solado, nivelaron pendientes y sellaron bien las juntas. Desde entonces, ni una filtración cuando llueve. Muy recomendables.",
            initials: "SR",
            name: "Sergio R.",
            location: "Cerdanyola del Vallès"
          },
          {
            text: "Reformix reformó la entrada del local con un nuevo revestimiento de piedra. El resultado es robusto, elegante y da una primera impresión mucho más profesional. Cumplieron plazos y dejaron todo recogido.",
            initials: "ME",
            name: "Marta E.",
            location: "Badalona"
          },
        ]}
      />
      {(() => {
        const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://www.reformix.barcelona';
        const faqs = [
          {
            question: "¿Qué trabajos de albañilería realizáis?",
            answer: "Realizamos revestimientos (alicatados), solados, demoliciones, construcción de muros, apertura de huecos, nivelación de suelos y cualquier trabajo de albañilería necesario en una reforma."
          },
          {
            question: "¿Cuánto se tarda en alicatar un baño?",
            answer: "Depende del tamaño, pero un baño estándar suele tardar entre 3 y 5 días, incluyendo la preparación de las superficies y el acabado de juntas."
          },
          {
            question: "¿Qué materiales utilizáis para los revestimientos?",
            answer: "Trabajamos con azulejos, gres porcelánico, cerámica y cualquier material que el cliente elija. Te asesoramos sobre las mejores opciones según el uso."
          },
          {
            question: "¿Incluís la preparación de las superficies?",
            answer: "Sí, nuestro servicio incluye la preparación completa: nivelación, enlucido y cualquier tratamiento necesario antes de colocar los revestimientos."
          },
          {
            question: "¿Coordináis con otros oficios?",
            answer: "Sí, coordinamos perfectamente con fontaneros, electricistas y pintores para que todo encaje correctamente y no haya problemas de ejecución."
          },
          {
            question: "¿Qué garantía ofrecéis?",
            answer: "Ofrecemos garantía por escrito sobre nuestros trabajos de albañilería. Si aparece algún defecto relacionado con nuestra ejecución, lo corregimos sin coste adicional."
          }
        ];
        const faqSchema = generateFAQSchema(faqs);
        const serviceSchema = generateServiceSchema({
          name: "Servicios de Albañilería en Barcelona y Vallès Occidental",
          description: "Especialistas en albañilería para reformas en Barcelona y Vallès Occidental. Revestimientos, solados y pequeñas obras con acabados de calidad.",
          provider: {
            '@type': 'HomeAndConstructionBusiness',
            name: 'Reformix Barcelona',
          },
          serviceType: 'Masonry Services',
          url: '/albanileria',
        });
        const breadcrumbSchema = generateBreadcrumbSchema([
          { name: 'Inicio', url: '/' },
          { name: 'Servicios Técnicos', url: '/servicios-tecnicos' },
          { name: 'Albañilería', url: '/albanileria' },
        ]);
        
        return (
          <>
            {faqSchema && <JsonLd data={faqSchema} />}
            {serviceSchema && <JsonLd data={serviceSchema} />}
            {breadcrumbSchema && <JsonLd data={breadcrumbSchema} />}
            <FAQTwoColumn titleLines={["Preguntas Frecuentes", "sobre Albañilería"]} items={faqs} />
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
        title="La Base Sólida de tu Reforma"
        description="Desde revestimientos hasta pequeñas obras, nuestro equipo de albañiles está listo para crear la base perfecta de tu proyecto. Solicita un presupuesto sin compromiso."
        buttonText="Solicitar Presupuesto"
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

