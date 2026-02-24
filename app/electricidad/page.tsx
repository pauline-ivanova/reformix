import Hero from "@/app/components/blocks/Hero";
import FeatureGrid from "@/app/components/blocks/FeatureGrid";
import AboutSection from "@/app/components/blocks/AboutSection";
import WhyChooseUs from "@/app/components/blocks/WhyChooseUs";
import TestimonialsCarousel from "@/app/components/blocks/TestimonialsCarousel";
import FAQTwoColumn from "@/app/components/blocks/FAQTwoColumn";
import ServiceAreas from "@/app/components/blocks/ServiceAreas";
import CTA from "@/app/components/blocks/CTA";
import JsonLd from "@/app/components/common/JsonLd";
import { generateFAQSchema, generateServiceSchema, generateBreadcrumbSchema } from "@/app/components/common/JsonLd";
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
  title: "Electricidad para Reformas en Barcelona | Reformix",
  description: "Servicios de electricidad para reformas en Barcelona y Vallès. Actualizamos tu instalación eléctrica para cumplir la normativa y mejorar la seguridad. ¡Pide presupuesto!",
  ...generateStandardMetadata({
    title: "Electricidad para Reformas en Barcelona | Reformix",
    description: "Servicios de electricidad para reformas en Barcelona y Vallès. Actualizamos tu instalación eléctrica para cumplir la normativa y mejorar la seguridad. ¡Pide presupuesto!",
    url: "https://www.reformix.barcelona/electricidad",
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
        title="Servicio de Electricidad para tu Reforma"
        titleLines={[
          "Servicio de Electricidad",
          "para tu Reforma"
        ]}
        subtitle="Renovamos por completo la instalación eléctrica de tu hogar para que cumpla con la normativa y se adapte a tus necesidades futuras. Gana en tranquilidad y confort para tu vivienda en Barcelona y el Vallès Occidental."
        primaryCTA={{
          text: "Solicitar Presupuesto",
          href: "/contacto"
        }}
        backgroundImage="/images/servicio-de-electricidad.webp"
        imageAlt="Instalación eléctrica profesional y segura en vivienda"
        overlayOpacity="strong"
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
        title={
          <>
            Riesgos de una Instalación<br />
            Eléctrica Deficiente
          </>
        }
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
        title={
          <>
            Instalaciones Eléctricas<br />
            que Suman Valor y Seguridad
          </>
        }
        subtitle="No se trata solo de cambiar cables, sino de crear una red eléctrica inteligente para tu vida actual y futura. Nos encargamos de todo para que solo te preocupes de disfrutar tu nuevo espacio con total tranquilidad."
        features={solutions}
        columns={4}
        backgroundClassName="bg-gray-50"
        paddingClassName="py-20 md:py-24"
      />
      <FeatureGrid
        title={
          <>
            Invierte en Electricidad,<br />
            Gana en Confort y Valor
          </>
        }
        subtitle="Renovar la instalación eléctrica no es un gasto, es una inversión directa en tu calidad de vida y en el patrimonio familiar. Disfruta de beneficios tangibles desde el primer día."
        features={benefits}
        columns={4}
      />
      <FeatureGrid
        title={
          <>
            Nuestros Servicios de Electricidad<br />
            para Reformas
          </>
        }
        subtitle="Cubrimos todas las áreas de la instalación eléctrica para garantizar una solución integral, desde la infraestructura básica hasta los detalles finales que marcan la diferencia."
        features={services}
        columns={3}
        backgroundClassName="bg-gray-50"
        paddingClassName="py-20 md:py-24"
      />
      <TestimonialsCarousel
        title={
          <>
            La Tranquilidad de Nuestros Clientes<br />
            es Nuestra Mejor Garantía
          </>
        }
        subtitle="La renovación de la instalación eléctrica es una de las partes más críticas de una reforma. Lee las opiniones de clientes de Barcelona y el Vallès Occidental que ya han confiado en nuestro equipo técnico para llevarla a cabo."
        testimonials={[
          {
            text: "El cableado tenía más de 30 años y cada dos por tres había bajones. Reformix renovó toda la instalación sin levantar media casa. Ahora todo va fino: ni chispazos ni sustos.",
            initials: "NV",
            name: "Nerea V.",
            location: "Sabadell"
          },
          {
            text: "Enchufes justos y alargadores por todas partes. Planificamos con el técnico cada punto de luz y toma de datos y, sinceramente, se nota en el día a día. Pequeño cambio, gran comodidad.",
            initials: "JL",
            name: "Júlia L.",
            location: "Sant Cugat del Vallès"
          },
          {
            text: "La iluminación era triste. Irina nos propuso un proyecto LED con tonos según la estancia: cálido en salón, blanco en cocina. La casa parece más grande y gasta menos. Un acierto.",
            initials: "AC",
            name: "Aina C.",
            location: "Terrassa"
          },
          {
            text: "Queríamos domótica pero sin obras eternas. Dejaron pasamuros y canalizaciones preparadas y las conexiones ocultas. Cuando toque, será conectar y listo. Muy previsores.",
            initials: "EP",
            name: "Enric P.",
            location: "Badalona"
          },
          {
            text: "Compramos un coche eléctrico y necesitábamos el punto de recarga en el garaje comunitario. Lo instalaron en una mañana, con certificación y todo en regla. Funciona perfecto y la tarifa está optimizada. Gracias, Reformix.",
            initials: "IG",
            name: "Irene G.",
            location: "L'Hospitalet de Llobregat"
          },
          {
            text: "Nos instalaron nuevas puertas y rodapiés en todo el piso. El acabado es impecable y le dio un aire totalmente renovado.",
            initials: "LG",
            name: "Laura G.",
            location: "Sabadell"
          }
        ]}
      />
      <section className="relative py-20 bg-white overflow-hidden">
        <div className="container mx-auto px-4 max-w-6xl">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 text-brand-text-heading">
            Tu Nueva Instalación Eléctrica<br />
            en 6 Pasos
          </h2>
          <p className="text-lg text-center text-brand-text-body mb-16 max-w-3xl mx-auto">
            Hemos diseñado un proceso claro y sin sorpresas para que tengas total visibilidad sobre tu proyecto, desde la primera llamada hasta la certificación final.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                number: '01',
                title: 'Contacto y Asesoramiento Inicial',
                description: 'Escuchamos atentamente tus ideas, necesidades de consumo y estilo de vida para ofrecerte un primer asesoramiento técnico sobre las mejores soluciones y la normativa vigente.',
              },
              {
                number: '02',
                title: 'Visita Técnica y Presupuesto Detallado',
                description: 'Uno de nuestros técnicos cualificados se desplaza a tu vivienda para realizar una auditoría completa del estado actual de la instalación. Con esa base, elaboramos un presupuesto detallado y sin sorpresas.',
              },
              {
                number: '03',
                title: 'Diseño y Planificación del Proyecto',
                description: 'Transformamos tus necesidades en un plano técnico preciso. Definimos la ubicación exacta de cada enchufe, interruptor y punto de luz, así como la distribución de los circuitos para garantizar un rendimiento óptimo.',
              },
              {
                number: '04',
                title: 'Ejecución de la Obra',
                description: 'Nuestros instaladores autorizados ejecutan el proyecto con la máxima precisión, coordinándose perfectamente con los demás oficios de la reforma para cumplir con los plazos y minimizar las molestias.',
              },
              {
                number: '05',
                title: 'Verificación y Pruebas de Seguridad',
                description: 'Antes de dar por finalizado el trabajo, sometemos la nueva instalación a un riguroso protocolo de pruebas para verificar la continuidad, el aislamiento y la respuesta de las protecciones.',
              },
              {
                number: '06',
                title: 'Entrega y Emisión del Boletín (CIE)',
                description: 'Con todo verificado, te hacemos entrega de la instalación. Además, tramitamos y te entregamos el Certificado de Instalación Eléctrica (CIE), el documento oficial que acredita su legalidad y calidad.',
              },
            ].map((step, index) => (
              <div key={index} className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow">
                <div className="mb-4">
                  <span className="text-5xl font-black text-brand-primary leading-none">
                    {step.number}
                  </span>
                </div>
                <h3 className="text-xl font-bold mb-3 text-brand-text-heading">
                  {step.title}
                </h3>
                <p className="text-base text-brand-text-body leading-relaxed">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
      {(() => {
        const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://www.reformix.barcelona';
        const faqs = [
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
            question: "¿Retiran los materiales antiguos?",
            answer: "Sí, nuestro servicio incluye el desmontaje y la retirada a un punto limpio autorizado de todos los elementos antiguos."
          },
          {
            question: "¿Vale la pena preparar la casa para la domótica?",
            answer: "Totalmente. Aunque no la instales ahora, dejar la preinstalación hecha durante la obra (como pasar un cable neutro a los interruptores) es muy económico y te da la flexibilidad de añadir sistemas inteligentes de iluminación o persianas en el futuro sin necesidad de nuevas obras."
          }
        ];
        const faqSchema = generateFAQSchema(faqs);
        const serviceSchema = generateServiceSchema({
          name: "Electricidad para Reformas en Barcelona y Vallès | Reformix",
          description: "Servicios de electricidad para reformas en Barcelona y Vallès. Actualizamos tu instalación eléctrica para cumplir la normativa y mejorar la seguridad.",
          provider: {
            '@type': 'HomeAndConstructionBusiness',
            name: 'Reformix Barcelona',
          },
          serviceType: 'Electrical Installation',
          url: '/electricidad',
        });
        const breadcrumbSchema = generateBreadcrumbSchema([
          { name: 'Inicio', url: '/' },
          { name: 'Servicios Técnicos', url: '/servicios-tecnicos' },
          { name: 'Electricidad', url: '/electricidad' },
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
            ¿Hablamos de la Instalación<br />
            Eléctrica de tu Reforma?
          </>
        }
        description="Solicita un presupuesto para la instalación eléctrica de tu reforma en Barcelona o el Vallès Occidental. Garantizamos un trabajo profesional, seguro y certificado."
        buttonText="Calcular Presupuesto Eléctrico"
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

