/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        primary: ["REM"],
      },

      screens: {
        sm: "480px",
        md: "768px",
        lg: "976px",
        xl: "1200px",
      },
      colors: {
        white: "#fff",
        black: "#000",
        gray: "#748991",
        darkGray: "#333",
        orange: "#FFA500",
        lightOrange: "#ffb52e",
        lighterOrange: "#fae2b5",
        darkOrange: "#754c00",
        red: "#f64900",
      },
    },
  },
  plugins: [],
};
