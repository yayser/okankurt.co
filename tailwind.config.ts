import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        teal: {
          400: "#2DD4BF",
          500: "#14B8A6",
          600: "#0D9488",
        },
        dark: {
          900: "#030303",
          800: "#0A0A0A",
          700: "#111111",
          600: "#1A1A1A",
          500: "#222222",
          400: "#2A2A2A",
          300: "#333333",
        },
      },
      fontFamily: {
        sans: ["Space Grotesk", "Inter", "sans-serif"],
        display: ["Space Grotesk", "sans-serif"],
      },
      animation: {
        "grid-move": "gridMove 8s linear infinite",
        "fade-up": "fadeUp 0.8s ease-out forwards",
        "fade-in": "fadeIn 1s ease-out forwards",
        "slide-right": "slideRight 0.8s ease-out forwards",
        "pulse-teal": "pulseTeal 2s ease-in-out infinite",
        "progress-fill": "progressFill 1.2s ease-out forwards",
        "float": "float 6s ease-in-out infinite",
      },
      keyframes: {
        gridMove: {
          "0%": { transform: "translateY(0)" },
          "100%": { transform: "translateY(80px)" },
        },
        fadeUp: {
          "0%": { opacity: "0", transform: "translateY(30px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        slideRight: {
          "0%": { opacity: "0", transform: "translateX(-30px)" },
          "100%": { opacity: "1", transform: "translateX(0)" },
        },
        pulseTeal: {
          "0%, 100%": { opacity: "1" },
          "50%": { opacity: "0.5" },
        },
        progressFill: {
          "0%": { width: "0%" },
          "100%": { width: "var(--progress-width)" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-12px)" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
