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

      keyframes: {
        fade: { "0%": { opacity: "0" }, "100%": { opacity: "1" } },
        slideInTop: {
          "0%": { opacity: "0", transform: "translateY(-5%)" },

          "100%": { opacity: "1", transform: "translateY(0%)" },
        },
        slideInLeft: {
          "0%": { opacity: "0", transform: "translateX(-5%)" },

          "100%": { opacity: "1", transform: "translateX(0%)" },
        },
        slideInRight: {
          "0%": { opacity: "0", transform: "translateX(5%)" },

          "100%": { opacity: "1", transform: "translateX(0%)" },
        },
        slideInBtm: {
          "0%": { opacity: "0", transform: "translateY(5%)" },

          "100%": { opacity: "1", transform: "translateY(0%)" },
        },
      },

      animation: {
        fade: "fade 350ms ease-in-out",
        slideInTop: "slideInTop 500ms ease-in-out",
        slideInLeft: "slideInLeft 350ms ease-in-out",
        slideInRight: "slideInRight 350ms ease-in-out",
        slideInFast: "slideInBtm 500ms ease-in-out",
        slideInSlow: "slideInBtm 800ms ease-in-out",
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
