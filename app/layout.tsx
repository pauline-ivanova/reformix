import { Inter } from "next/font/google";
import "./globals.css";
import { Metadata } from "next";
import { generateStandardMetadata } from "@/lib/metadata-utils";
import Header from "@/app/components/layout/Header";
import Footer from "@/app/components/layout/Footer";
import JsonLd, { generateOrganizationSchema, generateWebSiteSchema, generateLocalBusinessSchema } from "@/app/components/common/JsonLd";
import CookieConsent from "@/app/components/common/CookieConsent";
import ScrollToTop from "@/app/components/common/ScrollToTop";

const inter = Inter({ 
  subsets: ["latin"],
  display: 'swap',
  preload: true,
});

const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://reformix.barcelona';

const standardMetadata = generateStandardMetadata({
  title: "Reformix Barcelona | Empresa de Reformas en Barcelona y Vallès Occidental",
  description: "Empresa de reformas en Barcelona y Vallès Occidental. Reformas integrales y por estancia con presupuestos cerrados y garantía por escrito. Pide tu presupuesto sin compromiso.",
  url: baseUrl,
  pagePath: '/',
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
  });

  const webSiteSchema = generateWebSiteSchema({
    name: 'Reformix Barcelona',
    url: baseUrl,
    description: 'Empresa de reformas en Barcelona y Vallès Occidental.',
  });

  const localBusinessSchema = generateLocalBusinessSchema({
    name: 'Reformix Barcelona',
    url: baseUrl,
    description: 'Empresa de reformas en Barcelona y Vallès Occidental con más de 10 años de experiencia.',
    priceRange: '$$',
  });

  return (
    <html lang="es-ES">
      <body className={inter.className}>
        <JsonLd data={[organizationSchema, webSiteSchema, localBusinessSchema]} />
        <Header />
        <main className="min-h-screen bg-white pt-20">
          {children}
        </main>
        <Footer />
        <CookieConsent />
        <ScrollToTop />
      </body>
    </html>
  );
}

