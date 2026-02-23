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
  LightBulbIcon,
  DocumentCheckIcon,
  PuzzlePieceIcon,
  MoonIcon,
  ArchiveBoxIcon,
  PaintBrushIcon,
  ChartBarIcon,
  UserGroupIcon,
  ShieldCheckIcon,
  SparklesIcon,
  ClipboardDocumentCheckIcon,
  WrenchScrewdriverIcon,
  CheckCircleIcon,
} from '@heroicons/react/24/solid';

export const metadata: Metadata = {
  title: "Reformas de Salones en Barcelona: Espacios con Estilo",
  description: "Especialistas en reformas de salones en Barcelona y Vallès. Optimizamos espacio, luz y diseño para crear el salón de tus sueños. ¡Pide presupuesto!",
  ...generateStandardMetadata({
    title: "Reformas de Salones en Barcelona: Espacios con Estilo",
    description: "Especialistas en reformas de salones en Barcelona y Vallès. Optimizamos espacio, luz y diseño para crear el salón de tus sueños. ¡Pide presupuesto!",
    url: "https://www.reformix.barcelona/reformas-salones",
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
          <PaintBrushIcon className="w-8 h-8" />
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
      title: "Unimos Espacios, Ganamos Vida",
      description: "La solución más efectiva suele ser eliminar tabiques para unir la cocina, el salón y el comedor. Creamos un espacio central abierto y polivalente que se convierte en el corazón del hogar.",
      icon: (
        <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-brand-primary/10 text-brand-primary">
          <HomeIcon className="w-8 h-8" />
        </div>
      ),
    },
    {
      title: "Seguridad y Eficiencia Energética",
      description: "Renovamos por completo las instalaciones de electricidad y fontanería, adaptándolas a la normativa vigente y a tus necesidades (más enchufes, puntos de luz, etc.), y mejoramos el aislamiento.",
      icon: (
        <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-brand-primary/10 text-brand-primary">
          <ShieldCheckIcon className="w-8 h-8" />
        </div>
      ),
    },
    {
      title: "El Toque Final que Marca la Diferencia",
      description: "Desde suelos de parquet o microcemento hasta armarios empotrados diseñados al milímetro para aprovechar cada rincón. Cuidamos los detalles que definen la calidad y el confort.",
      icon: (
        <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-brand-primary/10 text-brand-primary">
          <SparklesIcon className="w-8 h-8" />
        </div>
      ),
    },
  ];

  const investmentHighlights = [
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

  const testimonials = [
    { text: "Queríamos un salón integrado con la cocina y Reformix supo plasmarlo a la perfección. Es un espacio moderno y práctico donde pasamos la mayor parte del día.", initials: "DM", name: "David M.", location: "Barcelona (Eixample)" },
    { text: "El cambio fue increíble: un salón oscuro se convirtió en un espacio abierto y luminoso. Ahora es el centro de la vida familiar.", initials: "CP", name: "Clara P.", location: "Terrassa" },
    { text: "Lo mejor fue la distribución. Irina nos ayudó a elegir colores y materiales para crear un salón elegante pero muy cálido.", initials: "MG", name: "Marc G.", location: "Sant Cugat del Vallès" },
    { text: "Antes estaba lleno de muebles y sin orden. Ahora el salón transmite calma y amplitud, perfecto para recibir visitas.", initials: "AR", name: "Andrea R.", location: "Barcelona (Gràcia)" },
    { text: "Con la nueva distribución conseguimos un salón funcional y con mucha más luz natural. Es un espacio que invita a disfrutar.", initials: "ST", name: "Sergi T.", location: "Cerdanyola del Vallès" },
    { text: "Abrimos el salón hacia el pasillo y ahora parece el doble de grande. La luz entra por todas partes y el ambiente es mucho más acogedor.", initials: "LF", name: "Laura F.", location: "Sabadell" },
  ];

  const processSteps = [
    {
      title: "Entrevista y Visita",
      description: "Nos reunimos contigo para entender tus gustos y necesidades. Medimos el espacio y valoramos las posibilidades.",
      icon: (
        <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-brand-primary/10 text-brand-primary">
          <Image src="/images/1.webp" alt="Paso 1" width={64} height={64} className="w-16 h-16 object-contain" />
        </div>
      ),
    },
    {
      title: "Propuesta de Diseño 3D y Presupuesto",
      description: "Creamos una propuesta visual para que veas el resultado antes de empezar, junto con un presupuesto detallado y cerrado.",
      icon: (
        <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-brand-primary/10 text-brand-primary">
          <Image src="/images/2.webp" alt="Paso 2" width={64} height={64} className="w-16 h-16 object-contain" />
        </div>
      ),
    },
    {
      title: "Selección de Materiales y Acabados",
      description: "Te asesoramos en la elección de pavimentos, pinturas, iluminación y mobiliario para crear un ambiente cohesivo, buscando el equilibrio entre estética y durabilidad.",
      icon: (
        <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-brand-primary/10 text-brand-primary">
          <Image src="/images/3.webp" alt="Paso 3" width={64} height={64} className="w-16 h-16 object-contain" />
        </div>
      ),
    },
    {
      title: "Planificación de la Obra",
      description: "Definimos el calendario de obra y coordinamos a nuestro equipo propio de fontaneros, electricistas y albañiles.",
      icon: (
        <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-brand-primary/10 text-brand-primary">
          <Image src="/images/4.webp" alt="Paso 4" width={64} height={64} className="w-16 h-16 object-contain" />
        </div>
      ),
    },
    {
      title: "Ejecución y Supervisión Continua",
      description: "Llevamos a cabo la reforma con un seguimiento diario, asegurando la calidad de cada detalle y manteniendo la comunicación contigo.",
      icon: (
        <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-brand-primary/10 text-brand-primary">
          <Image src="/images/5.webp" alt="Paso 5" width={64} height={64} className="w-16 h-16 object-contain" />
        </div>
      ),
    },
    {
      title: "Entrega y Disfrute",
      description: "Realizamos una limpieza profesional, te entregamos tu nuevo salón listo para ser vivido y activamos la garantía del trabajo realizado.",
      icon: (
        <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-brand-primary/10 text-brand-primary">
          <Image src="/images/6.webp" alt="Paso 6" width={64} height={64} className="w-16 h-16 object-contain" />
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
        backgroundImage="/images/reformas-salones.webp"
      />
      <FeatureGrid
        title={
          <>
            Garantías para una Reforma
            <br />
            de Salón sin Estrés
          </>
        }
        subtitle="Nos enfocamos en los detalles que marcan la diferencia: desde la distribución inteligente hasta los acabados y la iluminación."
        features={features}
        columns={4}
      />
      <AboutSection
        logoPath="/images/reformix-logo-vertical-white.png"
        text="Con sede en Sabadell, nuestro equipo de interioristas y técnicos realiza reformas de salones en Barcelona y todo el Vallès Occidental. Nuestro enfoque se centra en entender tu estilo de vida para crear un espacio que sea un fiel reflejo de ti. Gestionamos cada detalle, desde la demolición hasta el último toque de decoración, asegurando un proceso fluido y resultados que superan tus expectativas."
      />
      <FeatureGrid
        title={
          <>
            ¿Sientes que a tu Salón
            <br />
            le Falta Vida o Funcionalidad?
          </>
        }
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
        title={
          <>
            Soluciones a Medida
            <br />
            para un Salón de Revista
          </>
        }
        subtitle="Afortunadamente, cada uno de estos problemas tiene una solución técnica y de diseño. Nuestro enfoque se centra en tres áreas clave para transformar por completo tu piso y adaptarlo a tus necesidades."
        features={solutions}
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
        subtitle="Transformamos los problemas en soluciones estéticas y funcionales, creando un espacio cohesivo y pensado para ti."
        features={investmentHighlights}
        columns={3}
      />
      <FeatureGrid
        title={
          <>
            Un Salón Renovado
            <br />
            que Disfrutarás Cada Día
          </>
        }
        subtitle="Más allá de la estética, una buena reforma mejora tu calidad de vida y aporta valor a tu hogar."
        features={benefits}
        columns={3}
        backgroundClassName="bg-gray-50"
        paddingClassName="py-20"
      />
      <TestimonialsCarousel
        testimonials={testimonials}
        title={
          <>
            La Experiencia de Nuestros Clientes
            <br />
            con su Nuevo Salón
          </>
        }
        subtitle="La satisfacción de quienes confiaron en nosotros para renovar el corazón de su hogar."
      />
      <FeatureGrid
        title={
          <>
            Tu Salón Ideal en 6 Pasos
            <br />
            Claros y Definidos
          </>
        }
        subtitle="Un proceso organizado para que la reforma sea una experiencia positiva y sin sorpresas."
        features={processSteps}
        columns={3}
        backgroundClassName="bg-gray-50"
        paddingClassName="py-20"
      />
      {(() => {
        const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://www.reformix.barcelona';
        const faqs = [
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
        ];
        const faqSchema = generateFAQSchema(faqs);
        const serviceSchema = generateServiceSchema({
          name: "Reformas de Salones en Barcelona: Espacios con Estilo",
          description: "Especialistas en reformas de salones en Barcelona y Vallès Occidental. Optimizamos el espacio, la luz y el diseño para crear el salón de tus sueños.",
          provider: {
            '@type': 'HomeAndConstructionBusiness',
            name: 'Reformix Barcelona',
          },
          serviceType: 'Living Room Remodeling',
          url: '/reformas-salones',
        });
        const breadcrumbSchema = generateBreadcrumbSchema([
          { name: 'Inicio', url: '/' },
          { name: 'Reformas por Estancia', url: '/reformas-por-estancia' },
          { name: 'Reformas de Salones', url: '/reformas-salones' },
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
        title="¿Imaginas ya tu nuevo salón? Hagámoslo realidad."
        description="Contacta con nosotros. Estudiamos tu espacio y te damos un presupuesto detallado para tu reforma en Barcelona o el Vallès Occidental."
        buttonText="Pide tu Presupuesto sin Compromiso"
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

