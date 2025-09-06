import React from "react";
import "./Global.css";
import SlideBar from "./Components/Slidebar";
import Dashboard from "./Pages/Dashboard";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

export default function App() {
  return (
    <Router>
      <div className="app-shell">
        <SlideBar />
        <div className="app-content">
          <Routes>
            <Route path="/dashboard" element={<Dashboard />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}
