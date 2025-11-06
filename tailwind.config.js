/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      // ATUALIZAÇÃO: Adicionamos a cor 'hc-blue'
      colors: {
        'hc-blue-dark': '#003366', 
        'hc-blue': '#0055A4',        // NOVA COR (Ex: Azul mais claro, ajuste o HEX)
        'hc-green': '#00A859',       
        'hc-green-dark': '#007F43',  
      }
    },
  },
  plugins: [],
}