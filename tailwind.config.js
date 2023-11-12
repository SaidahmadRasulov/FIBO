/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      screens: {
        sm: "0",
        md: "460px",
        lg: "768px",
        xl: "1024px",
      },
    },
  },
  plugins: [],
};
