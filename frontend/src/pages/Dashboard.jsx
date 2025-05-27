import React, { useState } from "react";
import './Dashboard.css';
import BG from '../assets/BG.png';
import BG2 from '../assets/BG2.png';
import BG3 from '../assets/BG3.png';
import BG4 from '../assets/BG4.png';
import DashboardHeader from "../components/DashboardHeader";
import BackgroundSelector from "../components/BackgroundSelector";


const Dashboard = () => {
  const [activeLink, setActiveLink] = useState('#home');
  const [bgImage, setBgImage] = useState(BG);

  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      <div
        className="dashboard-container"
        style={{
          backgroundImage: `url(${bgImage}), linear-gradient(270deg, rgba(0, 0, 0, 0.0001) 0%, #161C2D 99.54%)`,
          backgroundBlendMode: 'multiply',
        }}
      >
        <DashboardHeader className="dashboard-page-header" activeLink={activeLink} setActiveLink={setActiveLink} />

        <div
          className="highlight-wrapper"
        >
          <div className="vector-highlight">
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
            className="highlight-text"
          >
            World Best Digital Venture
          </div>
        </div>

        <div
          className="hero-content">
          <h1 className="hero-heading" >
            Unlock your ideas with <br />
            Estonsoft's <br />
            transformative <br />
            solutions.
          </h1>
          <button className="cta-button">
            <span>Get in Touch</span>
            <span className="arrow-icon">↗</span>
          </button>
        </div>
        <BackgroundSelector
          backgrounds={[BG, BG2, BG3, BG4]}
          currentBg={bgImage}
          onChange={setBgImage}
        />
      </div>
    </div>
  );
};

export default Dashboard;
