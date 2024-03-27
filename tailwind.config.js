/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        bai_jamjuree: ["Bai Jamjuree", "sans-serif"]
      },
      colors: {
        strong_cyan: "hsl(171, 66%, 44%)",
        light_blue: "hsl(233, 100%, 69%)",
        dark_grayish_blue: "hsl(210, 10%, 33%)",
        grayish_blue: "hsl(201, 11%, 66%)",
      },
      fontSize: {
        base_font_size: "18px",
      },
      padding: {
        main_px: "1.3em",
        main_py: "7em"
      }
    },
  },
  plugins: [],
}