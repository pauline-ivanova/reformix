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
  SparklesIcon,
  ChatBubbleLeftRightIcon,
  ShieldCheckIcon,
  UserGroupIcon,
  DocumentCheckIcon,
  LightBulbIcon,
  WrenchScrewdriverIcon,
} from '@heroicons/react/24/solid';

export const metadata: Metadata = {
  title: "Interiorismo en Barcelona y Vallès | Reformix",
  description: "Ejecutamos proyectos de interiorismo con arquitectos y diseñadores en Barcelona. Tu visión, nuestra precisión. ¡Pide presupuesto!",
  ...generateStandardMetadata({
    title: "Interiorismo en Barcelona y Vallès | Reformix",
    description: "Ejecutamos proyectos de interiorismo con arquitectos y diseñadores en Barcelona. Tu visión, nuestra precisión. ¡Pide presupuesto!",
    url: "https://www.reformix.barcelona/interiorismo-colaboracion",
    pagePath: "/interiorismo-colaboracion",
    keywords: ["proyectos interiorismo Barcelona", "ejecución interiorismo", "colaboración arquitectos", "ejecución proyectos diseño"],
  }),
};

export default async function InteriorismoColaboracionPage() {
  const features = [
    {
      title: "Fidelidad Absoluta al Diseño",
      description: "Entendemos que cada plano tiene una intención. Nuestro único objetivo es ejecutar tu visión con precisión milimétrica, sin desviaciones ni atajos.",
      icon: (
        <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-brand-primary/10 text-brand-primary">
          <SparklesIcon className="w-8 h-8" />
        </div>
      ),
    },
    {
      title: "Comunicación Fluida y Proactiva",
      description: "Tendrás un único interlocutor que te mantendrá informado del avance y consultará contigo cualquier imprevisto antes de tomar decisiones.",
      icon: (
        <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-brand-primary/10 text-brand-primary">
          <ChatBubbleLeftRightIcon className="w-8 h-8" />
        </div>
      ),
    },
    {
      title: "Protegemos tu Reputación",
      description: "El cliente final es tuyo. Nuestro trabajo es que tu cliente quede 100% satisfecho con tu proyecto, reforzando tu prestigio profesional.",
      icon: (
        <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-brand-primary/10 text-brand-primary">
          <ShieldCheckIcon className="w-8 h-8" />
        </div>
      ),
    },
    {
      title: "Equipo Propio y Solvente",
      description: "No dependemos de subcontratas impredecibles. Contamos con un equipo propio y coordinado que garantiza la calidad y el cumplimiento de los plazos.",
      icon: (
        <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-brand-primary/10 text-brand-primary">
          <UserGroupIcon className="w-8 h-8" />
        </div>
      ),
    },
  ];

  const solutions = [
    {
      title: "Ejecución Técnica, no Interpretación",
      description: "Tratamos tus planos como un manual de instrucciones sagrado. Nuestro equipo técnico se enfoca en resolver los desafíos constructivos para materializar tu diseño, no en reinterpretarlo. La calidad de los acabados es nuestra firma.",
      icon: (
        <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-brand-primary/10 text-brand-primary">
          <DocumentCheckIcon className="w-8 h-8" />
        </div>
      ),
    },
    {
      title: "Un Único Interlocutor Responsable",
      description: "Asignamos un jefe de obra como tu único punto de contacto. Centralizamos toda la comunicación, te informamos proactivamente de los avances y cualquier imprevisto se consulta contigo antes de actuar.",
      icon: (
        <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-brand-primary/10 text-brand-primary">
          <UserGroupIcon className="w-8 h-8" />
        </div>
      ),
    },
    {
      title: "Control de Plazos y Presupuesto",
      description: "Gracias a nuestro equipo propio, tenemos control total sobre el calendario. Trabajamos con presupuestos cerrados para que puedas dar a tu cliente una garantía financiera, protegiendo vuestra relación y tu reputación.",
      icon: (
        <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-brand-primary/10 text-brand-primary">
          <DocumentCheckIcon className="w-8 h-8" />
        </div>
      ),
    },
  ];

  const benefits = [
    {
      title: "Enfócate en Diseñar, no en Apagar Fuegos",
      description: "Nosotros nos encargamos de la complejidad de la obra. Libera tu tiempo y tu energía de la gestión de problemas para que puedas dedicarte a lo que mejor haces: crear espacios increíbles.",
      icon: (
        <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-brand-primary/10 text-brand-primary">
          <LightBulbIcon className="w-8 h-8" />
        </div>
      ),
    },
    {
      title: "Clientes Satisfechos que Refuerzan tu Marca",
      description: "Una obra bien ejecutada, a tiempo y en presupuesto, es la mejor herramienta de marketing. La satisfacción de tu cliente se traduce en recomendaciones y fortalece tu prestigio profesional.",
      icon: (
        <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-brand-primary/10 text-brand-primary">
          <SparklesIcon className="w-8 h-8" />
        </div>
      ),
    },
    {
      title: "Control y Cero Incertidumbre para tus Proyectos",
      description: "Te damos la tranquilidad de presentar a tu cliente un presupuesto cerrado y un calendario fiable. Elimina la incertidumbre y mantén el control total de la relación con tu cliente.",
      icon: (
        <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-brand-primary/10 text-brand-primary">
          <ShieldCheckIcon className="w-8 h-8" />
        </div>
      ),
    },
  ];

  return (
    <>
      <Hero
        title="Ejecución de Proyectos de Interiorismo en Barcelona"
        titleLines={[
          "Ejecución de Proyectos",
          "de Interiorismo",
          "en Barcelona"
        ]}
        subtitle="Tu visión, nuestro compromiso. Traducimos tus planos en una realidad impecable, respetando cada detalle, plazo y presupuesto. Somos el equipo de obra que tu proyecto merece."
        primaryCTA={{
          text: "Contactar para Colaborar",
          href: "/contacto"
        }}
        backgroundImage="/images/proyectos-de-interiorismo.webp"
        imageAlt="Ejecución de proyecto de interiorismo de alta calidad"
      />
      <FeatureGrid
        features={features}
        columns={4}
        disableFeatureHeadings
      />
      <AboutSection
        logoPath="/images/reformix-logo-vertical-white.png"
        text="Somos una empresa constructora de Barcelona con equipo propio, especializada en la ejecución impecable de proyectos de diseñadores y arquitectos. Actuamos como tu aliado de confianza en la obra, garantizando la calidad, el cumplimiento de plazos y una fidelidad absoluta a tu visión creativa."
      />
      <FeatureGrid
        title="Nuestro Método: Un Proceso Creado para Colaborar"
        subtitle="Entendemos que una colaboración exitosa se basa en la confianza y en un proceso claro. Por eso, hemos desarrollado un método de trabajo que pone tu visión y tu tranquilidad en el centro de todo."
        features={solutions}
        columns={3}
      />
      <FeatureGrid
        title="Más que un Constructor: un Aliado para tus Proyectos"
        subtitle="Nuestra meta es simple: hacer que tus proyectos brillen y tu trabajo sea más sencillo. Al colaborar con nosotros, no solo garantizas una ejecución perfecta, sino que ganas un aliado estratégico."
        features={benefits}
        columns={3}
        backgroundClassName="bg-gray-50"
        paddingClassName="py-24"
      />
      <WhyChooseUs />
      <TestimonialsCarousel />
      {(() => {
        const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://www.reformix.barcelona';
        const faqs = [
          {
            question: "¿El presupuesto es realmente cerrado? ¿Qué pasa con los imprevistos?",
            answer: "Trabajamos con presupuesto cerrado sobre mediciones y proyecto ejecutivo. Si aparece un imprevisto no contemplado (vicio oculto), lo documentamos, proponemos opciones con coste/impacto y no ejecutamos nada sin tu aprobación por escrito."
          },
          {
            question: "¿Quién gestiona las coordinaciones con la comunidad?",
            answer: "Podemos asumir la coordinación con la comunidad si lo necesitas, manteniéndote informado. Si prefieres hacerlo tú o tu estudio, nos integramos en vuestro flujo."
          },
          {
            question: "¿Cómo garantizáis la fidelidad al diseño en obra?",
            answer: "El jefe de obra es tu interlocutor único. Validamos hitos críticos (alineaciones, encuentros, acabados) contigo antes de ejecutar. Cualquier desviación se consulta y se aprueba previamente."
          },
          {
            question: "¿Podemos trabajar en marca blanca y con confidencialidad?",
            answer: "Sí. Firmamos NDA si lo requieres y actuamos como equipo de obra de tu estudio. Respetamos que la relación principal con el cliente final es tuya."
          },
          {
            question: "¿Qué seguros y garantías ofrecéis?",
            answer: "Seguro de responsabilidad civil en vigor, garantías por escrito de ejecución y acabados según normativa aplicable. Entregamos documentación \"as built\" y manual de mantenimiento cuando procede."
          },
          {
            question: "¿Cómo gestionáis plazos y penalizaciones por retraso?",
            answer: "Planificamos con cronograma detallado y puntos de control. Si tu contrato exige penalizaciones, podemos contemplarlas en acuerdo específico siempre que el planning y hitos estén consensuados desde el inicio."
          }
        ];
        const faqSchema = generateFAQSchema(faqs);
        const serviceSchema = generateServiceSchema({
          name: "Ejecución de Proyectos de Interiorismo en Barcelona",
          description: "Gestionamos proyectos de interiorismo en colaboración con arquitectos y diseñadores en Barcelona. Tu visión, ejecutada a la perfección por nuestro equipo.",
          provider: {
            '@type': 'HomeAndConstructionBusiness',
            name: 'Reformix Barcelona',
          },
          serviceType: 'Interior Design Execution',
          url: '/interiorismo-colaboracion',
        });
        const breadcrumbSchema = generateBreadcrumbSchema([
          { name: 'Inicio', url: '/' },
          { name: 'Interiorismo y Colaboración', url: '/interiorismo-colaboracion' },
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
        title="¿Listos para ejecutar tu próximo proyecto?"
        description="Cuéntanos brevemente el alcance y agenda una visita técnica. En 24h te confirmamos disponibilidad y preparamos un presupuesto cerrado alineado con tu proyecto."
        buttonText="Solicitar colaboración"
        buttonHref="/contacto"
        features={[
          "NDA y marca blanca si lo requieres",
          "Interlocutor único (jefe de obra)",
          "Presupuesto cerrado y cronograma"
        ]}
      />
    </>
  );
}

