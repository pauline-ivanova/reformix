import Hero from "@/app/components/blocks/Hero";
import FeatureGrid from "@/app/components/blocks/FeatureGrid";
import AboutSection from "@/app/components/blocks/AboutSection";
import TestimonialsCarousel from "@/app/components/blocks/TestimonialsCarousel";
import FAQTwoColumn from "@/app/components/blocks/FAQTwoColumn";
import ServiceAreas from "@/app/components/blocks/ServiceAreas";
import CTA from "@/app/components/blocks/CTA";
import JsonLd from "@/app/components/common/JsonLd";
import { generateFAQSchema, generateServiceSchema, generateBreadcrumbSchema } from "@/app/components/common/JsonLd";
import Image from "next/image";
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
  title: "Fontanería en Barcelona y Vallès Occidental | Reformix",
  description: "Renovamos la instalación de fontanería en Barcelona y Vallès. Materiales duraderos, sin fugas y presión óptima. Presupuesto cerrado. ¡Pide presupuesto!",
  ...generateStandardMetadata({
    title: "Fontanería en Barcelona y Vallès Occidental | Reformix",
    description: "Renovamos la instalación de fontanería en Barcelona y Vallès. Materiales duraderos, sin fugas y presión óptima. Presupuesto cerrado. ¡Pide presupuesto!",
    url: "https://www.reformix.barcelona/fontaneria",
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
        title="Servicio de Fontanería"
        titleLines={[
          "Servicio de",
          "Fontanería"
        ]}
        subtitle="Renovamos por completo la instalación de fontanería de tu hogar con materiales duraderos y soluciones eficientes. Garantizamos instalaciones sin fugas y presión óptima para tu confort en Barcelona y el Vallès Occidental."
        primaryCTA={{
          text: "Solicitar Presupuesto",
          href: "/contacto"
        }}
        backgroundImage="/images/fontaneria.webp"
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
        title={
          <>
            Una Instalación de Fontanería Nueva
            <br />
            para tu Tranquilidad Futura
          </>
        }
        subtitle="No nos limitamos a cambiar tuberías. Diseñamos e instalamos una red de fontanería completamente nueva, eficiente y adaptada a tu estilo de vida, utilizando los mejores materiales del mercado."
        features={solutions}
        columns={3}
        backgroundClassName="bg-gray-50"
        paddingClassName="py-24"
      />
      <FeatureGrid
        title={
          <>
            Invierte en Fontanería,
            <br />
            Gana en Calidad de Vida
          </>
        }
        subtitle="Renovar la instalación de fontanería no es un gasto, es una inversión directa en el confort, la salud y el valor de tu hogar. Disfruta de beneficios tangibles desde el primer día."
        features={benefits}
        columns={3}
      />
      <FeatureGrid
        title={
          <>
            Servicios Integrales de Fontanería
            <br />
            para tu Reforma
          </>
        }
        subtitle="Desde la infraestructura básica hasta los detalles finales, cubrimos todas las áreas de la fontanería, calefacción y saneamiento para ofrecerte una solución completa y coordinada."
        features={services}
        columns={3}
      />
      <TestimonialsCarousel
        title="La Tranquilidad de Saber que Todo Funciona Bien"
        subtitle="Nuestros clientes no solo valoran la calidad de los materiales, sino la tranquilidad que les aporta una instalación bien hecha. Su confianza es nuestro mejor aval."
        testimonials={[
          {
            text: "Vivíamos con el miedo de que el fregadero se atascara cada semana. Revisaron toda la red de desagüe y corrigieron pendientes y diámetros. Desde entonces, ni olores ni burbujas. Se nota cuando alguien sabe lo que hace.",
            initials: "RV",
            name: "Raúl V.",
            location: "Badalona"
          },
          {
            text: "En invierno el salón era un congelador y el pasillo un horno. Irina vino, midió cada estancia y nos recomendó el circuito adecuado. Instalaron radiadores nuevos y ahora la temperatura se reparte por igual. ¡Parece otra casa!",
            initials: "GP",
            name: "Gemma P.",
            location: "Sant Cugat del Vallès"
          },
          {
            text: "Tenía la lavadora conectada a medias y siempre perdía unas gotas. Con Reformix revisaron todo, pusieron llaves de corte nuevas y dejaron el mueble sin un tubo a la vista. Por fin una cocina ordenada… y seca.",
            initials: "LC",
            name: "Laura C.",
            location: "Terrassa"
          },
          {
            text: "Nos animamos a instalar aerotermia y fue la mejor decisión. El agua caliente sale al instante, la casa se mantiene templada y el consumo ha bajado bastante. Además, el equipo apenas se oye. Muy recomendable.",
            initials: "JT",
            name: "Jordi T.",
            location: "Castelldefels"
          },
          {
            text: "Las tuberías eran de cobre antiguo y el agua apenas salía. Los técnicos las cambiaron sin romper media casa y el cambio se nota desde el primer día. La presión es constante y el agua sale limpia, sin ese sabor metálico de antes.",
            initials: "NS",
            name: "Núria S.",
            location: "Barcelona (Poble-sec)"
          }
        ]}
      />
      <FeatureGrid
        title={
          <>
            Tu Nueva Fontanería en 6 Pasos:
            <br />
            Seguridad y Precisión
          </>
        }
        subtitle="Hemos diseñado un proceso de trabajo que garantiza la máxima calidad en cada etapa, desde el diseño inicial hasta la certificación final. Así trabajamos para asegurar tu total tranquilidad."
        backgroundClassName="bg-gray-50"
        paddingClassName="py-24"
        features={[
          {
            title: "Diseño y Planificación del Circuito",
            description: "Analizamos tus necesidades (número de baños, tipo de grifería, calefacción) y diseñamos sobre plano la distribución óptima de las tuberías y desagües.",
            icon: (
              <div className="inline-flex items-center justify-center w-24 h-24 rounded-lg overflow-hidden">
                <Image src="/images/fontaneria-paso-1.webp" alt="Paso 1" width={96} height={96} className="w-full h-full object-cover" />
              </div>
            ),
          },
          {
            title: "Desmontaje de la Instalación Antigua",
            description: "Retiramos con cuidado toda la instalación existente, desde las tuberías de plomo o hierro hasta los sanitarios y radiadores viejos, gestionando los residuos.",
            icon: (
              <div className="inline-flex items-center justify-center w-24 h-24 rounded-lg overflow-hidden">
                <Image src="/images/fontaneria-paso-2.webp" alt="Paso 2" width={96} height={96} className="w-full h-full object-cover" />
              </div>
            ),
          },
          {
            title: "Ejecución de Rozas e Instalación",
            description: "Realizamos las rozas (regatas) necesarias con precisión y montamos toda la nueva red de tuberías de agua y desagües, así como los circuitos de calefacción.",
            icon: (
              <div className="inline-flex items-center justify-center w-24 h-24 rounded-lg overflow-hidden">
                <Image src="/images/fontaneria-paso-3.webp" alt="Paso 3" width={96} height={96} className="w-full h-full object-cover" />
              </div>
            ),
          },
          {
            title: "Prueba de Estanqueidad (Presión)",
            description: "Antes de cerrar las paredes, llenamos el circuito de agua a una presión superior a la normal durante 24 horas. Es nuestra garantía de que no hay ni una sola fuga.",
            icon: (
              <div className="inline-flex items-center justify-center w-24 h-24 rounded-lg overflow-hidden">
                <Image src="/images/fontaneria-paso-4.webp" alt="Paso 4" width={96} height={96} className="w-full h-full object-cover" />
              </div>
            ),
          },
          {
            title: "Albañilería y Acabados",
            description: "Una vez superada la prueba, nuestros albañiles tapan las rozas y preparan las paredes y suelos para los acabados finales (alicatado, pintura).",
            icon: (
              <div className="inline-flex items-center justify-center w-24 h-24 rounded-lg overflow-hidden">
                <Image src="/images/fontaneria-paso-5.webp" alt="Paso 5" width={96} height={96} className="w-full h-full object-cover" />
              </div>
            ),
          },
          {
            title: "Instalación de Sanitarios y Grifería",
            description: "Con los acabados listos, procedemos al montaje final de todos los sanitarios, platos de ducha, muebles de baño, radiadores y griferías, realizando las últimas comprobaciones.",
            icon: (
              <div className="inline-flex items-center justify-center w-24 h-24 rounded-lg overflow-hidden">
                <Image src="/images/fontaneria-paso-6.webp" alt="Paso 6" width={96} height={96} className="w-full h-full object-cover" />
              </div>
            ),
          },
        ]}
        columns={3}
      />
      {(() => {
        const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://www.reformix.barcelona';
        const faqs = [
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
        ];
        const faqSchema = generateFAQSchema(faqs);
        const serviceSchema = generateServiceSchema({
          name: "Servicio de Fontanería",
          description: "Renovamos por completo la instalación de fontanería de tu hogar con materiales duraderos y soluciones eficientes. Garantizamos instalaciones sin fugas y presión óptima.",
          provider: {
            '@type': 'HomeAndConstructionBusiness',
            name: 'Reformix Barcelona',
          },
          serviceType: 'Plumbing Installation',
          url: '/fontaneria',
        });
        const breadcrumbSchema = generateBreadcrumbSchema([
          { name: 'Inicio', url: '/' },
          { name: 'Servicios Técnicos', url: '/servicios-tecnicos' },
          { name: 'Fontanería', url: '/fontaneria' },
        ]);
        
        return (
          <>
            {faqSchema && <JsonLd data={faqSchema} />}
            {serviceSchema && <JsonLd data={serviceSchema} />}
            {breadcrumbSchema && <JsonLd data={breadcrumbSchema} />}
            <FAQTwoColumn titleLines={["Preguntas Frecuentes sobre", "Fontanería"]} items={faqs} />
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
        title="¿Listo para Ganar en Tranquilidad y Confort?"
        description="Da el paso definitivo para asegurar el futuro de tu hogar. Solicita ahora un presupuesto detallado para la renovación de la fontanería de tu reforma. Analizaremos tu caso para ofrecerte una solución a medida, duradera y con todas las garantías."
        buttonText="Pedir Presupuesto Detallado"
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

