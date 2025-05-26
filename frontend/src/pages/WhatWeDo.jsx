import React from 'react';
import './WhatWeDo.css';

const serviceData = [
  {
    title: "Mobile Development",
    description: "Mobile apps offer a wide range of benefits to customers, enhancing their overall experience and providing convenience, accessibility, and value. Here are some key benefits that mobile apps bring to customers",
    icon: "MobileDevelopment.png",
    top: "184px",
    left: "166.35px"
  },
  {
    title: "Web Development",
    description: "Web apps offer customers a flexible, accessible, and user-friendly platform for accessing services, information, and functionality over the internet. By leveraging the capabilities of web technologies.",
    icon: "WebDevelopment.png",
    top: "184px",
    left: "822.9px"
  },
  {
    title: "Cloud Services",
    description: "Mobile apps offer a wide range of benefits to customers, enhancing their overall experience and providing convenience, accessibility, and value. Here are some key benefits that mobile apps bring to customers",
    icon: "CloudServices.png",
    top: "408px",
    left: "166.35px"
  },
  {
    title: "Quality Assurance",
    description: "Web apps offer customers a flexible, accessible, and user-friendly platform for accessing services, information, and functionality over the internet. By leveraging the capabilities of web technologies.",
    icon: "QualityAssurance.png",
    // top: "408px",
    // left: "822.9px"
  },
  {
    title: "SalesForce Solution",
    description: "Mobile apps offer a wide range of benefits to customers, enhancing their overall experience and providing convenience, accessibility, and value. Here are some key benefits that mobile apps bring to customers",
    icon: "SalesForceSolution.png",
    top: "632px",
    left: "166.35px"
  },
  {
    title: "CI/CD Devops",
    description: "Web apps offer customers a flexible, accessible, and user-friendly platform for accessing services, information, and functionality over the internet. By leveraging the capabilities of web technologies.",
    icon: "Devops.png",
    top: "632px",
    left: "822.9px"
  }
];

const WhatWeDo = () => {
  return (
    <section className="what-we-do">
      <h1 className="what-we-do-title">What We Do</h1>
      <p className="what-we-do-subtitle">We work together with our client to execute impactful product.</p>
      <div className="services-wrapper">
        {serviceData.map((service, index) => (
          <div
            className="what-we-do-service-card"
            key={index}
          >
            <div className="icon-bg"></div>
            <img src={`/${service.icon}`} alt={service.title} className="icon" />
            <h3 className="what-we-do-service-title">{service.title}</h3>
            <p className="what-we-do-service-description">{service.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default WhatWeDo;
