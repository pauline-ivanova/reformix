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
  SparklesIcon,
} from '@heroicons/react/24/solid';

export const metadata: Metadata = {
  title: "Reformas por Estancia en Barcelona y Vallès Occidental",
  description: "Especialistas en reformas por estancia en Barcelona y Vallès Occidental. Reforma de cocina, baño, salón y más. Presupuesto cerrado y garantía. ¡Pide tu visita!",
  ...generateStandardMetadata({
    title: "Reformas por Estancia en Barcelona y Vallès Occidental",
    description: "Especialistas en reformas por estancia en Barcelona y Vallès Occidental. Reforma de cocina, baño, salón y más. Presupuesto cerrado y garantía. ¡Pide tu visita!",
    url: "https://reformix.barcelona/reformas-por-estancia",
    pagePath: "/reformas-por-estancia",
    keywords: ["reformas por estancia", "reforma cocina Barcelona", "reforma baño Barcelona", "reforma salón Barcelona", "reforma habitación Barcelona"],
  }),
};

export default async function ReformasPorEstanciaPage() {
  const features = [
    {
      title: "Diseño y Ergonomía",
      description: "Maximizamos cada centímetro. Creamos espacios funcionales y ergonómicos adaptados a tu estilo de vida y necesidades.",
      icon: (
        <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-brand-primary/10 text-brand-primary">
          <HomeIcon className="w-8 h-8" />
        </div>
      ),
    },
    {
      title: "Materiales de Calidad",
      description: "Solo trabajamos con proveedores de confianza para garantizar acabados duraderos y de calidad superior.",
      icon: (
        <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-brand-primary/10 text-brand-primary">
          <SparklesIcon className="w-8 h-8" />
        </div>
      ),
    },
    {
      title: "Plazos Garantizados",
      description: "Sabemos que no puedes estar mucho tiempo sin usar tu espacio. Nos comprometemos por escrito con un calendario de obra realista.",
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
          <ShieldCheckIcon className="w-8 h-8" />
        </div>
      ),
    },
  ];

  const services = [
    {
      title: "Reforma de Cocina",
      subtitle: "— El Corazón de tu Hogar",
      description: "Transformamos tu cocina en un espacio funcional, luminoso y lleno de vida. Diseños a medida, almacenamiento inteligente y distribución ergonómica para que cocinar sea un placer.",
      services: [
        "Diseño funcional y ergonómico",
        "Almacenamiento inteligente",
        "Instalación de electrodomésticos",
        "Iluminación estratégica"
      ],
      image: "/images/reforma-cocina-moderna.webp",
      imageAlt: "Reforma de cocina moderna en Barcelona",
      ctaText: "Saber más sobre reformas de cocina",
      ctaHref: "/reformas-cocinas"
    },
    {
      title: "Reforma de Baño",
      subtitle: "— Tu Oasis Personal",
      description: "Creamos espacios de relajación y funcionalidad. Desde baños modernos con ducha hasta baños de lujo, siempre pensando en tu comodidad y bienestar.",
      services: [
        "Instalaciones de fontanería renovadas",
        "Alicatados y revestimientos",
        "Mobiliario a medida",
        "Suelo radiante y calefacción"
      ],
      image: "/images/reforma-cocina-moderna.webp",
      imageAlt: "Reforma de baño en Barcelona",
      ctaText: "Descubre las reformas de baño",
      ctaHref: "/reformas-banos"
    },
    {
      title: "Reforma de Salón",
      subtitle: "— Donde se Vive la Vida",
      description: "El salón es el espacio donde se comparten los mejores momentos. Creamos ambientes acogedores, luminosos y adaptados a tu estilo de vida, ya sea con una distribución abierta o espacios más íntimos.",
      services: [
        "Redistribución de espacios",
        "Instalación de suelos y techos",
        "Iluminación y climatización",
        "Carpintería y acabados"
      ],
      image: "/images/reforma-integral-salon.webp",
      imageAlt: "Reforma de salón en Barcelona",
      ctaText: "Ver reformas de salón",
      ctaHref: "/reformas-salones"
    },
    {
      title: "Reforma de Habitaciones",
      subtitle: "— Tu Espacio de Descanso",
      description: "Transformamos las habitaciones en espacios de descanso y trabajo. Desde dormitorios principales hasta habitaciones infantiles o estudios, creamos ambientes adaptados a cada necesidad.",
      services: [
        "Instalación de suelos",
        "Carpintería a medida",
        "Iluminación y climatización",
        "Pintura y acabados"
      ],
      image: "/images/reforma-integral-salon.webp",
      imageAlt: "Reforma de habitación en Barcelona",
      ctaText: "Conoce las reformas de habitaciones",
      ctaHref: "/reformas-habitaciones"
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
        subtitle="Renovamos cada rincón de tu hogar. Transformamos cómo vives en tu hogar, ya sea con una reforma de cocina para ganar espacio o una reforma de baño para crear tu oasis personal."
        primaryCTA={{
          text: "Solicitar Presupuesto",
          href: "/contacto"
        }}
        backgroundImage="/images/reforma-cocina-moderna.webp"
      />
      <FeatureGrid
        title="Tu Nueva Estancia: Diseño, Calidad y Compromiso"
        subtitle="Entendemos que cada espacio de tu hogar tiene su propia función. Por eso, cada reforma que realizamos en Barcelona y el Vallès se basa en estos cuatro pilares."
        features={features}
        columns={4}
      />
      <AboutSection
        logoPath="/images/reformix-logo-vertical-white.png"
        text="Con más de 10 años de experiencia, en Reformix Barcelona nos dedicamos a crear espacios a medida en Barcelona y el Vallès Occidental. Contamos con un equipo propio de instaladores, montadores y diseñadores para garantizar un control total sobre la calidad y los plazos de tu proyecto."
      />
      <ServicesSection
        title="Soluciones para Crear la Estancia que Necesitas"
        subtitle="Analizamos tu espacio y tus rutinas para ofrecerte soluciones inteligentes que transforman por completo cada rincón de tu hogar."
        services={services}
      />
      <WhyChooseUs />
      <TestimonialsCarousel />
      <FAQTwoColumn
        items={[
          {
            question: "¿Cuánto tiempo no podré usar el espacio durante la reforma?",
            answer: "Intentamos minimizarlo al máximo. El tiempo sin poder usar el espacio suele ser desde la fase de demolición hasta la instalación de acabados, que suele ser la última semana de trabajo. Te informamos del calendario exacto."
          },
          {
            question: "¿Puedo vivir en casa durante una reforma de cocina o baño?",
            answer: "En reformas parciales como una cocina o un baño es posible, y siempre nos organizamos para causar las menores molestias. Te informamos con antelación de las fases más molestas para que puedas planificarte."
          },
          {
            question: "¿Qué garantías ofrecéis en las reformas por estancia?",
            answer: "Todos nuestros trabajos están garantizados por escrito y ofrecemos un servicio postventa para tu total tranquilidad. La garantía cubre tanto los materiales como la mano de obra."
          },
          {
            question: "¿Es necesario un permiso de obra para reformar una estancia?",
            answer: "Para una reforma estándar que no modifica la estructura (cambiar alicatados, muebles, instalaciones) suele ser suficiente con un 'enterado de obras' o 'asentado', un trámite sencillo que gestionamos nosotros."
          },
          {
            question: "¿Qué incluye exactamente el presupuesto?",
            answer: "Nuestro presupuesto cerrado desglosa todo: demolición, retirada de escombros, mano de obra de todos los oficios (albañil, fontanero, electricista, montador), materiales de construcción y mobiliario si lo contratas con nosotros."
          },
          {
            question: "¿Trabajáis con cualquier marca de muebles o electrodomésticos?",
            answer: "Trabajamos con una selección de proveedores de confianza que nos ofrecen buena calidad y garantía, pero estamos abiertos a instalar los muebles o electrodomésticos que tú elijas y compres por tu cuenta."
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
        title="¿Hablamos de tu Nueva Estancia?"
        description="Da el primer paso para conseguir el espacio que siempre has querido. Contacta con nosotros, agenda una visita sin compromiso y recibe una propuesta detallada y un presupuesto cerrado para tu proyecto en Barcelona o el Vallès Occidental."
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

