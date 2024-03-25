/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  darkMode: "selector",
  theme: {
    colors: {
      base: "#1e1e2e",
      "base-light": "#eff1f5",
      yellow: "#f9e2af",
      "yellow-light": "#df8e1d",
      lavender: "#b4befe",
      surface2: "#585b70",
      "surface2-light": "#acb0be",
      text: "#cdd6f4",
      "text-light": "#4c4f69",
      mauve: "#8839ef	",
    },
    extend: {},
  },
  plugins: [],
};
