import React from 'react';
import "../TechCards.css";
import jenkinslogo from "../../../assets/logo/Jenkinslogo.png";

import gitlablogo from '../../../assets/logo/gitlablogo.png';
import circlecilogo from '../../../assets/logo/circlecilogo.png';
import TravisCILogo from '../../../assets/logo/TravisCILogo.png';
import awsCodePipelinelogo from '../../../assets/logo/awsCodePipelinelogo.png';
import githubActionslogo from '../../../assets/logo/githubActionslogo.png';
import azuredevopslogo from '../../../assets/logo/azuredevopslogo.png';
import dockerkuberneteslogo from '../../../assets/logo/dockerkuberneteslogo.png';
import terraformlogo from '../../../assets/logo/terraformlogo.png';
import helmChartslogo from '../../../assets/logo/helmChartslogo.png';

const techIcons = [
    {
        title: 'Jenkins',
        description: 'We create Lightning Web Components that are fast, reusable, and optimized for seamless Salesforce integration and user experience.',
        image: jenkinslogo,
    },
    {
        title: 'GitLab CI/CD',
        description: 'We develop robust Apex code to extend Salesforce functionality with custom logic, automation, and seamless backend integrations tailored to your business needs.',
        image: gitlablogo,
    },
    {
        title: 'CircleCI',
        description: 'We specialize in integrating systems with Salesforce using powerful APIs, enabling smooth data exchange, real-time updates, and automation across platforms.',
        image: circlecilogo,
    },
    {
        title: 'Travis CI',
        description: 'We design and customize Salesforce Lightning Experience to deliver intuitive, modern interfaces that boost productivity and enhance user engagement.',
        image: TravisCILogo,
    },
    {
        title: 'Azure DevOps',
        description: 'We build and maintain Visualforce pages to deliver tailored user interfaces and custom functionality within the Salesforce Classic and Lightning platforms.',
        image: azuredevopslogo,
    },
    {
        title: 'GitHub Actions',
        description: 'We provide end-to-end Salesforce integration solutions, connecting your CRM with external systems to streamline workflows, improve data accuracy, and boost efficiency.',
        image: githubActionslogo,
    },
    {
        title: 'AWS CodePipeline',
        description: 'We deliver tailored Salesforce customization to fit your unique business processes, enhancing functionality and maximizing platform value.',
        image: awsCodePipelinelogo,
    },
    {
        title: 'Docker & Kubernetes',
        description: 'We develop custom mobile apps using the Salesforce Mobile SDK, enabling secure, seamless access to Salesforce data anytime, anywhere.',
        image: dockerkuberneteslogo,
    },
    {
        title: 'Terraform',
        description: 'We use Salesforce Data Loader to efficiently import, export, and update large volumes of data, ensuring accuracy and smooth data management.',
        image: terraformlogo,
    },
    {
        title: 'Helm Charts',
        description: 'We develop and deploy custom Salesforce AppExchange apps that extend your CRM’s capabilities and deliver tailored solutions to meet your business needs.',
        image: helmChartslogo,
    }
];

// Main TechCards component
export default function CI_CD_DevOpsTechCards() {
    return (
        <section id='cicdtechcards' className="tech-cards-section">
            <div className="tech-cards-header">
                <h2>Build Mobile Apps with EstonSoft</h2>
                <p>A powerful language for building mordern application.</p>
            </div>

            <div className="tech-cards-grid">
                {techIcons.map((techicon, index) => (
                    <div key={index} className="tech-card">
                        <div className="icon-title-wrapper">
                        <div className="tech-cards-icon-wrapper">
                            <img src={techicon.image} alt={techicon.title} className="tech-cards-icon-img" />
                        </div>
                        <h3>{techicon.title}</h3>
                        </div>
                        <p>{techicon.description}</p>
                    </div>
                ))}
            </div>
        </section>
    );
}
