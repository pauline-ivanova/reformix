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
  WindowIcon,
  ShieldCheckIcon,
  SunIcon,
  SpeakerWaveIcon,
  LockClosedIcon,
  HomeModernIcon,
  WrenchScrewdriverIcon,
  CurrencyDollarIcon,
  BoltIcon,
  SquaresPlusIcon,
} from '@heroicons/react/24/solid';

export const metadata: Metadata = {
  title: "Ventanas y Aluminio en Barcelona | Reformix",
  description: "Ventanas de aluminio y PVC en Barcelona. Aislamiento térmico y acústico. Eficiencia energética. Garantía por escrito. ¡Pide presupuesto!",
  ...generateStandardMetadata({
    title: "Ventanas y Aluminio en Barcelona | Reformix",
    description: "Ventanas de aluminio y PVC en Barcelona. Aislamiento térmico y acústico. Eficiencia energética. Garantía por escrito. ¡Pide presupuesto!",
    url: "https://www.reformix.barcelona/ventanas",
    pagePath: "/ventanas",
    keywords: ["ventanas barcelona", "aluminio barcelona", "ventanas pvc barcelona", "cambiar ventanas precio", "aislamiento ventanas"],
  }),
};

export default async function VentanasPage() {
  const features = [
    {
      title: "Aislamiento Térmico",
      description: "Reduce el gasto en calefacción y aire acondicionado con perfiles de rotura de puente térmico.",
      icon: (
        <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-brand-primary/10 text-brand-primary">
          <SunIcon className="w-8 h-8" />
        </div>
      ),
    },
    {
      title: "Aislamiento Acústico",
      description: "Olvídate del ruido de la calle gracias a vidrios laminados y cierres herméticos.",
      icon: (
        <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-brand-primary/10 text-brand-primary">
          <SpeakerWaveIcon className="w-8 h-8" />
        </div>
      ),
    },
    {
      title: "Seguridad Reforzada",
      description: "Herrajes de seguridad y vidrios especiales para proteger tu hogar contra intrusiones.",
      icon: (
        <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-brand-primary/10 text-brand-primary">
          <LockClosedIcon className="w-8 h-8" />
        </div>
      ),
    },
    {
      title: "Variedad de Diseños",
      description: "Aluminio minimalista, PVC, imitación madera... soluciones estéticas para cualquier estilo.",
      icon: (
        <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-brand-primary/10 text-brand-primary">
          <HomeModernIcon className="w-8 h-8" />
        </div>
      ),
    },
  ];

  const solutions = [
    {
      title: "Ventanas de Aluminio RPT",
      description: "Perfiles de aluminio con Rotura de Puente Térmico, ideales para grandes ventanales y diseños minimalistas.",
      icon: (
        <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-brand-primary/10 text-brand-primary">
          <WindowIcon className="w-8 h-8" />
        </div>
      ),
    },
    {
      title: "Ventanas de PVC",
      description: "La mejor relación calidad-precio en aislamiento térmico. Mantenimiento nulo y gran durabilidad.",
      icon: (
        <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-brand-primary/10 text-brand-primary">
          <SquaresPlusIcon className="w-8 h-8" />
        </div>
      ),
    },
    {
      title: "Cerramientos de Terrazas",
      description: "Gana metros útiles cerrando tu balcón o terraza con cortinas de cristal o estructuras ligeras.",
      icon: (
        <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-brand-primary/10 text-brand-primary">
          <HomeModernIcon className="w-8 h-8" />
        </div>
      ),
    },
    {
      title: "Persianas y Mosquiteras",
      description: "Instalación de persianas motorizadas, mosquiteras enrollables y mallorquinas.",
      icon: (
        <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-brand-primary/10 text-brand-primary">
          <BoltIcon className="w-8 h-8" />
        </div>
      ),
    },
  ];

  const benefits = [
    {
      title: "Ahorro en Facturas",
      description: "Reduce hasta un 30% tu consumo energético en climatización gracias a un buen aislamiento.",
      icon: (
        <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-brand-primary/10 text-brand-primary">
          <CurrencyDollarIcon className="w-8 h-8" />
        </div>
      ),
    },
    {
      title: "Confort y Silencio",
      description: "Disfruta de una temperatura estable todo el año y de la tranquilidad de un hogar silencioso.",
      icon: (
        <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-brand-primary/10 text-brand-primary">
          <HomeModernIcon className="w-8 h-8" />
        </div>
      ),
    },
    {
      title: "Valor de la Vivienda",
      description: "La certificación energética mejora notablemente, revalorizando tu propiedad en el mercado.",
      icon: (
        <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-brand-primary/10 text-brand-primary">
          <ShieldCheckIcon className="w-8 h-8" />
        </div>
      ),
    },
  ];

  return (
    <>
      <Hero
        title="Ventanas y Carpintería de Aluminio"
        titleLines={[
          "Ventanas y Carpintería",
          "de Aluminio"
        ]}
        subtitle="Aislamiento, silencio y ahorro energético. Renovamos tus ventanas con soluciones de aluminio y PVC de alta eficiencia para un confort total."
        primaryCTA={{
          text: "Calcular Presupuesto de Ventanas",
          href: "/contacto"
        }}
        backgroundImage="/images/ventanas-aluminio.png"
        imageAlt="Instalación de ventanas de aluminio con rotura de puente térmico"
        overlayOpacity="stronger"
      />
      <FeatureGrid
        title="Ventanas que Protegen tu Hogar"
        subtitle="Las ventanas son el punto débil de la envolvente de tu vivienda. Reforzarlas es la mejor inversión en confort y seguridad."
        features={features}
        columns={4}
      />
      <AboutSection
        logoPath="/images/reformix-logo-vertical-white.png"
        text="En Reformix Barcelona, somos especialistas en la renovación de cerramientos exteriores. Entendemos que las ventanas son críticas para el confort de tu vivienda. Por eso, no solo instalamos, sino que te asesoramos técnicamente para elegir la combinación perfecta de perfil y vidrio que garantice el máximo aislamiento y ahorro energético. Trabajamos con marcas líderes y equipos de instalación propios."
      />
      <FeatureGrid
        title={
          <>
            Problemas de las
            <br />
            Ventanas Antiguas
          </>
        }
        subtitle="Mantener cerramientos viejos te cuesta dinero cada mes y reduce tu calidad de vida."
        features={[
          {
            title: "Fugas de Temperatura",
            description: "Las ventanas viejas son agujeros térmicos por donde se escapa el calor en invierno y el fresco en verano.",
            icon: (
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-red-100 text-red-600">
                <SunIcon className="w-8 h-8" />
              </div>
            ),
          },
          {
            title: "Ruido Molesto",
            description: "Si escuchas el tráfico o las conversaciones de la calle como si estuvieran dentro, tus ventanas no aíslan.",
            icon: (
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-red-100 text-red-600">
                <SpeakerWaveIcon className="w-8 h-8" />
              </div>
            ),
          },
          {
            title: "Condensación y Humedad",
            description: "La aparición de agua en los cristales o moho en los marcos indica un aislamiento deficiente.",
            icon: (
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-red-100 text-red-600">
                <WrenchScrewdriverIcon className="w-8 h-8" />
              </div>
            ),
          },
          {
            title: "Inseguridad",
            description: "Cerraduras simples y vidrios finos hacen que tu vivienda sea vulnerable a robos.",
            icon: (
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-red-100 text-red-600">
                <LockClosedIcon className="w-8 h-8" />
              </div>
            ),
          },
        ]}
        columns={4}
        backgroundClassName="bg-gray-50"
      />
      <FeatureGrid
        title={
          <>
            Nuestros Servicios de
            <br />
            Ventanas y Cerramientos
          </>
        }
        subtitle="Soluciones completas en aluminio y PVC para cualquier necesidad."
        features={solutions}
        columns={4}
        paddingClassName="py-20 md:py-24"
      />
      <FeatureGrid
        title={
          <>
            Beneficios de Renovar
            <br />
            tus Ventanas
          </>
        }
        subtitle="Una inversión inteligente que se amortiza mes a mes con el ahorro energético."
        features={benefits}
        columns={3}
        backgroundClassName="bg-gray-50"
      />
      <TestimonialsCarousel
        title="Opiniones de Clientes Satisfechos"
        subtitle="Descubre cómo ha mejorado el confort en los hogares de nuestros clientes tras cambiar sus ventanas."
        testimonials={[
          {
            text: "Cambiamos las ventanas viejas de madera por unas de PVC y el cambio es brutal. Ya no oímos los autobuses y la casa mantiene el calor mucho mejor.",
            initials: "ML",
            name: "Marta L.",
            location: "Barcelona"
          },
          {
            text: "Nos asesoraron muy bien sobre qué vidrio poner porque nos da mucho el sol por la tarde. Ahora el salón no es un horno en verano.",
            initials: "JR",
            name: "Jordi R.",
            location: "Sabadell"
          },
          {
            text: "Instalación rápida y limpia. En dos días teníamos todas las ventanas del piso cambiadas y se llevaron las viejas. Muy profesionales.",
            initials: "EG",
            name: "Elena G.",
            location: "Terrassa"
          },
          {
            text: "Pusimos cerramientos de aluminio en la terraza y hemos ganado una habitación más para todo el año. El aislamiento es excelente.",
            initials: "PC",
            name: "Pere C.",
            location: "Badalona"
          },
          {
            text: "Muy contentos con las nuevas ventanas oscilobatientes. Ventilan genial y cierran herméticamente. Se nota mucho la calidad.",
            initials: "SN",
            name: "Sonia N.",
            location: "Sant Cugat"
          },
          {
            text: "Reformix nos tramitó todo para las ayudas de eficiencia energética. Un servicio muy completo y las ventanas son preciosas.",
            initials: "DA",
            name: "David A.",
            location: "L'Hospitalet"
          }
        ]}
      />
      {(() => {
        const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://www.reformix.barcelona';
        const faqs = [
          {
            question: "¿Qué es mejor, aluminio o PVC?",
            answer: "El PVC ofrece un aislamiento térmico superior por naturaleza y mejor precio. El aluminio permite perfiles más finos, más luz y colores, pero requiere Rotura de Puente Térmico (RPT) para igualar el aislamiento. Te ayudamos a elegir según tu prioridad."
          },
          {
            question: "¿Quanto se ahorra cambiando las ventanas?",
            answer: "Se estima que hasta un 30% de la energía se pierde por las ventanas. Con unas nuevas de alta eficiencia, notarás una reducción significativa en tus facturas desde el primer mes."
          },
          {
            question: "¿Hacéis obras si hay que cambiar el tamaño?",
            answer: "Sí, contamos con albañiles propios para modificar huecos, instalar premarcos o reparar el alféizar si fuera necesario durante el cambio de ventanas."
          },
          {
            question: "¿Qué es la Rotura de Puente Térmico (RPT)?",
            answer: "Es una pieza plástica que se inserta dentro del perfil de aluminio para romper la conductividad del metal, evitando que el frío o calor exterior pase al interior del marco y eliminando la condensación."
          },
          {
            question: "¿Tramitáis subvenciones?",
            answer: "Te facilitamos toda la documentación técnica necesaria (fichas de producto, marcado CE) para que puedas solicitar las ayudas y deducciones fiscales por mejora de eficiencia energética vigentes."
          },
          {
            question: "¿Cuánto tardáis en instalar?",
            answer: "Una vivienda estándar suele completarse en 1 o 2 días. Nuestros equipos son rápidos y limpios, minimizando las molestias."
          }
        ];
        const faqSchema = generateFAQSchema(faqs);
        const serviceSchema = generateServiceSchema({
          name: "Ventanas y Aluminio en Barcelona | Aislamiento Térmico",
          description: "Instalación de ventanas de aluminio y PVC en Barcelona. Mejora el aislamiento térmico y acústico de tu hogar.",
          provider: {
            '@type': 'HomeAndConstructionBusiness',
            name: 'Reformix Barcelona',
          },
          serviceType: 'Window Installation Services',
          url: '/ventanas',
        });
        const breadcrumbSchema = generateBreadcrumbSchema([
          { name: 'Inicio', url: '/' },
          { name: 'Servicios Técnicos', url: '/servicios-tecnicos' },
          { name: 'Ventanas', url: '/ventanas' },
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
        title="Mejora el Confort de tu Hogar"
        description="Contacta con nosotros para un presupuesto de ventanas nuevas. Empieza a ahorrar energía y gana en tranquilidad hoy mismo."
        buttonText="Solicitar Presupuesto de Ventanas"
        buttonHref="/contacto"
        features={[
          "Visita y medición gratuita",
          "Financiación a medida",
          "Garantía de instalación"
        ]}
      />
    </>
  );
}
