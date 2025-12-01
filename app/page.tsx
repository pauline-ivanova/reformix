import Hero from "@/app/components/blocks/Hero";
import FeatureGrid from "@/app/components/blocks/FeatureGrid";
import AboutSection from "@/app/components/blocks/AboutSection";
import ServicesSection from "@/app/components/blocks/ServicesSection";
import ProcessSection from "@/app/components/blocks/ProcessSection";
import CompanySection from "@/app/components/blocks/CompanySection";
import WhyChooseUs from "@/app/components/blocks/WhyChooseUs";
import TestimonialsCarousel from "@/app/components/blocks/TestimonialsCarousel";
import FAQTwoColumn from "@/app/components/blocks/FAQTwoColumn";
import ServiceAreas from "@/app/components/blocks/ServiceAreas";
import ContactSection from "@/app/components/blocks/ContactSection";

import {
  DocumentCheckIcon,
  UserCircleIcon,
  CalendarDaysIcon,
  ShieldCheckIcon,
} from '@heroicons/react/24/solid';

export default async function HomePage() {
  const features = [
    {
      title: "Control Total de tu Inversión",
      description: "Te entregamos un presupuesto cerrado y transparente. Sin costes ocultos ni sorpresas en la factura final.",
      icon: (
        <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-brand-primary/10 text-brand-primary">
          <DocumentCheckIcon className="w-8 h-8" />
        </div>
      ),
    },
    {
      title: "Un Único Interlocutor Responsable",
      description: "Olvídate de coordinar gremios. Seremos tu único punto de contacto y nos responsabilizaremos de todo el proyecto.",
      icon: (
        <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-brand-primary/10 text-brand-primary">
          <UserCircleIcon className="w-8 h-8" />
        </div>
      ),
    },
    {
      title: "Respeto Absoluto por los Plazos",
      description: "Planificamos cada fase con rigor para cumplir las fechas acordadas y que puedas disfrutar de tu hogar cuanto antes.",
      icon: (
        <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-brand-primary/10 text-brand-primary">
          <CalendarDaysIcon className="w-8 h-8" />
        </div>
      ),
    },
    {
      title: "Tranquilidad Después de la Obra",
      description: "Tu reforma está protegida. Nuestro trabajo tiene una garantía real por escrito y un servicio postventa a tu disposición.",
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
        title="Empresa de Reformas en Barcelona y Vallès Occidental"
        titleLines={[
          "Empresa de Reformas",
          "en Barcelona",
          "y Vallès Occidental"
        ]}
        subtitle="Transformamos la incertidumbre de una reforma en la tranquilidad de un trabajo bien hecho. Más de 10 años de experiencia, presupuestos cerrados y garantía por escrito para tu total confianza."
        primaryCTA={{
          text: "SOLICITA TU PRESUPUESTO SIN COMPROMISO",
          href: "/contacto"
        }}
        backgroundImage="/images/hero-bg.webp"
      />
      <FeatureGrid
        features={features}
        columns={4}
      />
      <AboutSection
        logoPath="/images/reformix-logo-vertical-white.png"
        text="Con sede en Sabadell, Reformix Barcelona es una empresa de reformas que sirve a toda el área de Barcelona y el Vallès Occidental. Contamos con equipo propio de profesionales para la rehabilitación completa de pisos, asegurando siempre la coordinación de gremios y el cumplimiento de plazos."
      />
      <ServicesSection
        title="Servicios de Reformas en Barcelona y Vallès Occidental"
        subtitle="Desde una reforma integral llave en mano que transforme por completo tu hogar, hasta los detalles técnicos que garantizan su confort. Descubre cómo podemos mejorar tu calidad de vida."
        services={[
          {
            title: "Reformas Integrales",
            subtitle: "— Tu Hogar, Completamente Nuevo",
            description: "El verdadero potencial de tu hogar está esperando. Realizamos la rehabilitación completa de casas y la reforma integral de pisos para crear espacios luminosos y adaptados a tu estilo de vida. Nos encargamos de todo para que tu única preocupación sea disfrutar del resultado.",
            services: [
              "Reformas integrales de pisos",
              "Rehabilitación de casas",
              "Proyectos de interiorismo"
            ],
            image: "/images/reforma-integral-salon.webp",
            imageAlt: "Salón moderno tras reforma integral en Barcelona",
            ctaText: "Ver más sobre reformas integrales",
            ctaHref: "/reformas-integrales"
          },
          {
            title: "Reformas por Estancia",
            subtitle: "— Renovamos Cada Rincón",
            description: "Imagina empezar el día en un baño que te llena de energía, o cocinar en una cocina abierta donde puedes conversar con tu familia. Transformamos cómo vives en tu hogar, ya sea con una reforma de cocina para ganar espacio o una reforma de baño para crear tu oasis personal.",
            services: [
              "Reforma de cocina",
              "Reforma de baño",
              "Reforma de salón o habitaciones"
            ],
            image: "/images/reforma-cocina-moderna.webp",
            imageAlt: "Cocina moderna tras reforma en Barcelona",
            ctaText: "Descubre las reformas por estancia",
            ctaHref: "/reformas-por-estancia"
          },
          {
            title: "Servicios Técnicos",
            subtitle: "— Los Detalles que Marcan la Diferencia",
            description: "La tranquilidad de tu hogar se basa en lo que no se ve. Nuestro equipo se encarga de las instalaciones críticas de electricidad y fontanería, el aislamiento térmico y acústico y los acabados perfectos que garantizan tu confort y seguridad durante décadas.",
            services: [
              "Instalaciones de electricidad y fontanería",
              "Carpintería, pladur y pintura decorativa",
              "Aislamiento térmico y acústico"
            ],
            image: "/images/servicios-tecnicos-planos.webp",
            imageAlt: "Servicios técnicos de reforma - planos y herramientas",
            ctaText: "Conoce nuestros servicios técnicos",
            ctaHref: "/servicios-tecnicos"
          },
          {
            title: "Reformas Comerciales",
            subtitle: "— Impulsa Tu Negocio",
            description: "Un espacio de trabajo funcional o un local atractivo son clave para tu éxito. Realizamos reformas de oficinas y locales comerciales que no solo renuevan la estética, sino que mejoran la productividad y la experiencia de tus clientes, cumpliendo siempre la normativa vigente.",
            services: [
              "Reformas de oficinas y locales",
              "Retail fit-out",
              "Adaptación de espacios para clínicas, restaurantes y más"
            ],
            image: "/images/reforma-oficinas.webp",
            imageAlt: "Oficina moderna tras reforma comercial en Barcelona",
            ctaText: "Ver soluciones para empresas",
            ctaHref: "/contacto"
          }
        ]}
      />
      <ProcessSection
        title="Proceso de Reforma, Paso a Paso"
        subtitle="Una reforma exitosa no es cuestión de suerte, sino de método. Te presentamos nuestra hoja de ruta hacia tu tranquilidad: un proceso de 4 fases diseñado para eliminar la incertidumbre y garantizar los mejores resultados."
      />
      <CompanySection />
      <WhyChooseUs />
      <TestimonialsCarousel />
      <FAQTwoColumn
        items={[
          {
            question: "¿Cuánto cuesta una reforma de baño en el área de Barcelona?",
            answer: "El precio varía según los metros y calidades, pero para darte transparencia, en Reformix Barcelona siempre ofrecemos presupuestos cerrados con un desglose completo por partidas."
          },
          {
            question: "¿En qué no debería ahorrar para que una reforma dure años?",
            answer: "Nuestra recomendación como profesionales es no ahorrar nunca en lo que no se ve: las instalaciones de fontanería y electricidad. Un acabado (como la pintura o un grifo) es fácil de cambiar, pero una instalación interna de mala calidad puede causar problemas muy caros en el futuro."
          },
          {
            question: "¿Qué incluye exactamente un servicio \"llave en mano\"?",
            answer: "Para nosotros, \"llave en mano\" significa que nos encargamos de absolutamente todo: desde el diseño inicial y las licencias, pasando por la coordinación de todos los gremios, hasta la limpieza final profesional. Tu única tarea es entrar a disfrutar de tu nuevo espacio."
          },
          {
            question: "¿Gestionáis las licencias de obra en Barcelona y Sabadell?",
            answer: "Sí. Nos encargamos de asesorarte y gestionar las licencias de obra (\"assabentat\") tanto en Sabadell como en Barcelona, para que no te preocupes por el papeleo."
          },
          {
            question: "¿Puedo vivir en casa durante una reforma de cocina?",
            answer: "En reformas parciales como una cocina o un baño es posible, y siempre nos organizamos para causar las menores molestias. Para una reforma integral, lo habitual es no hacerlo."
          },
          {
            question: "¿Ofrecéis garantía por escrito y servicio postventa?",
            answer: "Por supuesto. Todos nuestros trabajos están garantizados por escrito y ofrecemos un servicio postventa para tu total tranquilidad."
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
      <ContactSection />
    </>
  );
}

