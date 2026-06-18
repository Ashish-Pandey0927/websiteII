import React, { useState } from 'react';
import '../Hero.css';
import DashboardHeader from '../../../components/DashboardHeader';

function MobileDevHero() {
      const [activeLink, setActiveLink] = useState('#mobiledevelopment');
  return (
      <div
        id="mobile-dev-hero"
        className="services-sub-pages-container mobile-dev-hero">
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
            Engaging Apps, Built for Mobility
            </div>
          </div>
          <div
            className="services-sub-pages-hero-content">
            <h1 className="services-sub-pages-hero-heading" >
              Mobile <br/> Development
            </h1>
            <p className="services-sub-pages-hero-paragraph">We specialize in mobile app development, creating high-performance, user-friendly applications for iOS and Android. Using the latest technologies like Swift, Kotlin, and Flutter, we deliver seamless mobile experiences tailored to your business needs.</p>
          </div>
      </div>
  );
}

export default MobileDevHero
