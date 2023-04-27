/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      sm: "300px",
      md: "760px",
      lg: "1025px",
      xl: "1202px",
    },
    fontFamily: {
      display: ['"CalSans-SemiBold"', "sans-serif"],
      body: ['"DM Sans"', "sans-serif"],
    },
    colors: {
      white: "#FFFFFF",
      black: "#000000",
      main: {
        base: "#2D31FA",
        deeper: "#051367",
        light: "#5D8BF4",
        lighter: "#DFF6FF",
      },
    },
    extend: {
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
};
