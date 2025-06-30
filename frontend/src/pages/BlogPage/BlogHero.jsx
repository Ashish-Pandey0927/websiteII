import React, { useState } from "react";
import './BlogHero.css';
import DashboardHeader from "../../components/DashboardHeader";

const BlogHero = () => {
  const [activeLink, setActiveLink] = useState('#Blogs');
  return (
    <div
      className="blog-page-container">
      <DashboardHeader activeLink={activeLink} setActiveLink={setActiveLink} />
      <div className="Group-1171274896">
        <div
          className="blog-page-hero-content">
          <h1 className="blog-page-hero-heading" >
            Powering Your Digital Transformation
          </h1>
          <p className="blog-page-hero-paragraph"> End-to-end IT solutions—from cloud migration to cybersecurity—
            designed for growth.</p>
        </div>
      </div>
    </div>
  );
};

export default BlogHero;
