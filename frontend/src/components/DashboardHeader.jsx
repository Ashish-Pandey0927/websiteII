import ReactDOM from "react-dom";
import React, { useState, useRef } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import './DashboardHeader.css';
import estonsoft from "../assets/estonsoftlogo.svg";
import { FiMenu } from "react-icons/fi";
import { AiOutlineClose } from "react-icons/ai";
import SocialIcons from "../components/SocialIcons";
import "../components/SocialIcons.css";
import useIconColorByBackground from "./useIconColorByBackground";



// import { menuData as technologyMenuData } from "./newheader.menu";
const sections = [
  { name: "Home", path: "/"},
  { name: "About Us", path: "/aboutus"},
  { name: "Services", path: "/services"},
  { name: "Technology" ,path:"/technology"},
  { name: "Resources", path: null, isDropdown: true, dropdownItems: [
    { label: "Blogs", path: "/blogs" },
    { label: "Case Study", path: "/casestudy" },
  ]},
  { name: "Portfolio", path: "/portfolio"},
  { name: "Contact Us", path: "/contact"},
];




const DashboardHeader = ( {iconColor }) => {
  const dropdownCloseTimeout = useRef(null);
  const fallbackColor = useIconColorByBackground();
  const finalColor = iconColor || fallbackColor;
  const [menuOpen, setMenuOpen] = useState(false);
  const [resourcesDropdownOpen, setResourcesDropdownOpen] = useState(false);
  const resourcesCloseTimeout = useRef(null);
  const [mobileResourcesOpen, setMobileResourcesOpen] = useState(false);
  const location = useLocation();
  const currentPath = location.pathname;
  const navigate = useNavigate();


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
            setMenuOpen(!menuOpen);
          }}>
            {menuOpen ? <AiOutlineClose /> : <FiMenu />}
          </div>
          {/* Mobile menu overlay, same style as mobile-tech-dropdown */}
          {menuOpen && window.innerWidth <= 820 ? (
            <div className="mobile-tech-dropdown-overlay">
              <div className="mobile-tech-dropdown">
                <div className="mobile-tech-header">
                  <div className="mobile-tech-header-left">
                    <Link to="/">
                      <img src={estonsoft} alt="Logo" className="mobile-tech-logo" />
                    </Link>
                  </div>
                  {/* <div className="mobile-tech-header-center">
                    //Back button for submenu navigation 
                    {mobileOpenTechSub !== null && (
                      <button className="mobile-tech-back" onClick={() => setMobileOpenTechSub(null)}>
                        <span>&larr;</span> Back
                      </button>
                    )}
                  </div> */}
                  <div className="mobile-tech-header-right">
                    <button 
                      className="mobile-tech-close" 
                      onClick={() => setMenuOpen(false)}
                    >
                      <AiOutlineClose />
                    </button>
                  </div>
                </div>
                <div className="mobile-tech-list">
                  {/* Main menu list or submenu */}
                  {sections.map((section) => {
                    const { name, path, isDropdown, dropdownItems } = section;
                    const isResources = name === "Resources";
                    const sectionKey = path || name;
                    return (
                      <div key={sectionKey} className="mobile-tech-item">
                        <div className="mobile-tech-main">
                          <span
                            onClick={() => {
                              if (isResources) {
                                setMobileResourcesOpen(prev => !prev);
                              } else {
                                navigate(path);
                                setMenuOpen(false);
                              }
                            }}
                            style={{ cursor: 'pointer' }}
                          >
                            {name}
                          </span>
                          {isResources && (
                            <span
                              className="mobile-tech-arrow"
                              onClick={(e) => {
                                e.stopPropagation();
                                setMobileResourcesOpen(prev => !prev);
                              }}
                            >
                              {mobileResourcesOpen ? '\u2304' : '>'}
                            </span>
                          )}
                        </div>
                        {isResources && mobileResourcesOpen && (
                          <div className="mobile-resources-submenu">
                            {dropdownItems.map((item) => (
                              <div
                                key={item.path}
                                className="mobile-resources-item"
                                onClick={() => {
                                  navigate(item.path);
                                  setMenuOpen(false);
                                  setMobileResourcesOpen(false);
                                }}
                              >
                                {item.label}
                              </div>
                            ))}
                          </div>
                        )}
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          ) : (
            // Desktop nav
            <nav className={`nav-links ${menuOpen ? "open" : ""}`}>
              {sections.map((section) => {
                const { name, path, isDropdown, dropdownItems } = section;
                const isResources = name === "Resources";
                const isMobile = window.innerWidth <= 820;
                const sectionKey = path || name;
                return (
                  <div
                    key={sectionKey}
                    className={`nav-item${isResources ? " has-dropdown" : ""}`}
                    onMouseLeave={() => {
                      if (isResources && !isMobile) {
                        resourcesCloseTimeout.current = setTimeout(() => {
                          setResourcesDropdownOpen(false);
                        }, 300);
                      }
                    }}
                    onMouseEnter={() => {
                      if (isResources && !isMobile) {
                        if (resourcesCloseTimeout.current) {
                          clearTimeout(resourcesCloseTimeout.current);
                          resourcesCloseTimeout.current = null;
                        }
                        setResourcesDropdownOpen(true);
                      }
                    }}
                  >
                    <div
                      className="nav-link-wrapper"
                      onClick={e => {
                        if (isResources) {
                          e.preventDefault();
                          setResourcesDropdownOpen(prev => !prev);
                        }
                      }}
                      style={{ cursor: isResources ? "pointer" : undefined }}
                    >
                      {isResources ? (
                        <span
                          className={`nav-link resources-nav-label ${resourcesDropdownOpen && !isMobile ? "active" : ""} bold`}
                        >
                          {name} <span className="resources-caret">{resourcesDropdownOpen && !isMobile ? '▲' : '▾'}</span>
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
                    {/* Resources Dropdown - Desktop */}
                    {isResources && resourcesDropdownOpen && !isMobile && (
                      <div
                        className="resources-dropdown-menu"
                        onMouseEnter={() => {
                          if (resourcesCloseTimeout.current) {
                            clearTimeout(resourcesCloseTimeout.current);
                            resourcesCloseTimeout.current = null;
                          }
                        }}
                        onMouseLeave={() => {
                          resourcesCloseTimeout.current = setTimeout(() => {
                            setResourcesDropdownOpen(false);
                          }, 300);
                        }}
                      >
                        {dropdownItems.map((item) => (
                          <div
                            key={item.path}
                            className={`resources-dropdown-item${currentPath === item.path ? " active" : ""}`}
                            onClick={() => {
                              navigate(item.path);
                              setResourcesDropdownOpen(false);
                            }}
                          >
                            {item.label}
                          </div>
                        ))}
                      </div>
                    )}

                  </div>
                );
              })}
            </nav>
          )}
        </div>
      </div>
    </header>
  );
};

export default DashboardHeader;
