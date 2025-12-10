import { Metadata } from 'next';
import { generateStandardMetadata } from '@/lib/metadata-utils';
import { DocumentTextIcon, ScaleIcon, BuildingOfficeIcon } from '@heroicons/react/24/outline';

const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://reformix.barcelona';
const pageUrl = `${baseUrl}/aviso-legal`;

export const metadata: Metadata = {
  title: 'Aviso Legal | Reformix Barcelona',
  description: 'Aviso legal de Reformix Barcelona. Información sobre la empresa, condiciones de uso del sitio web y responsabilidades.',
  ...generateStandardMetadata({
    title: 'Aviso Legal | Reformix Barcelona',
    description: 'Aviso legal de Reformix Barcelona. Información sobre la empresa, condiciones de uso del sitio web y responsabilidades.',
    url: pageUrl,
    pagePath: '/aviso-legal',
    robots: { index: true, follow: true },
  }),
};

export default function LegalNoticePage() {
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
          Aviso Legal
        </h1>
        <p className="text-brand-text-body">
          Última actualización: {lastUpdated}
        </p>
      </div>

      <div className="prose prose-lg max-w-none">
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4 text-brand-text-heading flex items-center gap-2">
            <BuildingOfficeIcon className="w-6 h-6 text-brand-accent" />
            Datos Identificativos
          </h2>
          <p>
            En cumplimiento del artículo 10 de la Ley 34/2002, de 11 de julio, de Servicios de la Sociedad 
            de la Información y de Comercio Electrónico, se informa de los siguientes datos:
          </p>
          <ul>
            <li><strong>Titular:</strong> Irina Smirniakova</li>
            <li><strong>NIF/NIE:</strong> Y6639851H</li>
            <li><strong>Forma jurídica:</strong> Autónoma (Empresario Individual)</li>
            <li><strong>Marca comercial:</strong> Reformix Barcelona</li>
            <li><strong>Actividad:</strong> Reformas y rehabilitación</li>
            <li><strong>Domicilio:</strong> Carrer de Concepción Arenal, 100, 08204 Sabadell, Barcelona, España</li>
            <li><strong>Email:</strong> <a href="mailto:info@reformix.barcelona" className="text-brand-accent hover:underline">info@reformix.barcelona</a></li>
            <li><strong>Sitio web:</strong> <a href={baseUrl} className="text-brand-accent hover:underline">{baseUrl}</a></li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4 text-brand-text-heading flex items-center gap-2">
            <DocumentTextIcon className="w-6 h-6 text-brand-accent" />
            Objeto y Condiciones Generales de Uso
          </h2>
          <p>
            El presente aviso legal regula el uso del sitio web <strong>{baseUrl}</strong> (en adelante, el sitio web), 
            del que es titular Irina Smirniakova, empresario individual que opera bajo la marca comercial Reformix Barcelona.
          </p>
          <p>
            La navegación por el sitio web atribuye la condición de usuario del mismo 
            e implica la aceptación plena y sin reservas de todas y cada una de las disposiciones incluidas en este Aviso Legal.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4 text-brand-text-heading">Condiciones de Acceso y Uso</h2>
          <p>El usuario se compromete a hacer un uso adecuado y lícito del sitio web y de los contenidos, de conformidad con:</p>
          <ul>
            <li>La legislación aplicable</li>
            <li>El presente Aviso Legal</li>
            <li>Las buenas costumbres y el orden público</li>
            <li>Los derechos de terceros</li>
          </ul>
          <p>
            Queda prohibido el uso del sitio web con fines ilícitos o no autorizados, o de forma que pueda 
            dañar, inutilizar, sobrecargar o deteriorar el sitio web o impedir la normal utilización o disfrute 
            del mismo por parte de los usuarios.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4 text-brand-text-heading">Propiedad Intelectual e Industrial</h2>
          <p>
            Todos los contenidos del sitio web, incluyendo textos, gráficos, logotipos, iconos, imágenes, 
            así como el diseño general del sitio, son propiedad de Reformix Barcelona o de sus proveedores 
            de contenido y están protegidos por las leyes españolas e internacionales de propiedad intelectual e industrial.
          </p>
          <p>
            Queda expresamente prohibida la reproducción, distribución, comunicación pública y transformación 
            de los contenidos de este sitio web, salvo para uso personal y no comercial.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4 text-brand-text-heading">Exclusión de Garantías y Responsabilidad</h2>
          <p>
            Reformix Barcelona no se hace responsable de la veracidad, exactitud o actualización de las 
            informaciones no elaboradas por la misma o de las que se hayan indicado otras fuentes, 
            por lo que tampoco se responsabiliza de los daños y perjuicios que puedan derivarse del uso de dicha información.
          </p>
          <p>
            Reformix Barcelona se reserva el derecho de modificar, suspender, cancelar o restringir el contenido 
            del sitio web, los vínculos o la información obtenida a través del mismo, sin necesidad de previo aviso.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4 text-brand-text-heading">Enlaces a Terceros</h2>
          <p>
            El sitio web puede contener enlaces a sitios web de terceros. Reformix Barcelona no ejerce ningún 
            control sobre dichos sitios y no se responsabiliza de sus contenidos ni de las condiciones de acceso a los mismos.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4 text-brand-text-heading flex items-center gap-2">
            <ScaleIcon className="w-6 h-6 text-brand-accent" />
            Legislación Aplicable y Jurisdicción
          </h2>
          <p>
            Para la resolución de todas las controversias o cuestiones relacionadas con el presente sitio web 
            o de las actividades en él desarrolladas, será de aplicación la legislación española, a la que se 
            someten expresamente las partes, siendo competentes para la resolución de todos los conflictos derivados 
            o relacionados con su uso los Juzgados y Tribunales de Barcelona.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4 text-brand-text-heading">Modificaciones</h2>
          <p>
            Reformix Barcelona se reserva el derecho de realizar sin previo aviso las modificaciones que considere 
            oportunas en su portal, pudiendo cambiar, suprimir o añadir tanto los contenidos y servicios que se presten 
            a través de la misma como la forma en la que éstos aparezcan presentados o localizados en su portal.
          </p>
        </section>
      </div>
    </div>
  );
}

