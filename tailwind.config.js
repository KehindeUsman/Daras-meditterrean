/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/*.html"],
  theme: {
    extend: {
      spacing:{
        '100' : "560px",
        '200' : "76px",
        '81' : "300px",
        '02' : "535px",
         '01' : "500px",
         '215' : "215.63px",
         'sefen' : "76px",
         'hun' : "480px",
         'hand' : "750px",
         'handy' : "820px",
         'chill' : "430px",
         'star' : "370px"
      },
      borderWidth:{
        '10': '10px'
      },

      scale:{
        '320' : "3.2"
      },

      lineheight:{
        'type' : "80px"
      }
    },
  },
  plugins: [],
}

