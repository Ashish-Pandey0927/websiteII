import './Footer.css';
import estonsoft from "../assets/estonsoftlogo.svg";
import { ChevronRight } from "lucide-react";
import SocialIcons from './SocialIcons';
import { Link  } from "react-router-dom";


export default function Footer() {
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
          <div style={{ position: 'relative' }}>
            <input type="email" placeholder="Email address" />
            <Link to="/contact#form">
            <button><ChevronRight /></button>
            </Link>
          </div>
        </div>

        {/* Lists */}
        <div className="list-section">
          {/* Services */}
          <div className="footer-section" style={{ left: '629px' }}>
            <h4>Services</h4>
            <ul>
              <li>Web Development</li>
              <li>Mobile Development</li>
              <li>Cloud Services</li>
              <li>Quality Assurance</li>
              <li>Salesforce</li>
              <li>CI/CD DevOps</li>
            </ul>
          </div>

          {/* About */}
          <div className="footer-section" style={{ left: '934px' }}>
            <h4>Others</h4>
            <ul>
              <li>Contact Us</li>
              <li>About Us</li>
              <li>Privacy Policy</li>
              <li>FAQs</li>
            </ul>
          </div>

          {/* Help */}
          <div className="footer-section" style={{ left: '1194px' }}>
            <h4>Contact Us</h4>
            <ul>
              <li>Tel: 0731-4105104</li>
              <li>Mobile: +91 9637225752</li>
              <li>Email:  hr@estonsoft.com</li>
              <li>Address: Super Corridor, Indore</li>
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
       <SocialIcons/>
        </div>
      </div>
    </footer>
  );
}
