import React, { useState } from 'react';
import '../Hero.css';
import DashboardHeader from '../../../components/DashboardHeader';

function WebDevHero() {
      const [activeLink, setActiveLink] = useState('#webdevelopment');
  return (
      <div
        className="services-sub-pages-container web-dev-hero">
        <DashboardHeader  activeLink={activeLink} setActiveLink={setActiveLink} />
          <div
            className="services-sub-pages-hero-content">
            <h1 className="services-sub-pages-hero-heading" >
              Web Development
            </h1>
            <p className="services-sub-pages-hero-paragraph">We offer professional web development services that deliver fast, responsive, and secure websites tailored to your business needs. Our team ensures each site is optimized for performance, user experience, and growth.</p>
          </div>
      </div>
  );
}

export default WebDevHero
