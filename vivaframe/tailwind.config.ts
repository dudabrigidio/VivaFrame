import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        white: "#ffffff",
        ice: "#edf0f2",
        grayLight: "#606060",
        grayDark: "#3c3d45",
        blackCustom: "#231f20",
      },
      fontFamily: {
        sans: ["DM Sans", "sans-serif"],
        spartan: ["League Spartan", "sans-serif"],
      },
      screens: {
        xs: {'max': '400px'},
        sm: {'max': '640px'},   // Até 640px para sm
        md: {'max': '769px'},   // Até 768px para md
        lg: {'max': '1025px'},  // Até 1024px para lg
        xl: {'max': '1280px'},  // Até 1280px para xl
      },
    },
  },
  plugins: [],
} satisfies Config;
