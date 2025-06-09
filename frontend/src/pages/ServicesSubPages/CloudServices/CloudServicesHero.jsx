import React, { useState } from 'react';
import '../Hero.css';
import CloudServicesBG from '../../../assets/CloudServicesBG.png';
import DashboardHeader from '../../../components/DashboardHeader';

function CloudServicesHero() {
      const [activeLink, setActiveLink] = useState('#cloudservices');
  return (
      <div
        className="web-development-page-container"
        style={{
          backgroundImage: `url(${CloudServicesBG}), linear-gradient(270deg, rgba(0, 0, 0, 0.0001) 0%, #161C2D 99.54%)`,
          backgroundBlendMode: 'multiply',
        }}
      >
        <DashboardHeader  activeLink={activeLink} setActiveLink={setActiveLink} />
          <div
            className="web-development-page-hero-content">
            <h1 className="web-development-page-hero-heading" >
              Cloud Services
            </h1>
            <p className="web-development-page-hero-paragraph">We provide reliable cloud services that help businesses scale efficiently, improve data security, and reduce infrastructure costs. Our solutions are designed for flexibility, performance, and seamless integration.</p>
          </div>
      </div>
  );
}

export default CloudServicesHero
