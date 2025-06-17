import React, { useEffect, useState } from 'react';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin, FaWhatsapp, FaPhone } from 'react-icons/fa';

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
    window.addEventListener('resize', getBackgroundBrightness);
    return () => window.removeEventListener('resize', getBackgroundBrightness);
  }, []);

  return (
    <div className={`social-icons ${direction === 'column' ? 'social-column' : 'social-row'}`}>
      <a
        href="https://www.facebook.com/profile.php?id=61572364133399"
        target="_blank"
        rel="noopener noreferrer"
        className="social-link"
        aria-label="Facebook"
        style={{ color: iconColor }}
      >
        <FaFacebook />
      </a>

      <a
        href="https://x.com/Estonsoft"
        target="_blank"
        rel="noopener noreferrer"
        className="social-link"
        aria-label="Twitter"
        style={{ color: iconColor }}
      >
        <FaTwitter />
      </a>

      <a
        href="https://www.instagram.com/estonsoft/"
        target="_blank"
        rel="noopener noreferrer"
        className="social-link"
        aria-label="Instagram"
        style={{ color: iconColor }}
      >
        <FaInstagram />
      </a>

      <a
        href="https://www.linkedin.com/company/estonsoftpvtltd"
        target="_blank"
        rel="noopener noreferrer"
        className="social-link"
        aria-label="Linkedin"
        style={{ color: iconColor }}
      >
        <FaLinkedin />
      </a>

      <a
        href="https://wa.me/+919637225752"
        target="_blank"
        rel="noopener noreferrer"
        className="social-link"
        aria-label="Whatsapp"
        style={{ color: iconColor }}
      >
        <FaWhatsapp />
      </a>

      <a
        href="tel:+919637225752"
        className="social-link"
        aria-label="Phone"
        style={{ color: iconColor }}
      >
        <FaPhone />
      </a>
    </div>
  );
};

export default SocialIcons;
