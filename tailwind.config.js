module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    borderRadius: {
      DEFAULT: "5px",
      sm: "4px",
      full: "50px",
    },
    fontFamily: {
      sans: ["ABC Monument Grotesk Unlicensed Trial", "Inter", "sans-serif"],
    },
    extend: {
      colors: {
        yolk: "#CCFF00",
        eggshell: "#F8F8F8",
        stone: {
          DEFAULT: "#A4A4A4",
          light: "#cbd6e0",
        },
        dark: "#030303",
      },
    },
  },
  plugins: [],
};
