import React, { useState } from "react";
import "./LeaveComment.css";
import emailjs from 'emailjs-com';

function LeaveComment() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    comment: ''
  });
  const [responseMessage, setResponseMessage] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const result = await emailjs.send(
        'service_ur805bv',
        'template_n3ietlx',
        {
          name: formData.name,
          email: formData.email,
          message: formData.comment,
          subject: 'Comment from Blog/portfolio'
        },
        'k9DON1QOURsc2jBsy'
      );

      if (result.status === 200) {
        setResponseMessage('Thank you for your comment!');
        setFormData({
          name: '',
          email: '',
          comment: ''
        });
      } else {
        setResponseMessage('Something went wrong. Please try again.');
      }
    } catch (error) {
      console.error('EmailJS Error:', error);
      setResponseMessage('Failed to submit comment. Please try again.');
    } finally {
      setIsSubmitting(false);
      
      // Hide the response message after 5 seconds
      setTimeout(() => {
        setResponseMessage('');
      }, 5000);
    }
  };
  return (
    <section className="leave-comment-section">
      <h2 className="leave-title">Leave a Comment</h2>
      <form className="comment-form" onSubmit={handleSubmit}>
        <div className="left-side">
          <div className="form-group">
            <label>Name</label>
            <input
              type="text"
              name="name"
              placeholder="Enter your name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label>Email</label>
            <input
              type="email"
              name="email"
              placeholder="Enter your email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
        </div>
        <div className="right-side">
          <div className="form-group">
            <label>Comment</label>
            <textarea
              name="comment"
              placeholder="Enter your comment"
              value={formData.comment}
              onChange={handleChange}
              required
            ></textarea>
          </div>
          <button 
            type="submit" 
            className="submit-btn"
            disabled={isSubmitting}
          >
            {isSubmitting ? 'Posting...' : 'Post Now'}
          </button>
          {responseMessage && (
            <div className="comment-response-message">
              {responseMessage}
            </div>
          )}
        </div>
      </form>
    </section>
  );
}

export default LeaveComment;
