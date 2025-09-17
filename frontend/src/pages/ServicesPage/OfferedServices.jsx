import React, { useState, useEffect } from "react";
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
  const [isVisible, setIsVisible] = useState(false);
  const [cardsVisible, setCardsVisible] = useState([]);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 200);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (isVisible) {
      services.forEach((_, index) => {
        setTimeout(() => {
          setCardsVisible(prev => [...prev, index]);
        }, 300 + (index * 150));
      });
    }
  }, [isVisible]);

  return (
    <div className="services-rectangle">
    <section className={`offered-services-section ${isVisible ? 'visible' : ''}`}>
      <div className="offered-services-header">
      <h2 className="services-title">Services We Offer</h2>
      <p className="services-description">
       We work together with our client to execute impactful product.
      </p>
      </div>
      <div className="services-grid">
        {services.map((service, index) => {
          const isCardVisible = cardsVisible.includes(index);
          return (
            <div
              className={`service-card ${isCardVisible ? 'visible' : ''}`}
              key={index}
              style={{
                opacity: isCardVisible ? 1 : 0,
                transform: isCardVisible ? 'translateY(0) scale(1)' : 'translateY(40px) scale(0.9)',
                transition: `all 0.6s cubic-bezier(0.4, 0, 0.2, 1) ${index * 0.1}s`
              }}
            >
              <div className="icon-rectangle">
                <div className="services-icon">
                  <img
                    src={service.serviceIcon}
                    alt={service.title}
                    style={{
                      width: '100px',
                      height: '100px',
                      transition: 'transform 0.4s cubic-bezier(0.4, 0, 0.2, 1)'
                    }}
                  />
                </div>
              </div>
              <h3 className="service-title">{service.title}</h3>
              <p className="service-description">{service.description}</p>
            </div>
          );
        })}
      </div>
    </section>
    </div>
  );
};

export default OfferedServices;
