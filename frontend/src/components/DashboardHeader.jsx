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

// Web Development Service Icons
import FrontendDevelopment from '../assets/breadcrumb_12098294.svg';
import BackendDevelopment from '../assets/black-box_13092109.svg';
import SalesforceWeb from '../assets/technology_10644653.svg';
import ThirdPartyServices from '../assets/teamwork_9161754.svg';
import DeploymentAndHosting from '../assets/cloud-computing_5993762.svg';
import MaintenanceAndUpdates from '../assets/reboot_11494716.svg';
// Web Development tech stack images
import reactlogo from '../assets/logo/Reactlogo.png';
import vuelogo from '../assets/logo/vuelogo.png';
import angularlogo from '../assets/logo/angularlogo.png';
import nodelogo from '../assets/logo/NodeJslogo.png';
import pythonlogo from '../assets/logo/pythonlogo.png';
import exlogo from '../assets/logo/exlogo.png';
import javalogo from '../assets/logo/javalogo.png';
import phplogo from '../assets/logo/PHPlogo.png';
import cSharplogo from '../assets/logo/cSharplogo.png';
import nextlogo from '../assets/logo/nextjslogo.png';

// mobile Development Service Icons
import androiedDevelopment from '../assets/androiedDevelopment.svg';
import iosDevelopment from '../assets/iosDevelopment.svg';
import FlutterDevelopment from '../assets/FlutterDevelopment.svg';
import ReactNativeDevelopment from '../assets/ReactNativeDevelopment.svg';
import XamarinMAUIDevelopment from '../assets/XamarinMAUIDevelopment.svg';
import mobileAppMigration from '../assets/mobileAppMigration.svg';
// mobile Development tech stack images
import kotlinlogo from '../assets/logo/kotlinlogo.png';
import dartlogo from '../assets/logo/dartlogo.png';
import swiftlogo from '../assets/logo/Swiftlogo.png';
import netlogo from '../assets/logo/.netlogo.png';
import objectiveClogo from '../assets/logo/objectiveClogo.png';
import firebaselogo from '../assets/logo/firebaselogo.png';

// Cloud Services  Service Icons
import cloudServices from '../assets/CloudServices.svg';
import awsServices from '../assets/awsServices.svg';
import GCPServices from '../assets/GCPServices.svg';
import AzureServices from '../assets/AzureServices.svg';
// Cloud Services tech stack images
import awslogo from '../assets/logo/awslogo.png';
import microsoftazurelogo from '../assets/logo/microsoftazurelogo.png';
import gcplogo from '../assets/logo/gcplogo.png';
import ibmcloudlogo from '../assets/logo/ibmcloudlogo.png';
import oraclecloudlogo from '../assets/logo/oraclecloudlogo.png';
import virtualmachinelogo from '../assets/logo/virtualmachinelogo.png';
import clouddatabaselogo from '../assets/logo/clouddatabaselogo.png';
import cloudstoragelogo from '../assets/logo/cloudstoragelogo.png';
import cloudmonitoringanalyticslogo from '../assets/logo/cloudmonitoringanalyticslogo.png';

// Quality Assurance   Service Icons
import SalesforceTesting from '../assets/SalesforceTesting.svg';
import CloudServicesQA from '../assets/CloudServicesQA.svg';
import MobileAppsQA from '../assets/MobileAppsQA.svg';
import WebDevelopmentQA from '../assets/WebDevelopmentQA.svg';
import CICDandDevOpsTesting from '../assets/CI-CDandDevOpsTesting.svg';
import PerformanceandSecurityTesting from '../assets/PerformanceandSecurityTesting.svg';
// Quality Assurance   tech stack images
import seleniumlogo from '../assets/logo/seleniumlogo.png';
import junitlogo from '../assets/logo/junitlogo.png';
import testnglogo from '../assets/logo/testnglogo.png';
import postmanlogo from '../assets/logo/postmanlogo.png';
import Jenkinslogo from '../assets/logo/Jenkinslogo.png';
import appiumlogo from '../assets/logo/appiumlogo.png';
import cypresslogo from '../assets/logo/cypresslogo.png';
import qtestlogo from '../assets/logo/qtestlogo.png';
import bugzillalogo from '../assets/logo/bugzillalogo.png';
import jiralogo from '../assets/logo/jiralogo.png';

// Salesforce Service Icons
import SalesforceDevelopment from '../assets/SalesforceDevelopment.svg';
import ApexProgramming from '../assets/ApexProgramming.svg';
import SalesforceLWC from '../assets/Salesforce(LWC).svg';
import SalesforceIntegration from '../assets/SalesforceIntegration.svg';
import SalesforceCustomObjectsFields from '../assets/SalesforceCustomObjects&Fields.svg';
import SalesforceDataMigration from '../assets/SalesforceDataMigration.svg';
// Salesforce  tech stack images
import lwclogo from '../assets/logo/lwclogo.png';
import apexlogo from '../assets/logo/apexlogo.png';
import salesforceAPIlogo from '../assets/logo/salesforceAPIlogo.png';
import SalesforceLightingExperience from '../assets/logo/SalesforceLightingExperience.png';
import visualforcelogo from '../assets/logo/visualforcelogo.png';
import salesforceintegrationlogo from '../assets/logo/salesforceintegrationlogo.png';
import Salesforcecustomizationlogo from '../assets/logo/Salesforcecustomizationlogo.png';
import salesforceSDKlogo from '../assets/logo/salesforceSDKlogo.png';
import salesforcesDataloaderlogo from '../assets/logo/salesforcesDataloaderlogo.png';
import salesforceappexchangelogo from '../assets/logo/salesforceappexchangelogo.png';

// CI/CD DevOps Service Icons
import CloudDevOpsServices from '../assets/CloudDevOpsServices.svg';
import AWSDevopsServices from '../assets/AWSDevopsServices.svg';
import GCPDevopsServices from '../assets/GCPDevopsServices.svg';
import AzureDevopsServices from '../assets/AzureDevopsServices.svg';
// CI/CD DevOps tech stack images
import jenkinslogo from "../assets/logo/Jenkinslogo.png";
import gitlablogo from '../assets/logo/gitlablogo.png';
import circlecilogo from '../assets/logo/circlecilogo.png';
import TravisCILogo from '../assets/logo/TravisCILogo.png';
import awsCodePipelinelogo from '../assets/logo/awsCodePipelinelogo.png';
import githubActionslogo from '../assets/logo/githubActionslogo.png';
import azuredevopslogo from '../assets/logo/azuredevopslogo.png';
import dockerkuberneteslogo from '../assets/logo/dockerkuberneteslogo.png';
import terraformlogo from '../assets/logo/terraformlogo.png';
import helmChartslogo from '../assets/logo/helmChartslogo.png';

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

const getTechnologyPath = (title, section) => {
  const titleToPath = {
    "Web Development": "/services/webdevelopment",
    "Mobile Development": "/services/mobiledevelopment",
    "Cloud Services": "/services/cloudservices",
    "Quality Assurance": "/services/qualityassurance",
    "Salesforce": "/services/salesforce",
    "CI/CD DevOps": "/services/cicddevops"
  };

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
          { label: "React", image: reactlogo, },
          { label: "Vue", image:vuelogo,},
          { label: "Angular", image:angularlogo,},
          { label: "Node.js", image:nodelogo,},
          { label: "Python", image:pythonlogo,},
          { label: "Express.js", image:exlogo,},
          { label: "Java", image:javalogo,},
          { label: "PHP", image:phplogo,},
          { label: "C#", image:cSharplogo,},
          { label: "Next.js", image:nextlogo,}
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
          { label: "Kotlin", image:kotlinlogo,},
          { label: "Dart", image:dartlogo,},
          { label: "Swift", image:swiftlogo,},
          { label: "MAUI/.NET Standard", image:netlogo,},
          { label: "Objective-C", image:objectiveClogo,},
          { label: "Express js", image:exlogo,},
          { label: "Java", image:javalogo,},
          { label: "C#", image:cSharplogo,},
          { label: "FireBase#", image:firebaselogo,},
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
          { label: "AWS (Amazon Web Services)", image:awslogo,},
          { label: "Microsoft Azure", image:microsoftazurelogo,},
          { label: "GCP ", image:gcplogo,},
          { label: "IBM Cloud ", image:ibmcloudlogo,},
          { label: "Oracle Cloud", image:oraclecloudlogo,},
          { label: "Serverless Computing", image:exlogo,},
          { label: "Virtual Machines", image:virtualmachinelogo,},
          { label: "Cloud Databases", image:clouddatabaselogo,},
          { label: "Cloud Storage (S3, Blob)", image:cloudstoragelogo,},
          { label: "Cloud Monitoring and Analytics", image:cloudmonitoringanalyticslogo,},
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
          { label: "Selenium", image:seleniumlogo,},
          { label: "JUnit", image:junitlogo,},
          { label: "TestNG", image:testnglogo,},
          { label: "Postman", image:postmanlogo,},
          { label: "Jenkins", image:Jenkinslogo,},
          { label: "Appium", image:appiumlogo,},
          { label: "Cypress", image:cypresslogo,},
          { label: "QTest", image:qtestlogo,},
          { label: "Bugzilla", image:bugzillalogo,},
          { label: "JIRA", image:jiralogo,},
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
          { label: "LWC", image:lwclogo,},
          { label: "Apex", image:apexlogo,},
          { label: "Salesforce APIs", image:salesforceAPIlogo,},
          { label: "Salesforce Lightning Experience", image:SalesforceLightingExperience,},
          { label: "Visualforce", image:visualforcelogo,},
          { label: "Salesforce Integration", image:salesforceintegrationlogo,},
          { label: "Salesforce Customization", image:Salesforcecustomizationlogo,},
          { label: "Salesforce Mobile SDK", image:salesforceSDKlogo,},
          { label: "Salesforce Data Loader", image:salesforcesDataloaderlogo,},
          { label: "Salesforce App Exchange Apps", image:salesforceappexchangelogo,},
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
          { label: "Jenkins", image:jenkinslogo,},
          { label: "GitLab CI/CD", image:gitlablogo,},
          { label: "CircleCI", image:circlecilogo,},
          { label: "Travis CI", image:TravisCILogo,},
          { label: "Azure DevOps", image:awsCodePipelinelogo,},
          { label: "GitHub Actions", image:githubActionslogo,},
          { label: "AWS CodePipeline", image:azuredevopslogo,},
          { label: "Docker & Kubernetes", image:dockerkuberneteslogo,},
          { label: "Terraform", image:terraformlogo,},
          { label: "Helm Charts", image:helmChartslogo,}
        ]
      }
    ]
  }
];

const DashboardHeader = ( {iconColor }) => {
  const dropdownCloseTimeout = useRef(null);
  const fallbackColor = useIconColorByBackground();
  const finalColor = iconColor || fallbackColor;
  const [menuOpen, setMenuOpen] = useState(false);
  const [resourcesDropdownOpen, setResourcesDropdownOpen] = useState(false);
  const resourcesCloseTimeout = useRef(null);
  const [mobileResourcesOpen, setMobileResourcesOpen] = useState(false);
  
  const [technologyDropdownOpen, setTechnologyDropdownOpen] = useState(false);
  const [openTechSub, setOpenTechSub] = useState(0); // Set to 0 for first submenu
  const [showTechSubmenu, setShowTechSubmenu] = useState(false);
  const [mobileOpenTechSub, setMobileOpenTechSub] = useState(null);

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
            if (menuOpen) {
              setMenuOpen(false);
              setShowTechSubmenu(false);
              setMobileOpenTechSub(null);
              setMobileResourcesOpen(false);
            } else {
              setMenuOpen(true);
            }
          }}>
            {menuOpen ? <AiOutlineClose /> : <FiMenu />}
          </div>
          
          {/* Mobile menu overlay */}
          {menuOpen && window.innerWidth <= 820 ? (
            <div className="mobile-tech-dropdown-overlay">
              <div className="mobile-tech-dropdown">
                <div className="mobile-tech-header">
                  <div className="mobile-tech-header-left">
                    <Link to="/">
                      <img src={estonsoft} alt="Logo" className="mobile-tech-logo" />
                    </Link>
                  </div>
                  <div className="mobile-tech-header-right">
                    <button 
                      className="mobile-tech-close" 
                      onClick={() => {
                        setMenuOpen(false);
                        setShowTechSubmenu(false);
                        setMobileOpenTechSub(null);
                        setMobileResourcesOpen(false);
                      }}
                    >
                      <AiOutlineClose />
                    </button>
                  </div>
                </div>
                <div className="mobile-tech-list">
                  {!showTechSubmenu && mobileOpenTechSub === null ? (
                    sections.map((section) => {
                      const { name, path, isDropdown, dropdownItems } = section;
                      const isTechnology = name === "Technology";
                      const isResources = name === "Resources";
                      const sectionKey = path || name;
                      return (
                        <div key={sectionKey} className="mobile-tech-item">
                          <div className="mobile-tech-main">
                            <span
                              onClick={() => {
                                if (isTechnology) {
                                  setShowTechSubmenu(true);
                                } else if (isResources) {
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
                            {isTechnology && (
                              <span 
                                className="mobile-tech-arrow" 
                                onClick={(e) => {
                                  e.stopPropagation();
                                  setShowTechSubmenu(true);
                                }}
                              >
                                &gt;
                              </span>
                            )}
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
                    })
                  ) : showTechSubmenu && mobileOpenTechSub === null ? (
                    <div className="mobile-tech-submenu-list">
                      <button className="mobile-tech-back" onClick={() => setShowTechSubmenu(false)}>
                        <span>&larr;</span> Back
                      </button>
                      {technologyMenuData[0].dropdown.map((service, sIdx) => (
                        <div key={service.title} className="mobile-tech-item">
                          <div className="mobile-tech-main">
                            <span
                              onClick={() => {
                                navigate(getTechnologyPath(service.title));
                                setMenuOpen(false);
                                setShowTechSubmenu(false);
                              }}
                              style={{ cursor: 'pointer' }}
                            >
                              {service.title}
                            </span>
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
                      ))}
                    </div>
                  ) : (
                    <div className="mobile-tech-submenu">
                      <button className="mobile-tech-back" onClick={() => setMobileOpenTechSub(null)}>
                        <span>&larr;</span> Back
                      </button>
                      <div className="mobile-tech-col">
                        <div className="mobile-tech-col-title">Offered Services</div>
                        <ul className="mobile-tech-list">
                          {technologyMenuData[0].dropdown[mobileOpenTechSub].offeredServices.map((srv) => (
                            <li 
                              key={srv.label} 
                              className="mobile-tech-list-item"
                              onClick={() => {
                                navigate(getTechnologyPath(technologyMenuData[0].dropdown[mobileOpenTechSub].title, 'services'));
                                setMenuOpen(false);
                                setMobileOpenTechSub(null);
                                setShowTechSubmenu(false);
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
                                setMenuOpen(false);
                                setMobileOpenTechSub(null);
                                setShowTechSubmenu(false);
                              }}
                              style={{ cursor: 'pointer' }}
                            >
                              <span className="mobile-tech-icon">
                                <img src={tech.image} alt={tech.label} style={{ width: 20, height: 20, verticalAlign: 'middle', display: 'inline-block' }} />
                              </span>
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
          ) : (
            <nav className={`nav-links ${menuOpen ? "open" : ""}`}>
              {sections.map((section) => {
                const { name, path, isDropdown, dropdownItems } = section;
                const isResources = name === "Resources";
                const isTechnology = name === "Technology";
                const isMobile = window.innerWidth <= 820;
                const hasDropdown = isResources || isTechnology;
                const sectionKey = path || name;
                return (
                  <div
                    key={sectionKey}
                    className={`nav-item${hasDropdown ? " has-dropdown" : ""}`}
                    onMouseLeave={() => {
                      if (isResources && !isMobile) {
                        resourcesCloseTimeout.current = setTimeout(() => {
                          setResourcesDropdownOpen(false);
                        }, 300);
                      }
                      if (isTechnology && !isMobile) {
                        dropdownCloseTimeout.current = setTimeout(() => {
                          setTechnologyDropdownOpen(false);
                          setOpenTechSub(null);
                        }, 500);
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
                      if (isTechnology && !isMobile) {
                        if (dropdownCloseTimeout.current) {
                          clearTimeout(dropdownCloseTimeout.current);
                          dropdownCloseTimeout.current = null;
                        }
                        setTechnologyDropdownOpen(true);
                        setOpenTechSub(0);
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
                        if (isTechnology) {
                          e.preventDefault();
                          setTechnologyDropdownOpen(prev => !prev);
                        }
                      }}
                      style={{ cursor: hasDropdown ? "pointer" : undefined }}
                    >
                      {isResources ? (
                        <span
                          className={`nav-link resources-nav-label ${resourcesDropdownOpen && !isMobile ? "active" : ""} bold`}
                        >
                          {name} <span className="resources-caret">{resourcesDropdownOpen && !isMobile ? '▲' : '▾'}</span>
                        </span>
                      ) : isTechnology ? (
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

                    {isTechnology && technologyDropdownOpen && !isMobile && ReactDOM.createPortal(
                      <div 
                        className="dropdown-menu technology-dropdown-menu"
                        onMouseEnter={() => {
                          if (dropdownCloseTimeout.current) {
                            clearTimeout(dropdownCloseTimeout.current);
                            dropdownCloseTimeout.current = null;
                          }
                          setTechnologyDropdownOpen(true);
                        }}
                        onMouseLeave={() => {
                          dropdownCloseTimeout.current = setTimeout(() => {
                            setTechnologyDropdownOpen(false);
                            setOpenTechSub(null);
                          }, 500);
                        }}
                      >
                        <div className="technology-dropdown-container">
                          <div className="newheader-submenu-list">
                            {technologyMenuData[0].dropdown.map((service, sIdx) => (
                              <div
                                key={service.title}
                                className={`newheader-submenu-title${openTechSub === sIdx ? " active" : ""}`}
                                onMouseEnter={() => setOpenTechSub(sIdx)}
                                onClick={() => {
                                  navigate(getTechnologyPath(service.title));
                                  setTechnologyDropdownOpen(false);
                                }}
                                style={{ cursor: 'pointer' }}
                                tabIndex={0}
                              >
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
                                      onClick={() => {
                                        navigate(getTechnologyPath(technologyMenuData[0].dropdown[openTechSub].title, 'services'));
                                        setTechnologyDropdownOpen(false);
                                      }}
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
                                      onClick={() => {
                                        navigate(getTechnologyPath(technologyMenuData[0].dropdown[openTechSub].title, 'techStack'));
                                        setTechnologyDropdownOpen(false);
                                      }}
                                      style={{ cursor: 'pointer' }}
                                    >
                                      <span className="newheader-tech-icon">
                                        <img src={tech.image} alt={tech.label} style={{ width: 20, height: 20, verticalAlign: 'middle', display: 'inline-block' }} />
                                      </span> {tech.label}
                                    </li>
                                  ))}
                                </ul>
                              </div>
                            </div>
                          )}
                        </div>
                      </div>,
                      document.body
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
