import { extendTheme } from "@chakra-ui/react";

const theme = extendTheme({
  colors: {
    brand: {
      turquoise: "#6181B3",
      grey: "#CBD5E0",
      black: "#1A202C",
      white: "#FFFFFF",
      light_grey: "#F9F9F9",
      orange: "#FF9678",
      maroon: "#974063",
      red: "#F54768",
      purple: "#41436A",
      navy: "#2A3950",
    },
  },
  fonts: {
    body: "'Roboto', sans-serif",
    heading: "'Russo One', sans-serif",
  },
});

export default theme;
