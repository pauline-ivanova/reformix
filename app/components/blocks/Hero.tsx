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
}

export default function Hero({
  title,
  titleLines,
  subtitle,
  description,
  primaryCTA,
  secondaryCTA,
  backgroundImage,
}: HeroProps) {
  const [offset, setOffset] = useState(1000); // Initial offset (off-screen or far right)

  useEffect(() => {
    const handleScroll = () => {
      // Calculate offset based on scroll
      // We want the image to move from Right to Center.
      // Start: Offset > 0. End: Offset = 0.
      // Trigger over first 400px of scroll?
      const scrollY = window.scrollY;
      const windowWidth = window.innerWidth;
      
      // Start position: Start from the right side.
      // Let's say initially it's shifted by 50% of screen width
      const startOffset = windowWidth / 1.5; 
      
      // Animation duration (in scroll pixels)
      const duration = 400;
      
      // Calculate progress (0 to 1)
      const progress = Math.min(scrollY / duration, 1);
      
      // Current offset: linearly interpolate from startOffset to 0
      const currentOffset = startOffset * (1 - progress);
      
      setOffset(currentOffset);
    };

    // Initial calculation
    handleScroll();

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('resize', handleScroll);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleScroll);
    };
  }, []);

  return (
    <section 
      className="relative min-h-[800px] md:min-h-[850px] flex items-center text-white overflow-hidden"
      style={backgroundImage ? {
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.4)), url(${backgroundImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      } : {
        background: 'linear-gradient(135deg, #002e7c 0%, #1a4a9c 100%)',
      }}
    >
      {/* Animated Background Image */}
      <div 
        className="absolute bottom-12 md:bottom-8 left-1/2 w-full max-w-[1200px] pointer-events-none z-0 transition-transform duration-75 ease-out"
        style={{
          transform: `translateX(calc(-50% + ${offset}px))`,
          willChange: 'transform'
        }}
      >
        <Image
          src="/images/REFORMIX-2.png"
          alt="Reformix"
          width={1200}
          height={300}
          className="w-full h-auto opacity-90"
          priority
        />
      </div>

      <div className="container mx-auto px-4 max-w-7xl pt-20 pb-64 md:pt-32 md:pb-80 lg:pb-96 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Left Column - Title */}
          <div className="overflow-hidden">
            {/* Mobile: flexible wrapping */}
            <h1 className="lg:hidden text-4xl md:text-5xl font-bold leading-[1.2] mb-6 max-w-[90vw] md:max-w-2xl">
              {(() => {
                // Process title to keep prepositions (de, en) and conjunction (y) with following words
                const processedTitle = title.replace(/\b(de|en|y)\s+(\w+)/gi, (match, preposition, word) => {
                  return `${preposition}\u00A0${word}`;
                });
                return processedTitle;
              })()}
            </h1>
            {/* Desktop: fixed 3 lines */}
            <h1 className="hidden lg:block text-5xl xl:text-6xl font-bold leading-[1.2] mb-6 max-w-full">
              {titleLines ? (
                titleLines.map((line, index) => {
                  // Process line to keep prepositions (de, en) and conjunction (y) with following words using non-breaking spaces
                  const processedLine = line.replace(/\b(de|en|y)\s+/gi, (match, preposition) => {
                    return `${preposition}\u00A0`;
                  });
                  
                  return (
                    <span key={index} className="block overflow-wrap-anywhere">
                      {processedLine}
                    </span>
                  );
                })
              ) : (
                title
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

