import React, { useState, useCallback } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
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

const getTechnologyPath = (title) => {
  // Convert title to URL-friendly format and map to service paths
  const titleToPath = {
    "Web Development": "/services/webdevelopment",
    "Mobile Development": "/services/mobiledevelopment",
    "Cloud Services": "/services/cloudservices",
    "Quality Assurance": "/services/qualityassurance",
    "Salesforce": "/services/salesforce",
    "DevOps": "/services/cicddevops"
  };
  return titleToPath[title] || "/services";
};

const DashboardHeader = ( {iconColor }) => {
  const fallbackColor = useIconColorByBackground();
  const finalColor = iconColor || fallbackColor;
  const [menuOpen, setMenuOpen] = useState(false);
  const [technologyDropdownOpen, setTechnologyDropdownOpen] = useState(false);
  const [openTechSub, setOpenTechSub] = useState(0); // Set to 0 for first submenu
  const [mobileTechMenuOpen, setMobileTechMenuOpen] = useState(false);
  const [mobileOpenTechSub, setMobileOpenTechSub] = useState(null);
  const location = useLocation();
  const currentPath = location.pathname;
  const navigate = useNavigate();

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
          <div className="menu-toggle mobile-only" onClick={() => {
            if (menuOpen) {
              setMenuOpen(false);
              setMobileTechMenuOpen(false);
              setMobileOpenTechSub(null);
            } else {
              setMenuOpen(true);
            }
          }}>
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
                    if (isTechnology && !isMobile) {
                      setTechnologyDropdownOpen(false);
                      setOpenTechSub(null);
                    }
                  }}
                >
                  <div
                    className="nav-link-wrapper"
                    onMouseEnter={() => {
                      if (isTechnology && !isMobile) {
                        setTechnologyDropdownOpen(true);
                        setOpenTechSub(0); // Keep first submenu open
                      }
                    }}
                    onClick={e => {
                      if (isTechnology) {
                        e.preventDefault();
                        if (isMobile) {
                          setMobileTechMenuOpen(true);
                          setMobileOpenTechSub(null);
                        } else {
                          setTechnologyDropdownOpen(true);
                          setOpenTechSub(null);
                        }
                      }
                    }}
                    style={{ cursor: isTechnology ? "pointer" : undefined }}
                  >
                    {isTechnology ? (
                      <span
                        className={`nav-link ${(technologyDropdownOpen && !isMobile) || (isMobile && mobileTechMenuOpen) ? "active" : ""} bold`}
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
                  {/* Technology Tab Dropdown - Desktop */}
                  {isTechnology && technologyDropdownOpen && !isMobile && (
                    <div className="dropdown-menu technology-dropdown-menu">
                      <div className="newheader-submenu-list">
                        {technologyMenuData[0].dropdown.map((service, sIdx) => (
                          <div
                            key={service.title}
                            className={`newheader-submenu-title${openTechSub === sIdx ? " active" : ""}`}
                            onMouseEnter={() => setOpenTechSub(sIdx)}
                            onClick={() => navigate(getTechnologyPath(service.title))}
                            style={{ cursor: 'pointer' }}
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
                  {/* Technology Tab Dropdown - Mobile */}
                  {isTechnology && isMobile && mobileTechMenuOpen && (
                    <div className="mobile-tech-dropdown-overlay">
                      <div className="mobile-tech-dropdown">
                        <div className="mobile-tech-header">
                          <div className="mobile-tech-header-left">
                            <Link to="/">
                              <img src={estonsoft} alt="Logo" className="mobile-tech-logo" />
                            </Link>
                          </div>
                          <div className="mobile-tech-header-center">
                            {mobileOpenTechSub === 
                              <button className="mobile-tech-back" onClick={() => setMobileOpenTechSub(null)}>
                                <span>&larr;</span> Back
                              </button>
                            }
                          </div>
                          <div className="mobile-tech-header-right">
                            <button 
                              className="mobile-tech-close" 
                              onClick={() => {
                                setMobileTechMenuOpen(false);
                                setMenuOpen(false);
                                setMobileOpenTechSub(null);
                              }}
                            >
                              <AiOutlineClose />
                            </button>
                          </div>
                        </div>
                        <div className="mobile-tech-list">
                          {mobileOpenTechSub === null ? (
                            technologyMenuData[0].dropdown.map((service, sIdx) => (
                              <div key={service.title} className="mobile-tech-item">
                                <div
                                  className="mobile-tech-main"
                                  onClick={() => setMobileOpenTechSub(sIdx)}
                                >
                                  {service.offeredServices && service.offeredServices[0] && service.offeredServices[0].isSvg && typeof service.offeredServices[0].icon === "string" && (
                                    <span className="mobile-tech-icon">
                                      <img src={service.offeredServices[0].icon} alt={service.title} />
                                    </span>
                                  )}
                                  <span>{service.title}</span>
                                  <span className="mobile-tech-arrow">&gt;</span>
                                </div>
                              </div>
                            ))
                          ) : (
                            <div className="mobile-tech-submenu">
                              <div className="mobile-tech-col">
                                <div className="mobile-tech-col-title">Offered Services</div>
                                <ul className="mobile-tech-list">
                                  {technologyMenuData[0].dropdown[mobileOpenTechSub].offeredServices.map((srv) => (
                                    <li key={srv.label} className="mobile-tech-list-item">
                                      <span className="mobile-tech-icon">
                                        {srv.isSvg && typeof srv.icon === "string" ? (
                                          <img src={srv.icon} alt={srv.label} />
                                        ) : (
                                          srv.icon
                                        )}
                                      </span>
                                      <span>{srv.label}</span>
                                    </li>
                                  ))}
                                </ul>
                              </div>
                              <div className="mobile-tech-col">
                                <div className="mobile-tech-col-title">Tech Stack</div>
                                <ul className="mobile-tech-list">
                                  {technologyMenuData[0].dropdown[mobileOpenTechSub].techStack.map((tech) => (
                                    <li key={tech.label} className="mobile-tech-list-item">
                                      <span className="mobile-tech-icon">{tech.icon}</span>
                                      <span>{tech.label}</span>
                                    </li>
                                  ))}
                                </ul>
                              </div>
                            </div>
                          )}
                        </div>
                      </div>
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
