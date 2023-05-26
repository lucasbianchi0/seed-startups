/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './src/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
      colors:{
        background: '#FFFFFF',
        primmaryColor:'#768CFF',
        bannerBg:'#DCE1FF',
        bannerBg2:'#A5BAFF'
      }
    },
   
  },
  plugins: [],
}