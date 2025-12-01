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
  PaintBrushIcon,
  CalendarDaysIcon,
  ArchiveBoxIcon,
  MoonIcon,
  LightBulbIcon,
  BoltIcon,
} from '@heroicons/react/24/solid';

export const metadata: Metadata = {
  title: "Reformas de Habitaciones en Barcelona y Vallès Occidental",
  description: "Expertos en reformas de habitaciones en Barcelona y Vallès Occidental. Creamos espacios para el descanso, optimizando el almacenaje, la luz y el aislamiento.",
  ...generateStandardMetadata({
    title: "Reformas de Habitaciones en Barcelona y Vallès Occidental",
    description: "Expertos en reformas de habitaciones en Barcelona y Vallès Occidental. Creamos espacios para el descanso, optimizando el almacenaje, la luz y el aislamiento.",
    url: "https://reformix.barcelona/reformas-habitaciones",
    pagePath: "/reformas-habitaciones",
    keywords: ["reforma habitación Barcelona", "reforma habitación Vallès", "diseño habitación Barcelona", "armarios a medida"],
  }),
};

export default async function ReformasHabitacionesPage() {
  const features = [
    {
      title: "Aislamiento Acústico",
      description: "Soluciones para aislar ruidos exteriores e interiores y garantizar un sueño reparador.",
      icon: (
        <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-brand-primary/10 text-brand-primary">
          <HomeIcon className="w-8 h-8" />
        </div>
      ),
    },
    {
      title: "Armarios y Vestidores a Medida",
      description: "Diseñamos soluciones de almacenaje que aprovechan cada rincón y se adaptan a tu ropa y estilo de vida.",
      icon: (
        <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-brand-primary/10 text-brand-primary">
          <ArchiveBoxIcon className="w-8 h-8" />
        </div>
      ),
    },
    {
      title: "Acabados que Dan Calma",
      description: "Seleccionamos materiales y colores que invitan a la relajación y el confort.",
      icon: (
        <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-brand-primary/10 text-brand-primary">
          <PaintBrushIcon className="w-8 h-8" />
        </div>
      ),
    },
    {
      title: "Planificación sin Molestias",
      description: "Organizamos la obra para minimizar el impacto en tu día a día, cumpliendo plazos acordados.",
      icon: (
        <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-brand-primary/10 text-brand-primary">
          <CalendarDaysIcon className="w-8 h-8" />
        </div>
      ),
    },
  ];

  const solutions = [
    {
      title: "Soluciones de Almacenaje Integrado",
      description: "Creamos armarios de obra y pladur, vestidores y hornacinas como parte de la reforma para maximizar el espacio y el orden.",
      icon: (
        <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-brand-primary/10 text-brand-primary">
          <ArchiveBoxIcon className="w-8 h-8" />
        </div>
      ),
    },
    {
      title: "Mejora del Aislamiento",
      description: "Instalamos ventanas de alta eficiencia y trasdosados para aislar tu habitación del ruido y las temperaturas exteriores.",
      icon: (
        <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-brand-primary/10 text-brand-primary">
          <HomeIcon className="w-8 h-8" />
        </div>
      ),
    },
    {
      title: "Iluminación y Electricidad Funcional",
      description: "Creamos un proyecto de iluminación con diferentes ambientes (lectura, general) y añadimos los enchufes que necesites, donde los necesites.",
      icon: (
        <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-brand-primary/10 text-brand-primary">
          <LightBulbIcon className="w-8 h-8" />
        </div>
      ),
    },
  ];

  const benefits = [
    {
      title: "Mejora la Calidad del Sueño",
      description: "Un ambiente oscuro, silencioso y a la temperatura ideal es clave para un descanso profundo y reparador.",
      icon: (
        <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-brand-primary/10 text-brand-primary">
          <MoonIcon className="w-8 h-8" />
        </div>
      ),
    },
    {
      title: "Un Espacio para Cada Cosa",
      description: "Con soluciones de almacenaje inteligentes, el orden deja de ser una lucha diaria y se convierte en algo natural.",
      icon: (
        <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-brand-primary/10 text-brand-primary">
          <ArchiveBoxIcon className="w-8 h-8" />
        </div>
      ),
    },
    {
      title: "Tu Rincón Personalizado",
      description: "Creamos un espacio que refleja tu personalidad y se adapta a tus rutinas, haciéndote sentir realmente en casa.",
      icon: (
        <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-brand-primary/10 text-brand-primary">
          <HomeIcon className="w-8 h-8" />
        </div>
      ),
    },
  ];

  return (
    <>
      <Hero
        title="Reformas de Habitaciones en Barcelona y Vallès Occidental"
        titleLines={[
          "Reformas de Habitaciones",
          "en Barcelona",
          "y Vallès Occidental"
        ]}
        subtitle="Diseñamos tu refugio personal. Transformamos tu habitación en un espacio de calma y confort, optimizando el almacenaje y cuidando cada detalle para tu descanso."
        primaryCTA={{
          text: "Crea tu Espacio Ideal",
          href: "/contacto"
        }}
        backgroundImage="/images/hero-bg.webp"
      />
      <FeatureGrid
        title="Tu Descanso es Sagrado: Nuestro Compromiso"
        subtitle="Nos centramos en los elementos que convierten una simple habitación en un santuario personal."
        features={features}
        columns={4}
      />
      <AboutSection
        logoPath="/images/reformix-logo-vertical-white.png"
        text="Desde nuestra oficina en Sabadell, el equipo de Reformix Barcelona se especializa en la reforma de habitaciones en toda la provincia de Barcelona y el Vallès Occidental. Entendemos que cada habitación es un mundo, por lo que nuestro proceso se centra en escuchar tus necesidades de descanso y organización para crear un diseño totalmente personalizado y funcional."
      />
      <FeatureGrid
        title="¿Tu Habitación ha Dejado de Ser un Lugar para Descansar?"
        subtitle="El desorden, la falta de luz o un mal aislamiento pueden convertir tu espacio más personal en una fuente de estrés. Estos son los problemas que resolvemos cada día."
        features={[
          {
            title: "Armarios Poco Prácticos",
            description: "Falta de espacio para ropa, mala distribución interior y dificultad para mantener el orden.",
            icon: (
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-brand-primary/10 text-brand-primary">
                <ArchiveBoxIcon className="w-8 h-8" />
              </div>
            ),
          },
          {
            title: "Ambiente Poco Relajante",
            description: "Iluminación inadecuada, colores estridentes o una distribución que no invita a la calma.",
            icon: (
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-brand-primary/10 text-brand-primary">
                <MoonIcon className="w-8 h-8" />
              </div>
            ),
          },
          {
            title: "Frío, Calor o Ruido",
            description: "Ventanas antiguas o paredes sin aislar que afectan a tu confort y a la calidad de tu sueño.",
            icon: (
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-brand-primary/10 text-brand-primary">
                <HomeIcon className="w-8 h-8" />
              </div>
            ),
          },
          {
            title: "Pocos Enchufes y Mal Ubicados",
            description: "Falta de tomas de corriente para lámparas, cargadores y otros dispositivos, generando desorden con alargadores.",
            icon: (
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-brand-primary/10 text-brand-primary">
                <BoltIcon className="w-8 h-8" />
              </div>
            ),
          },
        ]}
        columns={4}
      />
      <FeatureGrid
        title="Soluciones Inteligentes para tu Santuario Personal"
        subtitle="Convertimos los problemas de tu habitación en soluciones que mejoran el orden, el confort y la estética."
        features={solutions}
        columns={3}
      />
      <FeatureGrid
        title="Una Habitación que Cuida de Ti"
        subtitle="La reforma de tu habitación es una inversión directa en tu bienestar y en la calidad de tu descanso diario."
        features={benefits}
        columns={3}
      />
      <WhyChooseUs />
      <TestimonialsCarousel />
      <FAQTwoColumn
        items={[
          {
            question: "¿Cuánto cuesta hacer un armario empotrado a medida?",
            answer: "El precio varía mucho según el tamaño y los acabados interiores (cajoneras, baldas, etc.). Lo detallamos siempre como una partida clara en el presupuesto global."
          },
          {
            question: "¿Qué tipo de iluminación es mejor para un dormitorio?",
            answer: "Recomendamos combinar una luz general cálida con puntos de luz específicos para lectura, como apliques en el cabecero o lámparas de mesa. La iluminación regulable es ideal."
          },
          {
            question: "¿Se puede mejorar el aislamiento sin cambiar las ventanas?",
            answer: "Sí, se pueden instalar trasdosados con aislante en las paredes que dan al exterior. Aunque el mayor punto de pérdida suele ser la ventana, esta es una buena solución complementaria."
          },
          {
            question: "¿Cuánto tiempo dura la reforma de una habitación?",
            answer: "Una reforma que no implique cambios estructurales (pintura, suelo, armario, electricidad) suele completarse en 1 o 2 semanas."
          },
          {
            question: "¿Qué suelo es más acogedor para un dormitorio?",
            answer: "El parquet de madera o los suelos laminados con acabado de madera son las opciones más populares por la calidez y confort que aportan al caminar descalzo."
          },
          {
            question: "¿Trabajáis en toda la provincia de Barcelona?",
            answer: "Sí, nuestro principal área de trabajo es Barcelona ciudad y toda la comarca del Vallès Occidental, pero realizamos proyectos en toda la provincia."
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
        title="¿Quieres que tu habitación sea tu lugar favorito del mundo?"
        description="Cuéntanos tu idea. Diseñaremos juntos tu espacio ideal y te daremos un presupuesto sin compromiso para tu reforma en Barcelona o el Vallès Occidental."
        buttonText="Empieza a Diseñar tu Habitación"
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

