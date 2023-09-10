/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        lightbg:"#648AFF",
        bgcolor:'#6C92FF',
        lightbg2:"#7294FF",
        bluebtn:"#2c379e",
        bgall:"#F2F9FF",
      }
    },
  },
  plugins: [],
}