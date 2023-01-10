/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  mode: "jit",
  theme: {
    extend: {
      colors: {
        lavender: "#9f86c0",
        "dusty-lavender": "#5e548e",
        "dusty-rose": "#be95c4",
        rose: "#e0b1cb",
        gray: "#ededed",
        "deep-blue": "#010026",
        "dark-gray": "#757575",
        "overlay-black": "rgba(0,0,0,0.50)",
      },
      backgroundImage: (theme) => ({
        "gradient-purple":
          "linear-gradient(90deg, #5e548e 14.53%, #9F86C0 69.36%, #BE95C4 117.73%)",
      }),
      fontFamily: {
        worksans: ["Work Sans", "sans-serif"],
        playfair: ["Playfair Display", "serif"],
      },
      content: {},
    },
    screens: {
      xs: "480px",
      sm: "768px",
      md: "1060px",
    },
  },
  plugins: [],
};
