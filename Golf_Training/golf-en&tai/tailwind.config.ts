import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        "deep-black": "#05060A",
        "neon-cyan": "#00F3FF",
        "neon-mint": "#5AF3C1",
        "visa-blue": "#3B82F6"
      }
    }
  },
  plugins: [],
};

export default config;
