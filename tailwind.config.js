/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        porsche: '#b00041',
      },
      screens: {
        'ssm': '320px', // Super Small Screen
        'xs': '420px',  // Extra Small Screen
      },
    },
  },
  plugins: [],
}
