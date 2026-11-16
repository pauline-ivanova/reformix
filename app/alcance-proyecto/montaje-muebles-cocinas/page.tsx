import AlcanceMontajeForm from '@/app/components/forms/AlcanceMontajeForm';
import { Metadata } from 'next';
import { generateStandardMetadata } from '@/lib/metadata-utils';

const pageUrl =
  'https://www.reformix.barcelona/alcance-proyecto/montaje-muebles-cocinas';
const pageTitle =
  'Alcance proyecto · Montaje muebles y cocinas | Reformix';
const pageDescription =
  'Cuestionario para definir el alcance del montaje de muebles y cocinas y preparar un presupuesto cerrado en Barcelona.';

export const metadata: Metadata = {
  title: pageTitle,
  ...generateStandardMetadata({
    title: pageTitle,
    description: pageDescription,
    url: pageUrl,
    pagePath: '/alcance-proyecto/montaje-muebles-cocinas',
    image: '/images/og-alcance-montaje-muebles-cocinas.jpg',
    robots: { index: false, follow: false },
    keywords: [
      'alcance proyecto montaje',
      'presupuesto montaje cocinas Barcelona',
      'montaje muebles y cocinas',
      'cuestionario montaje Reformix',
    ],
  }),
  // Cuestionario privado para compartir por WhatsApp/email: noindex + sin cache
  robots: { index: false, follow: false, nocache: true },
};

export default function AlcanceMontajePage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-stone-100 via-white to-stone-50">
      <div className="mx-auto max-w-2xl px-4 py-10 sm:py-14">
        <header className="mb-8 space-y-3">
          <p className="text-sm font-medium uppercase tracking-wide text-brand-accent">
            Reformix Barcelona
          </p>
          <h1 className="text-3xl sm:text-4xl font-semibold text-brand-text-heading">
            Alcance del proyecto · Montaje
          </h1>
          <p className="text-brand-text-body text-base sm:text-lg">
            Responde estas preguntas para que podamos preparar un presupuesto
            cerrado de montaje de muebles y cocinas. Te llevará unos minutos.
          </p>
        </header>
        <div className="rounded-xl border border-stone-200 bg-white p-5 sm:p-8 shadow-sm">
          <AlcanceMontajeForm />
        </div>
      </div>
    </main>
  );
}
