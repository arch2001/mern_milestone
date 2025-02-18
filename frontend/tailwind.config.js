/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",],
 
  theme:{
    extend:{
      colors:{
      primary:'#f0f2f5',
      secondary:'#FFA500',
      tertiary:'#222222',
      slate:{
        10:'#f1f3f4'
      },
      green:{
        50:'#30AF5B',
        90:'#292C27',

      },
      gray:{
        10:'#EEEEEE',
        20:'#A2A2A2',
        30:'#787878',
        50:'#585858',
        90:'#141414'
        
      },

    },
    backgroundImage:{
      hero:"url('/src/assets/bgecom.png')",
      banneroffer:"url('/src/assets/banneroffer.png')",
      
    },
    screens:{
      xs:'400px',
      '3xl':'1680px',
      '4xl':'2200px',
    },
    mexwidth:{
      '10xl':'1512px',
    },
    borderRadius:{
      'Sxl':'40px',
    },
  },
},

  plugins: [],
}

