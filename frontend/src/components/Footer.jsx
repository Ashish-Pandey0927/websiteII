import './Footer.css';
import estonsoft from "../assets/estonsoftlogo.svg";
import { ChevronRight } from "lucide-react";
import SocialIcons from './SocialIcons';
import { Link } from "react-router-dom";
import { useState } from 'react';
import emailjs from 'emailjs-com';


export default function Footer() {
  const [email, setEmail] = useState('');
  const [responseMessage, setResponseMessage] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleNewsletterSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const result = await emailjs.send(
        'service_ur805bv',
        'template_n3ietlx',
        {
          email: email,
          message: 'Subscribe request to our newsletter',
          name: 'Newsletter Subscriber',
        },
        'k9DON1QOURsc2jBsy'
      );

      if (result.status === 200) {
        setResponseMessage('Thanks for subscribing to our newsletter!');
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
    <footer className="footer">
      <div className='footer-header'>
        <div className="footer__logo">
          <Link to="/#home">
            <img src={estonsoft} alt="Logo" className="logo" />
          </Link>
        </div>

        {/* CTA Section */}
        <div className="cta">
          <span>Ready to get started? </span>
          <Link to="/contact#form">
            <button>Get started</button>
          </Link>
        </div>
      </div>

      {/* Divider */}
      <div className="divider" />

      {/* Content Section */}
      <div className="responsive-stack">
        {/* Newsletter */}
        <div className="newsletter">
          <h3>Subscribe to our newsletter</h3>
          <form onSubmit={handleNewsletterSubmit} style={{ position: 'relative' }}>
            <input
              type="email"
              placeholder="Email address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <button type="submit" disabled={isSubmitting}>
              <ChevronRight />
            </button>
            {responseMessage && (
              <div className="newsletter-response">
                {responseMessage}
              </div>
            )}
          </form>
        </div>

        {/* Lists */}
        <div className="list-section">
          {/* Services */}
          <div className="footer-section" style={{ left: '629px' }}>
            <h4>Services</h4>
            <ul>
              <li><Link to="/services/webdevelopment#web-dev-hero">Web Development</Link></li>
              <li><Link to="/services/mobiledevelopment#mobile-dev-hero">Mobile Development</Link></li>
              <li><Link to="/services/cloudservices#cloud-services-hero">Cloud Services</Link></li>
              <li><Link to="/services/qualityassurance#qa-hero">Quality Assurance</Link></li>
              <li><Link to="/services/salesforce#salesforce-hero">Salesforce</Link></li>
              <li><Link to="/services/cicddevops#cicd-hero">CI/CD DevOps</Link></li>
            </ul>
          </div>

          {/* About */}
          <div className="footer-section" style={{ left: '934px' }}>
            <h4>Others</h4>
            <ul>
              <li><Link to="/contact#contact-hero">Contact Us</Link></li>
              <li><Link to="/aboutus#aboutus-hero">About Us</Link></li>
              <li><Link to="/privacypolicy">Privacy Policy</Link></li>
              <li><Link to="/services#faq">FAQs</Link></li>
            </ul>
          </div>

          {/* Help */}
          <div className="footer-section" style={{ left: '1194px' }}>
            <h4>Contact Us</h4>
            <ul>
              <li>Tel: 0731-4105104</li>
              <li>Mobile: +91 9201480055</li>
              <li>Email:  hr@estonsoft.com</li>
              <li>Address: Super Corridor, Indore</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Row */}
      <div className="bottom-row">
        {/* <div className="footer-bottom">
          <span>Terms & Conditions</span>
          <span>Privacy Policy</span>
        </div> */}

        <div className="footer-social">
          <SocialIcons />
        </div>
      </div>
      <div className='footer-bottom'>
        <hr className="footer-divider" />
        <div className="footer-copyright">
          &copy; EstonSoft 2013-2025 | All rights reserved.
        </div>
      </div>
    </footer>
  );
}
