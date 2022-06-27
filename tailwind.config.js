/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: 'jit',
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      backgroundImage: {
        imgNotLoaded:
          "url('https://velog.velcdn.com/images/leejuhwan/post/c6ba33a7-5b87-4049-9cc9-129a332c4aa5/image.png')",
      },
    },
  },

  plugins: [],
};
