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
  ShieldCheckIcon,
  HomeIcon,
  CalendarDaysIcon,
  DocumentCheckIcon,
  LightBulbIcon,
  ChartBarIcon,
  WrenchScrewdriverIcon,
} from '@heroicons/react/24/solid';

export const metadata: Metadata = {
  title: "Reformas de Baños en Barcelona y Vallès Occidental",
  description: "Especialistas en reformas de baños en Barcelona y Vallès. Transforma tu baño en un oasis de relax. Presupuesto cerrado y garantía. ¡Infórmate!",
  ...generateStandardMetadata({
    title: "Reformas de Baños en Barcelona y Vallès Occidental",
    description: "Especialistas en reformas de baños en Barcelona y Vallès. Transforma tu baño en un oasis de relax. Presupuesto cerrado y garantía. ¡Infórmate!",
    url: "https://reformix.barcelona/reformas-banos",
    pagePath: "/reformas-banos",
    keywords: ["reforma baño Barcelona", "reforma baño Vallès", "diseño baño Barcelona", "reforma baño llave en mano"],
  }),
};

export default async function ReformasBanosPage() {
  const features = [
    {
      title: "Impermeabilización Garantizada",
      description: "Sistemas y sellados profesionales para evitar filtraciones y humedades. Tu tranquilidad es nuestra prioridad.",
      icon: (
        <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-brand-primary/10 text-brand-primary">
          <ShieldCheckIcon className="w-8 h-8" />
        </div>
      ),
    },
    {
      title: "Espacio y Almacenaje Optimizados",
      description: "Soluciones compactas y funcionales que aprovechan cada centímetro. Diseñamos muebles a medida para maximizar el espacio disponible.",
      icon: (
        <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-brand-primary/10 text-brand-primary">
          <HomeIcon className="w-8 h-8" />
        </div>
      ),
    },
    {
      title: "Plazos que se Cumplen",
      description: "Planificación realista y coordinación de oficios para entregas puntuales. Sabemos que no puedes estar mucho tiempo sin baño.",
      icon: (
        <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-brand-primary/10 text-brand-primary">
          <CalendarDaysIcon className="w-8 h-8" />
        </div>
      ),
    },
    {
      title: "Presupuesto Cerrado y Garantía",
      description: "Alcance definido, precio detallado y garantía por escrito. El precio que firmamos es el precio final, sin sorpresas.",
      icon: (
        <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-brand-primary/10 text-brand-primary">
          <DocumentCheckIcon className="w-8 h-8" />
        </div>
      ),
    },
  ];

  const solutions = [
    {
      title: "Cambio de Bañera por Ducha",
      subtitle: "Gana Espacio y Accesibilidad",
      description: "Ganamos espacio y accesibilidad. Platos de ducha antideslizantes, mamparas a medida y grifería eficiente. Una solución moderna y práctica.",
      icon: (
        <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-brand-primary/10 text-brand-primary">
          <HomeIcon className="w-8 h-8" />
        </div>
      ),
    },
    {
      title: "Renovación de Instalaciones",
      subtitle: "Seguridad y Eficiencia",
      description: "Sustituimos la fontanería y electricidad antiguas para asegurar un funcionamiento óptimo y evitar averías. Instalaciones modernas y seguras.",
      icon: (
        <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-brand-primary/10 text-brand-primary">
          <WrenchScrewdriverIcon className="w-8 h-8" />
        </div>
      ),
    },
    {
      title: "Diseño y Almacenaje Inteligente",
      subtitle: "Orden y Funcionalidad",
      description: "Muebles suspendidos, hornacinas y soluciones a medida para un baño ordenado y visualmente más amplio. Cada cosa en su lugar.",
      icon: (
        <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-brand-primary/10 text-brand-primary">
          <LightBulbIcon className="w-8 h-8" />
        </div>
      ),
    },
  ];

  const benefits = [
    {
      title: "Seguridad y Accesibilidad",
      description: "Eliminamos barreras arquitectónicas y usamos materiales antideslizantes para tu tranquilidad. Un baño seguro para toda la familia.",
      icon: (
        <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-brand-primary/10 text-brand-primary">
          <ShieldCheckIcon className="w-8 h-8" />
        </div>
      ),
    },
    {
      title: "Eficiencia y Ahorro",
      description: "Con grifería de bajo consumo e iluminación LED, reducimos tus facturas de agua y luz. Inversión inteligente a largo plazo.",
      icon: (
        <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-brand-primary/10 text-brand-primary">
          <LightBulbIcon className="w-8 h-8" />
        </div>
      ),
    },
    {
      title: "Revalorización de tu Vivienda",
      description: "Un baño moderno y funcional aumenta significativamente el valor de tu propiedad. Una inversión que se recupera.",
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
        title="Reformas de Baños en Barcelona y Vallès Occidental"
        titleLines={[
          "Reformas de Baños",
          "en Barcelona",
          "y Vallès Occidental"
        ]}
        subtitle="Convertimos tu baño en un espacio de bienestar: funcional, seguro y diseñado para tu relax. Presupuesto cerrado y garantía por escrito."
        primaryCTA={{
          text: "Pide Presupuesto Ahora",
          href: "/contacto"
        }}
        backgroundImage="/images/hero-bg.webp"
      />
      <FeatureGrid
        title="La Tranquilidad de un Baño Bien Ejecutado"
        subtitle="Compromisos claros para que disfrutes tu nuevo baño sin sorpresas: calidad de ejecución, plazos realistas y garantía por escrito."
        features={features}
        columns={4}
      />
      <AboutSection
        logoPath="/images/reformix-logo-vertical-white.png"
        text="Desde Sabadell, ejecutamos reformas de baños en Barcelona y el Vallès Occidental con equipo propio y coordinación integral. Nuestro método combina diseño funcional, elección de materiales apropiados para zonas húmedas y una planificación que minimiza molestias en casa. Cumplimos plazos y presupuesto, entregando acabados cuidados y garantía por escrito."
      />
      <FeatureGrid
        title="Una Reforma de Baño Centrada en la Funcionalidad y Seguridad"
        subtitle="Atacamos los problemas de raíz con soluciones prácticas que mejoran la distribución, actualizan las instalaciones y garantizan un uso seguro."
        features={solutions}
        columns={3}
      />
      <FeatureGrid
        title="Más que un Baño Nuevo: una Inversión en tu Hogar"
        subtitle="La reforma no solo mejora la estética, sino que revaloriza tu vivienda y aporta confort y seguridad a tu familia."
        features={benefits}
        columns={3}
      />
      <WhyChooseUs />
      <TestimonialsCarousel />
      <FAQTwoColumn
        items={[
          {
            question: "¿Cuánto tarda una reforma de baño?",
            answer: "Depende del alcance, pero de media, una reforma completa de baño suele durar entre 3 y 4 semanas. Te proporcionamos un calendario detallado desde el inicio."
          },
          {
            question: "¿Puedo seguir usando el baño durante la reforma?",
            answer: "Durante algunas fases es posible, pero durante la demolición y la instalación de nuevas instalaciones no será posible. Te informamos con antelación de las fases más molestas para que puedas planificarte."
          },
          {
            question: "¿Qué garantías ofrecéis en las reformas de baño?",
            answer: "Ofrecemos garantía completa por escrito que cubre tanto los materiales como la mano de obra, especialmente en las instalaciones de fontanería y la impermeabilización. Tu tranquilidad es nuestra prioridad."
          },
          {
            question: "¿Es necesario un permiso de obra para reformar un baño?",
            answer: "Para una reforma estándar que no modifica la estructura, suele ser suficiente con un 'enterado de obras' o 'asentado', un trámite sencillo que gestionamos nosotros."
          },
          {
            question: "¿Qué incluye el presupuesto de una reforma de baño?",
            answer: "Nuestro presupuesto cerrado desglosa todo: demolición, retirada de escombros, instalaciones de fontanería y electricidad, alicatados, suelos, mobiliario y montaje. Sin sorpresas."
          },
          {
            question: "¿Trabajáis con cualquier marca de sanitarios y grifería?",
            answer: "Trabajamos con una selección de proveedores de confianza, pero estamos abiertos a instalar los sanitarios o grifería que tú elijas y compres por tu cuenta, asegurándonos de que cumplen con la calidad necesaria."
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
        title="¿Listo para Transformar tu Baño?"
        description="Da el primer paso para conseguir el baño que siempre has querido. Contacta con nosotros, agenda una visita sin compromiso y recibe una propuesta detallada y un presupuesto cerrado para tu proyecto en Barcelona o el Vallès Occidental."
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

