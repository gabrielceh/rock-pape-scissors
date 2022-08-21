/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {},
  },
  plugins: [],
  backgroundImages: {
    default: 'url("./src/assets/bg-pentagon.svg")',
  },
};
