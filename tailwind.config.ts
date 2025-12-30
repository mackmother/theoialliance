import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        // Brand colors - Gold/Amber from wibuz.com
        brand: {
          50: "#FFF9E6",
          100: "#FFF0C2",
          200: "#FFE699",
          300: "#FFD966",
          400: "#FFC333",
          500: "#E6B02E",
          600: "#CC9C29",
          700: "#B38724",
          800: "#99731F",
          900: "#805F1A",
        },
        // Dark theme colors - from wibuz.com
        dark: {
          50: "#FCFDF2",
          100: "#F5F5F5",
          200: "#E5E5E5",
          300: "#D5D4D6",
          400: "#A1A1AA",
          500: "#696969",
          600: "#52525B",
          700: "#3F3F46",
          800: "#191720",
          850: "#111111",
          900: "#0E0C12",
          950: "#0A0810",
        },
      },
      fontFamily: {
        sans: ["Inter", "system-ui", "sans-serif"],
        mono: ["JetBrains Mono", "monospace"],
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "hero-gradient":
          "radial-gradient(ellipse 80% 50% at 50% -20%, rgba(255, 195, 51, 0.12), transparent)",
        "section-gradient":
          "linear-gradient(to bottom, transparent, rgba(255, 195, 51, 0.03), transparent)",
      },
      animation: {
        "fade-in": "fadeIn 0.5s ease-out forwards",
        "slide-up": "slideUp 0.5s ease-out forwards",
        "pulse-slow": "pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        slideUp: {
          "0%": { opacity: "0", transform: "translateY(20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
    },
  },
  plugins: [],
};
export default config;
