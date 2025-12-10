import { Metadata } from 'next';
import { generateStandardMetadata } from '@/lib/metadata-utils';
import ContactForm from '@/app/components/forms/ContactForm';
import { PhoneIcon, EnvelopeIcon, MapPinIcon } from '@heroicons/react/24/outline';

const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://reformix.barcelona';

export const metadata: Metadata = {
  title: 'Contacto | Reformix Barcelona',
  description: 'Contacta con Reformix Barcelona para solicitar un presupuesto gratuito. Estamos en Sabadell, Vallès Occidental. Teléfono: +34 642 029 572.',
  ...generateStandardMetadata({
    title: 'Contacto | Reformix Barcelona',
    description: 'Contacta con Reformix Barcelona para solicitar un presupuesto gratuito. Estamos en Sabadell, Vallès Occidental. Teléfono: +34 642 029 572.',
    url: `${baseUrl}/contacto`,
    pagePath: '/contacto',
    keywords: ['contacto reformas Barcelona', 'presupuesto reformas', 'Reformix Barcelona contacto', 'reformas Sabadell'],
  }),
};

export default function ContactPage() {
  return (
    <>
      <div className="container mx-auto px-4 py-16 max-w-7xl">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 text-brand-text-heading">
              Contacta con Nosotros
            </h1>
            <p className="text-xl text-brand-text-body">
              Estamos aquí para ayudarte con tu proyecto de reforma
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-2xl font-semibold mb-6 text-brand-text-heading">
                Información de Contacto
              </h2>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <PhoneIcon className="w-6 h-6 text-brand-accent flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold text-brand-text-heading mb-1">Teléfono</h3>
                    <a href="tel:+34642029572" className="text-brand-text-body hover:text-brand-accent" aria-label="Llamar por teléfono: +34 642 029 572">
                      +34 642 029 572
                    </a>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <svg className="w-6 h-6 text-brand-accent flex-shrink-0 mt-1" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                  </svg>
                  <div>
                    <h3 className="font-semibold text-brand-text-heading mb-1">WhatsApp</h3>
                    <a href="https://wa.me/34642029572" target="_blank" rel="noopener noreferrer" className="text-brand-text-body hover:text-brand-accent" aria-label="Contactar por WhatsApp: +34 642 029 572">
                      +34 642 029 572
                    </a>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <EnvelopeIcon className="w-6 h-6 text-brand-accent flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold text-brand-text-heading mb-1">Email</h3>
                    <a href="mailto:info@reformix.barcelona" className="text-brand-text-body hover:text-brand-accent">
                      info@reformix.barcelona
                    </a>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <MapPinIcon className="w-6 h-6 text-brand-accent flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold text-brand-text-heading mb-1">Ubicación</h3>
                    <a 
                      href="https://maps.app.goo.gl/2TjHRrrd7Bw7eSdPA"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-brand-text-body hover:text-brand-accent"
                    >
                      Carrer de Concepción Arenal, 100<br />
                      08204 Sabadell, Barcelona<br />
                      <span className="text-sm text-brand-text-body/70">Servimos a Barcelona y toda la comarca</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div id="form">
              <h2 className="text-2xl font-semibold mb-6 text-brand-text-heading">
                Solicita tu Presupuesto
              </h2>
              <ContactForm />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

