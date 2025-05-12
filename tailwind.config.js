export default {
  content: ["./index.html", "./src/**/*.{vue,js,ts}"],
  theme: {
    extend: {
      colors: {
        primary: "#FF0196",
        aqua: "#0599B3",
        orange: "#F59E00",
        blue: "#0090F5",
        background: "#fdf1e7",
        window: "#fff6f6",
      },
      fontFamily: {
        pixel: ['"Press Start 2P"', "monospace"],
      },
      boxShadow: {
        pixel: "inset 0 -2px 0 #000",
      },
      borderRadius: {
        pixel: "4px",
      },
    },
  },
  plugins: [],
};
