/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      animation: {
        border: 'border 4s ease infinite',
      },
      keyframes: {
        border: {
          '0%, 100%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
        },
      },
      colors: {
        'google-blue': '#4285f4',
        'google-red': '#ea4335',
        'google-yellow': '#fbbc05',
        'google-green': '#34a853',
        'black-1': '#082032',
        'black-2': '#2c394b',
        'black-3': '#334756',
        'white-1': '#d2d2d2',
        'red': '#ff4c29'

      }
    }
  },
  plugins: [require('tailwindcss-animation-delay')]
};
