module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {},
    boxShadow: {
      sm: "0 1px 2px 0 rgba(0, 0, 0, 0.05)",
      DEFAULT:
        "0 1px 3px 0 rgba(0, 0, 0, 0.3), 0 1px 2px 0 rgba(0, 0, 0, 0.06)",
      md: "0 4px 6px -1px rgba(0, 0, 0, 0.4), 0 2px 4px -1px rgba(0, 0, 0, 0.06)",
      lg: "0 10px 15px -3px rgba(0, 0, 0, 0.5), 0 4px 6px -2px rgba(0, 0, 0, 0.05)",
      xl: "0 20px 25px -5px rgba(0, 0, 0, 0.5), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
      "2xl": "0 25px 50px -12px rgba(0, 0, 0, 0.25)",
      "3xl": "0 35px 60px -15px rgba(0, 0, 0, 0.3)",
      inner: "inset 0 2px 4px 0 rgba(0, 0, 0, 0.06)",
      none: "none",
    },
    colors: ({ colors }) => ({
      black: colors.black,
      white: colors.white,
      gray: {
        50: "#fafafa",
        100: "#f5f5f5",
        200: "#e5e5e5",
        300: "#d4d4d4",
        400: "#a3a3a3",
        500: "#737373",
        600: "#525252",
        650: "#494949",
        700: "#404040",
        750: "#333333",
        800: "#262626",
        850: "#1f1f1f",
        900: "#171717",
        950: "#141414",
      },
      blue: {
        150: "#ECEEFD",
        200: "#D9DCFC",
        250: "#C7CBFA",
        300: "#B4BAF8",
        350: "#A1A8F7",
        400: "#8D96F6",
        450: "#7A84F5",
        500: "#5865F2",
        550: "#5461F2",
        600: "#4150F1",
        650: "#2E3EEF",
        700: "#1B2DEE",
        750: "#1123E4",
        800: "#1020D1",
        850: "#0E1DBE",
        900: "#0D1AAB",
      },
      green: {
        150: "#ECFDF2",
        200: "#D9FCE4",
        250: "#C7FAD7",
        300: "#B4F8CA",
        350: "#A1F7BC",
        400: "#8DF6AF",
        450: "#7AF5A1",
        500: "#57F287",
        550: "#54F286",
        600: "#41F179",
        650: "#2EEF6B",
        700: "#1BEE5E",
        750: "#11E454",
        800: "#10D14D",
        850: "#0EBE46",
        900: "#0DAB3F",
      },
      pink: {
        100: "#FBDAEB",
        150: "#F9C8E1",
        200: "#F7B6D8",
        250: "#F391C5",
        300: "#F391C5",
        350: "#F17EBB",
        400: "#EF6BB2",
        450: "#EE59A8",
        500: "#EB459E",
        550: "#EA3495",
        600: "#E8218B",
        650: "#DE1781",
        700: "#CB1576",
        750: "#B9136C",
        800: "#A61161",
        850: "#941056",
        900: "#810E4B",
      },
      yellow: {
        150: "#FEFCEB",
        200: "#FEF8D7",
        250: "#FEF5C2",
        300: "#FEF2AE",
        350: "#FEEF9A",
        400: "#FEEC85",
        450: "#FEE971",
        500: "#FEE75C",
        550: "#FEE348",
        600: "#FEE034",
        650: "#FEDD20",
        700: "#FED90B",
        750: "#F4CF01",
        800: "#DFBE01",
        850: "#CBAD01",
        900: "#B79B01",
      },
      red: {
        100: "#FCD9DA",
        150: "#FAC7C8",
        200: "#F8B4B5",
        250: "#F7A1A3",
        300: "#F58F91",
        350: "#F37C7E",
        400: "#F16A6C",
        450: "#EF575A",
        500: "#ED4245",
        550: "#EC3235",
        600: "#EA1F22",
        650: "#E01518",
        700: "#CD1316",
        750: "#BB1114",
        800: "#A81012",
        850: "#950E10",
        900: "#830C0E",
      },
    }),
  },
  plugins: [
    require("@tailwindcss/forms")({
      strategy: "class",
    }),
  ],
};
