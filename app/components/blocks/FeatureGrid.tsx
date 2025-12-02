import { ReactNode } from 'react';

interface Feature {
  title: string;
  description: string;
  icon?: ReactNode;
}

interface FeatureGridProps {
  title?: string;
  subtitle?: string;
  features: Feature[];
  columns?: 2 | 3 | 4;
}

export default function FeatureGrid({
  title,
  subtitle,
  features,
  columns = 4,
}: FeatureGridProps) {
  const gridCols = {
    2: 'md:grid-cols-2',
    3: 'md:grid-cols-3',
    4: 'md:grid-cols-2 lg:grid-cols-4',
  };

  return (
    <section className="relative py-16 bg-white overflow-hidden">
      <div className="container mx-auto px-4 max-w-7xl">
        {title && (
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 text-brand-text-heading">
            {title}
          </h2>
        )}
        {subtitle && (
          <p className="text-lg text-center text-brand-text-body mb-12 max-w-3xl mx-auto">
            {subtitle}
          </p>
        )}
        <div className={`grid grid-cols-1 ${gridCols[columns]} gap-8`}>
          {features.map((feature, index) => (
            <div
              key={index}
              className="text-center p-6 rounded-lg hover:shadow-md transition-shadow"
            >
              {feature.icon && (
                <div className="mb-6 flex justify-center">
                  {feature.icon}
                </div>
              )}
              {title ? (
                <h3 className="text-xl font-semibold mb-3 text-brand-text-heading">
                  {feature.title}
                </h3>
              ) : (
                <h2 className="text-xl font-semibold mb-3 text-brand-text-heading">
                  {feature.title}
                </h2>
              )}
              <p className="text-brand-text-body leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

