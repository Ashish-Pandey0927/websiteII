import React, { useState, useCallback } from "react";
import { Link, useLocation } from "react-router-dom";
import './DashboardHeader.css';
import estonsoft from "../assets/estonsoftlogo.svg";
import { FiMenu } from "react-icons/fi";
import { AiOutlineClose } from "react-icons/ai";
import SocialIcons from "../components/SocialIcons";
import "../components/SocialIcons.css";
import useIconColorByBackground from "./useIconColorByBackground";

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

const DashboardHeader = ( { backgroundImage, iconColor }) => {
   const fallbackColor = useIconColorByBackground();
  const finalColor = iconColor || fallbackColor;
  const [menuOpen, setMenuOpen] = useState(false);
  const [servicesDropdownOpen, setServicesDropdownOpen] = useState(false);
  const location = useLocation();
  const currentPath = location.pathname;

  const toggleMenu = useCallback(() => {
    setMenuOpen(prev => !prev);
  }, []);

  const handleNavClick = useCallback((path, hasSubLinks) => {
    setMenuOpen(false);
    if (window.innerWidth <= 768 && hasSubLinks) {
      setServicesDropdownOpen(prev => !prev);
    } else if (hasSubLinks) {
      setServicesDropdownOpen(true);
    } else {
      setServicesDropdownOpen(false);
    }
  }, []);

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
          <SocialIcons direction="column" iconColor={iconColor}/>
        </div>

        <div className="mobile-menu-wrapper" style={{ color: finalColor }}>
          <div className="menu-toggle mobile-only" onClick={toggleMenu}>
            {menuOpen ? <AiOutlineClose /> : <FiMenu />}
          </div>

          <nav className={`nav-links ${menuOpen ? "open" : ""}`}>
            {sections.map(({ name, path, subLinks }) => {
              const isServices = name === "Services";
              const hasSubLinks = !!subLinks;
              const isMobile = window.innerWidth <= 820;
              const showMobileDropdown =
                isServices && isMobile && servicesDropdownOpen && menuOpen;
              const showDesktopDropdown =
                hasSubLinks && !isMobile && (servicesDropdownOpen || menuOpen);

              return (
                <div
                  key={path}
                  className={`nav-item ${hasSubLinks ? "has-dropdown" : ""}`}
                >
                  <div className="nav-link-wrapper">
                    <Link
                      to={path}
                      className={`nav-link ${currentPath === path ? "active" : ""} ${isServices ? "bold" : ""}`}
                      onClick={() => !isMobile && handleNavClick(path, hasSubLinks)}
                    >
                      {name}
                    </Link>
                    {isServices && (
                      <span className="services-arrow-icon" onClick={handleDropdownToggle}>
                        ▼
                      </span>
                    )}
                  </div>

                  {/* Mobile dropdown: only show when arrow is clicked, right below Services */}
                  {showMobileDropdown && (
                    <div className="dropdown-menu mobile-dropdown">
                      {subLinks.map(({ name: subName, path: subPath }) => (
                        <Link
                          key={subPath}
                          to={subPath}
                          className={`dropdown-link ${currentPath === subPath ? "active" : ""}`}
                          onClick={() => handleNavClick(subPath)}
                        >
                          {subName}
                        </Link>
                      ))}
                    </div>
                  )}

                  {/* Desktop dropdown: keep as before */}
                  {showDesktopDropdown && !isMobile && (
                    <div className="dropdown-menu">
                      {subLinks.map(({ name: subName, path: subPath }) => (
                        <Link
                          key={subPath}
                          to={subPath}
                          className={`dropdown-link ${currentPath === subPath ? "active" : ""}`}
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
