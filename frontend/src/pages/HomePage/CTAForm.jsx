import React from "react";
import "./CTAForm.css";

const CTAForm = () => {
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
      <div className="cta-dashed-line"></div>

      <div className="cta-secondary-heading">
        Any problem about your booking? You can contact us on:
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
