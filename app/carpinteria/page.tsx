import Hero from "@/app/components/blocks/Hero";
import FeatureGrid from "@/app/components/blocks/FeatureGrid";
import AboutSection from "@/app/components/blocks/AboutSection";
import WhyChooseUs from "@/app/components/blocks/WhyChooseUs";
import TestimonialsCarousel from "@/app/components/blocks/TestimonialsCarousel";
import FAQTwoColumn from "@/app/components/blocks/FAQTwoColumn";
import ServiceAreas from "@/app/components/blocks/ServiceAreas";
import CTA from "@/app/components/blocks/CTA";
import { Metadata } from "next";
import { generateStandardMetadata } from "@/lib/metadata-utils";
import {
  CubeIcon,
  SparklesIcon,
  ArrowPathIcon,
  CheckCircleIcon,
  HomeIcon,
  ChartBarIcon,
  EyeIcon,
  ArchiveBoxIcon,
} from '@heroicons/react/24/solid';

export const metadata: Metadata = {
  title: "Servicios de Carpintería para Reformas en Barcelona",
  description: "Instalación de puertas de paso, armarios empotrados, rodapiés y panelados en Barcelona y Vallès Occidental. Acabados perfectos para tu reforma.",
  ...generateStandardMetadata({
    title: "Servicios de Carpintería para Reformas en Barcelona",
    description: "Instalación de puertas de paso, armarios empotrados, rodapiés y panelados en Barcelona y Vallès Occidental. Acabados perfectos para tu reforma.",
    url: "https://reformix.barcelona/carpinteria",
    pagePath: "/carpinteria",
    keywords: ["carpintería para reformas", "carpintería Barcelona", "armarios a medida", "puertas Barcelona"],
  }),
};

export default async function CarpinteriaPage() {
  const features = [
    {
      title: "Mediciones Exactas",
      description: "Planificamos cada milímetro para un ajuste perfecto y sin holguras.",
      icon: (
        <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-brand-primary/10 text-brand-primary">
          <CubeIcon className="w-8 h-8" />
        </div>
      ),
    },
    {
      title: "Materiales de Calidad",
      description: "Trabajamos con proveedores de confianza para garantizar un acabado duradero.",
      icon: (
        <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-brand-primary/10 text-brand-primary">
          <SparklesIcon className="w-8 h-8" />
        </div>
      ),
    },
    {
      title: "Coordinación de Obra",
      description: "Nos sincronizamos con albañiles y pintores para un flujo de trabajo eficiente.",
      icon: (
        <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-brand-primary/10 text-brand-primary">
          <ArrowPathIcon className="w-8 h-8" />
        </div>
      ),
    },
    {
      title: "Acabados Impecables",
      description: "Supervisamos cada junta, bisagra y remate para un resultado final de revista.",
      icon: (
        <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-brand-primary/10 text-brand-primary">
          <CheckCircleIcon className="w-8 h-8" />
        </div>
      ),
    },
  ];

  const solutions = [
    {
      title: "Instalación de Puertas de Paso",
      description: "Montamos puertas abatibles o correderas, asegurando un ajuste perfecto y un funcionamiento suave.",
      icon: (
        <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-brand-primary/10 text-brand-primary">
          <HomeIcon className="w-8 h-8" />
        </div>
      ),
    },
    {
      title: "Frentes de Armario y Vestidores",
      description: "Creamos frentes de armario a medida y diseñamos interiores de vestidores para maximizar el almacenaje.",
      icon: (
        <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-brand-primary/10 text-brand-primary">
          <ArchiveBoxIcon className="w-8 h-8" />
        </div>
      ),
    },
    {
      title: "Instalación de Parquet y Rodapiés",
      description: "Colocamos suelos laminados o de madera y rematamos con rodapiés de alta calidad para un acabado perfecto.",
      icon: (
        <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-brand-primary/10 text-brand-primary">
          <HomeIcon className="w-8 h-8" />
        </div>
      ),
    },
    {
      title: "Panelados Decorativos",
      description: "Revestimos paredes con paneles para crear cabeceros, murales de TV o dar un toque de calidez.",
      icon: (
        <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-brand-primary/10 text-brand-primary">
          <EyeIcon className="w-8 h-8" />
        </div>
      ),
    },
  ];

  const benefits = [
    {
      title: "Estética y Estilo Unificado",
      description: "Transforma por completo la atmósfera de tu hogar. La madera bien trabajada unifica el estilo, aporta una calidez inigualable y crea una sensación de acabado de revista.",
      icon: (
        <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-brand-primary/10 text-brand-primary">
          <EyeIcon className="w-8 h-8" />
        </div>
      ),
    },
    {
      title: "Optimización del Espacio",
      description: "Gana metros útiles donde antes no los había. Con soluciones inteligentes como armarios empotrados o vestidores, multiplicamos tu capacidad de almacenaje.",
      icon: (
        <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-brand-primary/10 text-brand-primary">
          <ArchiveBoxIcon className="w-8 h-8" />
        </div>
      ),
    },
    {
      title: "Revalorización de la Vivienda",
      description: "Es una inversión tangible que se nota en el mercado. Un parquet de calidad, puertas macizas y buenos acabados son detalles que elevan el precio de tu vivienda.",
      icon: (
        <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-brand-primary/10 text-brand-primary">
          <ChartBarIcon className="w-8 h-8" />
        </div>
      ),
    },
  ];

  return (
    <>
      <Hero
        title="Carpintería para Reformas en Barcelona y Vallès Occidental"
        titleLines={[
          "Carpintería para Reformas",
          "en Barcelona",
          "y Vallès Occidental"
        ]}
        subtitle="Los detalles marcan la diferencia. Creamos acabados de madera que aportan calidez, estilo y funcionalidad a tu hogar. Precisión, calidad y perfecta integración con el resto de la obra."
        primaryCTA={{
          text: "Solicitar Presupuesto",
          href: "/contacto"
        }}
        backgroundImage="/images/hero-bg.webp"
      />
      <FeatureGrid
        title="Precisión y Calidad en Cada Detalle"
        subtitle="Nuestro compromiso se basa en la exactitud de las mediciones, la calidad de los materiales y una coordinación impecable."
        features={features}
        columns={4}
      />
      <AboutSection
        logoPath="/images/reformix-logo-vertical-white.png"
        text="Nuestros carpinteros en Barcelona y el Vallès Occidental son artesanos con años de experiencia en la integración de soluciones de madera en proyectos de reforma. Entendemos que la carpintería no es un elemento aislado, sino el toque final que une y da coherencia a todo el espacio. Por eso, planificamos nuestro trabajo en perfecta sintonía con el resto de oficios, garantizando un resultado estético y funcional."
      />
      <FeatureGrid
        title="Carpintería para Reformas: el Detalle que Define el Éxito"
        subtitle="Puedes tener paredes perfectas y una distribución ideal, pero una puerta mal ajustada o un rodapié con huecos darán un aspecto descuidado a toda tu inversión. Estos son los errores que marcan la diferencia."
        features={[
          {
            title: "Puertas que Rozan o no Cierran",
            description: "Un error de milímetros que se convierte en una molestia diaria, restando confort y sensación de calidad a tu nuevo hogar.",
            icon: (
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-brand-primary/10 text-brand-primary">
                <HomeIcon className="w-8 h-8" />
              </div>
            ),
          },
          {
            title: "Rodapiés y Juntas con Huecos",
            description: "Separaciones y ángulos mal rematados que atraen la mirada y delatan un trabajo de baja calidad, devaluando el resultado de toda la reforma.",
            icon: (
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-brand-primary/10 text-brand-primary">
                <CubeIcon className="w-8 h-8" />
              </div>
            ),
          },
          {
            title: "Armarios Poco Prácticos",
            description: "Soluciones de almacenaje que no optimizan el espacio, con distribuciones interiores que no se adaptan a tu ropa y tus hábitos.",
            icon: (
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-brand-primary/10 text-brand-primary">
                <ArchiveBoxIcon className="w-8 h-8" />
              </div>
            ),
          },
          {
            title: "Mala Coordinación con Pintura",
            description: "Tener que hacer retoques de pintura o, peor aún, repintar paredes porque la instalación se hizo en el momento equivocado, generando retrasos y costes extra.",
            icon: (
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-brand-primary/10 text-brand-primary">
                <SparklesIcon className="w-8 h-8" />
              </div>
            ),
          },
        ]}
        columns={4}
      />
      <FeatureGrid
        title="Soluciones de Carpintería para tu Reforma"
        subtitle="Integramos la madera en tu proyecto para crear espacios más bellos, organizados y funcionales."
        features={solutions}
        columns={4}
      />
      <FeatureGrid
        title="Invierte en Carpintería: Aumenta el Valor y Confort de tu Hogar"
        subtitle="Una carpintería de calidad no es un gasto, es una inversión en el futuro de tu vivienda. Transforma la estética, multiplica la funcionalidad y aumenta su valor de mercado de forma tangible."
        features={benefits}
        columns={3}
      />
      <WhyChooseUs />
      <TestimonialsCarousel />
      <FAQTwoColumn
        items={[
          {
            question: "¿Qué tipo de trabajos de carpintería realizáis?",
            answer: "Nos especializamos en carpintería integrada en la obra: fabricación e instalación de puertas de paso, armarios empotrados, vestidores, estanterías de Pladur o madera, y revestimientos decorativos. No fabricamos muebles exentos como mesas o sillas."
          },
          {
            question: "¿Instaláis puertas que he comprado yo?",
            answer: "Sí, podemos instalar materiales que tú proporciones, aunque siempre recomendamos opciones de proveedores de confianza para garantizar la calidad."
          },
          {
            question: "¿Cuánto se tarda en cambiar las puertas de un piso?",
            answer: "Normalmente, entre 2 y 4 días, dependiendo del número de puertas y si hay que modificar los marcos."
          },
          {
            question: "¿Qué es mejor, parquet laminado o de madera?",
            answer: "Depende de tu presupuesto y estilo de vida. El laminado es más resistente y económico, mientras que la madera natural aporta una calidez inigualable. Te asesoramos."
          },
          {
            question: "¿Retiráis las puertas y marcos antiguos?",
            answer: "Sí, nuestro servicio incluye el desmontaje y la retirada a un punto limpio autorizado de todos los elementos antiguos."
          },
          {
            question: "¿La instalación de parquet incluye el rodapié?",
            answer: "Sí, siempre. Un buen suelo no está completo sin un rodapié bien instalado. El presupuesto siempre incluye ambas partidas."
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
        title="Da el Toque Final a tu Reforma con Carpintería de Calidad"
        description="Desde puertas y armarios hasta soluciones a medida, nuestro equipo de carpinteros en Barcelona y el Vallès está listo para materializar tus ideas. Solicita un presupuesto sin compromiso y asegura acabados perfectos."
        buttonText="Solicitar Presupuesto Ahora"
        buttonHref="/contacto"
        features={[
          "Visita y asesoramiento inicial gratis",
          "Presupuesto 100% cerrado",
          "Garantía por escrito"
        ]}
      />
    </>
  );
}

