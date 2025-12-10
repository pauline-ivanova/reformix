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
import Image from "next/image";
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
  title: "Reformas de Habitaciones en Barcelona y Vallès",
  description: "Expertos en reformas de habitaciones en Barcelona y Vallès. Creamos espacios para el descanso, optimizando almacenaje, luz y aislamiento. ¡Pide presupuesto!",
  ...generateStandardMetadata({
    title: "Reformas de Habitaciones en Barcelona y Vallès",
    description: "Expertos en reformas de habitaciones en Barcelona y Vallès. Creamos espacios para el descanso, optimizando almacenaje, luz y aislamiento. ¡Pide presupuesto!",
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
        backgroundImage="/images/reformas-de-habitaciones-en-barcelona.webp"
      />
      <FeatureGrid
        features={features}
        columns={4}
        disableFeatureHeadings={true}
      />
      <AboutSection
        logoPath="/images/reformix-logo-vertical-white.png"
        text="Desde nuestra oficina en Sabadell, el equipo de Reformix se especializa en la reforma de habitaciones en toda la provincia de Barcelona y el Vallès Occidental. Entendemos que cada habitación es un mundo, por lo que nuestro proceso se centra en escuchar tus necesidades de descanso y organización para crear un diseño totalmente personalizado y funcional."
      />
      <FeatureGrid
        title={
          <>
            ¿Tu Habitación ha Dejado de Ser
            <br />
            un Lugar para Descansar?
          </>
        }
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
        title={
          <>
            Soluciones Inteligentes
            <br />
            para tu Santuario Personal
          </>
        }
        subtitle="Convertimos los problemas de tu habitación en soluciones que mejoran el orden, el confort y la estética."
        features={solutions}
        columns={3}
        backgroundClassName="bg-gray-50"
        paddingClassName="py-20"
      />
      <FeatureGrid
        title="Una Habitación que Cuida de Ti"
        subtitle="La reforma de tu habitación es una inversión directa en tu bienestar y en la calidad de tu descanso diario."
        features={benefits}
        columns={3}
      />
      <FeatureGrid
        title={
          <>
            Tu Nueva Habitación en 6 Pasos,
            <br />
            Sin Estrés
          </>
        }
        subtitle="Un método de trabajo claro y organizado para tu completa tranquilidad."
        backgroundClassName="bg-gray-50"
        paddingClassName="py-20"
        features={[
          {
            title: "Conversación Inicial",
            description: "Escuchamos tus ideas, necesidades de almacenaje y estilo de vida para entender qué buscas en tu nueva habitación.",
            icon: (
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-brand-primary/10 text-brand-primary">
                <Image src="/images/1.webp" alt="Paso 1" width={64} height={64} className="w-16 h-16 object-contain" />
              </div>
            ),
          },
          {
            title: "Diseño Personalizado y Presupuesto",
            description: "Te presentamos una propuesta de distribución y diseño, a menudo con vistas 3D, y un presupuesto cerrado y detallado.",
            icon: (
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-brand-primary/10 text-brand-primary">
                <Image src="/images/2.webp" alt="Paso 2" width={64} height={64} className="w-16 h-16 object-contain" />
              </div>
            ),
          },
          {
            title: "Selección de Materiales",
            description: "Te guiamos en la elección de suelos, colores, iluminación y acabados para crear un ambiente armónico y personal.",
            icon: (
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-brand-primary/10 text-brand-primary">
                <Image src="/images/3.webp" alt="Paso 3" width={64} height={64} className="w-16 h-16 object-contain" />
              </div>
            ),
          },
          {
            title: "Planificación Detallada",
            description: "Establecemos un calendario preciso para la ejecución, coordinando a nuestro equipo de carpinteros, pintores y electricistas.",
            icon: (
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-brand-primary/10 text-brand-primary">
                <Image src="/images/4.webp" alt="Paso 4" width={64} height={64} className="w-16 h-16 object-contain" />
              </div>
            ),
          },
          {
            title: "Ejecución Supervisada",
            description: "Realizamos la reforma con un seguimiento constante, asegurando la calidad en cada fase y minimizando las molestias en tu hogar.",
            icon: (
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-brand-primary/10 text-brand-primary">
                <Image src="/images/5.webp" alt="Paso 5" width={64} height={64} className="w-16 h-16 object-contain" />
              </div>
            ),
          },
          {
            title: "Entrega y Garantía",
            description: "Dejamos tu habitación impecable, lista para que la disfrutes, y te entregamos la garantía por escrito de nuestro trabajo.",
            icon: (
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-brand-primary/10 text-brand-primary">
                <Image src="/images/6.webp" alt="Paso 6" width={64} height={64} className="w-16 h-16 object-contain" />
              </div>
            ),
          },
        ]}
        columns={3}
      />
      <TestimonialsCarousel
        title={
          <>
            La Tranquilidad de Nuestros Clientes
            <br />
            al Reformar su Habitación
          </>
        }
        subtitle="Nos cuentan su experiencia y cómo su nueva habitación ha mejorado su día a día."
        testimonials={[
          {
            text: "Queríamos un espacio más luminoso y Reformix nos lo dio. El dormitorio transmite calma y amplitud.",
            initials: "JM",
            name: "Javier M.",
            location: "Hospitalet de Llobregat"
          },
          {
            text: "Con la nueva distribución, por fin tenemos sitio para todo. Es un dormitorio práctico y acogedor al mismo tiempo.",
            initials: "LV",
            name: "Laura V.",
            location: "Montcada i Reixac"
          },
          {
            text: "Irina nos ayudó con los colores y los detalles textiles. El resultado fue un dormitorio cálido y elegante.",
            initials: "ST",
            name: "Sergio T.",
            location: "Ripollet"
          },
          {
            text: "Antes la habitación parecía pequeña y oscura. Ahora es un espacio abierto, luminoso y perfecto para descansar.",
            initials: "CB",
            name: "Clara B.",
            location: "Castellar del Vallès"
          },
          {
            text: "Lo que más nos gusta es la tranquilidad que transmite. Dormir en este nuevo dormitorio es un placer.",
            initials: "MD",
            name: "Marc D.",
            location: "Viladecans"
          },
          {
            text: "El dormitorio ahora tiene un ambiente sereno y bien organizado. Los armarios a medida han hecho toda la diferencia.",
            initials: "PG",
            name: "Paula G.",
            location: "Badalona"
          },
        ]}
      />
      {(() => {
        const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://reformix.barcelona';
        const faqs = [
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
        ];
        const faqSchema = generateFAQSchema(faqs);
        const serviceSchema = generateServiceSchema({
          name: "Reformas de Habitaciones en Barcelona y Vallès Occidental",
          description: "Expertos en reformas de habitaciones en Barcelona y Vallès Occidental. Creamos espacios para el descanso, optimizando el almacenaje, la luz y el aislamiento.",
          provider: {
            '@type': 'HomeAndConstructionBusiness',
            name: 'Reformix Barcelona',
          },
          serviceType: 'Bedroom Remodeling',
          url: '/reformas-habitaciones',
        });
        const breadcrumbSchema = generateBreadcrumbSchema([
          { name: 'Inicio', url: '/' },
          { name: 'Reformas por Estancia', url: '/reformas-por-estancia' },
          { name: 'Reformas de Habitaciones', url: '/reformas-habitaciones' },
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
        title={
          <>
            ¿Quieres que tu habitación sea
            <br />
            tu lugar favorito del mundo?
          </>
        }
        description="Cuéntanos tu idea. Diseñaremos juntos tu espacio ideal y te daremos un presupuesto sin compromiso para tu reforma en Barcelona o el Vallès Occidental."
        buttonText="Empieza a Diseñar tu Habitación"
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

