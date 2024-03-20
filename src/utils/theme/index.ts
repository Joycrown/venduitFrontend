import { extendTheme } from "@chakra-ui/react";


const theme = extendTheme({
  components: {
    // Button,
    // Input,
  },
  colors: {
    brand: {
      primary:
        "linear-gradient(90deg, rgba(97, 101, 215, 0.31) 0%, rgba(69, 161, 245, 0.53) 100%);",
      secondary: "#263238",
      gray: "#D9D9D9",
      success: "#05C761",
      dark: "#151313",
    },
  },
  fonts: {
    body: "Poppins, sans-serif",
    heading: "Poppins, sans-serif",
  },
  fontSizes: {
    xxs: "0.62rem",
    xs: "0.75rem",
    sm: "0.875rem",
    md: "1rem",
    lg: "1.125rem",
    xl: "1.25rem",
    "2xl": "1.5rem",
    "3xl": "1.875rem",
    "4xl": "2.25rem",
    "5xl": "3rem",
    "6xl": "3.75rem",
    "7xl": "4.5rem",
    "8xl": "6rem",
    "9xl": "8rem",
  },
  fontWeights: {
    hairline: 100,
    thin: 200,
    light: 300,
    normal: 400,
    medium: 500,
    semibold: 600,
    bold: 700,
  },
  breakpoints: {
    sm: "320px",
    md: "768px",
    lg: "960px",
    xl: "1200px",
    "2xl": "1536px",
  },
});

export default theme;
