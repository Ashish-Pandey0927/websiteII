import React, { useState, useCallback } from "react";
import { Link } from "react-router-dom";
import './DashboardHeader.css';
import estonsoft from "../assets/estonsoftlogo.svg";
import { FiMenu } from "react-icons/fi";
import { AiOutlineClose } from "react-icons/ai";
import SocialIcons from "../components/SocialIcons";
import "../components/SocialIcons.css";

const sections = [
  { name: "Home", path: "/" },
  { name: "About Us", path: "/aboutus" },
  {
    name: "Services", path: "/services", subLinks: [
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

const DashboardHeader = ({ activeLink, setActiveLink }) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [servicesDropdownOpen, setServicesDropdownOpen] = useState(false);

  const toggleMenu = useCallback(() => {
    setMenuOpen(prev => !prev);
  }, []);

  const handleNavClick = useCallback((path, hasSubLinks) => {
    setActiveLink(path);
    setMenuOpen(false);
    if (window.innerWidth <= 768 && hasSubLinks) {
      setServicesDropdownOpen(prev => !prev);
    } else if (hasSubLinks) {
      setServicesDropdownOpen(true);
    } else {
      setServicesDropdownOpen(false);
    }
  }, [setActiveLink]);

  const handleDropdownToggle = useCallback((e) => {
    e.preventDefault();
    e.stopPropagation();
    setServicesDropdownOpen(prev => !prev);
  }, []);

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
            {sections.map(({ name, path, subLinks }) => {
              const isServices = name === "Services";
              const hasSubLinks = !!subLinks;

              return (
                <div
                  key={path}
                  className={`nav-item ${hasSubLinks ? "has-dropdown" : ""}`}
                >
                  <div className="nav-link-wrapper">
                    <Link
                      to={path}
                      className={`nav-link ${activeLink === path ? "active" : ""} ${isServices ? "bold" : ""}`}
                      onClick={() => handleNavClick(path, hasSubLinks)}
                    >
                      {name}
                    </Link>

                    {isServices && (
                      <span className="services-arrow-icon" onClick={handleDropdownToggle}>▼</span>
                    )}
                  </div>

                  {hasSubLinks && (servicesDropdownOpen || window.innerWidth > 768) && (
                    <div className={`dropdown-menu ${window.innerWidth <= 768 ? "mobile-dropdown" : ""}`}>
                      {subLinks.map(({ name: subName, path: subPath }) => (
                        <Link
                          key={subPath}
                          to={subPath}
                          className={`dropdown-link ${activeLink === subPath ? "active" : ""}`}
                          onClick={() => handleNavClick(subPath)}
                        >
                          {subName}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              );
            })}
          </nav>
        </div>
      </div>
    </header>
  );
};

export default DashboardHeader;
