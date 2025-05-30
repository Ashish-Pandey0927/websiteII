import React, { useState } from 'react'
import DashboardHeader from '../../components/DashboardHeader';
import backgroundImage from '../../assets/ContactUsBG.png';
import './ContactUsHero.css';

function ContactUsHero() {
   const [activeLink, setActiveLink] = useState('#contact');
  return (
      // <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
    <div className="contact-hero">
      <div className="contact-hero-background"   style={{
          backgroundImage: `url(${backgroundImage})`,
          backgroundBlendMode: 'multiply',
        }} />
      <div className="contact-hero-overlay" />

      {/* <header className="contact-hero-header"> */}
     <DashboardHeader activeLink={activeLink} setActiveLink={setActiveLink} />
      {/* </header> */}

      <div className="contact-hero-content">
        <div className="contact-hero-label">CONTACT US</div>
        <h1 className="contact-hero-title">Get in Touch</h1>
        <p className="contact-hero-subtext">
          Let’s build something great together - Start by saying hello
        </p>
      </div>
    </div>
    // </div>
  );
}

export default ContactUsHero