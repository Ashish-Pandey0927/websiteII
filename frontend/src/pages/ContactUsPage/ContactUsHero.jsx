import React, { useState } from 'react'
import DashboardHeader from '../../components/DashboardHeader';
import backgroundImage from '../../assets/ContactUsBG.png';
import './ContactUsHero.css';

function ContactUsHero() {
   const [activeLink, setActiveLink] = useState('#contact');
  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      <div
        className="contact-us-container"
        style={{
          backgroundImage: `url(${backgroundImage})`,
          backgroundBlendMode: 'multiply',
        }}
      >
        <DashboardHeader activeLink={activeLink} setActiveLink={setActiveLink} />
  <div className="contact-us-text-group">
        <div className="contact-us-sub-heading">CONTACT US</div>
        <div className="contact-us-main-heading">Get in Touch</div>
        <div className="contact-us-description">
          Let’s build something great together — Start by saying hello
        </div>
      </div>
      </div>
    </div>
  );
}

export default ContactUsHero