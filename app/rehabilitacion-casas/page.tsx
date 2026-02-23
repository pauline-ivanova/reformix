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
  HomeIcon,
  ShieldCheckIcon,
  UserGroupIcon,
  SparklesIcon,
  BuildingOfficeIcon,
  WrenchScrewdriverIcon,
  PaintBrushIcon,
  KeyIcon,
  MagnifyingGlassCircleIcon,
  DocumentTextIcon,
  ClipboardDocumentCheckIcon,
} from '@heroicons/react/24/solid';

export const metadata: Metadata = {
  title: "Rehabilitación de Casas en Barcelona | Reformix",
  description: "Rehabilitación de casas y chalets en Barcelona y Vallès. Mejoramos la eficiencia energética y reforzamos la estructura. ¡Pide presupuesto!",
  ...generateStandardMetadata({
    title: "Rehabilitación de Casas en Barcelona | Reformix",
    description: "Rehabilitación de casas y chalets en Barcelona y Vallès. Mejoramos la eficiencia energética y reforzamos la estructura. ¡Pide presupuesto!",
    url: "https://www.reformix.barcelona/rehabilitacion-casas",
    pagePath: "/rehabilitacion-casas",
    keywords: ["rehabilitación casas", "rehabilitación Barcelona", "rehabilitación integral", "rehabilitación chalets", "SATE Barcelona"],
  }),
};

export default async function RehabilitacionCasasPage() {
  const features = [
    {
      title: "Eficiencia Energética",
      description: "Nos especializamos en mejorar el aislamiento térmico de fachadas y cubiertas para reducir tus facturas y aumentar el confort.",
      icon: (
        <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-brand-primary/10 text-brand-primary">
          <SparklesIcon className="w-8 h-8" />
        </div>
      ),
    },
    {
      title: "Seguridad Estructural",
      description: "Analizamos y reforzamos la estructura de tu casa, garantizando su solidez y durabilidad para las próximas décadas.",
      icon: (
        <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-brand-primary/10 text-brand-primary">
          <ShieldCheckIcon className="w-8 h-8" />
        </div>
      ),
    },
    {
      title: "Equipo Propio y Coordinado",
      description: "Nuestro equipo gestiona todos los gremios (albañilería, fontanería, electricidad), asegurando un control total sobre la calidad y los plazos.",
      icon: (
        <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-brand-primary/10 text-brand-primary">
          <UserGroupIcon className="w-8 h-8" />
        </div>
      ),
    },
    {
      title: "Garantía por Escrito",
      description: "Todos nuestros trabajos de rehabilitación están cubiertos por una garantía completa, dándote total tranquilidad.",
      icon: (
        <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-brand-primary/10 text-brand-primary">
          <ShieldCheckIcon className="w-8 h-8" />
        </div>
      ),
    },
  ];

  const solutions = [
    {
      title: "Refuerzo Estructural y Cimientos",
      description: "Analizamos y reforzamos la estructura de la vivienda, desde los cimientos hasta el tejado, solucionando problemas de humedades, grietas o aluminosis para garantizar una base 100% segura.",
      icon: (
        <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-brand-primary/10 text-brand-primary">
          <BuildingOfficeIcon className="w-8 h-8" />
        </div>
      ),
    },
    {
      title: "Aislamiento y Eficiencia Energética",
      description: "La clave para el confort y el ahorro. Aplicamos sistemas de aislamiento térmico exterior (SATE), renovamos tejados y cambiamos ventanas para crear una envolvente eficiente.",
      icon: (
        <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-brand-primary/10 text-brand-primary">
          <SparklesIcon className="w-8 h-8" />
        </div>
      ),
    },
    {
      title: "Nuevas Instalaciones y Acabados",
      description: "Renovamos por completo las instalaciones de agua, luz y gas, y damos forma a los interiores con los acabados y la distribución que siempre has querido para tu casa.",
      icon: (
        <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-brand-primary/10 text-brand-primary">
          <WrenchScrewdriverIcon className="w-8 h-8" />
        </div>
      ),
    },
  ];

  const benefits = [
    {
      title: "Seguridad Estructural Garantizada",
      description: "Vivirá con la total tranquilidad de saber que la estructura de su casa es sólida y segura. Resolvemos problemas de cimientos, forjados y tejados para proteger a su familia y su inversión.",
      icon: (
        <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-brand-primary/10 text-brand-primary">
          <ShieldCheckIcon className="w-8 h-8" />
        </div>
      ),
    },
    {
      title: "Ahorro Energético Drástico",
      description: "Gracias al aislamiento de fachadas (SATE) y a la renovación de ventanas, su casa mantendrá una temperatura estable todo el año. Notará un ahorro de hasta un 70% en sus facturas de calefacción y aire acondicionado.",
      icon: (
        <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-brand-primary/10 text-brand-primary">
          <SparklesIcon className="w-8 h-8" />
        </div>
      ),
    },
    {
      title: "Una Nueva Vida para tu Hogar",
      description: "Convertimos una casa antigua en una vivienda moderna y funcional, adaptada a sus necesidades. Aumentamos su valor de mercado y, lo más importante, creamos un espacio donde querrá vivir durante décadas.",
      icon: (
        <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-brand-primary/10 text-brand-primary">
          <HomeIcon className="w-8 h-8" />
        </div>
      ),
    },
  ];

  const processSteps = [
    {
      title: "Visita y Diagnóstico Estructural",
      description: "Nuestra primera visita es clave. Un técnico evalúa el estado real de la estructura, la cubierta y la fachada para detectar posibles problemas y definir el alcance real de la intervención.",
      icon: (
        <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-brand-primary/10 text-brand-primary">
          <MagnifyingGlassCircleIcon className="w-8 h-8" />
        </div>
      ),
    },
    {
      title: "Estudio Técnico y Presupuesto",
      description: "Con el diagnóstico, elaboramos una memoria técnica detallada y un presupuesto cerrado que contempla todas las actuaciones necesarias, desde la cimentación hasta los acabados.",
      icon: (
        <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-brand-primary/10 text-brand-primary">
          <DocumentTextIcon className="w-8 h-8" />
        </div>
      ),
    },
    {
      title: "Proyecto Técnico",
      description: "Preparamos toda la documentación técnica necesaria para la ejecución de la obra, asegurando que cumple con la normativa vigente.",
      icon: (
        <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-brand-primary/10 text-brand-primary">
          <ClipboardDocumentCheckIcon className="w-8 h-8" />
        </div>
      ),
    },
    {
      title: "Actuaciones Estructurales y Envolvente",
      description: "Esta es la fase crítica. Reforzamos la estructura, reparamos la cubierta y aplicamos el sistema de aislamiento SATE en la fachada para garantizar la seguridad y eficiencia.",
      icon: (
        <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-brand-primary/10 text-brand-primary">
          <BuildingOfficeIcon className="w-8 h-8" />
        </div>
      ),
    },
    {
      title: "Instalaciones y Acabados Interiores",
      description: "Una vez asegurado el “esqueleto”, renovamos todas las instalaciones y procedemos con los acabados interiores, dando forma a tu nuevo hogar.",
      icon: (
        <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-brand-primary/10 text-brand-primary">
          <PaintBrushIcon className="w-8 h-8" />
        </div>
      ),
    },
    {
      title: "Certificación Final y Entrega",
      description: "Al finalizar, gestionamos el Certificado Final de Obra, te entregamos toda la documentación, las llaves y la garantía por escrito de los trabajos realizados.",
      icon: (
        <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-brand-primary/10 text-brand-primary">
          <KeyIcon className="w-8 h-8" />
        </div>
      ),
    },
  ];

  return (
    <>
      <Hero
        title="Rehabilitación Integral de Casas en Barcelona y Vallès Occidental"
        titleLines={[
          "Rehabilitación Integral",
          "de Casas en Barcelona",
          "y Vallès Occidental"
        ]}
        subtitle="Devolvemos el esplendor y la funcionalidad a tu hogar. Proyectos integrales para mejorar la eficiencia energética, seguridad estructural y confort de tu casa o chalet."
        primaryCTA={{
          text: "Evaluar mi Proyecto",
          href: "/contacto"
        }}
        backgroundImage="/images/rehabilitacion-integral-de-casas-en-barcelona.webp"
      />
      <FeatureGrid
        features={features}
        columns={4}
        disableFeatureHeadings
      />
      <AboutSection
        logoPath="/images/reformix-logo-vertical-white.png"
        text="Desde Sabadell, abordamos proyectos de rehabilitación de casas en toda el área de Barcelona y el Vallès Occidental. Nuestro enfoque técnico y equipo propio nos permiten gestionar proyectos complejos, asegurando resultados de alta calidad que perduran en el tiempo."
      />
      <FeatureGrid
        title="¿Facturas de Energía Elevadas, Humedades o Espacios Desaprovechados?"
        subtitle="Con el paso de los años, las casas pueden presentar problemas que van más allá de lo estético: mal aislamiento, instalaciones antiguas o una distribución que ya no es práctica. Una rehabilitación integral es la solución definitiva."
        features={[
          {
            title: "Pérdidas de calor en invierno y exceso de calor en verano",
            description: "Un mal aislamiento térmico provoca un consumo energético excesivo y un confort insuficiente.",
            icon: (
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-brand-primary/10 text-brand-primary">
                <SparklesIcon className="w-8 h-8" />
              </div>
            ),
          },
          {
            title: "Problemas de humedades o grietas en las paredes",
            description: "Indicios de problemas estructurales o de impermeabilización que requieren atención inmediata.",
            icon: (
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-brand-primary/10 text-brand-primary">
                <ShieldCheckIcon className="w-8 h-8" />
              </div>
            ),
          },
          {
            title: "Instalaciones obsoletas que no cumplen la normativa",
            description: "Sistemas eléctricos, de fontanería o calefacción que ponen en riesgo la seguridad y eficiencia.",
            icon: (
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-brand-primary/10 text-brand-primary">
                <WrenchScrewdriverIcon className="w-8 h-8" />
              </div>
            ),
          },
          {
            title: "Necesidad de adaptar la casa a nuevas necesidades",
            description: "Movilidad reducida, más familia o cambios en el estilo de vida que requieren una nueva distribución.",
            icon: (
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-brand-primary/10 text-brand-primary">
                <HomeIcon className="w-8 h-8" />
              </div>
            ),
          },
        ]}
        columns={4}
      />
      <FeatureGrid
        title="Nuestras Áreas Clave en la Rehabilitación de Casas"
        subtitle="Rehabilitar una casa es devolverle su seguridad, su eficiencia y su belleza original. Nuestro trabajo se enfoca en tres pilares fundamentales que garantizan una intervención completa y duradera."
        features={solutions}
        columns={3}
        backgroundClassName="bg-gray-50"
        paddingClassName="py-24"
      />
      <FeatureGrid
        title="Más que una Reforma: una Inversión en Seguridad y Futuro"
        subtitle="La rehabilitación integral de una casa va más allá de la estética. Es una decisión fundamental que protege tu patrimonio, mejora tu calidad de vida y reduce drásticamente los costes de mantenimiento a largo plazo."
        features={benefits}
        columns={3}
      />
      <FeatureGrid
        title="Un Proceso Técnico para una Rehabilitación Segura"
        subtitle="La rehabilitación de una casa requiere un rigor técnico superior al de una reforma convencional. Nuestro proceso de 6 pasos está diseñado para garantizar la seguridad estructural, la eficiencia y el cumplimiento normativo de tu proyecto."
        features={processSteps}
        columns={3}
        backgroundClassName="bg-gray-50"
        paddingClassName="py-24"
      />
      <TestimonialsCarousel 
        testimonials={[
          {
            text: "Nuestra casa, en los alrededores de Sabadell, necesitaba una rehabilitación integral y con Reformix todo salió rodado. El proyecto fue claro desde el principio y los resultados hablan por sí solos.",
            initials: "JR",
            name: "Jordi R.",
            location: "Sabadell"
          },
          {
            text: "Queríamos recuperar la casa familiar en una urbanización cerca de Terrassa y ha quedado espectacular. Respetaron la estructura y la esencia, pero ahora es luminosa y práctica.",
            initials: "EM",
            name: "Elisenda M.",
            location: "Terrassa"
          },
          {
            text: "La casa, en una zona residencial de Cerdanyola, llevaba años sin actualizarse y ahora parece nueva. Todo quedó bien acabado y se nota la calidad en cada detalle.",
            initials: "DS",
            name: "Daniel S.",
            location: "Cerdanyola del Vallès"
          },
          {
            text: "Vivimos en una casa a las afueras de Sant Cugat y la rehabilitación fue mucho más fácil de lo que pensábamos. Irina estuvo muy atenta y gracias a ella el proceso fue tranquilo.",
            initials: "SR",
            name: "Sílvia R.",
            location: "Sant Cugat del Vallès"
          },
          {
            text: "Hicimos la rehabilitación con Reformix en nuestra casa bajo la montaña de Montgat, muy cerca de Badalona. Cumplieron plazos y el resultado fue incluso mejor de lo que esperábamos.",
            initials: "PL",
            name: "Pau L.",
            location: "Badalona"
          },
          {
            text: "Rehabilitamos nuestra casa en una urbanización a las afueras de Barcelona y el cambio ha sido increíble. Mantuvieron los detalles originales pero ahora todo es moderno y cómodo.",
            initials: "MF",
            name: "Marta F.",
            location: "Barcelona"
          }
        ]}
        title="Propietarios que Han Recuperado su Hogar"
        subtitle='Rehabilitar una casa es devolverle la vida. Nos enorgullece compartir la opinión de clientes que, como tú, decidieron dar el paso y ahora disfrutan de un hogar más seguro, eficiente y confortable.'
      />
      {(() => {
        const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://www.reformix.barcelona';
        const faqs = [
          {
            question: "¿Cuánto puede costar la rehabilitación de una casa de 150m2?",
            answer: "Es muy variable, ya que depende del estado de la estructura y la calidad de los acabados. Como referencia, un proyecto de rehabilitación integral suele partir de los 800€/m². Una visita técnica es imprescindible para dar un presupuesto cerrado."
          },
          {
            question: "¿Qué es el sistema SATE y por qué es tan importante?",
            answer: "El SATE (Sistema de Aislamiento Térmico por el Exterior) consiste en aplicar un \"abrigo\" aislante a toda la fachada. Es la solución más eficaz para eliminar puentes térmicos, reducir drásticamente el gasto en energía y solucionar problemas de condensación."
          },
          {
            question: "¿Cuánto tiempo se tarda en rehabilitar una casa?",
            answer: "Un proyecto de rehabilitación integral es complejo. Dependiendo del tamaño y el alcance de los trabajos estructurales, puede durar entre 6 y 10 meses. La complejidad técnica del proyecto también influye en los plazos totales."
          },
          {
            question: "¿Qué pasa si encontráis problemas estructurales inesperados durante la obra?",
            answer: "Nuestra fase de diagnóstico inicial está diseñada para minimizar las sorpresas. Si aun así aparece un imprevisto, te informamos de inmediato, te explicamos las posibles soluciones técnicas y te presentamos un anexo al presupuesto para tu aprobación antes de actuar. La transparencia es total."
          },
          {
            question: "¿Cuál es la diferencia entre \"reforma\" y \"rehabilitación\"?",
            answer: "Una reforma se centra en el interior y la estética (cambiar cocina, baños, suelos). Una rehabilitación es más profunda: actúa sobre la \"piel\" y el \"esqueleto\" de la casa (fachada, tejado, estructura) para mejorar su seguridad, habitabilidad y eficiencia energética."
          }
        ];
        const faqSchema = generateFAQSchema(faqs);
        const serviceSchema = generateServiceSchema({
          name: "Rehabilitación Integral de Casas en Barcelona | Reformix",
          description: "Rehabilitación de casas y chalets en Barcelona y Vallès. Mejoramos la eficiencia energética y reforzamos la estructura.",
          provider: {
            '@type': 'HomeAndConstructionBusiness',
            name: 'Reformix Barcelona',
          },
          serviceType: 'House Rehabilitation',
          url: '/rehabilitacion-casas',
        });
        const breadcrumbSchema = generateBreadcrumbSchema([
          { name: 'Inicio', url: '/' },
          { name: 'Reformas Integrales', url: '/reformas-integrales' },
          { name: 'Rehabilitación de Casas', url: '/rehabilitacion-casas' },
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
        title="¿Listo para Devolverle la Vida a tu Casa?"
        description="Cada casa tiene un enorme potencial esperando. Contacta con nosotros para una visita técnica sin compromiso y descubre cómo podemos transformar tu vivienda."
        buttonText="Solicitar Visita Técnica"
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

