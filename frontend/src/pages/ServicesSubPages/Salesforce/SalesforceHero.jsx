import React, { useState } from 'react';
import '../Hero.css';
import DashboardHeader from '../../../components/DashboardHeader';

function SalesforceHero() {
      const [activeLink, setActiveLink] = useState('#salesforce');
  return (
      <div
      id='salesforce-hero'
        className="services-sub-pages-container salesforce-hero">
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
         Custom Salesforce Solutions That Work
            </div>
          </div>
          <div
            className="services-sub-pages-hero-content">
            <h1 className="services-sub-pages-hero-heading" >
              Salesforce<br/> Solutions
            </h1>
            <p className="services-sub-pages-hero-paragraph">We help businesses get the most out of Salesforce with customized solutions that streamline processes, enhance customer relationships, and drive growth. Our team delivers expert implementation, integration, and support tailored to your needs.</p>
          </div>
      </div>
  );
}

export default SalesforceHero
