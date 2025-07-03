import React from "react";
import "./LeaveComment.css";

function LeaveComment() {
  return (
    <section className="leave-comment-section">
      <h2 className="leave-title">Leave a Comment</h2>
      <form className="comment-form">
        <div className="left-side">
        <div className="form-group">
          <label>Name</label>
          <input type="text" placeholder="Enter your name" />
        </div>
        <div className="form-group">
          <label>Email</label>
          <input type="email" placeholder="Enter your email" />
        </div>
        </div>
        <div className="right-side">
        <div className="form-group">
          <label>Comment</label>
          <textarea placeholder="Enter your comment"></textarea>
        </div>
        <button type="submit" className="submit-btn">Post Now </button>
        </div>
      </form>
    </section>
  );
}

export default LeaveComment;
