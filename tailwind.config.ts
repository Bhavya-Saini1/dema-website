import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    colors: {
      transparent: "transparent",
      current: "currentColor",
      inherit: "inherit",
      red: {
        DEFAULT: "#DF3D2C",
        dark: "#B5301F",
      },
      navy: {
        DEFAULT: "#1A3A5C",
      },
      neutral: {
        50: "#F5F7F9",
        100: "#E9EDF1",
        200: "#D4DBE2",
        300: "#B1BCC9",
        400: "#8393A5",
        500: "#546A83",
        600: "#35516E",
        700: "#203C5B",
        800: "#1A3A5B",
        900: "#10263C",
        950: "#081421",
      },
    },
    extend: {
      fontFamily: {
        sans: ["var(--font-sans)", "ui-sans-serif", "system-ui", "sans-serif"],
        mono: ["var(--font-mono)", "ui-monospace", "SFMono-Regular", "monospace"],
      },
      keyframes: {
        marquee: {
          from: { transform: "translateX(0)" },
          to: { transform: "translateX(-50%)" },
        },
      },
      animation: {
        marquee: "marquee 50s linear infinite",
      },
    },
  },
  plugins: [],
};

export default config;
