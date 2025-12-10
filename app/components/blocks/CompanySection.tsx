'use client';

import Image from 'next/image';
import { useEffect, useState, useRef } from 'react';

export default function CompanySection() {
  const [offset, setOffset] = useState(1000); // Initial offset (off-screen or far right)
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    // Use Intersection Observer to only start animation when section is visible
    // This reduces initial JavaScript execution and TBT
    if (!sectionRef.current) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
          }
        });
      },
      { threshold: 0.1, rootMargin: '100px' }
    );

    observer.observe(sectionRef.current);

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  useEffect(() => {
    // Only set up scroll listener when section is visible
    if (!isVisible) return;

    let ticking = false;
    let rafId: number | null = null;
    
    const handleScroll = () => {
      if (!ticking) {
        rafId = window.requestAnimationFrame(() => {
          const scrollY = window.scrollY;
          const windowWidth = window.innerWidth;
          const windowHeight = window.innerHeight;
          
          const section = sectionRef.current;
          if (!section) {
            ticking = false;
            return;
          }
          
          const sectionTop = section.offsetTop;
          const sectionHeight = section.offsetHeight;
          
          // Animation triggers when section is in viewport
          const startOffset = windowWidth / 1.5;
          const animationStart = sectionTop - windowHeight;
          const animationEnd = sectionTop + sectionHeight / 3;
          const scrollRange = animationEnd - animationStart;
          
          if (scrollY < animationStart) {
            setOffset(startOffset);
          } else if (scrollY > animationEnd) {
            setOffset(0);
          } else {
            const progress = (scrollY - animationStart) / scrollRange;
            const clampedProgress = Math.max(0, Math.min(1, progress));
            const currentOffset = startOffset * (1 - clampedProgress);
            setOffset(currentOffset);
          }
          ticking = false;
        });
        ticking = true;
      }
    };

    // Initial calculation - defer with setTimeout to not block initial render
    setTimeout(() => {
      handleScroll();
    }, 0);

    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('resize', handleScroll, { passive: true });
    
    return () => {
      if (rafId !== null) {
        window.cancelAnimationFrame(rafId);
      }
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleScroll);
    };
  }, [isVisible]);

  return (
    <section 
      ref={sectionRef}
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
                loading="lazy"
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

