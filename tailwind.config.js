/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        "inter":["Inter", "sans-serif"],
        "Playfair":["Playfair Display", "serif"],
      },
      colors:{
        "Primary":	"#47624F", 
        "Accent-primary":	"#CBA15E", 
        "Accent-secondary":	"#41729F", 
        "Light":	"#FFFFFF", 
        "Dark":	"#2C2C2C" 
      },
      keyframes: {
        grow: {
          '0%': { transform: 'scale(1)' },
          '100%': { transform: 'scale(1.2)' },
        },
      },
      animation: {
        grow: 'grow 5.1s ease-in-out infinite',
      },
    },
  },
  plugins: [],
}