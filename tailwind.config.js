/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      width: {
        wCalc: `calc(82px * 6 + 60px)`,
        w1110: "1110px",
        w654: "654px",
        w327: "327px",
        w256: "256px",
        w134: "134px",
        w127: "127px",
        w119: "119px",
        w82: "82px",
        w62: "62px",
      },
      height: {
        h82: "82px",
        h72: "72px",
      },
      colors: {
        blue: "#152938",
        blueLight: "#7191A5",
        blueLigher: "#BCCED9",
        gray: "#FCFCFC",
        yellow: "#FDA214",
      },
      skew: {
        90: "90deg",
      },
    },
  },
  plugins: [],
};
