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
  ArchiveBoxIcon,
  LightBulbIcon,
  ShieldCheckIcon,
  PaintBrushIcon,
  HomeIcon,
  SparklesIcon,
  ChartBarIcon,
} from '@heroicons/react/24/solid';

export const metadata: Metadata = {
  title: "Reformas de Recibidores en Barcelona con Estilo",
  description: "Expertos en reformas de recibidores en Barcelona y Vallès Occidental. Creamos una primera impresión impactante y optimizamos el almacenaje.",
  ...generateStandardMetadata({
    title: "Reformas de Recibidores en Barcelona con Estilo",
    description: "Expertos en reformas de recibidores en Barcelona y Vallès Occidental. Creamos una primera impresión impactante y optimizamos el almacenaje.",
    url: "https://reformix.barcelona/reformas-recibidores",
    pagePath: "/reformas-recibidores",
    keywords: ["reforma recibidor Barcelona", "reforma entrada Barcelona", "armarios pladur recibidor", "diseño recibidor"],
  }),
};

export default async function ReformasRecibidoresPage() {
  const features = [
    {
      title: "Almacenaje Inteligente",
      description: "Soluciones de obra y pladur para integrar zapateros, armarios y baldas sin perder espacio visual.",
      icon: (
        <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-brand-primary/10 text-brand-primary">
          <ArchiveBoxIcon className="w-8 h-8" />
        </div>
      ),
    },
    {
      title: "Iluminación Estratégica",
      description: "Creamos una bienvenida luminosa con puntos de luz indirecta, LEDs y lámparas decorativas.",
      icon: (
        <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-brand-primary/10 text-brand-primary">
          <LightBulbIcon className="w-8 h-8" />
        </div>
      ),
    },
    {
      title: "Suelos de Alto Tránsito",
      description: "Instalamos pavimentos de gran resistencia y fácil limpieza, preparados para el uso diario.",
      icon: (
        <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-brand-primary/10 text-brand-primary">
          <ShieldCheckIcon className="w-8 h-8" />
        </div>
      ),
    },
    {
      title: "Acabados que Impresionan",
      description: "Cuidamos cada detalle, desde la pintura hasta la instalación de molduras o papel pintado.",
      icon: (
        <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-brand-primary/10 text-brand-primary">
          <PaintBrushIcon className="w-8 h-8" />
        </div>
      ),
    },
  ];

  const solutions = [
    {
      title: "Armarios y Muebles de Pladur",
      description: "Creamos armarios gabaneros, zapateros y estanterías integradas en la pared con pladur. Soluciones a medida, duraderas y perfectamente integradas.",
      icon: (
        <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-brand-primary/10 text-brand-primary">
          <ArchiveBoxIcon className="w-8 h-8" />
        </div>
      ),
    },
    {
      title: "Ampliación Visual con Luz y Espejos",
      description: "Instalamos falsos techos con iluminación LED indirecta y colocamos espejos de gran formato para duplicar la luz y la sensación de espacio.",
      icon: (
        <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-brand-primary/10 text-brand-primary">
          <LightBulbIcon className="w-8 h-8" />
        </div>
      ),
    },
    {
      title: "Optimización de Puertas y Pasillos",
      description: "Sustituimos puertas abatibles por correderas para ganar espacio útil y eliminamos tabiques innecesarios para mejorar la fluidez.",
      icon: (
        <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-brand-primary/10 text-brand-primary">
          <HomeIcon className="w-8 h-8" />
        </div>
      ),
    },
  ];

  const benefits = [
    {
      title: "Orden y Funcionalidad Diaria",
      description: "Tener un sitio para cada cosa al entrar y salir de casa simplifica tu rutina y mantiene el resto del hogar ordenado.",
      icon: (
        <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-brand-primary/10 text-brand-primary">
          <HomeIcon className="w-8 h-8" />
        </div>
      ),
    },
    {
      title: "Una Primera Impresión Inmejorable",
      description: "Tu recibidor es la carta de presentación de tu hogar. Un espacio cuidado y con estilo habla bien de ti y de tu casa.",
      icon: (
        <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-brand-primary/10 text-brand-primary">
          <SparklesIcon className="w-8 h-8" />
        </div>
      ),
    },
    {
      title: "Sensación de Mayor Amplitud",
      description: "Aunque los metros sean los mismos, un buen diseño de luz, color y espejos hará que tu entrada parezca mucho más grande y acogedora.",
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
        title="Reformas de Recibidores y Zonas de Paso en Barcelona y Vallès Occidental"
        titleLines={[
          "Reformas de Recibidores",
          "y Zonas de Paso",
          "en Barcelona y Vallès"
        ]}
        subtitle="La primera impresión es la que cuenta. Transformamos tu recibidor en un espacio funcional, organizado y con un diseño que da la bienvenida a tu hogar."
        primaryCTA={{
          text: "Optimiza tu Recibidor",
          href: "/contacto"
        }}
        backgroundImage="/images/hero-bg.webp"
      />
      <FeatureGrid
        title="La Entrada a tu Hogar, en Manos Expertas"
        subtitle="Nos aseguramos de que cada elemento de tu recibidor sea práctico, duradero y estéticamente impecable."
        features={features}
        columns={4}
      />
      <AboutSection
        logoPath="/images/reformix-logo-vertical-white.png"
        text="En Reformix Barcelona somos especialistas en la reforma de recibidores y zonas de paso en Barcelona y el Vallès Occidental. Nuestro enfoque combina el diseño de interiores con soluciones constructivas como el pladur para crear armarios de obra y optimizar cada metro cuadrado, transformando la entrada de tu casa en un espacio tan práctico como acogedor."
      />
      <FeatureGrid
        title="¿Tu Recibidor es Oscuro, Pequeño y Siempre Desordenado?"
        subtitle="La entrada de casa es la primera que sufre la falta de espacio y de soluciones de almacenaje. Identificamos los problemas más comunes que impiden tener un recibidor funcional y acogedor."
        features={[
          {
            title: "Zapatos y Abrigos por el Medio",
            description: "La causa principal del desorden. Ausencia de un zapatero integrado o un armario gabanero donde dejar todo al llegar.",
            icon: (
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-brand-primary/10 text-brand-primary">
                <ArchiveBoxIcon className="w-8 h-8" />
              </div>
            ),
          },
          {
            title: "Falta de Luz y Amplitud",
            description: "Recibidores largos, estrechos y sin luz natural que crean una sensación de agobio y dan una pobre bienvenida.",
            icon: (
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-brand-primary/10 text-brand-primary">
                <LightBulbIcon className="w-8 h-8" />
              </div>
            ),
          },
          {
            title: "Sin Espacio para Dejar Nada",
            description: "Imposibilidad de tener una simple balda para dejar las llaves o el correo, lo que aumenta la sensación de caos.",
            icon: (
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-brand-primary/10 text-brand-primary">
                <HomeIcon className="w-8 h-8" />
              </div>
            ),
          },
          {
            title: "Distribución Poco Práctica",
            description: "Puertas que chocan, pasillos inútiles o un cuadro de luces a la vista que rompen la estética del espacio.",
            icon: (
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-brand-primary/10 text-brand-primary">
                <ShieldCheckIcon className="w-8 h-8" />
              </div>
            ),
          },
        ]}
        columns={4}
      />
      <FeatureGrid
        title="Soluciones de Obra para un Recibidor Funcional y Elegante"
        subtitle="Aplicamos soluciones constructivas y de diseño para transformar radicalmente la funcionalidad y estética de tu entrada."
        features={solutions}
        columns={3}
      />
      <FeatureGrid
        title="La Bienvenida a Casa que Siempre Has Querido"
        subtitle="Más que un espacio de paso, un recibidor bien reformado mejora la organización de toda la casa y eleva su categoría."
        features={benefits}
        columns={3}
      />
      <WhyChooseUs />
      <TestimonialsCarousel />
      <FAQTwoColumn
        items={[
          {
            question: "¿Son resistentes los muebles de pladur?",
            answer: "Sí, totalmente. Utilizamos placas de pladur de alta dureza y refuerzos interiores que los hacen tan sólidos como un mueble tradicional, con la ventaja de una integración perfecta."
          },
          {
            question: "¿Se puede hacer un armario en un pasillo muy estrecho?",
            answer: "Sí. Se pueden diseñar armarios con fondo reducido (unos 35-40 cm) utilizando puertas correderas para no obstaculizar el paso. Son soluciones muy eficaces."
          },
          {
            question: "¿Cuánto se tarda en reformar una entrada?",
            answer: "Depende de si se incluye pladur. Una reforma de pintura, suelo e iluminación puede llevar pocos días. Si se construye un armario de obra, puede ser de 1 a 2 semanas."
          },
          {
            question: "¿Cómo dar más luz a un recibidor sin ventanas?",
            answer: "La clave es un buen proyecto de iluminación (con LEDs en el techo o paredes), usar colores claros y colocar un espejo grande en un punto estratégico para que refleje la luz."
          },
          {
            question: "¿Qué suelo es el más recomendable para un recibidor?",
            answer: "Lo ideal son suelos muy resistentes al desgaste y fáciles de limpiar, como el gres porcelánico, los suelos vinílicos o los laminados de categoría AC5."
          },
          {
            question: "¿Qué hacéis con el cuadro de luces si está a la vista?",
            answer: "Es un problema muy común. La solución más elegante es integrarlo dentro de uno de los nuevos armarios de pladur o crear un cubreradiador a medida que también lo oculte."
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
        title="¿Quieres una entrada que te haga sentir orgulloso de tu hogar?"
        description="Contacta con nuestro equipo. Diseñaremos un espacio funcional y con estilo para tu recibidor y te daremos un presupuesto ajustado a tus necesidades."
        buttonText="Solicita tu Presupuesto"
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

