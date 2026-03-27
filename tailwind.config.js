/** @type {import('tailwindcss').Config} */
const config = {
  content: [
    "./src/pages/**/*.{js,jsx,mdx}",
    "./src/components/**/*.{js,jsx,mdx}",
    "./src/app/**/*.{js,jsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        display: ["'Playfair Display'", "Georgia", "serif"],
        body: ["'DM Sans'", "sans-serif"],
      },
      colors: {
        parchment: {
          50: "#fdf8f0",
          100: "#f9edda",
          200: "#f2d9b0",
          300: "#e8c07d",
          400: "#dca04a",
          500: "#c9862a",
          600: "#a86820",
          700: "#86501b",
          800: "#6e411c",
          900: "#5c361a",
        },
        ink: {
          DEFAULT: "#1a1207",
          light: "#3d2c14",
          muted: "#7a6248",
        },
      },
      backgroundImage: {
        "paper-texture":
          "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='300' height='300'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.75' numOctaves='4' stitchTiles='stitch'/%3E%3CfeColorMatrix type='saturate' values='0'/%3E%3C/filter%3E%3Crect width='300' height='300' filter='url(%23noise)' opacity='0.04'/%3E%3C/svg%3E\")",
      },
      boxShadow: {
        book: "4px 4px 0 #a86820, 8px 8px 0 rgba(168,104,32,0.3)",
        "book-hover": "6px 6px 0 #a86820, 12px 12px 0 rgba(168,104,32,0.2)",
        card: "0 2px 20px rgba(26,18,7,0.12)",
      },
      animation: {
        "slide-in": "slideIn 0.4s ease forwards",
        "fade-up": "fadeUp 0.5s ease forwards",
      },
      keyframes: {
        slideIn: {
          from: { opacity: "0", transform: "translateX(-20px)" },
          to: { opacity: "1", transform: "translateX(0)" },
        },
        fadeUp: {
          from: { opacity: "0", transform: "translateY(16px)" },
          to: { opacity: "1", transform: "translateY(0)" },
        },
      },
    },
  },
  plugins: [],
};

module.exports = config;
