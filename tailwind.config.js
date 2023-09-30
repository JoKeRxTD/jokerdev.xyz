import {nextui} from '@nextui-org/theme'

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
      "purple": {
        extend: "dark", // <- inherit default values from dark theme
        colors: {
          background: "#0D001A",
          foreground: "#ffffff",
          primary: {
            50: "#3B096C",
            100: "#520F83",
            200: "#7318A2",
            300: "#9823C2",
            400: "#c031e2",
            500: "#DD62ED",
            600: "#F182F6",
            700: "#FCADF9",
            800: "#FDD5F9",
            900: "#FEECFE",
            DEFAULT: "#DD62ED",
            foreground: "#ffffff",
          },
          focus: "#F182F6",
        },
        layout: {
          disabledOpacity: "0.3",
          radius: {
            small: "4px",
            medium: "6px",
            large: "8px",
          },
          borderWidth: {
            small: "1px",
            medium: "2px",
            large: "3px",
          },
        },
      },
      "blue": {
        extend: "dark", // <- inherit default values from dark theme
        colors: {
          background: "#0D001A",
          foreground: "#ffffff",
          primary: {
            50: "#001731",
            100: "#002D4C",
            200: "#00416E",
            300: "#005892",
            400: "#0072B7",
            500: "#0088D9",
            600: "#009DE8",
            700: "#00B2F7",
            800: "#00C7FF",
            900: "#00D9FF",
            DEFAULT: "#0088D9",
            foreground: "#ffffff",
          },
          focus: "#00B2F7",
        },
        layout: {
          disabledOpacity: "0.3",
          radius: {
            small: "4px",
            medium: "6px",
            large: "8px",
          },
          borderWidth: {
            small: "1px",
            medium: "2px",
            large: "3px",
          },
        },
      },
  },
  darkMode: "class",
  plugins: [nextui()],
}
