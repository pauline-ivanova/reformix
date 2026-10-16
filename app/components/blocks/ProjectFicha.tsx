import type { ProjectFicha } from '@/lib/proyectos-data';

const labels: Array<{ key: keyof ProjectFicha; label: string }> = [
  { key: 'tipo', label: 'Inmueble' },
  { key: 'zona', label: 'Zona' },
  { key: 'trabajos', label: 'Trabajos' },
  { key: 'sistema', label: 'Sistema' },
  { key: 'remates', label: 'Remates' },
  { key: 'superficie', label: 'Superficie' },
  { key: 'plazo', label: 'Plazo' },
  { key: 'year', label: 'Año' },
];

function gridClass(count: number): string {
  if (count <= 2) return 'grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6';
  if (count === 3) return 'grid grid-cols-1 sm:grid-cols-3 gap-4 md:gap-6';
  if (count === 4) return 'grid grid-cols-2 lg:grid-cols-4 gap-3 md:gap-4';
  // 5+ → rows of 3; incomplete last row stays visually even via equal columns
  return 'grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6';
}

export default function ProjectFicha({ ficha }: { ficha: ProjectFicha }) {
  const rows = labels.filter((row) => Boolean(ficha[row.key]));

  return (
    <section className="py-10 md:py-12 bg-gray-50 border-y border-gray-100">
      <div className="container mx-auto px-4 max-w-6xl">
        <h2 className="text-xl md:text-2xl font-bold text-brand-text-heading mb-6">
          Ficha del proyecto
        </h2>
        <dl className={gridClass(rows.length)}>
          {rows.map(({ key, label }) => (
            <div
              key={key}
              className="bg-white rounded-xl px-4 py-4 md:px-5 border border-gray-100 min-w-0"
            >
              <dt className="text-xs uppercase tracking-wide text-brand-text-body/70 mb-1">
                {label}
              </dt>
              <dd className="text-sm md:text-base font-medium text-brand-text-heading leading-snug">
                {ficha[key]}
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
