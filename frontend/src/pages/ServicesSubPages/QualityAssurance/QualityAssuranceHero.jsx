import React, { useState } from 'react';
import '../Hero.css';
import DashboardHeader from '../../../components/DashboardHeader';

function QualityAssuranceHero() {
      const [activeLink, setActiveLink] = useState('#qualityassurance');
  return (
      <div
        id="qa-hero"
        className="services-sub-pages-container quality-assurance-hero">
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
            Built to Perform, Tested to Last
            </div>
          </div>
          <div
            className="services-sub-pages-hero-content">
            <h1 className="services-sub-pages-hero-heading" >
             Quality <br/>Assurance
            </h1>
            <p className="services-sub-pages-hero-paragraph">Our Quality Assurance (QA) services ensure your software meets the highest standards of performance, reliability, and user experience. Through rigorous testing and industry-best practices, we help you deliver bug-free, secure, and seamless applications to your customers.</p>
          </div>
      </div>
  );
}

export default QualityAssuranceHero
