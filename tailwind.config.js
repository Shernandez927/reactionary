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
        eggplant: "#3b2a45",
        "antique-violet": "#583948",
        "dark-cranberry": "#ab2955",
        mauve: "#a9576e",
        salmon: "#d78d8c",
        "autumn-gold": "#f9c579",
      },
      backgroundImage: (theme) => ({
        "gradient-purple":
          "linear-gradient(90deg, #5e548e 14.53%, #9F86C0 69.36%, #BE95C4 117.73%)",
      }),
      fontFamily: {
        worksans: ["Work Sans", "sans-serif"],
        playfair: ["Playfair Display", "serif"],
        rubik: ["Rubik", "sans-serif"],
      },
      screens: {
        xs: "320px",
      }
    },
  },
  plugins: [],
};
