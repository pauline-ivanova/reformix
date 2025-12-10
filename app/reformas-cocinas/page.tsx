import { ComponentType } from "react";
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
  SparklesIcon,
  CalendarDaysIcon,
  DocumentCheckIcon,
  HomeIcon,
  ChartBarIcon,
  LightBulbIcon,
  ShieldCheckIcon,
  PencilSquareIcon,
  CubeIcon,
  ArchiveBoxIcon,
  RectangleGroupIcon,
  BoltIcon,
  ClockIcon,
  ArrowTrendingUpIcon,
  WrenchScrewdriverIcon,
} from "@heroicons/react/24/solid";

export const metadata: Metadata = {
  title: "Reforma de Cocinas en Barcelona y Vallès Occidental",
  description: "Especialistas en reformas de cocinas en Barcelona y Vallès. Diseños funcionales, presupuesto cerrado y plazos garantizados. ¡Pide tu visita!",
  ...generateStandardMetadata({
    title: "Reforma de Cocinas en Barcelona y Vallès Occidental",
    description: "Especialistas en reformas de cocinas en Barcelona y Vallès. Diseños funcionales, presupuesto cerrado y plazos garantizados. ¡Pide tu visita!",
    url: "https://reformix.barcelona/reformas-cocinas",
    pagePath: "/reformas-cocinas",
    keywords: ["reforma cocina Barcelona", "reforma cocina Vallès", "diseño cocina Barcelona", "reforma cocina llave en mano"],
  }),
};

export default async function ReformasCocinasPage() {
  const icon = (IconComponent: ComponentType<{ className?: string }>) => (
    <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-brand-primary/10 text-brand-primary">
      <IconComponent className="w-8 h-8" />
    </div>
  );

  const features = [
    {
      title: "Diseño y Ergonomía",
      description: "Maximizamos cada centímetro. Creamos un 'triángulo de trabajo' eficiente para que cocinar sea un placer.",
      icon: icon(PencilSquareIcon),
    },
    {
      title: "Materiales de Calidad",
      description: "Solo trabajamos con proveedores de confianza para garantizar encimeras, muebles y herrajes duraderos.",
      icon: icon(CubeIcon),
    },
    {
      title: "Plazos Garantizados",
      description: "Sabemos que no puedes estar mucho tiempo sin cocina. Nos comprometemos por escrito con un calendario de obra.",
      icon: icon(CalendarDaysIcon),
    },
    {
      title: "Presupuesto Sin Sorpresas",
      description: "Detallamos cada partida para que tengas control total. El precio que firmamos es el precio que pagas.",
      icon: icon(DocumentCheckIcon),
    },
  ];

  const painPoints = [
    {
      title: "Falta de espacio de almacenaje y encimeras desordenadas.",
      description: "Te ayudamos a ganar orden y superficie útil con muebles a medida, despensas integradas y zonas de trabajo despejadas.",
      icon: icon(ArchiveBoxIcon),
    },
    {
      title: "Poca luz que hace que el espacio parezca pequeño y triste.",
      description: "Rediseñamos la iluminación con puntos LED estratégicos y aperturas que devuelven amplitud y calidez a la cocina.",
      icon: icon(LightBulbIcon),
    },
    {
      title: "Distribución incómoda que convierte cocinar en una carrera de obstáculos.",
      description: "Creamos un flujo lógico con triángulo de trabajo eficiente, islas o penínsulas para que cocinar vuelva a ser un placer.",
      icon: icon(RectangleGroupIcon),
    },
    {
      title: "Instalaciones y electrodomésticos antiguos que fallan y consumen demasiado.",
      description: "Renovamos fontanería y electricidad a normativa, añadimos más tomas y mejoramos el aislamiento para mayor seguridad y ahorro.",
      icon: icon(BoltIcon),
    },
  ];

  const focusAreas = [
    {
      title: "Unimos Espacios, Ganamos Vida",
      description: "La solución más efectiva suele ser eliminar tabiques para unir la cocina, el salón y el comedor. Creamos un espacio central abierto y polivalente que se convierte en el corazón del hogar.",
      icon: icon(HomeIcon),
    },
    {
      title: "Seguridad y Eficiencia Energética",
      description: "Renovamos por completo las instalaciones de electricidad y fontanería, adaptándolas a la normativa vigente y a tus necesidades (más enchufes, puntos de luz, etc.), y mejoramos el aislamiento.",
      icon: icon(ShieldCheckIcon),
    },
    {
      title: "El Toque Final que Marca la Diferencia",
      description: "Desde suelos de parquet o microcemento hasta armarios empotrados diseñados al milímetro para aprovechar cada rincón. Cuidamos los detalles que definen la calidad y el confort.",
      icon: icon(SparklesIcon),
    },
  ];

  const investmentHighlights = [
    {
      title: "Almacenamiento Inteligente",
      description: "Diseñamos soluciones de almacenaje a medida: muebles hasta el techo, extraíbles, esquineros y despensas integradas para que cada cosa tenga su lugar y tus encimeras estén siempre despejadas.",
      icon: icon(ArchiveBoxIcon),
    },
    {
      title: "Diseño de Iluminación",
      description: "Combinamos una buena iluminación general con puntos de luz LED estratégicos bajo los muebles altos y en zonas de trabajo para crear un ambiente luminoso, funcional y visualmente más amplio.",
      icon: icon(LightBulbIcon),
    },
    {
      title: "Distribución Funcional",
      description: "Rediseñamos la distribución para crear un flujo de trabajo lógico y cómodo, ya sea con una isla central, una península o una distribución en L o U. Cocinar volverá a ser un placer, no un estrés.",
      icon: icon(RectangleGroupIcon),
    },
  ];

  const benefits = [
    {
      title: "Gana Tiempo y Comodidad",
      description: "Con una cocina bien organizada y funcional, tardarás menos en preparar la comida, encontrar lo que buscas y mantener el orden. Más tiempo para ti y los tuyos.",
      icon: icon(ClockIcon),
    },
    {
      title: "Aumenta el Valor de tu Vivienda",
      description: "La cocina es uno de los espacios que más revalorizan una propiedad. Una reforma moderna y de calidad es una inversión inteligente a largo plazo.",
      icon: icon(ArrowTrendingUpIcon),
    },
    {
      title: "Ahorro Energético y Sostenibilidad",
      description: "Instalamos electrodomésticos de alta eficiencia energética e iluminación LED, lo que se traduce en un ahorro visible en tus facturas de luz y agua.",
      icon: icon(BoltIcon),
    },
  ];

  const testimonials = [
    { text: "Nuestra cocina pasó de ser un espacio cerrado a un lugar abierto e integrado con el salón. Ahora cocinamos mientras charlamos en familia.", initials: "MG", name: "Marta G.", location: "Barcelona (Gràcia)" },
    { text: "El equipo optimizó cada rincón de la cocina. Ahora tenemos espacio de almacenaje suficiente y una distribución mucho más cómoda.", initials: "DV", name: "Daniel V.", location: "Sabadell" },
    { text: "La obra fue rápida y ordenada. Irina nos ayudó a elegir materiales resistentes y al mismo tiempo bonitos. El cambio se nota día a día.", initials: "SR", name: "Silvia R.", location: "Barcelona (Eixample)" },
    { text: "Queríamos una cocina moderna pero cálida. Con Reformix conseguimos exactamente ese equilibrio y el resultado nos encanta.", initials: "LS", name: "Laura S.", location: "Sant Cugat del Vallès" },
    { text: "La reforma nos dio mucha más luz y un diseño práctico. La diferencia es enorme: todo está pensado para que cocinar sea más fácil.", initials: "JP", name: "Jordi P.", location: "Terrassa" },
    { text: "Siempre cocinábamos apretados y con poca luz. Tras la reforma, la cocina parece el doble de grande y se ha convertido en el corazón de la casa.", initials: "AM", name: "Albert M.", location: "Cerdanyola del Vallès" },
  ];

  const processSteps = [
    {
      title: "Paso 1. Asesoramiento y Diseño",
      description: "Visitamos tu casa, analizamos el espacio y escuchamos tus ideas. Te proponemos una distribución y selección de materiales que se adapten a tu estilo de vida y presupuesto.",
      icon: icon(PencilSquareIcon),
    },
    {
      title: "Paso 2. Presupuesto Cerrado y Calendario",
      description: "Recibes un presupuesto 100% detallado y un calendario de obra. Sabrás qué se hace cada día y cuánto costará, sin sorpresas.",
      icon: icon(DocumentCheckIcon),
    },
    {
      title: "Paso 3. Demolición y Preparación",
      description: "Vaciamos la cocina antigua y preparamos el espacio, renovando las instalaciones de fontanería y electricidad para adaptarlas al nuevo diseño y a la normativa.",
      icon: icon(WrenchScrewdriverIcon),
    },
    {
      title: "Paso 4. Revestimientos e Instalaciones",
      description: "Instalamos suelos, alicatados y falsos techos. Es la fase donde la transformación empieza a ser visible.",
      icon: icon(ShieldCheckIcon),
    },
    {
      title: "Paso 5. Montaje de Mobiliario y Encimera",
      description: "Montamos con precisión los muebles de cocina, la encimera, los electrodomésticos y la iluminación. La calidad en esta fase es crucial.",
      icon: icon(CubeIcon),
    },
    {
      title: "Paso 6. Últimos Detalles y Limpieza Final",
      description: "Instalamos grifería, enchufes y los últimos detalles. Hacemos una limpieza a fondo para que puedas entrar a disfrutar de tu nueva cocina desde el primer minuto.",
      icon: icon(SparklesIcon),
    },
  ];

  const faqs = [
    { question: "¿Qué tipo de encimera me recomendáis?", answer: "Depende de tu uso y presupuesto. El porcelánico es ultra resistente a rayas y calor. El cuarzo compacto ofrece una gama de colores enorme y es muy duradero. El granito es una opción clásica y robusta. Te asesoramos para encontrar la ideal para ti." },
    { question: "¿Puedo cambiar la distribución actual de la cocina (mover tomas de agua, enchufes)?", answer: "Sí, por supuesto. Es el momento ideal para hacerlo. Adaptamos las instalaciones de fontanería y electricidad a la nueva distribución para maximizar la funcionalidad y cumplir la normativa." },
    { question: "¿Cuánto tiempo no podré usar la cocina durante la obra?", answer: "Intentamos minimizarlo al máximo. El tiempo sin poder cocinar suele ser desde la fase de demolición hasta la instalación de la encimera y los electrodomésticos, que suele ser la última semana de trabajo. Te informamos del calendario exacto." },
    { question: "¿Trabajáis con cualquier marca de muebles o electrodomésticos?", answer: "Trabajamos con una selección de proveedores de confianza que nos ofrecen buena calidad y garantía, pero estamos abiertos a instalar los muebles o electrodomésticos que tú elijas y compres por tu cuenta." },
    { question: "¿Es necesario un permiso de obra para reformar la cocina?", answer: "Para una reforma estándar que no modifica la estructura (cambiar alicatados, muebles, instalaciones) suele ser suficiente con un 'enterado de obras' o 'asentado', un trámite sencillo que gestionamos nosotros." },
    { question: "¿Qué incluye exactamente el presupuesto?", answer: "Nuestro presupuesto cerrado desglosa todo: demolición, retirada de escombros, mano de obra de todos los oficios (albañil, fontanero, electricista, montador), materiales de construcción y mobiliario si lo contratas con nosotros." },
  ];

  const serviceAreas = [
    {
      title: "Barcelona y Área Metropolitana",
      cities: ["Barcelona", "L'Hospitalet de Llobregat", "Badalona", "Santa Coloma de Gramenet", "Cornellà de Llobregat", "Esplugues de Llobregat", "Sant Just Desvern", "Sant Joan Despí", "Sant Boi de Llobregat", "El Prat de Llobregat", "Viladecans", "Castelldefels", "Gavà", "Sant Adrià de Besòs", "Montcada i Reixac"],
    },
    {
      title: "Vallès Occidental",
      cities: ["Sabadell", "Terrassa", "Sant Cugat del Vallès", "Cerdanyola del Vallès", "Ripollet", "Barberà del Vallès", "Sant Quirze del Vallès", "Badia del Vallès", "Castellar del Vallès", "Sentmenat", "Santa Perpètua de Mogoda", "Polinyà", "Palau-solità i Plegamans", "Rellinars", "Ullastrell", "Matadepera", "Gallifa"],
    },
  ];

  return (
    <>
      <Hero
        title="Reformas de Cocinas en Barcelona y Vallès Occidental"
        titleLines={[
          "Reformas de Cocinas",
          "en Barcelona",
          "y Vallès Occidental"
        ]}
        subtitle="Transformamos tu cocina en un espacio funcional, luminoso y lleno de vida. Diseños a medida, presupuesto cerrado y la tranquilidad de trabajar con un equipo propio."
        primaryCTA={{
          text: "Solicitar Presupuesto",
          href: "/contacto"
        }}
        backgroundImage="/images/reformas-cocinas.webp"
      />
      <FeatureGrid
        title={
          <>
            Tu Nueva Cocina:
            <br />
            Diseño, Calidad y Compromiso
          </>
        }
        subtitle="Entendemos que la cocina es el corazón de tu hogar. Por eso, cada reforma que realizamos en Barcelona y el Vallès se basa en estos cuatro pilares."
        features={features}
        columns={4}
      />
      <AboutSection
        logoPath="/images/reformix-logo-vertical-white.png"
        text="Con más de 10 años de experiencia, en Reformix Barcelona nos dedicamos a crear cocinas a medida en Barcelona y el Vallès Occidental. Contamos con un equipo propio de instaladores, montadores y diseñadores para garantizar un control total sobre la calidad y los plazos de tu proyecto."
      />
      <FeatureGrid
        title={
          <>
            ¿Tu Cocina Actual
            <br />
            te Pone las Cosas Difíciles?
          </>
        }
        subtitle="Una cocina mal diseñada o anticuada no solo es una cuestión de estética. Es un obstáculo diario que te roba tiempo, energía y ganas de disfrutar del espacio más importante de la casa."
        features={painPoints}
        columns={4}
      />
      <FeatureGrid
        title={
          <>
            Soluciones para Crear
            <br />
            la Cocina que Necesitas
          </>
        }
        subtitle="Afortunadamente, cada uno de estos problemas tiene una solución técnica y de diseño. Nuestro enfoque se centra en tres áreas clave para transformar por completo tu cocina."
        features={focusAreas}
        columns={3}
        backgroundClassName="bg-gray-50"
        paddingClassName="py-20"
      />
      <FeatureGrid
        title={
          <>
            Una Inversión en tu Calidad de Vida
            <br />
            y en tu Patrimonio
          </>
        }
        subtitle="Analizamos tu espacio y tus rutinas para ofrecerte soluciones inteligentes que transforman por completo tu cocina."
        features={investmentHighlights}
        columns={3}
        paddingClassName="py-20"
      />
      <FeatureGrid
        title={
          <>
            Más que una Cocina Nueva:
            <br />
            una Inversión en tu Calidad de Vida
          </>
        }
        subtitle="Una reforma bien planificada no solo actualiza la estética. Impacta directamente en tu día a día, revaloriza tu vivienda y te devuelve el placer de disfrutar de tu hogar."
        features={benefits}
        columns={3}
        backgroundClassName="bg-gray-50"
        paddingClassName="py-20"
      />
      <TestimonialsCarousel
        testimonials={testimonials}
        title={
          <>
            Nuestros Clientes, su Nueva Cocina
            <br />
            y su Opinión
          </>
        }
        subtitle="La prueba final de nuestro trabajo es la satisfacción de quienes ya disfrutan de su nueva cocina. Esto es lo que dicen."
      />
      <FeatureGrid
        title={
          <>
            Tu Reforma de Cocina,
            <br />
            de Principio a Fin
          </>
        }
        subtitle="Un proceso claro y bien comunicado es la clave para una reforma sin estrés. Te explicamos nuestros 6 pasos para transformar tu cocina."
        features={processSteps}
        columns={3}
        backgroundClassName="bg-gray-50"
        paddingClassName="py-20"
      />
      {(() => {
        const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://reformix.barcelona';
        const faqSchema = generateFAQSchema(faqs);
        const serviceSchema = generateServiceSchema({
          name: "Reforma de Cocinas en Barcelona y Vallès Occidental",
          description: "Servicios de reforma de cocinas en Barcelona y Vallès Occidental. Diseños funcionales, presupuesto cerrado y plazos garantizados.",
          provider: {
            '@type': 'HomeAndConstructionBusiness',
            name: 'Reformix Barcelona',
          },
          serviceType: 'Kitchen Remodeling',
          url: '/reformas-cocinas',
        });
        const breadcrumbSchema = generateBreadcrumbSchema([
          { name: 'Inicio', url: '/' },
          { name: 'Reformas por Estancia', url: '/reformas-por-estancia' },
          { name: 'Reformas de Cocinas', url: '/reformas-cocinas' },
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
      <ServiceAreas areas={serviceAreas} />
      <CTA
        title="¿Hablamos de tu Nueva Cocina?"
        description="Da el primer paso para conseguir la cocina que siempre has querido. Contacta con nosotros, agenda una visita sin compromiso y recibe una propuesta detallada y un presupuesto cerrado para tu proyecto en Barcelona o el Vallès Occidental."
        buttonText="Pedir Presupuesto"
        buttonHref="/contacto"
        features={[
          "Visita y asesoramiento inicial gratis",
          "Presupuesto 100% cerrado",
          "Garantía por escrito"
        ]}
      />
    </>
  );
}

