import React, { useRef, useEffect, useState } from 'react';
import './Alert.css';

const Alert = () => {
  const alertRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);
  const [counts, setCounts] = useState({
    customers: 0,
    satisfaction: 0,
    rating: 0
  });

  // Helper to animate count
  const animateValue = (start, end, duration, setter) => {
    let startTimestamp = null;

    const step = (timestamp) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const progress = Math.min((timestamp - startTimestamp) / duration, 1);
      const value = start + (end - start) * progress;
      setter(parseFloat(value.toFixed(1))); // Use toFixed(1) for floats
      if (progress < 1) {
        window.requestAnimationFrame(step);
      }
    };

    window.requestAnimationFrame(step);
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setTimeout(() => {
              setIsVisible(true);
              animateValue(0, 10000, 2000, (val) =>
                setCounts((prev) => ({ ...prev, customers: val }))
              );
              animateValue(0, 93, 2000, (val) =>
                setCounts((prev) => ({ ...prev, satisfaction: val }))
              );
              animateValue(0, 4.9, 2000, (val) =>
                setCounts((prev) => ({ ...prev, rating: val }))
              );
            }, 50);
          } else {
            setIsVisible(false);
            setCounts({ customers: 0, satisfaction: 0, rating: 0 }); // Reset for re-trigger
          }
        });
      },
      {
        threshold: 0.2,
        rootMargin: '0px 0px -20px 0px'
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
        <div className="alert-title">
          {counts.customers >= 10000 ? '10k+' : `${Math.floor(counts.customers).toLocaleString()}`}
        </div>
        <div className="alert-description">Customers trusted EstonSoft</div>
      </div>

      <div className={`alert-item alert-percentage-container ${isVisible ? 'animate' : ''}`}>
        <div className="alert-title">{`${Math.floor(counts.satisfaction)}%`}</div>
        <div className="alert-description">Satisfaction rate from our customers.</div>
      </div>

      <div className={`alert-item alert-rating-container ${isVisible ? 'animate' : ''}`}>
        <div className="alert-title">{counts.rating.toFixed(1)}</div>
        <div className="alert-description">Average customer ratings out of 5.00!</div>
      </div>
    </div>
  );
};

export default Alert;
