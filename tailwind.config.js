/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#0A1F44", // Deep Blue
        accent: "#176999",  // Intermediate Blue
        whatsapp: "#25D366", // WhatsApp Green
        gold: "#C9A84C",     // Warm Gold
        background: "#FFFFFF",
        surface: "#FAFAFA",
        text: {
          dark: "#2A3342",
          muted: "#556987",
        }
      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
        inter: ["Inter", "sans-serif"],
      },
      borderRadius: {
        '2xl': '1rem',
        '3xl': '1.5rem',
      },
    },
  },
  plugins: [],
}
