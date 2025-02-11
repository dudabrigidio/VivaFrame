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
    },
  },
  plugins: [],
} satisfies Config;
