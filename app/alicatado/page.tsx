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
  Squares2X2Icon,
  ShieldCheckIcon,
  SparklesIcon,
  HomeIcon,
  EyeIcon,
  ChartBarIcon,
  WrenchScrewdriverIcon,
  ExclamationTriangleIcon,
  BuildingOfficeIcon,
} from '@heroicons/react/24/solid';

export const metadata: Metadata = {
  title: "Alicatado y Solados en Barcelona y Vallès | Reformix",
  description: "Servicio de alicatado y colocación de suelos en Barcelona. Expertos en cerámica, porcelánico y piedra. Acabados nivelados y duraderos. ¡Pide presupuesto!",
  ...generateStandardMetadata({
    title: "Alicatado y Solados en Barcelona y Vallès | Reformix",
    description: "Servicio de alicatado y colocación de suelos en Barcelona. Expertos en cerámica, porcelánico y piedra. Acabados nivelados y duraderos. ¡Pide presupuesto!",
    url: "https://reformix.barcelona/alicatado",
    pagePath: "/alicatado",
    keywords: ["alicatado barcelona", "solados barcelona", "colocación cerámica", "reformar baño azulejos", "precio m2 alicatado"],
  }),
};

export default async function AlicatadoPage() {
  const features = [
    {
      title: "Precisión Milimétrica",
      description: "Nivelación perfecta y juntas uniformes para un acabado profesional sin 'cejas' ni escalones.",
      icon: (
        <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-brand-primary/10 text-brand-primary">
          <Squares2X2Icon className="w-8 h-8" />
        </div>
      ),
    },
    {
      title: "Todo Tipo de Materiales",
      description: "Trabajamos con cerámica, gres, porcelánico, mosaico, hidráulico y piedra natural.",
      icon: (
        <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-brand-primary/10 text-brand-primary">
          <HomeIcon className="w-8 h-8" />
        </div>
      ),
    },
    {
      title: "Preparación del Soporte",
      description: "Impermeabilización y nivelación previa para garantizar la máxima adherencia y durabilidad.",
      icon: (
        <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-brand-primary/10 text-brand-primary">
          <WrenchScrewdriverIcon className="w-8 h-8" />
        </div>
      ),
    },
    {
      title: "Limpieza y Orden",
      description: "Mantenemos la zona de trabajo limpia y protegida durante y después de la instalación.",
      icon: (
        <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-brand-primary/10 text-brand-primary">
          <SparklesIcon className="w-8 h-8" />
        </div>
      ),
    },
  ];

  const solutions = [
    {
      title: "Alicatado de Baños y Cocinas",
      description: "Renovación completa de revestimientos verticales con las últimas tendencias y formatos (rectificados, gran formato).",
      icon: (
        <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-brand-primary/10 text-brand-primary">
          <HomeIcon className="w-8 h-8" />
        </div>
      ),
    },
    {
      title: "Solados y Pavimentos",
      description: "Instalación de suelos cerámicos, porcelánicos y de piedra en interiores y exteriores (terrazas, balcones).",
      icon: (
        <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-brand-primary/10 text-brand-primary">
          <Squares2X2Icon className="w-8 h-8" />
        </div>
      ),
    },
    {
      title: "Mosaicos y Decorativos",
      description: "Colocación precisa de gresite, baldosas hidráulicas y piezas especiales para crear detalles únicos.",
      icon: (
        <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-brand-primary/10 text-brand-primary">
          <SparklesIcon className="w-8 h-8" />
        </div>
      ),
    },
  ];

  const benefits = [
    {
      title: "Durabilidad Extrema",
      description: "Un buen alicatado, bien instalado, resiste el paso del tiempo, la humedad y el uso intensivo durante décadas.",
      icon: (
        <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-brand-primary/10 text-brand-primary">
          <ShieldCheckIcon className="w-8 h-8" />
        </div>
      ),
    },
    {
      title: "Estética y Valor",
      description: "Renueva por completo la imagen de tu hogar. Un suelo o baño bien alicatado aumenta inmediatamente el valor percibido de la vivienda.",
      icon: (
        <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-brand-primary/10 text-brand-primary">
          <ChartBarIcon className="w-8 h-8" />
        </div>
      ),
    },
    {
      title: "Fácil Mantenimiento",
      description: "Superficies higiénicas, impermeables y fáciles de limpiar, ideales para zonas húmedas y de mucho tránsito.",
      icon: (
        <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-brand-primary/10 text-brand-primary">
          <EyeIcon className="w-8 h-8" />
        </div>
      ),
    },
  ];

  return (
    <>
      <Hero
        title="Servicio de Alicatado y Solados"
        titleLines={[
          "Servicio de Alicatado y Solados"
        ]}
        subtitle="La base perfecta para tu reforma. Colocación experta de cerámica, porcelánico y piedra natural con acabados impecables y duraderos."
        primaryCTA={{
          text: "Calcular Presupuesto de Alicatado",
          href: "/contacto"
        }}
        backgroundImage="/images/alicatado-y-solados.png"
        overlayOpacity="stronger"
      />
      <FeatureGrid
        title="La Importancia de una Buena Colocación"
        subtitle="El alicatado es la piel de tu reforma. Una instalación profesional garantiza estética, durabilidad y ausencia de problemas futuros."
        features={features}
        columns={4}
      />
      <AboutSection
        logoPath="/images/reformix-logo-vertical-white.png"
        text="En Reformix Barcelona, somos especialistas en la colocación de revestimientos y pavimentos. Desde el baño más pequeño hasta grandes superficies comerciales, nuestro equipo de alicatadores garantiza una instalación técnica y estética de primer nivel. Entendemos que el alicatado es la parte más visible de tu reforma y cuidamos cada detalle, desde el replanteo inicial hasta el rejuntado final."
      />
      <FeatureGrid
        title={
          <>
            Riesgos de una Mala
            <br />
            Colocación de Azulejos
          </>
        }
        subtitle="Un alicatado mal ejecutado no solo es antiestético, sino que puede generar problemas estructurales y de seguridad a largo plazo."
        features={[
          {
            title: "Piezas Desniveladas",
            description: "Las temidas 'cejas' o escalones entre baldosas que arruinan la estética y pueden provocar tropiezos peligrosos.",
            icon: (
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-red-100 text-red-600">
                <ExclamationTriangleIcon className="w-8 h-8" />
              </div>
            ),
          },
          {
            title: "Juntas Irregulares",
            description: "Separaciones desiguales, mal alineadas o con falta de material que acumulan suciedad y afean el acabado final.",
            icon: (
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-red-100 text-red-600">
                <Squares2X2Icon className="w-8 h-8" />
              </div>
            ),
          },
          {
            title: "Desprendimientos",
            description: "Piezas que suenan a hueco o se despegan con el tiempo debido a una mala preparación del soporte o uso de adhesivo incorrecto.",
            icon: (
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-red-100 text-red-600">
                <ShieldCheckIcon className="w-8 h-8" />
              </div>
            ),
          },
          {
            title: "Cortes Imperfectos",
            description: "Remates chapuceros en esquinas, desagües, enchufes y encuentros con otros materiales que denotan falta de profesionalidad.",
            icon: (
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-red-100 text-red-600">
                <WrenchScrewdriverIcon className="w-8 h-8" />
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
            Nuestro Servicio de Alicatado:
            <br />
            Técnica y Estética
          </>
        }
        subtitle="Ofrecemos soluciones completas para revestimientos y pavimentos, adaptándonos a las necesidades de tu proyecto."
        features={solutions}
        columns={3}
        paddingClassName="py-20 md:py-24"
      />
      <FeatureGrid
        title={
          <>
            Beneficios de un
            <br />
            Alicatado Profesional
          </>
        }
        subtitle="Más allá de la estética, un trabajo bien hecho asegura la longevidad y funcionalidad de tus espacios."
        features={benefits}
        columns={3}
        backgroundClassName="bg-gray-50"
      />
      <TestimonialsCarousel
        title="Opiniones de Nuestros Clientes"
        subtitle="La satisfacción de nuestros clientes en Barcelona y el Vallès es nuestra mejor garantía. Descubre lo que dicen sobre nuestros trabajos de alicatado."
        testimonials={[
          {
            text: "Tenía miedo de poner rectificado en el baño porque se notan mucho los fallos, pero quedó perfecto. Las juntas son mínimas y las esquinas están impecables.",
            initials: "LG",
            name: "Laura G.",
            location: "Barcelona"
          },
          {
            text: "Cambiamos el suelo de todo el piso por porcelánico imitación madera. El nivelado es excelente, no se nota ningún escalón. Muy profesionales y limpios.",
            initials: "CM",
            name: "Carlos M.",
            location: "Terrassa"
          },
          {
            text: "Hicieron un mosaico en la ducha que requería mucha precisión y el resultado es de revista. Se nota que saben lo que hacen y cuidan los detalles.",
            initials: "SR",
            name: "Sofía R.",
            location: "Sant Cugat"
          },
          {
            text: "Reformix se encargó del alicatado de mi cocina y baño. Cumplieron con los plazos y el acabado es de primera calidad. Recomendables 100%.",
            initials: "JP",
            name: "Jordi P.",
            location: "Badalona"
          },
          {
            text: "Muy contenta con el servicio. Me asesoraron sobre qué tipo de suelo poner en la terraza y la instalación ha quedado perfecta, con las pendientes adecuadas.",
            initials: "AN",
            name: "Ana N.",
            location: "Sabadell"
          },
          {
            text: "Profesionalidad y limpieza. Se nota la experiencia en cómo han resuelto los encuentros difíciles con las puertas y el rodapié. Un trabajo fino.",
            initials: "DR",
            name: "David R.",
            location: "L'Hospitalet"
          }
        ]}
      />
      {(() => {
        const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://reformix.barcelona';
        const faqs = [
          {
            question: "¿Qué tipo de azulejo es mejor para el baño?",
            answer: "Recomendamos porcelánico por su nula absorción de agua y gran resistencia, aunque la pasta blanca también es excelente para revestimientos de pared por su variedad de diseños. Te asesoramos para elegir la mejor opción."
          },
          {
            question: "¿Se puede alicatar sobre el azulejo antiguo?",
            answer: "Sí, es posible utilizando puentes de unión específicos, siempre que el azulejo antiguo esté bien adherido. Sin embargo, para un resultado óptimo y ganar espacio, solemos recomendar retirar el antiguo y sanear la base."
          },
          {
            question: "¿Cuánto se tarda en alicatar un baño completo?",
            answer: "Depende del tamaño y complejidad, pero generalmente entre 3 y 5 días: uno para preparación/nivelación, dos para colocación y uno para rejuntado y limpieza final."
          },
          {
            question: "¿Incluís el material de agarre en el presupuesto?",
            answer: "Sí, siempre utilizamos cementos cola de alta gama (tipo C2TE S1) adecuados para cada material y soporte, garantizando la máxima adherencia y durabilidad."
          },
          {
            question: "¿Hacéis también el derribo y desescombro?",
            answer: "Sí, nos encargamos de todo el proceso: picado del azulejo antiguo, ensacado, bajada de runa y transporte a vertedero autorizado."
          },
          {
            question: "¿Trabajáis con grandes formatos?",
            answer: "Sí, somos especialistas en la colocación de láminas cerámicas de gran formato, que requieren herramientas y técnicas específicas para asegurar una planimetría perfecta."
          }
        ];
        const faqSchema = generateFAQSchema(faqs);
        const serviceSchema = generateServiceSchema({
          name: "Servicio de Alicatado y Solados en Barcelona | Acabados Perfectos",
          description: "Servicio de alicatado y colocación de suelos en Barcelona. Expertos en cerámica, porcelánico y piedra. Acabados nivelados y duraderos.",
          provider: {
            '@type': 'HomeAndConstructionBusiness',
            name: 'Reformix Barcelona',
          },
          serviceType: 'Tiling Services',
          url: '/alicatado',
        });
        const breadcrumbSchema = generateBreadcrumbSchema([
          { name: 'Inicio', url: '/' },
          { name: 'Servicios Técnicos', url: '/servicios-tecnicos' },
          { name: 'Alicatado', url: '/alicatado' },
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
        title="¿Listo para Renovar tus Suelos y Paredes?"
        description="Contacta con nosotros para un presupuesto detallado de alicatado. Garantizamos acabados perfectos, durabilidad y limpieza."
        buttonText="Solicitar Presupuesto de Alicatado"
        buttonHref="/contacto"
        features={[
          "Visita y presupuesto sin compromiso",
          "Materiales de alta calidad",
          "Garantía por escrito"
        ]}
      />
    </>
  );
}
