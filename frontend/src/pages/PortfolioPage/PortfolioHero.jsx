import React, { useState } from "react";
import '../../styles/commonHero.css';
import DashboardHeader from "../../components/DashboardHeader";

const PortfolioHero = () => {
  const [activeLink, setActiveLink] = useState('#Portfolio');
  return (
    <div id="portfolio-hero" className="hero-container portfolio-hero-container">
      <DashboardHeader activeLink={activeLink} setActiveLink={setActiveLink} />
      <div className="Group-Service-page-hero">
        <div className="hero-highlight-wrapper">
          <div className="hero-vector-highlight">
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
          <div className="hero-highlight-text">
            Showcasing Excellence Through Proven Work
          </div>
        </div>
        <div className="hero-content">
          <h1 className="hero-heading">
            Solving big problems<br />with bigger Ideas
          </h1>
          <p className="hero-paragraph">
            See how we turn complex challenges into scalable, smart, and secure digital solutions
          </p>
        </div>
      </div>
    </div>
  );
};

export default PortfolioHero;
