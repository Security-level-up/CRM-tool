import { extendTheme } from "@chakra-ui/react";

const theme = extendTheme({
	colors: {
		brand: {
			turquoise: "#2CB67D",
			grey: "#CBD5E0",
			black: "#1A202C",
		},
	},
	fonts: {
		body: "Helvetica, sans-serif",
		heading: "Helvetica, sans-serif",
	},
});

export default theme;
