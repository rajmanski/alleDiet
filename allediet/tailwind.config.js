/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'violet': '#6874e8',
      }
    },
    fontFamily: {
      'lato': ['Lato', 'sans-serif'],
      'moja': ['Luxurious Script', 'cursive'],
    }
  },
  plugins: [],
}
