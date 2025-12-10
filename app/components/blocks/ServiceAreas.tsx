// Server component - no 'use client' needed
// Using inline SVG instead of react-icons to avoid client-side JavaScript

interface ServiceArea {
  title: string;
  cities: string[];
}

interface ServiceAreasProps {
  title?: string;
  intro?: string;
  areas: ServiceArea[];
}

const MapIcon = () => (
  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
    <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
  </svg>
);

export default function ServiceAreas({ 
  title = "Áreas de Servicio",
  intro = "Con base en Sabadell, nuestro principal radio de acción es el Vallès Occidental, aunque también realizamos proyectos en Barcelona y las ciudades más cercanas.",
  areas 
}: ServiceAreasProps) {
  return (
    <section className="py-20 bg-white relative z-20">
      <div className="container mx-auto px-4 max-w-7xl">
        <h2 className="text-3xl md:text-4xl font-bold text-brand-text-heading mb-6 text-center leading-tight">
          {title}
        </h2>
        
        {intro && (
          <p className="text-brand-text-body text-center mb-12 max-w-3xl mx-auto leading-relaxed">
            {intro}
          </p>
        )}

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
          {areas.map((area, index) => (
            <div key={index} className="flex gap-4">
              <div className="flex-shrink-0">
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-brand-secondary/10 text-brand-secondary">
                  <MapIcon />
                </div>
              </div>
              <div className="flex-1">
                <h3 className="font-bold text-xl text-brand-text-heading mb-4">
                  {area.title}
                </h3>
                <p className="text-brand-text-body leading-relaxed">
                  {area.cities.join(', ')}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

