/** @type {import('tailwindcss').Config} */

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      primary: 'Orbitron',
      secondary: 'Rajdhani',
      tertiary: 'Aldrich',
    },
    container: {
      padding: {
        DEFAULT: '15px',
      },
    },
    extend: {
      backgroundImage: {
        site: "url('./assets/site-bg.jpg')",
        about: "url('./assets/Designer.jpeg')",
      },
      fontFamily: {
        'aller-display' : ['aller-display', 'sans-serif'],
        'venus-rising' : ['venus-rising', 'sans-serif'],
        'zentry' : ['zentry-regular', 'sans-serif'],
      },
      colors: {
        'bids-red': '#E00000',
        'bids-gray': '#333333',
        primary: '#E00000',
        accent: '#333333',
      }
    },
  },
  plugins: [],
}