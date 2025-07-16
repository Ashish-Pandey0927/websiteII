import React, { useState } from 'react';
import '../Hero.css';
import DashboardHeader from '../../../components/DashboardHeader';

function CI_CD_DevOpsHero() {
      const [activeLink, setActiveLink] = useState('#cicddevops');
  return (
      <div
      id="cicd-hero"
        className="services-sub-pages-container ci-cd-devops-hero">
        <DashboardHeader  activeLink={activeLink} setActiveLink={setActiveLink} />
          <div
            className="service-sub-page-highlight-wrapper"
          >
            <div className="service-sub-page-vector-highlight">
              <svg
                width="26"
                height="30"
                viewBox="0 0 26 30"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M12.7904 0.352417V14.8524M12.7904 29.3524V14.8524M12.7904 14.8524L1.57091 7.74457M12.7904 14.8524L24.5709 21.9603M12.7904 14.8524L1.57091 21.9603M12.7904 14.8524L24.5709 7.74457"
                  stroke="#A7F46A"
                  strokeWidth="4"
                />
              </svg>
            </div>

            <div
              className="service-sub-page-highlight-text"
            >
            Faster Releases with DevOps Automation
            </div>
          </div>
          <div
            className="services-sub-pages-hero-content">
            <h1 className="services-sub-pages-hero-heading" >
              CI/CD <br/>DevOps
            </h1>
            <p className="services-sub-pages-hero-paragraph">Our CI/CD DevOps services streamline software delivery by automating integration, testing, and deployment processes. We help businesses accelerate release cycles, maintain high code quality, and reduce time-to-market with robust pipelines and monitoring tools. From version control to production deployment, we ensure seamless, secure, and scalable workflows.</p>
          </div>
      </div>
  );
}

export default CI_CD_DevOpsHero
