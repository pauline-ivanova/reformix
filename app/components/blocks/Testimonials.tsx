interface Testimonial {
  quote: string;
  author: string;
  location?: string;
}

interface TestimonialsProps {
  title?: string;
  subtitle?: string;
  testimonials: Testimonial[];
}

export default function Testimonials({
  title = 'Opiniones de Nuestros Clientes',
  subtitle,
  testimonials,
}: TestimonialsProps) {
  return (
    <section className="py-16 bg-brand-accent-neutral">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-brand-text-heading">
            {title}
          </h2>
          {subtitle && (
            <p className="text-lg text-brand-text-body max-w-3xl mx-auto">
              {subtitle}
            </p>
          )}
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-lg shadow-md border border-brand-accent-neutral"
            >
              <div className="mb-4">
                <svg
                  className="w-8 h-8 text-brand-accent mb-2"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.996 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                </svg>
              </div>
              <p className="text-brand-text-body mb-4 leading-relaxed italic">
                "{testimonial.quote}"
              </p>
              <div className="border-t border-brand-accent-neutral pt-4">
                <p className="font-semibold text-brand-text-heading">{testimonial.author}</p>
                {testimonial.location && (
                  <p className="text-sm text-brand-text-body">{testimonial.location}</p>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

