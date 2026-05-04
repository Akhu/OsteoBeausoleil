/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  darkMode: "class",
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        // Heading/display font — DM Serif Display
        title: ["DM Serif Display", ...defaultTheme.fontFamily.serif],
        // Main body font — DM Sans
        sans: ["DM Sans", ...defaultTheme.fontFamily.sans],
        // Monospace for code blocks
        mono: ["JetBrains Mono", ...defaultTheme.fontFamily.mono],
      },
      // --------------------------------------------------
      // OSTÉO BEAUSOLEIL — Vert sauge, ardoise, blanc cassé
      // --------------------------------------------------
      colors: {
        brand: {
          50:  "#f4f9f4",
          100: "#e3f0e4",
          200: "#c4e0c6",
          300: "#9cc89f",
          400: "#6daa72",
          500: "#4d8f52",
          600: "#3a7040",
          700: "#2d5732",
          800: "#234228",
          900: "#1a3220",
          950: "#0d1f13",
        },
        accent: {
          50:  "#f0f5f4",
          100: "#dceae7",
          200: "#bbd5cf",
          300: "#92b8b0",
          400: "#6d9990",
          500: "#8fada3",
          600: "#5a8079",
          700: "#486862",
          800: "#3a5550",
          900: "#304542",
        },
      },
      typography: {
        DEFAULT: {
          css: {
            maxWidth: "none",
          },
        },
      },
    },
  },
  plugins: [
    require("@tailwindcss/typography"),
    require("@tailwindcss/forms"),
  ],
};
