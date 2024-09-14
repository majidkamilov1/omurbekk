/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      screens: {
        tall: { raw: "(min-width: 420px)" },
      },
      colors: {
        myRed: "rgb(160, 14, 6)",
      },
      borderRadius: {
        my24: "24px",
        my30: "30px",
        my10: "10px",
      },
    },
  },
  plugins: [],
};
