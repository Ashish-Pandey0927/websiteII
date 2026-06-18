import React, { useEffect, useRef } from 'react';
import './WhyChooseUs.css';

const WhyChooseUs = () => {
  const textContentRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-in');
            entry.target.classList.remove('animate-out');
          } else {
            entry.target.classList.add('animate-out');
            entry.target.classList.remove('animate-in');
          }
        });
      },
      {
        threshold: 0.2, // Trigger when 20% of the element is visible
        rootMargin: '0px 0px -50px 0px' // Adjust trigger point
      }
    );

    const currentElement = textContentRef.current;
    if (currentElement) {
      observer.observe(currentElement);
    }

    return () => {
      if (currentElement) {
        observer.unobserve(currentElement);
      }
    };
  }, []);

  return (
    <section className="why-choose-us">
      <div className="text-content" ref={textContentRef}>
        <h2>Why to Choose Us</h2>
        <p>
          Choosing us means partnering with a team committed to quality, innovation, and customer satisfaction. We deliver reliable
          solutions tailored to your goals, using cutting-edge technology and industry best practices to ensure long-term success.
        </p>
      </div>

      <div className="diagram-container">
        <div className="diagram-box">
          {/* Vertical dashed line */}
          <div className="vertical-dashed-line">
            <svg width="400" height="600">
              <line x1="310" y1="45" x2="310" y2="590" stroke="#585858" strokeWidth="1" strokeDasharray="10,5" />
            </svg>
          </div>

          {/* Horizontal dashed lines */}
          <div className="horizontal-dashed-line1">
            <svg width="600" height="400">
              <line x1="20" y1="100" x2="300" y2="100" stroke="#585858" strokeWidth="1" strokeDasharray="10,5" />
            </svg>
          </div>
          <div className="horizontal-dashed-line2">
            <svg width="600" height="400">
              <line x1="600" y1="100" x2="320" y2="100" stroke="#585858" strokeWidth="1" strokeDasharray="10,5" />
            </svg>
          </div>

          {/* Cards */}
          <div className="card qa">
            <h3>Quality Assurance</h3>
            <p>We ensure every solution is rigorously tested for performance, security, and reliability. Our expert QA teams guarantees a flawless, bug-free user experience.</p>
          </div>
          <div className="card innovation-tech">
            <h3>Innovation & Technology Focus</h3>
            <p>We stay ahead by embracing the latest technologies like AI, cloud, and IoT. Innovation drives everything we build, ensuring future-ready solution for our clients.</p>
          </div>
          <div className="card agile">
            <h3>Agile & Scalable Delivery</h3>
            <p>We follow an agile approach to ensure fast, flexible, and client-focused delivery. Our scalable solutions grow seamlessly with your business needs.</p>
          </div>
          <div className="card end-to-end">
            <h3>End-to-End Services</h3>
            <p>We offer comprehensive end-to-end services, covering every stage from planning to post-launch support. This ensures seamless integration and consistent quality throughout the project lifecycle.</p>
          </div>
        </div>
      </div>

    </section>
  );
};

export default WhyChooseUs;
