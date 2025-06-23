import React, { useState } from 'react';
import '../Hero.css';
import DashboardHeader from '../../../components/DashboardHeader';

function CI_CD_DevOpsHero() {
      const [activeLink, setActiveLink] = useState('#cicddevops');
  return (
      <div
        className="services-sub-pages-container ci-cd-devops-hero">
        <DashboardHeader  activeLink={activeLink} setActiveLink={setActiveLink} />
          <div
            className="services-sub-pages-hero-content">
            <h1 className="services-sub-pages-hero-heading" >
              CI/CD DevOps
            </h1>
            <p className="services-sub-pages-hero-paragraph">Our CI/CD DevOps services streamline software delivery by automating integration, testing, and deployment processes. We help businesses accelerate release cycles, maintain high code quality, and reduce time-to-market with robust pipelines and monitoring tools. From version control to production deployment, we ensure seamless, secure, and scalable workflows.</p>
          </div>
      </div>
  );
}

export default CI_CD_DevOpsHero
