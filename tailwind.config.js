const { transform } = require('next/dist/build/swc');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens: {

      sm: '640px', // Small screens

      md: '768px', // Medium screens

      lg: '1024px' // Large screens

    },
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",

        accent: "#679877",
        accentGradient: "linear-gradient(90deg, #679877 0%, #BDBD75 100%)",
        primary: "#070907",
        secondary: "#161816",
        tertiary: "#222622",
        white100: "hsla(240, 2%, 88%, 1.0)",
        white90: "hsla(240, 2%, 88%, 0.9)",
        white75: "hsla(240, 2%, 88%, 0.75)",
        white50: "hsla(240, 2%, 88%, 0.5)",
        white25: "hsla(240, 2%, 88%, 0.25)",
        white15: "hsla(240, 2%, 88%, 0.15)",
        white5: "hsla(240, 2%, 88%, 0.05)",

      },
      fontFamily: {
        ubuntu: ["var(--font-ubuntu)"],
        jetBrainsMono: ["var(--font-jetBrains-mono)"],

      },
      fontSize: {
        'body-lg': '1rem',
        'body': '.875rem',

        "kitmin": '0.64rem',
        "sm": '0.8rem',
        base: '1rem',
        "h1": '3.815rem',
        'h2': '3.052rem',
        'h3': '2.441rem',
        'h4': '1.953rem',
        'h5': '1.563rem',
        'h6': '1.25rem',
      },
      keyframes: {
        "blur-fade-in": {
          "0%": {opacity: 0, filter: "blur(10px)"},
          "100%": {opacity: 1, filter: "blur(0px)"},
        },
        "scroll-horizontal-right": {
          "0%": {transform: "translate-x-0"},
          "100%": {transform: "-translate-x-full"},
        },
        "bg-pan-bottom": {
          '0%': { backgroundPosition: '0% 50%' },
          '100%': { backgroundPosition: '100% 50%' },
        },
      },
      animation: {
        blurfadein: 'blur-fade-in 5s cubic-bezier(0.680, -0.550, 0.265, 1.550) both 1',
        scrollHorizontalRight: 'scroll-horizontal-right 10s ease-in-out infinity',
        bgPanBottom: 'bg-pan-bottom 30s linear infinite'
      },
      backgroundImage: {
        "about-hero": "url('../public/images/about/about-hero.png')"
      },
    },
  },
  plugins: [],
};

