// tailwind.config.js
/** @type {import('tailwindcss').Config} */
module.exports = {
    darkMode: ["class"],
    content: [
      './pages/**/*.{js,jsx}',
      './components/**/*.{js,jsx}',
      './app/**/*.{js,jsx}',
      './src/**/*.{js,jsx}',
    ],
    prefix: "",
    theme: {
      container: {
        center: true,
        padding: "2rem",
        screens: {
          "2xl": "1400px",
        },
      },
      extend: {
        colors: {
          border: "hsl(var(--border))",
          input: "hsl(var(--input))",
          ring: "hsl(var(--ring))",
          background: "hsl(var(--background))",
          foreground: "hsl(var(--foreground))",
          primary: {
            DEFAULT: "#1e8e3e",
            foreground: "hsl(var(--primary-foreground))",
          },
          secondary: {
            DEFAULT: "#34a853",
            foreground: "hsl(var(--secondary-foreground))",
          },
          // Add other colors as needed
        },
        // Other theme extensions
      },
    },
    plugins: [require("tailwindcss-animate")],
  }