import React, { useEffect, useState } from 'react';
import {  FaFacebook , FaTwitter, FaInstagram, FaLinkedin ,FaWhatsapp,FaPhone } from 'react-icons/fa';

const SocialIcons = ({ direction = 'row' }) => {
  const [iconColor, setIconColor] = useState('black');

  useEffect(() => {
    const getBackgroundBrightness = () => {
      const bg = getComputedStyle(document.body).backgroundColor;
      const rgb = bg.match(/\d+/g)?.map(Number);
      if (!rgb || rgb.length < 3) return;

      const brightness = (rgb[0] * 299 + rgb[1] * 587 + rgb[2] * 114) / 1000;
      setIconColor(brightness > 125 ? 'black' : 'white');
    };

    getBackgroundBrightness();

    // Optional: Update if background might change
    window.addEventListener('resize', getBackgroundBrightness);
    return () => window.removeEventListener('resize', getBackgroundBrightness);
  }, []);

  return (
    <div className={`social-icons ${direction === 'column' ? 'social-column' : 'social-row'}`}>
      <a href="#" className="social-link"  aria-label="Facebook" rel="noopener noreferrer" style={{ color: iconColor }}><FaFacebook /></a>
      <a href="#" className="social-link"  aria-label="Twitter" rel="noopener noreferrer"style={{ color: iconColor }}><FaTwitter /></a>
      <a href="#" className="social-link"  aria-label="Instagram" rel="noopener noreferrer"style={{ color: iconColor }}><FaInstagram /></a>
      <a href="#" className="social-link"  aria-label="Linkedin" rel="noopener noreferrer"style={{ color: iconColor }}><FaLinkedin  /></a>
      <a href="#" className="social-link"  aria-label="Whatsapp" rel="noopener noreferrer"style={{ color: iconColor }}><FaWhatsapp /></a>
      <a href="#" className="social-link"  aria-label="Phone" rel="noopener noreferrer"style={{ color: iconColor }}><FaPhone /></a>
    </div>
  );
};

export default SocialIcons;
