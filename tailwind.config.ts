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
        // PRIMARY - Warm Orange (CTAs, highlights, energy)
        primary: {
          DEFAULT: "var(--primary)",
          50: "rgba(var(--primary-rgb), 0.05)",
          100: "rgba(var(--primary-rgb), 0.1)",
          200: "rgba(var(--primary-rgb), 0.2)",
          300: "rgba(var(--primary-rgb), 0.3)",
          400: "#FF7F50",
          500: "#FF6B35",
          600: "#E65A2E",
          700: "#CC4F28",
          800: "#B34422",
          900: "#99391C",
        },
        // SECONDARY - Deep Purple (depth, premium, gradients)
        secondary: {
          DEFAULT: "var(--secondary)",
          50: "rgba(var(--secondary-rgb), 0.05)",
          100: "rgba(var(--secondary-rgb), 0.1)",
          200: "rgba(var(--secondary-rgb), 0.2)",
          300: "rgba(var(--secondary-rgb), 0.3)",
          400: "#A855F7",
          500: "#9333EA",
          600: "#7C22CB",
          700: "#6B21A8",
          800: "#581C87",
          900: "#4C1D6E",
        },
        // Accent alias (for backwards compatibility)
        accent: {
          DEFAULT: "var(--primary)",
          500: "#FF6B35",
          600: "#E65A2E",
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
        sans: ["Inter", "system-ui", "sans-serif"],
        mono: ["JetBrains Mono", "monospace"],
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-warm": "linear-gradient(135deg, #FF6B35 0%, #9333EA 100%)",
        "hero-gradient": "var(--gradient-hero)",
        "section-gradient": "linear-gradient(180deg, var(--bg-base) 0%, var(--bg-raised) 50%, var(--bg-base) 100%)",
      },
      boxShadow: {
        "glow-primary": "0 0 40px rgba(255, 107, 53, 0.4)",
        "glow-secondary": "0 0 40px rgba(147, 51, 234, 0.4)",
        "glow-combined": "0 0 60px rgba(255, 107, 53, 0.3), 0 0 100px rgba(147, 51, 234, 0.3)",
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
