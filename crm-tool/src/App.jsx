import "./App.css";
import Dashboard from "./pages/Dashboard";
import Login from "./pages/Login";
import Pipeline from "./pages/Pipeline";
import ViewOpp from "./pages/ViewOpp";
import NewOpp from "./pages/NewOpp";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Authenticator } from "@aws-amplify/ui-react";
import "@aws-amplify/ui-react/styles.css";

function App() {
  return (
    <Authenticator
      loginMechanism={["email"]}
      socialProviders={["google"]}
      signUpAttributes={["email", "phone_number"]}
    >
      <BrowserRouter>
        <main>
          <Routes>
            <Route path="/" element={<Pipeline />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/login" element={<Login />} />
            <Route path="/viewOpp" element={<ViewOpp />} />
            <Route path="/newOpp" element={<NewOpp />} />
          </Routes>
        </main>
      </BrowserRouter>
    </Authenticator>
  );
}

export default App;
