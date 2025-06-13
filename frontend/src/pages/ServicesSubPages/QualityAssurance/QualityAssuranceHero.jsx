import React, { useState } from 'react';
import '../Hero.css';
import qualityassuranceBG2 from '../../../assets/qualityassuranceBG2.png';
import DashboardHeader from '../../../components/DashboardHeader';

function QualityAssuranceHero() {
      const [activeLink, setActiveLink] = useState('#qualityassurance');
  return (
      <div
        className="web-development-page-container"
        style={{
          backgroundImage: `url(${qualityassuranceBG2}), linear-gradient(270deg, rgba(0, 0, 0, 0.0001) 0%, #161C2D 99.54%)`,
          backgroundBlendMode: 'multiply',
        }}
      >
        <DashboardHeader  activeLink={activeLink} setActiveLink={setActiveLink} />
          <div
            className="web-development-page-hero-content">
            <h1 className="web-development-page-hero-heading" >
             Quality Assurance
            </h1>
            <p className="web-development-page-hero-paragraph">Our Quality Assurance (QA) services ensure your software meets the highest standards of performance, reliability, and user experience. Through rigorous testing and industry-best practices, we help you deliver bug-free, secure, and seamless applications to your customers.</p>
          </div>
      </div>
  );
}

export default QualityAssuranceHero
