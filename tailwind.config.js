/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./lib/**/*.{js,ts,jsx,tsx}",
    "./app/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        gluten: "Gluten",
        varela: "Varela Round",
      },
      // Font Size Reference: https://tailwindcss.com/docs/font-size
      colors: {
        "base-colors/neutral": {
          50: "#FBF7F3",
          100: "#F6E6DC",
          200: "#E3CABA",
          400: "#D1AC98",
          500: "#8E5A45",
          900: "#3D1F14",
        },
        "base-colors/brand": {
          400: "#04B76D",
          600: "#009F55",
          700: "#008E3B",
        },
        text: {
          primary: "#3D1F16",
        },
      },
    },
  },
  plugins: [],
};
