import React, { useState } from "react";
import './ServicePage.css';
import ServicePageBG from '../../assets/ServicePageBG.png';

import DashboardHeader from "../../components/DashboardHeader";



const ServicePage = () => {
  const [activeLink, setActiveLink] = useState('#home');
  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      <div
        className="service-page-container"
        style={{
          backgroundImage: `url(${ServicePageBG}), linear-gradient(270deg, rgba(0, 0, 0, 0.0001) 0%, #161C2D 99.54%)`,
          backgroundBlendMode: 'multiply',
        }}
      >
        <DashboardHeader activeLink={activeLink} setActiveLink={setActiveLink} />
        <div className="Group-1171274896">
          <div
            className="service-page-highlight-wrapper"
          >
            <div className="service-page-vector-highlight">
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
              className="service-page-highlight-text"
            >
              Empower your business with Expert Services
            </div>
          </div>

          <div
            className="service-page-hero-content">
            <h1 className="service-page-hero-heading" >
              Solution that drive success
            </h1>
            <p className="service-page-hero-paragraph">From strategy to execution, our team delivers tailored solutiotns to help you scale, innovate, and lead your industry.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServicePage;
