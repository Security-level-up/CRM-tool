import React from "react";
import ReactDOM from "react-dom/client"; // Change the import statement
import { ChakraProvider } from "@chakra-ui/react";
import theme from "./theme";
import App from "./App.jsx";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <ChakraProvider theme={theme}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </ChakraProvider>
);
