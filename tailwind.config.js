/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'kalaka-purple': '#230F36',
        'kalaka-gold': '#D6A540',
        'kalaka-green': '#2D5016',
        'kalaka-neutral': '#F5F5F5',
      },
    },
  },
  plugins: [],
}
