import Hero from "@/app/components/blocks/Hero";
import FeatureGrid from "@/app/components/blocks/FeatureGrid";
import AboutSection from "@/app/components/blocks/AboutSection";
import WhyChooseUs from "@/app/components/blocks/WhyChooseUs";
import TestimonialsCarousel from "@/app/components/blocks/TestimonialsCarousel";
import FAQTwoColumn from "@/app/components/blocks/FAQTwoColumn";
import ServiceAreas from "@/app/components/blocks/ServiceAreas";
import CTA from "@/app/components/blocks/CTA";
import JsonLd from "@/app/components/common/JsonLd";
import { generateFAQSchema, generateServiceSchema, generateBreadcrumbSchema } from "@/app/components/common/JsonLd";
import { Metadata } from "next";
import { generateStandardMetadata } from "@/lib/metadata-utils";
import Image from "next/image";
import { ComponentType } from "react";
import {
  ShieldCheckIcon,
  HomeIcon,
  CalendarDaysIcon,
  DocumentCheckIcon,
  LightBulbIcon,
  ChartBarIcon,
  WrenchScrewdriverIcon,
  ArchiveBoxIcon,
  BoltIcon,
  ExclamationTriangleIcon,
  SparklesIcon,
  PencilSquareIcon,
  CubeIcon,
  ExclamationCircleIcon,
  RectangleGroupIcon,
  UserGroupIcon,
  ArrowTrendingUpIcon,
} from '@heroicons/react/24/solid';
import { FaShower } from 'react-icons/fa';

export const metadata: Metadata = {
  title: "Reformas de Baños en Barcelona y Vallès Occidental",
  description: "Especialistas en reformas de baños en Barcelona y Vallès. Transforma tu baño en un oasis de relax. Presupuesto cerrado y garantía. ¡Infórmate!",
  ...generateStandardMetadata({
    title: "Reformas de Baños en Barcelona y Vallès Occidental",
    description: "Especialistas en reformas de baños en Barcelona y Vallès. Transforma tu baño en un oasis de relax. Presupuesto cerrado y garantía. ¡Infórmate!",
    url: "https://www.reformix.barcelona/reformas-banos",
    pagePath: "/reformas-banos",
    keywords: ["reforma baño Barcelona", "reforma baño Vallès", "diseño baño Barcelona", "reforma baño llave en mano"],
  }),
};

export default async function ReformasBanosPage() {
  const icon = (IconComponent: ComponentType<{ className?: string }>) => (
    <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-brand-primary/10 text-brand-primary">
      <IconComponent className="w-8 h-8" />
    </div>
  );


  const features = [
    {
      title: "Impermeabilización Garantizada",
      description: "Sistemas y sellados profesionales para evitar filtraciones y humedades. Tu tranquilidad es nuestra prioridad.",
      icon: icon(ShieldCheckIcon),
    },
    {
      title: "Espacio y Almacenaje Optimizados",
      description: "Soluciones compactas y funcionales que aprovechan cada centímetro. Diseñamos muebles a medida para maximizar el espacio disponible.",
      icon: icon(ArchiveBoxIcon),
    },
    {
      title: "Plazos que se Cumplen",
      description: "Planificación realista y coordinación de oficios para entregas puntuales. Sabemos que no puedes estar mucho tiempo sin baño.",
      icon: icon(CalendarDaysIcon),
    },
    {
      title: "Presupuesto Cerrado y Garantía",
      description: "Alcance definido, precio detallado y garantía por escrito. El precio que firmamos es el precio final, sin sorpresas.",
      icon: icon(DocumentCheckIcon),
    },
  ];

  const painPoints = [
    {
      title: "Humedades y Fugas",
      description: "Juntas deterioradas e impermeabilización deficiente provocan filtraciones y moho.",
      icon: icon(ExclamationTriangleIcon),
    },
    {
      title: "Poco Almacenaje",
      description: "Falta de muebles funcionales y organización interna.",
      icon: icon(ArchiveBoxIcon),
    },
    {
      title: "Instalaciones Antiguas",
      description: "Fontanería y electricidad obsoletas, con riesgos y bajo confort.",
      icon: icon(WrenchScrewdriverIcon),
    },
    {
      title: "Seguridad y Accesibilidad",
      description: "Bañeras altas, suelos resbaladizos y ausencia de barras o mamparas adecuadas.",
      icon: icon(ShieldCheckIcon),
    },
  ];

  const solutions = [
    {
      title: "Cambio de Bañera por Ducha",
      description: "Ganamos espacio y accesibilidad. Platos de ducha antideslizantes, mamparas a medida y grifería eficiente.",
      icon: icon(FaShower),
    },
    {
      title: "Renovación de Instalaciones",
      description: "Sustituimos la fontanería y electricidad antiguas para asegurar un funcionamiento óptimo y evitar averías.",
      icon: icon(WrenchScrewdriverIcon),
    },
    {
      title: "Diseño y Almacenaje Inteligente",
      description: "Muebles suspendidos, hornacinas y soluciones a medida para un baño ordenado y visualmente más amplio.",
      icon: icon(ArchiveBoxIcon),
    },
  ];

  const benefits = [
    {
      title: "Seguridad y Accesibilidad",
      description: "Eliminamos barreras arquitectónicas y usamos materiales antideslizantes para tu tranquilidad.",
      icon: icon(ShieldCheckIcon),
    },
    {
      title: "Eficiencia y Ahorro",
      description: "Con grifería de bajo consumo e iluminación LED, reducimos tus facturas de agua y luz.",
      icon: icon(BoltIcon),
    },
    {
      title: "Revalorización del Inmueble",
      description: "Un baño moderno y funcional es una de las mejoras que más aumenta el valor de una propiedad.",
      icon: icon(ArrowTrendingUpIcon),
    },
  ];

  const testimonials = [
    { text: "La reforma fue rápida y sin molestias. Irina nos aconsejó en los acabados y el resultado es elegante y práctico.", initials: "SF", name: "Sergio F.", location: "Barcelona (Eixample)" },
    { text: "El nuevo baño tiene una ducha amplia y cómoda, justo lo que necesitábamos. La diferencia en el día a día es enorme.", initials: "ML", name: "Marta L.", location: "Terrassa" },
    { text: "Con Reformix conseguimos transformar un espacio pequeño en un baño funcional y bonito. Todo el proceso fue muy sencillo.", initials: "AP", name: "Andrés P.", location: "Sant Cugat del Vallès" },
    { text: "Nos preocupaba el polvo y el desorden, pero trabajaron con mucha limpieza. El baño quedó perfecto y listo a tiempo.", initials: "CM", name: "Clara M.", location: "Barcelona (Gràcia)" },
    { text: "Lo que más nos gusta es la sensación de amplitud. El baño ahora transmite calma y está lleno de luz natural.", initials: "DR", name: "David R.", location: "Cerdanyola del Vallès" },
    { text: "Nuestro baño era muy antiguo y oscuro. Ahora es moderno y luminoso, con un diseño que aprovecha cada rincón.", initials: "TV", name: "Teresa V.", location: "Sabadell" },
  ];

  const processSteps = [
    {
      title: "Paso 1. Contacto y Visita Técnica",
      description: "Nos llamas, agendamos una visita a tu casa para medir y entender tus necesidades.",
      icon: (
        <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-brand-primary/10 text-brand-primary">
          <Image src="/images/1.webp" alt="Paso 1" width={64} height={64} className="w-16 h-16 object-contain" />
        </div>
      ),
    },
    {
      title: "Paso 2. Diseño y Presupuesto Detallado",
      description: "Te presentamos una propuesta de diseño junto a un presupuesto cerrado, con todas las partidas especificadas.",
      icon: (
        <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-brand-primary/10 text-brand-primary">
          <Image src="/images/2.webp" alt="Paso 2" width={64} height={64} className="w-16 h-16 object-contain" />
        </div>
      ),
    },
    {
      title: "Paso 3. Elección de Materiales",
      description: "Te asesoramos en la selección de azulejos, sanitarios, grifería y muebles, buscando el equilibrio entre estética y durabilidad.",
      icon: (
        <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-brand-primary/10 text-brand-primary">
          <Image src="/images/3.webp" alt="Paso 3" width={64} height={64} className="w-16 h-16 object-contain" />
        </div>
      ),
    },
    {
      title: "Paso 4. Planificación y Coordinación",
      description: "Definimos el calendario de obra y coordinamos a nuestro equipo propio de fontaneros, electricistas y albañiles.",
      icon: (
        <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-brand-primary/10 text-brand-primary">
          <Image src="/images/4.webp" alt="Paso 4" width={64} height={64} className="w-16 h-16 object-contain" />
        </div>
      ),
    },
    {
      title: "Paso 5. Ejecución y Supervisión",
      description: "Llevamos a cabo la reforma, protegiendo el resto de tu vivienda y con supervisión diaria para garantizar la calidad.",
      icon: (
        <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-brand-primary/10 text-brand-primary">
          <Image src="/images/5.webp" alt="Paso 5" width={64} height={64} className="w-16 h-16 object-contain" />
        </div>
      ),
    },
    {
      title: "Paso 6. Entrega y Garantía",
      description: "Realizamos la limpieza final, te entregamos tu nuevo baño listo para usar y activamos la garantía por escrito.",
      icon: (
        <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-brand-primary/10 text-brand-primary">
          <Image src="/images/6.webp" alt="Paso 6" width={64} height={64} className="w-16 h-16 object-contain" />
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
        backgroundImage="/images/reformas-de-banos-en-barcelona.webp"
      />
      <FeatureGrid
        title={
          <>
            La Tranquilidad de un Baño
            <br />
            Bien Ejecutado
          </>
        }
        subtitle="Compromisos claros para que disfrutes tu nuevo baño sin sorpresas: calidad de ejecución, plazos realistas y garantía por escrito."
        features={features}
        columns={4}
      />
      <AboutSection
        logoPath="/images/reformix-logo-vertical-white.png"
        text="Desde Sabadell, ejecutamos reformas de baños en Barcelona y el Vallès Occidental con equipo propio y coordinación integral. Nuestro método combina diseño funcional, elección de materiales apropiados para zonas húmedas y una planificación que minimiza molestias en casa. Cumplimos plazos y presupuesto, entregando acabados cuidados y garantía por escrito."
      />
      <FeatureGrid
        title={
          <>
            ¿Tu Baño se Siente Pequeño,
            <br />
            Oscuro o Poco Práctico?
          </>
        }
        subtitle="Con el tiempo aparecen humedades, pérdidas de espacio y elementos inseguros. Identificamos las causas y te proponemos una reforma que realmente mejore tu día a día."
        features={painPoints}
        columns={4}
      />
      <FeatureGrid
        title={
          <>
            Una Reforma de Baño Centrada
            <br />
            en la Funcionalidad y Seguridad
          </>
        }
        subtitle="Afortunadamente, cada uno de estos problemas tiene una solución técnica y de diseño. Nuestro enfoque se centra en tres áreas clave para transformar por completo tu piso y adaptarlo a tus necesidades."
        features={solutions}
        columns={3}
        backgroundClassName="bg-gray-50"
        paddingClassName="py-20"
      />
      <FeatureGrid
        title={
          <>
            Más que un Baño Nuevo:
            <br />
            una Inversión en tu Hogar
          </>
        }
        subtitle="La reforma no solo mejora la estética, sino que revaloriza tu vivienda y aporta confort y seguridad a tu familia."
        features={benefits}
        columns={3}
      />
      <TestimonialsCarousel
        testimonials={testimonials}
        title={
          <>
            Así Vivieron Nuestros Clientes
            <br />
            su Reforma de Baño
          </>
        }
        subtitle="La tranquilidad de nuestros clientes es nuestra prioridad. Lee las opiniones de quienes ya han transformado su baño con nosotros."
      />
      <FeatureGrid
        title={
          <>
            Tu Reforma de Baño en 6 Pasos,
            <br />
            Sin Complicaciones
          </>
        }
        subtitle="Un proceso claro y bien comunicado es la clave para una reforma sin estrés. Te explicamos nuestros 6 pasos para transformar tu cocina."
        features={processSteps}
        columns={3}
        backgroundClassName="bg-gray-50"
        paddingClassName="py-20"
      />
      {(() => {
        const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://www.reformix.barcelona';
        const faqs = [
          {
            question: "¿Cuánto tiempo se tarda en reformar un baño?",
            answer: "Depende del tamaño y la complejidad, pero una reforma de baño estándar suele durar entre 7 y 10 días laborables."
          },
          {
            question: "¿Qué es más recomendable, plato de ducha o bañera?",
            answer: "Para ganar espacio, seguridad y accesibilidad, el plato de ducha es la opción más popular y funcional. Las bañeras se eligen por relax, si el espacio lo permite."
          },
          {
            question: "¿Puedo usar el resto de la casa durante la obra?",
            answer: "Sí. Protegemos las zonas de paso y minimizamos las molestias. Solo habrá cortes puntuales de agua que se avisan con antelación."
          },
          {
            question: "¿Qué tipo de azulejos son mejores para el baño?",
            answer: "Recomendamos materiales porcelánicos por su alta resistencia a la humedad y facilidad de limpieza. Hay infinidad de acabados para elegir."
          },
          {
            question: "¿Qué incluye el presupuesto?",
            answer: "Nuestro presupuesto es cerrado e incluye todos los materiales, mano de obra, gestión de residuos y limpieza final. Sin sorpresas."
          },
          {
            question: "¿Qué garantía tiene la reforma?",
            answer: "Ofrecemos una garantía completa por escrito que cubre tanto los materiales instalados como la mano de obra de nuestro equipo."
          }
        ];
        const faqSchema = generateFAQSchema(faqs);
        const serviceSchema = generateServiceSchema({
          name: "Reformas de Baños en Barcelona y Vallès Occidental",
          description: "Especialistas en reformas de baños en Barcelona y Vallès. Transforma tu baño en un oasis de relax. Presupuesto cerrado y garantía.",
          provider: {
            '@type': 'HomeAndConstructionBusiness',
            name: 'Reformix Barcelona',
          },
          serviceType: 'Bathroom Remodeling',
          url: '/reformas-banos',
        });
        const breadcrumbSchema = generateBreadcrumbSchema([
          { name: 'Inicio', url: '/' },
          { name: 'Reformas por Estancia', url: '/reformas-por-estancia' },
          { name: 'Reformas de Baños', url: '/reformas-banos' },
        ]);
        
        return (
          <>
            {faqSchema && <JsonLd data={faqSchema} />}
            {serviceSchema && <JsonLd data={serviceSchema} />}
            {breadcrumbSchema && <JsonLd data={breadcrumbSchema} />}
            <FAQTwoColumn items={faqs} />
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
        title="¿Listo para dar el paso y renovar tu baño?"
        description="Contacta con nosotros. Te daremos un presupuesto detallado y sin compromiso para tu reforma en Barcelona o el Vallès."
        buttonText="Solicita tu Presupuesto Gratuito"
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

