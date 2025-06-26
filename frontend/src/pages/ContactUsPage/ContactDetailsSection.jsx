import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import './ContactDetailsSection.css';

function ContactDetailsSection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });

  const [responseMessage, setResponseMessage] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const result = await emailjs.send(
        'service_ur805bv', // Your EmailJS Service ID
        'template_n3ietlx', // Your EmailJS Template ID
        formData, // Template variables must match your EmailJS template
        'k9DON1QOURsc2jBsy' // Your EmailJS Public Key
      );

      if (result.status === 200) {
        setResponseMessage('Thanks for contacting us!');
        setFormData({
          name: '',
          email: '',
          phone: '',
          subject: '',
          message: ''
        });
      } else {
        setResponseMessage('Something went wrong. Please try again.');
      }
    } catch (error) {
      console.error('EmailJS Error:', error);
      setResponseMessage('Failed to send message. Please try again.');
    }
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
                    required
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
                    required
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
                    required
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
                  required
                />
              </div>

              <button className="contact-submit-button" type="submit">Submit</button>

              {responseMessage && (
                <p className="contact-response-message">{responseMessage}</p>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ContactDetailsSection;