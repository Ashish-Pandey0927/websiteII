import React, { useState, useEffect } from "react";
import './Dashboard.css';
import useBackgroundImageBrightness from "../../components/useBackgroundImageBrightness";
import BG from '../../assets/BG.png';
import BG2 from '../../assets/BG2.png';
import BG3 from '../../assets/BG3.png';
import BG4 from '../../assets/BG4.png';
import DashboardHeader from "../../components/DashboardHeader";
import BackgroundSelector from "../../components/BackgroundSelector";
import { Link } from "react-router-dom";

const Dashboard = () => {
  const backgrounds = [BG, BG2, BG3, BG4];
  const [activeLink, setActiveLink] = useState('#home');
  const [bgImage, setBgImage] = useState(BG);
  const iconColor = useBackgroundImageBrightness(bgImage);

  // Automatically change background every 10 seconds
  useEffect(() => {
    let idx = backgrounds.indexOf(bgImage);
    const interval = setInterval(() => {
      idx = (idx + 1) % backgrounds.length;
      setBgImage(backgrounds[idx]);
    }, 5000);
    return () => clearInterval(interval);
    // eslint-disable-next-line
  }, [bgImage]);

  // Preload all background images once
  useEffect(() => {
    backgrounds.forEach(src => {
      const img = new window.Image();
      img.src = src;
    });
  }, []);

  return (
    <div className="home-dashboard-container attractive-bg" id="home"
      style={{
        backgroundImage: `url(${bgImage}), linear-gradient(270deg, rgba(0, 0, 0, 0.0001) 0%, #161C2D 99.54%)`,
        backgroundBlendMode: 'multiply'
      }}
    >
      <DashboardHeader activeLink={activeLink} setActiveLink={setActiveLink} iconColor={iconColor} />

      <div className="highlight-wrapper">
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

        <div className="highlight-text">
          World best consulting firm
        </div>
      </div>

      <div className="hero-content">
        <h1 className="hero-heading">
          Unlock your ideas with <br />
          Estonsoft's <br />
          transformative solutions.
        </h1>
        <Link to="/contact#form">
        <button className="cta-button">
          <span>Get in Touch</span>
          <span className="arrow-icon">↗</span>
        </button>
        </Link>
      </div>
      <BackgroundSelector
        backgrounds={backgrounds}
        currentBg={bgImage}
        onChange={setBgImage}
      />
    </div>
  );
};

export default Dashboard;
