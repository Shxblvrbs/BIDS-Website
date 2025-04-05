/** @type {import('tailwindcss').Config} */

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'aller-display' : ['aller-display', 'sans-serif'],
        'venus-rising' : ['venus-rising', 'sans-serif'],
        'zentry' : ['zentry-regular', 'sans-serif'],
      },
      colors: {
        'bids-red': '#E00000',
        'bids-gray': '#333333',
      }
    },
  },
  plugins: [],
}