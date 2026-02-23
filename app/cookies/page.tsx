import { Metadata } from 'next';
import { generateStandardMetadata } from '@/lib/metadata-utils';
import { InformationCircleIcon } from '@heroicons/react/24/outline';

const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://www.reformix.barcelona';
const pageUrl = `${baseUrl}/cookies`;

export const metadata: Metadata = {
  title: 'Política de Cookies | Reformix Barcelona',
  description: 'Política de cookies de Reformix Barcelona. Información sobre el uso de cookies en nuestro sitio web.',
  ...generateStandardMetadata({
    title: 'Política de Cookies | Reformix Barcelona',
    description: 'Política de cookies de Reformix Barcelona. Información sobre el uso de cookies en nuestro sitio web.',
    url: pageUrl,
    pagePath: '/cookies',
    robots: { index: true, follow: true },
  }),
};

export default function CookiesPolicyPage() {
  const currentDate = new Date();
  const lastUpdated = currentDate.toLocaleDateString('es-ES', { 
    year: 'numeric', 
    month: 'long', 
    day: 'numeric' 
  });

  return (
    <div className="container mx-auto px-4 py-16 max-w-4xl">
      <div className="mb-8">
        <h1 className="text-4xl md:text-5xl font-bold mb-4 text-brand-text-heading">
          Política de Cookies
        </h1>
        <p className="text-brand-text-body">
          Última actualización: {lastUpdated}
        </p>
      </div>

      <div className="prose prose-lg max-w-none">
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4 text-brand-text-heading flex items-center gap-2">
            <InformationCircleIcon className="w-6 h-6 text-brand-accent" />
            ¿Qué son las Cookies?
          </h2>
          <p>
            Las cookies son pequeños archivos de texto que se almacenan en tu dispositivo (ordenador, tablet o móvil) 
            cuando visitas un sitio web. Las cookies permiten que el sitio web recuerde tus acciones y preferencias 
            durante un período de tiempo, por lo que no tienes que volver a configurarlas cada vez que regresas al sitio.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4 text-brand-text-heading flex items-center gap-2">
            <InformationCircleIcon className="w-6 h-6 text-brand-accent" />
            Tipos de Cookies que Utilizamos
          </h2>
          
          <h3 className="text-xl font-semibold mb-3 text-brand-text-heading">Cookies Técnicas (Necesarias)</h3>
          <p>
            Estas cookies son esenciales para que el sitio web funcione correctamente. Permiten la navegación 
            y el uso de las funciones básicas del sitio.
          </p>
          <ul>
            <li><strong>Cookies de sesión:</strong> Mantienen la sesión del usuario activa</li>
            <li><strong>Cookies de seguridad:</strong> Detectan intentos de acceso no autorizado</li>
          </ul>

          <h3 className="text-xl font-semibold mb-3 text-brand-text-heading mt-6">Cookies de Análisis</h3>
          <p>
            Estas cookies nos ayudan a entender cómo los visitantes interactúan con nuestro sitio web, 
            proporcionándonos información sobre las áreas visitadas, el tiempo de permanencia, etc. 
            Esta información nos ayuda a mejorar el funcionamiento del sitio web.
          </p>

          <h3 className="text-xl font-semibold mb-3 text-brand-text-heading mt-6">Cookies de Preferencias</h3>
          <p>
            Estas cookies permiten que el sitio web recuerde información que cambia la forma en que el sitio 
            se comporta o se ve, como tu idioma preferido o la región en la que te encuentras.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4 text-brand-text-heading">Cookies de Terceros</h2>
          <p>
            Algunas cookies son colocadas por servicios de terceros que aparecen en nuestras páginas. 
            No controlamos el establecimiento de estas cookies, por lo que te recomendamos que consultes 
            los sitios web de terceros para obtener más información sobre sus cookies y cómo gestionarlas.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4 text-brand-text-heading">Gestión de Cookies</h2>
          <p>
            Puedes controlar y/o eliminar las cookies como desees. Puedes eliminar todas las cookies que 
            ya están en tu ordenador y puedes configurar la mayoría de los navegadores para impedir que se coloquen.
          </p>
          <p>
            Sin embargo, si haces esto, es posible que tengas que ajustar manualmente algunas preferencias cada vez 
            que visites un sitio y que algunos servicios y funcionalidades no funcionen.
          </p>
          <p className="mt-4">
            <strong>Instrucciones para los navegadores más comunes:</strong>
          </p>
          <ul>
            <li><strong>Chrome:</strong> Configuración → Privacidad y seguridad → Cookies y otros datos de sitios</li>
            <li><strong>Firefox:</strong> Opciones → Privacidad y seguridad → Cookies y datos del sitio</li>
            <li><strong>Safari:</strong> Preferencias → Privacidad → Cookies y datos de sitios web</li>
            <li><strong>Edge:</strong> Configuración → Cookies y permisos del sitio → Cookies y datos del sitio</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4 text-brand-text-heading">Consentimiento</h2>
          <p>
            Al continuar navegando por nuestro sitio web después de haber sido informado sobre el uso de cookies, 
            entendemos que aceptas el uso de cookies de acuerdo con esta política.
          </p>
          <p>
            Puedes retirar tu consentimiento en cualquier momento eliminando las cookies de tu navegador o 
            contactándonos a través de <a href="mailto:reformix.barcelona@gmail.com" className="text-brand-accent hover:underline">reformix.barcelona@gmail.com</a>.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4 text-brand-text-heading">Actualizaciones de esta Política</h2>
          <p>
            Podemos actualizar esta Política de Cookies ocasionalmente para reflejar cambios en las cookies 
            que utilizamos o por otras razones operativas, legales o regulatorias. Te recomendamos que revises 
            esta página periódicamente para estar informado sobre nuestro uso de cookies.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4 text-brand-text-heading">Contacto</h2>
          <p>
            Si tienes preguntas sobre nuestra Política de Cookies, puedes contactarnos en:{' '}
            <a href="mailto:reformix.barcelona@gmail.com" className="text-brand-accent hover:underline">
              reformix.barcelona@gmail.com
            </a>
          </p>
        </section>
      </div>
    </div>
  );
}

