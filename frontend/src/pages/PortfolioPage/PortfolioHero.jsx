import React, { useState } from "react";
import './PortfolioHero.css';
import DashboardHeader from "../../components/DashboardHeader";

const PortfolioHero = () => {
  const [activeLink, setActiveLink] = useState('#Blogs');
  return (
      <div
        className="portfolio-page-container">
        <DashboardHeader activeLink={activeLink} setActiveLink={setActiveLink} />
          <div
            className="portfolio-page-hero-content">
            <h1 className="portfolio-page-hero-heading" >
              Solving big problems with bigger Ideas
            </h1>
            <p className="portfolio-page-hero-paragraph"> See how we turn complex challenges into scalable, smart, and secure digital complex</p>
          </div>
        </div>
  );
};

export default PortfolioHero;
