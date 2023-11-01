/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./sections/**/*.{js,ts,jsx,tsx}",

  ],
  
  darkMode:'class',

  theme: {
    extend: {
      width: {
        'custom': '40rem',
      },

      margin:{
        'custom': '30rem',
      },
      colors: {
        custom: '#1e1f20',
      },
    },
  },
  plugins: [],
}