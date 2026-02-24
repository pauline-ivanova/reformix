import Hero from "@/app/components/blocks/Hero";
import FeatureGrid from "@/app/components/blocks/FeatureGrid";
import AboutSection from "@/app/components/blocks/AboutSection";
import ServicesSection from "@/app/components/blocks/ServicesSection";
import TestimonialsCarousel from "@/app/components/blocks/TestimonialsCarousel";
import FAQTwoColumn from "@/app/components/blocks/FAQTwoColumn";
import ServiceAreas from "@/app/components/blocks/ServiceAreas";
import CTA from "@/app/components/blocks/CTA";
import JsonLd from "@/app/components/common/JsonLd";
import { generateFAQSchema, generateServiceSchema, generateBreadcrumbSchema } from "@/app/components/common/JsonLd";
import { Metadata } from "next";
import { generateStandardMetadata } from "@/lib/metadata-utils";
import Image from "next/image";
import {
  UserGroupIcon,
  CalendarDaysIcon,
  ShieldCheckIcon,
  DocumentCheckIcon,
  ClockIcon,
  WrenchScrewdriverIcon,
  ExclamationTriangleIcon,
  CurrencyDollarIcon,
  UserIcon,
  HomeIcon,
  ArchiveBoxIcon,
  SparklesIcon,
  TvIcon,
  ComputerDesktopIcon,
  MoonIcon,
} from '@heroicons/react/24/solid';

export const metadata: Metadata = {
  title: "Montaje de Cocinas y Muebles en Barcelona | Reformix",
  description: "Servicio profesional de montaje de cocinas y muebles (Ikea, Leroy Merlin, Obramat) en Barcelona. Instalación rápida, segura y a medida.",
  ...generateStandardMetadata({
    title: "Montaje de Cocinas y Muebles en Barcelona | Reformix",
    description: "Servicio profesional de montaje de cocinas y muebles (Ikea, Leroy Merlin, Obramat) en Barcelona. Instalación rápida, segura y a medida.",
    url: "https://www.reformix.barcelona/montaje-muebles-cocinas",
    pagePath: "/montaje-muebles-cocinas",
    keywords: ["montaje de cocinas Barcelona", "montaje muebles Ikea Barcelona", "montador muebles Leroy Merlin", "instalación cocinas Barcelona", "montaje muebles Obramat"],
  }),
};

export default async function MontajeMueblesCocinasPage() {
  const features = [
    {
      title: "Montaje Multimarca",
      description: "Expertos en sistemas de Ikea, Leroy Merlin, Bauhaus, etc. Conocemos cada tornillo y herraje.",
      icon: (
        <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-brand-primary/10 text-brand-primary">
          <WrenchScrewdriverIcon className="w-8 h-8" />
        </div>
      ),
    },
    {
      title: "Ajuste Perfecto",
      description: "Nivelación milimétrica y anclajes seguros a pared para máxima estabilidad y seguridad.",
      icon: (
        <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-brand-primary/10 text-brand-primary">
          <ShieldCheckIcon className="w-8 h-8" />
        </div>
      ),
    },
    {
      title: "Rápido y Limpio",
      description: "Trabajamos de forma eficiente, respetando tu tiempo y dejando todo recogido al terminar.",
      icon: (
        <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-brand-primary/10 text-brand-primary">
          <ClockIcon className="w-8 h-8" />
        </div>
      ),
    },
    {
      title: "Servicio Integral",
      description: "Desde el desembalaje hasta la instalación final y retirada de cartones si lo necesitas.",
      icon: (
        <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-brand-primary/10 text-brand-primary">
          <UserGroupIcon className="w-8 h-8" />
        </div>
      ),
    },
  ];

  const solutionsFeatures = [
    {
      title: "Cocinas Integrales",
      description: "Montaje completo de muebles altos y bajos, encimeras, y cornisa. Especialistas en sistemas Ikea Metod.",
      icon: (
        <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-brand-primary/10 text-brand-primary">
          <HomeIcon className="w-8 h-8" />
        </div>
      ),
    },
    {
      title: "Armarios y Vestidores",
      description: "Montaje de grandes armarios (tipo PAX), puertas correderas e interiores de vestidor a medida.",
      icon: (
        <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-brand-primary/10 text-brand-primary">
          <ArchiveBoxIcon className="w-8 h-8" />
        </div>
      ),
    },
    {
      title: "Muebles de Baño",
      description: "Instalación de muebles bajo lavabo, columnas auxiliares, espejos y accesorios de baño.",
      icon: (
        <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-brand-primary/10 text-brand-primary">
          <SparklesIcon className="w-8 h-8" />
        </div>
      ),
    },
    {
      title: "Muebles de Salón",
      description: "Montaje de muebles de TV, estanterías modulares, aparadores y vitrinas.",
      icon: (
        <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-brand-primary/10 text-brand-primary">
          <TvIcon className="w-8 h-8" />
        </div>
      ),
    },
    {
      title: "Mobiliario de Oficina",
      description: "Mesas de escritorio, cajoneras, sillas y estanterías para tu despacho en casa o empresa.",
      icon: (
        <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-brand-primary/10 text-brand-primary">
          <ComputerDesktopIcon className="w-8 h-8" />
        </div>
      ),
    },
    {
      title: "Camas y Dormitorios",
      description: "Montaje de estructuras de cama, canapés, mesitas de noche y cómodas.",
      icon: (
        <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-brand-primary/10 text-brand-primary">
          <MoonIcon className="w-8 h-8" />
        </div>
      ),
    },
  ];

  return (
    <>
      <Hero
        title="Montaje Profesional de Cocinas y Muebles en Barcelona"
        titleLines={[
          "Montaje Profesional",
          "de Cocinas y Muebles",
          "en Barcelona"
        ]}
        subtitle="Especialistas en el montaje de mobiliario de Ikea, Leroy Merlin, Obramat y otras grandes superficies. Rapidez, precisión y acabados perfectos."
        primaryCTA={{
          text: "Pide tu Presupuesto de Montaje",
          href: "/contacto"
        }}
        backgroundImage="/images/montaje-muebles-cocinas.png"
        imageAlt="Montaje profesional de muebles de cocina y armarios"
        overlayOpacity="strong"
      />
      <FeatureGrid
        title="Tu Mobiliario, Bien Montado desde el Primer Día"
        subtitle="Evita complicaciones. Nuestro equipo cuenta con las herramientas y la experiencia para un montaje seguro y duradero."
        features={features}
        columns={4}
      />
      <AboutSection
        logoPath="/images/reformix-logo-vertical-white.png"
        text="No importa el mueble ni la marca, nosotros nos encargamos de que quede perfecto. Desde el montaje de una cocina completa de Ikea hasta el armario de tu dormitorio, ofrecemos un servicio profesional, rápido y limpio para que disfrutes de tu hogar sin estrés."
      />
      <FeatureGrid
        title="Soluciones de Montaje para Todo tu Hogar"
        subtitle="Cubrimos todas las estancias y tipos de mobiliario, garantizando un ajuste perfecto y una instalación segura."
        features={solutionsFeatures}
        columns={3}
      />
      <FeatureGrid
        title="¿Por qué arriesgarse con el montaje?"
        subtitle="Montar muebles parece fácil hasta que faltan piezas, las puertas no cuadran o las instrucciones son incomprensibles."
        features={[
          {
            title: "Tiempo Perdido",
            description: "Lo que a un profesional le lleva horas, a ti puede costarte todo el fin de semana.",
            icon: (
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-red-100 text-red-600">
                <ClockIcon className="w-8 h-8" />
              </div>
            ),
          },
          {
            title: "Falta de Herramientas",
            description: "Sin el taladro, nivel o destornillador adecuado, el resultado nunca será sólido.",
            icon: (
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-red-100 text-red-600">
                <WrenchScrewdriverIcon className="w-8 h-8" />
              </div>
            ),
          },
          {
            title: "Frustración y Estrés",
            description: "Instrucciones confusas y piezas pesadas pueden convertir la ilusión de estrenar muebles en una pesadilla.",
            icon: (
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-red-100 text-red-600">
                <ExclamationTriangleIcon className="w-8 h-8" />
              </div>
            ),
          },
          {
            title: "Riesgo de Rotura",
            description: "Un mal montaje puede dañar el mueble irreversiblemente o provocar accidentes futuros.",
            icon: (
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-red-100 text-red-600">
                <ShieldCheckIcon className="w-8 h-8" />
              </div>
            ),
          },
        ]}
        columns={4}
        backgroundClassName="bg-gray-50"
      />
      
      <FeatureGrid
        title="Así Funciona Nuestro Servicio de Montaje"
        subtitle="Proceso sencillo y transparente para que disfrutes de tus muebles cuanto antes."
        backgroundClassName="bg-white"
        paddingClassName="py-20"
        features={[
          {
            title: "Cuéntanos qué necesitas",
            description: "Envíanos tu lista de la compra, el plano de Ikea o simplemente dinos qué muebles quieres montar.",
            icon: (
              <div className="inline-flex items-center justify-center w-16 h-16 text-brand-primary bg-brand-primary/10 rounded-full font-bold text-2xl">
                1
              </div>
            ),
          },
          {
            title: "Recibe tu Presupuesto",
            description: "Te damos un precio cerrado por el servicio completo, incluyendo desplazamiento y anclajes.",
            icon: (
              <div className="inline-flex items-center justify-center w-16 h-16 text-brand-primary bg-brand-primary/10 rounded-full font-bold text-2xl">
                2
              </div>
            ),
          },
          {
            title: "Agendamos la Fecha",
            description: "Acordamos el día y la hora que mejor te venga para que nuestros montadores acudan a tu domicilio.",
            icon: (
              <div className="inline-flex items-center justify-center w-16 h-16 text-brand-primary bg-brand-primary/10 rounded-full font-bold text-2xl">
                3
              </div>
            ),
          },
          {
            title: "Montaje Profesional",
            description: "Llegamos con las herramientas, montamos todo con precisión, retiramos los cartones y lo dejamos listo.",
            icon: (
              <div className="inline-flex items-center justify-center w-16 h-16 text-brand-primary bg-brand-primary/10 rounded-full font-bold text-2xl">
                4
              </div>
            ),
          },
        ]}
        columns={4}
      />
      
      <TestimonialsCarousel />
      
      {(() => {
        const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://www.reformix.barcelona';
        const faqs = [
          {
            question: "¿Montáis cocinas de Ikea compradas por mi cuenta?",
            answer: "Sí, somos especialistas en el sistema Metod de Ikea, así como en cocinas de Leroy Merlin, Bricomart, etc."
          },
          {
            question: "¿Realizáis los cortes de la encimera?",
            answer: "Sí, realizamos los cortes necesarios para encastrar el fregadero y la placa de cocción en encimeras de madera o laminadas."
          },
          {
            question: "¿Conectáis los electrodomésticos?",
            answer: "Realizamos las conexiones básicas de agua (fregadero/grifo) y eléctricas (placa/horno) si las tomas están en el lugar correcto. No movemos puntos de luz ni tuberías en este servicio."
          },
          {
            question: "¿Os lleváis los embalajes?",
            answer: "Podemos incluir la retirada de cartones y plásticos al punto de reciclaje si nos lo solicitas en el presupuesto."
          },
          {
            question: "¿Cuánto cuesta montar una cocina?",
            answer: "El precio depende del número de muebles y la complejidad (isla, cortes, etc.). Envíanos tu diseño y te daremos un presupuesto exacto."
          },
          {
            question: "¿Ofrecéis garantía en el montaje?",
            answer: "Sí, por supuesto. Garantizamos la correcta instalación de todos los muebles. Si surge cualquier problema derivado del montaje, nos hacemos cargo y lo solucionamos."
          }
        ];
        const faqSchema = generateFAQSchema(faqs);
        const serviceSchema = generateServiceSchema({
          name: "Montaje de Cocinas y Muebles en Barcelona",
          description: "Servicio profesional de montaje de cocinas y muebles (Ikea, Leroy Merlin, Obramat) en Barcelona.",
          provider: {
            '@type': 'HomeAndConstructionBusiness',
            name: 'Reformix Barcelona',
          },
          serviceType: 'Furniture Assembly',
          url: '/montaje-muebles-cocinas',
        });
        const breadcrumbSchema = generateBreadcrumbSchema([
          { name: 'Inicio', url: '/' },
          { name: 'Montaje Muebles y Cocinas', url: '/montaje-muebles-cocinas' },
        ]);
        
        return (
          <>
            {faqSchema && <JsonLd data={faqSchema} />}
            {serviceSchema && <JsonLd data={serviceSchema} />}
            {breadcrumbSchema && <JsonLd data={breadcrumbSchema} />}
            <FAQTwoColumn titleLines={["Preguntas Frecuentes"]} items={faqs} />
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
        title="Disfruta de tus Muebles sin Esfuerzo"
        description="Olvídate de las instrucciones y las herramientas. Nosotros nos ocupamos de todo para que tú solo tengas que estrenar."
        buttonText="Pedir Presupuesto de Montaje"
        buttonHref="/contacto"
      />
    </>
  );
}
