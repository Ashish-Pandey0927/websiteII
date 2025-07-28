import React, { useState } from "react";
import "./AboutUs.css";
import { ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";
import CalendlyModal from "../../components/CalendlyModal";

const AboutUs = () => {
  const [isCalendlyOpen, setIsCalendlyOpen] = useState(false);

  return (
    <div className="about-us">
            {/* Decorative Ellipses */}
            <div className="ellipse ellipse-21" />
      <div className="ellipse ellipse-19" />
      {/* Header Section */}
      <div className="about-us-header">
        <h2 className="about-us-title">Delivering tech solutions</h2>
        <p className="about-us-subtext">
          We are a team of 20+ who are passionate about making the world a better place.
        </p>
      </div>

      {/* Main Image Block */}
      <div className="main-image-block">
        <div className="image-overlay" />
        <span className="badge">Ready for future</span>
        <h3 className="overlay-title">Leveraging tech to drive a better IT experience</h3>
        <Link to="/portfolio#ourportfolios">
        <button className="cta-button-about-us">
          See Incredible Work <ArrowUpRight size={24} />
        </button>
        </Link>
      </div>

      {/* Cards */}
      <div className="about-us-cards">
        <div className="card card-blog">
          <p className="card-text">We have share our journey and some story</p>
          <div className="card-button">
            <Link to="/blogs#blog-hero" style={{color: 'inherit' }}>
            Read our blog <ArrowUpRight size={24} />
            </Link>
          </div>
        </div>

        <div className="card card-workflow">
          <p className="card-text">
            It’s a must to that we would like to share our workflow to believe you
          </p>
          <div className="card-button">
          <Link to="/portfolio#portfolio-hero" style={{color: 'inherit' }}>
            See our workflow <ArrowUpRight size={24} />
          </Link>
          </div>
        </div>

        <div className="card card-expert">
          <p className="card-text">
            2,000+ our team members around the world who create incredible and amazing projects
          </p>
          <button 
            className="card-button"
            onClick={() => setIsCalendlyOpen(true)}
            style={{ background: 'none', border: 'none', cursor: 'pointer' }}
          >
            Meet Our Expert <ArrowUpRight size={24} />
          </button>
        </div>
      </div>

      {/* Calendly Modal */}
      <CalendlyModal 
        isOpen={isCalendlyOpen} 
        onClose={() => setIsCalendlyOpen(false)} 
      />

    </div>
  );
};

export default AboutUs;
