/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#F25C05", // Dark background (e.g., deep purple/blue)
        },
        secondary: {
          DEFAULT: "#251e21",
        },
        muted: {
          DEFAULT: "#F1F1F1",
          dark: "#666666",
        },
      },
    },
  },
  plugins: [],
};
