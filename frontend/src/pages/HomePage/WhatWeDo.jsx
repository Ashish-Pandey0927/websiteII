import './WhatWeDo.css';
import { useEffect } from 'react';
import MobileDevelopment from '../../assets/MobileDevelopment.svg';
import WebDevelopment from '../../assets/WebDevelopment.svg';
import CloudServices from '../../assets/cloudServices.svg';
import qualityAssurance from '../../assets/quality-assurance.svg';
import salesforce from '../../assets/sales-force_17645757.svg';
import DevOpsIcon from "../../assets/Devops.svg";
const serviceData = [
  {
    title: "Mobile Development",
    description: "Custom iOS and Android applications tailored to enhance user engagement, providing seamless performance, intuitive user interfaces, and robust offline capabilities.",
    icon: MobileDevelopment,
    isSvg: false,
    top: "184px",
    left: "166.35px"
  },
  {
    title: "Web Development",
    description: "Responsive, high-performance web applications built with modern frontend frameworks and scalable backends to deliver optimal speed, security, and user experience.",
    icon: WebDevelopment,
    isSvg: false,
    top: "184px",
    left: "822.9px"
  },
  {
    title: "Cloud Services",
    description: "Scalable cloud infrastructure hosting, serverless computing, and managed cloud storage solutions designed to optimize operational costs and ensure maximum uptime.",
    icon: CloudServices,
    isSvg: false,
    top: "408px",
    left: "166.35px"
  },
  {
    title: "Quality Assurance",
    description: "Rigorous software testing, including automated regression, security auditing, and load testing to guarantee bug-free deployments and stable user experiences.",
    icon: qualityAssurance,
    isSvg: false,
    // top: "408px",
    // left: "822.9px"
  },
  {
    title: "SalesForce Solution",
    description: "Custom Salesforce integration, CRM optimization, and workflow automation tailored to streamline sales processes, customer support, and business analytics.",
    icon: salesforce,
    isSvg: false,
    top: "632px",
    left: "166.35px"
  },
  {
    title: "CI/CD Devops",
    description: "Automated integration and delivery pipelines, container orchestration, and server monitoring configurations to ensure smooth, rapid, and secure software releases.",
    icon: DevOpsIcon,
    isSvg: false,
    top: "632px",
    left: "822.9px"
  }
];


function WhatWeDo() {
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('show');
        } else {
          entry.target.classList.remove('show');
        }
      });
    }, {
      threshold: 0.1,
      rootMargin: '-50px'
    });

    const cards = document.querySelectorAll('.feature-card');
    cards.forEach(card => {
      observer.observe(card);
      card.classList.add('hidden');
    });

    return () => {
      // window.removeEventListener('scroll', handleScroll);
      cards.forEach(card => observer.unobserve(card));
    };
  }, []);

  return (
    <section className="what-we-do">
      <div className="header">
        <h2>What We Do</h2>
        <p>We work together with our clients to build the future.</p>
      </div>

      <div className="features-grid">
        {serviceData.map((item, index) => (
          <div className="feature-card" key={index}>
            <div className="icon-wrapper">
              <div className="icon-bg" />
              <img src={item.icon} alt={item.title} className="icon" />
            </div>
            <div className="text-content">
              <h3>{item.title}</h3>
              <p>{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default WhatWeDo;
