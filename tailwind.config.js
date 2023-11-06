/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      animation: {
        "background-gradient-animation": "background-gradients 5s ease-in-out infinite",
      },
      keyframes: {
        "background-gradients": {
          "0%": {
            "background-position": "0% 50%",
          },
          "50%": {
            "background-position": "100% 50%",
          },
          "100%": {
            "background-position": "0% 100%",
          },
        },
      },
    },
  },
  plugins: [],
};
