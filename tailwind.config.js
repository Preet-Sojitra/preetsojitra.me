/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#000000",
        primary: "#f4b4f6",
        secondary: "#7684ff",
        "font-clr": "rgba(234, 234, 234, 0.8)",
      },
      fontFamily: {
        oswald: ["var(--font-oswald)"],
      },
    },
  },
  plugins: [],
}
