/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js,ts,jsx,tsx}', './index.html'],
  theme: {
    extend: {
      dropShadow: {
        vite: '0 0 2em #646cffaa',
        react: '0 0 2em #61dafbaa',
      },
      animation: {
        'spin-slow': 'spin 20s infinite linear',
      },
    },
    fontFamily: {
      sans: ['Inter', 'Avenir', 'Helvetica', 'Arial', 'sans-serif'],
    },
  },
  plugins: [],
};
