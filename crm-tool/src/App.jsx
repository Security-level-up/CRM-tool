import "./App.css";
import Dashboard from "./pages/Dashboard";
import Login from "./pages/Login";
import Pipeline from "./pages/Pipeline";
import ViewOpp from "./pages/ViewOpp";
import NewOpp from "./pages/NewOpp";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
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
  );
}

export default App;
