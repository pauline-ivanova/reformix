import Image from 'next/image';

interface AboutSectionProps {
  logoPath: string;
  text: string;
}

export default function AboutSection({ logoPath, text }: AboutSectionProps) {
  return (
    <section className="relative py-20 bg-brand-primary text-white overflow-hidden z-10">
      {/* Top Divider - White Triangle filling Top-Right */}
      <div className="absolute top-0 left-0 w-full overflow-hidden leading-[0] z-10">
        <svg 
          data-name="Layer 1" 
          xmlns="http://www.w3.org/2000/svg" 
          viewBox="0 0 1200 120" 
          preserveAspectRatio="none" 
          className="relative block w-[calc(100%+1.3px)] h-[60px]"
        >
          <path d="M0,0 L1200,0 L1200,120 Z" fill="#ffffff" />
        </svg>
      </div>

      <div className="container mx-auto px-4 max-w-4xl relative z-20">
        <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12">
          {/* Logo on the left */}
          <div className="flex-shrink-0 flex justify-center md:justify-start">
            <Image
              src={logoPath}
              alt="Reformix Barcelona"
              width={200}
              height={300}
              className="object-contain max-h-[300px]"
              priority
            />
          </div>
          
          {/* Text on the right */}
          <div className="flex-1 text-center md:text-left flex items-center">
            <p className="text-lg md:text-xl leading-[1.8] text-white font-medium">
              {text}
            </p>
          </div>
        </div>
      </div>

      {/* Bottom Divider - White Triangle filling Bottom-Left */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-[0] z-10">
        <svg 
          data-name="Layer 1" 
          xmlns="http://www.w3.org/2000/svg" 
          viewBox="0 0 1200 120" 
          preserveAspectRatio="none" 
          className="relative block w-[calc(100%+1.3px)] h-[60px]"
        >
          <path d="M0,0 L0,120 L1200,120 Z" fill="#ffffff" />
        </svg>
      </div>
    </section>
  );
}
