import {nextui} from '@nextui-org/theme'

const defaultTheme = require("tailwindcss/defaultTheme");

const colors = require("tailwindcss/colors");

const {
  default: flattenColorPalette,
} = require("tailwindcss/lib/util/flattenColorPalette");

/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
      // './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
      './src/components/**/*.{js,ts,jsx,tsx,mdx}',
      './src/app/**/*.{js,ts,jsx,tsx,mdx}',
      './node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}'
    ],
    theme: {
      themes: {
        "purple-dark": {
          extend: "purple-dark", // <- inherit default values from dark theme
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
        mytheme: {
          // custom theme
          "purple-dark": {
            extend: "purple-dark", // <- inherit default values from dark theme
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
          animation: {
            'border-spin': 'border-spin 7s linear infinite',
          },
          colors: {
            primary: {
              DEFAULT: "#BEF264",
              foreground: "#000000",
            },
            focus: "#BEF264",
          },
        }
      },
    },
    transpilePackages: ['three'],
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
