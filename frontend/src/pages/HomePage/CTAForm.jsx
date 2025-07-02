import React, { useEffect, useState } from "react";
import "./CTAForm.css";

const CTAForm = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="cta-form-wrapper">
      {/* Background overlay */}
      <div className="cta-bg-overlay"></div>

      {/* Headings and Text */}
      <div className="cta-text-heading">
        Talk to us about your project
      </div>

      <div className="cta-subtext">
        We would love to hear about your project and discuss how we can help. Please fill the form on the right side to schedule a call or discussion and meeting on your convenient time.
      </div>

      {/* Dashed Line Divider */}
      <div className="cta-dashed-line">
        <svg width="600" height="50">
          <line x1={isMobile ? 0 : 250} y1="25" x2="600" y2="25" stroke=" #B3BAC5" strokeWidth="4" strokeDasharray="10,5" />
        </svg>
      </div>

      <div className="cta-secondary-heading">
        Any problem about your booking? <br/>You can contact us on:
      </div>

      <div className="cta-small-text">
        0731-4105104<br />
        info@estonsoft.com
      </div>

      {/* Form Card */}
      <div className="cta-card">
      <form>
        <div className="input-group">
          <label>Name</label>
          <input type="text" placeholder="i.e. John Doe" />
        </div>

        <div className="input-group">
          <label>Email</label>
          <input type="email" placeholder="i.e. john@mail.com" />
        </div>

        <div className="input-group">
          <label>Phone</label>
          <input type="text" placeholder="i.e. 123-456-7890" />
        </div>

        <div className="input-group select-wrapper">
          <label>Which service do you need?</label>
          <select>
            <option>Select a service</option>
            <option>Consulting</option>
            <option>Support</option>
          </select>
        </div>

        <button type="submit">Book a Schedule</button>
      </form>
      </div>
    </div>
  );
};

export default CTAForm;
