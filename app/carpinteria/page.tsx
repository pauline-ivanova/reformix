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
  CubeIcon,
  SparklesIcon,
  ArrowPathIcon,
  CheckCircleIcon,
  HomeIcon,
  ChartBarIcon,
  EyeIcon,
  ArchiveBoxIcon,
} from '@heroicons/react/24/solid';

export const metadata: Metadata = {
  title: "Servicios de Carpintería para Reformas en Barcelona",
  description: "Instalación de puertas de paso, armarios empotrados, rodapiés y panelados en Barcelona y Vallès Occidental. Acabados perfectos para tu reforma.",
  ...generateStandardMetadata({
    title: "Servicios de Carpintería para Reformas en Barcelona",
    description: "Instalación de puertas de paso, armarios empotrados, rodapiés y panelados en Barcelona y Vallès Occidental. Acabados perfectos para tu reforma.",
    url: "https://reformix.barcelona/carpinteria",
    pagePath: "/carpinteria",
    keywords: ["carpintería para reformas", "carpintería Barcelona", "armarios a medida", "puertas Barcelona"],
  }),
};

export default async function CarpinteriaPage() {
  const features = [
    {
      title: "Mediciones Exactas",
      description: "Planificamos cada milímetro para un ajuste perfecto y sin holguras.",
      icon: (
        <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-brand-primary/10 text-brand-primary">
          <CubeIcon className="w-8 h-8" />
        </div>
      ),
    },
    {
      title: "Materiales de Calidad",
      description: "Trabajamos con proveedores de confianza para garantizar un acabado duradero.",
      icon: (
        <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-brand-primary/10 text-brand-primary">
          <SparklesIcon className="w-8 h-8" />
        </div>
      ),
    },
    {
      title: "Coordinación de Obra",
      description: "Nos sincronizamos con albañiles y pintores para un flujo de trabajo eficiente.",
      icon: (
        <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-brand-primary/10 text-brand-primary">
          <ArrowPathIcon className="w-8 h-8" />
        </div>
      ),
    },
    {
      title: "Acabados Impecables",
      description: "Supervisamos cada junta, bisagra y remate para un resultado final de revista.",
      icon: (
        <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-brand-primary/10 text-brand-primary">
          <CheckCircleIcon className="w-8 h-8" />
        </div>
      ),
    },
  ];

  const solutions = [
    {
      title: "Instalación de Puertas de Paso",
      description: "Montamos puertas abatibles o correderas, asegurando un ajuste perfecto y un funcionamiento suave.",
      icon: (
        <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-brand-primary/10 text-brand-primary">
          <HomeIcon className="w-8 h-8" />
        </div>
      ),
    },
    {
      title: "Frentes de Armario y Vestidores",
      description: "Creamos frentes de armario a medida y diseñamos interiores de vestidores para maximizar el almacenaje.",
      icon: (
        <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-brand-primary/10 text-brand-primary">
          <ArchiveBoxIcon className="w-8 h-8" />
        </div>
      ),
    },
    {
      title: "Instalación de Parquet y Rodapiés",
      description: "Colocamos suelos laminados o de madera y rematamos con rodapiés de alta calidad para un acabado perfecto.",
      icon: (
        <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-brand-primary/10 text-brand-primary">
          <HomeIcon className="w-8 h-8" />
        </div>
      ),
    },
    {
      title: "Panelados Decorativos",
      description: "Revestimos paredes con paneles para crear cabeceros, murales de TV o dar un toque de calidez.",
      icon: (
        <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-brand-primary/10 text-brand-primary">
          <EyeIcon className="w-8 h-8" />
        </div>
      ),
    },
  ];

  const benefits = [
    {
      title: "Estética y Estilo Unificado",
      description: "Transforma por completo la atmósfera de tu hogar. La madera bien trabajada unifica el estilo, aporta una calidez inigualable y crea una sensación de acabado de revista.",
      icon: (
        <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-brand-primary/10 text-brand-primary">
          <EyeIcon className="w-8 h-8" />
        </div>
      ),
    },
    {
      title: "Optimización del Espacio",
      description: "Gana metros útiles donde antes no los había. Con soluciones inteligentes como armarios empotrados o vestidores, multiplicamos tu capacidad de almacenaje.",
      icon: (
        <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-brand-primary/10 text-brand-primary">
          <ArchiveBoxIcon className="w-8 h-8" />
        </div>
      ),
    },
    {
      title: "Revalorización de la Vivienda",
      description: "Es una inversión tangible que se nota en el mercado. Un parquet de calidad, puertas macizas y buenos acabados son detalles que elevan el precio de tu vivienda.",
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
        title="Carpintería para Reformas en Barcelona y Vallès Occidental"
        titleLines={[
          "Carpintería para Reformas",
          "en Barcelona",
          "y Vallès Occidental"
        ]}
        subtitle="Los detalles marcan la diferencia. Creamos acabados de madera que aportan calidez, estilo y funcionalidad a tu hogar. Precisión, calidad y perfecta integración con el resto de la obra."
        primaryCTA={{
          text: "Solicitar Presupuesto",
          href: "/contacto"
        }}
        backgroundImage="/images/carpinteria-en-barcelona.webp"
      />
      <FeatureGrid
        title="Precisión y Calidad en Cada Detalle"
        subtitle="Nuestro compromiso se basa en la exactitud de las mediciones, la calidad de los materiales y una coordinación impecable."
        features={features}
        columns={4}
      />
      <AboutSection
        logoPath="/images/reformix-logo-vertical-white.png"
        text="Nuestros carpinteros en Barcelona y el Vallès Occidental son artesanos con años de experiencia en la integración de soluciones de madera en proyectos de reforma. Entendemos que la carpintería no es un elemento aislado, sino el toque final que une y da coherencia a todo el espacio. Por eso, planificamos nuestro trabajo en perfecta sintonía con el resto de oficios, garantizando un resultado estético y funcional."
      />
      <FeatureGrid
        title={
          <>
            Carpintería para Reformas:
            <br />
            el Detalle que Define el Éxito
          </>
        }
        subtitle="Puedes tener paredes perfectas y una distribución ideal, pero una puerta mal ajustada o un rodapié con huecos darán un aspecto descuidado a toda tu inversión. Estos son los errores que marcan la diferencia."
        features={[
          {
            title: "Puertas que Rozan o no Cierran",
            description: "Un error de milímetros que se convierte en una molestia diaria, restando confort y sensación de calidad a tu nuevo hogar.",
            icon: (
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-brand-primary/10 text-brand-primary">
                <HomeIcon className="w-8 h-8" />
              </div>
            ),
          },
          {
            title: "Rodapiés y Juntas con Huecos",
            description: "Separaciones y ángulos mal rematados que atraen la mirada y delatan un trabajo de baja calidad, devaluando el resultado de toda la reforma.",
            icon: (
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-brand-primary/10 text-brand-primary">
                <CubeIcon className="w-8 h-8" />
              </div>
            ),
          },
          {
            title: "Armarios Poco Prácticos",
            description: "Soluciones de almacenaje que no optimizan el espacio, con distribuciones interiores que no se adaptan a tu ropa y tus hábitos.",
            icon: (
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-brand-primary/10 text-brand-primary">
                <ArchiveBoxIcon className="w-8 h-8" />
              </div>
            ),
          },
          {
            title: "Mala Coordinación con Pintura",
            description: "Tener que hacer retoques de pintura o, peor aún, repintar paredes porque la instalación se hizo en el momento equivocado, generando retrasos y costes extra.",
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
        title="Soluciones de Carpintería para tu Reforma"
        subtitle="Integramos la madera en tu proyecto para crear espacios más bellos, organizados y funcionales."
        features={solutions}
        columns={4}
        backgroundClassName="bg-gray-50"
        paddingClassName="py-20"
      />
      <FeatureGrid
        title={
          <>
            Invierte en Carpintería:
            <br />
            Aumenta el Valor y Confort
            <br />
            de tu Hogar
          </>
        }
        subtitle="Una carpintería de calidad no es un gasto, es una inversión en el futuro de tu vivienda. Transforma la estética, multiplica la funcionalidad y aumenta su valor de mercado de forma tangible."
        features={benefits}
        columns={3}
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
                description:
                  "Visitamos tu vivienda, escuchamos tus problemas (ruido, frío, calor) y, si es necesario, usamos una cámara térmica para detectar puentes térmicos. Te proponemos la mejor solución.",
              },
              {
                title: "Elección del Material y Presupuesto",
                description:
                  "Te explicamos las ventajas de cada tipo de aislante para tu caso y te entregamos un presupuesto cerrado y detallado.",
              },
              {
                title: "Planificación de los Trabajos",
                description:
                  "Organizamos la intervención para realizarla en el menor tiempo posible y con las mínimas molestias, protegiendo el mobiliario y las zonas de paso.",
              },
              {
                title: "Instalación Profesional",
                description:
                  "Nuestro equipo cualificado instala el sistema de aislamiento (trasdosados, falsos techos, SATE) siguiendo estrictamente las especificaciones del fabricante.",
              },
              {
                title: "Acabados y Limpieza",
                description:
                  "Dejamos las paredes y techos perfectamente acabados (listos para pintar o pintados) y realizamos una limpieza completa de la zona de trabajo.",
              },
              {
                title: "Verificación y Garantía",
                description:
                  "Comprobamos la correcta ejecución (sellados, encuentros y posibles puentes térmicos), resolvemos ajustes finales y te entregamos la garantía por escrito.",
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
        title="Nuestros Clientes lo Confirman: los Detalles Importan"
        subtitle="La diferencia entre una reforma buena y una excelente está en los acabados. Lee por qué nuestros clientes en Barcelona y el Vallès Occidental destacan la precisión y el cuidado de nuestro equipo de carpintería."
        testimonials={[
          {
            text: "Con Reformix cambiamos los frentes de armario por diseños modernos y funcionales. La diferencia se nota cada día.",
            initials: "DM",
            name: "David M.",
            location: "Barcelona (Eixample)"
          },
          {
            text: "Queríamos aprovechar un rincón del dormitorio y nos hicieron un armario a medida. Encajó perfecto y solucionó el problema de espacio.",
            initials: "CS",
            name: "Clara S.",
            location: "Terrassa"
          },
          {
            text: "Irina nos ayudó a elegir las maderas y tonos. Ahora tenemos puertas elegantes que combinan con todo el interior.",
            initials: "AT",
            name: "Albert T.",
            location: "Sant Cugat del Vallès"
          },
          {
            text: "Nos instalaron estanterías de madera en el salón y el resultado es práctico y decorativo al mismo tiempo.",
            initials: "MV",
            name: "Marta V.",
            location: "Barcelona (Gràcia)"
          },
          {
            text: "El cambio de los armarios fue rápido y sin complicaciones. El piso parece mucho más ordenado y luminoso.",
            initials: "JP",
            name: "Jordi P.",
            location: "Cerdanyola del Vallès"
          },
          {
            text: "Nos instalaron nuevas puertas y rodapiés en todo el piso. El acabado es impecable y le dio un aire totalmente renovado.",
            initials: "LG",
            name: "Laura G.",
            location: "Sabadell"
          },
        ]}
      />
      {(() => {
        const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://reformix.barcelona';
        const faqs = [
          {
            question: "¿Qué tipo de trabajos de carpintería realizáis?",
            answer: "Nos especializamos en carpintería integrada en la obra: fabricación e instalación de puertas de paso, armarios empotrados, vestidores, estanterías de Pladur o madera, y revestimientos decorativos. No fabricamos muebles exentos como mesas o sillas."
          },
          {
            question: "¿Instaláis puertas que he comprado yo?",
            answer: "Sí, podemos instalar materiales que tú proporciones, aunque siempre recomendamos opciones de proveedores de confianza para garantizar la calidad."
          },
          {
            question: "¿Cuánto se tarda en cambiar las puertas de un piso?",
            answer: "Normalmente, entre 2 y 4 días, dependiendo del número de puertas y si hay que modificar los marcos."
          },
          {
            question: "¿Qué es mejor, parquet laminado o de madera?",
            answer: "Depende de tu presupuesto y estilo de vida. El laminado es más resistente y económico, mientras que la madera natural aporta una calidez inigualable. Te asesoramos."
          },
          {
            question: "¿Retiráis las puertas y marcos antiguos?",
            answer: "Sí, nuestro servicio incluye el desmontaje y la retirada a un punto limpio autorizado de todos los elementos antiguos."
          },
          {
            question: "¿La instalación de parquet incluye el rodapié?",
            answer: "Sí, siempre. Un buen suelo no está completo sin un rodapié bien instalado. El presupuesto siempre incluye ambas partidas."
          }
        ];
        const faqSchema = generateFAQSchema(faqs);
        const serviceSchema = generateServiceSchema({
          name: "Servicios de Carpintería para Reformas en Barcelona",
          description: "Instalación de puertas de paso, armarios empotrados, rodapiés y panelados en Barcelona y Vallès Occidental. Acabados perfectos para tu reforma.",
          provider: {
            '@type': 'HomeAndConstructionBusiness',
            name: 'Reformix Barcelona',
          },
          serviceType: 'Carpentry Services',
          url: '/carpinteria',
        });
        const breadcrumbSchema = generateBreadcrumbSchema([
          { name: 'Inicio', url: '/' },
          { name: 'Servicios Técnicos', url: '/servicios-tecnicos' },
          { name: 'Carpintería', url: '/carpinteria' },
        ]);
        
        return (
          <>
            {faqSchema && <JsonLd data={faqSchema} />}
            {serviceSchema && <JsonLd data={serviceSchema} />}
            {breadcrumbSchema && <JsonLd data={breadcrumbSchema} />}
            <FAQTwoColumn titleLines={["Preguntas Frecuentes", "sobre Carpintería en Reformas"]} items={faqs} />
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
            Da el Toque Final a tu Reforma
            <br />
            con Carpintería de Calidad
          </>
        }
        description="Desde puertas y armarios hasta soluciones a medida, nuestro equipo de carpinteros en Barcelona y el Vallès está listo para materializar tus ideas. Solicita un presupuesto sin compromiso y asegura acabados perfectos."
        buttonText="Solicitar Presupuesto Ahora"
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

