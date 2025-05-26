import React from "react";
import "./NewsletterSection.css";

const NewsletterSection = () => {
  return (
    <section className="newsletter-section">
      <div className="newsletter-bg" />

      <div className="newsletter-content">
        <span className="newsletter-label">NEWSLETTER</span>
        <h2 className="newsletter-title">Join Our Newsletters</h2>
        <p className="newsletter-description">
          There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly
        </p>

        <div className="newsletter-form">
          <input
            type="text"
            placeholder="i.e. John Doe"
            className="newsletter-input"
          />
          <button className="newsletter-button">Post Now</button>
        </div>
      </div>
    </section>
  );
};

export default NewsletterSection;
