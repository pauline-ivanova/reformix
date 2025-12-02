import Link from 'next/link';
import { PhoneIcon, MapPinIcon, CheckIcon } from '@heroicons/react/24/outline';

export default function ContactSection() {
  return (
    <section className="relative bg-brand-primary text-white w-full">
      <div className="container mx-auto px-4 py-16 max-w-7xl">
        <div className="grid md:grid-cols-2 gap-12">
          {/* Left Column */}
          <div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
              Hablemos de tu proyecto
            </h2>
            <p className="text-lg mb-8 text-white/90 leading-relaxed">
              Es el momento de dar el primer paso. Cuéntanos tu idea y te prepararemos un presupuesto a medida, detallado y sin compromiso. Verás qué fácil es empezar a dar forma a tu reforma cuando tienes un equipo de confianza que te escucha.
            </p>
            <Link 
              href="/contacto#form"
              className="inline-block bg-white text-brand-primary px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors border-2 border-white"
            >
              Pedir mi presupuesto ahora
            </Link>
            <div className="mt-10 space-y-4">
              <div className="flex items-start gap-3">
                <CheckIcon className="w-6 h-6 text-white flex-shrink-0 mt-1" />
                <p className="text-white/90">Asesoramiento inicial gratuito</p>
              </div>
              <div className="flex items-start gap-3">
                <CheckIcon className="w-6 h-6 text-white flex-shrink-0 mt-1" />
                <p className="text-white/90">Visita y medición sin coste</p>
              </div>
              <div className="flex items-start gap-3">
                <CheckIcon className="w-6 h-6 text-white flex-shrink-0 mt-1" />
                <p className="text-white/90">Presupuesto detallado y cerrado</p>
              </div>
            </div>
          </div>

          {/* Right Column */}
          <div>
            <div className="mb-6">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2992.5!2d2.120084!3d41.526423!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12a4957449e543b3%3A0xaf29167c9c57be09!2sReformas%20IriSmile!5e0!3m2!1ses!2ses!4v1700000000000!5m2!1ses!2ses"
                width="100%"
                height="400"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="rounded-lg"
                title="Ubicación de Reformix Barcelona en Sabadell"
              ></iframe>
            </div>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <MapPinIcon className="w-6 h-6 text-white flex-shrink-0 mt-1" />
                <a 
                  href="https://maps.app.goo.gl/2TjHRrrd7Bw7eSdPA"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white/90 hover:text-white"
                >
                  Carrer de Concepción Arenal, 100, 08204 Sabadell, Barcelona
                </a>
              </div>
              <div className="flex items-start gap-3">
                <svg className="w-6 h-6 text-white flex-shrink-0 mt-1" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                </svg>
                <a href="https://wa.me/34642029572" target="_blank" rel="noopener noreferrer" className="text-white/90 hover:text-white">
                  +34 642 029 572
                </a>
              </div>
              <div className="flex items-start gap-3">
                <PhoneIcon className="w-6 h-6 text-white flex-shrink-0 mt-1" />
                <a href="tel:+34642029572" className="text-white/90 hover:text-white">
                  +34 642 029 572
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

