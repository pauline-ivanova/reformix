import { Inter } from "next/font/google";
import "./globals.css";
import { Metadata, Viewport } from "next";
import { generateStandardMetadata } from "@/lib/metadata-utils";
import Header from "@/app/components/layout/Header";
import JsonLd, { generateOrganizationSchema, generateWebSiteSchema, generateLocalBusinessSchema, generateBreadcrumbSchema, generateServiceSchema, generateFAQSchema } from "@/app/components/common/JsonLd";
import GlobalActivityIndicator from "@/app/components/common/GlobalActivityIndicator";
import DeferredComponents from "@/app/components/layout/DeferredComponents";

// Dynamic imports for non-critical components - defer JS loading
import dynamic from 'next/dynamic';

const Footer = dynamic(() => import("@/app/components/layout/Footer"), {
  ssr: true, // Keep SSR for SEO
  loading: () => <footer className="bg-gray-900 text-white py-8" />, // Placeholder
});

// Optimize font loading - use optional to prevent render blocking and layout shift
// Only load regular and bold weights to reduce font file size
const inter = Inter({ 
  subsets: ["latin"],
  weight: ['400', '600', '700'], // Only load needed weights
  display: 'optional', // Prevents layout shift, better for performance
  preload: true,
  fallback: ['system-ui', 'arial'],
  adjustFontFallback: true,
  variable: '--font-inter',
});

const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://reformix.barcelona';

const standardMetadata = generateStandardMetadata({
  title: "Reformix Barcelona | Empresa de Reformas en Barcelona y Vallès Occidental",
  description: "Empresa de reformas en Barcelona y Vallès Occidental. Reformas integrales y por estancia con presupuestos cerrados y garantía por escrito. Pide tu presupuesto sin compromiso.",
  url: baseUrl,
  pagePath: '/',
  image: '/images/hero-bg.webp', // Default OG image for all pages
  keywords: [
    'reformas Barcelona',
    'reformas integrales',
    'empresa de reformas',
    'reformas Sabadell',
    'Vallès Occidental',
    'rehabilitación',
    'presupuesto cerrado',
    'garantía por escrito'
  ],
});

export const metadata: Metadata = {
  title: "Reformix Barcelona | Empresa de Reformas en Barcelona y Vallès Occidental",
  description: "Empresa de reformas en Barcelona y Vallès Occidental. Reformas integrales y por estancia con presupuestos cerrados y garantía por escrito. Pide tu presupuesto sin compromiso.",
  icons: {
    icon: '/favicon.png',
    shortcut: '/favicon.png',
    apple: '/favicon.png',
  },
  ...standardMetadata,
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const organizationSchema = generateOrganizationSchema({
    name: 'Reformix Barcelona',
    url: baseUrl,
    description: 'Empresa de reformas en Barcelona y Vallès Occidental con más de 10 años de experiencia.',
    contactPoint: {
      contactType: 'Customer Service',
      email: 'info@reformix.barcelona',
    },
    slogan: 'Reformas con confianza, resultados con garantía',
    knowsAbout: [
      'Reformas integrales',
      'Reformas por estancia',
      'Rehabilitación de viviendas',
      'Reformas comerciales',
      'Fontanería',
      'Electricidad',
      'Carpintería',
      'Aislamiento térmico',
      'Aislamiento acústico',
      'Pintura interior',
      'Pladur',
      'Albañilería',
      'Calefacción',
      'Climatización',
      'Impermeabilizaciones',
    ],
  });

  const webSiteSchema = generateWebSiteSchema({
    name: 'Reformix Barcelona',
    url: baseUrl,
    description: 'Empresa de reformas en Barcelona y Vallès Occidental.',
    potentialAction: {
      '@type': 'SearchAction',
      target: {
        '@type': 'EntryPoint',
        urlTemplate: `${baseUrl}/?s={search_term_string}`,
      },
      'query-input': 'required name=search_term_string',
    },
  });

  const localBusinessSchema = generateLocalBusinessSchema({
    name: 'Reformix Barcelona',
    url: baseUrl,
    description: 'Empresa de reformas en Barcelona y Vallès Occidental con más de 10 años de experiencia.',
    telephone: '+34 642 029 572',
    email: 'info@reformix.barcelona',
    priceRange: '€€',
    logo: '/reformix-logo.svg',
    image: '/images/hero-bg.webp',
    openingHours: 'Mo-Sa 08:00-20:00',
    streetAddress: 'Carrer de Concepción Arenal, 100',
    postalCode: '08204',
  });

  return (
    <html lang="es-ES">
      <body className={`${inter.variable} ${inter.className}`}>
        <JsonLd data={[organizationSchema, webSiteSchema, localBusinessSchema]} />
        <Header />
        <main className="min-h-screen bg-white pt-20">
          {children}
        </main>
        <Footer />
        {/* Defer non-critical components to reduce TBT */}
        <DeferredComponents />
        {/* Global work indicator so users see when scripts are running */}
        <GlobalActivityIndicator />
      </body>
    </html>
  );
}

