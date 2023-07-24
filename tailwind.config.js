/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {
      fontFamily: {
        monserrat: ['Montserrat', 'sans-serif'],
        fira: ['Fira Sans', 'sans-serif']
      },
      colors: {
        'soft-yellow': '#ffeb3b',
        'dark-gray': '#333333',
        'soft-black': '#1a1a1a',
        'soft-yellow-tint': '#fff176',
        'soft-yellow-shade': '#fdd835'
      }
    }
  },
  plugins: []
};
