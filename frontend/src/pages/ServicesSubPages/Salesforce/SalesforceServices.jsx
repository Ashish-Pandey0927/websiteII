import React from "react";
import "../ServicesSubPagesServices.css";
import SalesforceDevelopment from '../../../assets/SalesforceDevelopment.svg';
import ApexProgramming from '../../../assets/ApexProgramming.svg';
import SalesforceLWC from '../../../assets/Salesforce(LWC).svg';
import SalesforceIntegration from '../../../assets/SalesforceIntegration.svg';
import SalesforceCustomObjectsFields from '../../../assets/SalesforceCustomObjects&Fields.svg';
import SalesforceDataMigration from '../../../assets/SalesforceDataMigration.svg';

const services = [
  {
    title: "Salesforce Development",
    description: "We offer expert Salesforce development services, building custom apps, automations, and integrations that extend platform functionality and meet your unique business needs. From Apex coding to Lightning components, we deliver scalable, high-performance solutions.",
    icon: SalesforceDevelopment,
    isSvg: false,
  },
  {
    title: "Apex Programming",
    description: "Our team specializes in Apex programming to create powerful, scalable backend logic on the Salesforce platform. From custom triggers and classes to complex business workflows, we deliver clean, efficient code tailored to your business processes.",
    icon: ApexProgramming,
    isSvg: false,
  },
  {
    title: "Salesforce Lightning Web Components (LWC)",
    description: "We develop custom Salesforce Lightning Web Components (LWC) to deliver fast, modern, and responsive user experiences. Using the latest web standards, our LWCs are built for performance, scalability, and seamless integration with your Salesforce data.",
   icon: SalesforceLWC,
    isSvg: false,
  },
  {
    title: "Salesforce Integration",
    description: "We provide robust Salesforce integration services to connect your CRM with third-party systems, enabling seamless data flow, enhanced productivity, and real-time insights. Whether it’s REST APIs, middleware, or custom solutions, we ensure secure and scalable integration.",
    icon: SalesforceIntegration,
    isSvg: false,
  },
  {
    title: "Salesforce Custom Objects & Fields",
    description: "We create Salesforce custom objects and fields tailored to your business needs, enabling you to capture and manage data beyond standard CRM functionality. Our solutions ensure your Salesforce environment reflects your unique processes and workflows.",
    icon: SalesforceCustomObjectsFields,
    isSvg: false,
  },
  {
    title: "Salesforce Data Migration",
    description: "We offer end-to-end Salesforce data migration services to securely move your data from legacy systems or other CRMs into Salesforce. Our process ensures data accuracy, integrity, and minimal downtime, so you can transition with confidence.",
    icon: SalesforceDataMigration,
    isSvg: false,}
];

export default function SalesforceServices() {
  return (
    <section id="salesforceservices" className="webservices-section">
      <div className="webservices-header">
        <h2>Salesforce Services We Offer</h2>
        <p>We provide expert Salesforce solutions to streamline operations and drive growth.</p>
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
