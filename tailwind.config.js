/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    'node_modules/flowbite-react/lib/esm/**/*.js',
  ],

  darkMode: "class",
  theme: {
    extend: {

      rotate: {
        '20': '20deg',
        '45': '45deg',
      },
      translate: {
        '8': '2rem',
        '4': '1rem',
      },
    },
  },

 


  plugins: [
    require('flowbite/plugin')({
        charts: true,
    }),
    // ... other plugins
  ]
}

