import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        /* ── Brand — dusty rose ── */
        brand: {
          50: "#f9f1ef",
          100: "#f2e0dd",
          200: "#e3c3be",
          300: "#d4a29b",
          400: "#c98b82",
          500: "#C0766B",
          600: "#a55a4f",
          700: "#844f47",
          800: "#66423d",
          900: "#493430",
        },
        /* ── Warm "home" palette ── */
        warm: {
          50: "#fefdfb",
          100: "#fdf8f0",
          200: "#f9edd8",
          300: "#f3ddb8",
          400: "#e8c890",
          500: "#d4a574",
          600: "#b8865a",
          700: "#96694a",
          800: "#6b4a35",
          900: "#3d2b1f",
        },
        surface: {
          DEFAULT: "#ffffff",
          warm: "#fdfbf7",       /* creamy off-white */
          cozy: "#faf6ef",       /* even warmer */
          muted: "#f5f0e8",      /* warm grey */
          linen: "#f8f4ec",
        },
        sage: {
          100: "#eef3ec",
          200: "#d5e3d0",
          300: "#a8c89e",
          400: "#7aad6d",
          500: "#5a8a4e",
        },
        terracotta: {
          100: "#fbe9e0",
          200: "#f5cdb8",
          300: "#e8a882",
          400: "#d4845a",
          500: "#b86840",
        },
        /* ── Navy — dark blue from logo wordmark ── */
        navy: {
          50: "#f1f5f9",
          100: "#e2e8f0",
          200: "#cbd5e1",
          300: "#94a3b8",
          400: "#64748b",
          500: "#475569",
          600: "#334155",
          700: "#1e293b",
          800: "#1a2236",
          900: "#0f172a",
        },
      },
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
        display: ["var(--font-playfair)", "Georgia", "serif"],
      },
      fontSize: {
        /* Pretext-style large editorial sizes */
        "display-xl": ["4.5rem", { lineHeight: "1.05", letterSpacing: "-0.03em" }],
        "display-lg": ["3.75rem", { lineHeight: "1.1", letterSpacing: "-0.025em" }],
        "display-md": ["3rem", { lineHeight: "1.15", letterSpacing: "-0.02em" }],
        "display-sm": ["2.25rem", { lineHeight: "1.2", letterSpacing: "-0.015em" }],
        "body-lg": ["1.125rem", { lineHeight: "1.75" }],
        "body-md": ["1rem", { lineHeight: "1.7" }],
        caption: ["0.8125rem", { lineHeight: "1.5", letterSpacing: "0.02em" }],
        overline: ["0.6875rem", { lineHeight: "1.4", letterSpacing: "0.12em" }],
      },
      spacing: {
        /* Generous Pretext-style section spacing */
        "section": "7rem",
        "section-sm": "4.5rem",
      },
      borderRadius: {
        "2xl": "1rem",
        "3xl": "1.5rem",
        "4xl": "2rem",
      },
      boxShadow: {
        "warm": "0 4px 24px -4px rgba(192, 118, 107, 0.10)",
        "warm-lg": "0 8px 40px -8px rgba(192, 118, 107, 0.15)",
        "cozy": "0 1px 3px rgba(192, 118, 107, 0.06), 0 8px 24px -4px rgba(192, 118, 107, 0.08)",
        "shelf": "0 4px 12px -2px rgba(0,0,0,0.08)",
      },
      animation: {
        "fade-in": "fadeIn 0.6s ease-out forwards",
        "slide-up": "slideUp 0.6s ease-out forwards",
        "slide-in-left": "slideInLeft 0.6s ease-out forwards",
        "scale-in": "scaleIn 0.5s ease-out forwards",
        "float": "float 6s ease-in-out infinite",
        "float-slow": "float 8s ease-in-out infinite",
        "sway": "sway 4s ease-in-out infinite",
        "draw-line": "drawLine 1.5s ease-out forwards",
        "grain": "grain 8s steps(10) infinite",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        slideUp: {
          "0%": { opacity: "0", transform: "translateY(30px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        slideInLeft: {
          "0%": { opacity: "0", transform: "translateX(-30px)" },
          "100%": { opacity: "1", transform: "translateX(0)" },
        },
        scaleIn: {
          "0%": { opacity: "0", transform: "scale(0.9)" },
          "100%": { opacity: "1", transform: "scale(1)" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-10px)" },
        },
        sway: {
          "0%, 100%": { transform: "rotate(-1deg)" },
          "50%": { transform: "rotate(1deg)" },
        },
        drawLine: {
          "0%": { strokeDashoffset: "1000" },
          "100%": { strokeDashoffset: "0" },
        },
        grain: {
          "0%, 100%": { transform: "translate(0, 0)" },
          "10%": { transform: "translate(-5%, -10%)" },
          "30%": { transform: "translate(3%, -15%)" },
          "50%": { transform: "translate(12%, 9%)" },
          "70%": { transform: "translate(9%, 4%)" },
          "90%": { transform: "translate(-1%, 7%)" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
