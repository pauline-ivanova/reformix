import Link from 'next/link';

interface CTAProps {
  title: string;
  description?: string;
  buttonText: string;
  buttonHref: string;
  features?: string[];
  variant?: 'primary' | 'secondary';
}

export default function CTA({
  title,
  description,
  buttonText,
  buttonHref,
  features,
  variant = 'primary',
}: CTAProps) {
  const isPrimary = variant === 'primary';

  return (
    <section className={`py-16 ${isPrimary ? 'bg-brand-primary text-white' : 'bg-brand-accent-neutral'}`}>
      <div className="container mx-auto px-4 max-w-4xl text-center">
        <h2 className={`text-3xl md:text-4xl font-bold mb-4 ${isPrimary ? 'text-white' : 'text-brand-text-heading'}`}>
          {title}
        </h2>
        {description && (
          <p className={`text-lg mb-8 ${isPrimary ? 'text-gray-100' : 'text-brand-text-body'}`}>
            {description}
          </p>
        )}
        <Link
          href={buttonHref}
          className={`inline-block rounded-md px-8 py-4 text-lg font-semibold shadow-lg transition-colors ${
            isPrimary
              ? 'bg-brand-accent text-white hover:bg-brand-accent-hover'
              : 'bg-brand-accent text-white hover:bg-brand-accent-hover'
          }`}
        >
          {buttonText}
        </Link>
        {features && features.length > 0 && (
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            {features.map((feature, index) => (
              <div key={index} className="flex items-center gap-2">
                <svg className="w-5 h-5 text-green-400" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span className={isPrimary ? 'text-gray-200' : 'text-brand-text-body'}>
                  {feature}
                </span>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}

