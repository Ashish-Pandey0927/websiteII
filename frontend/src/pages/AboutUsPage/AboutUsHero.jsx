import React, { useState } from "react";
import './AboutUsHero.css';
import AboutUsHeroBG from '../../assets/AboutUsHero.png';
import DashboardHeader from "../../components/DashboardHeader";

const AboutUsHero = () => {
  const [activeLink, setActiveLink] = useState('#Services');
  return (

      <div
        className="aboutus-page-container"
        style={{
          backgroundImage: `url(${AboutUsHeroBG}), linear-gradient(270deg, rgba(0, 0, 0, 0.0001) 0%, #161C2D 99.54%)`,
          backgroundBlendMode: 'multiply',
        }}
      >
        <DashboardHeader activeLink={activeLink} setActiveLink={setActiveLink} />
        <div className="Group-1171274896">
          <div
            className="aboutus-page-hero-content">
            <h1 className="aboutus-page-hero-heading" >
              About Us
            </h1>
            <p className="aboutus-page-hero-paragraph">We blend technology, creativity, and strategy to help businesses grow in the digital era. Our team is driven by innovation, guided by integrity, and committed to delivering solutions that make a real impact. With every project, we aim to build trust, exceed expectations, and shape a smarter future together.</p>
          </div>
        </div>
      </div>
  );
};

export default AboutUsHero;

