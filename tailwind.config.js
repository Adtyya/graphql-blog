module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        "cs-sans": "Open Sans, sans-serif",
        "cs-alegreya": "Alegreya Sans, sans-serif",
      },
      animation: {
        blob: "blob 5s infinite",
        blob2: "blob2 6s infinite",
      },
      keyframes: {
        blob: {
          "0%, 100%": { transform: "translate(0px, 0px) scale(1)" },
          "33%": { transform: "translate(30px, 50px) scale(1.2)" },
          "66%": { transform: "translate(20px, 10px) scale(0.7)" },
        },
        blob2: {
          "0%, 100%": { transform: "translate(0px, 0px) scale(1)" },
          "33%": { transform: "translate(-10px, -40px) scale(1.3)" },
          "66%": { transform: "translate(10px, 25px) scale(0.9)" },
        },
      },
    },
  },
  plugins: [],
};
