import {
  CalendarDaysIcon,
  UserGroupIcon,
  CalculatorIcon,
  ClipboardDocumentCheckIcon,
  ShieldCheckIcon,
  ClockIcon,
} from '@heroicons/react/24/solid';

interface Feature {
  title: string;
  description: string;
  icon: React.ReactNode;
}

export default function WhyChooseUs() {
  const features: Feature[] = [
    {
      title: "Análisis del Proyecto y Planificación Conjunta",
      description: "Estudiamos a fondo tu proyecto ejecutivo y nos reunimos contigo para identificar puntos críticos, definir responsabilidades y crear un calendario de obra que se alinee con tus expectativas y las de tu cliente.",
      icon: <CalendarDaysIcon className="w-8 h-8 text-white" />,
    },
    {
      title: "Presupuesto cerrado y transparente",
      description: "Presentamos un presupuesto cerrado basado en tus mediciones, desglosado para que sea totalmente transparente para ti y tu cliente, evitando sorpresas y facilitando la toma de decisiones.",
      icon: <CalculatorIcon className="w-8 h-8 text-white" />,
    },
    {
      title: "Ejecución y supervisión constante",
      description: "Iniciamos la obra con equipo propio. El jefe de obra, tu interlocutor único, supervisa cada detalle para garantizar la fidelidad al diseño y te informa proactivamente del avance.",
      icon: <ClipboardDocumentCheckIcon className="w-8 h-8 text-white" />,
    },
    {
      title: "Resolución proactiva de imprevistos",
      description: "Si surge un imprevisto técnico, lo documentamos, analizamos las opciones y consensuamos contigo la mejor vía de actuación antes de ejecutar, evitando decisiones unilaterales.",
      icon: <ShieldCheckIcon className="w-8 h-8 text-white" />,
    },
    {
      title: "Entrega y revisión final contigo",
      description: "Antes de la entrega al cliente, realizamos una revisión completa de la obra contigo para asegurarnos de que cada acabado cumpla con tus estándares de calidad.",
      icon: <UserGroupIcon className="w-8 h-8 text-white" />,
    },
    {
      title: "Postventa y ajustes finos",
      description: "Tras la entrega quedamos disponibles para ajustes finos y soporte postventa. Documentamos los “as built”, cerramos pendientes y aseguramos que tu cliente quede 100% satisfecho.",
      icon: <ClockIcon className="w-8 h-8 text-white" />,
    },
  ];

  return (
    <section className="py-20 bg-white relative z-20">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-brand-text-heading mb-6">
            Un Proceso Diseñado para una Colaboración Perfecta
          </h2>
          <p className="text-brand-text-body text-lg leading-relaxed">
            Nuestro proceso está optimizado para integrarnos con tu metodología de trabajo, asegurando una comunicación fluida y un control total desde el primer día.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="bg-brand-primary rounded-xl p-8 text-white shadow-lg hover:shadow-xl transition-shadow duration-300 flex flex-col"
            >
              <div className="mb-6 p-3 bg-white/10 rounded-lg w-fit">
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold mb-4">
                {feature.title}
              </h3>
              <p className="text-white/90 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

