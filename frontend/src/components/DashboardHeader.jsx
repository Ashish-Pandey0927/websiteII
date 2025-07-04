import React, { useState, useCallback } from "react";
import { Link, useLocation } from "react-router-dom";
import './DashboardHeader.css';
import estonsoft from "../assets/estonsoftlogo.svg";
import { FiMenu } from "react-icons/fi";
import { AiOutlineClose } from "react-icons/ai";
import SocialIcons from "../components/SocialIcons";
import "../components/SocialIcons.css";
import useIconColorByBackground from "./useIconColorByBackground";
import { menuData as technologyMenuData } from "./newheader.menu";

const sections = [
  { name: "Home", path: "/" },
  { name: "About Us", path: "/aboutus" },
  { name: "Services", path: "/services" },
  { name: "Technology" ,path:"/technology" },
  { name: "Blogs", path: "/blogs" },
  { name: "Portfolio", path: "/portfolio" },
  { name: "Contact Us", path: "/contact" },
];

const DashboardHeader = ( {iconColor }) => {
   const fallbackColor = useIconColorByBackground();
  const finalColor = iconColor || fallbackColor;
  const [menuOpen, setMenuOpen] = useState(false);
  const [technologyDropdownOpen, setTechnologyDropdownOpen] = useState(false);
  const [openTechSub, setOpenTechSub] = useState(null);
  const location = useLocation();
  const currentPath = location.pathname;

  const toggleMenu = useCallback(() => {
    setMenuOpen(prev => !prev);
  }, []);

  return (
    <header className="dashboard-header">
      <div className="header-center">
        <div className="left-section">
          <div className="logo-container">
            <Link to="/">
              <img src={estonsoft} alt="Logo" className="logo" />
            </Link>
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
            {sections.map(({ name, path }) => {
              const isTechnology = name === "Technology";
              const isMobile = window.innerWidth <= 820;

              return (
                <div
                  key={path}
                  className={`nav-item${isTechnology ? " has-dropdown" : ""}`}
                  onMouseLeave={() => {
                    if (isTechnology) {
                      setTechnologyDropdownOpen(false);
                      setOpenTechSub(null);
                    }
                  }}
                >
                  <div
                    className="nav-link-wrapper"
                    onMouseEnter={() => {
                      if (isTechnology) {
                        setTechnologyDropdownOpen(true);
                        setOpenTechSub(null);
                      }
                    }}
                    onClick={e => {
                      if (isTechnology) {
                        e.preventDefault(); // Prevent navigation
                        setTechnologyDropdownOpen(true);
                        setOpenTechSub(null);
                      }
                    }}
                    style={{ cursor: isTechnology ? "pointer" : undefined }}
                  >
                    {isTechnology ? (
                      <span
                        className={`nav-link ${technologyDropdownOpen && !isMobile ? "active" : ""} bold`}
                      >
                        {name}
                      </span>
                    ) : (
                      <Link
                        to={path}
                        className={`nav-link ${currentPath === path ? "active" : ""}`}
                      >
                        {name}
                      </Link>
                    )}
                  </div>
                  {/* Technology Tab Dropdown */}
                  {isTechnology && technologyDropdownOpen && !isMobile && (
                    <div className="dropdown-menu technology-dropdown-menu">
                      <div className="newheader-submenu-list">
                        {technologyMenuData[0].dropdown.map((service, sIdx) => (
                          <div
                            key={service.title}
                            className={`newheader-submenu-title${openTechSub === sIdx ? " active" : ""}`}
                            onMouseEnter={() => setOpenTechSub(sIdx)}
                            tabIndex={0}
                          >
                            {service.offeredServices && service.offeredServices[0] && service.offeredServices[0].isSvg && typeof service.offeredServices[0].icon === "string" ? (
                              <img src={service.offeredServices[0].icon} alt={service.title} style={{ width: 20, height: 20, verticalAlign: 'middle', marginRight: 8, display: 'inline-block' }} />
                            ) : null}
                            {service.title}
                          </div>
                        ))}
                      </div>
                      {openTechSub !== null && (
                        <div className="newheader-tech-multicol">
                          <div className="newheader-tech-col">
                            <div className="newheader-tech-col-title">Offered Services</div>
                            <ul className="newheader-tech-list">
                              {technologyMenuData[0].dropdown[openTechSub].offeredServices.map((srv, i) => (
                                <li key={srv.label} className="newheader-tech-list-item">
                                  <span className="newheader-tech-icon">
                                    {srv.isSvg && typeof srv.icon === "string" ? (
                                      <img src={srv.icon} alt={srv.label} style={{ width: 20, height: 20, verticalAlign: 'middle', display: 'inline-block' }} />
                                    ) : (
                                      srv.icon
                                    )}
                                  </span> {srv.label}
                                </li>
                              ))}
                            </ul>
                          </div>
                          <div className="newheader-tech-col">
                            <div className="newheader-tech-col-title">Tech Stack</div>
                            <ul className="newheader-tech-list">
                              {technologyMenuData[0].dropdown[openTechSub].techStack.map((tech, i) => (
                                <li key={tech.label} className="newheader-tech-list-item">
                                  <span className="newheader-tech-icon">{tech.icon}</span> {tech.label}
                                </li>
                              ))}
                            </ul>
                          </div>
                        </div>
                      )}
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
