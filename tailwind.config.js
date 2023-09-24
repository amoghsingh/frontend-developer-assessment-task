/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "primary-color": "#1597E4",
        "card-border": "#E6E6E6",
        "placeholder-color": "#7A7A7A",
        "input-border-color": "#7A7A7A",
        "text-color": "#212121",
        "font-color": "#FAFAFA",
        "error-color": "#D86161",
      },
    },
  },
  plugins: [],
};
