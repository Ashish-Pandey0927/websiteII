import React, { useState } from "react";
import '../../styles/commonHero.css';
import DashboardHeader from "../../components/DashboardHeader";

const AboutUsHero = () => {
  const [activeLink, setActiveLink] = useState('#Services');
  return (
    <div id="aboutus-hero" className="hero-container about-hero-container">
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
            Driven by Innovation, Defined by Passion
          </div>
        </div>
        <div className="hero-content">
          <h1 className="hero-heading">About Us</h1>
          <p className="hero-paragraph">
            We blend technology, creativity, and strategy to help businesses grow in the digital era. Our team is driven by innovation, guided by integrity, and committed to delivering solutions that make a real impact. With every project, we aim to build trust, exceed expectations, and shape a smarter future together.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutUsHero;

