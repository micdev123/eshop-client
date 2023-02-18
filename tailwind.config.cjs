/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
      '2xl': '1536px',
    },
    fontFamily: {
      sans: ['Poppins', 'sans-serif'],
    },
    extend: {
      colors: {
        'lighterBlue': '#F5F5F8',
        'bgWhite': '#FAFAFA',
        'ratingBg': '#FFC850',
        'lightBlack': '#797979'
      }
    },
  },
  plugins: [],
}
