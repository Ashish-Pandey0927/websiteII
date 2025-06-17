import React from 'react';
import './OurCoreValues.css';

const OurCoreValues = () => {
  return (
     <section className="core-values-section">
      <div className="core-values-container">
        <h2 className="core-values-title">Our Core Values</h2>
        <div className="core-values-cards">
          <div className="value-card integrity">
            <h3 className="value-title">Integrity</h3>
            <p className="value-description">Integrity is the foundation of our company culture and business practices. We are committed to being honest, transparent, and accountable in everything we do. By consistently doing the right thing, we build strong, lasting relationships based on trust and respect—with our clients, partners, and team members alike.</p>
          </div>
          <div className="value-card customer-focus">
            <h3 className="value-title">Customer Focus</h3>
            <p className="value-description">Our customers are at the center of everything we do. We listen closely to their needs, adapt our solutions to exceed expectations, and build lasting relationships based on trust and support. By delivering value at every step, we ensure their success is our success.</p>
          </div>
          <div className="value-card innovation">
            <h3 className="value-title">Innovation</h3>
            <p className="value-description">Innovation drives our vision and fuels our growth. We embrace change, explore new ideas, and leverage the latest technologies to deliver smarter, faster, and more effective solutions. By fostering a culture of creativity and continuous improvement, we stay ahead of the curve and create meaningful value for our clients.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurCoreValues;
