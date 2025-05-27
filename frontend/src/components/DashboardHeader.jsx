import React, { useState } from "react";
import { Link } from "react-router-dom";
import './DashboardHeader.css';
import Vector from "../assets/Vector-logo.png";
import shadepro from "../assets/shadepro.png";
import thinkinnovative from "../assets/THINK INNOVATIVE.png";
import { FiMenu, FiX } from "react-icons/fi";
import SocialIcons from "../components/SocialIcons";
import "../components/SocialIcons.css";

const DashboardHeader = ({ activeLink, setActiveLink }) => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen((prev) => !prev);

  const sections = [
    { name: "Home", path: "/" },
    { name: "About Us", path: "/aboutus" },
    { name: "Services", path: "/services" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <header className="dashboard-header">
      <div className="header-center">
        <div className="left-section">
          <div className="logo-container">
            <img src={Vector} alt="Logo" />
            <div className="stacked-logos">
              <img src={shadepro} alt="Logo2" className="logo2" />
              <img src={thinkinnovative} alt="Logo3" className="logo3" />
            </div>
          </div>
        </div>


        <nav className={`nav-links ${menuOpen ? "open" : ""}`}>
          {sections.map(({ name, path }) => (
            <Link
              key={path}
              to={path}
              className={`${activeLink === path ? "active" : ""} ${name === "Services" ? "bold" : ""} ${name === "Home" ? "underline" : ""}`}
              onClick={() => {
                setActiveLink(path);
                setMenuOpen(false);
              }}
            >
              {name}
            </Link>
          ))}
        </nav>
      </div>
      <div className="right-icons">
        <div className="social-icons-wrapper">
          <SocialIcons />
        </div>
        <div className="menu-toggle mobile-only" onClick={toggleMenu}>
          <FiMenu size={24} />
        </div>
      </div>
    </header>
  );
};

export default DashboardHeader;