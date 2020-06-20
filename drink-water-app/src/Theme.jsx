import React from "react";
import { ThemeProvider } from "styled-components";

const theme = {
  colors: {
    powderWhite: "#F9F7EB",
    waterBlue: "#6eb5e8",
    lightBlue: "#AFDBD2",
    onyx: "#36313D",
    darkGrey: "#282c34"
  },
  fonts: ["sans-serif", "Roboto"],
  fontSizes: {
    small: "1em",
    medium: "2em",
    large: "3em"
  }
}

const Theme = ({ children }) => (
  <ThemeProvider theme={theme}>{children}</ThemeProvider>
);

export default Theme;