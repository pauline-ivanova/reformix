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
import {
  LightBulbIcon,
  CalendarDaysIcon,
  KeyIcon,
  HomeIcon,
  SparklesIcon,
  UserGroupIcon,
  PuzzlePieceIcon,
  ArrowsPointingOutIcon,
  Cog6ToothIcon,
  ArchiveBoxIcon,
  ClipboardDocumentCheckIcon,
  ShieldCheckIcon,
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

  const processSteps = [
    {
      title: "Contacto y Visita Inicial",
      description: "Todo empieza contigo. Escuchamos tu idea, visitamos el piso para medir y evaluar el espacio, y resolvemos tus primeras dudas.",
      icon: (
        <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-brand-primary/10 text-brand-primary">
          <UserGroupIcon className="w-8 h-8" />
        </div>
      ),
    },
    {
      title: "Diseño y Presupuesto Cerrado",
      description: "Plasmamos tus ideas en una propuesta de diseño y te entregamos un presupuesto cerrado. Sabrás exactamente qué esperar, sin sorpresas.",
      icon: (
        <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-brand-primary/10 text-brand-primary">
          <ClipboardDocumentCheckIcon className="w-8 h-8" />
        </div>
      ),
    },
    {
      title: "Planificación y Gestión de Permisos",
      description: "Nos encargamos de toda la burocracia, desde los permisos de obra hasta la comunicación con la comunidad de vecinos. Creamos un calendario de trabajo detallado.",
      icon: (
        <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-brand-primary/10 text-brand-primary">
          <ShieldCheckIcon className="w-8 h-8" />
        </div>
      ),
    },
    {
      title: "Demolición y Albañilería",
      description: "Preparamos el espacio, eliminando tabiques y elementos antiguos. Levantamos la nueva distribución, creando la base para tu nuevo hogar.",
      icon: (
        <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-brand-primary/10 text-brand-primary">
          <ArrowsPointingOutIcon className="w-8 h-8" />
        </div>
      ),
    },
    {
      title: "Instalaciones y Acabados",
      description: "Renovamos las instalaciones (luz, agua) y aplicamos los acabados que has elegido: suelos, alicatados, pintura...",
      icon: (
        <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-brand-primary/10 text-brand-primary">
          <SparklesIcon className="w-8 h-8" />
        </div>
      ),
    },
    {
      title: "Entrega y Garantía",
      description: "Realizamos una limpieza profesional completa y te entregamos las llaves de tu piso, listo para disfrutar. Tu inversión queda protegida por nuestra garantía por escrito.",
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
        backgroundImage="/images/reformas-integrales-de-pisos-en-barcelona.webp"
      />
      <FeatureGrid
        features={features}
        columns={4}
        disableFeatureHeadings
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
            description: "Distribuciones oscuras y fragmentadas.",
            icon: (
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-brand-primary/10 text-brand-primary">
                <PuzzlePieceIcon className="w-8 h-8" />
              </div>
            ),
          },
          {
            title: "Cocinas pequeñas y cerradas",
            description: "Cocinas pequeñas y cerradas, aisladas del salón.",
            icon: (
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-brand-primary/10 text-brand-primary">
                <ArrowsPointingOutIcon className="w-8 h-8" />
              </div>
            ),
          },
          {
            title: "Instalaciones eléctricas y de fontanería obsoletas",
            description: "Instalaciones eléctricas y de fontanería obsoletas.",
            icon: (
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-brand-primary/10 text-brand-primary">
                <Cog6ToothIcon className="w-8 h-8" />
              </div>
            ),
          },
          {
            title: "Falta de almacenamiento",
            description: "Falta de espacio de almacenamiento.",
            icon: (
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-brand-primary/10 text-brand-primary">
                <ArchiveBoxIcon className="w-8 h-8" />
              </div>
            ),
          },
        ]}
        columns={4}
        paddingClassName="py-20 md:py-24"
      />
      <FeatureGrid
        title="Nuestras Soluciones para la Reforma de tu Piso"
        subtitle="Afortunadamente, cada uno de estos problemas tiene una solución técnica y de diseño. Nuestro enfoque se centra en tres áreas clave para transformar por completo tu piso y adaptarlo a tus necesidades."
        features={solutions}
        columns={3}
        backgroundClassName="bg-brand-accent-neutral/60"
        paddingClassName="py-20 md:py-24"
      />
      <FeatureGrid
        title="Una Inversión en tu Calidad de Vida y en tu Patrimonio"
        subtitle="Una reforma bien planificada no solo mejora tu día a día, sino que también protege y aumenta el valor de tu piso. Estos son los beneficios directos que obtendrás con nuestro enfoque."
        features={benefits}
        columns={3}
        paddingClassName="py-20 md:py-24"
      />
      <FeatureGrid
        title="Tu Reforma de Piso: Proceso y Tranquilidad"
        subtitle="Hemos perfeccionado un proceso de 6 pasos que gestiona la comunicación y los permisos para minimizar las molestias y asegurar tu paz mental."
        features={processSteps}
        columns={3}
        backgroundClassName="bg-brand-accent-neutral/60"
        paddingClassName="py-20 md:py-24"
      />
      <TestimonialsCarousel 
        testimonials={[
          {
            text: "Lo que más nos gustó fue la claridad con el presupuesto. Con Reformix todo fue muy fácil, sin sustos ni sorpresas.",
            initials: "MG",
            name: "Marc G.",
            location: "Sabadell"
          },
          {
            text: "Con la nueva distribución y la cocina abierta, el piso parece otro. Mucho más luminoso y con sensación de espacio.",
            initials: "NP",
            name: "Núria P.",
            location: "Terrassa"
          },
          {
            text: "Organizaron la obra muy bien y casi no nos enteramos de las molestias. El resultado final nos encantó.",
            initials: "JD",
            name: "Javier D.",
            location: "Cerdanyola del Vallès"
          },
          {
            text: "Nos ayudaron a elegir los materiales y se nota. El piso tiene un aire moderno y al mismo tiempo se siente sólido y de calidad.",
            initials: "SR",
            name: "Sonia R.",
            location: "Barcelona"
          },
          {
            text: "Irina estuvo pendiente en todo momento y nos iba informando de cada paso. Eso nos dio confianza y el piso quedó justo como lo queríamos.",
            initials: "AV",
            name: "Albert V.",
            location: "Sant Cugat del Vallès"
          },
          {
            text: "Nos dieron un calendario desde el primer día y lo cumplieron. El piso quedó nuevo y pudimos mudarnos justo cuando lo habíamos planeado.",
            initials: "LC",
            name: "Laura C.",
            location: "Barcelona"
          }
        ]}
        title="Clientes Satisfechos con la Reforma de su Piso"
        subtitle='Detrás de cada proyecto de reforma, hay una historia de transformación. Estas son las palabras de clientes que confiaron en nosotros para renovar su piso y ahora disfrutan del resultado.'
        paddingClassName="py-24 md:py-28"
      />
      {(() => {
        const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://reformix.barcelona';
        const faqs = [
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
            answer: "Te asesoramos y te acompañamos presentándote un catálogo de proveedores de confianza con los que a menudo conseguimos mejores precios. Si prefieres comprar los materiales por tu cuenta, nos adaptamos sin problema, asegurándonos de que cumplen con la calidad necesaria para la garantía."
          }
        ];
        const faqSchema = generateFAQSchema(faqs);
        const serviceSchema = generateServiceSchema({
          name: "Reformas Integrales de Pisos en Barcelona | Reformix",
          description: "Transformamos tu piso en Barcelona y Vallès. Maximizamos el espacio y la luz con un diseño funcional, presupuesto cerrado y garantía.",
          provider: {
            '@type': 'HomeAndConstructionBusiness',
            name: 'Reformix Barcelona',
          },
          serviceType: 'Complete Apartment Remodeling',
          url: '/reformas-integrales-pisos',
        });
        const breadcrumbSchema = generateBreadcrumbSchema([
          { name: 'Inicio', url: '/' },
          { name: 'Reformas Integrales', url: '/reformas-integrales' },
          { name: 'Reformas Integrales de Pisos', url: '/reformas-integrales-pisos' },
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

