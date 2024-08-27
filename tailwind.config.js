/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        'montserrat': ['Montserrat', 'sans-serif'],
        'koulen': ['Koulen', 'cursive'],
        'oxygen': ['Oxygen', 'sans-serif'],
      },
      screens: {
        'xs': '300px',    // Pequenos telefones
        'sm': '390px',    // Telefones médios
        'md': '768px',    // Tablets
        'lg': '1024px',   // Telas pequenas de laptops
        'xl': '1280px',   // Telas de laptops maiores
        '2xl': '1536px',  // Telas de desktops grandes
        '3xl': '1920px',  // Telas de desktops muito grandes
      },
    },
  },
  plugins: [],
}
