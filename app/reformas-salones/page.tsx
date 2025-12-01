import Hero from "@/app/components/blocks/Hero";
import FeatureGrid from "@/app/components/blocks/FeatureGrid";
import AboutSection from "@/app/components/blocks/AboutSection";
import WhyChooseUs from "@/app/components/blocks/WhyChooseUs";
import TestimonialsCarousel from "@/app/components/blocks/TestimonialsCarousel";
import FAQTwoColumn from "@/app/components/blocks/FAQTwoColumn";
import ServiceAreas from "@/app/components/blocks/ServiceAreas";
import CTA from "@/app/components/blocks/CTA";
import { Metadata } from "next";
import { generateStandardMetadata } from "@/lib/metadata-utils";
import {
  HomeIcon,
  LightBulbIcon,
  RulerIcon,
  DocumentCheckIcon,
  PuzzlePieceIcon,
  MoonIcon,
  ArchiveBoxIcon,
  PaintBrushIcon,
  ChartBarIcon,
  UserGroupIcon,
} from '@heroicons/react/24/solid';

export const metadata: Metadata = {
  title: "Reformas de Salones en Barcelona: Espacios con Estilo",
  description: "Especialistas en reformas de salones en Barcelona y Vallès Occidental. Optimizamos el espacio, la luz y el diseño para crear el salón de tus sueños. Pide presupuesto.",
  ...generateStandardMetadata({
    title: "Reformas de Salones en Barcelona: Espacios con Estilo",
    description: "Especialistas en reformas de salones en Barcelona y Vallès Occidental. Optimizamos el espacio, la luz y el diseño para crear el salón de tus sueños. Pide presupuesto.",
    url: "https://reformix.barcelona/reformas-salones",
    pagePath: "/reformas-salones",
    keywords: ["reforma salón Barcelona", "reforma salón Vallès", "diseño salón Barcelona", "reforma salón llave en mano"],
  }),
};

export default async function ReformasSalonesPage() {
  const features = [
    {
      title: "Distribución Inteligente",
      description: "Optimizamos cada metro para crear zonas funcionales y mejorar la circulación.",
      icon: (
        <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-brand-primary/10 text-brand-primary">
          <HomeIcon className="w-8 h-8" />
        </div>
      ),
    },
    {
      title: "Estudio de Iluminación",
      description: "Diseñamos la iluminación para crear ambientes acogedores y resaltar la decoración.",
      icon: (
        <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-brand-primary/10 text-brand-primary">
          <LightBulbIcon className="w-8 h-8" />
        </div>
      ),
    },
    {
      title: "Acabados de Calidad",
      description: "Seleccionamos materiales duraderos y trabajamos con técnicas que garantizan un resultado impecable.",
      icon: (
        <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-brand-primary/10 text-brand-primary">
          <RulerIcon className="w-8 h-8" />
        </div>
      ),
    },
    {
      title: "Plazos y Presupuesto Cerrado",
      description: "Planificación detallada para cumplir fechas y un presupuesto sin sorpresas.",
      icon: (
        <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-brand-primary/10 text-brand-primary">
          <DocumentCheckIcon className="w-8 h-8" />
        </div>
      ),
    },
  ];

  const solutions = [
    {
      title: "Redistribución para Ganar Amplitud",
      description: "Abrimos espacios, integramos la cocina o creamos zonas diferenciadas (comedor, lectura, TV) para un uso más inteligente.",
      icon: (
        <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-brand-primary/10 text-brand-primary">
          <HomeIcon className="w-8 h-8" />
        </div>
      ),
    },
    {
      title: "Proyectos de Iluminación y Falsos Techos",
      description: "Instalamos puntos de luz estratégicos, LEDs indirectos y foseados para crear un ambiente cálido y luminoso.",
      icon: (
        <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-brand-primary/10 text-brand-primary">
          <LightBulbIcon className="w-8 h-8" />
        </div>
      ),
    },
    {
      title: "Mobiliario a Medida y Paneles",
      description: "Diseñamos estanterías, muebles de TV y paneles decorativos que integran almacenaje y ocultan cables, aportando orden y estilo.",
      icon: (
        <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-brand-primary/10 text-brand-primary">
          <ArchiveBoxIcon className="w-8 h-8" />
        </div>
      ),
    },
  ];

  const benefits = [
    {
      title: "Un Espacio para Conectar",
      description: "Un salón bien diseñado se convierte en el centro de la vida familiar y social.",
      icon: (
        <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-brand-primary/10 text-brand-primary">
          <UserGroupIcon className="w-8 h-8" />
        </div>
      ),
    },
    {
      title: "Sensación de Amplitud",
      description: "Gracias a la correcta distribución, colores claros y buena iluminación, tu salón parecerá más grande.",
      icon: (
        <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-brand-primary/10 text-brand-primary">
          <HomeIcon className="w-8 h-8" />
        </div>
      ),
    },
    {
      title: "Refleja tu Personalidad",
      description: "Creamos un espacio único que habla de ti y se adapta perfectamente a tus gustos y necesidades.",
      icon: (
        <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-brand-primary/10 text-brand-primary">
          <PaintBrushIcon className="w-8 h-8" />
        </div>
      ),
    },
  ];

  return (
    <>
      <Hero
        title="Reformas de Salones en Barcelona y Vallès Occidental"
        titleLines={[
          "Reformas de Salones",
          "en Barcelona",
          "y Vallès Occidental"
        ]}
        subtitle="Creamos el corazón de tu hogar. Espacios diseñados para ser vividos, que combinan estética, funcionalidad y confort. Presupuesto cerrado y plazos garantizados."
        primaryCTA={{
          text: "Transforma tu Salón",
          href: "/contacto"
        }}
        backgroundImage="/images/reforma-integral-salon.webp"
      />
      <FeatureGrid
        title="Garantías para una Reforma de Salón sin Estrés"
        subtitle="Nos enfocamos en los detalles que marcan la diferencia: desde la distribución inteligente hasta los acabados y la iluminación."
        features={features}
        columns={4}
      />
      <AboutSection
        logoPath="/images/reformix-logo-vertical-white.png"
        text="Con sede en Sabadell, nuestro equipo de interioristas y técnicos realiza reformas de salones en Barcelona y todo el Vallès Occidental. Nuestro enfoque se centra en entender tu estilo de vida para crear un espacio que sea un fiel reflejo de ti. Gestionamos cada detalle, desde la demolición hasta el último toque de decoración, asegurando un proceso fluido y resultados que superan tus expectativas."
      />
      <FeatureGrid
        title="¿Sientes que a tu Salón le Falta Vida o Funcionalidad?"
        subtitle="Un salón mal distribuido, con poca luz o un estilo anticuado puede afectar a todo tu hogar. Detectamos estos problemas comunes y los convertimos en oportunidades de mejora."
        features={[
          {
            title: "Mala Distribución",
            description: "Zonas de paso incómodas, muebles que no encajan y una sensación general de desorden.",
            icon: (
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-brand-primary/10 text-brand-primary">
                <PuzzlePieceIcon className="w-8 h-8" />
              </div>
            ),
          },
          {
            title: "Poca Luz Natural",
            description: "Espacios oscuros y poco acogedores que no invitan a quedarse.",
            icon: (
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-brand-primary/10 text-brand-primary">
                <MoonIcon className="w-8 h-8" />
              </div>
            ),
          },
          {
            title: "Falta de Almacenaje",
            description: "Cables a la vista, poco espacio para libros y objetos, generando desorden visual.",
            icon: (
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-brand-primary/10 text-brand-primary">
                <ArchiveBoxIcon className="w-8 h-8" />
              </div>
            ),
          },
          {
            title: "Estilo Anticuado",
            description: "Acabados, colores y materiales que ya no se corresponden con las tendencias ni con tu gusto actual.",
            icon: (
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-brand-primary/10 text-brand-primary">
                <PaintBrushIcon className="w-8 h-8" />
              </div>
            ),
          },
        ]}
        columns={4}
      />
      <FeatureGrid
        title="Soluciones a Medida para un Salón de Revista"
        subtitle="Transformamos los problemas en soluciones estéticas y funcionales, creando un espacio cohesivo y pensado para ti."
        features={solutions}
        columns={3}
      />
      <FeatureGrid
        title="Un Salón Renovado que Disfrutarás Cada Día"
        subtitle="Más allá de la estética, una buena reforma mejora tu calidad de vida y aporta valor a tu hogar."
        features={benefits}
        columns={3}
      />
      <WhyChooseUs />
      <TestimonialsCarousel />
      <FAQTwoColumn
        items={[
          {
            question: "¿Es buena idea unir el salón con la cocina?",
            answer: "Sí, es una de las reformas más demandadas. Se gana amplitud, luz y se crea un espacio social muy versátil. Lo analizamos caso por caso."
          },
          {
            question: "¿Cuánto se tarda en reformar un salón?",
            answer: "Depende mucho del alcance. Una reforma de acabados (pintura, suelo, iluminación) puede durar 1-2 semanas. Si incluye redistribución, puede ser más."
          },
          {
            question: "¿Qué tipo de suelo es mejor para el salón?",
            answer: "El parquet de madera natural aporta mucha calidez, mientras que los suelos laminados ofrecen gran resistencia y variedad de diseños a un precio más ajustado."
          },
          {
            question: "¿Cómo puedo ganar espacio de almacenaje sin recargar el ambiente?",
            answer: "El mobiliario a medida, las estanterías empotradas y los muebles multifuncionales son soluciones perfectas para mantener el orden sin sacrificar espacio visual."
          },
          {
            question: "¿El presupuesto que me dais es definitivo?",
            answer: "Sí, trabajamos con presupuesto cerrado. Cualquier cambio o extra que quieras añadir durante la obra se valora y aprueba por separado."
          },
          {
            question: "¿Gestionáis vosotros todos los permisos?",
            answer: "Sí, si la reforma requiere algún permiso de obra menor, nuestro equipo técnico se encarga de toda la gestión para tu tranquilidad."
          }
        ]}
      />
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
        title="¿Imaginas ya tu nuevo salón? Hagámoslo realidad."
        description="Contacta con nosotros. Estudiamos tu espacio y te damos un presupuesto detallado para tu reforma en Barcelona o el Vallès Occidental."
        buttonText="Pide tu Presupuesto sin Compromiso"
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

