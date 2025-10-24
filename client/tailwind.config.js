/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {
      screens: {
        xs: '480px',
      },
      colors: {
        brandBlue: '#3B82F6', // ✅ use real color value
      },
      fontFamily: {
        inter: ['Inter var', 'sans-serif'],
      },
      boxShadow: {
        card: '0 0 1px 0 rgba(189,192,207,0.06), 0 10px 16px -1px rgba(189,192,207,0.2)',
        cardhover: '0 0 1px 0 rgba(189,192,207,0.06), 0 10px 16px -1px rgba(189,192,207,0.4)',
      },
    },
  },
  plugins: [],
};
