import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        mint: "#7FB4B4",
        "mint-hover": "#428C8E",
        "mint-selected": "#217277",
        "mint-button-hover": "#2B606A",
      },
    },
  },
  plugins: [],
};

export default config;

