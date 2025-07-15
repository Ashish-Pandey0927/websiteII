import React from "react";
import "../ServicesSubPagesServices.css";
import cloudServices from '../../../assets/CloudServices.svg';
import awsServices from '../../../assets/awsServices.svg';
import GCPServices from '../../../assets/GCPServices.svg';
import AzureServices from '../../../assets/AzureServices.svg';

const services = [
  {
    title: "Cloud Services",
    description: "Our cloud services offer secure, scalable solutions that help businesses streamline operations, reduce costs, and stay agile. Whether you need storage, backup, or full cloud infrastructure, we deliver reliable performance with expert support.",
    icon: cloudServices,
    isSvg: false,
  },
  {
    title: "AWS Services",
    description: "We offer expert AWS cloud services to help businesses scale efficiently and securely. From migration and deployment to management and optimization, our solutions leverage the full power of Amazon Web Services to drive performance and innovation.",
    icon: awsServices,
    isSvg: false,
  },
  {
    title: "GCP Services",
    description: "We provide tailored GCP (Google Cloud Platform) services to help businesses innovate, scale, and operate more efficiently. From cloud migration to data analytics and AI integration, our GCP solutions are designed for high performance, security, and cost-effectiveness.",
   icon: GCPServices,
    isSvg: false,
  },
  {
    title: "Azure Services",
    description: "We offer end-to-end Microsoft Azure services to help businesses build, deploy, and manage applications through a global network of data centers. Our solutions leverage Azure’s powerful tools for cloud computing, AI, and security to drive digital transformation and operational efficiency.",
    icon: AzureServices,
    isSvg: false,
  }
];

export default function CloudServicesServices() {
  return (
    <section id="cloudservices" className="webservices-section">
      <div className="webservices-header">
        <h2>Cloud Services We Offer</h2>
        <p>Scalable and secure cloud services to power your business with flexibility and efficiency.</p>
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
