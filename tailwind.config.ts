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
        "accent-1": "#2FB95D",
        "accent-2": "#043A3A",
        "accent-shade": "#2aa754",
        "accent-tint": "#1d4e4e",
        Paragraph: "#525252",
      },
    },
  },
  plugins: [],
};
export default config;
