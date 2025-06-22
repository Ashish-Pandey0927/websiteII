import React, { useState } from "react";
import './BlogHero.css';
import blogBG from '../../assets/BlogBG.png';
import DashboardHeader from "../../components/DashboardHeader";

const BlogHero = () => {
  const [activeLink, setActiveLink] = useState('#Blogs');
  return (
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      <div
        className="blog-page-container"
        style={{
          backgroundImage: `url(${blogBG}), linear-gradient(270deg, rgba(0, 0, 0, 0.0001) 0%, #161C2D 99.54%)`,
          backgroundBlendMode: 'multiply',
        }}
      >
        <DashboardHeader activeLink={activeLink} setActiveLink={setActiveLink} />
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
