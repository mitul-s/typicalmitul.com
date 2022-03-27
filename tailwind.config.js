module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    borderRadius: {
      DEFAULT: "5px",
      sm: "4px",
      md: "6px",
      lg: "12px",
      full: "50px",
    },
    fontFamily: {
      sans: ["ABC Monument Grotesk Unlicensed Trial", "Inter", "sans-serif"],
    },
    extend: {
      zIndex: {
        "-1": "-1",
      },
      spacing: {
        yeat: "0.625rem",
      },
      aspectRatio: {
        "3/2": "3 / 2",
        "2/3": "2 / 3",
      },
      colors: {
        // yolk: "#CCFF00",
        yolk: "#0EFC5F",
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
