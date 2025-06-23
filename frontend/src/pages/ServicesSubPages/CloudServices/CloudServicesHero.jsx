import React, { useState } from 'react';
import '../Hero.css';
import DashboardHeader from '../../../components/DashboardHeader';

function CloudServicesHero() {
      const [activeLink, setActiveLink] = useState('#cloudservices');
  return (
      <div
        className="services-sub-pages-container cloud-services-hero">
        <DashboardHeader  activeLink={activeLink} setActiveLink={setActiveLink} />
          <div
            className="services-sub-pages-hero-content">
            <h1 className="services-sub-pages-hero-heading" >
              Cloud Services
            </h1>
            <p className="services-sub-pages-hero-paragraph">We provide reliable cloud services that help businesses scale efficiently, improve data security, and reduce infrastructure costs. Our solutions are designed for flexibility, performance, and seamless integration.</p>
          </div>
      </div>
  );
}

export default CloudServicesHero
