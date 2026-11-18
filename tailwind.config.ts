import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#0b1d33", // Calming Oxford Deep Blue (softer on the eyes than harsh black)
          light: "#143152",
          dark: "#071424",
        },
        accent: {
          DEFAULT: "#0d9488", // Soothing Precision Teal
          hover: "#0f766e",
          light: "#ccfbf1",
          subtle: "#f0fdfa",
        },
        clinical: {
          border: "#e2e8f0",
          subtle: "#f8fafc",
          slate: "#475569",
        },
        cold: {
          DEFAULT: "#0284c7",
          light: "#f0f9ff",
          border: "#bae6fd",
        },
      },
      fontFamily: {
        sans: ["var(--font-sans)", "Inter", "-apple-system", "BlinkMacSystemFont", "Segoe UI", "Roboto", "sans-serif"],
        mono: ["var(--font-mono)", "JetBrains Mono", "SF Mono", "Consolas", "monospace"],
      },
      boxShadow: {
        soft: "0 2px 10px -2px rgba(15, 23, 42, 0.05), 0 1px 3px 0 rgba(15, 23, 42, 0.04)",
        card: "0 4px 16px -4px rgba(15, 23, 42, 0.07), 0 2px 4px -2px rgba(15, 23, 42, 0.03)",
        elevated: "0 12px 28px -6px rgba(15, 23, 42, 0.1), 0 4px 8px -4px rgba(15, 23, 42, 0.04)",
      },
    },
  },
  plugins: [],
};

export default config;
