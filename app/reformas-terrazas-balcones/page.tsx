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
import Image from "next/image";
import {
  ShieldCheckIcon,
  WrenchScrewdriverIcon,
  SunIcon,
  DocumentCheckIcon,
  HomeIcon,
  ChartBarIcon,
  SunIcon as BeachIcon,
  ExclamationTriangleIcon,
  Square3Stack3DIcon,
} from '@heroicons/react/24/solid';

export const metadata: Metadata = {
  title: "Reformas de Terrazas y Balcones en Barcelona",
  description: "Expertos en reformas de terrazas y balcones en Barcelona y Vallès. Creamos tu oasis urbano: impermeabilización, suelos y cerramientos. ¡Pide presupuesto!",
  ...generateStandardMetadata({
    title: "Reformas de Terrazas y Balcones en Barcelona",
    description: "Expertos en reformas de terrazas y balcones en Barcelona y Vallès. Creamos tu oasis urbano: impermeabilización, suelos y cerramientos. ¡Pide presupuesto!",
    url: "https://www.reformix.barcelona/reformas-terrazas-balcones",
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
        backgroundImage="/images/reformas-de-terrazas.webp"
      />
      <FeatureGrid
        title=""
        subtitle=""
        features={features}
        columns={4}
      />
      <AboutSection
        logoPath="/images/reformix-logo-vertical-white.png"
        text="En Reformix, con sede en Sabadell, abordamos la reforma de terrazas y balcones en Barcelona y el Vallès Occidental desde un punto de vista técnico y estético. Nuestro equipo propio se encarga de todo: desde asegurar una correcta impermeabilización hasta la elección de materiales que soporten las inclemencias del tiempo, garantizando un espacio exterior tan bonito como funcional."
      />
      <FeatureGrid
        title={
          <>
            ¿Tu Terraza o Balcón Está
            <br />
            Desaprovechado o Deteriorado?
          </>
        }
        subtitle="El paso del tiempo y la falta de mantenimiento pueden convertir un espacio con gran potencial en una zona inútil o incluso problemática. Estos son los signos de que tu terraza necesita una reforma."
        features={[
          {
            title: "Filtraciones y Humedades",
            description: "El problema más grave. Un suelo agrietado o una mala impermeabilización pueden causar daños estructurales a tu vivienda y a los vecinos.",
            icon: (
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-brand-primary/10 text-brand-primary">
                <ExclamationTriangleIcon className="w-8 h-8" />
              </div>
            ),
          },
          {
            title: "Suelo Levantado o Roto",
            description: "Baldosas sueltas, rotas o con juntas en mal estado que dan un aspecto descuidado y son peligrosas.",
            icon: (
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-brand-primary/10 text-brand-primary">
                <Square3Stack3DIcon className="w-8 h-8" />
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
        title={
          <>
            Soluciones Técnicas y de Diseño
            <br />
            para tu Terraza
          </>
        }
        subtitle="Atacamos los problemas de raíz y transformamos tu terraza en un espacio seguro, funcional y con mucho estilo."
        features={solutions}
        columns={3}
        backgroundClassName="bg-gray-50"
        paddingClassName="py-20"
      />
      <FeatureGrid
        title={
          <>
            Gana un Nuevo Espacio
            <br />
            para Disfrutar en tu Hogar
          </>
        }
        subtitle="Una terraza bien reformada no es solo una mejora estética, es añadir metros útiles y de calidad a tu vivienda."
        features={benefits}
        columns={3}
      />
      <FeatureGrid
        title={
          <>
            Tu Nueva Terraza en 6 Pasos,
            <br />
            con Garantía Profesional
          </>
        }
        subtitle="Un proceso riguroso que asegura un resultado estético, seguro y duradero."
        features={[
          {
            title: "Inspección Técnica y Presupuesto",
            description: "Visitamos tu terraza o balcón para evaluar su estado (especialmente pendientes y desagües) y te damos un presupuesto detallado.",
            icon: (
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-brand-primary/10 text-brand-primary">
                <Image src="/images/1.webp" alt="Paso 1" width={64} height={64} className="w-16 h-16 object-contain" />
              </div>
            ),
          },
          {
            title: "Diseño y Selección de Materiales",
            description: "Te proponemos una distribución y te asesoramos en la elección de materiales de exterior que se adapten al clima y a tu estilo.",
            icon: (
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-brand-primary/10 text-brand-primary">
                <Image src="/images/2.webp" alt="Paso 2" width={64} height={64} className="w-16 h-16 object-contain" />
              </div>
            ),
          },
          {
            title: "Gestión de Permisos (si aplica)",
            description: "Si la obra lo requiere (por ejemplo, para cambiar barandillas o instalar cerramientos), gestionamos los permisos necesarios.",
            icon: (
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-brand-primary/10 text-brand-primary">
                <Image src="/images/3.webp" alt="Paso 3" width={64} height={64} className="w-16 h-16 object-contain" />
              </div>
            ),
          },
          {
            title: "Preparación e Impermeabilización",
            description: "Retiramos el pavimento existente, reparamos la base, creamos las pendientes correctas y aplicamos el sistema de impermeabilización.",
            icon: (
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-brand-primary/10 text-brand-primary">
                <Image src="/images/4.webp" alt="Paso 4" width={64} height={64} className="w-16 h-16 object-contain" />
              </div>
            ),
          },
          {
            title: "Instalación de Pavimentos y Acabados",
            description: "Colocamos el nuevo suelo, instalamos barandillas, puntos de luz, tomas de agua y otros elementos de albañilería o carpintería.",
            icon: (
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-brand-primary/10 text-brand-primary">
                <Image src="/images/5.webp" alt="Paso 5" width={64} height={64} className="w-16 h-16 object-contain" />
              </div>
            ),
          },
          {
            title: "Limpieza y Entrega Final",
            description: "Dejamos el espacio completamente limpio y listo para que empieces a disfrutarlo, con la garantía de un trabajo bien hecho.",
            icon: (
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-brand-primary/10 text-brand-primary">
                <Image src="/images/6.webp" alt="Paso 6" width={64} height={64} className="w-16 h-16 object-contain" />
              </div>
            ),
          },
        ]}
        columns={3}
        backgroundClassName="bg-gray-50"
        paddingClassName="py-20"
      />
      <TestimonialsCarousel
        title={
          <>
            Clientes que ya Disfrutan
            <br />
            de su Nuevo Espacio Exterior
          </>
        }
        subtitle="Su experiencia tras confiar en nosotros para la reforma de su terraza o balcón."
        testimonials={[
          {
            text: "Con Reformix convertimos un balcón pequeño en un espacio acogedor con mucho encanto. Ahora lo disfrutamos incluso en invierno.",
            initials: "JT",
            name: "Jordi T.",
            location: "Sant Cugat del Vallès"
          },
          {
            text: "La terraza ganó luz y comodidad. Es increíble cómo un espacio exterior bien diseñado cambia toda la casa.",
            initials: "MS",
            name: "Marta S.",
            location: "Badalona"
          },
          {
            text: "Queríamos algo práctico y fácil de mantener. Irina nos ayudó con las elecciones y el resultado fue una terraza moderna y funcional.",
            initials: "SG",
            name: "Sergio G.",
            location: "Hospitalet de Llobregat"
          },
          {
            text: "Ahora usamos el balcón como un rincón para leer y desconectar. Un cambio sencillo pero que marca la diferencia.",
            initials: "CR",
            name: "Clara R.",
            location: "Terrassa"
          },
          {
            text: "La terraza antes era solo un espacio vacío. Tras la reforma se ha convertido en el lugar perfecto para invitar a amigos.",
            initials: "AP",
            name: "Albert P.",
            location: "Viladecans"
          },
          {
            text: "Nuestra terraza apenas la usábamos. Tras la reforma es el lugar favorito de la familia, perfecto para desayunar y relajarnos.",
            initials: "LM",
            name: "Laia M.",
            location: "Barcelona (Poblenou)"
          },
        ]}
      />
      {(() => {
        const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://www.reformix.barcelona';
        const faqs = [
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
        ];
        const faqSchema = generateFAQSchema(faqs);
        const serviceSchema = generateServiceSchema({
          name: "Reformas de Terrazas y Balcones en Barcelona",
          description: "Expertos en reformas de terrazas y balcones en Barcelona y Vallès Occidental. Creamos tu oasis urbano: impermeabilización, suelos y cerramientos.",
          provider: {
            '@type': 'HomeAndConstructionBusiness',
            name: 'Reformix Barcelona',
          },
          serviceType: 'Terrace and Balcony Remodeling',
          url: '/reformas-terrazas-balcones',
        });
        const breadcrumbSchema = generateBreadcrumbSchema([
          { name: 'Inicio', url: '/' },
          { name: 'Reformas por Estancia', url: '/reformas-por-estancia' },
          { name: 'Reformas de Terrazas y Balcones', url: '/reformas-terrazas-balcones' },
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
        title={
          <>
            ¿Listo para convertir tu terraza
            <br />
            en el mejor lugar de tu casa?
          </>
        }
        description="Contacta con nosotros. Evaluamos tu espacio y te damos un presupuesto detallado para la reforma de tu terraza o balcón en Barcelona y el Vallès Occidental."
        buttonText="Pide tu Presupuesto Ahora"
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

