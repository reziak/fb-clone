/** @type {import('tailwindcss').Config} */
const plugin = require('tailwindcss/plugin')

module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'black-opacity-50': 'rgba(0, 0, 0, 0.5)',
        'black-opacity-75': 'rgba(0, 0, 0, 0.75)',
      }
    },
  },
  plugins: [
    require('tailwind-scrollbar-hide'),
    plugin(({addVariant}) => {
      addVariant('penult', '&:nth-last-of-type(2)')
    })
  ],
}
