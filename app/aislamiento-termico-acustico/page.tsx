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
  ChartBarIcon,
  ShieldCheckIcon,
  UserGroupIcon,
  DocumentCheckIcon,
  HomeIcon,
  LightBulbIcon,
  SparklesIcon,
  BuildingOfficeIcon,
  SpeakerWaveIcon,
  SunIcon,
  CloudIcon,
  Square3Stack3DIcon,
  AdjustmentsHorizontalIcon,
} from '@heroicons/react/24/solid';
import { CubeTransparentIcon } from '@heroicons/react/24/outline';

export const metadata: Metadata = {
  title: "Aislamiento Térmico y Acústico en Barcelona",
  description: "Expertos en aislamiento térmico y acústico en Barcelona y Vallès Occidental. Mejora el confort, reduce el ruido y ahorra en tus facturas de energía.",
  ...generateStandardMetadata({
    title: "Aislamiento Térmico y Acústico en Barcelona",
    description: "Expertos en aislamiento térmico y acústico en Barcelona y Vallès Occidental. Mejora el confort, reduce el ruido y ahorra en tus facturas de energía.",
    url: "https://www.reformix.barcelona/aislamiento-termico-acustico",
    pagePath: "/aislamiento-termico-acustico",
    keywords: ["aislamiento termico Barcelona", "aislamiento acustico Barcelona", "SATE Barcelona", "aislamiento vivienda"],
  }),
};

export default async function AislamientoTermicoAcusticoPage() {
  const features = [
    {
      title: "Análisis Termográfico",
      description: "Opcionalmente, realizamos un estudio con cámara térmica para detectar los principales puentes térmicos y actuar donde es más necesario.",
      icon: (
        <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-brand-primary/10 text-brand-primary">
          <ChartBarIcon className="w-8 h-8" />
        </div>
      ),
    },
    {
      title: "Materiales Certificados",
      description: "Trabajamos solo con aislantes de primeras marcas (lana de roca, XPS, SATE) que garantizan el máximo rendimiento.",
      icon: (
        <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-brand-primary/10 text-brand-primary">
          <ShieldCheckIcon className="w-8 h-8" />
        </div>
      ),
    },
    {
      title: "Instaladores Cualificados",
      description: "Nuestro equipo propio está formado en la correcta instalación de cada tipo de aislante para evitar fallos.",
      icon: (
        <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-brand-primary/10 text-brand-primary">
          <UserGroupIcon className="w-8 h-8" />
        </div>
      ),
    },
    {
      title: "Ahorro Demostrable",
      description: "Te asesoramos sobre cómo el aislamiento impactará en tu certificado energético y en tus facturas.",
      icon: (
        <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-brand-primary/10 text-brand-primary">
          <DocumentCheckIcon className="w-8 h-8" />
        </div>
      ),
    },
  ];

  const solutions = [
    {
      title: "Aislamiento de Paredes Interiores",
      description: "Instalamos trasdosados de pladur con lana de roca o mineral, una solución muy eficaz para aislar del frío/calor y del ruido de los vecinos.",
      icon: (
        <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-brand-primary/10 text-brand-primary">
          <BuildingOfficeIcon className="w-8 h-8" />
        </div>
      ),
    },
    {
      title: "Aislamiento de Techos",
      description: "Creamos falsos techos con material aislante para reducir el ruido del piso superior y evitar la pérdida de calor por el techo.",
      icon: (
        <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-brand-primary/10 text-brand-primary">
          <AdjustmentsHorizontalIcon className="w-8 h-8" />
        </div>
      ),
    },
    {
      title: "Aislamiento de Fachadas (SATE)",
      description: "Aplicamos el Sistema de Aislamiento Térmico por el Exterior (SATE), la solución más completa para eliminar puentes térmicos y renovar la fachada.",
      icon: (
        <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-brand-primary/10 text-brand-primary">
          <Square3Stack3DIcon className="w-8 h-8" />
        </div>
      ),
    },
  ];

  const benefits = [
    {
      title: "Ahorro Económico Directo",
      description: "Reduce drásticamente el consumo en calefacción y aire acondicionado. La inversión se amortiza con el ahorro en las facturas.",
      icon: (
        <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-brand-primary/10 text-brand-primary">
          <DocumentCheckIcon className="w-8 h-8" />
        </div>
      ),
    },
    {
      title: "Mayor Confort y Bienestar",
      description: "Disfruta de una temperatura estable todo el año y de un ambiente silencioso y tranquilo en tu propio hogar.",
      icon: (
        <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-brand-primary/10 text-brand-primary">
          <HomeIcon className="w-8 h-8" />
        </div>
      ),
    },
    {
      title: "Mejora la Calificación Energética",
      description: "Un buen aislamiento mejora la letra de tu certificado energético, lo que revaloriza tu propiedad de cara a una futura venta o alquiler.",
      icon: (
        <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-brand-primary/10 text-brand-primary">
          <SparklesIcon className="w-8 h-8" />
        </div>
      ),
    },
  ];

  return (
    <>
      <Hero
        title="Aislamiento Térmico y Acústico en Barcelona y Vallès Occidental"
        titleLines={[
          "Aislamiento Térmico",
          "y Acústico en Barcelona",
          "y Vallès Occidental"
        ]}
        subtitle="Vive en confort todo el año, reduce el ruido exterior y ahorra hasta un 30% en tus facturas de calefacción y aire acondicionado. Mejoramos la eficiencia energética de tu hogar."
        primaryCTA={{
          text: "Mejora el Confort de tu Hogar",
          href: "/contacto"
        }}
        backgroundImage="/images/aislamiento-termico-en-barcelona.webp"
      />
      <FeatureGrid
        title={
          <>
            Soluciones de Aislamiento
            <br />
            Eficaces y Garantizadas
          </>
        }
        subtitle="Aplicamos las técnicas y materiales más avanzados para asegurar un resultado medible en confort y ahorro energético."
        features={features}
        columns={4}
      />
      <AboutSection
        logoPath="/images/reformix-logo-vertical-white.png"
        text="En Reformix Barcelona somos expertos en mejorar la eficiencia energética y el confort de viviendas y locales en Barcelona y el Vallès Occidental. Nuestro equipo técnico estudia cada caso para proponer la solución de aislamiento térmico o acústico más adecuada, utilizando materiales de primera calidad e instaladores propios para garantizar un resultado óptimo y duradero."
      />
      <FeatureGrid
        title={
          <>
            ¿Sufres de Ruido, Frío en Invierno
            <br />
            o Calor Excesivo en Verano?
          </>
        }
        subtitle="Una vivienda mal aislada no solo es incómoda, sino que también supone un gasto energético constante. Estos son los problemas que un buen aislamiento puede resolver de raíz."
        features={[
          {
            title: "Facturas de Energía Elevadas",
            description: "La principal consecuencia. La calefacción y el aire acondicionado \"se escapan\" por paredes, techos y ventanas mal aisladas.",
            icon: (
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-brand-primary/10 text-brand-primary">
                <DocumentCheckIcon className="w-8 h-8" />
              </div>
            ),
          },
          {
            title: "Ruidos Molestos del Exterior",
            description: "El tráfico, los vecinos o el ruido de la calle se cuelan en tu casa, impidiendo el descanso y la concentración.",
            icon: (
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-brand-primary/10 text-brand-primary">
                <SpeakerWaveIcon className="w-8 h-8" />
              </div>
            ),
          },
          {
            title: "Calor Sofocante en Verano",
            description: "Las paredes y techos se sobrecalientan y convierten tu casa en un horno, obligando a un uso excesivo del aire acondicionado.",
            icon: (
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-brand-primary/10 text-brand-primary">
                <SunIcon className="w-8 h-8" />
              </div>
            ),
          },
          {
            title: "Paredes Frías y Humedad",
            description: "Superficies frías al tacto que generan una sensación de desconfort constante y pueden provocar condensación y moho.",
            icon: (
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-brand-primary/10 text-brand-primary">
                <CloudIcon className="w-8 h-8" />
              </div>
            ),
          },
        ]}
        columns={4}
      />
      <FeatureGrid
        title={
          <>
            Soluciones Profesionales
            <br />
            para Aislar tu Vivienda
          </>
        }
        subtitle="Aplicamos diferentes técnicas de aislamiento en función del problema a resolver, siempre buscando la máxima eficacia y la mínima obra."
        features={solutions}
        columns={3}
        backgroundClassName="bg-gray-50"
        paddingClassName="py-20"
      />
      <FeatureGrid
        title={
          <>
            Más Confort en Casa,
            <br />
            Menos Gasto en Facturas
          </>
        }
        subtitle="Un buen aislamiento se traduce directamente en una mejor calidad de vida y en un ahorro visible desde la primera factura."
        features={benefits}
        columns={3}
      />
      <FeatureGrid
        title={
          <>
            El Material Adecuado
            <br />
            para Cada Necesidad
          </>
        }
        subtitle="Seleccionamos el aislante con el mejor rendimiento según la zona a tratar (paredes, techos) y el objetivo principal (térmico, acústico o ambos)."
        features={[
          {
            title: "Lana de Roca o Mineral",
            description: "Ideal para el interior de tabiques de pladur y falsos techos. Ofrece un excelente rendimiento tanto térmico como acústico y es ignífuga.",
            icon: (
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-brand-primary/10 text-brand-primary">
                <CloudIcon className="w-8 h-8" />
              </div>
            ),
          },
          {
            title: "Poliestireno Extruido (XPS)",
            description: "Planchas rígidas de alta densidad, perfectas para aislar paredes por el interior antes del trasdosado. Gran resistencia a la humedad.",
            icon: (
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-brand-primary/10 text-brand-primary">
                <CubeTransparentIcon className="w-8 h-8" />
              </div>
            ),
          },
          {
            title: "SATE (Sistema de Aislamiento Térmico por el Exterior)",
            description: "La solución más completa. Consiste en un panel aislante adherido al muro exterior y revestido con mortero. Elimina todos los puentes térmicos.",
            icon: (
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-brand-primary/10 text-brand-primary">
                <AdjustmentsHorizontalIcon className="w-8 h-8" />
              </div>
            ),
          },
        ]}
        columns={3}
        backgroundClassName="bg-gray-50"
        paddingClassName="py-20"
      />
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 max-w-6xl">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 text-brand-text-heading">
            Tu Vivienda, Más Eficiente
            <br />
            en 6 Pasos
          </h2>
          <p className="text-lg text-center text-brand-text-body mb-16 max-w-3xl mx-auto">
            Un proceso técnico y riguroso para garantizar la máxima efectividad del aislamiento.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Diagnóstico y Propuesta",
                description: "Visitamos tu vivienda, escuchamos tus problemas (ruido, frío, calor) y, si es necesario, usamos una cámara térmica para detectar puentes térmicos. Te proponemos la mejor solución.",
              },
              {
                title: "Elección del Material y Presupuesto",
                description: "Te explicamos las ventajas de cada tipo de aislante para tu caso y te entregamos un presupuesto cerrado y detallado.",
              },
              {
                title: "Planificación de los Trabajos",
                description: "Organizamos la intervención para realizarla en el menor tiempo posible y con las mínimas molestias, protegiendo el mobiliario y las zonas de paso.",
              },
              {
                title: "Instalación Profesional",
                description: "Nuestro equipo cualificado instala el sistema de aislamiento (trasdosados, falsos techos, SATE) siguiendo estrictamente las especificaciones del fabricante.",
              },
              {
                title: "Acabados y Limpieza",
                description: "Dejamos las paredes y techos perfectamente acabados (listos para pintar o pintados) y realizamos una limpieza completa de la zona de trabajo.",
              },
              {
                title: "Verificación y Garantía",
                description: "Comprobamos la correcta ejecución (sellados, encuentros y posibles puentes térmicos), resolvemos ajustes finales y te entregamos la garantía por escrito.",
              },
            ].map((step, index) => (
              <div key={index} className="bg-gray-50 rounded-lg p-6">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-brand-primary text-white flex items-center justify-center font-bold text-lg">
                    {index + 1}
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2 text-brand-text-heading">
                      {step.title}
                    </h3>
                    <p className="text-brand-text-body leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <TestimonialsCarousel
        title={
          <>
            Clientes que Han Redescubierto
            <br />
            el Confort en su Hogar
          </>
        }
        subtitle="Su experiencia tras aislar su vivienda con nosotros en Barcelona y el Vallès Occidental."
        testimonials={[
          {
            text: "Con Reformix conseguimos un piso más cálido en invierno y fresco en verano. Además, la factura de la luz ha bajado.",
            initials: "JR",
            name: "Jordi R.",
            location: "Sabadell"
          },
          {
            text: "Vivimos cerca de la vía del tren y se notaba mucho. Después de la obra, apenas se escucha nada y la casa es mucho más tranquila.",
            initials: "CP",
            name: "Clara P.",
            location: "Badalona"
          },
          {
            text: "El cambio térmico es evidente: la casa mantiene mejor la temperatura y resulta más cómoda en todas las estaciones.",
            initials: "LV",
            name: "Laura V.",
            location: "Barcelona (Gràcia)"
          },
          {
            text: "Antes siempre había corrientes frías. Ahora, gracias al aislamiento, la vivienda se siente acogedora y mucho más eficiente.",
            initials: "DG",
            name: "David G.",
            location: "Hospitalet de Llobregat"
          },
          {
            text: "Lo que más nos gustó fue la rapidez. Irina estuvo pendiente de cada detalle y el resultado es perfecto.",
            initials: "AT",
            name: "Albert T.",
            location: "Sant Cugat del Vallès"
          },
          {
            text: "El ruido del tráfico era constante. Tras el aislamiento, la diferencia es increíble: ahora podemos descansar en silencio.",
            initials: "MC",
            name: "Marta C.",
            location: "Barcelona (Eixample)"
          },
        ]}
      />
      {(() => {
        const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://www.reformix.barcelona';
        const faqs = [
          {
            question: "¿Se pierde mucho espacio al aislar por el interior?",
            answer: "Muy poco. Un trasdosado de pladur con un buen aislante suele tener un grosor total de entre 5 y 8 cm, una pérdida mínima para una ganancia de confort enorme."
          },
          {
            question: "¿Qué es más efectivo, aislar por dentro o por fuera (SATE)?",
            answer: "El SATE es la solución más completa porque elimina todos los puentes térmicos de la fachada. El aislamiento interior es una alternativa excelente cuando no se puede actuar por fuera."
          },
          {
            question: "¿Realmente se nota el ahorro en las facturas?",
            answer: "Sí, de forma significativa. Dependiendo del estado previo de la vivienda y la solución aplicada, el ahorro en climatización (frío/calor) puede llegar a superar el 30-40%."
          },
          {
            question: "¿El aislamiento térmico también sirve para el ruido?",
            answer: "Sí, muchos materiales como la lana de roca o la fibra de vidrio son excelentes aislantes tanto térmicos como acústicos, por lo que obtienes un doble beneficio."
          },
          {
            question: "¿Hay subvenciones para mejorar la eficiencia energética?",
            answer: "Sí, a menudo existen ayudas y subvenciones de la administración para obras que mejoran la eficiencia energética. Podemos informarte sobre las convocatorias vigentes."
          },
          {
            question: "Tengo humedades por condensación, ¿el aislamiento lo soluciona?",
            answer: "En la mayoría de los casos, sí. Al aislar una pared fría, se evita el contraste de temperaturas que provoca la condensación, eliminando el problema de raíz."
          }
        ];
        const faqSchema = generateFAQSchema(faqs);
        const serviceSchema = generateServiceSchema({
          name: "Aislamiento Térmico y Acústico en Barcelona",
          description: "Expertos en aislamiento térmico y acústico en Barcelona y Vallès Occidental. Mejora el confort, reduce el ruido y ahorra en tus facturas de energía.",
          provider: {
            '@type': 'HomeAndConstructionBusiness',
            name: 'Reformix Barcelona',
          },
          serviceType: 'Thermal and Acoustic Insulation',
          url: '/aislamiento-termico-acustico',
        });
        const breadcrumbSchema = generateBreadcrumbSchema([
          { name: 'Inicio', url: '/' },
          { name: 'Servicios Técnicos', url: '/servicios-tecnicos' },
          { name: 'Aislamiento Térmico y Acústico', url: '/aislamiento-termico-acustico' },
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
        title="¿Quieres una casa más confortable y eficiente?"
        description="Contacta con nosotros. Estudiaremos tu caso y te ofreceremos un presupuesto para la solución de aislamiento térmico o acústico que necesitas en Barcelona y el Vallès Occidental."
        buttonText="Pide tu Estudio y Presupuesto"
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

