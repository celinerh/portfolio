/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      letterSpacing: {
        widest: ".22em",
      },
      fontFamily: {
        AbhayaLibre: ["Abhaya Libre", "serif"],
      },
    },
  },
  plugins: [],
};
