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
            <Route path="/" element={<Dashboard />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="*" element={<div>Still in development</div>} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}
