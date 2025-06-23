import React, { useState } from 'react';
import '../Hero.css';
import DashboardHeader from '../../../components/DashboardHeader';

function MobileDevHero() {
      const [activeLink, setActiveLink] = useState('#mobiledevelopment');
  return (
      <div
        className="services-sub-pages-container mobile-dev-hero">
        <DashboardHeader  activeLink={activeLink} setActiveLink={setActiveLink} />
          <div
            className="services-sub-pages-hero-content">
            <h1 className="services-sub-pages-hero-heading" >
              Mobile Development
            </h1>
            <p className="services-sub-pages-hero-paragraph">We specialize in mobile app development, creating high-performance, user-friendly applications for iOS and Android. Using the latest technologies like Swift, Kotlin, and Flutter, we deliver seamless mobile experiences tailored to your business needs.</p>
          </div>
      </div>
  );
}

export default MobileDevHero
