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
    description: 'Custom iOS and Android applications tailored to enhance user engagement, providing seamless performance, intuitive user interfaces, and robust offline capabilities.',
    serviceIcon: MobileIcon,
    isSvg: false,
  },
  {
    title: 'Web Development',
    description: 'Responsive, high-performance web applications built with modern frontend frameworks and scalable backends to deliver optimal speed, security, and user experience.',
    serviceIcon: WebIcon,
    isSvg: false,
  },
  {
    title: 'Cloud Services',
    description: 'Scalable cloud infrastructure hosting, serverless computing, and managed cloud storage solutions designed to optimize operational costs and ensure maximum uptime.',
      serviceIcon: CloudIcon,
    isSvg: false,
  },
  {
    title: 'Quality Assurance',
    description: 'Rigorous software testing, including automated regression, security auditing, and load testing to guarantee bug-free deployments and stable user experiences.',
   serviceIcon: QAIcon,
    isSvg: false,
  },
  {
    title: 'SalesForce Solution ',
    description: 'Custom Salesforce integration, CRM optimization, and workflow automation tailored to streamline sales processes, customer support, and business analytics.',
   serviceIcon: SalesforceIcon,
    isSvg: false,
  },
  {
    title: 'CI/CD Devops ',
    description: 'Automated integration and delivery pipelines, container orchestration, and server monitoring configurations to ensure smooth, rapid, and secure software releases.',
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
