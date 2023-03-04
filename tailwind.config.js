const plugin = require("tailwindcss/plugin");
const colors = require("tailwindcss/colors");

/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: ["./src/**/*.{js,ts,jsx,tsx,css}"],
  theme: {
    extend: {
      colors: {
        primary: colors.indigo,
      },
      fontFamily: {
        base: ["var(--font-inter)"],
        mono: ["var(--font-fira-code)"],
      },
    },
  },
  plugins: [
    require("tailwind-scrollbar"),
    require("@tailwindcss/line-clamp"),
    plugin(function ({ addUtilities }) {
      addUtilities({
        ".no-scrollbar": {
          "-ms-overflow-style": "none" /* IE and Edge */,
          "scrollbar-width": "none" /* Firefox */,
        },
        ".no-scrollbar::-webkit-scrollbar": {
          display: "none",
        },
      });
    }),
  ],
};
