export default {
  content: ["./index.html", "./src/**/*.{vue,js,ts}"],
  theme: {
    extend: {
      colors: {
        aqua: "#0599B3",
        orange: "#F59E00",
        blue: "#0090F5",
        background: "#F8F7FC",
        window: "#fff6f6",
      },
      fontFamily: {
        pixel: ['"Press Start 2P"', "monospace"],
      },
      boxShadow: {
        custom: "1px 2px 1px 1px #0000001a",
      },
      borderRadius: {
        pixel: "4px",
      },
    },
  },
  plugins: [],
};
