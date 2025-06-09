import React, { useState } from 'react';
import '../Hero.css';
import salesforceBG from '../../../assets/salesforceBG.png';
import DashboardHeader from '../../../components/DashboardHeader';

function SalesforceHero() {
      const [activeLink, setActiveLink] = useState('#salesforce');
  return (
      <div
        className="web-development-page-container"
        style={{
          backgroundImage: `url(${salesforceBG}), linear-gradient(270deg, rgba(0, 0, 0, 0.0001) 0%, #161C2D 99.54%)`,
          backgroundBlendMode: 'multiply',
        }}
      >
        <DashboardHeader  activeLink={activeLink} setActiveLink={setActiveLink} />
          <div
            className="web-development-page-hero-content">
            <h1 className="web-development-page-hero-heading" >
              Salesforce Solutions
            </h1>
            <p className="web-development-page-hero-paragraph">We help businesses get the most out of Salesforce with customized solutions that streamline processes, enhance customer relationships, and drive growth. Our team delivers expert implementation, integration, and support tailored to your needs.</p>
          </div>
      </div>
  );
}

export default SalesforceHero
