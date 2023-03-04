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
      keyframes: {
        "fade-in-out": {
          "0%": { opacity: 0 },
          "20%, 70%": { opacity: 1 },
          "100%": { opacity: 0 },
        },
        "gradient-y": {
          "0%, 100%": {
            "background-size": "400% 400%",
            "background-position": "center top",
          },
          "50%": {
            "background-size": "200% 200%",
            "background-position": "center center",
          },
        },
        "gradient-x": {
          "0%, 100%": {
            "background-size": "200% 200%",
            "background-position": "left center",
          },
          "50%": {
            "background-size": "200% 200%",
            "background-position": "right center",
          },
        },
        "gradient-xy": {
          "0%, 100%": {
            "background-size": "400% 400%",
            "background-position": "left center",
          },
          "50%": {
            "background-size": "200% 200%",
            "background-position": "right center",
          },
        },
        // this is tailwind's bounce keyframe but done at the origin:
        "bounce-origin": {
          "0%, 100%": {
            transform: "translateY(0%)",
            "animation-timing-function": " cubic-bezier(0,0,0.2,1)",
          },
          "50%": {
            transform: "translateY(-35%)",
            "animation-timing-function": "cubic-bezier(0.8,0,1,1)",
          },
        },
        "bounce-origin-right": {
          "0%, 100%": {
            transform: "translateX(0%)",
            "animation-timing-function": " cubic-bezier(0,0,0.2,1)",
          },
          "50%": {
            transform: "translateX(25%)",
            "animation-timing-function": "cubic-bezier(0.8,0,1,1)",
          },
        },
      },
      animation: {
        "ping-slow": "ping 3s cubic-bezier(0, 0, 0.2, 1) infinite",
        "fade-in-out":
          "fade-in-out 0.5s cubic-bezier(.13,.74,.84,.43) 1 forwards",
        "gradient-x": "gradient-x 5s linear infinite",
        "gradient-y": "gradient-y 5s linear infinite",
        "gradient-xy": "gradient-xy 5s linear infinite",
        "bounce-origin": "bounce-origin 1s infinite",
        "bounce-origin-right": "bounce-origin-right 1s infinite",
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
