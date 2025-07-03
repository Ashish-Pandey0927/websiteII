import React from "react";
import "./OfferedServices.css";
import MobileIcon from "../../assets/app-development.svg";
import WebIcon from "../../assets/web-development.svg";
import CloudIcon from "../../assets/cloud-computing.svg"
import QAIcon from "../../assets/quality-assurance.svg"
import SalesforceIcon from "../../assets/sales-force_17645757.svg"
import DevOpsIcon from "../../assets/Devops.svg";

const services = [
  {
    title: 'Mobile Development',
    description: 'Mobile apps offer a wide range of benefits to customers, enhancing their overall experience and providing convenience, accessibility, and value. Here are some key benefits that mobile apps bring to customers',
    serviceIcon: MobileIcon,
    isSvg: false,
  },
  {
    title: 'Web Development',
    description: 'Web apps offer customers a flexible, accessible, and user-friendly platform for accessing services, information, and functionality over the internet. By leveraging the capabilities of web technologies.',
    serviceIcon: WebIcon,
    isSvg: false,
  },
  {
    title: 'Cloud Services',
    description: 'Mobile apps offer a wide range of benefits to customers, enhancing their overall experience and providing convenience, accessibility, and value. Here are some key benefits that mobile apps bring to customers',
      serviceIcon: CloudIcon,
    isSvg: false,
  },
  {
    title: 'Quality Assurance',
    description: 'Web apps offer customers a flexible, accessible, and user-friendly platform for accessing services, information, and functionality over the internet. By leveraging the capabilities of web technologies.',
   serviceIcon: QAIcon,
    isSvg: false,
  },
  {
    title: 'SalesForce Solution ',
    description: 'Mobile apps offer a wide range of benefits to customers, enhancing their overall experience and providing convenience, accessibility, and value. Here are some key benefits that mobile apps bring to customers',
   serviceIcon: SalesforceIcon,
    isSvg: false,
  },
  {
    title: 'CI/CD Devops ',
    description: 'Web apps offer customers a flexible, accessible, and user-friendly platform for accessing services, information, and functionality over the internet. By leveraging the capabilities of web technologies.',
  serviceIcon: DevOpsIcon,
    isSvg: false,
  },
];

const OfferedServices = () => {
  return (
    <div className="services-rectangle">
    <section className="offered-services-section">
      <div className="offered-services-header">
      <h2 className="services-title">Services We Offer</h2>
      <p className="services-description">
       We work together with our client to execute impactful product.
      </p>
      </div>
      <div className="services-grid">
        {services.map((service, index) => (
          <div className="service-card" key={index}>
            <div className="icon-rectangle">
            <div className="services-icon">
              <img src={service.serviceIcon} alt={service.title}    style={{ width: '100px', height: '100px' }} />
            </div>
            </div>
            <h3 className="service-title">{service.title}</h3>
            <p className="service-description">{service.description}</p>
          </div>
        ))}
      </div>
    </section>
    </div>
  );
};

export default OfferedServices;
