/** @type {import('tailwindcss').Config} */
export default {
  purge: ["./src/**/*.{js,jsx,ts,tsx}"],
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#D1FAE5",
        secondary: "#A7F3D0"
      },
      container: {
        center: true,
        padding: {
          DEFAULT: "1.3rem",
          sm: "2rem",
          md: "3rem",
          lg: "5rem",
          xl: "7rem",
        }
      }
    },
  },
  plugins: [],
}

