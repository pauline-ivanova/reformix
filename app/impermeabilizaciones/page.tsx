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
  ShieldCheckIcon,
  UserGroupIcon,
  DocumentCheckIcon,
  HomeIcon,
  SparklesIcon,
  BuildingOfficeIcon,
  ExclamationTriangleIcon,
  ChartBarIcon,
  WrenchScrewdriverIcon,
  CloudIcon,
  SunIcon,
  BeakerIcon,
} from '@heroicons/react/24/solid';

export const metadata: Metadata = {
  title: "Impermeabilizaciones en Barcelona y Vallès Occidental",
  description: "Aplicamos soluciones técnicas contra humedades en terrazas, cubiertas y baños en Barcelona y Vallès Occidental. Protección garantizada contra filtraciones.",
  ...generateStandardMetadata({
    title: "Impermeabilizaciones en Barcelona y Vallès Occidental",
    description: "Aplicamos soluciones técnicas contra humedades en terrazas, cubiertas y baños en Barcelona y Vallès Occidental. Protección garantizada contra filtraciones.",
    url: "https://www.reformix.barcelona/impermeabilizaciones",
    pagePath: "/impermeabilizaciones",
    keywords: ["impermeabilización Barcelona", "impermeabilización terrazas", "impermeabilización cubiertas", "protección humedades", "telas asfálticas"],
  }),
};

export default async function ImpermeabilizacionesPage() {
  const features = [
    {
      title: "Especialistas en Impermeabilización",
      description: "Nuestro equipo está especializado en soluciones de impermeabilización, con experiencia en diferentes sistemas y materiales.",
      icon: (
        <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-brand-primary/10 text-brand-primary">
          <UserGroupIcon className="w-8 h-8" />
        </div>
      ),
    },
    {
      title: "Materiales de Primera Calidad",
      description: "Utilizamos telas asfálticas, membranas y sistemas de impermeabilización de marcas líderes con garantía de durabilidad.",
      icon: (
        <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-brand-primary/10 text-brand-primary">
          <ShieldCheckIcon className="w-8 h-8" />
        </div>
      ),
    },
    {
      title: "Diagnóstico Preciso",
      description: "Realizamos un análisis detallado para identificar el origen de las humedades y aplicar la solución más adecuada.",
      icon: (
        <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-brand-primary/10 text-brand-primary">
          <DocumentCheckIcon className="w-8 h-8" />
        </div>
      ),
    },
    {
      title: "Garantía por Escrito",
      description: "Ofrecemos garantía por escrito sobre nuestros trabajos de impermeabilización, asegurando la protección a largo plazo.",
      icon: (
        <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-brand-primary/10 text-brand-primary">
          <SparklesIcon className="w-8 h-8" />
        </div>
      ),
    },
  ];

  const solutions = [
    {
      title: "Impermeabilización de Terrazas",
      description: "Aplicamos sistemas de impermeabilización en terrazas y azoteas, con drenaje adecuado y protección contra filtraciones.",
      icon: (
        <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-brand-primary/10 text-brand-primary">
          <SunIcon className="w-8 h-8" />
        </div>
      ),
    },
    {
      title: "Impermeabilización de Cubiertas",
      description: "Protegemos cubiertas y tejados con telas asfálticas y membranas de alta calidad para evitar filtraciones y humedades.",
      icon: (
        <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-brand-primary/10 text-brand-primary">
          <BuildingOfficeIcon className="w-8 h-8" />
        </div>
      ),
    },
    {
      title: "Impermeabilización de Baños",
      description: "Aplicamos sistemas de impermeabilización en baños y zonas húmedas para proteger contra filtraciones y humedades.",
      icon: (
        <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-brand-primary/10 text-brand-primary">
          <BeakerIcon className="w-8 h-8" />
        </div>
      ),
    },
  ];

  const benefits = [
    {
      title: "Protección Total",
      description: "Una buena impermeabilización protege tu vivienda contra filtraciones, humedades y daños estructurales, garantizando la durabilidad de tu inversión.",
      icon: (
        <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-brand-primary/10 text-brand-primary">
          <ShieldCheckIcon className="w-8 h-8" />
        </div>
      ),
    },
    {
      title: "Ahorro a Largo Plazo",
      description: "Invertir en una buena impermeabilización evita costosas reparaciones futuras y protege el valor de tu vivienda.",
      icon: (
        <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-brand-primary/10 text-brand-primary">
          <ChartBarIcon className="w-8 h-8" />
        </div>
      ),
    },
    {
      title: "Tranquilidad y Confort",
      description: "Saber que tu vivienda está protegida contra filtraciones te da tranquilidad y evita problemas de humedades y moho.",
      icon: (
        <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-brand-primary/10 text-brand-primary">
          <HomeIcon className="w-8 h-8" />
        </div>
      ),
    },
  ];

  return (
    <>
      <Hero
        title="Impermeabilizaciones en Barcelona y Vallès Occidental"
        titleLines={[
          "Impermeabilizaciones",
          "en Barcelona",
          "y Vallès Occidental"
        ]}
        subtitle="Aplicamos soluciones técnicas contra humedades en terrazas, cubiertas y baños. Protección garantizada contra filtraciones con materiales de primera calidad."
        primaryCTA={{
          text: "Solicitar Presupuesto",
          href: "/contacto"
        }}
        backgroundImage="/images/impermeabilizaciones.webp"
        imageAlt="Trabajos de impermeabilización profesional en cubierta"
        overlayOpacity="stronger"
      />
      <FeatureGrid
        title="Protección Garantizada contra Filtraciones"
        subtitle="Nuestro compromiso se basa en la experiencia técnica, materiales de primera calidad y un diagnóstico preciso para aplicar la solución más adecuada."
        features={features}
        columns={4}
      />
      <AboutSection
        logoPath="/images/reformix-logo-vertical-white.png"
        text="En Reformix Barcelona, nuestro equipo de especialistas en impermeabilización trabaja en Barcelona y el Vallès Occidental para proteger tu vivienda contra filtraciones y humedades. Desde terrazas y cubiertas hasta baños y zonas húmedas, aplicamos sistemas de impermeabilización de alta calidad que garantizan la protección a largo plazo. Realizamos un diagnóstico preciso para identificar el origen de los problemas y aplicar la solución más adecuada."
      />
      <FeatureGrid
        title={
          <>
            ¿Problemas de Humedades
            <br />
            y Filtraciones?
          </>
        }
        subtitle="Las filtraciones y humedades pueden causar daños graves en tu vivienda. Estos son los problemas más comunes que resolvemos."
        features={[
          {
            title: "Filtraciones en Terrazas",
            description: "El agua se filtra a través de la terraza, causando humedades en el techo del piso inferior y dañando la estructura.",
            icon: (
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-brand-primary/10 text-brand-primary">
                <ExclamationTriangleIcon className="w-8 h-8" />
              </div>
            ),
          },
          {
            title: "Humedades en Cubiertas",
            description: "Las cubiertas y tejados sin impermeabilización adecuada permiten la entrada de agua, causando daños en la estructura y en el interior.",
            icon: (
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-brand-primary/10 text-brand-primary">
                <BuildingOfficeIcon className="w-8 h-8" />
              </div>
            ),
          },
          {
            title: "Filtraciones en Baños",
            description: "Sin una impermeabilización adecuada, el agua se filtra en baños y zonas húmedas, causando humedades en paredes y suelos.",
            icon: (
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-brand-primary/10 text-brand-primary">
                <BeakerIcon className="w-8 h-8" />
              </div>
            ),
          },
          {
            title: "Daños Estructurales",
            description: "Las filtraciones continuas pueden causar daños graves en la estructura, requiriendo reparaciones costosas y complejas.",
            icon: (
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-brand-primary/10 text-brand-primary">
                <CloudIcon className="w-8 h-8" />
              </div>
            ),
          },
        ]}
        columns={4}
      />
      <FeatureGrid
        title="Soluciones de Impermeabilización"
        subtitle="Desde terrazas hasta baños, aplicamos sistemas de impermeabilización adaptados a cada necesidad."
        features={solutions}
        columns={3}
        backgroundClassName="bg-gray-50"
        paddingClassName="py-20"
      />
      <FeatureGrid
        title={
          <>
            Invierte en Protección:
            <br />
            Impermeabilización de Calidad
          </>
        }
        subtitle="Una buena impermeabilización no es un gasto, es una inversión en la protección y durabilidad de tu vivienda."
        features={benefits}
        columns={3}
      />
      <TestimonialsCarousel
        title="Clientes Protegidos contra Filtraciones"
        subtitle="La tranquilidad de nuestros clientes es nuestra mejor garantía. Lee las experiencias de quienes ya han protegido su vivienda con nuestros sistemas de impermeabilización."
        testimonials={[
          {
            text: "Cada vez que llovía fuerte aparecía una mancha en el techo del comedor. Localizaron la filtración en la cubierta y la sellaron con membrana líquida. Han pasado meses y ni rastro de humedad.",
            initials: "SD",
            name: "Sergi D.",
            location: "Barcelona (Sants)"
          },
          {
            text: "El muro del patio siempre estaba mojado. Aplicaron una capa impermeable y drenaje en la base. Ahora el muro respira, no hay verdín y el olor a humedad desapareció por completo.",
            initials: "CV",
            name: "Clara V.",
            location: "Sabadell"
          },
          {
            text: "La terraza perdía agua al piso de abajo y estábamos desesperados. Reformix levantó el pavimento, impermeabilizó con lámina asfáltica y lo rehízo todo. Desde entonces, cero filtraciones y la terraza luce como nueva.",
            initials: "JL",
            name: "Jordi L.",
            location: "Terrassa"
          },
          {
            text: "Tenía humedad por capilaridad en una pared del salón. Irina vino a revisar, nos explicó el porqué y aplicaron una barrera antihumedad. En pocas semanas la pared se secó y la pintura ya no se despega.",
            initials: "ER",
            name: "Elena R.",
            location: "Badalona"
          },
          {
            text: "El baño tenía filtraciones en la ducha. Retiraron el plato, sellaron de nuevo con productos específicos y recolocaron todo sin romper más de lo necesario. Profesionalidad total.",
            initials: "MS",
            name: "Marc S.",
            location: "Sant Cugat del Vallès"
          },
          {
            text: "Reformix impermeabilizó la azotea de la comunidad. Trabajo rápido, limpio y sin molestias a los vecinos. Llovió a la semana siguiente y todo aguantó perfecto. Un alivio enorme.",
            initials: "RT",
            name: "Rosa T.",
            location: "Cerdanyola del Vallès"
          },
        ]}
      />
      {(() => {
        const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://www.reformix.barcelona';
        const faqs = [
          {
            question: "¿Qué sistemas de impermeabilización utilizáis?",
            answer: "Utilizamos telas asfálticas, membranas líquidas y sistemas de impermeabilización según el tipo de superficie y las necesidades específicas de cada caso."
          },
          {
            question: "¿Cuánto dura una impermeabilización?",
            answer: "Depende del sistema y los materiales utilizados, pero una buena impermeabilización puede durar entre 10 y 20 años o más con el mantenimiento adecuado."
          },
          {
            question: "¿Es necesario impermeabilizar una terraza nueva?",
            answer: "Sí, es fundamental impermeabilizar correctamente una terraza desde el inicio para evitar problemas futuros. Es una inversión que protege tu vivienda."
          },
          {
            question: "¿Se puede impermeabilizar sobre una impermeabilización antigua?",
            answer: "Depende del estado de la impermeabilización existente. En algunos casos es mejor retirarla y aplicar una nueva, en otros se puede aplicar sobre la existente."
          },
          {
            question: "¿Qué garantía ofrecéis?",
            answer: "Ofrecemos garantía por escrito sobre nuestros trabajos de impermeabilización. Si aparece alguna filtración relacionada con nuestra ejecución, la corregimos sin coste adicional."
          },
          {
            question: "¿Cuánto cuesta impermeabilizar una terraza?",
            answer: "El precio depende del tamaño, el estado actual y el sistema elegido. Tras una visita técnica, te entregamos un presupuesto detallado y cerrado."
          }
        ];
        const faqSchema = generateFAQSchema(faqs);
        const serviceSchema = generateServiceSchema({
          name: "Impermeabilizaciones en Barcelona y Vallès Occidental",
          description: "Aplicamos soluciones técnicas contra humedades en terrazas, cubiertas y baños en Barcelona y Vallès Occidental. Protección garantizada contra filtraciones.",
          provider: {
            '@type': 'HomeAndConstructionBusiness',
            name: 'Reformix Barcelona',
          },
          serviceType: 'Waterproofing Services',
          url: '/impermeabilizaciones',
        });
        const breadcrumbSchema = generateBreadcrumbSchema([
          { name: 'Inicio', url: '/' },
          { name: 'Servicios Técnicos', url: '/servicios-tecnicos' },
          { name: 'Impermeabilizaciones', url: '/impermeabilizaciones' },
        ]);
        
        return (
          <>
            {faqSchema && <JsonLd data={faqSchema} />}
            {serviceSchema && <JsonLd data={serviceSchema} />}
            {breadcrumbSchema && <JsonLd data={breadcrumbSchema} />}
            <FAQTwoColumn titleLines={["Preguntas Frecuentes", "sobre Impermeabilizaciones"]} items={faqs} />
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
        title="Protege tu Vivienda contra Filtraciones"
        description="Desde terrazas hasta baños, nuestro equipo de especialistas en impermeabilización está listo para proteger tu vivienda. Solicita un presupuesto sin compromiso."
        buttonText="Solicitar Presupuesto"
        buttonHref="/contacto"
        features={[
          "Asesoramiento inicial gratuito",
          "Visita y diagnóstico sin coste",
          "Presupuesto detallado y cerrado"
        ]}
      />
    </>
  );
}

