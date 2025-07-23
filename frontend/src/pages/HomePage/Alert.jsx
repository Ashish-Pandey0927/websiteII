import React, { useRef, useEffect, useState } from 'react';
import './Alert.css';

const Alert = () => {
  const alertRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.3, // Trigger when 30% of the component is visible
        rootMargin: '0px 0px -50px 0px' // Trigger slightly before entering viewport
      }
    );

    const currentElement = alertRef.current;
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
    <div className="alert-container" ref={alertRef}>
        <div className={`alert-item alert-group1 ${isVisible ? 'animate' : ''}`}>
          <div className=" alert-title">10k+</div>
          <div className=" alert-description">Customers trusted EstonSoft</div>
        </div>
      


      <div className={`alert-item alert-percentage-container ${isVisible ? 'animate' : ''}`}>
        <div className="alert-title">93%</div>
        <div className="alert-description">Satisfaction rate from our customers.</div>
      </div>



      <div className={`alert-item alert-rating-container ${isVisible ? 'animate' : ''}`}>
        <div className="alert-title">4.9</div>
        <div className="alert-description">Average customer ratings out of 5.00!</div>
      </div>
    </div>

  );
};

export default Alert;