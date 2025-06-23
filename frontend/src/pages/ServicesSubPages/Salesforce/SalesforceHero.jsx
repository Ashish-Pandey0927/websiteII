import React, { useState } from 'react';
import '../Hero.css';
import DashboardHeader from '../../../components/DashboardHeader';

function SalesforceHero() {
      const [activeLink, setActiveLink] = useState('#salesforce');
  return (
      <div
        className="services-sub-pages-container salesforce-hero">
        <DashboardHeader  activeLink={activeLink} setActiveLink={setActiveLink} />
          <div
            className="services-sub-pages-hero-content">
            <h1 className="services-sub-pages-hero-heading" >
              Salesforce Solutions
            </h1>
            <p className="services-sub-pages-hero-paragraph">We help businesses get the most out of Salesforce with customized solutions that streamline processes, enhance customer relationships, and drive growth. Our team delivers expert implementation, integration, and support tailored to your needs.</p>
          </div>
      </div>
  );
}

export default SalesforceHero
