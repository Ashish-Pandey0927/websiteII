import React from "react";
import "../ServicesSubPagesServices.css";
import CloudDevOpsServices from '../../../assets/CloudDevOpsServices.svg';
import AWSDevopsServices from '../../../assets/AWSDevopsServices.svg';
import GCPDevopsServices from '../../../assets/GCPDevopsServices.svg';
import AzureDevopsServices from '../../../assets/AzureDevopsServices.svg';

const services = [
  {
    title: "Cloud DevOps Services",
    description: "Our Cloud DevOps services streamline development and operations by automating deployments, enhancing scalability, and ensuring continuous integration and delivery. We help businesses innovate faster, reduce downtime, and achieve reliable infrastructure management in the cloud.",
    icon: CloudDevOpsServices,
    isSvg: false,
  },
  {
    title: "AWS Devops Services",
    description: "Our AWS DevOps services help businesses automate deployments, implement CI/CD pipelines, and manage infrastructure using tools like CodePipeline, CloudFormation, and EC2. We ensure faster delivery, scalability, and high availability on the AWS cloud.",
    icon: AWSDevopsServices,
    isSvg: false,
  },
  {
    title: "GCP Devops Services",
    description: "Our GCP DevOps services streamline development with automated CI/CD pipelines, infrastructure as code using Deployment Manager, and robust monitoring via Cloud Operations. We help teams deploy faster and scale seamlessly on Google Cloud.",
   icon: GCPDevopsServices,
    isSvg: false,
  },
  {
    title: "Azure Devops Services",
    description: "Our Azure DevOps services enable rapid development and deployment through CI/CD pipelines, Azure Repos, and Infrastructure as Code with ARM templates. We ensure secure, scalable, and efficient delivery across your cloud applications.",
    icon: AzureDevopsServices,
    isSvg: false,
  }
];

export default function CI_CD_DevOpsServices() {
  return (
    <section id="cicdservices" className="webservices-section">
      <div className="webservices-header">
        <h2>CI/CD DevOps Services We Offer</h2>
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
