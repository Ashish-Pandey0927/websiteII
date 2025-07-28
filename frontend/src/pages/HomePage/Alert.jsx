import React, { useRef, useEffect, useState } from 'react';
import './Alert.css';

const Alert = () => {
  const alertRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          console.log('Alert Intersection:', entry.isIntersecting, 'Ratio:', entry.intersectionRatio);
          if (entry.isIntersecting) {
            console.log('Alert setting visible to true');
            // Add a small delay to ensure smooth animation
            setTimeout(() => {
              setIsVisible(true);
            }, 50);
          } else {
            console.log('Alert setting visible to false');
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