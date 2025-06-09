import React, { useState } from 'react';
import '../Hero.css';
import webDevelopmentBG from '../../../assets/web-development-BG.png';
import DashboardHeader from '../../../components/DashboardHeader';

function WebDevHero() {
      const [activeLink, setActiveLink] = useState('#webdevelopment');
  return (
      <div
        className="web-development-page-container"
        style={{
          backgroundImage: `url(${webDevelopmentBG}), linear-gradient(270deg, rgba(0, 0, 0, 0.0001) 0%, #161C2D 99.54%)`,
          backgroundBlendMode: 'multiply',
        }}
      >
        <DashboardHeader  activeLink={activeLink} setActiveLink={setActiveLink} />
          <div
            className="web-development-page-hero-content">
            <h1 className="web-development-page-hero-heading" >
              Web Development
            </h1>
            <p className="web-development-page-hero-paragraph">We offer professional web development services that deliver fast, responsive, and secure websites tailored to your business needs. Our team ensures each site is optimized for performance, user experience, and growth.</p>
          </div>
      </div>
  );
}

export default WebDevHero
