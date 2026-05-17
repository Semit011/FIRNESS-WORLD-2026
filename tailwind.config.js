/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        midnight: "#05070d",
        carbon: "#0b111c",
        electric: "#0877ff",
        cyanline: "#22d3ee",
        steel: "#94a3b8",
        trophy: "#f8d55a",
      },
      boxShadow: {
        electric: "0 24px 90px rgba(8, 119, 255, 0.28)",
        premium: "0 28px 80px rgba(0, 0, 0, 0.48)",
      },
      backgroundImage: {
        "arena-grid":
          "linear-gradient(rgba(8,119,255,.12) 1px, transparent 1px), linear-gradient(90deg, rgba(8,119,255,.12) 1px, transparent 1px)",
      },
    },
  },
  plugins: [],
};
