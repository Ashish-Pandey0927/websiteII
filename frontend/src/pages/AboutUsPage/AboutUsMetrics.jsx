import React, { useEffect, useState, useRef } from 'react';
import './AboutUsMetrics.css';

const AboutUsMetrics = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          console.log('Intersection:', entry.isIntersecting, 'Ratio:', entry.intersectionRatio);
          if (entry.isIntersecting) {
            console.log('Setting visible to true');
            // Add a small delay to ensure smooth animation
            setTimeout(() => {
              setIsVisible(true);
            }, 50);
          } else {
            console.log('Setting visible to false');
            // Reset animation when section goes out of view so it can trigger again
            setIsVisible(false);
          }
        });
      },
      {
        threshold: 0.2, // Reduced threshold for earlier trigger
        rootMargin: '0px 0px -20px 0px' // Reduced margin for more sensitive detection
      }
    );

    const currentSection = sectionRef.current;
    if (currentSection) {
      observer.observe(currentSection);
    }

    return () => {
      if (currentSection) {
        observer.unobserve(currentSection);
      }
    };
  }, []);

  return (
    <div 
      ref={sectionRef}
      className={`aboutus-metrics ${isVisible ? 'animate-in' : ''}`}
    >
      <div className="metric-item">
        <p className="metric-label">User satisfaction Rate</p>
        <p className="metric-value">98%</p>
      </div>

      <div className="metric-item">
        <p className="metric-label">Faster response time</p>
        <p className="metric-value">5X</p>
      </div>

      <div className="metric-item">
        <p className="metric-label">Availability</p>
        <p className="metric-value">24/7</p>
      </div>

      <div className="metric-item">
        <p className="metric-label">Interaction handled</p>
        <p className="metric-value">1M+</p>
      </div>
    </div>
  );
};

export default AboutUsMetrics;
