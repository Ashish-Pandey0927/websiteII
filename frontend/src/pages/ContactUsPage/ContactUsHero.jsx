import React, { useState } from 'react'
import DashboardHeader from '../../components/DashboardHeader';
import './ContactUsHero.css';

function ContactUsHero() {
   const [activeLink, setActiveLink] = useState('#contact');
  return (
    <div className="contact-hero">
      <div className="contact-hero-background"/>
      <div className="contact-hero-overlay" />

     <DashboardHeader activeLink={activeLink} setActiveLink={setActiveLink} />

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