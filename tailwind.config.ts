import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        bg: "#070814",
        primary: "#00FFB2",
        accent: "#B0FFE7",
        btnalt: "#433F40",
        title: "#FFFFFF",
        body: "#D5E9E5",
      },
      fontFamily: {
        sans: ["var(--font-geist-sans)"],
        display: ["var(--font-geist-sans)"],
      },
    },
  },
  plugins: [],
};

export default config;
