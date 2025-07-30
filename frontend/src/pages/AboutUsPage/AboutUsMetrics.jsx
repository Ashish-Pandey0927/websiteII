import React, { useEffect, useState, useRef } from 'react';
import './AboutUsMetrics.css';

const AboutUsMetrics = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  const [counts, setCounts] = useState({
    satisfaction: 0,
    responseTime: 0,
    availability: 0, // Not used as 24/7 is static
    interactions: 0,
  });

  // Count-up function
  const animateValue = (start, end, duration, setter, decimals = 0) => {
    let startTimestamp = null;

    const step = (timestamp) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const progress = Math.min((timestamp - startTimestamp) / duration, 1);
      const value = start + (end - start) * progress;
      setter(parseFloat(value.toFixed(decimals)));
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
              animateValue(0, 98, 2000, (val) =>
                setCounts((prev) => ({ ...prev, satisfaction: val }))
              );
              animateValue(0, 5, 2000, (val) =>
                setCounts((prev) => ({ ...prev, responseTime: val }))
              );
              animateValue(0, 1000000, 2000, (val) =>
                setCounts((prev) => ({ ...prev, interactions: val }))
              );
            }, 50);
          } else {
            setIsVisible(false);
            setCounts({ satisfaction: 0, responseTime: 0, availability: 0, interactions: 0 });
          }
        });
      },
      {
        threshold: 0.2,
        rootMargin: '0px 0px -20px 0px'
      }
    );

    const currentSection = sectionRef.current;
    if (currentSection) observer.observe(currentSection);

    return () => {
      if (currentSection) observer.unobserve(currentSection);
    };
  }, []);

  return (
    <div
      ref={sectionRef}
      className={`aboutus-metrics ${isVisible ? 'animate-in' : ''}`}
    >
      <div className="metric-item">
        <p className="metric-label">User satisfaction Rate</p>
        <p className="metric-value">{Math.floor(counts.satisfaction)}%</p>
      </div>

      <div className="metric-item">
        <p className="metric-label">Faster response time</p>
        <p className="metric-value">{counts.responseTime.toFixed(1)}X</p>
      </div>

      <div className="metric-item">
        <p className="metric-label">Availability</p>
        <p className="metric-value">24/7</p> {/* Static, no animation */}
      </div>

      <div className="metric-item">
        <p className="metric-label">Interaction handled</p>
        <p className="metric-value">
          {counts.interactions >= 1000000
            ? '1M+'
            : `${Math.floor(counts.interactions).toLocaleString()}`}
        </p>
      </div>
    </div>
  );
};

export default AboutUsMetrics;
