/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}", // Isso está 100% correto
  ],
  theme: {
    extend: {}, // Aqui é onde você pode adicionar cores, fontes, etc.
  },
  plugins: [], // Aqui é onde você adiciona plugins
}