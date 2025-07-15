import React from 'react';
import "../TechCards.css";
import lwclogo from '../../../assets/logo/lwclogo.png';
import apexlogo from '../../../assets/logo/apexlogo.png';
import salesforceAPIlogo from '../../../assets/logo/salesforceAPIlogo.png';
import SalesforceLightingExperience from '../../../assets/logo/SalesforceLightingExperience.png';
import visualforcelogo from '../../../assets/logo/visualforcelogo.png';
import salesforceintegrationlogo from '../../../assets/logo/salesforceintegrationlogo.png';
import Salesforcecustomizationlogo from '../../../assets/logo/Salesforcecustomizationlogo.png';
import salesforceSDKlogo from '../../../assets/logo/salesforceSDKlogo.png';
import salesforcesDataloaderlogo from '../../../assets/logo/salesforcesDataloaderlogo.png';
import salesforceappexchangelogo from '../../../assets/logo/salesforceappexchangelogo.png';

const techIcons = [
    {
        title: 'Lightning Web Components (LWC)',
        description: 'We create Lightning Web Components that are fast, reusable, and optimized for seamless Salesforce integration and user experience.',
        image: lwclogo,
    },
    {
        title: 'Apex',
        description: 'We develop robust Apex code to extend Salesforce functionality with custom logic, automation, and seamless backend integrations tailored to your business needs.',
        image: apexlogo,
    },
    {
        title: 'Salesforce APIs ',
        description: 'We specialize in integrating systems with Salesforce using powerful APIs, enabling smooth data exchange, real-time updates, and automation across platforms.',
        image: salesforceAPIlogo,
    },
    {
        title: 'Salesforce Lightning Experience',
        description: 'We design and customize Salesforce Lightning Experience to deliver intuitive, modern interfaces that boost productivity and enhance user engagement.',
        image: SalesforceLightingExperience,
    },
    {
        title: 'Visualforce Pages',
        description: 'We build and maintain Visualforce pages to deliver tailored user interfaces and custom functionality within the Salesforce Classic and Lightning platforms.',
        image: visualforcelogo,
    },
    {
        title: 'Salesforce Integration',
        description: 'We provide end-to-end Salesforce integration solutions, connecting your CRM with external systems to streamline workflows, improve data accuracy, and boost efficiency.',
        image: salesforceintegrationlogo,
    },
    {
        title: 'Salesforce Customization',
        description: 'We deliver tailored Salesforce customization to fit your unique business processes, enhancing functionality and maximizing platform value.',
        image: Salesforcecustomizationlogo,
    },
    {
        title: 'Salesforce Mobile SDK',
        description: 'We develop custom mobile apps using the Salesforce Mobile SDK, enabling secure, seamless access to Salesforce data anytime, anywhere.',
        image: salesforceSDKlogo,
    },
    {
        title: 'Salesforce Data Loader',
        description: 'We use Salesforce Data Loader to efficiently import, export, and update large volumes of data, ensuring accuracy and smooth data management.',
        image: salesforcesDataloaderlogo,
    },
    {
        title: 'Salesforce App Exchange Apps',
        description: 'We develop and deploy custom Salesforce AppExchange apps that extend your CRM’s capabilities and deliver tailored solutions to meet your business needs.',
        image: salesforceappexchangelogo,
    }
];

// Main TechCards component
export default function SalesforceTechCards() {
    return (
        <section id="salesforcetechcard" className="tech-cards-section">
            <div className="tech-cards-header">
                <h2>Build Mobile Apps with EstonSoft</h2>
                <p>A powerful language for building modern applications.</p>
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
