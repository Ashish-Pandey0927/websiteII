import React, { useState } from 'react';
import './ContactDetailsSection.css';

function ContactDetailsSection() {
    const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Submitted data:', formData);
  };

  return (
    <section className="contact-wrapper">
      <div className="contact-section">
        <div className="contact-card">
          <div className="contact-form">
            <form onSubmit={handleSubmit}>
            <div className="contact-form-row">
              <div className="contact-form-group">
                <label htmlFor="name">Name</label>
                     <input
                id="name"
                className="contact-input"
                type="text"
                name="name"
                placeholder="John Carter"
                value={formData.name}
                onChange={handleChange}
              />
              </div>
              <div className="contact-form-group">
                <label htmlFor="email">Email</label>
                  <input
                id="email"
                className="contact-input"
                type="email"
                name="email"
                placeholder="email@domain.com"
                value={formData.email}
                onChange={handleChange}
              />
              </div>
            </div>

            <div className="contact-form-row">
              <div className="contact-form-group">
 <label htmlFor="phone">Phone number</label>
              <input
                id="phone"
                className="contact-input"
                type="tel"
                name="phone"
                placeholder="374-9475-783"
                value={formData.phone}
                onChange={handleChange}
              />
              </div>
              <div className="contact-form-group">
                <label htmlFor="subject">Subject</label>
              <input
                id="subject"
                className="contact-input"
                type="text"
                name="subject"
                placeholder="Service."
                value={formData.subject}
                onChange={handleChange}
              />
              </div>
            </div>

            <div className="contact-form-group message-group">
             <label htmlFor="message">Message</label>
            <textarea
              id="message"
              className="contact-input"
              name="message"
              placeholder="Please describe what service you are looking for..."
              value={formData.message}
              onChange={handleChange}
            />
            </div>

            <button className="contact-submit-button" type='submit'>Submit</button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ContactDetailsSection;
