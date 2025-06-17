import React from 'react';
import './AboutUsMetrics.css';

const AboutUsMetrics = () => {
  return (
    <div className="aboutus-metrics">
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
