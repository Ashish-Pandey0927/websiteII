import React from 'react';
import "../TechCards.css";
import seleniumlogo from '../../../assets/logo/seleniumlogo.png';
import junitlogo from '../../../assets/logo/junitlogo.png';
import testnglogo from '../../../assets/logo/testnglogo.png';
import postmanlogo from '../../../assets/logo/postmanlogo.png';
import Jenkinslogo from '../../../assets/logo/Jenkinslogo.png';
import appiumlogo from '../../../assets/logo/appiumlogo.png';
import cypresslogo from '../../../assets/logo/cypresslogo.png';
import qtestlogo from '../../../assets/logo/qtestlogo.png';
import bugzillalogo from '../../../assets/logo/bugzillalogo.png';
import jiralogo from '../../../assets/logo/jiralogo.png';

const techIcons = [
    {
        title: 'Selenium',
        description: 'Amazon Web Services (AWS) is a secure cloud platform offering scalable computing, storage, and tools to help businesses grow and innovate faster.',
        image: seleniumlogo,
    },
    {
        title: 'JUnit',
        description: 'Microsoft Azure is a cloud platform that provides secure, scalable solutions for computing, storage, and app development to help businesses innovate and grow.',
        image: junitlogo,
    },
    {
        title: 'TestNG',
        description: 'Google Cloud Platform (GCP) offers secure, scalable cloud services including computing, storage, and AI tools to help businesses build, innovate, and grow efficiently.',
        image: testnglogo,
    },
    {
        title: 'Postman',
        description: 'IBM Cloud provides secure and flexible cloud solutions, combining IaaS, PaaS, and AI capabilities to help businesses modernize and scale with confidence.',
        image: postmanlogo,
    },
    {
        title: 'Jenkins',
        description: 'Oracle Cloud delivers integrated cloud services, including computing, storage, databases, and applications, designed to support enterprise workloads with high performance and security.',
        image: Jenkinslogo,
    },
    {
        title: 'Appium',
        description: 'Serverless computing allows developers to build and run applications without managing servers, enabling automatic scaling, reduced operational overhead, and faster time to market.',
        image: appiumlogo,
    },
    {
        title: 'Cypress',
        description: 'Virtual machines (VMs) are software-based emulations of physical computers that run operating systems and applications, offering flexibility, isolation, and efficient resource utilization.',
        image: cypresslogo,
    },
    {
        title: 'QTest',
        description: 'A cloud database is a scalable, secure database solution hosted on cloud infrastructure, enabling easy access, high availability, and reduced maintenance for businesses.',
        image: qtestlogo,
    },
    {
        title: 'Bugzilla',
        description: 'Cloud storage is a service that lets users store, manage, and access data over the internet, offering scalability, security, and easy backup without relying on physical hardware.',
        image: bugzillalogo,
    },
    {
        title: 'JIRA',
        description: 'Cloud monitoring and analytics provide real-time insights into cloud resources and applications, helping businesses optimize performance, ensure security, and reduce downtime.',
        image: jiralogo,
    }
];

// Main TechCards component
export default function QualityAssuranceTechCards() {
    return (
        <section id='qatechcards' className="tech-cards-section">
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
