import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./A-landings-content/**/*.{md,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        brand: {
          primary: "#002e7c", // Primary Color - Dark Blue
          secondary: "#C4572f", // Secondary Color - Terracotta
          accent: {
            DEFAULT: "#C4572f", // Secondary Color for CTAs
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
};
export default config;

