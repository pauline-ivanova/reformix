import Hero from '@/app/components/blocks/Hero';
import FeatureGrid from '@/app/components/blocks/FeatureGrid';
import AboutSection from '@/app/components/blocks/AboutSection';
import TestimonialsCarousel from '@/app/components/blocks/TestimonialsCarousel';
import FAQTwoColumn from '@/app/components/blocks/FAQTwoColumn';
import ServiceAreas from '@/app/components/blocks/ServiceAreas';
import CTA from '@/app/components/blocks/CTA';
import JsonLd from '@/app/components/common/JsonLd';
import {
  generateFAQSchema,
  generateServiceSchema,
  generateBreadcrumbSchema,
} from '@/app/components/common/JsonLd';
import { Metadata } from 'next';
import { generateStandardMetadata } from '@/lib/metadata-utils';
import { getSiteUrl } from '@/lib/site-url';
import {
  PaintBrushIcon,
  ShieldCheckIcon,
  SparklesIcon,
  WrenchScrewdriverIcon,
  Squares2X2Icon,
  ClockIcon,
  ExclamationTriangleIcon,
  DocumentCheckIcon,
  ArrowPathIcon,
  HomeIcon,
} from '@heroicons/react/24/solid';
import Link from 'next/link';

const PAGE_PATH = '/instalacion-papel-pintado';
const PAGE_TITLE = 'Instalación de papel pintado en Barcelona | Reformix';
const PAGE_DESCRIPTION =
  'Instalación de papel pintado en Barcelona: preparación del soporte, colocación con rapport y remates limpios. Presupuesto cerrado. ¡Pide visita!';
const COVER_IMAGE = '/images/instalacion-papel-pintado.webp';

export const metadata: Metadata = {
  title: PAGE_TITLE,
  description: PAGE_DESCRIPTION,
  ...generateStandardMetadata({
    title: PAGE_TITLE,
    description: PAGE_DESCRIPTION,
    url: `${getSiteUrl()}${PAGE_PATH}`,
    pagePath: PAGE_PATH,
    keywords: [
      'instalación de papel pintado Barcelona',
      'colocación de papel pintado Barcelona',
      'empapelado de paredes Barcelona',
      'retirar papel pintado Barcelona',
      'instaladores de papel pintado',
      'poner papel pintado en piso',
    ],
    image: COVER_IMAGE,
  }),
};

const iconWrap = (Icon: typeof PaintBrushIcon) => (
  <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-brand-primary/10 text-brand-primary">
    <Icon className="w-8 h-8" />
  </div>
);

const riskIconWrap = (Icon: typeof ExclamationTriangleIcon) => (
  <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-red-100 text-red-600">
    <Icon className="w-8 h-8" />
  </div>
);

export default async function InstalacionPapelPintadoPage() {
  const features = [
    {
      title: 'Soporte revisado',
      description:
        'Planitud, juntas y tornillería del pladur o del paramento: lo miramos antes de abrir el primer rollo, no cuando ya hay cola en la pared.',
      icon: iconWrap(WrenchScrewdriverIcon),
    },
    {
      title: 'Uniones y rapport',
      description:
        'Alineamos el dibujo entre tiras y, si varias estancias se ven a la vez, cuidamos que el tono no «salte» al abrir la puerta.',
      icon: iconWrap(Squares2X2Icon),
    },
    {
      title: 'Remates a hueso',
      description:
        'Cortes limpios en rodapié, molduras y mecanismos. El encuentro se decide en obra, no con un bisturí al final del día.',
      icon: iconWrap(SparklesIcon),
    },
    {
      title: 'Presupuesto cerrado',
      description:
        'Metros, tipo de papel y complejidad de remates por escrito. Si aparece un imprevisto real, anexo antes de actuar.',
      icon: iconWrap(ShieldCheckIcon),
    },
  ];

  const risks = [
    {
      title: 'Soporte irregular',
      description:
        'Juntas mal tratadas o paredes sin plomo: a contraluz se ven baches y se notan más con papeles anchos o texturizados. Luego toca despegar o convivir con el defecto.',
      icon: riskIconWrap(ExclamationTriangleIcon),
    },
    {
      title: 'Rapport desalineado',
      description:
        'Un dibujo mal encajado entre tiras —o entre pasillo y salón— se lee al abrir la puerta y no se arregla con un retoque puntual.',
      icon: riskIconWrap(Squares2X2Icon),
    },
    {
      title: 'Burbujas y despegue',
      description:
        'Cola incorrecta o asentado apresurado: bordes que levantan a las pocas semanas y un remiendo más caro que hacerlo bien la primera vez.',
      icon: riskIconWrap(ShieldCheckIcon),
    },
    {
      title: 'Cortes chapuceros',
      description:
        'Rodapié dentado, interruptores «parcheados» o molduras forzosas: se ven cada día y delatan la colocación.',
      icon: riskIconWrap(WrenchScrewdriverIcon),
    },
  ];

  const includes = [
    {
      title: 'Colocación en viviendas',
      description:
        'Salones, pasillos, dormitorios e infantiles. Ordenamos por vistas cruzadas para que tono y dibujo encajen al pasar de una estancia a otra.',
      icon: iconWrap(HomeIcon),
    },
    {
      title: 'Retirada y reempapelado',
      description:
        'Si hay papel antiguo mal adherido, lo retiramos, saneamos el paramento y colocamos el nuevo. El saneado va en el alcance, no como sorpresa.',
      icon: iconWrap(ArrowPathIcon),
    },
    {
      title: 'Tras pladur o reforma',
      description:
        'Empalmamos con el ritmo de obra: cuando el pladur está listo, medimos, protegemos y empapelamos sin reabrir frentes ya entregados.',
      icon: iconWrap(WrenchScrewdriverIcon),
    },
  ];

  const process = [
    {
      title: '1. Medición y alcance',
      description:
        'Metros por estancia, fotos de molduras y muestra o ficha del papel. Con eso calculamos merma, rapport y un precio cerrado.',
      icon: iconWrap(DocumentCheckIcon),
    },
    {
      title: '2. Base y protección',
      description:
        'Corregimos lo mínimo necesario en el soporte, protegemos suelos y rodapiés, y dejamos el paramento listo para encolar.',
      icon: iconWrap(WrenchScrewdriverIcon),
    },
    {
      title: '3. Colocación y remates',
      description:
        'Extendemos, encolamos y asentamos tira a tira; cortes en nichos, molduras y mecanismos en la misma pasada.',
      icon: iconWrap(PaintBrushIcon),
    },
    {
      title: '4. Cierre habitación a habitación',
      description:
        'Entrega parcial si vives en casa: zonas de paso acotadas, limpieza de restos de cola y revisión a contraluz antes de dar por cerrado.',
      icon: iconWrap(ClockIcon),
    },
  ];

  const widthChoice = [
    {
      title: 'Papel de 1 m',
      description:
        'Menos juntas y muy limpio en paños largos. Exige planitud alta y manejo preciso del rapport. Ideal si el soporte ya está bien tratado.',
      icon: iconWrap(Squares2X2Icon),
    },
    {
      title: 'Papel de 53 cm',
      description:
        'Más ágil en recortes densos (muchas molduras, rincones, mecanismos). Perdona mejor un soporte irregular. Buena opción en reformas parciales.',
      icon: iconWrap(PaintBrushIcon),
    },
    {
      title: 'Cómo elegimos contigo',
      description:
        'Miramos la planitud de la pared, el dibujo y si la estancia tiene muchos encuentros. Con eso basta para decidir el ancho.',
      icon: iconWrap(DocumentCheckIcon),
    },
  ];

  const faqs = [
    {
      question: '¿Papel de 53 cm o de 1 m: cuál conviene?',
      answer:
        'Depende de la planitud de la pared y de cuántos remates haya. Lo concretamos en visita; arriba resumimos cuándo encaja cada ancho.',
    },
    {
      question: '¿Retiráis el papel pintado antiguo?',
      answer:
        'Sí. Lo despegamos, saneamos el paramento y dejamos la base lista para el nuevo. Si hay que alisar o imprimar, va en el alcance antes de empezar.',
    },
    {
      question: '¿Traéis vosotros el papel o lo aporto yo?',
      answer:
        'Puedes aportar el que hayas elegido o pedirnos orientación según soporte y uso. En ambos casos medimos merma y rapport antes de encargar rollos de más.',
    },
    {
      question: '¿Se puede empapelar en baños o cocinas?',
      answer:
        'En zonas de salpicadura repetida preferimos vinílico lavable o pintura técnica. En el resto, según humedad y ficha del fabricante; lo dejamos escrito en el presupuesto.',
    },
    {
      question: '¿De qué depende el precio del empapelado en Barcelona?',
      answer:
        'De metros, del papel y de si hay retirada, corrección de base o muchos encuentros. Medimos y cerramos el alcance; no damos un €/m² a ciegas.',
    },
    {
      question: '¿Qué garantía hay sobre la colocación?',
      answer:
        'Garantía por escrito sobre lo ejecutado. Si aparece un defecto de colocación, lo corregimos. El mantenimiento sigue la ficha del fabricante.',
    },
  ];

  const faqSchema = generateFAQSchema(faqs);
  const serviceSchema = generateServiceSchema({
    name: 'Instalación de papel pintado en Barcelona',
    description: PAGE_DESCRIPTION,
    provider: {
      '@type': 'HomeAndConstructionBusiness',
      name: 'Reformix Barcelona',
    },
    serviceType: 'Wallpaper Installation',
    url: PAGE_PATH,
  });
  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: 'Inicio', url: '/' },
    { name: 'Servicios Técnicos', url: '/servicios-tecnicos' },
    { name: 'Instalación de papel pintado', url: PAGE_PATH },
  ]);

  return (
    <>
      {faqSchema && <JsonLd data={faqSchema} />}
      {serviceSchema && <JsonLd data={serviceSchema} />}
      {breadcrumbSchema && <JsonLd data={breadcrumbSchema} />}

      <Hero
        title="Instalación de papel pintado"
        titleLines={['Instalación de', 'papel pintado']}
        subtitle="Colocación con soporte revisado, rapport alineado y cortes limpios en los encuentros. Alcance por escrito y presupuesto cerrado."
        primaryCTA={{
          text: 'Pedir presupuesto de empapelado',
          href: '/contacto',
        }}
        secondaryCTA={{
          text: 'WhatsApp',
          href: 'https://wa.me/34642029572',
        }}
        backgroundImage={COVER_IMAGE}
        imageAlt="Instalación profesional de papel pintado: corte preciso en el encuentro con el rodapié"
        overlayOpacity="stronger"
      />

      <FeatureGrid
        title="Empapelado que se nota en los remates"
        subtitle="Pegar el papel es la parte visible. El resultado se decide en la base, el aplomo y cómo termina cada encuentro."
        features={features}
        columns={4}
      />

      <AboutSection
        logoPath="/images/reformix-logo-vertical-white.png"
        text="En Reformix Barcelona empapelamos pisos con criterio de obra: medir bien, no forzar un papel sobre una base dudosa y cerrar habitación a habitación si vives en casa. Coordinamos el ritmo con pladur o pintura cuando formamos parte de una reforma más amplia."
      />

      <section className="py-8 bg-white">
        <div className="container mx-auto px-4 max-w-3xl text-center text-brand-text-body">
          <p>
            Servicios relacionados:{' '}
            <Link href="/pladur" className="text-brand-primary font-semibold hover:underline">
              Pladur y falsos techos
            </Link>
            {' · '}
            <Link
              href="/pintura-interior"
              className="text-brand-primary font-semibold hover:underline"
            >
              Pintura interior
            </Link>
            {' · '}
            <Link
              href="/reformas-habitaciones"
              className="text-brand-primary font-semibold hover:underline"
            >
              Reformas de habitaciones
            </Link>
          </p>
        </div>
      </section>

      <FeatureGrid
        title={
          <>
            Riesgos de un
            <br />
            empapelado mal ejecutado
          </>
        }
        subtitle="Un fallo de base o de rapport no se disimula con otro rollo: o se rehace, o se convive con él a contraluz."
        features={risks}
        columns={4}
        backgroundClassName="bg-gray-50"
      />

      <FeatureGrid
        title={
          <>
            Qué incluye la instalación
            <br />
            de papel pintado
          </>
        }
        subtitle="Colocación nueva, retirada de papel viejo o empalme tras el pladur: el alcance se cierra con metros y fotos antes de empezar."
        features={includes}
        columns={3}
        backgroundClassName="bg-white"
        paddingClassName="py-20 md:py-24"
      />

      <FeatureGrid
        title={
          <>
            Cómo empapelamos:
            <br />
            de la base al remate
          </>
        }
        subtitle="Primero medimos y miramos la base; luego encolamos y cerramos estancia a estancia si vives en casa."
        features={process}
        columns={4}
        backgroundClassName="bg-gray-50"
      />

      <FeatureGrid
        title={
          <>
            Papel de 53 cm o de 1 m:
            <br />
            cuándo conviene cada uno
          </>
        }
        subtitle="El ancho del rollo cambia lo que exige la pared y el ritmo de los remates."
        features={widthChoice}
        columns={3}
        backgroundClassName="bg-white"
        paddingClassName="py-20 md:py-24"
      />

      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4 max-w-3xl text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-brand-text-heading mb-3">
            Papel pintado en Sant Gervasi: caso real
          </h2>
          <p className="text-brand-text-body mb-6">
            Piso de cinco habitaciones: metro texturizado sobre pladur preparado, pasillo con
            boiserie, plazo de dos semanas. Fotos antes, durante y después.
          </p>
          <a
            href="/proyectos/papel-pintado-piso-sant-gervasi-barcelona"
            className="inline-block rounded-md bg-brand-primary hover:opacity-90 px-8 py-3 text-base font-semibold text-white transition-opacity"
          >
            Ver el proyecto de Sant Gervasi
          </a>
        </div>
      </section>

      <TestimonialsCarousel
        title="Opiniones de empapelado en Barcelona"
        subtitle="Fragmentos de encargos reales en Barcelona y el Vallès Occidental."
        testimonials={[
          {
            text: 'Teníamos miedo de no poder quedarnos en casa. Empezaron por el dormitorio y el pasillo; el salón lo dejaron para el final. El parquet iba cubierto y al cabo de unos días ya dormíamos en la habitación acabada.',
            initials: 'CR',
            name: 'Clara R.',
            location: 'Barcelona (Gràcia)',
          },
          {
            text: 'Debajo del papel nuevo había dos o tres capas viejas. Lo quitaron todo, retocaron un par de zonas y pegaron el vinílico. Nos habían avisado del saneado en el presupuesto; no fue una sorpresa a mitad de obra.',
            initials: 'MT',
            name: 'Marc T.',
            location: 'Sabadell',
          },
          {
            text: 'El papel que elegimos tenía un dibujo que se desperdiciaba mucho al cortar. Nos dijeron cuántos rollos de más comprar antes de encargarlos. En el pasillo no faltó material.',
            initials: 'LP',
            name: 'Laura P.',
            location: 'Sant Cugat del Vallès',
          },
          {
            text: 'Después del pladur esperábamos una semana muerta. Entraron a empapelar en cuanto el alisado estuvo seco. El pasillo y los dormitorios se ven del mismo tono; eso nos preocupaba.',
            initials: 'JG',
            name: 'Jordi G.',
            location: 'Badalona',
          },
          {
            text: 'No sabíamos si pedir rollos anchos o normales. Miraron las paredes del recibidor (más irregulares) y del salón, y nos lo separaron: estrecho en uno, ancho en el otro. Tiene sentido cuando lo ves puesto.',
            initials: 'AN',
            name: 'Aina N.',
            location: "L'Hospitalet de Llobregat",
          },
          {
            text: 'En la cocina solo pusimos vinílico lavable detrás de la encimera; el resto es otro papel. Se nota el cambio de material si te fijas, pero en el día a día se limpia bien y no chirría.',
            initials: 'DS',
            name: 'David S.',
            location: 'Terrassa',
          },
        ]}
      />

      <FAQTwoColumn
        titleLines={['Preguntas sobre', 'instalación de papel pintado']}
        items={faqs}
      />

      <ServiceAreas
        title="Dónde instalamos papel pintado"
        intro="Trabajamos desde el Vallès Occidental y en Barcelona y su área metropolitana. Cuéntanos la zona al pedir presupuesto."
        areas={[
          {
            title: 'Barcelona y Área Metropolitana',
            cities: [
              'Barcelona',
              "L'Hospitalet de Llobregat",
              'Badalona',
              'Santa Coloma de Gramenet',
              'Cornellà de Llobregat',
              'Esplugues de Llobregat',
              'Sant Just Desvern',
              'Sant Joan Despí',
              'Sant Boi de Llobregat',
              'El Prat de Llobregat',
              'Viladecans',
              'Castelldefels',
              'Gavà',
              'Sant Adrià de Besòs',
              'Montcada i Reixac',
            ],
          },
          {
            title: 'Vallès Occidental',
            cities: [
              'Sabadell',
              'Terrassa',
              'Sant Cugat del Vallès',
              'Cerdanyola del Vallès',
              'Ripollet',
              'Barberà del Vallès',
              'Sant Quirze del Vallès',
              'Badia del Vallès',
              'Castellar del Vallès',
              'Sentmenat',
              'Santa Perpètua de Mogoda',
              'Polinyà',
              'Palau-solità i Plegamans',
              'Rellinars',
              'Ullastrell',
              'Matadepera',
              'Gallifa',
            ],
          },
        ]}
      />

      <CTA
        title="¿Vas a empapelar sobre pladur nuevo o a cambiar un papel viejo?"
        description="Cuéntanos metros, zona y si ya tienes el papel elegido. Te decimos qué ancho encaja, qué hay que corregir en la base y cerramos el alcance antes de empezar."
        buttonText="Pedir presupuesto de empapelado"
        buttonHref="/contacto"
        features={[
          'Visita sin compromiso',
          'Merma y rapport calculados',
          'También por WhatsApp',
        ]}
      />
    </>
  );
}
