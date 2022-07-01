module.exports = {
  content: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        "cs-sans": "Open Sans, sans-serif",
        "cs-alegreya": "Alegreya Sans, sans-serif",
      },
      animation: {
        blob: "blob 4s infinite",
        blob2: "blob2 5s infinite",
        blob3: "blob3 3s infinite",
      },
      keyframes: {
        blob: {
          "0%, 100%": { transform: "translate(0px, 0px) scale(1)" },
          "33%": { transform: "translate(-30px, 30px) scale(1.2)" },
          "66%": { transform: "translate(20px, 10px) scale(0.7)" },
        },
        blob2: {
          "0%, 100%": { transform: "translate(0px, 0px) scale(1)" },
          "33%": { transform: "translate(-10px, -30px) scale(1.3)" },
          "66%": { transform: "translate(14px, 30px) scale(0.9)" },
        },
        blob3: {
          "0%, 100%": { transform: "translate(0px, 0px) scale(1)" },
          "33%": { transform: "translate(90px, -30px) scale(1.2)" },
          "66%": { transform: "translate(-14px, 30px) scale(0.9)" },
        },
      },
    },
  },
  plugins: [],
};
