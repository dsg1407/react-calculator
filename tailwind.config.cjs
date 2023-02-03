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
        "button-black-opacity": "rgba(0, 0, 0, 0.05)",
        "button-white-opacity": "rgba(255, 255, 255, 0.05)",
      },
      gradientColorStops: {},
      borderRadius: {
        "6xl": "3rem",
      },
      boxShadow: {
        calculator:
          "0px 4px 4px rgba(0, 0, 0, 0.25), 0px 188px 52px rgba(0, 0, 0, 0.01), 0px 120px 48px rgba(0, 0, 0, 0.04), 0px 68px 41px rgba(0, 0, 0, 0.15), 0px 30px 30px rgba(0, 0, 0, 0.26), 0px 8px 17px rgba(0, 0, 0, 0.29), inset 0px 6px 8px rgba(255, 255, 255, 0.1), inset 0px -4px 5px rgba(0, 0, 0, 0.22)",
        button:
          "0px 11px 7px rgba(0, 0, 0, 0.01), 0px 7px 7px rgba(0, 0, 0, 0.04), 0px 4px 6px rgba(0, 0, 0, 0.1), 0px 2px 4px rgba(0, 0, 0, 0.26), 0px 0px 2px rgba(0, 0, 0, 0.29), inset 0px 2px 3px rgba(255, 255, 255, 0.06)",
      },
      gridTemplateRows: {
        layout: "76px 1fr 56px",
      },
    },
  },
  plugins: [],
}
