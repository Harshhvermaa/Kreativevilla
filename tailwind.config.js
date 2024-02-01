/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  prefix: "tw-",
  theme: {
        extend: {},
      },
  plugins: [],
  corePlugins: {
      preflight: false,
  }
}



