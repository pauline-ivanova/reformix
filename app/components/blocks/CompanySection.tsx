'use client';

import Image from 'next/image';
import { useEffect, useState } from 'react';

export default function CompanySection() {
  const [offset, setOffset] = useState(1000); // Initial offset (off-screen or far right)

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const windowWidth = window.innerWidth;
      const windowHeight = window.innerHeight;
      
      // Get the section element to calculate its position
      const section = document.querySelector('[data-company-section]') as HTMLElement;
      if (!section) {
        setOffset(windowWidth / 1.5);
        return;
      }
      
      const sectionTop = section.offsetTop;
      const sectionHeight = section.offsetHeight;
      
      // Calculate when section enters viewport
      const viewportTop = scrollY;
      const viewportBottom = scrollY + windowHeight;
      const sectionBottom = sectionTop + sectionHeight;
      
      // Animation triggers when section is in viewport
      const startOffset = windowWidth / 1.5;
      
      // Start animation when section top enters viewport
      // End animation when section is halfway through viewport
      const animationStart = sectionTop - windowHeight;
      const animationEnd = sectionTop + sectionHeight / 3;
      const scrollRange = animationEnd - animationStart;
      
      if (scrollY < animationStart) {
        // Before animation starts
        setOffset(startOffset);
      } else if (scrollY > animationEnd) {
        // After animation ends
        setOffset(0);
      } else {
        // During animation
        const progress = (scrollY - animationStart) / scrollRange;
        const clampedProgress = Math.max(0, Math.min(1, progress));
        const currentOffset = startOffset * (1 - clampedProgress);
        setOffset(currentOffset);
      }
    };

    // Initial calculation
    handleScroll();

    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('resize', handleScroll);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleScroll);
    };
  }, []);

  return (
    <section 
      data-company-section
      className="relative py-20 bg-brand-primary text-white overflow-hidden z-10"
    >
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

      <div className="container mx-auto px-4 max-w-7xl relative z-20">
        <div className="grid grid-cols-1 gap-8 lg:gap-12 items-center">
          {/* Animated Image */}
          <div className="relative flex justify-center items-center min-h-[250px] lg:min-h-[400px]">
            <div 
              className="absolute w-full max-w-[1000px] pointer-events-none transition-transform duration-75 ease-out"
              style={{
                transform: `translateX(calc(${offset}px))`,
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

