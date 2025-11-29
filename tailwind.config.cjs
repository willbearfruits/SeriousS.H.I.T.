/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'win-gray': '#c0c0c0',
        'win-gray-light': '#dfdfdf',
        'win-gray-dark': '#808080',
        'win-blue': '#000080',
        'win-blue-light': '#1084d0',
        'win-text': '#000000',
        'win-bg': '#008080', // Classic teal
      },
      fontFamily: {
        'pixel': ['"Pixelify Sans"', '"Courier New"', 'monospace'],
        'ms-sans': ['"Microsoft Sans Serif"', 'Tahoma', 'sans-serif'],
      },
      boxShadow: {
        'win-out': 'inset -1px -1px #0a0a0a, inset 1px 1px #dfdfdf, inset -2px -2px #808080, inset 2px 2px #ffffff',
        'win-in': 'inset -1px -1px #ffffff, inset 1px 1px #0a0a0a, inset -2px -2px #dfdfdf, inset 2px 2px #808080',
      },
      backgroundImage: {
        'checker': 'linear-gradient(45deg, #808080 25%, transparent 25%), linear-gradient(-45deg, #808080 25%, transparent 25%), linear-gradient(45deg, transparent 75%, #808080 75%), linear-gradient(-45deg, transparent 75%, #808080 75%)',
      }
    },
  },
  plugins: [],
}
