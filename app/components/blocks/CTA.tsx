import Link from 'next/link';

interface CTAProps {
  title: string | React.ReactNode;
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
    <section className="relative py-12 md:py-16 bg-white">
      {isPrimary && (
        <div className="absolute bottom-0 left-0 right-0 h-1/2 bg-brand-primary"></div>
      )}
      <div className="container mx-auto px-4 max-w-5xl relative z-10">
        <div className="bg-white rounded-2xl shadow-[0_20px_50px_-12px_rgba(0,0,0,0.25)] border border-gray-200 p-8 md:p-12">
          <div className="text-center mb-8">
            <h2 className={`text-2xl md:text-3xl font-bold mb-3 ${isPrimary ? 'text-brand-text-heading' : 'text-brand-text-heading'}`}>
              {title}
            </h2>
            {description && (
              <p className={`text-base md:text-lg text-brand-text-body max-w-2xl mx-auto`}>
                {description}
              </p>
            )}
          </div>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-6">
            <Link
              href={buttonHref}
              className="w-full sm:w-auto bg-brand-primary text-white px-8 py-3 rounded-lg font-semibold hover:opacity-90 transition-opacity text-center"
            >
              {buttonText}
            </Link>
          </div>
          
          {features && features.length > 0 && (
            <div className="flex flex-wrap justify-center gap-x-6 gap-y-2 text-sm text-brand-text-body">
              {features.map((feature, index) => (
                <div key={index} className="flex items-center gap-2">
                  <svg className="w-4 h-4 text-brand-primary flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span>{feature}</span>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

