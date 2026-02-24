import Hero from "@/app/components/blocks/Hero";
import FeatureGrid from "@/app/components/blocks/FeatureGrid";
import AboutSection from "@/app/components/blocks/AboutSection";
import TestimonialsCarousel from "@/app/components/blocks/TestimonialsCarousel";
import FAQTwoColumn from "@/app/components/blocks/FAQTwoColumn";
import ServiceAreas from "@/app/components/blocks/ServiceAreas";
import CTA from "@/app/components/blocks/CTA";
import JsonLd from "@/app/components/common/JsonLd";
import { generateFAQSchema, generateServiceSchema, generateBreadcrumbSchema } from "@/app/components/common/JsonLd";
import Image from "next/image";
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
  WrenchScrewdriverIcon,
  DocumentCheckIcon,
  PencilSquareIcon,
  ClipboardDocumentCheckIcon,
} from '@heroicons/react/24/solid';

export const metadata: Metadata = {
  title: "Reformas de Recibidores en Barcelona con Estilo",
  description: "Expertos en reformas de recibidores en Barcelona y Vallès. Creamos una primera impresión impactante y optimizamos el almacenaje. ¡Pide presupuesto!",
  ...generateStandardMetadata({
    title: "Reformas de Recibidores en Barcelona con Estilo",
    description: "Expertos en reformas de recibidores en Barcelona y Vallès. Creamos una primera impresión impactante y optimizamos el almacenaje. ¡Pide presupuesto!",
    url: "https://www.reformix.barcelona/reformas-recibidores",
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
        backgroundImage="/images/reforma-de-recibidores-en-barcelona.webp"
        imageAlt="Recibidor moderno y luminoso tras reforma integral"
      />
      <FeatureGrid
        title=""
        subtitle=""
        features={features}
        columns={4}
      />
      <AboutSection
        logoPath="/images/reformix-logo-vertical-white.png"
        text="En Reformix somos especialistas en la reforma de recibidores y zonas de paso. Nuestro enfoque combina el diseño de interiores con soluciones constructivas como el pladur para crear armarios de obra y optimizar cada metro cuadrado, transformando la entrada de tu casa en un espacio tan práctico como acogedor."
      />
      <FeatureGrid
        title={
          <>
            ¿Tu Recibidor es Oscuro, Pequeño
            <br />
            y Siempre Desordenado?
          </>
        }
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
        title={
          <>
            Soluciones de Obra para un Recibidor
            <br />
            Funcional y Elegante
          </>
        }
        subtitle="Aplicamos soluciones constructivas y de diseño para transformar radicalmente la funcionalidad y estética de tu entrada."
        features={solutions}
        columns={3}
        backgroundClassName="bg-gray-50"
        paddingClassName="py-20"
      />
      <FeatureGrid
        title={
          <>
            La Bienvenida a Casa
            <br />
            que Siempre Has Querido
          </>
        }
        subtitle="Más que un espacio de paso, un recibidor bien reformado mejora la organización de toda la casa y eleva su categoría."
        features={benefits}
        columns={3}
      />
      <FeatureGrid
        title={
          <>
            Tu Nuevo Recibidor
            <br />
            en 6 Pasos Sencillos
          </>
        }
        subtitle="Un proceso planificado al detalle para una reforma rápida, eficiente y sin sorpresas."
        backgroundClassName="bg-gray-50"
        paddingClassName="py-20"
        features={[
          {
            title: "Análisis del Espacio y Necesidades",
            description: "Nos cuentas qué necesitas: más almacenaje, más luz, mejor distribución. Medimos y evaluamos el potencial de tu entrada.",
            icon: (
              <div className="inline-flex items-center justify-center w-16 h-16">
                <Image src="/images/1.webp" alt="Paso 1" width={64} height={64} className="w-full h-full object-contain" />
              </div>
            ),
          },
          {
            title: "Propuesta de Diseño y Presupuesto",
            description: "Te presentamos un diseño con la distribución de los muebles de obra, puntos de luz y acabados, junto a un presupuesto cerrado.",
            icon: (
              <div className="inline-flex items-center justify-center w-16 h-16">
                <Image src="/images/2.webp" alt="Paso 2" width={64} height={64} className="w-full h-full object-contain" />
              </div>
            ),
          },
          {
            title: "Elección de Materiales",
            description: "Te ayudamos a elegir el suelo, los colores y el tipo de iluminación que mejor se adapten al estilo de tu hogar y al uso diario.",
            icon: (
              <div className="inline-flex items-center justify-center w-16 h-16">
                <Image src="/images/3.webp" alt="Paso 3" width={64} height={64} className="w-full h-full object-contain" />
              </div>
            ),
          },
          {
            title: "Planificación de los Trabajos",
            description: "Organizamos la intervención de nuestro equipo (pladur, electricistas, pintores) para minimizar el tiempo de obra.",
            icon: (
              <div className="inline-flex items-center justify-center w-16 h-16">
                <Image src="/images/4.webp" alt="Paso 4" width={64} height={64} className="w-full h-full object-contain" />
              </div>
            ),
          },
          {
            title: "Ejecución y Acabados",
            description: "Construimos las soluciones de pladur, instalamos la iluminación, renovamos el suelo y cuidamos hasta el último detalle de los acabados.",
            icon: (
              <div className="inline-flex items-center justify-center w-16 h-16">
                <Image src="/images/5.webp" alt="Paso 5" width={64} height={64} className="w-full h-full object-contain" />
              </div>
            ),
          },
          {
            title: "Entrega Final",
            description: "Dejamos tu nuevo recibidor perfectamente limpio y listo para organizar, con la garantía de un trabajo profesional.",
            icon: (
              <div className="inline-flex items-center justify-center w-16 h-16">
                <Image src="/images/6.webp" alt="Paso 6" width={64} height={64} className="w-full h-full object-contain" />
              </div>
            ),
          },
        ]}
        columns={3}
      />
      <TestimonialsCarousel
        testimonials={[
          {
            text: "Queríamos que la entrada fuera más acogedora. Reformix lo consiguió con una solución práctica y elegante.",
            initials: "DP",
            name: "Daniel P.",
            location: "Sabadell"
          },
          {
            text: "Irina nos ayudó a escoger un diseño que combina almacenaje y estética. Ahora la entrada es funcional y bonita.",
            initials: "CM",
            name: "Clara M.",
            location: "Barcelona (Sants)"
          },
          {
            text: "Antes la entrada era estrecha y oscura. Tras la reforma, parece más amplia y luminosa, da gusto llegar a casa.",
            initials: "MT",
            name: "Marc T.",
            location: "Ripollet"
          },
          {
            text: "El nuevo diseño nos permite aprovechar cada rincón. Ahora todo tiene su sitio y el espacio se siente ordenado.",
            initials: "AG",
            name: "Ana G.",
            location: "Sant Joan Despí"
          },
          {
            text: "Lo que más nos gusta es la primera impresión al entrar. La entrada transmite orden y armonía desde el primer momento.",
            initials: "JV",
            name: "Jordi V.",
            location: "Terrassa"
          },
          {
            text: "Nuestra entrada siempre estaba llena de cosas. Con los armarios a medida ahora tenemos orden y espacio para todo.",
            initials: "LS",
            name: "Laura S.",
            location: "Montgat"
          },
        ]}
        title="Clientes que Ahora Aman la Entrada de su Casa"
        subtitle="Su experiencia tras reformar con nosotros el primer espacio que ven al llegar a casa."
      />
      {(() => {
        const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://www.reformix.barcelona';
        const faqs = [
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
        ];
        const faqSchema = generateFAQSchema(faqs);
        const serviceSchema = generateServiceSchema({
          name: "Reformas de Recibidores en Barcelona con Estilo",
          description: "Expertos en reformas de recibidores en Barcelona y Vallès Occidental. Creamos una primera impresión impactante y optimizamos el almacenaje.",
          provider: {
            '@type': 'HomeAndConstructionBusiness',
            name: 'Reformix Barcelona',
          },
          serviceType: 'Entryway Remodeling',
          url: '/reformas-recibidores',
        });
        const breadcrumbSchema = generateBreadcrumbSchema([
          { name: 'Inicio', url: '/' },
          { name: 'Reformas por Estancia', url: '/reformas-por-estancia' },
          { name: 'Reformas de Recibidores', url: '/reformas-recibidores' },
        ]);
        
        return (
          <>
            {faqSchema && <JsonLd data={faqSchema} />}
            {serviceSchema && <JsonLd data={serviceSchema} />}
            {breadcrumbSchema && <JsonLd data={breadcrumbSchema} />}
            <FAQTwoColumn titleLines={["Dudas Frecuentes", "sobre la Reforma de tu Recibidor"]} items={faqs} />
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
        title="¿Quieres una entrada que te haga sentir orgulloso de tu hogar?"
        description="Contacta con nuestro equipo. Diseñaremos un espacio funcional y con estilo para tu recibidor y te daremos un presupuesto ajustado a tus necesidades."
        buttonText="Solicita tu Presupuesto"
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

