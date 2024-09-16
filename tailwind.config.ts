import type { Config } from "tailwindcss";
import { colors } from "./src/Styles/colors";
import fontFamily from "./src/Styles/fontFamily";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors,
      fontFamily,
    },
  },
  plugins: [],
};
export default config;
