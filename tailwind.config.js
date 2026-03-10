/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    colors: {
      transparent: "transparent",
      current: "currentColor",
      white: "#FFFFFF",
      black: "#000000",
      blue: {
        50: "#F0F3F7",
        100: "#DDE4EE",
        200: "#C5D0E3",
        300: "#ADBCD8",
        400: "#8598BA",
        500: "#5D739C",
        600: "#4D6188",
        700: "#3F5073",
        800: "#31405E",
        900: "#243049",
        950: "#1A2336",
        DEFAULT: "#5D739C",
      },
      gray: {
        50: "#F7F7F7",
        100: "#F0F0F0",
        200: "#E6E6E6",
        300: "#D4D4D4",
        400: "#AAAAAA",
        500: "#808080",
        600: "#6B6B6B",
        700: "#555555",
        800: "#404040",
        900: "#2B2B2B",
        950: "#1A1A1A",
        DEFAULT: "#808080",
      },
      purple: {
        50: "#F5F1F8",
        100: "#EAE2F0",
        200: "#D8CAE3",
        300: "#C5B2D6",
        400: "#AB94C0",
        500: "#9277AB",
        600: "#7D6396",
        700: "#685280",
        800: "#54426A",
        900: "#413354",
        950: "#302540",
        DEFAULT: "#9277AB",
      },
    },
    extend: {
      fontFamily: {
        sans: ["Inter var", ...defaultTheme.fontFamily.sans],
        script: ["Saturday Script", "cursive"],
      },
      boxShadow: {
        header: "0 4px 10px rgba(0, 0, 0, 0.2)",
      },
    },
  },
  plugins: [],
};
