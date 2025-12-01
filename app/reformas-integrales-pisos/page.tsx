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
  LightBulbIcon,
  CalendarDaysIcon,
  KeyIcon,
  HomeIcon,
  SparklesIcon,
  UserGroupIcon,
} from '@heroicons/react/24/solid';

export const metadata: Metadata = {
  title: "Reformas Integrales de Pisos en Barcelona | Reformix",
  description: "Transformamos tu piso en Barcelona y Vallès. Maximizamos el espacio y la luz con un diseño funcional, presupuesto cerrado y garantía. ¡Pide tu visita!",
  ...generateStandardMetadata({
    title: "Reformas Integrales de Pisos en Barcelona | Reformix",
    description: "Transformamos tu piso en Barcelona y Vallès. Maximizamos el espacio y la luz con un diseño funcional, presupuesto cerrado y garantía. ¡Pide tu visita!",
    url: "https://reformix.barcelona/reformas-integrales-pisos",
    pagePath: "/reformas-integrales-pisos",
    keywords: ["reformas integrales pisos", "reforma piso Barcelona", "reforma integral llave en mano", "rehabilitación pisos"],
  }),
};

export default async function ReformasIntegralesPisosPage() {
  const features = [
    {
      title: "Optimización del Espacio",
      description: "Somos expertos en sacar el máximo partido a pisos, eliminando pasillos inútiles y creando distribuciones abiertas y lógicas.",
      icon: (
        <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-brand-primary/10 text-brand-primary">
          <HomeIcon className="w-8 h-8" />
        </div>
      ),
    },
    {
      title: "Ganancia de Luz Natural",
      description: "Estudiamos la orientación para potenciar la luz natural con soluciones como cocinas abiertas o tabiques de cristal.",
      icon: (
        <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-brand-primary/10 text-brand-primary">
          <LightBulbIcon className="w-8 h-8" />
        </div>
      ),
    },
    {
      title: "Cumplimiento de Plazos",
      description: "Nuestro equipo propio y una planificación exhaustiva nos permiten cumplir los plazos acordados, minimizando las molestias.",
      icon: (
        <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-brand-primary/10 text-brand-primary">
          <CalendarDaysIcon className="w-8 h-8" />
        </div>
      ),
    },
    {
      title: 'Gestión "Llave en Mano"',
      description: "Nos encargamos de todo, desde los permisos de obra hasta la limpieza final, para que no te preocupes por nada.",
      icon: (
        <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-brand-primary/10 text-brand-primary">
          <KeyIcon className="w-8 h-8" />
        </div>
      ),
    },
  ];

  const solutions = [
    {
      title: "Redistribución Inteligente",
      subtitle: "Unimos Espacios, Ganamos Vida",
      description: "La solución más efectiva suele ser eliminar tabiques para unir la cocina, el salón y el comedor. Creamos un espacio central abierto y polivalente que se convierte en el corazón del hogar.",
      icon: (
        <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-brand-primary/10 text-brand-primary">
          <HomeIcon className="w-8 h-8" />
        </div>
      ),
    },
    {
      title: "Renovación de Instalaciones Clave",
      subtitle: "Seguridad y Eficiencia Energética",
      description: "Renovamos por completo las instalaciones de electricidad y fontanería, adaptándolas a la normativa vigente y a tus necesidades (más enchufes, puntos de luz, etc.), y mejoramos el aislamiento.",
      icon: (
        <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-brand-primary/10 text-brand-primary">
          <SparklesIcon className="w-8 h-8" />
        </div>
      ),
    },
    {
      title: "Acabados y Carpintería a Medida",
      subtitle: "El Toque Final que Marca la Diferencia",
      description: "Desde suelos de parquet o microcemento hasta armarios empotrados diseñados al milímetro para aprovechar cada rincón. Cuidamos los detalles que definen la calidad y el confort.",
      icon: (
        <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-brand-primary/10 text-brand-primary">
          <SparklesIcon className="w-8 h-8" />
        </div>
      ),
    },
  ];

  const benefits = [
    {
      title: "Revalorización de tu Piso",
      description: "Una reforma integral, con una distribución moderna y acabados de calidad, puede aumentar significativamente el valor de tu piso en el competitivo mercado de Barcelona.",
      icon: (
        <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-brand-primary/10 text-brand-primary">
          <HomeIcon className="w-8 h-8" />
        </div>
      ),
    },
    {
      title: "Confort Térmico y Ahorro",
      description: "Mejoramos el confort de tu hogar renovando ventanas e incorporando aislamiento. Notarás un menor gasto en calefacción y aire acondicionado.",
      icon: (
        <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-brand-primary/10 text-brand-primary">
          <SparklesIcon className="w-8 h-8" />
        </div>
      ),
    },
    {
      title: "Un Proceso sin Estrés para Ti",
      description: "Nos encargamos de todo: permisos, gestión de la comunidad de vecinos, coordinación de industriales y limpieza final. Tu única tarea es disfrutar del resultado.",
      icon: (
        <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-brand-primary/10 text-brand-primary">
          <UserGroupIcon className="w-8 h-8" />
        </div>
      ),
    },
  ];

  return (
    <>
      <Hero
        title="Reformas Integrales de Pisos en Barcelona y Vallès Occidental"
        titleLines={[
          "Reformas Integrales",
          "de Pisos en Barcelona",
          "y Vallès Occidental"
        ]}
        subtitle="Maximizamos el potencial de cada metro cuadrado. Convertimos pisos oscuros y mal distribuidos en hogares luminosos, funcionales y adaptados a tu estilo de vida."
        primaryCTA={{
          text: "Solicitar Presupuesto",
          href: "/contacto"
        }}
        backgroundImage="/images/reforma-integral-salon.webp"
      />
      <FeatureGrid
        features={features}
        columns={4}
      />
      <AboutSection
        logoPath="/images/reformix-logo-vertical-white.png"
        text="Con sede en Sabadell, somos tu empresa de reformas de pisos en Barcelona y el Vallès Occidental. Nuestro equipo propio y coordinado es la clave para garantizar una ejecución impecable, cumpliendo plazos y presupuesto en la rehabilitación completa de tu vivienda."
      />
      <FeatureGrid
        title="¿Sientes que a tu Piso le Falta Espacio, Luz o Funcionalidad?"
        subtitle="Muchas viviendas, especialmente en Barcelona, tienen distribuciones antiguas que ya no responden a las necesidades actuales. Pasillos largos, habitaciones pequeñas, poca luz... Son problemas comunes que tienen solución."
        features={[
          {
            title: "Distribuciones oscuras y fragmentadas",
            description: "Creamos espacios luminosos y abiertos que mejoran la calidad de vida.",
            icon: null,
          },
          {
            title: "Cocinas pequeñas y cerradas",
            description: "Abrimos cocinas al salón, creando espacios modernos y funcionales.",
            icon: null,
          },
          {
            title: "Instalaciones obsoletas",
            description: "Renovamos completamente las instalaciones para mayor seguridad y eficiencia.",
            icon: null,
          },
          {
            title: "Falta de almacenamiento",
            description: "Diseñamos soluciones de almacenaje a medida para aprovechar cada rincón.",
            icon: null,
          },
        ]}
        columns={4}
      />
      <FeatureGrid
        title="Nuestras Soluciones para la Reforma de tu Piso"
        subtitle="Afortunadamente, cada uno de estos problemas tiene una solución técnica y de diseño. Nuestro enfoque se centra en tres áreas clave para transformar por completo tu piso y adaptarlo a tus necesidades."
        features={solutions}
        columns={3}
      />
      <FeatureGrid
        title="Una Inversión en tu Calidad de Vida y en tu Patrimonio"
        subtitle="Una reforma bien planificada no solo mejora tu día a día, sino que también protege y aumenta el valor de tu piso. Estos son los beneficios directos que obtendrás con nuestro enfoque."
        features={benefits}
        columns={3}
      />
      <WhyChooseUs />
      <TestimonialsCarousel />
      <FAQTwoColumn
        items={[
          {
            question: "¿Cuánto se tarda en reformar un piso de 80m²?",
            answer: "Aunque cada proyecto es único, una reforma integral de un piso de 80m² suele durar entre 3 y 4 meses. Este plazo nos permite realizar cada fase sin prisas, asegurando la máxima calidad en los acabados."
          },
          {
            question: "¿Necesito pedir permiso a la comunidad de vecinos?",
            answer: "Formalmente, solo necesitas comunicar el inicio de las obras al presidente o administrador. Nosotros nos encargamos de esta comunicación y de gestionar la licencia de obra menor en el ayuntamiento para tu total tranquilidad."
          },
          {
            question: "¿Cómo minimizáis las molestias a los vecinos?",
            answer: "Es una de nuestras prioridades. Protegemos las zonas comunes (ascensor, rellano), respetamos estrictamente los horarios de descanso para ruidos y mantenemos la zona de trabajo lo más limpia posible diariamente."
          },
          {
            question: "¿Puedo vivir en el piso durante la obra?",
            answer: "Para una reforma integral, no es recomendable. El polvo, el ruido y la falta de servicios básicos como agua o electricidad hacen que sea muy incómodo e inseguro. Planificamos la obra para minimizar el tiempo que necesites estar fuera."
          },
          {
            question: "¿Se puede tirar cualquier pared en un piso?",
            answer: "No, es fundamental diferenciar entre tabiques (que se pueden eliminar sin problema) y muros de carga, que son parte de la estructura del edificio. Antes de cualquier demolición, nuestro equipo técnico revisa los planos y la estructura para garantizar una actuación 100% segura."
          },
          {
            question: "¿Qué soluciones recomendáis para el aislamiento acústico con los vecinos?",
            answer: "Para mejorar el aislamiento acústico, utilizamos soluciones modernas como la instalación de trasdosados con placas de yeso laminado (tipo Pladur) y aislante acústico en paredes. Para los suelos, instalamos láminas anti-impacto bajo el pavimento, reduciendo la transmisión de ruidos."
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
        title="¿Imaginando tu Nuevo Piso? Hagámoslo Realidad"
        description="Contacta con nosotros, cuéntanos tu idea y te prepararemos un presupuesto detallado y sin compromiso. El primer paso para transformar tu piso está a un clic."
        buttonText="Pedir Presupuesto y Visita"
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

