import React from 'react';
import "../TechCards.css";
import awslogo from '../../../assets/logo/awslogo.png';
import microsoftazurelogo from '../../../assets/logo/microsoftazurelogo.png';
import gcplogo from '../../../assets/logo/gcplogo.png';
import ibmcloudlogo from '../../../assets/logo/ibmcloudlogo.png';
import oraclecloudlogo from '../../../assets/logo/oraclecloudlogo.png';
import exlogo from '../../../assets/logo/exlogo.png';
import virtualmachinelogo from '../../../assets/logo/virtualmachinelogo.png';
import clouddatabaselogo from '../../../assets/logo/clouddatabaselogo.png';
import cloudstoragelogo from '../../../assets/logo/cloudstoragelogo.png';
import cloudmonitoringanalyticslogo from '../../../assets/logo/cloudmonitoringanalyticslogo.png';

const techIcons = [
    {
        title: 'AWS (Amazon Web Services)',
        description: 'Amazon Web Services (AWS) is a secure cloud platform offering scalable computing, storage, and tools to help businesses grow and innovate faster.',
        image: awslogo,
    },
    {
        title: 'Microsoft Azure',
        description: 'Microsoft Azure is a cloud platform that provides secure, scalable solutions for computing, storage, and app development to help businesses innovate and grow.',
        image: microsoftazurelogo,
    },
    {
        title: 'GCP',
        description: 'Google Cloud Platform (GCP) offers secure, scalable cloud services including computing, storage, and AI tools to help businesses build, innovate, and grow efficiently.',
        image: gcplogo,
    },
    {
        title: 'IBM Cloud',
        description: 'IBM Cloud provides secure and flexible cloud solutions, combining IaaS, PaaS, and AI capabilities to help businesses modernize and scale with confidence.',
        image: ibmcloudlogo,
    },
    {
        title: 'Oracle Cloud',
        description: 'Oracle Cloud delivers integrated cloud services, including computing, storage, databases, and applications, designed to support enterprise workloads with high performance and security.',
        image: oraclecloudlogo,
    },
    {
        title: 'Serverless Computing',
        description: 'Serverless computing allows developers to build and run applications without managing servers, enabling automatic scaling, reduced operational overhead, and faster time to market.',
        image: exlogo,
    },
    {
        title: 'Virtual Machines',
        description: 'Virtual machines (VMs) are software-based emulations of physical computers that run operating systems and applications, offering flexibility, isolation, and efficient resource utilization.',
        image: virtualmachinelogo,
    },
    {
        title: 'Cloud Databases',
        description: 'A cloud database is a scalable, secure database solution hosted on cloud infrastructure, enabling easy access, high availability, and reduced maintenance for businesses.',
        image: clouddatabaselogo,
    },
    {
        title: 'Cloud Storage (S3, Blob)',
        description: 'Cloud storage is a service that lets users store, manage, and access data over the internet, offering scalability, security, and easy backup without relying on physical hardware.',
        image: cloudstoragelogo,
    },
    {
        title: 'Cloud Monitoring and Analytics',
        description: 'Cloud monitoring and analytics provide real-time insights into cloud resources and applications, helping businesses optimize performance, ensure security, and reduce downtime.',
        image: cloudmonitoringanalyticslogo,
    }
];

// Main TechCards component
export default function CloudServicesTechCards() {
    return (
        <section id='cloudservicestechcards' className="tech-cards-section">
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
