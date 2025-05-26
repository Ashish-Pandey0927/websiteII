import './Footer.css';
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";
import Vector from "../../assets/Vector-logo.png";
import shadepro from "../../assets/shadepro.png";
import thinkinnovative from "../../assets/THINK INNOVATIVE.png";
import { ChevronRight } from "lucide-react";

export default function Footer() {
  return (
    <footer className="services-footer">
      <div className='services-footer-header'>
        <div className="service-footer__logo">
          <img src={Vector} alt="Logo" />
          <div className="stacked-logos">
            <img src={shadepro} alt="Logo2" className="logo2" />
            <img src={thinkinnovative} alt="Logo3" className="logo3" />
          </div>
        </div>

        {/* CTA Section */}
        <div className="cta">
          <span>Ready to get started? </span>
          <button>Get started</button>
        </div>
      </div>

      {/* Divider */}
      <div className="divider" />

      {/* Content Section */}
      <div className="responsive-stack">
        {/* Newsletter */}
        <div className="newsletter">
          <h3>Subscribe to our newsletter</h3>
          <div style={{ position: 'relative' }}>
            <input type="email" placeholder="Email address" />
            <button><ChevronRight /></button>
          </div>
        </div>

        {/* Lists */}
        <div className="list-section">
          {/* Services */}
          <div className="footer-section" style={{ left: '629px' }}>
            <h4>Services</h4>
            <ul>
              <li>Email Marketing</li>
              <li>Campaigns</li>
              <li>Branding</li>
              <li>Offline</li>
            </ul>
          </div>

          {/* About */}
          <div className="footer-section" style={{ left: '934px' }}>
            <h4>About</h4>
            <ul>
              <li>Our Story</li>
              <li>Benefits</li>
              <li>Team</li>
              <li>Careers</li>
            </ul>
          </div>

          {/* Help */}
          <div className="footer-section" style={{ left: '1194px' }}>
            <h4>Help</h4>
            <ul>
              <li>FAQs</li>
              <li>Contact Us</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Row */}
      <div className="bottom-row">
        <div className="footer-bottom">
          <span>Terms & Conditions</span>
          <span>Privacy Policy</span>
        </div>

        <div className="footer-social">
          <FaFacebookF />
          <FaTwitter />
          <FaInstagram />
          <FaLinkedin />
        </div>
      </div>
    </footer>
  );
}
