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
  PaintBrushIcon,
  ShieldCheckIcon,
  SparklesIcon,
  HomeIcon,
  EyeIcon,
  ChartBarIcon,
  WrenchScrewdriverIcon,
  DocumentCheckIcon,
} from '@heroicons/react/24/solid';

export const metadata: Metadata = {
  title: "Pintura para Reformas en Barcelona y Vallès",
  description: "Servicio de pintura para reformas en Barcelona y Vallès. Acabados impecables y duraderos. Protegemos muebles y suelos. ¡Pide presupuesto!",
  ...generateStandardMetadata({
    title: "Pintura para Reformas en Barcelona y Vallès",
    description: "Servicio de pintura para reformas en Barcelona y Vallès. Acabados impecables y duraderos. Protegemos muebles y suelos. ¡Pide presupuesto!",
    url: "https://reformix.barcelona/pintura-interior",
    pagePath: "/pintura-interior",
    keywords: ["pintura interior reformas", "pintura Barcelona", "pintura vivienda", "acabados pintura"],
  }),
};

export default async function PinturaInteriorPage() {
  const features = [
    {
      title: "Acabados Impecables",
      description: "Trabajamos con pinturas de primera calidad y técnicas profesionales para un resultado perfecto y duradero.",
      icon: (
        <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-brand-primary/10 text-brand-primary">
          <PaintBrushIcon className="w-8 h-8" />
        </div>
      ),
    },
    {
      title: "Protección Total",
      description: "Protegemos muebles, suelos y elementos decorativos durante todo el proceso para que no sufran ningún daño.",
      icon: (
        <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-brand-primary/10 text-brand-primary">
          <ShieldCheckIcon className="w-8 h-8" />
        </div>
      ),
    },
    {
      title: "Preparación Profesional",
      description: "Realizamos un tratamiento completo de las superficies (masillado, lijado, imprimación) antes de pintar para garantizar la adherencia y durabilidad.",
      icon: (
        <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-brand-primary/10 text-brand-primary">
          <WrenchScrewdriverIcon className="w-8 h-8" />
        </div>
      ),
    },
    {
      title: "Limpieza Garantizada",
      description: "Dejamos tu hogar completamente limpio tras la obra, sin rastro de polvo, manchas o restos de pintura.",
      icon: (
        <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-brand-primary/10 text-brand-primary">
          <SparklesIcon className="w-8 h-8" />
        </div>
      ),
    },
  ];

  const solutions = [
    {
      title: "Pintura de Paredes y Techos",
      description: "Aplicamos pinturas plásticas, lavables o mate según tus preferencias, con técnicas de rodillo y brocha para un acabado uniforme y profesional.",
      icon: (
        <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-brand-primary/10 text-brand-primary">
          <PaintBrushIcon className="w-8 h-8" />
        </div>
      ),
    },
    {
      title: "Tratamiento de Superficies",
      description: "Preparamos correctamente cada superficie: masillamos grietas, lijamos imperfecciones y aplicamos imprimación para un resultado perfecto.",
      icon: (
        <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-brand-primary/10 text-brand-primary">
          <WrenchScrewdriverIcon className="w-8 h-8" />
        </div>
      ),
    },
    {
      title: "Pintura de Carpintería",
      description: "Pintamos puertas, marcos, ventanas y otros elementos de madera con esmaltes y barnices de alta calidad para un acabado duradero.",
      icon: (
        <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-brand-primary/10 text-brand-primary">
          <HomeIcon className="w-8 h-8" />
        </div>
      ),
    },
  ];

  const benefits = [
    {
      title: "Transformación Visual Completa",
      description: "La pintura es el toque final que unifica y da vida a toda tu reforma. Un buen acabado de pintura transforma completamente la percepción del espacio.",
      icon: (
        <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-brand-primary/10 text-brand-primary">
          <EyeIcon className="w-8 h-8" />
        </div>
      ),
    },
    {
      title: "Durabilidad y Fácil Mantenimiento",
      description: "Con pinturas de calidad y una correcta preparación, tus paredes se mantendrán impecables durante años, resistiendo el desgaste diario y siendo fáciles de limpiar.",
      icon: (
        <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-brand-primary/10 text-brand-primary">
          <ShieldCheckIcon className="w-8 h-8" />
        </div>
      ),
    },
    {
      title: "Revalorización de tu Vivienda",
      description: "Un acabado de pintura profesional es uno de los detalles que más valor añade a una propiedad, mejorando su presentación y atractivo.",
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
        title="Servicio de Pintura Interior"
        titleLines={[
          "Servicio de Pintura Interior"
        ]}
        subtitle="La pintura interior es el toque final que define la calidad de tu reforma en Barcelona. Acabados perfectos, limpieza garantizada y la tranquilidad de un trabajo bien hecho."
        primaryCTA={{
          text: "Calcular Presupuesto de Pintura",
          href: "/contacto"
        }}
        backgroundImage="/images/pintura-interior.webp"
        overlayOpacity="stronger"
      />
      <FeatureGrid
        title="La Calidad de un Acabado Profesional"
        subtitle="La pintura es el último paso de tu reforma, pero no por ello menos importante. Un buen acabado de pintura marca la diferencia entre una reforma buena y una excelente."
        features={features}
        columns={4}
      />
      <AboutSection
        logoPath="/images/reformix-logo-vertical-white.png"
        text="En Reformix Barcelona, nuestro equipo de pintores profesionales se encarga del acabado final de tu reforma en Barcelona y el Vallès Occidental. Trabajamos con pinturas de primera calidad, protegemos todos tus muebles y elementos decorativos, y dejamos tu hogar completamente limpio tras la obra. La pintura es el toque final que unifica y da vida a toda tu reforma."
      />
      <FeatureGrid
        title={
          <>
            ¿Por qué es Importante
            <br />
            una Buena Pintura en tu Reforma?
          </>
        }
        subtitle="Una pintura mal ejecutada puede arruinar todo el trabajo previo. Detectamos los problemas más comunes y los resolvemos con técnicas profesionales."
        features={[
          {
            title: "Acabados Irregulares",
            description: "Manchas, rayas o diferencias de tono que delatan un trabajo de baja calidad y arruinan la estética de toda la reforma.",
            icon: (
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-brand-primary/10 text-brand-primary">
                <PaintBrushIcon className="w-8 h-8" />
              </div>
            ),
          },
          {
            title: "Falta de Preparación",
            description: "Pintar sobre superficies mal preparadas provoca que la pintura se desprenda, agriete o muestre imperfecciones en poco tiempo.",
            icon: (
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-brand-primary/10 text-brand-primary">
                <WrenchScrewdriverIcon className="w-8 h-8" />
              </div>
            ),
          },
          {
            title: "Daños a Muebles y Suelos",
            description: "Sin una protección adecuada, la pintura puede manchar o dañar muebles, suelos y elementos decorativos, generando costes adicionales.",
            icon: (
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-brand-primary/10 text-brand-primary">
                <ShieldCheckIcon className="w-8 h-8" />
              </div>
            ),
          },
          {
            title: "Limpieza Incompleta",
            description: "Restos de pintura, polvo o manchas que quedan tras la obra, obligándote a hacer una limpieza profunda por tu cuenta.",
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
        title={
          <>
            Nuestro Servicio de Pintura:
            <br />
            Preparación, Calidad y Limpieza
          </>
        }
        subtitle="No solo pintamos, preparamos correctamente cada superficie, utilizamos materiales de calidad y dejamos tu hogar impecable."
        features={solutions}
        columns={3}
        backgroundClassName="bg-gray-50"
        paddingClassName="py-20 md:py-24"
      />
      <FeatureGrid
        title={
          <>
            Más que Pintura:
            <br />
            el Toque Final que Marca la Diferencia
          </>
        }
        subtitle="Un buen acabado de pintura no solo mejora la estética, sino que protege las superficies, facilita el mantenimiento y revaloriza tu vivienda."
        features={benefits}
        columns={3}
      />
      <TestimonialsCarousel
        title="Opiniones Reales sobre Nuestro Servicio de Pintura"
        subtitle="La confianza que depositan en nosotros nuestros clientes de Barcelona y el Vallès Occidental es nuestra mejor carta de presentación. Aquí puedes leer sus experiencias con nuestro servicio de pintura interior."
        testimonials={[
          {
            text: "Tenía paredes con grietas y restos de antiguas reparaciones. Alisaron, masillaron y pintaron en tono mate. El salón parece más luminoso y sin esas sombras que antes lo apagaban.",
            initials: "HR",
            name: "Helena R.",
            location: "Barcelona (Gràcia)"
          },
          {
            text: "Quitaron el gotelé del pasillo y dejaron las paredes lisas como nuevas. La pintura lavable es todo un acierto, sobre todo con niños. Cuidaron cada detalle y entregaron todo impecable.",
            initials: "MD",
            name: "Marc D.",
            location: "Sabadell"
          },
          {
            text: "En el dormitorio había manchas de humedad de años. Aplicaron imprimación antimanchas, repararon el techo y pintaron con acabado satinado. Desaparecieron los cercos y el olor. Un trabajo muy fino.",
            initials: "AP",
            name: "Aina P.",
            location: "Sant Joan Despí"
          },
          {
            text: "Pedimos cambio de color en el salón y lacado de puertas y marcos. El resultado quedó limpio, sin marcas de rodillo y con cortes perfectos. Se nota el cuidado en los remates.",
            initials: "IS",
            name: "Iván S.",
            location: "Badalona"
          },
          {
            text: "Dudábamos con los tonos y Irina nos ayudó a elegir una paleta preciosa: mate para el salón y satinado para la cocina. La casa ganó luz y ahora limpiamos las paredes sin miedo a estropear la pintura.",
            initials: "ML",
            name: "Marta L.",
            location: "Montcada i Reixac"
          },
          {
            text: "Reformix tapó fisuras, lijó techos y pintó en dos tonos según la luz natural de cada habitación. El acabado es uniforme, sin olores fuertes y todo quedó perfectamente protegido y recogido al final.",
            initials: "JN",
            name: "Jordi N.",
            location: "Castelldefels"
          }
        ]}
      />
      {(() => {
        const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://reformix.barcelona';
        const faqs = [
          {
            question: "¿Qué tipo de pintura es mejor para interiores?",
            answer: "Depende del uso de cada estancia. Para zonas húmedas como baños y cocinas, recomendamos pinturas plásticas lavables. Para salones y dormitorios, las pinturas mate o satinadas ofrecen un acabado más elegante. Te asesoramos según tus necesidades."
          },
          {
            question: "¿Cuánto tiempo se tarda en pintar una vivienda completa?",
            answer: "Depende del tamaño y el estado de las superficies. Una vivienda de 90m² suele requerir entre 3 y 5 días hábiles, incluyendo preparación, aplicación y limpieza."
          },
          {
            question: "¿Protegéis los muebles y suelos durante la pintura?",
            answer: "Sí, absolutamente. Utilizamos plásticos, telas y cintas protectoras para cubrir muebles, suelos, ventanas y todos los elementos que puedan sufrir daños. La protección es parte de nuestro servicio."
          },
          {
            question: "¿Incluís la preparación de las superficies en el presupuesto?",
            answer: "Sí, nuestro presupuesto incluye toda la preparación necesaria: masillado de grietas, lijado de imperfecciones, imprimación cuando es necesario y cualquier tratamiento previo requerido."
          },
          {
            question: "¿Qué garantía ofrecéis sobre el trabajo de pintura?",
            answer: "Ofrecemos garantía por escrito sobre la calidad de la aplicación y la durabilidad del acabado. Si aparecen defectos relacionados con nuestra ejecución, los corregimos sin coste adicional."
          },
          {
            question: "¿Puedo elegir los colores y marcas de pintura?",
            answer: "Sí, puedes elegir los colores y marcas que prefieras. Te asesoramos sobre las mejores opciones según el uso de cada estancia, pero la decisión final es siempre tuya."
          }
        ];
        const faqSchema = generateFAQSchema(faqs);
        const serviceSchema = generateServiceSchema({
          name: "Servicio de Pintura para Reformas en Barcelona | Acabados Perfectos",
          description: "Nuestro servicio de pintura para reformas en Barcelona garantiza acabados impecables y duraderos. Protegemos tus muebles y suelos.",
          provider: {
            '@type': 'HomeAndConstructionBusiness',
            name: 'Reformix Barcelona',
          },
          serviceType: 'Interior Painting',
          url: '/pintura-interior',
        });
        const breadcrumbSchema = generateBreadcrumbSchema([
          { name: 'Inicio', url: '/' },
          { name: 'Servicios Técnicos', url: '/servicios-tecnicos' },
          { name: 'Pintura Interior', url: '/pintura-interior' },
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
        title="¿Listo para el Toque Final de tu Reforma?"
        description="Contacta con nosotros para un presupuesto detallado de pintura interior. Garantizamos acabados perfectos, protección total de tus muebles y una limpieza exhaustiva tras la obra."
        buttonText="Calcular Presupuesto de Pintura"
        buttonHref="/contacto"
        features={[
          "Visita y presupuesto sin compromiso",
          "Protección total de muebles y suelos",
          "Limpieza garantizada"
        ]}
      />
    </>
  );
}

