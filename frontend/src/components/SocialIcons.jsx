import React from 'react';
import {
  FaFacebook,
  FaTwitter,
  FaInstagram,
  FaLinkedin,
  FaWhatsapp,
  FaPhone,
} from 'react-icons/fa';
import useIconColorByBackground from '../components/useIconColorByBackground';

const SocialIcons = ({ direction = 'row', iconColor }) => {

   const fallbackColor = useIconColorByBackground();
  const finalColor = iconColor || fallbackColor;

  return (
    <div className={`social-icons ${direction === 'column' ? 'social-column' : 'social-row'}`}>
      <a
        href="https://www.facebook.com/profile.php?id=61572364133399"
        target="_blank"
        rel="noopener noreferrer"
        className="social-link"
        aria-label="Facebook"
        style={{ color: finalColor }}
      >
        <FaFacebook />
      </a>

      <a
        href="https://x.com/Estonsoft"
        target="_blank"
        rel="noopener noreferrer"
        className="social-link"
        aria-label="Twitter"
        style={{ color: finalColor }}
      >
        <FaTwitter />
      </a>

      <a
        href="https://www.instagram.com/estonsoft/"
        target="_blank"
        rel="noopener noreferrer"
        className="social-link"
        aria-label="Instagram"
        style={{ color: finalColor }}
      >
        <FaInstagram />
      </a>

      <a
        href="https://www.linkedin.com/company/estonsoftpvtltd"
        target="_blank"
        rel="noopener noreferrer"
        className="social-link"
        aria-label="Linkedin"
        style={{ color: finalColor }}
      >
        <FaLinkedin />
      </a>

      <a
        href="https://wa.me/+919201480055"
        target="_blank"
        rel="noopener noreferrer"
        className="social-link"
        aria-label="Whatsapp"
        style={{ color: finalColor }}
      >
        <FaWhatsapp />
      </a>

      <a
        href="tel:0731-4105104"
        className="social-link"
        aria-label="Phone"
        style={{ color: finalColor }}
      >
        <FaPhone />
      </a>
    </div>
  );
};

export default SocialIcons;
