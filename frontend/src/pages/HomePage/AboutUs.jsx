import React from "react";
import "./AboutUs.css";
import { ArrowUpRight } from "lucide-react";

const AboutUs = () => {
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
        <button className="cta-button-about-us">
          See Incredible Work <ArrowUpRight size={24} />
        </button>
      </div>

      {/* Cards */}
      <div className="about-us-cards">
        <div className="card card-blog">
          <p className="card-text">We have share our journey and some story</p>
          <div className="card-button">
            Read our blog <ArrowUpRight size={24} />
          </div>
        </div>

        <div className="card card-workflow">
          <p className="card-text">
            It’s a must to that we would like to share our workflow to believe you
          </p>
          <div className="card-button">
            See our workflow <ArrowUpRight className="ArrowUpRight" size={24} />
          </div>
        </div>

        <div className="card card-expert">
          <p className="card-text">
            2,000+ our team members around the world who create incredible and amazing projects
          </p>
          <div className="card-button">
            Meet Our Expert <ArrowUpRight size={24} />
          </div>
        </div>
      </div>

    </div>
  );
};

export default AboutUs;
