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
    },
  },
  plugins: [],
}
