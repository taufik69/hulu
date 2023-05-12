/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    colors: {
      primary_color: "var(--primary_color)",
      primary_Text_color: "var(--primary_Text_color)",
      secendory_Text_color: "var(--secendory_Text_color)",
      banner_color: "var(--banner_color)",
      secondary_banner: "var(--secondary_banner)",
      fotter_color: "var(--fotter_color)",
    },
    container: {
      center: true,
      padding: {
        DEFAULT: "1rem",
        sm: "1rem",
        lg: "2rem",
        xl: "2rem",
        "2xl": "1rem",
      },
    },
    extend: {
      fontFamily: {
        fontFamily: ["Open Sans", "sans-serif"],
      },
      boxShadow: {
        customShadow: "inset 2px 11px 67px 47px rgba(0,0,0,0.57)",
      },
    },
  },
  plugins: [],
};
