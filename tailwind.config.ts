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
        // PRIMARY - Gold/Orange (CTAs, highlights, energy) - Mangeo Brand
        primary: {
          DEFAULT: "var(--primary)",
          50: "rgba(var(--primary-rgb), 0.05)",
          100: "rgba(var(--primary-rgb), 0.1)",
          200: "rgba(var(--primary-rgb), 0.2)",
          300: "rgba(var(--primary-rgb), 0.3)",
          400: "#FFBA75",
          500: "#FDA656",
          600: "#E8923D",
          700: "#D4802E",
          800: "#BF6E1F",
          900: "#A85C10",
        },
        // SECONDARY - Purple/Magenta (depth, premium, gradients) - Mangeo Brand
        secondary: {
          DEFAULT: "var(--secondary)",
          50: "rgba(var(--secondary-rgb), 0.05)",
          100: "rgba(var(--secondary-rgb), 0.1)",
          200: "rgba(var(--secondary-rgb), 0.2)",
          300: "rgba(var(--secondary-rgb), 0.3)",
          400: "#C62DB5",
          500: "#AF1DA0",
          600: "#8A1780",
          700: "#6B1263",
          800: "#4D0D47",
          900: "#2F082B",
        },
        // Accent alias (for backwards compatibility)
        accent: {
          DEFAULT: "var(--primary)",
          500: "#FDA656",
          600: "#E8923D",
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
        // Dark theme - Deep charcoal with warm purple undertones
        dark: {
          50: "#FAFAF9",
          100: "#F4F4F5",
          200: "#D4D4D4",
          300: "#B4B4B4",
          400: "#A1A1AA",
          500: "#71717A",
          600: "#52525B",
          700: "#302845",
          800: "#251F35",
          850: "#1A1525",
          900: "#0F0B15",
          950: "#0A0710",
        },
      },
      fontFamily: {
        sans: ["var(--font-inter)", "Inter", "system-ui", "sans-serif"],
        display: ["var(--font-display)", "Space Grotesk", "system-ui", "sans-serif"],
        mono: ["JetBrains Mono", "monospace"],
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-warm": "linear-gradient(135deg, #FDA656 0%, #AF1DA0 100%)",
        "hero-gradient": "var(--gradient-hero)",
        "section-gradient": "linear-gradient(180deg, var(--bg-base) 0%, var(--bg-raised) 50%, var(--bg-base) 100%)",
      },
      boxShadow: {
        "glow-primary": "0 0 40px rgba(253, 166, 86, 0.4)",
        "glow-secondary": "0 0 40px rgba(175, 29, 160, 0.4)",
        "glow-combined": "0 0 60px rgba(253, 166, 86, 0.3), 0 0 100px rgba(175, 29, 160, 0.3)",
        "glass": "0 8px 32px rgba(0, 0, 0, 0.3)",
      },
      backdropBlur: {
        xs: "2px",
      },
      animation: {
        "fade-in": "fadeIn 0.5s ease-out forwards",
        "slide-up": "slideUp 0.5s ease-out forwards",
        "pulse-slow": "pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite",
        "pulse-glow": "pulseGlow 4s ease-in-out infinite",
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
        pulseGlow: {
          "0%, 100%": { opacity: "0.5", transform: "scale(1)" },
          "50%": { opacity: "0.8", transform: "scale(1.05)" },
        },
      },
    },
  },
  plugins: [],
};
export default config;
