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
  const [errors, setErrors] = useState({});
  const [responseMessage, setResponseMessage] = useState('');
  const [messageTimeout, setMessageTimeout] = useState(null);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Cleanup timeout when component unmounts or when timeout changes
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

    // Phone validation
    const phoneRegex = /^\d{10}$/;
    if (!formData.phone.trim()) {
      newErrors.phone = 'Phone number is required';
    } else if (!phoneRegex.test(formData.phone)) {
      newErrors.phone = 'Please enter a valid phone number';
    }

    // Service validation
    if (!formData.service) {
      newErrors.service = 'Please select a service';
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
    <div className="cta-form-wrapper">
      {/* Background overlay */}
      <div className="cta-bg-overlay"></div>

      {/* Left Side Content */}
      <div className="cta-content-left">
        {/* Headings and Text */}
        <div className="cta-text-heading">
          Talk to us about your project
        </div>

        <div className="cta-subtext">
          We would love to hear about your project and discuss how we can help. Please fill the form on the right side to schedule a call or discussion and meeting on your convenient time.
        </div>

        {/* Dashed Line Divider */}
        <div className="cta-dashed-line">
          <svg width="100%" height="50" viewBox="0 0 100 50" preserveAspectRatio="none">
            <line 
              x1="0" 
              y1="25" 
              x2="100" 
              y2="25" 
              stroke="#B3BAC5" 
              strokeWidth="4" 
              vectorEffect="non-scaling-stroke"
            />
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
      </div>

      {/* Right Side Form */}
      <div className="cta-content-right">
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
                className={errors.name ? 'error' : ''}
              />
              {errors.name && <div className="error-message">{errors.name}</div>}
            </div>

            <div className="input-group">
              <label>Email</label>
              <input
                type="email"
                name="email"
                placeholder="i.e. john@mail.com"
                value={formData.email}
                onChange={handleChange}
                className={errors.email ? 'error' : ''}
              />
              {errors.email && <div className="error-message">{errors.email}</div>}
            </div>

            <div className="input-group">
              <label>Phone</label>
              <input
                type="tel"
                name="phone"
                placeholder="i.e. 123-456-7890"
                value={formData.phone}
                onChange={handleChange}
                className={errors.phone ? 'error' : ''}
              />
              {errors.phone && <div className="error-message">{errors.phone}</div>}
            </div>

            <div className="input-group select-wrapper">
              <label>Which service do you need?</label>
              <select
                name="service"
                value={formData.service}
                onChange={handleChange}
                className={errors.service ? 'error' : ''}
              >
                <option value="">Select a service</option>
                <option value="Web Development">Web Development</option>
                <option value="Mobile Development">Mobile Development</option>
                <option value="Cloud Services">Cloud Services</option>
                <option value="Quality Assurance">Quality Assurance</option>
                <option value="Salesforce">Salesforce</option>
                <option value="CI/CD DevOps">CI/CD DevOps</option>
              </select>
              {errors.service && <div className="error-message">{errors.service}</div>}
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
    </div>
  );
};

export default CTAForm;
