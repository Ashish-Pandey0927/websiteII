import './HomeFooter.css';
import estonsoft from "../../assets/estonsoftlogo.svg";
import { ChevronRight } from "lucide-react";
import SocialIcons from '../../components/SocialIcons';



export default function HomeFooter() {
  return (
    <footer className="home-footer">
      <div className='home-footer-header'>
        <div className="footer__logo">
          <img src={estonsoft} alt="Logo" className="logo" />
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
          <div className="home-footer-section" style={{ left: '629px' }}>
            <h4>Services</h4>
            <ul>
              <li>Email Marketing</li>
              <li>Campaigns</li>
              <li>Branding</li>
              <li>Offline</li>
            </ul>
          </div>

          {/* About */}
          <div className="home-footer-section" style={{ left: '934px' }}>
            <h4>About</h4>
            <ul>
              <li>Our Story</li>
              <li>Benefits</li>
              <li>Team</li>
              <li>Careers</li>
            </ul>
          </div>

          {/* Help */}
          <div className="home-footer-section" style={{ left: '1194px' }}>
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
        <div className="home-footer-bottom">
          <span>Terms & Conditions</span>
          <span>Privacy Policy</span>
        </div>

        <div className="home-footer-social">
       <SocialIcons/>
        </div>
      </div>
    </footer>
  );
}
