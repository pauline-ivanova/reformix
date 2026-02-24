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
  SunIcon,
  ShieldCheckIcon,
  UserGroupIcon,
  DocumentCheckIcon,
  HomeIcon,
  SparklesIcon,
  BoltIcon,
  CogIcon,
  ExclamationTriangleIcon,
  ChartBarIcon,
  WrenchScrewdriverIcon,
  CurrencyEuroIcon,
} from '@heroicons/react/24/solid';

export const metadata: Metadata = {
  title: "Calefacción y Climatización en Barcelona y Vallès Occidental",
  description: "Instalamos sistemas eficientes de calefacción y climatización en Barcelona y Vallès Occidental. Confort todo el año con sistemas modernos y eficientes.",
  ...generateStandardMetadata({
    title: "Calefacción y Climatización en Barcelona y Vallès Occidental",
    description: "Instalamos sistemas eficientes de calefacción y climatización en Barcelona y Vallès Occidental. Confort todo el año con sistemas modernos y eficientes.",
    url: "https://www.reformix.barcelona/calefaccion-climatizacion",
    pagePath: "/calefaccion-climatizacion",
    keywords: ["calefacción Barcelona", "climatización Barcelona", "aerotermia Barcelona", "calefacción radiadores", "aire acondicionado Barcelona"],
  }),
};

export default async function CalefaccionClimatizacionPage() {
  const features = [
    {
      title: "Instaladores Cualificados",
      description: "Nuestro equipo está especializado en instalaciones de calefacción y climatización, con certificaciones y años de experiencia.",
      icon: (
        <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-brand-primary/10 text-brand-primary">
          <UserGroupIcon className="w-8 h-8" />
        </div>
      ),
    },
    {
      title: "Sistemas Eficientes",
      description: "Instalamos sistemas modernos y eficientes que reducen el consumo energético y mejoran el confort de tu hogar.",
      icon: (
        <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-brand-primary/10 text-brand-primary">
          <BoltIcon className="w-8 h-8" />
        </div>
      ),
    },
    {
      title: "Coordinación Perfecta",
      description: "Trabajamos en coordinación con fontaneros y electricistas para una instalación integrada y sin problemas.",
      icon: (
        <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-brand-primary/10 text-brand-primary">
          <WrenchScrewdriverIcon className="w-8 h-8" />
        </div>
      ),
    },
    {
      title: "Garantía y Mantenimiento",
      description: "Ofrecemos garantía por escrito y asesoramiento sobre el mantenimiento para asegurar el correcto funcionamiento.",
      icon: (
        <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-brand-primary/10 text-brand-primary">
          <ShieldCheckIcon className="w-8 h-8" />
        </div>
      ),
    },
  ];

  const solutions = [
    {
      title: "Calefacción por Radiadores",
      description: "Instalamos circuitos de calefacción con radiadores, ya sea bitubo o monotubo, para un confort térmico ideal en toda la vivienda.",
      icon: (
        <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-brand-primary/10 text-brand-primary">
          <SunIcon className="w-8 h-8" />
        </div>
      ),
    },
    {
      title: "Aerotermia",
      description: "Sistemas de aerotermia para calefacción, refrigeración y agua caliente sanitaria, con máxima eficiencia energética.",
      icon: (
        <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-brand-primary/10 text-brand-primary">
          <BoltIcon className="w-8 h-8" />
        </div>
      ),
    },
    {
      title: "Aire Acondicionado",
      description: "Instalamos sistemas de aire acondicionado split o multisplit para mantener la temperatura ideal en verano.",
      icon: (
        <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-brand-primary/10 text-brand-primary">
          <CogIcon className="w-8 h-8" />
        </div>
      ),
    },
  ];

  const benefits = [
    {
      title: "Confort Todo el Año",
      description: "Disfruta de una temperatura ideal en invierno y verano, creando un ambiente confortable en tu hogar durante todas las estaciones.",
      icon: (
        <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-brand-primary/10 text-brand-primary">
          <HomeIcon className="w-8 h-8" />
        </div>
      ),
    },
    {
      title: "Ahorro Energético",
      description: "Los sistemas modernos de calefacción y climatización son mucho más eficientes, reduciendo significativamente tus facturas energéticas.",
      icon: (
        <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-brand-primary/10 text-brand-primary">
          <CurrencyEuroIcon className="w-8 h-8" />
        </div>
      ),
    },
    {
      title: "Revalorización de la Vivienda",
      description: "Una instalación moderna de calefacción y climatización aumenta el valor de tu vivienda y mejora su certificado energético.",
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
        title="Calefacción y Climatización en Barcelona y Vallès Occidental"
        titleLines={[
          "Calefacción y Climatización",
          "en Barcelona",
          "y Vallès Occidental"
        ]}
        subtitle="Instalamos sistemas eficientes de climatización para tu confort todo el año. Desde calefacción por radiadores hasta aerotermia, soluciones modernas y eficientes."
        primaryCTA={{
          text: "Solicitar Presupuesto",
          href: "/contacto"
        }}
        backgroundImage="/images/calefaccion.webp"
        imageAlt="Instalación de sistema de calefacción y climatización eficiente"
        overlayOpacity="stronger"
      />
      <FeatureGrid
        title="Sistemas Modernos y Eficientes"
        subtitle="Nuestro compromiso se basa en la experiencia técnica, sistemas de última generación y una instalación profesional que garantiza el máximo confort y eficiencia."
        features={features}
        columns={4}
      />
      <AboutSection
        logoPath="/images/reformix-logo-vertical-white.png"
        text="En Reformix Barcelona, nuestro equipo de especialistas en calefacción y climatización trabaja en Barcelona y el Vallès Occidental para instalar sistemas modernos y eficientes que garanticen tu confort durante todo el año. Desde calefacción por radiadores hasta sistemas de aerotermia y aire acondicionado, ofrecemos soluciones adaptadas a tus necesidades y presupuesto, siempre coordinando nuestro trabajo con fontaneros y electricistas para una instalación perfecta."
      />
      <FeatureGrid
        title={
          <>
            ¿Problemas con la Calefacción
            <br />
            o Climatización?
          </>
        }
        subtitle="Un sistema de calefacción o climatización obsoleto o mal instalado puede causar problemas de confort y aumentar significativamente tus facturas. Estos son los problemas más comunes."
        features={[
          {
            title: "Consumo Excesivo",
            description: "Sistemas antiguos o mal dimensionados consumen mucha más energía de la necesaria, disparando tus facturas de luz y gas.",
            icon: (
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-brand-primary/10 text-brand-primary">
                <ExclamationTriangleIcon className="w-8 h-8" />
              </div>
            ),
          },
          {
            title: "Temperatura Irregular",
            description: "Algunas habitaciones muy calientes y otras frías, o sistemas que no alcanzan la temperatura deseada, generando incomodidad.",
            icon: (
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-brand-primary/10 text-brand-primary">
                <HomeIcon className="w-8 h-8" />
              </div>
            ),
          },
          {
            title: "Sistemas Obsoletos",
            description: "Instalaciones antiguas que no cumplen con la normativa actual y que no ofrecen las ventajas de los sistemas modernos.",
            icon: (
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-brand-primary/10 text-brand-primary">
                <CogIcon className="w-8 h-8" />
              </div>
            ),
          },
          {
            title: "Falta de Refrigeración",
            description: "Sin un sistema de climatización adecuado, los veranos en Barcelona pueden ser muy incómodos, especialmente en pisos altos.",
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
        title="Soluciones de Calefacción y Climatización"
        subtitle="Desde sistemas tradicionales hasta tecnologías de última generación, ofrecemos soluciones adaptadas a tus necesidades."
        features={solutions}
        columns={3}
        backgroundClassName="bg-gray-50"
        paddingClassName="py-20"
      />
      <FeatureGrid
        title={
          <>
            Invierte en Confort:
            <br />
            Calefacción y Climatización Eficientes
          </>
        }
        subtitle="Un sistema moderno de calefacción y climatización no es solo confort, es también ahorro energético y revalorización de tu vivienda."
        features={benefits}
        columns={3}
      />
      <TestimonialsCarousel
        title="Clientes Satisfechos con Nuestras Instalaciones"
        subtitle="La comodidad de nuestros clientes es nuestra mejor carta de presentación. Lee las experiencias de quienes ya disfrutan de sistemas modernos de calefacción y climatización."
        testimonials={[
          {
            text: "Instalamos aerotermia y el cambio es increíble. La casa está siempre a la temperatura perfecta y la factura ha bajado mucho. Muy recomendable.",
            initials: "JT",
            name: "Jordi T.",
            location: "Castelldefels"
          },
          {
            text: "Renovamos toda la calefacción por radiadores y ahora la temperatura se distribuye perfectamente por toda la casa. Muy contentos.",
            initials: "GP",
            name: "Gemma P.",
            location: "Sant Cugat del Vallès"
          },
          {
            text: "Instalamos aire acondicionado multisplit y ahora podemos disfrutar del verano en casa sin pasar calor. La instalación fue limpia y profesional.",
            initials: "AC",
            name: "Aina C.",
            location: "Terrassa"
          },
          {
            text: "El sistema de calefacción antiguo consumía muchísimo. Con la nueva instalación, el confort ha mejorado y el gasto ha bajado considerablemente.",
            initials: "NS",
            name: "Núria S.",
            location: "Barcelona (Poble-sec)"
          },
        ]}
      />
      {(() => {
        const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://www.reformix.barcelona';
        const faqs = [
          {
            question: "¿Qué sistema de calefacción es más eficiente?",
            answer: "La aerotermia es actualmente el sistema más eficiente, ya que puede generar hasta 4 veces más energía de la que consume. También ofrecemos calefacción por radiadores con calderas de alta eficiencia."
          },
          {
            question: "¿Cuánto cuesta instalar calefacción en una vivienda?",
            answer: "El precio depende del tamaño de la vivienda, el sistema elegido y el tipo de instalación. Tras una visita técnica, te entregamos un presupuesto detallado y cerrado."
          },
          {
            question: "¿Puedo combinar calefacción y aire acondicionado?",
            answer: "Sí, la aerotermia permite calefacción en invierno y refrigeración en verano con un solo sistema. También podemos instalar sistemas independientes."
          },
          {
            question: "¿Cuánto se tarda en instalar un sistema de calefacción?",
            answer: "Depende del sistema y el tamaño de la vivienda. Una instalación de radiadores suele tardar entre 3 y 5 días, mientras que la aerotermia puede requerir más tiempo."
          },
          {
            question: "¿Hay subvenciones para instalar sistemas eficientes?",
            answer: "Sí, a menudo existen ayudas y subvenciones para la instalación de sistemas eficientes como la aerotermia. Te informamos sobre las convocatorias vigentes."
          },
          {
            question: "¿Qué mantenimiento requieren estos sistemas?",
            answer: "Los sistemas modernos requieren un mantenimiento mínimo. Te asesoramos sobre las revisiones necesarias para mantener el rendimiento y la garantía."
          }
        ];
        const faqSchema = generateFAQSchema(faqs);
        const serviceSchema = generateServiceSchema({
          name: "Calefacción y Climatización en Barcelona y Vallès Occidental",
          description: "Instalamos sistemas eficientes de calefacción y climatización en Barcelona y Vallès Occidental. Confort todo el año con sistemas modernos y eficientes.",
          provider: {
            '@type': 'HomeAndConstructionBusiness',
            name: 'Reformix Barcelona',
          },
          serviceType: 'Heating and Air Conditioning',
          url: '/calefaccion-climatizacion',
        });
        const breadcrumbSchema = generateBreadcrumbSchema([
          { name: 'Inicio', url: '/' },
          { name: 'Servicios Técnicos', url: '/servicios-tecnicos' },
          { name: 'Calefacción y Climatización', url: '/calefaccion-climatizacion' },
        ]);
        
        return (
          <>
            {faqSchema && <JsonLd data={faqSchema} />}
            {serviceSchema && <JsonLd data={serviceSchema} />}
            {breadcrumbSchema && <JsonLd data={breadcrumbSchema} />}
            <FAQTwoColumn titleLines={["Preguntas Frecuentes", "sobre Calefacción y Climatización"]} items={faqs} />
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
        title="Confort Todo el Año en tu Hogar"
        description="Desde calefacción por radiadores hasta sistemas de aerotermia, nuestro equipo está listo para instalar el sistema perfecto para tu hogar. Solicita un presupuesto sin compromiso."
        buttonText="Solicitar Presupuesto"
        buttonHref="/contacto"
        features={[
          "Asesoramiento inicial gratuito",
          "Visita y estudio sin coste",
          "Presupuesto detallado y cerrado"
        ]}
      />
    </>
  );
}

