/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        display: ["'Orbitron'", "monospace"],
        body: ["'Rajdhani'", "sans-serif"],
        mono: ["'Share Tech Mono'", "monospace"],
      },
      colors: {
        cyber: { 400: "#00f5ff", 500: "#00d4e8" },
        dark: { 900: "#020408", 800: "#050c14", 700: "#0a1628" },
      },
    },
  },
  plugins: [],
};