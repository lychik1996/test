import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        eudoxus: ['Eudoxus Sans', 'sans-serif'],
      },
      colors:{
        chadBlue30:'rgb(150, 202, 247)',
        darkBlue60:'rgb(93, 127, 163)',
        darkBlue80:'rgb(147, 168, 193)',
        darkBlue20:'rgb(19, 66, 103)',
        shade40:'rgb(79, 99, 125)',
        shade80:'rgb(195, 202, 213)',
        chadBlue:'rgb(50, 171, 242)'
      },
      backgroundColor:{
        darkBlue20:'rgb(19, 66, 103)',
        chadBlue30:'rgb(150, 202, 247)',
        chadBlue0:'rgb(50, 171, 242)',
        shade100:'rgb(248, 249, 252)',
        darkBlue95:'rgb(201, 211, 224)'
      },
      borderColor:{
        chadBlue0:'rgb(50, 171, 242)',
        darkBlue60:'rgb(93, 127, 163)',
        darkBlue95:'rgb(201, 211, 224)'
      }
    },
    boxShadow:{
      signR:'0px 5px 20px 0px rgba(108, 117, 139, 0.2)'
    }
  },
  plugins: [],
};
export default config;
