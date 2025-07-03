import React from "react";
import "./NewsletterSection.css";
import { Link } from "react-router-dom";

const NewsletterSection = () => {
  return (
    <section className="newsletter-section">
      <div className="newsletter-bg" />

      <div className="newsletter-content">
        <span className="newsletter-label">NEWSLETTER</span>
        <h2 className="newsletter-title">Join Our Newsletters</h2>
        <p className="newsletter-description">
          Stay up to date with the latest news, insights, and updates from our team. Subscribe to our newsletter and never miss out on important announcements, tech trends, and exclusive offers!
        </p>

        <div className="newsletter-form">
          <input
            type="text"
            placeholder="i.e. John Doe"
            className="newsletter-input"
          />
          <Link to="/contact#form">
          <button className="newsletter-button">Join</button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default NewsletterSection;
