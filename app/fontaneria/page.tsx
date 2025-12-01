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
  WrenchScrewdriverIcon,
  ShieldCheckIcon,
  DocumentCheckIcon,
  SparklesIcon,
  ExclamationCircleIcon,
  HomeIcon,
  ChartBarIcon,
  CheckCircleIcon,
  BoltIcon,
  CogIcon,
  SunIcon,
} from '@heroicons/react/24/solid';

export const metadata: Metadata = {
  title: "Servicio de Fontanería para Reformas en Barcelona",
  description: "Renovamos la fontanería de tu hogar con materiales duraderos y soluciones eficientes. Garantizamos instalaciones sin fugas en Barcelona y Vallès Occidental.",
  ...generateStandardMetadata({
    title: "Servicio de Fontanería para Reformas en Barcelona",
    description: "Renovamos la fontanería de tu hogar con materiales duraderos y soluciones eficientes. Garantizamos instalaciones sin fugas en Barcelona y Vallès Occidental.",
    url: "https://reformix.barcelona/fontaneria",
    pagePath: "/fontaneria",
    keywords: ["servicios fontanería reformas", "fontanería Barcelona", "instalación fontanería", "renovación tuberías"],
  }),
};

export default async function FontaneriaPage() {
  const features = [
    {
      title: "Instaladores Cualificados",
      description: "Nuestro equipo cuenta con la formación y experiencia para realizar cualquier instalación de agua y saneamiento con las máximas garantías.",
      icon: (
        <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-brand-primary/10 text-brand-primary">
          <WrenchScrewdriverIcon className="w-8 h-8" />
        </div>
      ),
    },
    {
      title: "Materiales Certificados",
      description: "Utilizamos tuberías multicapa, de polietileno reticulado (PEX) o cobre, siempre de fabricantes líderes como Wirsbo, Uponor o Rehau.",
      icon: (
        <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-brand-primary/10 text-brand-primary">
          <ShieldCheckIcon className="w-8 h-8" />
        </div>
      ),
    },
    {
      title: "Prueba de Estanqueidad",
      description: "Antes de cerrar paredes, realizamos una prueba de presión en toda la instalación para garantizar al 100% la ausencia de fugas.",
      icon: (
        <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-brand-primary/10 text-brand-primary">
          <DocumentCheckIcon className="w-8 h-8" />
        </div>
      ),
    },
    {
      title: "Garantía por Escrito",
      description: "Todas nuestras instalaciones de fontanería, calefacción y desagües quedan cubiertas por una garantía firmada.",
      icon: (
        <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-brand-primary/10 text-brand-primary">
          <SparklesIcon className="w-8 h-8" />
        </div>
      ),
    },
  ];

  const solutions = [
    {
      title: "Renovación Integral de Tuberías",
      description: "Sustituimos el 100% de la instalación antigua (agua y desagües) por tuberías nuevas (multicapa, PEX o cobre), eliminando cualquier riesgo de fugas o contaminación.",
      icon: (
        <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-brand-primary/10 text-brand-primary">
          <CheckCircleIcon className="w-8 h-8" />
        </div>
      ),
    },
    {
      title: "Caudal y Presión Óptimos Garantizados",
      description: "Calculamos las secciones de las tuberías para asegurar una presión de agua perfecta y constante en todos los puntos de la casa, incluso con varios grifos abiertos a la vez.",
      icon: (
        <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-brand-primary/10 text-brand-primary">
          <BoltIcon className="w-8 h-8" />
        </div>
      ),
    },
    {
      title: "Diseño a Medida para tu Comodidad",
      description: "Planificamos contigo la ubicación de cada toma de agua y desagüe para que tu nuevo baño o cocina sean tan funcionales como los imaginas, sin limitaciones.",
      icon: (
        <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-brand-primary/10 text-brand-primary">
          <CogIcon className="w-8 h-8" />
        </div>
      ),
    },
    {
      title: "Prueba de Estanqueidad y Certificación",
      description: "Antes de tapar, realizamos una prueba de presión certificada. Te entregamos una instalación 100% fiable, garantizada por escrito y lista para décadas de uso sin preocupaciones.",
      icon: (
        <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-brand-primary/10 text-brand-primary">
          <DocumentCheckIcon className="w-8 h-8" />
        </div>
      ),
    },
  ];

  const benefits = [
    {
      title: "El Placer de una Ducha Perfecta",
      description: "Disfruta de una presión de agua abundante y constante en todo momento. Se acabaron los cambios de temperatura y los chorros de agua débiles.",
      icon: (
        <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-brand-primary/10 text-brand-primary">
          <WrenchScrewdriverIcon className="w-8 h-8" />
        </div>
      ),
    },
    {
      title: "Agua Pura y sin Sabores Raros",
      description: "Al eliminar las tuberías viejas, garantizas que el agua que bebes y con la que cocinas está libre de óxido y partículas metálicas, mejorando su sabor y calidad.",
      icon: (
        <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-brand-primary/10 text-brand-primary">
          <HomeIcon className="w-8 h-8" />
        </div>
      ),
    },
    {
      title: "Revalorización Real de tu Vivienda",
      description: "Una instalación de fontanería y calefacción nueva y certificada es uno de los argumentos más sólidos en la venta o alquiler de una propiedad. Aumenta su valor de tasación.",
      icon: (
        <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-brand-primary/10 text-brand-primary">
          <ChartBarIcon className="w-8 h-8" />
        </div>
      ),
    },
    {
      title: "Tranquilidad para las Próximas Décadas",
      description: "Saber que todas las tuberías de tu casa son nuevas te da una paz mental que no tiene precio. Olvídate de averías, fugas y preocupaciones durante muchos, muchos años.",
      icon: (
        <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-brand-primary/10 text-brand-primary">
          <ShieldCheckIcon className="w-8 h-8" />
        </div>
      ),
    },
  ];

  const services = [
    {
      title: "Instalación de Agua Fría y Caliente (ACS)",
      description: "Renovamos por completo la red de tuberías de agua sanitaria, utilizando materiales modernos que garantizan durabilidad y potabilidad.",
      icon: (
        <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-brand-primary/10 text-brand-primary">
          <WrenchScrewdriverIcon className="w-8 h-8" />
        </div>
      ),
    },
    {
      title: "Red de Saneamiento y Desagües",
      description: "Diseñamos e instalamos una nueva red de desagües de PVC con las pendientes y diámetros correctos para evitar atascos y malos olores.",
      icon: (
        <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-brand-primary/10 text-brand-primary">
          <HomeIcon className="w-8 h-8" />
        </div>
      ),
    },
    {
      title: "Instalación de Calefacción por Radiadores",
      description: "Montamos circuitos de calefacción, ya sea bitubo o monotubo, y colocamos los radiadores en los puntos óptimos para un confort térmico ideal.",
      icon: (
        <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-brand-primary/10 text-brand-primary">
          <SunIcon className="w-8 h-8" />
        </div>
      ),
    },
    {
      title: "Montaje de Griferías y Sanitarios",
      description: "Instalamos todo tipo de griferías (monomando, termostáticas), sanitarios (inodoros, bidés), platos de ducha y bañeras con precisión.",
      icon: (
        <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-brand-primary/10 text-brand-primary">
          <WrenchScrewdriverIcon className="w-8 h-8" />
        </div>
      ),
    },
    {
      title: "Conexión de Electrodomésticos",
      description: "Realizamos las conexiones de agua y desagüe para todos los electrodomésticos de tu cocina y lavadero: lavadora, lavavajillas, frigorífico, etc.",
      icon: (
        <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-brand-primary/10 text-brand-primary">
          <CogIcon className="w-8 h-8" />
        </div>
      ),
    },
    {
      title: "Instalación de Sistemas de Aerotermia",
      description: "Integramos sistemas modernos y eficientes de aerotermia para la producción de agua caliente sanitaria y climatización, reduciendo tu consumo energético.",
      icon: (
        <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-brand-primary/10 text-brand-primary">
          <SunIcon className="w-8 h-8" />
        </div>
      ),
    },
  ];

  return (
    <>
      <Hero
        title="Servicio de Fontanería para tu Reforma Integral"
        titleLines={[
          "Servicio de Fontanería",
          "para tu Reforma Integral",
          "en Barcelona y Vallès"
        ]}
        subtitle="Instalaciones de agua sanitaria (fría y caliente), desagües y calefacción completamente nuevas. Garantizamos cero fugas y una presión óptima para tu confort en Barcelona y el Vallès Occidental."
        primaryCTA={{
          text: "Solicita Presupuesto de Fontanería",
          href: "/contacto"
        }}
        backgroundImage="/images/hero-bg.webp"
      />
      <FeatureGrid
        title="Instalaciones de Fontanería Hechas para Durar"
        subtitle="Tu tranquilidad es nuestra prioridad. Por eso solo trabajamos con instaladores cualificados y materiales de primeras marcas que garantizan una instalación fiable y duradera."
        features={features}
        columns={4}
      />
      <AboutSection
        logoPath="/images/reformix-logo-vertical-white.png"
        text="En Reformix Barcelona, nuestro equipo incluye fontaneros-calefactores propios. Esto elimina problemas de coordinación y retrasos, asegurando que la instalación de tuberías, desagües y radiadores se ejecute en el momento exacto de la obra. Nos hacemos responsables de cada junta y cada conexión, garantizando una integración perfecta con la albañilería y los acabados en tu vivienda de Barcelona o el Vallès Occidental."
      />
      <FeatureGrid
        title="¿Una Fontanería Antigua? Un Riesgo Oculto en tu Reforma"
        subtitle="Mantener tuberías viejas de plomo o hierro en una reforma es arriesgar tu inversión. Lo que no se ve es tan importante como lo que se ve. Una avería puede arruinar paredes, suelos y muebles nuevos."
        features={[
          {
            title: "Fugas y Humedades",
            description: "Las tuberías antiguas con uniones desgastadas son una bomba de relojería. Una pequeña fuga oculta puede causar humedades, moho y daños estructurales graves.",
            icon: (
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-brand-primary/10 text-brand-primary">
                <ExclamationCircleIcon className="w-8 h-8" />
              </div>
            ),
          },
          {
            title: "Poca Presión de Agua",
            description: "La cal y el óxido acumulados durante años reducen el diámetro interior de las tuberías, provocando una presión de agua insuficiente en duchas y grifos.",
            icon: (
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-brand-primary/10 text-brand-primary">
                <WrenchScrewdriverIcon className="w-8 h-8" />
              </div>
            ),
          },
          {
            title: "Materiales Obsoletos y Nocivos",
            description: "Las tuberías de plomo, prohibidas desde hace años, siguen presentes en fincas antiguas y pueden contaminar el agua. Las de hierro se corroen, afectando al sabor y color del agua.",
            icon: (
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-brand-primary/10 text-brand-primary">
                <ShieldCheckIcon className="w-8 h-8" />
              </div>
            ),
          },
          {
            title: "Distribución Ineficiente",
            description: "Una instalación antigua no está pensada para las necesidades actuales: lavavajillas, duchas termostáticas, etc. Esto limita el diseño y la funcionalidad de tu nueva cocina o baño.",
            icon: (
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-brand-primary/10 text-brand-primary">
                <CogIcon className="w-8 h-8" />
              </div>
            ),
          },
        ]}
        columns={4}
      />
      <FeatureGrid
        title="Una Instalación de Fontanería Nueva para tu Tranquilidad Futura"
        subtitle="No nos limitamos a cambiar tuberías. Diseñamos e instalamos una red de fontanería completamente nueva, eficiente y adaptada a tu estilo de vida, utilizando los mejores materiales del mercado."
        features={solutions}
        columns={4}
      />
      <FeatureGrid
        title="Invierte en Fontanería, Gana en Calidad de Vida"
        subtitle="Renovar la instalación de fontanería no es un gasto, es una inversión directa en el confort, la salud y el valor de tu hogar. Disfruta de beneficios tangibles desde el primer día."
        features={benefits}
        columns={4}
      />
      <FeatureGrid
        title="Servicios Integrales de Fontanería para tu Reforma"
        subtitle="Desde la infraestructura básica hasta los detalles finales, cubrimos todas las áreas de la fontanería, calefacción y saneamiento para ofrecerte una solución completa y coordinada."
        features={services}
        columns={3}
      />
      <WhyChooseUs />
      <TestimonialsCarousel />
      <FAQTwoColumn
        items={[
          {
            question: "¿Es realmente necesario cambiar toda la fontanería si solo reformo el baño?",
            answer: "Si tu vivienda tiene más de 20-25 años, es muy recomendable. Las tuberías antiguas (hierro, plomo) se degradan y pueden causar fugas graves que arruinarían tu reforma nueva. Cambiar todo a la vez es más seguro y, a la larga, más económico que reparar una fuga tras otra."
          },
          {
            question: "¿Qué tipo de tuberías instaláis y por qué?",
            answer: "Utilizamos principalmente tuberías multicapa. Este material combina las ventajas del plástico (flexibilidad, sin corrosión ni cal) y del metal (resistencia, estabilidad). Ofrece la máxima fiabilidad y durabilidad del mercado actual."
          },
          {
            question: "¿Cuánto tiempo se tarda en renovar toda la instalación?",
            answer: "Dentro de una reforma integral, la fase de fontanería (desde el desmontaje hasta la prueba de presión) suele durar entre 3 y 5 días hábiles, dependiendo del tamaño de la vivienda. Siempre coordinado con el resto de trabajos."
          },
          {
            question: "¿Puedo seguir viviendo en casa durante los trabajos de fontanería?",
            answer: "Durante la fase de sustitución de tuberías, el suministro de agua estará cortado. Si la reforma es integral, no es viable vivir en la vivienda. Si es una reforma parcial, planificamos los trabajos para minimizar las molestias, pero debes prever al menos 2-3 días sin agua corriente."
          },
          {
            question: "¿Qué garantía ofrecéis sobre la nueva instalación?",
            answer: "Ofrecemos una garantía completa por escrito que cubre tanto los materiales como la mano de obra. Nuestra prueba de estanqueidad es el primer sello de calidad, asegurando una instalación sin fugas desde el primer día."
          },
          {
            question: "¿La instalación de calefacción por radiadores está incluida?",
            answer: "Sí, forma parte de nuestros servicios de fontanería. Diseñamos e instalamos el circuito completo de calefacción y la colocación de los radiadores. Si estás pensando en sistemas más eficientes como la aerotermia, también podemos asesorarte e instalarlo."
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
        title="¿Listo para Ganar en Tranquilidad y Confort?"
        description="Da el paso definitivo para asegurar el futuro de tu hogar. Solicita ahora un presupuesto detallado para la renovación de la fontanería de tu reforma. Analizaremos tu caso para ofrecerte una solución a medida, duradera y con todas las garantías."
        buttonText="Pedir Presupuesto Detallado"
        buttonHref="/contacto"
        features={[
          "Presupuesto sin compromiso",
          "Asesoramiento técnico incluido",
          "Garantía por escrito"
        ]}
      />
    </>
  );
}

