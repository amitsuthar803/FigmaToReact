/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#FF5555",
        secondary: "#7F7F7D",
        // Include any other custom colors here
      },
      fontSize: {
        "x-small": "0.75rem",
        small: "0.875rem",
        base: "1rem",
        large: "1.25rem",
        "x-large": "1.5rem",
        "2x-large": "2rem",
      },
      boxShadow: {
        small: "0 1px 2px rgba(0, 0, 0, 0.1)",
        base: "0 2px 4px rgba(0, 0, 0, 0.1)",
        large: "0 4px 8px rgba(0, 0, 0, 0.1)",
      },
    },
  },
  plugins: [],
};
