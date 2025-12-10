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
  Square3Stack3DIcon,
  ShieldCheckIcon,
  UserGroupIcon,
  DocumentCheckIcon,
  HomeIcon,
  LightBulbIcon,
  SparklesIcon,
  BuildingOfficeIcon,
  AdjustmentsHorizontalIcon,
  ExclamationTriangleIcon,
  ChartBarIcon,
  WrenchScrewdriverIcon,
} from '@heroicons/react/24/solid';

export const metadata: Metadata = {
  title: "Pladur y Falsos Techos en Barcelona y Vallès",
  description: "Especialistas en pladur y falsos techos en Barcelona y Vallès. Creamos distribuciones y soluciones decorativas con acabados de alta calidad. ¡Pide presupuesto!",
  ...generateStandardMetadata({
    title: "Pladur y Falsos Techos en Barcelona y Vallès",
    description: "Especialistas en pladur y falsos techos en Barcelona y Vallès. Creamos distribuciones y soluciones decorativas con acabados de alta calidad. ¡Pide presupuesto!",
    url: "https://reformix.barcelona/pladur",
    pagePath: "/pladur",
    keywords: ["pladur Barcelona", "falsos techos Barcelona", "instalación pladur", "tabiques pladur", "techos desmontables"],
  }),
};

export default async function PladurPage() {
  const features = [
    {
      title: "Instaladores Cualificados",
      description: "Nuestro equipo está especializado en trabajos de pladur y domina todas las técnicas de montaje y acabado.",
      icon: (
        <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-brand-primary/10 text-brand-primary">
          <UserGroupIcon className="w-8 h-8" />
        </div>
      ),
    },
    {
      title: "Materiales de Primera Calidad",
      description: "Trabajamos con placas de yeso laminado de marcas líderes y perfilería metálica certificada para garantizar durabilidad.",
      icon: (
        <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-brand-primary/10 text-brand-primary">
          <ShieldCheckIcon className="w-8 h-8" />
        </div>
      ),
    },
    {
      title: "Coordinación Perfecta",
      description: "Sincronizamos nuestro trabajo con electricistas, fontaneros y pintores para un resultado impecable.",
      icon: (
        <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-brand-primary/10 text-brand-primary">
          <WrenchScrewdriverIcon className="w-8 h-8" />
        </div>
      ),
    },
    {
      title: "Acabados Profesionales",
      description: "Aplicamos masillas y juntas de calidad para conseguir superficies lisas y perfectas, listas para pintar.",
      icon: (
        <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-brand-primary/10 text-brand-primary">
          <SparklesIcon className="w-8 h-8" />
        </div>
      ),
    },
  ];

  const solutions = [
    {
      title: "Tabiques de Pladur",
      description: "Creamos nuevas distribuciones con tabiques de pladur, ideales para dividir espacios sin obras pesadas y con excelente aislamiento acústico.",
      icon: (
        <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-brand-primary/10 text-brand-primary">
          <BuildingOfficeIcon className="w-8 h-8" />
        </div>
      ),
    },
    {
      title: "Falsos Techos",
      description: "Instalamos falsos techos desmontables o continuos para ocultar instalaciones, mejorar la acústica y crear ambientes más confortables.",
      icon: (
        <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-brand-primary/10 text-brand-primary">
          <AdjustmentsHorizontalIcon className="w-8 h-8" />
        </div>
      ),
    },
    {
      title: "Revestimientos y Panelados",
      description: "Aplicamos pladur sobre paredes existentes para renovar espacios, mejorar el aislamiento y crear superficies perfectas.",
      icon: (
        <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-brand-primary/10 text-brand-primary">
          <Square3Stack3DIcon className="w-8 h-8" />
        </div>
      ),
    },
  ];

  const benefits = [
    {
      title: "Flexibilidad y Rapidez",
      description: "El pladur permite crear nuevas distribuciones en poco tiempo, sin obras pesadas ni molestias prolongadas.",
      icon: (
        <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-brand-primary/10 text-brand-primary">
          <LightBulbIcon className="w-8 h-8" />
        </div>
      ),
    },
    {
      title: "Aislamiento Acústico y Térmico",
      description: "Con lana de roca en el interior, los tabiques de pladur mejoran significativamente el confort acústico y térmico de tu hogar.",
      icon: (
        <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-brand-primary/10 text-brand-primary">
          <HomeIcon className="w-8 h-8" />
        </div>
      ),
    },
    {
      title: "Superficies Perfectas",
      description: "Las paredes y techos de pladur ofrecen acabados lisos e impecables, ideales para cualquier tipo de pintura o revestimiento.",
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
        title="Pladur y Falsos Techos en Barcelona y Vallès Occidental"
        titleLines={[
          "Pladur y Falsos Techos",
          "en Barcelona",
          "y Vallès Occidental"
        ]}
        subtitle="Creamos distribuciones y soluciones decorativas con acabados de alta calidad. Tabiques, falsos techos y revestimientos que transforman tu espacio sin obras pesadas."
        primaryCTA={{
          text: "Solicitar Presupuesto",
          href: "/contacto"
        }}
        backgroundImage="/images/pladur.webp"
      />
      <FeatureGrid
        title="Precisión y Calidad en Cada Instalación"
        subtitle="Nuestro compromiso se basa en la experiencia técnica, materiales de primera calidad y una coordinación impecable con el resto de oficios."
        features={features}
        columns={4}
      />
      <AboutSection
        logoPath="/images/reformix-logo-vertical-white.png"
        text="En Reformix Barcelona, nuestro equipo de especialistas en pladur trabaja en Barcelona y el Vallès Occidental para crear nuevas distribuciones, falsos techos y revestimientos con acabados profesionales. Entendemos que el pladur es una herramienta versátil que permite transformar espacios de forma rápida y eficiente, siempre coordinando nuestro trabajo con electricistas, fontaneros y pintores para garantizar un resultado perfecto."
      />
      <FeatureGrid
        title={
          <>
            ¿Por qué Elegir Pladur
            <br />
            para tu Reforma?
          </>
        }
        subtitle="El pladur ofrece ventajas únicas frente a la obra tradicional: rapidez, flexibilidad y acabados perfectos. Estos son los problemas que resuelve."
        features={[
          {
            title: "Obras Pesadas y Lentas",
            description: "Los tabiques tradicionales requieren ladrillos, cemento y tiempos de secado. El pladur se instala en días y sin grandes molestias.",
            icon: (
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-brand-primary/10 text-brand-primary">
                <ExclamationTriangleIcon className="w-8 h-8" />
              </div>
            ),
          },
          {
            title: "Paredes Irregulares",
            description: "Las paredes antiguas suelen tener irregularidades que dificultan el acabado. El pladur crea superficies perfectamente lisas.",
            icon: (
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-brand-primary/10 text-brand-primary">
                <BuildingOfficeIcon className="w-8 h-8" />
              </div>
            ),
          },
          {
            title: "Falta de Aislamiento",
            description: "Los tabiques antiguos no aíslan del ruido ni del frío. El pladur con lana de roca mejora significativamente el confort.",
            icon: (
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-brand-primary/10 text-brand-primary">
                <HomeIcon className="w-8 h-8" />
              </div>
            ),
          },
          {
            title: "Instalaciones Visibles",
            description: "Los falsos techos permiten ocultar cables, tuberías y conductos, mejorando la estética y facilitando el mantenimiento.",
            icon: (
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-brand-primary/10 text-brand-primary">
                <LightBulbIcon className="w-8 h-8" />
              </div>
            ),
          },
        ]}
        columns={4}
      />
      <FeatureGrid
        title="Soluciones de Pladur para tu Reforma"
        subtitle="Desde nuevas distribuciones hasta renovación de espacios, el pladur ofrece soluciones versátiles y eficientes."
        features={solutions}
        columns={3}
        backgroundClassName="bg-gray-50"
        paddingClassName="py-20"
      />
      <FeatureGrid
        title={
          <>
            Ventajas del Pladur:
            <br />
            Rapidez, Flexibilidad y Calidad
          </>
        }
        subtitle="El pladur no es solo una alternativa a la obra tradicional, es una solución superior para muchas necesidades de reforma."
        features={benefits}
        columns={3}
      />
      <TestimonialsCarousel
        title="Clientes Satisfechos con Nuestros Trabajos de Pladur"
        subtitle="La versatilidad del pladur nos permite crear soluciones a medida. Lee las experiencias de nuestros clientes en Barcelona y el Vallès Occidental."
        testimonials={[
          {
            text: "Queríamos separar el salón del despacho sin perder luz. Con Pladur hicieron una pared con hueco para cristal y el resultado quedó elegante y ligero. No imaginaba que un tabique pudiera cambiar tanto el ambiente.",
            initials: "CM",
            name: "Carla M.",
            location: "Barcelona (Eixample)"
          },
          {
            text: "El techo del baño estaba lleno de irregularidades. Lo bajaron con Pladur resistente a la humedad y colocaron focos empotrados. Quedó moderno, limpio y sin condensación. Se nota el cambio cada mañana.",
            initials: "DR",
            name: "David R.",
            location: "Sabadell"
          },
          {
            text: "En casa había un techo altísimo y mucho eco. Reformix instaló un falso techo acústico con aislante y ahora el sonido es mucho más agradable. Además, el calor se mantiene mejor en invierno.",
            initials: "NG",
            name: "Núria G.",
            location: "Cerdanyola del Vallès"
          },
          {
            text: "Queríamos esconder los cables y los tubos del aire. Irina propuso un diseño con bandejas de luz indirecta y registros ocultos. Estéticamente impecable y muy práctico cuando hay que revisar instalaciones.",
            initials: "JF",
            name: "Jordi F.",
            location: "Sant Cugat del Vallès"
          },
          {
            text: "Montaron una pared de Pladur para crear un vestidor en el dormitorio. Todo quedó alineado, sin grietas ni juntas visibles. En tres días teníamos una habitación nueva, lista para pintar.",
            initials: "MT",
            name: "Marina T.",
            location: "Terrassa"
          },
          {
            text: "Reformix reformó nuestro local comercial y el falso techo con paneles registrables quedó perfecto. Es funcional, permite mantenimiento fácil y mejora la iluminación general. Rápidos y organizados.",
            initials: "PL",
            name: "Pablo L.",
            location: "Badalona"
          },
        ]}
      />
      {(() => {
        const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://reformix.barcelona';
        const faqs = [
          {
            question: "¿Cuánto se tarda en instalar un tabique de pladur?",
            answer: "Depende del tamaño, pero un tabique estándar de una habitación se puede instalar en 1-2 días. El acabado y la pintura añaden 2-3 días más."
          },
          {
            question: "¿El pladur es resistente?",
            answer: "Sí, los tabiques de pladur bien instalados son muy resistentes. Para zonas húmedas utilizamos placas especiales resistentes a la humedad."
          },
          {
            question: "¿Se puede colgar peso en las paredes de pladur?",
            answer: "Sí, siempre que se usen los anclajes adecuados. Para objetos pesados, instalamos refuerzos en la estructura durante el montaje."
          },
          {
            question: "¿El pladur aísla del ruido?",
            answer: "Sí, especialmente cuando se rellena con lana de roca. El aislamiento acústico depende del grosor y del material aislante utilizado."
          },
          {
            question: "¿Qué diferencia hay entre un falso techo continuo y uno desmontable?",
            answer: "El continuo se enyesa y queda fijo, ideal para acabados perfectos. El desmontable permite acceso fácil a las instalaciones superiores."
          },
          {
            question: "¿El pladur necesita mantenimiento?",
            answer: "No, una vez instalado y pintado, el pladur no requiere mantenimiento especial. Es un material muy duradero si se instala correctamente."
          }
        ];
        const faqSchema = generateFAQSchema(faqs);
        const serviceSchema = generateServiceSchema({
          name: "Pladur y Falsos Techos en Barcelona y Vallès Occidental",
          description: "Especialistas en instalación de pladur y falsos techos en Barcelona y Vallès Occidental. Creamos distribuciones y soluciones decorativas con acabados de alta calidad.",
          provider: {
            '@type': 'HomeAndConstructionBusiness',
            name: 'Reformix Barcelona',
          },
          serviceType: 'Drywall Installation',
          url: '/pladur',
        });
        const breadcrumbSchema = generateBreadcrumbSchema([
          { name: 'Inicio', url: '/' },
          { name: 'Servicios Técnicos', url: '/servicios-tecnicos' },
          { name: 'Pladur y Falsos Techos', url: '/pladur' },
        ]);
        
        return (
          <>
            {faqSchema && <JsonLd data={faqSchema} />}
            {serviceSchema && <JsonLd data={serviceSchema} />}
            {breadcrumbSchema && <JsonLd data={breadcrumbSchema} />}
            <FAQTwoColumn titleLines={["Preguntas Frecuentes", "sobre Pladur y Falsos Techos"]} items={faqs} />
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
        title="Transforma tu Espacio con Pladur"
        description="Desde nuevas distribuciones hasta renovación de espacios, nuestro equipo de especialistas en pladur está listo para materializar tus ideas. Solicita un presupuesto sin compromiso."
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

