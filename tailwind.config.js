/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
         graySpotify: {
          50: '#1A1A1A',
           100: '#121212',
           200: '#2A2A2A',
         },
         greenSpotify: {
           100: '#2AD164',
         },
      }
    },
  },
  plugins: [],
}