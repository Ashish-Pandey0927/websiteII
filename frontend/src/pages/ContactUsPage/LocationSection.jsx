import React from 'react';
import { FaMapMarkerAlt } from "react-icons/fa";
import { GiRotaryPhone } from "react-icons/gi";
import locationImage from '../../assets/location.png'
import './LocationSection.css';

const LocationSection = () => {
  return (
    <div className="location-section">
      <div className="main-rectangle">
        <div className="location-image">
          <img src={locationImage} alt="Location" />
        </div>
        <div className="info-card">
          <h2 className="info-title">Get in Touch</h2>

          <div className="info-group address-group">
            <div className="icon-lable">
              <div className="icon-circle"><FaMapMarkerAlt /></div>
              <div className="label">Address</div>
            </div>
            <p className="location-description ">
             Super Corridor, Indore,<br />
              Indore
            </p>
          </div>

          <div className="info-group contact-group">
            <div className="icon-lable">
              <div className="icon-circle"><GiRotaryPhone /></div>
              <div className="label">Contact</div>
            </div>
            <p className="location-description ">
              Tel: 0731-4105104<br />
              Mobile: +91-9201480055
              hr@estonsoft.com
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LocationSection;