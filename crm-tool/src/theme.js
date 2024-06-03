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
      blue: "#4D6891",
    },
  },
  fonts: {
    body: "'Roboto', sans-serif",
    heading: "'Roboto', sans-serif",
  },
  shadows: {
    "custom-orange":
      "0 4px 6px -1px rgba(255, 150, 120, 0.5), 0 2px 4px -2px rgba(255, 150, 120, 0.3)",
    "custom-maroon":
      "0 4px 6px -1px rgba(151, 64, 99, 0.5), 0 2px 4px -2px rgba(151, 64, 99, 0.3)",
    "custom-navy":
      "0 4px 6px -1px rgba(42, 57, 80, 0.5), 0 2px 4px -2px rgba(42, 57, 80, 0.3)",
    "custom-red":
      "0 4px 6px -1px rgba(245, 71, 104, 0.5), 0 2px 4px -2px rgba(245, 71, 104, 0.3)",
    "custom-purple":
      "0 4px 6px -1px rgba(65, 67, 106, 0.5), 0 2px 4px -2px rgba(65, 67, 106, 0.3)",
    "custom-blue":
      "0 4px 6px -1px rgba(77, 104, 145, 0.5), 0 2px 4px -2px rgba(77, 104, 145, 0.3)",
  },
});

export default theme;
