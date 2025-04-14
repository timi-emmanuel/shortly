/** @type {import('tailwindcss').Config} */
export default {
  content:  [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        cyan:"hsl(180, 66%, 49%)",
        darkViolet: "hsl(257, 27%, 26%)",
        Red:"hsl(0, 87%, 67%)",
        Gray: "hsl(0, 0%, 75%)",
        grayishViolet: "hsl(257, 7%, 63%)",
        veryDarkBlue: "hsl(255, 11%, 22%)",
        veryDarkViolet: "hsl(260, 8%, 14%)"
      },
      fontFamily: {
        poppins: ['poppins', 'sans-serif'],
      },
      screens:{
        sm: '640px',
        md: '768px',
        lg: '1024px',
        xl: '1280px',
        '2xl': '1536px',
      }
    },
  },
  plugins: [],
}

