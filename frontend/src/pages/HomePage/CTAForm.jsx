import React, { useEffect, useState } from "react";
import emailjs from 'emailjs-com';
import "./CTAForm.css";

const CTAForm = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: 'Email through CTA form' // Hidden message
  });
  const [responseMessage, setResponseMessage] = useState('');

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const result = await emailjs.send(
        'service_ur805bv',
        'template_n3ietlx',
        formData,
        'k9DON1QOURsc2jBsy'
      );

      if (result.status === 200) {
        setResponseMessage('Thanks for contacting us!');
        setFormData({
          name: '',
          email: '',
          phone: '',
          service: '',
          message: 'Email through CTA form'
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
        +91-9201480055<br />
        hr@estonsoft.com
      </div>

      {/* Form Card */}
      <div className="cta-card">
      <form onSubmit={handleSubmit}>
        <div className="input-group">
          <label>Name</label>
          <input
            type="text"
            name="name"
            placeholder="i.e. John Doe"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>

        <div className="input-group">
          <label>Email</label>
          <input
            type="email"
            name="email"
            placeholder="i.e. john@mail.com"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>

        <div className="input-group">
          <label>Phone</label>
          <input
            type="tel"
            name="phone"
            placeholder="i.e. 123-456-7890"
            value={formData.phone}
            onChange={handleChange}
          />
        </div>

        <div className="input-group select-wrapper">
          <label>Which service do you need?</label>
          <select
            name="service"
            value={formData.service}
            onChange={handleChange}
            required
          >
            <option value="">Select a service</option>
            <option value="Web Development">Web Development</option>
            <option value="Mobile Development">Mobile Development</option>
            <option value="Cloud Services">Cloud Services</option>
            <option value="Quality Assurance">Quality Assurance</option>
            <option value="Salesforce">Salesforce</option>
            <option value="CI/CD DevOps">CI/CD DevOps</option>
          </select>
        </div>

        <button type="submit">Book a Schedule</button>
        
        {responseMessage && (
          <div className="response-message">
            {responseMessage}
          </div>
        )}
      </form>
      </div>
    </div>
  );
};

export default CTAForm;
