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
        // Primary color - Signal Green (infrastructure, growth, systems online)
        primary: {
          DEFAULT: "var(--primary)",
          50: "rgba(var(--primary-rgb), 0.05)",
          100: "rgba(var(--primary-rgb), 0.1)",
          200: "rgba(var(--primary-rgb), 0.2)",
          300: "rgba(var(--primary-rgb), 0.3)",
          400: "var(--primary)",
          500: "var(--primary)",
          600: "rgba(var(--primary-rgb), 0.8)",
        },
        // Accent color - Safety Orange (CTAs, action, priority)
        accent: {
          DEFAULT: "var(--accent-orange)",
          50: "rgba(var(--accent-orange-rgb), 0.05)",
          100: "rgba(var(--accent-orange-rgb), 0.1)",
          200: "rgba(var(--accent-orange-rgb), 0.2)",
          300: "rgba(var(--accent-orange-rgb), 0.3)",
          400: "#FF6B1A",
          500: "#FF5500",
          600: "#E64D00",
          700: "#CC4400",
          800: "#B33B00",
          900: "#993300",
        },
        // Brand colors - kept for backwards compatibility
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
        // Dark theme colors - Void Black with warm undertones
        dark: {
          50: "#F5F5F0",
          100: "#E8E8E4",
          200: "#D5D5D0",
          300: "#B5B5B0",
          400: "#8A8A85",
          500: "#6B6B65",
          600: "#4A4A45",
          700: "#2A2A28",
          800: "#1A1A18",
          850: "#0D0D0C",
          900: "#080808",
          950: "#050505",
        },
      },
      fontFamily: {
        sans: ["Inter", "system-ui", "sans-serif"],
        mono: ["JetBrains Mono", "monospace"],
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "hero-gradient":
          "radial-gradient(ellipse 80% 50% at 50% -20%, rgba(var(--primary-rgb), 0.12), transparent)",
        "section-gradient":
          "linear-gradient(to bottom, transparent, rgba(var(--primary-rgb), 0.03), transparent)",
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
