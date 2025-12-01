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
      title: "Más de 10 años de experiencia",
      description: "Conocemos los materiales y procesos para anticipar problemas, asegurando un acabado de calidad que perdura en el tiempo.",
      icon: <CalendarDaysIcon className="w-8 h-8 text-white" />,
    },
    {
      title: "Equipo propio, trato directo",
      description: "Hablarás siempre con nosotros, sin intermediarios. Esto agiliza la comunicación y garantiza el control sobre cada detalle del proyecto.",
      icon: <UserGroupIcon className="w-8 h-8 text-white" />,
    },
    {
      title: "Presupuesto cerrado y transparente",
      description: "El precio que firmamos es el precio final. Detallamos cada partida para evitar sorpresas y costes ocultos en tu factura.",
      icon: <CalculatorIcon className="w-8 h-8 text-white" />,
    },
    {
      title: "Garantía real por escrito",
      description: "Recibirás un documento legal que detalla la cobertura y plazos de la garantía sobre nuestro trabajo para tu total tranquilidad.",
      icon: <ClipboardDocumentCheckIcon className="w-8 h-8 text-white" />,
    },
    {
      title: "Cumplimiento de plazos",
      description: "Planificamos cada fase del proyecto para cumplir con las fechas acordadas y realizamos una limpieza profesional al finalizar la obra.",
      icon: <ClockIcon className="w-8 h-8 text-white" />,
    },
    {
      title: "Seguros y tranquilidad",
      description: "Tu hogar está protegido. Contamos con un seguro de Responsabilidad Civil que cubre cualquier imprevisto durante la reforma.",
      icon: <ShieldCheckIcon className="w-8 h-8 text-white" />,
    },
  ];

  return (
    <section className="py-20 bg-white relative z-20">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-brand-text-heading mb-6">
            Por Qué Elegir Nuestra Empresa de Reformas en Barcelona
          </h2>
          <p className="text-brand-text-body text-lg leading-relaxed">
            Creemos en un trabajo bien hecho, que perdura en el tiempo. No buscamos atajos ni la solución más barata, sino la más correcta y duradera para tu hogar. Invertimos en buenos materiales y en un equipo de profesionales del que nos sentimos orgullosos. Porque una reforma es para toda la vida, y nuestra reputación también.
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

