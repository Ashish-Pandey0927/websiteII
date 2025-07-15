import React from "react";
import "../ServicesSubPagesServices.css";
import FrontendDevelopment from '../../../assets/breadcrumb_12098294.svg';
import BackendDevelopment from '../../../assets/black-box_13092109.svg';
import SalesforceWeb from '../../../assets/technology_10644653.svg';
import ThirdPartyServices from '../../../assets/teamwork_9161754.svg';
import DeploymentAndHosting from '../../../assets/cloud-computing_5993762.svg';
import MaintenanceAndUpdates from '../../../assets/reboot_11494716.svg';

const services = [
  {
    title: "Frontend Development",
    description: "Our frontend development team builds responsive, intuitive interfaces that enhance user experience. We use modern frameworks like React and Vue.js for speed and scalability. Every design is optimized for performance across all devices.",
    icon: FrontendDevelopment,
    isSvg: false,
  },
  {
    title: "Backend Development",
    description: "We build secure and scalable backend systems with robust APIs and efficient database management. Using technologies like Node.js and Python, we ensure smooth, reliable performance.",
    icon: BackendDevelopment,
    isSvg: false,
  },
  {
    title: "Salesforce Web Component",
    description: "We specialize in building custom Salesforce Web Components (LWC) for dynamic, responsive user experiences. Our solutions seamlessly integrate with your Salesforce data and workflows. Enhance productivity with fast, scalable, and reusable components.",
   icon: SalesforceWeb,
    isSvg: false,
  },
  {
    title: "Integration of Third-Party Services",
    description: "We integrate third-party services like payment gateways, CRMs, and marketing tools to boost functionality. Our solutions ensure secure, seamless connectivity across platforms.",
    icon: ThirdPartyServices,
    isSvg: false,
  },
  {
    title: "Deployment and Hosting",
    description: "We handle end-to-end deployment and hosting to ensure your website or application is fast, secure, and always available. From cloud setup to continuous delivery, we’ve got you covered.",
    icon: DeploymentAndHosting,
    isSvg: false,
  },
  {
    title: "Maintenance and Updates",
    description: "We provide ongoing maintenance and updates to keep your website or app secure, up-to-date, and running smoothly. Regular monitoring and improvements ensure optimal performance and user experience.",
    icon: MaintenanceAndUpdates,
    isSvg: false,}
];

export default function WebDevServices() {
  return (
    <section  id="webdevservices" className="webservices-section">
      <div className="webservices-header">
        <h2>Web Services We Offer</h2>
        <p>We build fast, responsive, and scalable websites that drive results.</p>
      </div>

      <div className="webservices-grid">
        {services.map((service, index) => (
          <div key={index} className="webservice-card">
            <div className="webservice-icon-wrapper">
              <div className="webservice-icon-bg" />
              <img src={service.icon} alt={service.title} className="webservice-icon-img" />
            </div>
            <h3>{service.title}</h3>
            <p>{service.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
