/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily:{
        satoshi: "Satoshi",
        "Neue-md": "Neue_medium",
        "Neue-lt": "Neue_Light",
      },
      colors: {
        btn: "#F5F19C"
      }
    },
  },
  plugins: [],
}