import React, { useState, useCallback } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import './DashboardHeader.css';
import estonsoft from "../assets/estonsoftlogo.svg";
import { FiMenu } from "react-icons/fi";
import { AiOutlineClose } from "react-icons/ai";
import SocialIcons from "../components/SocialIcons";
import "../components/SocialIcons.css";
import useIconColorByBackground from "./useIconColorByBackground";

// Web Development Service Icons
import FrontendDevelopment from '../assets/breadcrumb_12098294.svg';
import BackendDevelopment from '../assets/black-box_13092109.svg';
import SalesforceWeb from '../assets/technology_10644653.svg';
import ThirdPartyServices from '../assets/teamwork_9161754.svg';
import DeploymentAndHosting from '../assets/cloud-computing_5993762.svg';
import MaintenanceAndUpdates from '../assets/reboot_11494716.svg';
// mobile Development Service Icons
import androiedDevelopment from '../assets/androiedDevelopment.svg';
import iosDevelopment from '../assets/iosDevelopment.svg';
import FlutterDevelopment from '../assets/FlutterDevelopment.svg';
import ReactNativeDevelopment from '../assets/ReactNativeDevelopment.svg';
import XamarinMAUIDevelopment from '../assets/XamarinMAUIDevelopment.svg';
import mobileAppMigration from '../assets/mobileAppMigration.svg';
// Cloud Services  Service Icons
import cloudServices from '../assets/CloudServices.svg';
import awsServices from '../assets/awsServices.svg';
import GCPServices from '../assets/GCPServices.svg';
import AzureServices from '../assets/AzureServices.svg';
// Quality Assurance   Service Icons
import SalesforceTesting from '../assets/SalesforceTesting.svg';
import CloudServicesQA from '../assets/CloudServicesQA.svg';
import MobileAppsQA from '../assets/MobileAppsQA.svg';
import WebDevelopmentQA from '../assets/WebDevelopmentQA.svg';
import CICDandDevOpsTesting from '../assets/CI-CDandDevOpsTesting.svg';
import PerformanceandSecurityTesting from '../assets/PerformanceandSecurityTesting.svg';
// Salesforce Service Icons
import SalesforceDevelopment from '../assets/SalesforceDevelopment.svg';
import ApexProgramming from '../assets/ApexProgramming.svg';
import SalesforceLWC from '../assets/Salesforce(LWC).svg';
import SalesforceIntegration from '../assets/SalesforceIntegration.svg';
import SalesforceCustomObjectsFields from '../assets/SalesforceCustomObjects&Fields.svg';
import SalesforceDataMigration from '../assets/SalesforceDataMigration.svg';
// CI/CD DevOps Service Icons
import CloudDevOpsServices from '../assets/CloudDevOpsServices.svg';
import AWSDevopsServices from '../assets/AWSDevopsServices.svg';
import GCPDevopsServices from '../assets/GCPDevopsServices.svg';
import AzureDevopsServices from '../assets/AzureDevopsServices.svg';
// import { menuData as technologyMenuData } from "./newheader.menu";
const sections = [
  { name: "Home", path: "/" },
  { name: "About Us", path: "/aboutus" },
  { name: "Services", path: "/services" },
  { name: "Technology" ,path:"/technology" },
  { name: "Blogs", path: "/blogs" },
  { name: "Portfolio", path: "/portfolio" },
  { name: "Contact Us", path: "/contact" },
];

const getTechnologyPath = (title, section) => {
  // Base paths for each technology
  const titleToPath = {
    "Web Development": "/services/webdevelopment",
    "Mobile Development": "/services/mobiledevelopment",
    "Cloud Services": "/services/cloudservices",
    "Quality Assurance": "/services/qualityassurance",
    "Salesforce": "/services/salesforce",
    "CI/CD DevOps": "/services/cicddevops"
  };

  // Section IDs for services and tech stack
  const sectionIds = {
    "Web Development": {
      services: "#webdevservices",
      techStack: "#webtechcards"
    },
    "Mobile Development": {
      services: "#mobileservices",
      techStack: "#mobiletechcards"
    },
    "Cloud Services": {
      services: "#cloudservices",
      techStack: "#cloudservicestechcards"
    },
    "Quality Assurance": {
      services: "#qaservices",
      techStack: "#qatechcards"
    },
    "Salesforce": {
      services: "#salesforceservices",
      techStack: "#salesforcetechcard"
    },
    "CI/CD DevOps": {
      services: "#cicdservices",
      techStack: "#cicdtechcards"
    }
  };

  const basePath = titleToPath[title] || "/services";
  if (section && sectionIds[title]) {
    return `${basePath}${sectionIds[title][section]}`;
  }
  return basePath;
};

const technologyMenuData = [
  {
    label: "Technology",
    dropdown: [
      {
        title: "Web Development",
        offeredServices: [
          { label: "Frontend Development", icon: FrontendDevelopment, isSvg: true },
          { label: "Backend Development", icon: BackendDevelopment, isSvg: true }, 
          { label: "Salesforce Web Component", icon: SalesforceWeb, isSvg: true }, 
          { label: "Integration of Third-Party Services", icon: ThirdPartyServices, isSvg: true },
          { label: "Deployment and Hosting", icon: DeploymentAndHosting, isSvg: true }, 
          { label: "Maintenance and Updates", icon: MaintenanceAndUpdates, isSvg: true }, 
        ],
        techStack: [
          { label: "React", icon: "⚛️" },
          { label: "Vue", icon: "🖖" },
          { label: "Angular", icon: "📐" },
          { label: "Node.js", icon: "🟩" },
          { label: "Python", icon: "🐍" },
          { label: "Express.js", icon: "🚂" },
          { label: "Java", icon: "☕" },
          { label: "PHP", icon: "🐘" },
          { label: "C#", icon: "🎯" },
          { label: "Next.js", icon: "⏭️" }
        ]
      },
      {
        title: "Mobile Development",
        offeredServices: [
          { label: "Android Development", icon: androiedDevelopment, isSvg: true },
          { label: "iOS Development", icon: iosDevelopment, isSvg: true },
          { label: "Flutter Development", icon:FlutterDevelopment, isSvg: true },
          { label: "React Native Development", icon: ReactNativeDevelopment, isSvg: true },
          { label: "Xamarin/MAUI Development", icon: XamarinMAUIDevelopment, isSvg: true },
          { label: "Mobile Apps Migration", icon: mobileAppMigration, isSvg: true}
        ],
        techStack: [
          { label: "Kotlin", icon: "🅺" },
          { label: "Dart", icon: "🎯" },
          { label: "Swift", icon: "🦅" },
          { label: "MAUI/.NET Standard", icon: "🌐" },
          { label: "Java", icon: "☕" },
          { label: "Objective-C", icon: "📘" }
        ]
      },
      {
        title: "Cloud Services",
        offeredServices: [
          { label: "AWS Solutions", icon: cloudServices, isSvg: true },
          { label: "Azure Integration", icon: awsServices, isSvg: true },
          { label: "GCP Services", icon: GCPServices, isSvg: true },
          { label: "Azure Services", icon: AzureServices, isSvg: true },
        ],
        techStack: [
          { label: "AWS (Amazon Web Services)", icon: "☁️" },
          { label: "Microsoft Azure", icon: "🔷" },
          { label: "GCP ", icon: "🟦" },
          { label: "IBM Cloud ", icon: "🌩️" },
          { label: "Oracle Cloud", icon: "🟥" },
          { label: "Serverless Computing", icon: "🛰️" },
          { label: "Virtual Machines", icon: "💻" },
          { label: "Cloud Databases", icon: "🗄️" },
          { label: "Cloud Storage (S3, Blob)", icon: "🧺" },
          { label: "Cloud Monitoring and Analytics", icon: "📈" },
        ]
      },
      {
        title: "Quality Assurance",
        offeredServices: [
          { label: "Salesforce Testing", icon: SalesforceTesting, isSvg: true },
          { label: "Cloud Services QA", icon: CloudServicesQA, isSvg: true },
          { label: "Mobile Apps QA", icon: MobileAppsQA, isSvg: true },
          { label: "Web Development QA", icon: WebDevelopmentQA, isSvg: true },
          { label: "CI/CD and DevOps Testing", icon: CICDandDevOpsTesting, isSvg: true },
          { label: "Performance and Security Testing", icon: PerformanceandSecurityTesting, isSvg: true }
        ],
        techStack: [
          { label: "Selenium", icon: "🧩" },
          { label: "JUnit", icon: "📊" },
          { label: "TestNG", icon: "📬" },
          { label: "Postman", icon: "📬" },
          { label: "Jenkins", icon: "🧩" },
          { label: "Appium", icon: "📲" },
          { label: "Cypress", icon: "🌲" },
          { label: "QTest", icon: "🧪" },
          { label: "Bugzilla", icon: "🐞" },
          { label: "JIRA", icon: "📋" },
        ]
      },
      {
        title: "Salesforce",
        offeredServices: [
          { label: "Salesforce Development", icon: SalesforceDevelopment, isSvg: true },
          { label: "Apex Programming", icon: ApexProgramming, isSvg: true },
          { label: "Salesforce Lightning Web Components (LWC)", icon: SalesforceLWC, isSvg: true },
          { label: "Salesforce Integration", icon: SalesforceIntegration, isSvg: true },
          { label: "Salesforce Custom Objects & Fields", icon: SalesforceCustomObjectsFields, isSvg: true },
          { label: "Salesforce Data Migration", icon: SalesforceDataMigration, isSvg: true },
        ],
        techStack: [
          { label: "LWC", icon: "💡" },
          { label: "Apex", icon: "🅰️" },
          { label: "Salesforce APIs", icon: "🔌" },
          { label: "Salesforce Lightning Experience", icon: "⚡" },
          { label: "Visualforce", icon: "👁️" },
          { label: "Salesforce Integration", icon: "🔗" },
          { label: "Salesforce Customization", icon: "⚙️" },
          { label: "Salesforce Mobile SDK", icon: "📱" },
          { label: "Salesforce Data Loader", icon: "📦" },
          { label: "Salesforce App Exchange Apps", icon: "🏪" },
        ]
      },
      {
        title: "CI/CD DevOps",
        offeredServices: [
          { label: "Cloud DevOps Services", icon: CloudDevOpsServices, isSvg: true },
          { label: "AWS Devops Services", icon: AWSDevopsServices, isSvg: true },
          { label: "GCP Devops Services", icon: GCPDevopsServices, isSvg: true },
          { label: "Azure Devops Services", icon: AzureDevopsServices, isSvg: true }
        ],
        techStack: [
          { label: "Jenkins", icon: "☕" },
          { label: "GitLab CI/CD", icon: "🦊" },
          { label: "CircleCI", icon: "⭕" },
          { label: "Travis CI", icon: "🛠️" },
          { label: "Azure DevOps", icon: "🔷" },
          { label: "GitHub Actions", icon: "🐙" },
          { label: "AWS CodePipeline", icon: "🛤️" },
          { label: "Docker & Kubernetes", icon: "🐳" },
          { label: "Terraform", icon: "🌍" },
          { label: "Helm Charts", icon: "📈" }
        ]
      }
    ]
  }
];


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
                                <li 
                                  key={srv.label} 
                                  className="newheader-tech-list-item"
                                  onClick={() => navigate(getTechnologyPath(technologyMenuData[0].dropdown[openTechSub].title, 'services'))}
                                  style={{ cursor: 'pointer' }}
                                >
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
                                <li 
                                  key={tech.label} 
                                  className="newheader-tech-list-item"
                                  onClick={() => navigate(getTechnologyPath(technologyMenuData[0].dropdown[openTechSub].title, 'techStack'))}
                                  style={{ cursor: 'pointer' }}
                                >
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
                            {mobileOpenTechSub !== null && (
                              <button className="mobile-tech-back" onClick={() => setMobileOpenTechSub(null)}>
                                <span>&larr;</span> Back
                              </button>
                            )}
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
                                <div className="mobile-tech-main">
                                  {service.offeredServices && service.offeredServices[0] && service.offeredServices[0].isSvg && typeof service.offeredServices[0].icon === "string" && (
                                    <span className="mobile-tech-icon">
                                      <img src={service.offeredServices[0].icon} alt={service.title} />
                                    </span>
                                  )}
                                  <span onClick={() => navigate(getTechnologyPath(service.title))}>{service.title}</span>
                                  <span 
                                    className="mobile-tech-arrow" 
                                    onClick={(e) => {
                                      e.stopPropagation();
                                      setMobileOpenTechSub(sIdx);
                                    }}
                                  >
                                    &gt;
                                  </span>
                                </div>
                              </div>
                            ))
                          ): (
                            <div className="mobile-tech-submenu">
                              <div className="mobile-tech-col">
                                <div className="mobile-tech-col-title">Offered Services</div>
                                <ul className="mobile-tech-list">
                                  {technologyMenuData[0].dropdown[mobileOpenTechSub].offeredServices.map((srv) => (
                                    <li 
                                      key={srv.label} 
                                      className="mobile-tech-list-item"
                                      onClick={() => {
                                        navigate(getTechnologyPath(technologyMenuData[0].dropdown[mobileOpenTechSub].title, 'services'));
                                        setMobileTechMenuOpen(false);
                                        setMenuOpen(false);
                                        setMobileOpenTechSub(null);
                                      }}
                                      style={{ cursor: 'pointer' }}
                                    >
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
                                    <li 
                                      key={tech.label} 
                                      className="mobile-tech-list-item"
                                      onClick={() => {
                                        navigate(getTechnologyPath(technologyMenuData[0].dropdown[mobileOpenTechSub].title, 'techStack'));
                                        setMobileTechMenuOpen(false);
                                        setMenuOpen(false);
                                        setMobileOpenTechSub(null);
                                      }}
                                      style={{ cursor: 'pointer' }}
                                    >
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
