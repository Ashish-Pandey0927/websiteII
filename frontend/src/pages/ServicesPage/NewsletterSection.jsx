import React, { useState } from "react";
import "./NewsletterSection.css";
import emailjs from 'emailjs-com';

const NewsletterSection = () => {
  const [email, setEmail] = useState('');
  const [responseMessage, setResponseMessage] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const result = await emailjs.send(
        'service_ur805bv',
        'template_n3ietlx',
        {
          email: email,
          message: 'join request to our newsletter',
          name: 'Newsletter Subscriber',
        },
        'k9DON1QOURsc2jBsy'
      );

      if (result.status === 200) {
        setResponseMessage('Thanks for joining our newsletter!');
        setEmail('');
      } else {
        setResponseMessage('Something went wrong. Please try again.');
      }
    } catch (error) {
      console.error('EmailJS Error:', error);
      setResponseMessage('Failed to subscribe. Please try again.');
    } finally {
      setIsSubmitting(false);
      
      // Hide the response message after 5 seconds
      setTimeout(() => {
        setResponseMessage('');
      }, 5000);
    }
  };
  return (
    <section className="newsletter-section">
      <div className="newsletter-bg" />

      <div className="newsletter-content">
        <span className="newsletter-label">NEWSLETTER</span>
        <h2 className="newsletter-title">Join Our Newsletters</h2>
        <p className="newsletter-description">
          Stay up to date with the latest news, insights, and updates from our team. Subscribe to our newsletter and never miss out on important announcements, tech trends, and exclusive offers!
        </p>

        <form onSubmit={handleSubmit} className="newsletter-form">
          <input
            type="email"
            placeholder="Enter your email"
            className="newsletter-input"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <button
            type="submit"
            className="newsletter-button"
            disabled={isSubmitting}
          >
            {isSubmitting ? 'Joining...' : 'Join'}
          </button>
          {responseMessage && (
            <div className="newsletter-response">
              {responseMessage}
            </div>
          )}
        </form>
      </div>
    </section>
  );
};

export default NewsletterSection;
