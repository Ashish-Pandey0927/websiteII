import React, { useState } from "react";
import './PortfolioHero.css';
import BlogBG from '../../assets/BlogBG.png';
import DashboardHeader from "../../components/DashboardHeader";

const PortfolioHero = () => {
  const [activeLink, setActiveLink] = useState('#Blogs');
  return (
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      <div
        className="portfolio-page-container"
        style={{
          backgroundImage: `url(${BlogBG}), linear-gradient(270deg, rgba(0, 0, 0, 0.0001) 0%, #161C2D 99.54%)`,
          backgroundBlendMode: 'multiply',
        }}
      >
        <DashboardHeader activeLink={activeLink} setActiveLink={setActiveLink} />
          <div
            className="portfolio-page-hero-content">
            <h1 className="portfolio-page-hero-heading" >
              Solving big problems with bigger Ideas
            </h1>
            <p className="portfolio-page-hero-paragraph"> See how we turn complex challenges into scalable, smart, and secure digital complex</p>
          </div>
        </div>
        </div>
  );
};

export default PortfolioHero;
