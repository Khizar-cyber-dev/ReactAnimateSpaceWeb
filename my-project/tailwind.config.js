/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#351858",
        secondry: "#f21b74",
      },
      boxShadow: {
        "custom-inset": "3px 3px 4px rgba(0, 0, 0, 0.25), inset 2px 5px 6px rgba(255, 255, 255, 0.37), inset 0px -5px 6px rgba(0, 0, 0, 0.37)",
      },
      container: {
        center: true,
        padding: {
          DEFAULT: "1rem",
          sm: "2rem",
          lg: "3rem",
          xl: "4rem",
          "2xl": "6rem",
        },
      },
      fontFamily: {
        body: ["Poppins", "sans-serif"],
      },
      keyframes: {
        rocket: {
          "0%, 100%": {
            transform: "rotate(20deg) translate(0px, 0px)",
          },
          "50%": {
            transform: "rotate(20deg) translate(30px, 30px)",
          },
        },
      },
      animation: {
        rocket: "rocket 3s linear infinite",
      },
    },
  },
  plugins: [],
}
