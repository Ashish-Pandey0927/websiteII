import React, { useEffect, useRef } from "react";
import DashboardHeader from "../../components/DashboardHeader";
import Footer from "../../components/Footer";
import { technologyData } from "../../data/technologyData";
import "./TechnologyPage.css";

const TechnologyPage = () => {
  const pageRef = useRef(null);

  useEffect(() => {
    window.scrollTo(0, 0);

    // Intersection Observer for reveal animations
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('revealed');
        }
      });
    }, { threshold: 0.1 });

    const revealElements = document.querySelectorAll('.aww-reveal');
    revealElements.forEach(el => observer.observe(el));

    return () => {
      revealElements.forEach(el => observer.unobserve(el));
    };
  }, []);

  // Flatten all tech stacks for the infinite marquee
  const allTechStacks = technologyData.flatMap(category => category.techStack);
  
  // Split into two arrays for two separate marquee rows
  const midPoint = Math.ceil(allTechStacks.length / 2);
  const row1 = allTechStacks.slice(0, midPoint);
  const row2 = allTechStacks.slice(midPoint);

  return (
    <div className="technology-page" ref={pageRef}>
      <DashboardHeader iconColor="#fff" />

      {/* Awwwards Style Hero Section */}
      <section className="aww-hero">
        <div className="aww-hero-bg"></div>
        <h1 className="aww-hero-title" data-text="TECHNOLOGIES">
          TECHNOLOGIES
        </h1>
        <p className="aww-hero-subtitle aww-reveal">
          Pushing the boundaries of what's possible with a cutting-edge tech stack.
        </p>
      </section>

      {/* Infinite Marquee Section */}
      <section className="aww-marquee-section">
        <div className="aww-marquee-container">
          <div className="aww-marquee-row row-left">
            {/* Double the array for seamless infinite scroll */}
            {[...row1, ...row1, ...row1].map((tech, index) => (
              <div key={`${tech.label}-${index}`} className="aww-marquee-item">
                <img src={tech.image} alt={tech.label} />
                <span>{tech.label}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="aww-marquee-container">
          <div className="aww-marquee-row row-right">
            {[...row2, ...row2, ...row2].map((tech, index) => (
              <div key={`${tech.label}-${index}`} className="aww-marquee-item">
                <img src={tech.image} alt={tech.label} />
                <span>{tech.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Asymmetric Services Sections */}
      <section className="aww-services-container">
        {technologyData.map((category, index) => (
          <div key={category.title} className="aww-category-block">
            <div className="aww-category-sticky">
              <h2 className="aww-category-title aww-reveal">
                <span className="aww-category-number">0{index + 1}</span>
                {category.title}
              </h2>
            </div>
            
            <div className="aww-services-list">
              {category.offeredServices.map((service, sIndex) => (
                <div 
                  key={service.label} 
                  className="aww-service-card aww-reveal"
                  style={{ transitionDelay: `${sIndex * 0.1}s` }}
                >
                  <div className="aww-service-icon">
                    {service.isSvg && typeof service.icon === "string" ? (
                      <img src={service.icon} alt={service.label} />
                    ) : (
                      service.icon
                    )}
                  </div>
                  <h3 className="aww-service-label">{service.label}</h3>
                  <div className="aww-service-hover-bg"></div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </section>

      <Footer />
    </div>
  );
};

export default TechnologyPage;
