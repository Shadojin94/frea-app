/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        gold: '#FFD700',
        red: {
          50: '#FFF5F5',
          100: '#FED7D7',
          200: '#FEB2B2',
          300: '#FC8181',
          400: '#F56565',
          500: '#DD1E1E',
          600: '#C41E1E',
          700: '#B01E1E',
          800: '#822727',
          900: '#63171B',
        },
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
      dropShadow: {
        '2xl': '0 25px 25px rgba(0, 0, 0, 0.15)',
      },
    },
  },
  plugins: [],
};