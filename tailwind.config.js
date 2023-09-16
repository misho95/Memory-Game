/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      width: {
        wCalc: `calc(82px * 6 + 60px)`,
        w1110: "1110px",
        w689: "689px",
        w654: "654px",
        w572: "572px",
        w327: "327px",
        w326_8: "326.88",
        w256: "256px",
        w134: "134px",
        w127: "127px",
        w119: "119px",
        w118: "118px",
        w82: "82px",
        w72_5: "72.54px",
        w62: "62px",
        w46_8: "46.88px",
      },
      height: {
        h118: "118px",
        h82: "82px",
        h72_5: "72.54px",
        h72: "72px",
        h46_8: "46.88px",
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
