/** @type {import('tailwindcss').Config} */
export default {
  content: [
     "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        beige: '#fdf6e3',
        wood: '#c8a97e',
        darkwood: '#5c4033',
        buttonwood: '#a67c52',
        lightbeige: '#e9dac1',
      },
    },
  },
  plugins: [],
}

