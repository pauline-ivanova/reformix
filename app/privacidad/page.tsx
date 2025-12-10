import { Metadata } from 'next';
import { generateStandardMetadata } from '@/lib/metadata-utils';
import { ShieldCheckIcon, InformationCircleIcon, LockClosedIcon, EnvelopeIcon } from '@heroicons/react/24/outline';

const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://reformix.barcelona';
const pageUrl = `${baseUrl}/privacidad`;

export const metadata: Metadata = {
  title: 'Política de Privacidad | Reformix Barcelona',
  description: 'Política de privacidad y protección de datos de Reformix Barcelona. Información sobre cómo recopilamos, usamos y protegemos tus datos personales.',
  ...generateStandardMetadata({
    title: 'Política de Privacidad | Reformix Barcelona',
    description: 'Política de privacidad y protección de datos de Reformix Barcelona. Información sobre cómo recopilamos, usamos y protegemos tus datos personales.',
    url: pageUrl,
    pagePath: '/privacidad',
    robots: { index: true, follow: true },
  }),
};

export default function PrivacyPolicyPage() {
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
          Política de Privacidad
        </h1>
        <p className="text-brand-text-body">
          Última actualización: {lastUpdated}
        </p>
      </div>

      <div className="prose prose-lg max-w-none">
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4 text-brand-text-heading flex items-center gap-2">
            <ShieldCheckIcon className="w-6 h-6 text-brand-accent" />
            Información General
          </h2>
          <p>
            Nos comprometemos a proteger tu privacidad y tus datos personales. 
            Esta Política de Privacidad explica cómo recopilamos, usamos, almacenamos y protegemos 
            tu información personal cuando utilizas nuestro sitio web y nuestros servicios.
          </p>
          <p>
            Al utilizar nuestro sitio web, aceptas las prácticas descritas en esta política. 
            Si no estás de acuerdo con alguna parte de esta política, te recomendamos que no utilices nuestro sitio web.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4 text-brand-text-heading flex items-center gap-2">
            <InformationCircleIcon className="w-6 h-6 text-brand-accent" />
            Datos que Recopilamos
          </h2>
          <h3 className="text-xl font-semibold mb-3 text-brand-text-heading">Información que nos proporcionas directamente:</h3>
          <ul>
            <li><strong>Datos de contacto:</strong> Nombre, dirección de correo electrónico, número de teléfono</li>
            <li><strong>Información del proyecto:</strong> Detalles sobre tu proyecto de reforma cuando solicitas un presupuesto</li>
            <li><strong>Comunicaciones:</strong> Mensajes que nos envías a través de formularios de contacto</li>
          </ul>

          <h3 className="text-xl font-semibold mb-3 text-brand-text-heading mt-6">Información recopilada automáticamente:</h3>
          <ul>
            <li><strong>Datos de navegación:</strong> Dirección IP, tipo de navegador, páginas visitadas, tiempo de permanencia</li>
            <li><strong>Cookies:</strong> Utilizamos cookies para mejorar tu experiencia. Consulta nuestra Política de Cookies para más información</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4 text-brand-text-heading flex items-center gap-2">
            <LockClosedIcon className="w-6 h-6 text-brand-accent" />
            Cómo Utilizamos tus Datos
          </h2>
          <p>Utilizamos la información recopilada para:</p>
          <ul>
            <li>Responder a tus consultas y solicitudes de presupuesto</li>
            <li>Proporcionar nuestros servicios de reformas</li>
            <li>Mejorar nuestro sitio web y la experiencia del usuario</li>
            <li>Enviar comunicaciones relacionadas con nuestros servicios (solo si has dado tu consentimiento)</li>
            <li>Cumplir con obligaciones legales y regulatorias</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4 text-brand-text-heading">Base Legal para el Procesamiento</h2>
          <p>
            Procesamos tus datos personales en base a:
          </p>
          <ul>
            <li><strong>Consentimiento:</strong> Cuando nos has dado tu consentimiento explícito (art. 6.1.a RGPD)</li>
            <li><strong>Ejecución de contrato:</strong> Para cumplir con nuestras obligaciones contractuales (art. 6.1.b RGPD)</li>
            <li><strong>Interés legítimo:</strong> Para mejorar nuestros servicios y comunicarnos contigo (art. 6.1.f RGPD)</li>
            <li><strong>Obligación legal:</strong> Para cumplir con requisitos legales aplicables (art. 6.1.c RGPD)</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4 text-brand-text-heading">Responsable del Tratamiento</h2>
          <p>
            El responsable del tratamiento de tus datos personales es:
          </p>
          <ul>
            <li><strong>Titular:</strong> Irina Smirniakova</li>
            <li><strong>NIF/NIE:</strong> Y6639851H</li>
            <li><strong>Forma jurídica:</strong> Autónoma (Empresario Individual)</li>
            <li><strong>Marca comercial:</strong> Reformix Barcelona</li>
            <li><strong>Dirección:</strong> Carrer de Concepción Arenal, 100, 08204 Sabadell, Barcelona, España</li>
            <li><strong>Email de contacto:</strong> <a href="mailto:info@reformix.barcelona" className="text-brand-accent hover:underline">info@reformix.barcelona</a></li>
          </ul>
          <p className="mt-4">
            Para cualquier consulta relacionada con el tratamiento de tus datos personales, puedes contactarnos en la dirección de correo electrónico indicada.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4 text-brand-text-heading">Compartición de Datos</h2>
          <p>
            No vendemos ni alquilamos tus datos personales a terceros. Podemos compartir información con:
          </p>
          <ul>
            <li><strong>Proveedores de servicios:</strong> Proveedores que nos ayudan a operar nuestro negocio (hosting, email, etc.)</li>
            <li><strong>Autoridades legales:</strong> Cuando sea requerido por ley o para proteger nuestros derechos</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4 text-brand-text-heading">Retención de Datos</h2>
          <p>
            Conservamos tus datos personales solo durante el tiempo necesario para cumplir con los propósitos 
            para los que fueron recopilados, o según lo requiera la ley aplicable.
          </p>
          <ul>
            <li><strong>Datos de contacto de formularios:</strong> Se conservarán durante el tiempo necesario para atender tu solicitud y, posteriormente, durante los plazos legalmente establecidos (generalmente 3-6 años según obligaciones fiscales y comerciales)</li>
            <li><strong>Datos para comunicaciones comerciales:</strong> Se conservarán hasta que retires tu consentimiento</li>
            <li><strong>Datos contractuales:</strong> Se conservarán durante la vigencia del contrato y posteriormente durante los plazos establecidos por la legislación aplicable</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4 text-brand-text-heading">Tus Derechos</h2>
          <p>
            De acuerdo con el Reglamento General de Protección de Datos (RGPD), tienes derecho a:
          </p>
          <ul>
            <li><strong>Acceso:</strong> Solicitar una copia de tus datos personales</li>
            <li><strong>Rectificación:</strong> Corregir datos inexactos o incompletos</li>
            <li><strong>Supresión:</strong> Solicitar la eliminación de tus datos</li>
            <li><strong>Oposición:</strong> Oponerte al procesamiento de tus datos</li>
            <li><strong>Portabilidad:</strong> Recibir tus datos en un formato estructurado</li>
            <li><strong>Limitación:</strong> Solicitar la limitación del procesamiento</li>
          </ul>
          <p className="mt-4">
            Para ejercer estos derechos, puedes contactarnos en:{' '}
            <a href="mailto:info@reformix.barcelona" className="text-brand-accent hover:underline">
              info@reformix.barcelona
            </a>
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4 text-brand-text-heading">Seguridad</h2>
          <p>
            Implementamos medidas de seguridad técnicas y organizativas apropiadas para proteger tus datos 
            personales contra acceso no autorizado, pérdida o destrucción.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4 text-brand-text-heading">Cambios a esta Política</h2>
          <p>
            Podemos actualizar esta Política de Privacidad ocasionalmente. Te notificaremos cualquier cambio 
            significativo publicando la nueva política en esta página y actualizando la fecha de "Última actualización".
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4 text-brand-text-heading flex items-center gap-2">
            <EnvelopeIcon className="w-6 h-6 text-brand-accent" />
            Contacto
          </h2>
          <p>
            Si tienes preguntas sobre esta Política de Privacidad o sobre cómo manejamos tus datos personales, 
            puedes contactarnos:
          </p>
          <ul>
            <li><strong>Email:</strong> <a href="mailto:info@reformix.barcelona" className="text-brand-accent hover:underline">info@reformix.barcelona</a></li>
            <li><strong>Dirección:</strong> Carrer de Concepción Arenal, 100, 08204 Sabadell, Barcelona, España</li>
            <li><strong>Titular:</strong> Irina Smirniakova (NIE: Y6639851H)</li>
          </ul>
        </section>
      </div>
    </div>
  );
}

