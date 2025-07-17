import React, { useState } from 'react';
import '../../styles/commonHero.css';
import DashboardHeader from '../../components/DashboardHeader';

function ContactUsHero() {
  const [activeLink, setActiveLink] = useState('#contact');
  return (
    <div id="contact-hero" className="hero-container contact-hero-container">
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
            Let’s Connect and Create Something Great
          </div>
        </div>
        <div className="hero-content">
          {/* <div className="hero-label">CONTACT US</div> */}
          <h1 className="hero-heading">Get in Touch</h1>
          <p className="hero-paragraph">
           We’re Just a Message Away — Let’s Connect, Collaborate, and Create Something Truly Meaningful Together
          </p>
        </div>
      </div>
    </div>
  );
}

export default ContactUsHero;