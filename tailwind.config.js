/** @type {import('tailwindcss').Config} */

const defaultTheme = require("tailwindcss/defaultTheme")

module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens: {
      xs: "475px",
      lmd: "850px",
      ...defaultTheme.screens,
    },
    extend: {
      colors: {
        background: "#000000",
        grayBackground: "#0F0F0F",
        lightGray: "#1e1e1e",
        primary: "#f4b4f6",
        secondary: "#7684ff",
        subtleWhite: "rgba(234, 234, 234, 0.8)",
        dashboardActiveLink: "#161616ce",
      },
      fontFamily: {
        oswald: ["var(--font-oswald)"],
        anton: ["var(--font-anton)"],
        poppins: ["var(--font-poppins)"],
      },
      gridTemplateColumns: {
        "1-4": "1fr 4fr",
      },
    },
  },
  plugins: [],
}
