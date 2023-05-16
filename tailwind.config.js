/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      sm: "0px",
      md: "760px",
      lg: "1025px",
      xl: "1202px",
    },
    extend: {
      colors: {
        white: "#FFFFFF",
        black: "#000000",
        blackOpa: "rgb(0 0 0 / 0.8)",
        blackNext: "rgb(0 0 0 / 0.1)",
        main: {
          base: "#2D31FA",
          deeper: "#051367",
          light: "#5D8BF4",
          lighter: "#DFF6FF",
        },
      },
      screens: {
        height750: { raw: "(max-height: 750px)" },
        height650: { raw: "(max-height: 700px)" },
      },
      userDrag: {
        none: "none",
      },
      userSelect: {
        none: "none",
      },
    },
  },
  plugins: [
    function ({ addUtilities }) {
      const newUtilities = {
        ".no-drag": {
          userDrag: "none",
          WebkitUserDrag: "none",
          MozUserDrag: "none",
          msUserDrag: "none",
          userSelect: "none",
          WebkitUserSelect: "none",
          MozUserSelect: "none",
          msUserSelect: "none",
        },
      };
      addUtilities(newUtilities);
    },
  ],
  extend: {},
};
