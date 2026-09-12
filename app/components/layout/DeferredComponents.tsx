'use client';

import { useState, useEffect } from 'react';
import dynamic from 'next/dynamic';

const CookieConsent = dynamic(() => import("@/app/components/common/CookieConsent"), {
  ssr: false,
});

const CookieTagsBootstrap = dynamic(
  () => import("@/app/components/common/CookieTagsBootstrap"),
  { ssr: false }
);

const ScrollToTop = dynamic(() => import("@/app/components/common/ScrollToTop"), {
  ssr: false,
});

export default function DeferredComponents() {
  const [shouldLoad, setShouldLoad] = useState(false);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      if ('requestIdleCallback' in window) {
        (window as unknown as { requestIdleCallback: (cb: () => void, opts?: { timeout: number }) => number }).requestIdleCallback(() => {
          setShouldLoad(true);
        }, { timeout: 2000 });
      } else {
        setTimeout(() => {
          setShouldLoad(true);
        }, 2000);
      }
    }
  }, []);

  if (!shouldLoad) return null;

  return (
    <>
      <CookieTagsBootstrap />
      <CookieConsent />
      <ScrollToTop />
    </>
  );
}
