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
  RulerIcon,
  SparklesIcon,
  CalendarDaysIcon,
  DocumentCheckIcon,
  HomeIcon,
  ChartBarIcon,
  LightBulbIcon,
} from '@heroicons/react/24/solid';

export const metadata: Metadata = {
  title: "Reforma de Cocinas en Barcelona y Vallès Occidental",
  description: "Especialistas en reformas de cocinas en Barcelona y Vallès. Diseños funcionales, presupuesto cerrado y plazos garantizados. ¡Pide tu visita!",
  ...generateStandardMetadata({
    title: "Reforma de Cocinas en Barcelona y Vallès Occidental",
    description: "Especialistas en reformas de cocinas en Barcelona y Vallès. Diseños funcionales, presupuesto cerrado y plazos garantizados. ¡Pide tu visita!",
    url: "https://reformix.barcelona/reformas-cocinas",
    pagePath: "/reformas-cocinas",
    keywords: ["reforma cocina Barcelona", "reforma cocina Vallès", "diseño cocina Barcelona", "reforma cocina llave en mano"],
  }),
};

export default async function ReformasCocinasPage() {
  const features = [
    {
      title: "Diseño y Ergonomía",
      description: "Maximizamos cada centímetro. Creamos un 'triángulo de trabajo' eficiente para que cocinar sea un placer.",
      icon: (
        <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-brand-primary/10 text-brand-primary">
          <RulerIcon className="w-8 h-8" />
        </div>
      ),
    },
    {
      title: "Materiales de Calidad",
      description: "Solo trabajamos con proveedores de confianza para garantizar encimeras, muebles y herrajes duraderos.",
      icon: (
        <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-brand-primary/10 text-brand-primary">
          <SparklesIcon className="w-8 h-8" />
        </div>
      ),
    },
    {
      title: "Plazos Garantizados",
      description: "Sabemos que no puedes estar mucho tiempo sin cocina. Nos comprometemos por escrito con un calendario de obra.",
      icon: (
        <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-brand-primary/10 text-brand-primary">
          <CalendarDaysIcon className="w-8 h-8" />
        </div>
      ),
    },
    {
      title: "Presupuesto Sin Sorpresas",
      description: "Detallamos cada partida para que tengas control total. El precio que firmamos es el precio que pagas.",
      icon: (
        <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-brand-primary/10 text-brand-primary">
          <DocumentCheckIcon className="w-8 h-8" />
        </div>
      ),
    },
  ];

  const solutions = [
    {
      title: "Almacenamiento Inteligente",
      subtitle: "Maximizamos Cada Rincón",
      description: "Diseñamos soluciones de almacenaje a medida: muebles hasta el techo, extraíbles, esquineros y despensas integradas para que cada cosa tenga su lugar y tus encimeras estén siempre despejadas.",
      icon: (
        <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-brand-primary/10 text-brand-primary">
          <HomeIcon className="w-8 h-8" />
        </div>
      ),
    },
    {
      title: "Diseño de Iluminación",
      subtitle: "Ampliamos la Luz y el Espacio",
      description: "Combinamos una buena iluminación general con puntos de luz LED estratégicos bajo los muebles altos y en zonas de trabajo para crear un ambiente luminoso, funcional y visualmente más amplio.",
      icon: (
        <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-brand-primary/10 text-brand-primary">
          <LightBulbIcon className="w-8 h-8" />
        </div>
      ),
    },
    {
      title: "Distribución Funcional",
      subtitle: "Ergonomía y Flujo de Trabajo",
      description: "Rediseñamos la distribución para crear un flujo de trabajo lógico y cómodo, ya sea con una isla central, una península o una distribución en L o U. Cocinar volverá a ser un placer, no un estrés.",
      icon: (
        <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-brand-primary/10 text-brand-primary">
          <ChartBarIcon className="w-8 h-8" />
        </div>
      ),
    },
  ];

  const benefits = [
    {
      title: "Gana Tiempo y Comodidad",
      description: "Con una cocina bien organizada y funcional, tardarás menos en preparar la comida, encontrar lo que buscas y mantener el orden. Más tiempo para ti y los tuyos.",
      icon: (
        <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-brand-primary/10 text-brand-primary">
          <CalendarDaysIcon className="w-8 h-8" />
        </div>
      ),
    },
    {
      title: "Aumenta el Valor de tu Vivienda",
      description: "La cocina es uno de los espacios que más revalorizan una propiedad. Una reforma moderna y de calidad es una inversión inteligente a largo plazo.",
      icon: (
        <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-brand-primary/10 text-brand-primary">
          <ChartBarIcon className="w-8 h-8" />
        </div>
      ),
    },
    {
      title: "Ahorro Energético y Sostenibilidad",
      description: "Instalamos electrodomésticos de alta eficiencia energética e iluminación LED, lo que se traduce en un ahorro visible en tus facturas de luz y agua.",
      icon: (
        <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-brand-primary/10 text-brand-primary">
          <LightBulbIcon className="w-8 h-8" />
        </div>
      ),
    },
  ];

  return (
    <>
      <Hero
        title="Reformas de Cocinas en Barcelona y Vallès Occidental"
        titleLines={[
          "Reformas de Cocinas",
          "en Barcelona",
          "y Vallès Occidental"
        ]}
        subtitle="Transformamos tu cocina en un espacio funcional, luminoso y lleno de vida. Diseños a medida, presupuesto cerrado y la tranquilidad de trabajar con un equipo propio."
        primaryCTA={{
          text: "Solicitar Presupuesto",
          href: "/contacto"
        }}
        backgroundImage="/images/reforma-cocina-moderna.webp"
      />
      <FeatureGrid
        title="Tu Nueva Cocina: Diseño, Calidad y Compromiso"
        subtitle="Entendemos que la cocina es el corazón de tu hogar. Por eso, cada reforma que realizamos en Barcelona y el Vallès se basa en estos cuatro pilares."
        features={features}
        columns={4}
      />
      <AboutSection
        logoPath="/images/reformix-logo-vertical-white.png"
        text="Con más de 10 años de experiencia, en Reformix Barcelona nos dedicamos a crear cocinas a medida en Barcelona y el Vallès Occidental. Contamos con un equipo propio de instaladores, montadores y diseñadores para garantizar un control total sobre la calidad y los plazos de tu proyecto."
      />
      <FeatureGrid
        title="Soluciones para Crear la Cocina que Necesitas"
        subtitle="Analizamos tu espacio y tus rutinas para ofrecerte soluciones inteligentes que transforman por completo tu cocina."
        features={solutions}
        columns={3}
      />
      <FeatureGrid
        title="Más que una Cocina Nueva: una Inversión en tu Calidad de Vida"
        subtitle="Una reforma bien planificada no solo actualiza la estética. Impacta directamente en tu día a día, revaloriza tu vivienda y te devuelve el placer de disfrutar de tu hogar."
        features={benefits}
        columns={3}
      />
      <WhyChooseUs />
      <TestimonialsCarousel />
      <FAQTwoColumn
        items={[
          {
            question: "¿Qué tipo de encimera me recomendáis?",
            answer: "Depende de tu uso y presupuesto. El porcelánico es ultra resistente a rayas y calor. El cuarzo compacto ofrece una gama de colores enorme y es muy duradero. El granito es una opción clásica y robusta. Te asesoramos para encontrar la ideal para ti."
          },
          {
            question: "¿Puedo cambiar la distribución actual de la cocina (mover tomas de agua, enchufes)?",
            answer: "Sí, por supuesto. Es el momento ideal para hacerlo. Adaptamos las instalaciones de fontanería y electricidad a la nueva distribución para maximizar la funcionalidad y cumplir la normativa."
          },
          {
            question: "¿Cuánto tiempo no podré usar la cocina durante la obra?",
            answer: "Intentamos minimizarlo al máximo. El tiempo sin poder cocinar suele ser desde la fase de demolición hasta la instalación de la encimera y los electrodomésticos, que suele ser la última semana de trabajo. Te informamos del calendario exacto."
          },
          {
            question: "¿Trabajáis con cualquier marca de muebles o electrodomésticos?",
            answer: "Trabajamos con una selección de proveedores de confianza que nos ofrecen buena calidad y garantía, pero estamos abiertos a instalar los muebles o electrodomésticos que tú elijas y compres por tu cuenta."
          },
          {
            question: "¿Es necesario un permiso de obra para reformar la cocina?",
            answer: "Para una reforma estándar que no modifica la estructura (cambiar alicatados, muebles, instalaciones) suele ser suficiente con un 'enterado de obras' o 'asentado', un trámite sencillo que gestionamos nosotros."
          },
          {
            question: "¿Qué incluye exactamente el presupuesto?",
            answer: "Nuestro presupuesto cerrado desglosa todo: demolición, retirada de escombros, mano de obra de todos los oficios (albañil, fontanero, electricista, montador), materiales de construcción y mobiliario si lo contratas con nosotros."
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
        title="¿Hablamos de tu Nueva Cocina?"
        description="Da el primer paso para conseguir la cocina que siempre has querido. Contacta con nosotros, agenda una visita sin compromiso y recibe una propuesta detallada y un presupuesto cerrado para tu proyecto en Barcelona o el Vallès Occidental."
        buttonText="Pedir Presupuesto"
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

