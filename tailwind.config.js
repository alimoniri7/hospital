/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "black-gray": "#121212",
        "dark-gray": "#363636",
        "gray": "#9a9a9a",
        "light-gray": "#E6E6E6",
        "white-gray": "#F8F8F8",
        pink: "#E91E63",
        yellow: "#F0CC84",
        error: "#D61313",
        ok: "#0BB17F",
      },
      keyframes: {
        bubble: {
          "0%": { width: "0px", height: '0px', opacity: '0' },
          "50%": { opacity: '0.1' },
          "100%":{opacity: '0', width: "100%", height: '250%'}
        }
      },
      animation: {
        bubble: "bubble 300ms ease-out"
      }
    },
  },
  plugins: [],
}

