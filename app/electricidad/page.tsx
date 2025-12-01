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
  BookmarkIcon,
  CubeIcon,
  ShieldCheckIcon,
  DocumentCheckIcon,
  ExclamationTriangleIcon,
  XMarkIcon,
  WrenchScrewdriverIcon,
  ChartBarIcon,
  LightBulbIcon,
  CurrencyEuroIcon,
  ArrowTrendingUpIcon,
  HomeIcon,
  BoltIcon,
  CogIcon,
} from '@heroicons/react/24/solid';

export const metadata: Metadata = {
  title: "Electricidad para Reformas en Barcelona y Vallès | Reformix",
  description: "Servicios de electricidad para reformas en Barcelona y Vallès. Actualizamos tu instalación eléctrica para cumplir la normativa y mejorar la seguridad. Pide presupuesto.",
  ...generateStandardMetadata({
    title: "Electricidad para Reformas en Barcelona y Vallès | Reformix",
    description: "Servicios de electricidad para reformas en Barcelona y Vallès. Actualizamos tu instalación eléctrica para cumplir la normativa y mejorar la seguridad. Pide presupuesto.",
    url: "https://reformix.barcelona/electricidad",
    pagePath: "/electricidad",
    keywords: ["electricista reformas Barcelona", "instalación eléctrica Barcelona", "boletín eléctrico", "electricidad reformas"],
  }),
};

export default async function ElectricidadPage() {
  const features = [
    {
      title: "Instaladores Autorizados",
      description: "Contamos con todas las certificaciones para emitir el Boletín Eléctrico (CIE).",
      icon: (
        <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-brand-primary/10 text-brand-primary">
          <BookmarkIcon className="w-8 h-8" />
        </div>
      ),
    },
    {
      title: "Materiales de Primer Nivel",
      description: "Usamos componentes de marcas líderes como Simon, Legrand o Schneider Electric.",
      icon: (
        <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-brand-primary/10 text-brand-primary">
          <CubeIcon className="w-8 h-8" />
        </div>
      ),
    },
    {
      title: "Garantía por Escrito",
      description: "Todos nuestros trabajos de instalación eléctrica quedan cubiertos por una garantía por escrito.",
      icon: (
        <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-brand-primary/10 text-brand-primary">
          <ShieldCheckIcon className="w-8 h-8" />
        </div>
      ),
    },
    {
      title: "Normativa Vigente",
      description: "Realizamos cada instalación siguiendo rigurosamente el Reglamento Electrotécnico (REBT).",
      icon: (
        <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-brand-primary/10 text-brand-primary">
          <DocumentCheckIcon className="w-8 h-8" />
        </div>
      ),
    },
  ];

  const solutions = [
    {
      title: "Planificación Inteligente de Puntos de Luz y Enchufes",
      description: "Analizamos tus rutinas para que nunca te falte un enchufe o luz. Colocamos cada interruptor y toma de corriente en el lugar exacto donde lo necesitas.",
      icon: (
        <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-brand-primary/10 text-brand-primary">
          <LightBulbIcon className="w-8 h-8" />
        </div>
      ),
    },
    {
      title: "Renovación Integral del Cableado",
      description: "Sustituimos el 100% del cableado antiguo por materiales de alta calidad, libres de halógenos y con la sección adecuada para soportar todos tus electrodomésticos sin riesgo.",
      icon: (
        <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-brand-primary/10 text-brand-primary">
          <BoltIcon className="w-8 h-8" />
        </div>
      ),
    },
    {
      title: "Instalación de un Nuevo Cuadro Eléctrico Digital",
      description: "Montamos un cuadro moderno con protecciones diferenciales y magnetotérmicas que actúan al instante ante cualquier anomalía, protegiendo tus equipos y a tu familia.",
      icon: (
        <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-brand-primary/10 text-brand-primary">
          <CogIcon className="w-8 h-8" />
        </div>
      ),
    },
    {
      title: "Emisión del Certificado de Instalación (CIE)",
      description: "Al finalizar, te entregamos el Boletín Eléctrico oficial. Este documento es tu garantía de que la instalación es 100% legal, segura y cumple con la normativa, revalorizando tu vivienda.",
      icon: (
        <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-brand-primary/10 text-brand-primary">
          <DocumentCheckIcon className="w-8 h-8" />
        </div>
      ),
    },
  ];

  const benefits = [
    {
      title: "Confort y Funcionalidad Total",
      description: "Disfruta de la comodidad de tener enchufes siempre a mano, puntos de luz que crean el ambiente perfecto y la libertad de no volver a usar un alargador.",
      icon: (
        <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-brand-primary/10 text-brand-primary">
          <LightBulbIcon className="w-8 h-8" />
        </div>
      ),
    },
    {
      title: "Ahorro Visible Mes a Mes",
      description: "Un cableado nuevo y un estudio de iluminación LED eliminan las pérdidas de energía. El resultado es un menor consumo que se refleja directamente en tu factura de la luz.",
      icon: (
        <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-brand-primary/10 text-brand-primary">
          <CurrencyEuroIcon className="w-8 h-8" />
        </div>
      ),
    },
    {
      title: "Más Valor para tu Vivienda",
      description: "Una instalación eléctrica nueva y certificada es un argumento de venta de primer nivel. Aumenta el valor de tasación de tu propiedad y acelera una posible venta o alquiler.",
      icon: (
        <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-brand-primary/10 text-brand-primary">
          <ArrowTrendingUpIcon className="w-8 h-8" />
        </div>
      ),
    },
    {
      title: "Tranquilidad para las Próximas Décadas",
      description: "Saber que tu instalación es 100% segura, cumple la normativa y está preparada para el futuro te da una tranquilidad que no tiene precio.",
      icon: (
        <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-brand-primary/10 text-brand-primary">
          <ShieldCheckIcon className="w-8 h-8" />
        </div>
      ),
    },
  ];

  const services = [
    {
      title: "Modernización del Cuadro Eléctrico",
      description: "Sustituimos el cuadro antiguo por uno nuevo con protecciones diferenciales y magnetotérmicas que garantizan la máxima seguridad.",
      icon: (
        <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-brand-primary/10 text-brand-primary">
          <CogIcon className="w-8 h-8" />
        </div>
      ),
    },
    {
      title: "Renovación Integral del Cableado",
      description: "Retiramos todo el cableado obsoleto y lo reemplazamos por material de alta calidad, libre de halógenos y con la sección adecuada.",
      icon: (
        <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-brand-primary/10 text-brand-primary">
          <BoltIcon className="w-8 h-8" />
        </div>
      ),
    },
    {
      title: "Creación de Puntos de Luz y Enchufes",
      description: "Planificamos contigo la distribución de cada interruptor, enchufe y toma de datos para una funcionalidad total en tu día a día.",
      icon: (
        <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-brand-primary/10 text-brand-primary">
          <LightBulbIcon className="w-8 h-8" />
        </div>
      ),
    },
    {
      title: "Proyectos de Iluminación LED",
      description: "Diseñamos sistemas de iluminación eficientes y estéticos que crean ambientes acogedores y reducen tu consumo energético.",
      icon: (
        <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-brand-primary/10 text-brand-primary">
          <LightBulbIcon className="w-8 h-8" />
        </div>
      ),
    },
    {
      title: "Preinstalación de Domótica",
      description: "Dejamos la infraestructura preparada para que en el futuro puedas instalar fácilmente sistemas de control de luces, persianas y clima.",
      icon: (
        <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-brand-primary/10 text-brand-primary">
          <CogIcon className="w-8 h-8" />
        </div>
      ),
    },
    {
      title: "Recarga de Vehículo Eléctrico",
      description: "Realizamos la instalación completa del punto de recarga en tu plaza de garaje, cumpliendo con toda la normativa vigente.",
      icon: (
        <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-brand-primary/10 text-brand-primary">
          <BoltIcon className="w-8 h-8" />
        </div>
      ),
    },
  ];

  return (
    <>
      <Hero
        title="Servicio de Electricidad para tu Reforma: Seguridad y Eficiencia Garantizadas"
        titleLines={[
          "Servicio de Electricidad",
          "para tu Reforma",
          "Seguridad y Eficiencia"
        ]}
        subtitle="Renovamos por completo la instalación eléctrica de tu hogar para que cumpla con la normativa y se adapte a tus necesidades futuras. Gana en tranquilidad y confort para tu vivienda en Barcelona y el Vallès."
        primaryCTA={{
          text: "Solicita Presupuesto Detallado",
          href: "/contacto"
        }}
        backgroundImage="/images/hero-bg.webp"
      />
      <FeatureGrid
        title="Confianza y Calidad en Cada Conexión"
        subtitle="Tu tranquilidad es nuestra prioridad. Por eso, solo trabajamos con instaladores autorizados y materiales de primeras marcas."
        features={features}
        columns={4}
      />
      <AboutSection
        logoPath="/images/reformix-logo-vertical-white.png"
        text="En Reformix Barcelona, contamos con un equipo propio de instaladores eléctricos autorizados. Esto nos permite coordinar la renovación de la instalación eléctrica con el resto de oficios (albañilería, pladur, pintura) sin demoras ni intermediarios. Nos hacemos responsables de que cada enchufe, interruptor y punto de luz cumpla con la normativa y con tus expectativas, trabajando en Barcelona, Sabadell y todo el Vallès Occidental."
      />
      <FeatureGrid
        title="Riesgos de una Instalación Eléctrica Deficiente"
        subtitle="Tu nueva cocina o baño merecen una instalación eléctrica a la altura. Mantener un cableado antiguo o mal planificado no solo es peligroso, sino que limita el potencial de tu reforma y devalúa tu inversión."
        features={[
          {
            title: "Sobrecargas y Cortocircuitos",
            description: "Un cableado viejo o mal dimensionado no soporta la carga de los electrodomésticos modernos, provocando que salten los plomos e incluso riesgo de incendio.",
            icon: (
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-brand-primary/10 text-brand-primary">
                <ExclamationTriangleIcon className="w-8 h-8" />
              </div>
            ),
          },
          {
            title: "Incumplimiento de la Normativa",
            description: "Una instalación que no cumple el Reglamento Electrotécnico (REBT) no pasará una inspección (ITE) y puede traerte problemas legales y con el seguro.",
            icon: (
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-brand-primary/10 text-brand-primary">
                <XMarkIcon className="w-8 h-8" />
              </div>
            ),
          },
          {
            title: "Puntos de Luz y Enchufes Mal Ubicados",
            description: "La falta de enchufes donde los necesitas o una iluminación pobre arruinan la funcionalidad de un espacio, obligándote a usar alargadores y creando zonas oscuras.",
            icon: (
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-brand-primary/10 text-brand-primary">
                <WrenchScrewdriverIcon className="w-8 h-8" />
              </div>
            ),
          },
          {
            title: "Devaluación de la Vivienda",
            description: "Una instalación eléctrica obsoleta es uno de los primeros puntos negativos que detecta un tasador o comprador, restando valor a tu propiedad.",
            icon: (
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-brand-primary/10 text-brand-primary">
                <ChartBarIcon className="w-8 h-8" />
              </div>
            ),
          },
        ]}
        columns={4}
      />
      <FeatureGrid
        title="Instalaciones Eléctricas que Suman Valor y Seguridad"
        subtitle="No se trata solo de cambiar cables, sino de crear una red eléctrica inteligente para tu vida actual y futura. Nos encargamos de todo para que solo te preocupes de disfrutar tu nuevo espacio con total tranquilidad."
        features={solutions}
        columns={4}
      />
      <FeatureGrid
        title="Invierte en Electricidad, Gana en Confort y Valor"
        subtitle="Renovar la instalación eléctrica no es un gasto, es una inversión directa en tu calidad de vida y en el patrimonio familiar. Disfruta de beneficios tangibles desde el primer día."
        features={benefits}
        columns={4}
      />
      <FeatureGrid
        title="Nuestros Servicios de Electricidad para Reformas"
        subtitle="Cubrimos todas las áreas de la instalación eléctrica para garantizar una solución integral, desde la infraestructura básica hasta los detalles finales que marcan la diferencia."
        features={services}
        columns={3}
      />
      <WhyChooseUs />
      <TestimonialsCarousel />
      <FAQTwoColumn
        items={[
          {
            question: "¿Es obligatorio cambiar la instalación eléctrica en una reforma integral?",
            answer: "Legalmente no siempre es obligatorio, pero es altamente recomendable. Una instalación de más de 20 años puede no cumplir la normativa (REBT) ni soportar la carga de electrodomésticos modernos. Aprovechar la reforma es la forma más inteligente de garantizar la seguridad y eficiencia de tu hogar."
          },
          {
            question: "¿Qué es el Boletín Eléctrico (CIE) y por qué es importante?",
            answer: "El Certificado de Instalación Eléctrica (CIE) es un documento oficial que certifica que tu instalación cumple con todos los requisitos legales y de seguridad. Es imprescindible para dar de alta un nuevo suministro, aumentar la potencia contratada o legalizar cualquier modificación."
          },
          {
            question: "¿Puedo añadir más enchufes donde yo quiera?",
            answer: "Sí, durante la fase de diseño planificamos contigo la ubicación de cada nuevo enchufe, interruptor o punto de luz. Nuestro equipo técnico te asesorará sobre las mejores soluciones y las limitaciones de la normativa para garantizar una distribución cómoda y segura."
          },
          {
            question: "¿Cuánto se tarda en renovar la instalación eléctrica de un piso?",
            answer: "El tiempo varía según el tamaño del piso. Sin embargo, al estar coordinado dentro de una reforma, el proceso es muy eficiente. La fase de paso de cables se realiza en 2-4 días, y la instalación de mecanismos se hace al final, sin añadir tiempo extra al plazo total de la reforma."
          },
          {
            question: "¿Cuánto cuesta renovar la instalación eléctrica?",
            answer: "El precio final depende de los metros cuadrados de la vivienda, el número de circuitos y la gama de los mecanismos elegidos. Tras una visita técnica, te entregamos un presupuesto cerrado y detallado para que conozcas el coste exacto desde el principio, sin sorpresas."
          },
          {
            question: "¿Vale la pena preparar la casa para la domótica?",
            answer: "Totalmente. Aunque no la instales ahora, dejar la preinstalación hecha durante la obra (como pasar un cable neutro a los interruptores) es muy económico y te da la flexibilidad de añadir sistemas inteligentes de iluminación o persianas en el futuro sin necesidad de nuevas obras."
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
        title="¿Hablamos de la Instalación Eléctrica de tu Reforma?"
        description="Da el paso hacia una vivienda más segura, cómoda y eficiente. Contáctanos sin compromiso para obtener un presupuesto cerrado y un asesoramiento claro para tu proyecto en Barcelona, Sabadell o cualquier punto del Vallès Occidental."
        buttonText="Pedir Presupuesto Ahora"
        buttonHref="/contacto"
        features={[
          "Visita técnica gratuita",
          "Presupuesto 100% cerrado",
          "Garantía por escrito"
        ]}
      />
    </>
  );
}

