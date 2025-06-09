import React, { useState } from 'react';
import '../Hero.css';
import cicdBG from '../../../assets/cicdBG.png';
import DashboardHeader from '../../../components/DashboardHeader';

function CI_CD_DevOpsHero() {
      const [activeLink, setActiveLink] = useState('#cicddevops');
  return (
      <div
        className="web-development-page-container"
        style={{
          backgroundImage: `url(${cicdBG}), linear-gradient(270deg, rgba(0, 0, 0, 0.0001) 0%, #161C2D 99.54%)`,
          backgroundBlendMode: 'multiply',
        }}
      >
        <DashboardHeader  activeLink={activeLink} setActiveLink={setActiveLink} />
          <div
            className="web-development-page-hero-content">
            <h1 className="web-development-page-hero-heading" >
              CI/CD DevOps
            </h1>
            <p className="web-development-page-hero-paragraph">Our CI/CD DevOps services streamline software delivery by automating integration, testing, and deployment processes. We help businesses accelerate release cycles, maintain high code quality, and reduce time-to-market with robust pipelines and monitoring tools. From version control to production deployment, we ensure seamless, secure, and scalable workflows.</p>
          </div>
      </div>
  );
}

export default CI_CD_DevOpsHero
