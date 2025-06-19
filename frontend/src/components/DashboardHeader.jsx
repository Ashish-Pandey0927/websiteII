import React, { useState } from "react";
import { Link } from "react-router-dom";
import './DashboardHeader.css';
import estonsoft from "../assets/estonsoftlogo.svg";
import { FiMenu } from "react-icons/fi";
import { AiOutlineClose } from "react-icons/ai";
import SocialIcons from "../components/SocialIcons";
import "../components/SocialIcons.css";

const DashboardHeader = ({ activeLink, setActiveLink }) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [servicesDropdownOpen, setServicesDropdownOpen] = useState(false);


  const toggleMenu = () => setMenuOpen((prev) => !prev);

  const sections = [
    { name: "Home", path: "/" },
    { name: "About Us", path: "/aboutus" },
    {
      name: "Services", path: "/services",
      subLinks: [
        { name: "Web Development", path: "/services/webdevelopment" },
        { name: "Mobile Development", path: "/services/mobiledevelopment" },
        { name: "Cloud Services", path: "/services/cloudservices" },
        { name: "Quality Assurance", path: "/services/qualityassurance" },
        { name: "Salesforce", path: "/services/salesforce" },
        { name: "CI/CD DevOps", path: "/services/cicddevops" },
      ]
    },
    { name: "Blogs", path: "/blogs" },
    { name: "Portfolio", path: "/portfolio" },
    { name: "Contact", path: "/contact" },
  ];


  return (
    <header className="dashboard-header">
      <div className="header-center">
        <div className="left-section">
          <div className="logo-container">
            <img src={estonsoft} alt="Logo" className="logo" />
          </div>
        </div>

      </div>
     <div className="right-icons">
  <div className="social-icons-wrapper">
    <SocialIcons direction="column" />
  </div>

  <div className="mobile-menu-wrapper">
    <div className="menu-toggle mobile-only" onClick={toggleMenu}>
      {menuOpen ? <AiOutlineClose /> : <FiMenu />}
    </div>

    <nav className={`nav-links ${menuOpen ? "open" : ""}`}>
      {sections.map(({ name, path, subLinks }) => (
        <div
          key={path}
          className={`nav-item ${subLinks ? "has-dropdown" : ""}`}
          onMouseEnter={() => subLinks && setServicesDropdownOpen(true)}
          onMouseLeave={() => subLinks && setServicesDropdownOpen(false)}
        >
          <Link
            to={path}
            className={`nav-link ${activeLink === path ? "active" : ""} ${name === "Services" ? "bold" : ""}`}
            onClick={() => {
              setActiveLink(path);
              setMenuOpen(false);
            }}
          >
            {name}
          </Link>

          {subLinks && servicesDropdownOpen && (
            <div className="dropdown-menu">
              {subLinks.map((sub) => (
                <Link
                  key={sub.path}
                  to={sub.path}
                  className={`dropdown-link ${activeLink === sub.path ? "active" : ""}`}
                  onClick={() => {
                    setActiveLink(sub.path);
                    setMenuOpen(false);
                    setServicesDropdownOpen(false);
                  }}
                >
                  {sub.name}
                </Link>
              ))}
            </div>
          )}
        </div>
      ))}
    </nav>
  </div>
</div>

    </header>
  );
};

export default DashboardHeader;