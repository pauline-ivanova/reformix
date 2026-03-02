/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**',
      },
    ],
    unoptimized: false,
    formats: ['image/avif', 'image/webp'],
    minimumCacheTTL: 86400, // 1 day - reasonable cache time
    deviceSizes: [640, 750, 828, 1080, 1200, 1920],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
  },
  experimental: {
    optimizeCss: true, // Optimize CSS output to reduce render-blocking
    optimizePackageImports: ['@heroicons/react', '@headlessui/react', 'react-icons'],
    optimizeServerReact: true,
    // Reduce legacy JavaScript by targeting modern browsers
    esmExternals: true,
  },
  compress: true,
  compiler: {
    removeConsole: process.env.NODE_ENV === 'production' ? {
      exclude: ['error', 'warn'],
    } : false,
  },
  poweredByHeader: false,
  reactStrictMode: true,
  // Optimize production builds
  productionBrowserSourceMaps: true, // Enable source maps for better debugging
  // Target modern browsers to reduce legacy JavaScript polyfills
  // This reduces bundle size by not including unnecessary polyfills
  webpack: (config, { dev, isServer }) => {
    // Ensure JavaScript is minified in production
    if (!dev && !isServer) {
      config.optimization = {
        ...config.optimization,
        minimize: true,
        minimizer: [
          ...(config.optimization.minimizer || []),
        ],
        // Split chunks more aggressively to reduce initial bundle size and improve code splitting
        splitChunks: {
          chunks: 'all',
          maxInitialRequests: 25,
          minSize: 20000,
          cacheGroups: {
            default: false,
            vendors: false,
            // Separate vendor chunks
            framework: {
              name: 'framework',
              chunks: 'all',
              test: /(?<!node_modules.*)[\\/]node_modules[\\/](react|react-dom|scheduler|prop-types|use-subscription)[\\/]/,
              priority: 40,
              enforce: true,
            },
            // Separate webpack runtime to reduce main bundle
            webpack: {
              name: 'webpack-runtime',
              test: /[\\/]node_modules[\\/](webpack|@next)[\\/]/,
              priority: 35,
              enforce: true,
            },
            lib: {
              test(module) {
                return module.size() > 160000 && /node_modules[/\\]/.test(module.identifier());
              },
              name(module) {
                const hash = require('crypto').createHash('sha1');
                hash.update(module.identifier());
                return hash.digest('hex').substring(0, 8);
              },
              priority: 30,
              minChunks: 1,
              reuseExistingChunk: true,
            },
            commons: {
              name: 'commons',
              minChunks: 2,
              priority: 20,
            },
            shared: {
              name(module, chunks) {
                return require('crypto')
                  .createHash('sha1')
                  .update(chunks.reduce((acc, chunk) => acc + chunk.name, ''))
                  .digest('hex')
                  .substring(0, 8);
              },
              priority: 10,
              minChunks: 2,
              reuseExistingChunk: true,
            },
          },
        },
      };
    }
    return config;
  },
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          {
            key: 'X-Frame-Options',
            value: 'DENY',
          },
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff',
          },
          {
            key: 'Referrer-Policy',
            value: 'strict-origin-when-cross-origin',
          },
          {
            key: 'Content-Security-Policy',
            value:
              "default-src 'self'; script-src 'self' 'unsafe-eval' 'unsafe-inline' https://www.googletagmanager.com https://www.google-analytics.com https://challenges.cloudflare.com; style-src 'self' 'unsafe-inline' https://fonts.googleapis.com; img-src 'self' data: https: blob:; font-src 'self' https://fonts.gstatic.com; connect-src 'self' https://www.google-analytics.com https://challenges.cloudflare.com; frame-src 'self' https://challenges.cloudflare.com;",
          },
        ],
      },
    ];
  },
  async redirects() {
    return [
      // Legacy slug variants -> current slugs
      {
        source: '/reformas-de-cocinas',
        destination: '/reformas-cocinas',
        permanent: true,
      },
      {
        source: '/reformas-de-cocinas/',
        destination: '/reformas-cocinas',
        permanent: true,
      },
      {
        source: '/reformas-de-banos',
        destination: '/reformas-banos',
        permanent: true,
      },
      {
        source: '/reformas-de-banos/',
        destination: '/reformas-banos',
        permanent: true,
      },
      {
        source: '/reformas-de-salones',
        destination: '/reformas-salones',
        permanent: true,
      },
      {
        source: '/reformas-de-salones/',
        destination: '/reformas-salones',
        permanent: true,
      },
      {
        source: '/reformas-salon',
        destination: '/reformas-salones',
        permanent: true,
      },
      {
        source: '/reformas-terrazas',
        destination: '/reformas-terrazas-balcones',
        permanent: true,
      },
      {
        source: '/reformas-de-terrazas',
        destination: '/reformas-terrazas-balcones',
        permanent: true,
      },
      {
        source: '/reformas-de-terrazas/',
        destination: '/reformas-terrazas-balcones',
        permanent: true,
      },
      {
        source: '/reformas-de-habitaciones',
        destination: '/reformas-habitaciones',
        permanent: true,
      },
      {
        source: '/reformas-de-habitaciones/',
        destination: '/reformas-habitaciones',
        permanent: true,
      },
      {
        source: '/reformas-dormitorios',
        destination: '/reformas-habitaciones',
        permanent: true,
      },
      {
        source: '/reformas-de-recibidores',
        destination: '/reformas-recibidores',
        permanent: true,
      },
      {
        source: '/reformas-de-recibidores/',
        destination: '/reformas-recibidores',
        permanent: true,
      },
      {
        source: '/reformas-integrales-de-pisos',
        destination: '/reformas-integrales-pisos',
        permanent: true,
      },
      {
        source: '/reformas-integrales-de-pisos/',
        destination: '/reformas-integrales-pisos',
        permanent: true,
      },
      {
        source: '/rehabilitacion-integral-de-casas',
        destination: '/rehabilitacion-casas',
        permanent: true,
      },
      {
        source: '/rehabilitacion-integral-de-casas/',
        destination: '/rehabilitacion-casas',
        permanent: true,
      },
      {
        source: '/servicios-tecnicos-de-reforma',
        destination: '/servicios-tecnicos',
        permanent: true,
      },
      {
        source: '/servicios-tecnicos-de-reforma/',
        destination: '/servicios-tecnicos',
        permanent: true,
      },
      {
        source: '/aislamiento-termico-y-acustico',
        destination: '/aislamiento-termico-acustico',
        permanent: true,
      },
      {
        source: '/proyectos-de-interiorismo',
        destination: '/interiorismo-colaboracion',
        permanent: true,
      },
      {
        source: '/proyectos-de-interiorismo/',
        destination: '/interiorismo-colaboracion',
        permanent: true,
      },
    ];
  },
  // Simplified webpack config - let Next.js handle optimizations by default
  // Over-complex webpack configs can actually slow down execution
};

module.exports = nextConfig;

