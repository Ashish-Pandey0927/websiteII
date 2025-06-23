import React, { useState } from 'react';
import '../Hero.css';
import DashboardHeader from '../../../components/DashboardHeader';

function QualityAssuranceHero() {
      const [activeLink, setActiveLink] = useState('#qualityassurance');
  return (
      <div
        className="services-sub-pages-container quality-assurance-hero">
        <DashboardHeader  activeLink={activeLink} setActiveLink={setActiveLink} />
          <div
            className="services-sub-pages-hero-content">
            <h1 className="services-sub-pages-hero-heading" >
             Quality Assurance
            </h1>
            <p className="services-sub-pages-hero-paragraph">Our Quality Assurance (QA) services ensure your software meets the highest standards of performance, reliability, and user experience. Through rigorous testing and industry-best practices, we help you deliver bug-free, secure, and seamless applications to your customers.</p>
          </div>
      </div>
  );
}

export default QualityAssuranceHero
