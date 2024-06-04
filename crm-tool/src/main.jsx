import ReactDOM from "react-dom/client"; // Change the import statement
import { ChakraProvider } from "@chakra-ui/react";
import theme from "./theme";
import App from "./App.jsx";
import "./index.css";
import { Amplify } from "aws-amplify";
import awsExports from "./aws-exports";

Amplify.configure(awsExports);

ReactDOM.createRoot(document.getElementById("root")).render(
  <ChakraProvider theme={theme}>
    <App />
  </ChakraProvider>
);
