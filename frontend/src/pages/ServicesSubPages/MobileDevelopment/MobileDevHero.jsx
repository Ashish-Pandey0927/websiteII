import React, { useState } from 'react';
import '../Hero.css';
import mobiledevelopmentBG2 from '../../../assets/mobiledevelopmentBG2.png';
import DashboardHeader from '../../../components/DashboardHeader';

function MobileDevHero() {
      const [activeLink, setActiveLink] = useState('#mobiledevelopment');
  return (
      <div
        className="web-development-page-container"
        style={{
          backgroundImage: `url(${mobiledevelopmentBG2}), linear-gradient(270deg, rgba(0, 0, 0, 0.0001) 0%, #161C2D 99.54%)`,
          backgroundBlendMode: 'multiply',
        }}
      >
        <DashboardHeader  activeLink={activeLink} setActiveLink={setActiveLink} />
          <div
            className="web-development-page-hero-content">
            <h1 className="web-development-page-hero-heading" >
              Mobile Development
            </h1>
            <p className="web-development-page-hero-paragraph">We specialize in mobile app development, creating high-performance, user-friendly applications for iOS and Android. Using the latest technologies like Swift, Kotlin, and Flutter, we deliver seamless mobile experiences tailored to your business needs.</p>
          </div>
      </div>
  );
}

export default MobileDevHero
