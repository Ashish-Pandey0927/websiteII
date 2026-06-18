import React from "react";
import "../ServicesSubPagesServices.css";
import SalesforceTesting from '../../../assets/SalesforceTesting.svg';
import CloudServicesQA from '../../../assets/CloudServicesQA.svg';
import MobileAppsQA from '../../../assets/MobileAppsQA.svg';
import WebDevelopmentQA from '../../../assets/WebDevelopmentQA.svg';
import CICDandDevOpsTesting from '../../../assets/CI-CDandDevOpsTesting.svg';
import PerformanceandSecurityTesting from '../../../assets/PerformanceandSecurityTesting.svg';

const services = [
  {
    title: "Salesforce Testing",
    description: "We provide reliable Salesforce testing to ensure your CRM runs smoothly. From validating workflows to checking integrations and custom features, our experts help deliver error-free releases and a better user experience.",
    icon: SalesforceTesting,
    isSvg: false,
  },
  {
    title: "Cloud Services QA",
    description: "Our Cloud QA services ensure your cloud-based applications perform reliably, securely, and at scale. We test across environments for functionality, performance, and compliance—helping you deliver seamless, resilient digital experiences in dynamic cloud ecosystems.",
    icon: CloudServicesQA,
    isSvg: false,
  },
  {
    title: "Mobile Apps QA",
    description: "We deliver end-to-end mobile app QA to ensure flawless performance across devices, platforms, and networks. Our team tests functionality, usability, and compatibility to help you launch high-quality apps that users love.",
   icon: MobileAppsQA,
    isSvg: false,
  },
  {
    title: "Web Development QA",
    description: "Our Web QA services ensure your websites and web applications are bug-free, responsive, and user-friendly. We test across browsers, devices, and screen sizes to guarantee performance, security, and a seamless user experience.",
    icon: WebDevelopmentQA,
    isSvg: false,
  },
  {
    title: "CI/CD and DevOps Testing",
    description: "We integrate QA seamlessly into your CI/CD pipelines to ensure faster, more reliable releases. Our DevOps testing approach includes automated testing, environment validation, and continuous monitoring to catch issues early and maintain high-quality software at speed.",
    icon: CICDandDevOpsTesting,
    isSvg: false,
  },
  {
    title: "Performance and Security Testing",
    description: "We help ensure your applications run fast and stay secure under real-world conditions. Our testing covers load, stress, and vulnerability assessments to identify bottlenecks and risks—delivering resilient, high-performing, and safe software.",
    icon: PerformanceandSecurityTesting,
    isSvg: false,}
];

export default function QualityAssuranceServices() {
  return (
    <section id="qaservices" className="webservices-section">
      <div className="webservices-header">
        <h2>Quality Assurance Services We Offer</h2>
        <p>We ensure top-quality results through rigorous checks and continuous improvement.</p>
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
