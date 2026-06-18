import React, { useState, useEffect } from 'react';
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

  const [errors, setErrors] = useState({});
  const [responseMessage, setResponseMessage] = useState('');
  const [messageTimeout, setMessageTimeout] = useState(null);

  // Cleanup timeout when component unmounts
  useEffect(() => {
    return () => {
      if (messageTimeout) {
        clearTimeout(messageTimeout);
      }
    };
  }, [messageTimeout]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    // Clear error for the field being edited
    setErrors(prev => ({ ...prev, [name]: '' }));
  };

  const validateForm = () => {
    const newErrors = {};
    
    // Name validation
    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    } else if (formData.name.trim().length < 2) {
      newErrors.name = 'Name must be at least 2 characters long';
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!emailRegex.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }

    // Phone validation - exactly 10 digits
    const phoneRegex = /^\d{10}$/;
    if (!formData.phone.trim()) {
      newErrors.phone = 'Phone number is required';
    } else if (!phoneRegex.test(formData.phone)) {
      newErrors.phone = 'Please enter a valid phone number';
    }

    // Subject validation
    if (!formData.subject.trim()) {
      newErrors.subject = 'Please select a service';
    }

    // Message validation
    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
    } else if (formData.message.trim().length < 10) {
      newErrors.message = 'Message must be at least 10 characters long';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

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
    
    // Clear any existing timeout
    if (messageTimeout) {
      clearTimeout(messageTimeout);
    }
    // Set new timeout and save its ID
    const timeoutId = setTimeout(() => {
      setResponseMessage('');
    }, 5000);
    setMessageTimeout(timeoutId);
  };

  return (
    <section className="contact-wrapper" id="form">
      <div className="contact-section">
        <div className="contact-card">
          <div className="contact-form">
            <form onSubmit={handleSubmit}>
              <div className="contact-form-row">
                <div className="contact-form-group">
                  <label htmlFor="name">Name</label>
                  <input
                    id="name"
                    type="text"
                    name="name"
                    placeholder="John Carter"
                    value={formData.name}
                    onChange={handleChange}
                    className={`contact-input ${errors.name ? 'error' : ''}`}
                  />
                  {errors.name && <div className="error-message">{errors.name}</div>}
                </div>
                <div className="contact-form-group">
                  <label htmlFor="email">Email</label>
                  <input
                    id="email"
                    className={`contact-input ${errors.email ? 'error' : ''}`}
                    type="email"
                    name="email"
                    placeholder="email@domain.com"
                    value={formData.email}
                    onChange={handleChange}
                  />
                  {errors.email && <div className="error-message">{errors.email}</div>}
                </div>
              </div>

              <div className="contact-form-row">
                <div className="contact-form-group">
                  <label htmlFor="phone">Phone number</label>
                  <input
                    id="phone"
                    className={`contact-input ${errors.phone ? 'error' : ''}`}
                    type="tel"
                    name="phone"
                    placeholder="374-9475-783"
                    value={formData.phone}
                    onChange={handleChange}
                  />
                  {errors.phone && <div className="error-message">{errors.phone}</div>}
                </div>
                <div className="contact-form-group">
                  <label htmlFor="subject">Subject</label>
                  <select
                    id="subject"
                    className={`contact-input ${errors.subject ? 'error' : ''}`}
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                  >
                    <option value="">Select a service</option>
                    <option value="Web Development">Web Development</option>
                    <option value="Mobile Development">Mobile Development</option>
                    <option value="Cloud Services">Cloud Services</option>
                    <option value="Quality Assurance">Quality Assurance</option>
                    <option value="Salesforce">Salesforce</option>
                    <option value="CI/CD DevOps">CI/CD DevOps</option>
                  </select>
                  {errors.subject && <div className="error-message">{errors.subject}</div>}
                </div>
              </div>

              <div className="contact-form-group message-group">
                <label htmlFor="message">Message</label>
                <textarea
                  id="message"
                  className={`contact-input ${errors.message ? 'error' : ''}`}
                  name="message"
                  placeholder="Please describe what service you are looking for..."
                  value={formData.message}
                  onChange={handleChange}
                />
                {errors.message && <div className="error-message">{errors.message}</div>}
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