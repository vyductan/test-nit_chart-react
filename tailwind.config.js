/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        panel: '#12283F',
        primary: '#2178B3',
      },
      backgroundColor: {
        title: '#0B141E',
      },
      fill: {
        title: '#0B141E',
      },
      screens: {
        'full-hd': '1920px',
      },
    },
  },
  plugins: [],
};
