/** @type {import('tailwindcss').Config} */
export const content = [
  "./components/**/*.{js,vue,ts}",
  "./layouts/**/*.vue",
  "./pages/**/*.vue",
  "./plugins/**/*.{js,ts}",
  "./nuxt.config.{js,ts}",
  "./app.vue",
];
export const theme = {
  extend: {
    boxShadow: {
      "3xl": "4px 12px 30px 6px rgba(0,0,0,.09)",
    },
  },
};
export const plugins = [];
