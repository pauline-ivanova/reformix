'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useEffect, useState } from 'react';

interface HeroProps {
  title: string;
  titleLines?: string[]; // For multi-line title display
  subtitle?: string;
  description?: string;
  primaryCTA?: {
    text: string;
    href: string;
  };
  secondaryCTA?: {
    text: string;
    href: string;
  };
  backgroundImage?: string;
  imageAlt?: string;
  overlayOpacity?: 'default' | 'strong' | 'stronger'; // Control overlay darkness
}

export default function Hero({
  title,
  titleLines,
  subtitle,
  description,
  primaryCTA,
  secondaryCTA,
  backgroundImage,
  imageAlt,
  overlayOpacity = 'default',
}: HeroProps) {
  const [isDesktop, setIsDesktop] = useState(false);

  useEffect(() => {
    const checkDesktop = () => {
      setIsDesktop(window.innerWidth >= 1024); // lg breakpoint
    };
    
    checkDesktop();
    window.addEventListener('resize', checkDesktop);
    return () => window.removeEventListener('resize', checkDesktop);
  }, []);

  // Process title to keep prepositions (de, en) and conjunction (y) with following words
  const processTitle = (text: string) => {
    return text.replace(/\b(de|en|y)\s+(\w+)/gi, (match, preposition, word) => {
      return `${preposition}\u00A0${word}`;
    });
  };

  // Process line to keep prepositions with non-breaking spaces
  const processLine = (line: string) => {
    return line.replace(/\b(de|en|y)\s+/gi, (match, preposition) => {
      return `${preposition}\u00A0`;
    });
  };

  return (
    <section 
      className="relative min-h-[800px] md:min-h-[850px] flex items-center text-white overflow-hidden"
      style={backgroundImage ? {
        background: 'linear-gradient(135deg, #002e7c 0%, #1a4a9c 100%)',
      } : {
        background: 'linear-gradient(135deg, #002e7c 0%, #1a4a9c 100%)',
      }}
    >
      {/* Optimized background image - Next.js Image for better optimization */}
      {backgroundImage && (
        <div className="absolute inset-0 z-0">
          <Image
            src={backgroundImage}
            alt={imageAlt || title}
            fill
            priority
            fetchPriority="high"
            quality={85}
            className="object-cover"
            sizes="100vw"
            style={{
              objectPosition: 'center',
            }}
          />
          <div className={`absolute inset-0 bg-gradient-to-b z-0 ${
            overlayOpacity === 'stronger'
              ? 'from-black/75 to-black/65'
              : overlayOpacity === 'strong' 
              ? 'from-black/60 to-black/50' 
              : 'from-black/50 to-black/40'
          }`} />
        </div>
      )}
      {/* Bottom background logo */}
      <div 
        className="absolute bottom-12 md:bottom-8 left-1/2 w-full max-w-[1200px] pointer-events-none z-0 -translate-x-1/2"
      >
        <Image
          src="/images/REFORMIX-2.png"
          alt="Reformix"
          width={800}
          height={200}
          className="w-full h-auto opacity-90"
          loading="lazy"
          quality={70}
          sizes="(max-width: 800px) 100vw, 800px"
        />
      </div>

      <div className="container mx-auto px-4 max-w-7xl pt-20 pb-64 md:pt-32 md:pb-80 lg:pb-96 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Left Column - Title */}
          <div className="overflow-hidden">
            {/* Single h1 that adapts for mobile/desktop - only one version in DOM at a time */}
            <h1 className="text-4xl md:text-5xl lg:text-5xl xl:text-6xl font-bold leading-[1.2] mb-6 max-w-[90vw] md:max-w-2xl lg:max-w-full">
              {titleLines ? (
                isDesktop ? (
                  // Desktop: fixed 3 lines
                  <>
                    {titleLines.map((line, index) => (
                      <span key={index} className="block overflow-wrap-anywhere">
                        {processLine(line)}
                      </span>
                    ))}
                  </>
                ) : (
                  // Mobile: show as single line with processing
                  <>{processTitle(title)}</>
                )
              ) : (
                // No titleLines: show title (processed on mobile, as-is on desktop)
                <>{isDesktop ? title : processTitle(title)}</>
              )}
            </h1>
          </div>

          {/* Right Column - Description and CTA */}
          <div className="flex flex-col justify-center">
            {subtitle && (
              <p className="text-lg md:text-xl mb-6 text-gray-100" style={{ lineHeight: '1.8' }}>
                {subtitle}
              </p>
            )}
            {description && (
              <p className="text-base md:text-lg mb-8 text-gray-200 leading-relaxed">
                {description}
              </p>
            )}
            <div className="flex flex-col sm:flex-row gap-4">
              {primaryCTA && (
                <Link
                  href={primaryCTA.href}
                  className="inline-block rounded-md bg-brand-primary hover:opacity-90 px-8 py-4 text-base md:text-lg font-semibold text-white shadow-lg transition-colors text-center"
                >
                  {primaryCTA.text}
                </Link>
              )}
              {secondaryCTA && (
                <Link
                  href={secondaryCTA.href}
                  className="inline-block rounded-md bg-white/10 backdrop-blur-sm px-8 py-4 text-base md:text-lg font-semibold text-white border-2 border-white/30 hover:bg-white/20 transition-colors text-center"
                >
                  {secondaryCTA.text}
                </Link>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Divider */}
      <div className="absolute -bottom-[1px] left-0 w-full overflow-hidden leading-[0] z-20">
        <svg 
          data-name="Layer 1" 
          xmlns="http://www.w3.org/2000/svg" 
          viewBox="0 0 1200 120" 
          preserveAspectRatio="none" 
          className="relative block w-[calc(100%+1.3px)] h-[57px]"
        >
          <path d="M0,0 L0,120 L1200,120 Z" className="fill-white" />
        </svg>
      </div>
    </section>
  );
}

