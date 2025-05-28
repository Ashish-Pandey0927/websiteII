import React from 'react';
import './ContactDetailsSection.css';

function ContactDetailsSection() {
  return (
    <section className="contact-wrapper">
      <div className="contact-section">
        <div className="contact-card">
          <div className="contact-form">
            <div className="form-row">
              <div className="form-group">
                <label>Name</label>
                <div className="input">John Carter</div>
              </div>
              <div className="form-group">
                <label>Email</label>
                <div className="input">email@23.com</div>
              </div>
            </div>

            <div className="form-row">
              <div className="form-group">
                <label>Phone number</label>
                <div className="input">374-9475-783</div>
              </div>
              <div className="form-group">
                <label>Subject</label>
                <div className="input">Service.</div>
              </div>
            </div>

            <div className="form-group message-group">
              <label>Message</label>
              <div className="input">
                Please describe what service you are looking for...
              </div>
            </div>

            <button className="submit-button">Submit</button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ContactDetailsSection;
