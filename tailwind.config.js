import {nextui} from '@nextui-org/theme'

const defaultTheme = require("tailwindcss/defaultTheme");

const colors = require("tailwindcss/colors");

const {
  default: flattenColorPalette,
} = require("tailwindcss/lib/util/flattenColorPalette");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
      "blue": {
        extend: "dark", // <- inherit default values from dark theme
        colors: {
          background: "#0D001A",
          foreground: "##f2eafa",
          primary: {
            50: "##180828",
            100: "##301050",
            200: "##481878",
            300: "##6020a0",
            400: "##7828c8",
            500: "##9353d3",
            600: "##ae7ede",
            700: "##c9a9e9",
            800: "##e4d4f4",
            900: "##f2eafa",
            DEFAULT: "##6020a0",
            foreground: "##f2eafa",
          },
          focus: "#00B2F7",
        },
      },
      mytheme: {
        // custom theme
        extend: "dark",
        colors: {
          primary: {
            DEFAULT: "#BEF264",
            foreground: "#000000",
          },
          focus: "#BEF264",
        },
      }
      
  },
  darkMode: "class",
  plugins: [
    nextui(),
    addVariablesForColors,
  ],
};

function addVariablesForColors({ addBase, theme }) {
  let allColors = flattenColorPalette(theme("colors"));
  let newVars = Object.fromEntries(
    Object.entries(allColors).map(([key, val]) => [`--${key}`, val])
  );

  addBase({
    ":root": newVars,
  });
}
