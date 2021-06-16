const colors = require("tailwindcss/colors");

module.exports = {
  purge: ["./*.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        transparent: "transparent",
        current: "currentColor",

        grey: colors.gray,
        trueGrey: colors.trueGray,
        warmGrey: colors.warmGray,
        red: colors.red,
        green: colors.green,
        blue: colors.lightBlue,
      },

      fontFamily: { rubik: ["'Rubik'", "helvetica", "sans-serif"] },
    },
  },
  variants: {
    extend: {
      borderWidth: ["hover"],
      borderColor: ["hover"],
    },
  },
  plugins: [require("@tailwindcss/forms"), require("@tailwindcss/aspect-ratio")],
};
