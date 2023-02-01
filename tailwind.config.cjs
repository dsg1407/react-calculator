/** @type {import('tailwindcss').Config} */

const defaultTheme = require("tailwindcss/defaultTheme")

module.exports = {
  content: ["./src/**/*.tsx", "./index.html"],
  theme: {
    extend: {
      fontFamily: {
        rubik: ['"Rubik"', ...defaultTheme.fontFamily.sans],
      },
      colors: {
        "background-gradient-1": "#8E7ECE",
        "background-gradient-2": "#807ECE",
        "background-calculator": "#2D2A37",
      },
      borderRadius: {
        "6xl": "3rem",
      },
      gridTemplateRows: {
        layout: "76px 1fr 56px",
      },
    },
  },
  plugins: [],
}
