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
  WrenchScrewdriverIcon,
  SunIcon,
  DocumentCheckIcon,
  HomeIcon,
  ChartBarIcon,
  SunIcon as BeachIcon,
} from '@heroicons/react/24/solid';

export const metadata: Metadata = {
  title: "Reformas de Terrazas y Balcones en Barcelona",
  description: "Expertos en reformas de terrazas y balcones en Barcelona y Vallès Occidental. Creamos tu oasis urbano: impermeabilización, suelos y cerramientos.",
  ...generateStandardMetadata({
    title: "Reformas de Terrazas y Balcones en Barcelona",
    description: "Expertos en reformas de terrazas y balcones en Barcelona y Vallès Occidental. Creamos tu oasis urbano: impermeabilización, suelos y cerramientos.",
    url: "https://reformix.barcelona/reformas-terrazas-balcones",
    pagePath: "/reformas-terrazas-balcones",
    keywords: ["reforma terraza Barcelona", "reforma balcón Barcelona", "impermeabilización terraza", "cerramientos terraza"],
  }),
};

export default async function ReformasTerrazasBalconesPage() {
  const features = [
    {
      title: "Impermeabilización Profesional",
      description: "Sistemas de drenaje y telas asfálticas de alta calidad para evitar filtraciones y proteger la estructura.",
      icon: (
        <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-brand-primary/10 text-brand-primary">
          <ShieldCheckIcon className="w-8 h-8" />
        </div>
      ),
    },
    {
      title: "Pavimentos Antideslizantes",
      description: "Instalamos suelos de exterior resistentes, seguros y de fácil mantenimiento, aptos para cualquier clima.",
      icon: (
        <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-brand-primary/10 text-brand-primary">
          <WrenchScrewdriverIcon className="w-8 h-8" />
        </div>
      ),
    },
    {
      title: "Materiales de Exterior",
      description: "Seleccionamos solo materiales (madera, composite, cerámica) diseñados para resistir el sol, la lluvia y el desgaste.",
      icon: (
        <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-brand-primary/10 text-brand-primary">
          <SunIcon className="w-8 h-8" />
        </div>
      ),
    },
    {
      title: "Gestión de Permisos",
      description: "Si tu reforma requiere permisos de obra, nos encargamos de toda la gestión para tu tranquilidad.",
      icon: (
        <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-brand-primary/10 text-brand-primary">
          <DocumentCheckIcon className="w-8 h-8" />
        </div>
      ),
    },
  ];

  const solutions = [
    {
      title: "Impermeabilización y Cambio de Suelo",
      description: "Levantamos el pavimento antiguo, aplicamos un sistema de impermeabilización profesional y colocamos un nuevo suelo cerámico o de madera técnica.",
      icon: (
        <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-brand-primary/10 text-brand-primary">
          <ShieldCheckIcon className="w-8 h-8" />
        </div>
      ),
    },
    {
      title: "Cerramientos y Elementos de Privacidad",
      description: "Instalamos pérgolas, celosías o cerramientos de aluminio/PVC para que ganes privacidad y puedas usar tu terraza todo el año.",
      icon: (
        <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-brand-primary/10 text-brand-primary">
          <HomeIcon className="w-8 h-8" />
        </div>
      ),
    },
    {
      title: "Instalaciones y Equipamiento",
      description: "Añadimos puntos de luz, enchufes, tomas de agua y desagües para que puedas instalar barbacoas, iluminación ambiental o zonas de lavado.",
      icon: (
        <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-brand-primary/10 text-brand-primary">
          <WrenchScrewdriverIcon className="w-8 h-8" />
        </div>
      ),
    },
  ];

  const benefits = [
    {
      title: "Añade \"Metros\" a tu Casa",
      description: "Con un buen diseño, tu terraza se convierte en un comedor de verano, una zona de juegos o tu rincón privado de relax.",
      icon: (
        <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-brand-primary/10 text-brand-primary">
          <HomeIcon className="w-8 h-8" />
        </div>
      ),
    },
    {
      title: "Revaloriza tu Propiedad",
      description: "Los espacios exteriores bien acondicionados son uno de los elementos que más aumentan el valor de un piso en el mercado.",
      icon: (
        <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-brand-primary/10 text-brand-primary">
          <ChartBarIcon className="w-8 h-8" />
        </div>
      ),
    },
    {
      title: "Un Oasis Privado en la Ciudad",
      description: "Disfruta del aire libre sin salir de casa. Un lugar perfecto para desconectar, leer o compartir con amigos y familia.",
      icon: (
        <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-brand-primary/10 text-brand-primary">
          <BeachIcon className="w-8 h-8" />
        </div>
      ),
    },
  ];

  return (
    <>
      <Hero
        title="Reformas de Terrazas y Balcones en Barcelona y Vallès Occidental"
        titleLines={[
          "Reformas de Terrazas",
          "y Balcones en Barcelona",
          "y Vallès Occidental"
        ]}
        subtitle="Convierte tu espacio exterior en tu nuevo lugar favorito. Creamos soluciones duraderas y de diseño para que disfrutes de tu terraza o balcón todo el año."
        primaryCTA={{
          text: "Descubre su Potencial",
          href: "/contacto"
        }}
        backgroundImage="/images/hero-bg.webp"
      />
      <FeatureGrid
        title="La Tranquilidad de un Espacio Exterior Seguro y Duradero"
        subtitle="La exposición al clima exige un enfoque técnico impecable. Nuestra promesa es un trabajo bien hecho que perdure en el tiempo."
        features={features}
        columns={4}
      />
      <AboutSection
        logoPath="/images/reformix-logo-vertical-white.png"
        text="En Reformix Barcelona, con sede en Sabadell, abordamos la reforma de terrazas y balcones en Barcelona y el Vallès Occidental desde un punto de vista técnico y estético. Nuestro equipo propio se encarga de todo: desde asegurar una correcta impermeabilización hasta la elección de materiales que soporten las inclemencias del tiempo, garantizando un espacio exterior tan bonito como funcional."
      />
      <FeatureGrid
        title="¿Tu Terraza o Balcón Está Desaprovechado o Deteriorado?"
        subtitle="El paso del tiempo y la falta de mantenimiento pueden convertir un espacio con gran potencial en una zona inútil o incluso problemática. Estos son los signos de que tu terraza necesita una reforma."
        features={[
          {
            title: "Filtraciones y Humedades",
            description: "El problema más grave. Un suelo agrietado o una mala impermeabilización pueden causar daños estructurales a tu vivienda y a los vecinos.",
            icon: (
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-brand-primary/10 text-brand-primary">
                <ShieldCheckIcon className="w-8 h-8" />
              </div>
            ),
          },
          {
            title: "Suelo Levantado o Roto",
            description: "Baldosas sueltas, rotas o con juntas en mal estado que dan un aspecto descuidado y son peligrosas.",
            icon: (
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-brand-primary/10 text-brand-primary">
                <WrenchScrewdriverIcon className="w-8 h-8" />
              </div>
            ),
          },
          {
            title: "Falta de Privacidad",
            description: "Miradas indiscretas de vecinos que impiden que disfrutes de tu espacio exterior con comodidad.",
            icon: (
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-brand-primary/10 text-brand-primary">
                <HomeIcon className="w-8 h-8" />
              </div>
            ),
          },
          {
            title: "Un Espacio sin Uso Definido",
            description: "Una simple superficie vacía que no invita a ser utilizada, sin un propósito claro (zona de relax, comedor, etc.).",
            icon: (
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-brand-primary/10 text-brand-primary">
                <SunIcon className="w-8 h-8" />
              </div>
            ),
          },
        ]}
        columns={4}
      />
      <FeatureGrid
        title="Soluciones Técnicas y de Diseño para tu Terraza"
        subtitle="Atacamos los problemas de raíz y transformamos tu terraza en un espacio seguro, funcional y con mucho estilo."
        features={solutions}
        columns={3}
      />
      <FeatureGrid
        title="Gana un Nuevo Espacio para Disfrutar en tu Hogar"
        subtitle="Una terraza bien reformada no es solo una mejora estética, es añadir metros útiles y de calidad a tu vivienda."
        features={benefits}
        columns={3}
      />
      <WhyChooseUs />
      <TestimonialsCarousel />
      <FAQTwoColumn
        items={[
          {
            question: "¿Necesito permiso de la comunidad para reformar mi terraza?",
            answer: "Para cambios estéticos como el suelo, normalmente no. Para elementos que afecten a la fachada, como barandillas o cerramientos, sí es necesario y te ayudamos a gestionarlo."
          },
          {
            question: "¿Qué suelo es mejor para una terraza?",
            answer: "El gres porcelánico antideslizante es el más duradero y fácil de mantener. La madera técnica (composite) aporta mucha calidez, pero requiere algo más de cuidado."
          },
          {
            question: "¿Cada cuánto tiempo hay que impermeabilizar una terraza?",
            answer: "Con una instalación profesional y materiales de calidad, un sistema de impermeabilización puede durar entre 15 y 20 años sin problemas."
          },
          {
            question: "¿Se puede poner césped artificial?",
            answer: "Sí, es una opción muy popular. Es clave que se instale sobre una superficie bien nivelada y con un buen sistema de drenaje para evitar problemas de humedad."
          },
          {
            question: "¿Qué es más importante: la estética o la funcionalidad?",
            answer: "Ambas son clave. Un buen diseño debe ser atractivo, pero sobre todo seguro y duradero. La base de todo es una correcta impermeabilización."
          },
          {
            question: "¿Puedo instalar una barbacoa o un punto de agua?",
            answer: "Sí, durante la reforma podemos dejar preparadas las tomas de agua, desagües y enchufes necesarios para instalar una pequeña cocina exterior o zona de barbacoa."
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
        title="¿Listo para convertir tu terraza en el mejor lugar de tu casa?"
        description="Contacta con nosotros. Evaluamos tu espacio y te damos un presupuesto detallado para la reforma de tu terraza o balcón en Barcelona y el Vallès Occidental."
        buttonText="Pide tu Presupuesto Ahora"
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

