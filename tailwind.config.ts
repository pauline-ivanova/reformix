import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./A-landings-content/**/*.{md,mdx}",
  ],
  // Optimize for production - remove unused styles
  corePlugins: {
    // Disable unused core plugins to reduce CSS size
    preflight: true, // Keep preflight for base styles
  },
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        brand: {
          primary: "#002e7c", // Primary Color - Dark Blue
          secondary: "#B84A2A", // Secondary Color - Terracotta (improved contrast ratio 4.5:1)
          accent: {
            DEFAULT: "#B84A2A", // Secondary Color for CTAs (improved contrast ratio 4.5:1)
            hover: "#a04525", // Darker shade for hover
            bright: "#6ab5e7", // Accent Bright - Light Blue
            light: "#F3e9d2", // Accent Light - Light Beige
            neutral: "#F2f2f2", // Accent Neutral - Very Light Gray
          },
          text: {
            heading: "#444444", // Heading Text Color
            body: "#444444", // Body Text Color
          },
          base: {
            white: "#ffffff", // Base White
          },
        },
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
  // Optimize CSS output
  future: {
    hoverOnlyWhenSupported: true,
  },
};
export default config;

