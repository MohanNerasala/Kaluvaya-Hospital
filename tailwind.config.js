/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        medical: {
          blue: '#1e3a8a', // deep medical blue
          teal: '#0d9488', // teal accent
          green: '#10b981', // soft green highlight
          light: '#f8fafc', // soft light gray
        }
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      }
    },
  },
  plugins: [],
}
