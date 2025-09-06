import React from "react";
import { Home, BarChart2, Settings, FileText } from "lucide-react";
import { NavLink } from "react-router-dom"; // 👈 import NavLink
import "./Style/Slidebar.css";

export default function Slidebar() {
  return (
    <aside className="sidebar">
      <h1 className="logo">Battery Management</h1>
      <nav className="menu">
        <NavLink 
          to="/dashboard" 
          className={({ isActive }) => `menu-item ${isActive ? "active" : ""}`}
        >
          <Home size={20} /> Dashboard
        </NavLink>

        <NavLink 
          to="/realtime" 
          className={({ isActive }) => `menu-item ${isActive ? "active" : ""}`}
        >
          <BarChart2 size={20} /> Real-time Data
        </NavLink>

        <NavLink 
          to="/settings" 
          className={({ isActive }) => `menu-item ${isActive ? "active" : ""}`}
        >
          <Settings size={20} /> Settings
        </NavLink>
      </nav>
    </aside>
  );
}
