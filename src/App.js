import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import Maintenance from "./components/Maintenance";

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/maintenance" element={<Maintenance />} />
          <Route path="/pricing" element={<Maintenance />} />
          <Route path="/contact" element={<Maintenance />} />
        </Routes>
      </Router>
    </div>
  );
}
export default App;
