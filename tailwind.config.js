/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.js"],
  theme: {
    extend: {},
    fontFamily: {
      sans: ["Poppins", "DM Serif Display"],
    },
  },
  plugins: [require("daisyui")],
};
