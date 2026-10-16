import type { Project } from './types';

const IMG = '/images/proyectos/rehabilitacion-fachada-castelldefels-casa-familiar';

export const project: Project = {
    slug: 'rehabilitacion-fachada-castelldefels-casa-familiar',
    title: 'Rehabilitación de fachada — casa familiar en Castelldefels',
    metaTitle: 'Rehabilitación de fachada en Castelldefels | Reformix',
    metaDescription:
      'Fachada en Castelldefels: saneado, malla y pintura rugosa. Presupuesto cerrado y garantía. Pide visita.',
    h1: 'Rehabilitación de fachada en Castelldefels',
    subtitle:
      'De la pintura naranja cuarteada a una fachada rugosa continua, con el color elegido en obra junto a los propietarios.',
    heroImage: `${IMG}/despues-01-entrada-acabada-puerta.webp`,
    heroImageAlt:
      'Entrada acabada de casa familiar en Castelldefels con puerta de madera, rejas y peldaños de gres',
    keywords: [
      'rehabilitación fachada Castelldefels',
      'pintura fachada casa familiar',
      'grietas fachada Baix Llobregat',
      'pintura rugosa exterior Barcelona',
    ],
    ficha: {
      tipo: 'Casa familiar de 3 plantas',
      zona: 'Castelldefels (Baix Llobregat)',
      trabajos: 'Rehabilitación de fachada y pintura exterior',
      sistema: 'Saneado + imprimación + malla + 2 alisados + pintura rugosa',
      remates: 'Salida de humos de acero y peldaños de gres',
      plazo: '4 semanas',
    },
    headings: {
      reto: 'Por qué no bastaba repintar esta fachada',
      solucion: 'Solución: saneado, malla y pintura rugosa',
      proceso: 'Cómo rehabilitamos la fachada paso a paso',
      resultado: 'Resultado de la rehabilitación en Castelldefels',
      takeaways: 'Qué puedes aplicar en tu fachada',
    },
    reto:
      'En esta casa de tres plantas de Castelldefels —Baix Llobregat, al sur de Barcelona— la fachada arrastraba grietas finas y una pintura naranja que ya no agarraba. Debajo había masilla suelta y restos de capas viejas. Con el sol de costa y la humedad marina, otra mano habría tapado el color una temporada; al primer ciclo de calor y salitre, las fisuras volverían a marcarse. Había que llegar a un soporte sano antes del acabado. Los dueños pedían una piel exterior que aguantara años, no un retoque que obligara a montar andamio otra vez enseguida.',
    solucion:
      'Trabajamos por capas: saneado de lo inestable, imprimación para unificar la base, dos alisados (el primero con malla) y pintura rugosa al cierre. El gris cálido lo fijamos en obra con muestras a la luz real de la calle —la misma que verán cada mañana—, no desde el catálogo del almacén.',
    proceso: [
      {
        title: 'Retirada y saneado',
        text: 'Con el andamio montado, picamos la pintura y la masilla despegadas hasta tocar un soporte fiable. Donde el enfoscado estaba podrido o hueco, rehicimos el rebozado: sin esta fase, el acabado nace sobre una base que ya falla.',
      },
      {
        title: 'Imprimación',
        text: 'La imprimación endurece la base y mejora el agarre de los alisados. Evita despegues en puntos débiles: esquinas, encuentros con balcones y zonas donde la pintura antigua había quedado a medias.',
      },
      {
        title: 'Primer alisado con malla',
        text: 'En la primera capa metemos malla para repartir tensiones. En una fachada alta, el sol y los saltos térmicos mueven el soporte; la malla no elimina ese movimiento, pero reduce el riesgo de que las grietas superficiales vuelvan a dibujarse.',
      },
      {
        title: 'Emplaste, pintura y remates',
        text: 'Segundo alisado con emplaste exterior y dos manos de pintura rugosa. Coordinamos el lateral con la nueva salida de humos de acero, protegimos el porche y revestimos los peldaños de acceso con gres, para entregar la entrada con el mismo criterio que la fachada.',
      },
    ],
    resultado:
      'Las tres plantas quedaron con una fachada continua y una textura rugosa homogénea. El lateral encaja con la chimenea de acero; la entrada, con peldaños de gres, queda integrada —sin el típico remiendo de última hora.',
    trustPoints: [
      'Presupuesto cerrado',
      'Alcance por escrito',
      'Garantía sobre lo ejecutado',
    ],
    midCta: {
      title: '¿Tu fachada está en un estado parecido?',
      description:
        'Visitamos la vivienda, revisamos grietas, soporte y acabados y te proponemos el alcance antes de empezar.',
      buttonText: 'Pedir visita',
      buttonHref: '/contacto',
      // No repetir USP del trust strip de arriba: aquí solo la acción.
      features: [],
    },
    takeaways: [
      'Si vas a rehabilitar una fachada alta, planifica andamio y convivencia: un buen saneado exige acceso estable, no trabajar a saltos.',
      'En zona de costa, el sistema importa tanto como el color: base débil + sol y humedad = volver a pintar antes de tiempo.',
      'Elige el color en obra, a la luz real de la calle: el catálogo del almacén casi nunca coincide con lo que verás cada mañana.',
    ],
    galleryIntro:
      'Antes, obra y después: andamio, saneado, chimenea, peldaños y el cierre en pintura rugosa.',
    gallery: [
      {
        src: `${IMG}/antes-01-fachada-naranja-preparacion.webp`,
        alt: 'Fachada naranja de casa familiar en Castelldefels al inicio de la rehabilitación, con andamio',
        caption: 'Antes — pintura naranja original e inicio del saneado',
        phase: 'antes',
      },
      {
        src: `${IMG}/antes-02-pintura-degradada-andamio.webp`,
        alt: 'Fachada con pintura degradada y parches de enfoscado durante la rehabilitación en Castelldefels',
        caption: 'Antes — pintura degradada y parches de reparación',
        phase: 'antes',
      },
      {
        src: `${IMG}/proceso-01-lijado-saneado-fachada.webp`,
        alt: 'Operario lijando la fachada exterior con aspiración en obra de rehabilitación en Castelldefels',
        caption: 'Proceso — lijado y saneado de la superficie',
        phase: 'proceso',
      },
      {
        src: `${IMG}/proceso-02-reparacion-lateral-chimenea.webp`,
        alt: 'Lateral de fachada en reparación con parches de mortero y salida de humos de acero',
        caption: 'Proceso — reparación del paramento lateral',
        phase: 'proceso',
      },
      {
        src: `${IMG}/proceso-03-salida-humos-acero-inoxidable.webp`,
        alt: 'Instalación de salida de humos de acero inoxidable en fachada en obra en Castelldefels',
        caption: 'Proceso — instalación de salida de humos',
        phase: 'proceso',
      },
      {
        src: `${IMG}/proceso-04-andamio-fachada-salida-humos.webp`,
        alt: 'Torre de andamio junto a fachada naranja y nueva chimenea exterior en obra',
        caption: 'Proceso — acceso con andamio a la fachada',
        phase: 'proceso',
      },
      {
        src: `${IMG}/proceso-05-alisado-fachada-lateral.webp`,
        alt: 'Alisado de fachada lateral con andamio en casa familiar de tres plantas en Castelldefels',
        caption: 'Proceso — alisado del lateral',
        phase: 'proceso',
      },
      {
        src: `${IMG}/proceso-06-enfoscado-paramento-balcones.webp`,
        alt: 'Enfoscado del paramento lateral junto a balcones de vidrio durante la rehabilitación',
        caption: 'Proceso — enfoscado junto a balcones',
        phase: 'proceso',
      },
      {
        src: `${IMG}/proceso-07-proteccion-entrada-obras.webp`,
        alt: 'Porche de entrada protegido con plásticos durante la rehabilitación de fachada',
        caption: 'Proceso — protección de la entrada en obra',
        phase: 'proceso',
      },
      {
        src: `${IMG}/proceso-08-peldanos-entrada-gres.webp`,
        alt: 'Colocación de gres en peldaños de la entrada de casa familiar durante la obra',
        caption: 'Proceso — revestimiento de la escalera de acceso',
        phase: 'proceso',
      },
      {
        src: `${IMG}/proceso-09-pintura-fachada-andamio.webp`,
        alt: 'Fachada en fase de pintura exterior con torre de andamio en casa familiar de Castelldefels',
        caption: 'Proceso — pintura exterior con andamio',
        phase: 'proceso',
      },
      {
        src: `${IMG}/despues-01-entrada-acabada-puerta.webp`,
        alt: 'Entrada acabada de casa familiar en Castelldefels con puerta de madera, rejas y peldaños de gres',
        caption: 'Después — entrada rehabilitada',
        phase: 'despues',
      },
      {
        src: `${IMG}/despues-02-entrada-piedra-y-ladrillo.webp`,
        alt: 'Entrada con aplacado de piedra, pilares de ladrillo y fachada lisa tras la rehabilitación',
        caption: 'Después — detalle de entrada y acabados',
        phase: 'despues',
      },
      {
        src: `${IMG}/despues-03-fachada-lateral-blanca.webp`,
        alt: 'Fachada lateral blanca acabada con toldo, reja y salida de humos en casa de Castelldefels',
        caption: 'Después — lateral acabado',
        phase: 'despues',
      },
      {
        src: `${IMG}/despues-04-vista-general-casa.webp`,
        alt: 'Vista general de casa familiar de tres plantas en Castelldefels tras rehabilitación de fachada',
        caption: 'Después — vista general del resultado',
        phase: 'despues',
      },
    ],
    relatedServices: [
      { name: 'Rehabilitación de casas', href: '/rehabilitacion-casas' },
      { name: 'Albañilería para reformas', href: '/albanileria' },
    ],
    faqs: [
      {
        question: '¿La malla hace falta en cualquier fachada?',
        answer:
          'No siempre. En un paramento bajo y estable a veces basta un saneado limpio. Aquí, con tres plantas y mucha exposición al sol, la malla en el primer alisado era la opción sensata para limitar que las grietas reaparezcan cuando el soporte se mueva.',
      },
      {
        question: '¿Qué mantenimiento lleva la pintura rugosa?',
        answer:
          'Limpieza periódica con agua a baja presión y revisión de encuentros (aleros, balcones, chimenea). No es un acabado eterno sin vigilancia, pero aguanta mejor el día a día que una mano lisa puesta sobre una base dudosa.',
      },
      {
        question: '¿Se puede vivir en casa mientras dura la obra?',
        answer:
          'Sí: la vivienda sigue siendo habitable. Hay andamio, ruido en franjas concretas y el porche queda protegido. Coordinamos los accesos para no dejar la entrada inutilizable más de lo necesario.',
      },
      {
        question: '¿Por qué tocasteis también los peldaños y la salida de humos?',
        answer:
          'Porque volver a montar andamio meses después por un remate pendiente sale caro. Alineamos chimenea, peldaños de gres y fachada en la misma campaña para entregar un conjunto coherente.',
      },
      {
        question: '¿Cuánto cuesta rehabilitar una fachada como esta?',
        answer:
          'Depende de la superficie, el estado del soporte, la necesidad de andamio y el sistema de acabado. Por eso revisamos primero la fachada y definimos el alcance antes de cerrar el presupuesto.',
      },
      {
        question: '¿El presupuesto es cerrado o puede subir en obra?',
        answer:
          'Sí: trabajamos con alcance por escrito y precio cerrado sobre lo acordado. Si aparece un imprevisto real —por ejemplo, un enfoscado más deteriorado de lo visible—, lo explicamos y te presentamos un anexo antes de actuar.',
      },
    ],
    faqTitleLines: ['Preguntas sobre', 'esta rehabilitación de fachada'],
    closingCta: {
      title: '¿Quieres rehabilitar tu fachada con este mismo criterio?',
      description:
        'Te visitamos, miramos el estado real del soporte y te explicamos qué haría falta antes de empezar la obra.',
      buttonText: 'Pedir visita',
      buttonHref: '/contacto',
      features: ['Diagnóstico en obra', 'Alcance definido', 'Sin compromiso'],
    },
    cardSummary:
      'Casa de 3 plantas en Castelldefels: saneado, malla, pintura rugosa y remates de entrada.',
  };
