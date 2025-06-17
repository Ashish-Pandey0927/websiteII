import React from "react";
import "./AiOverview.css";

const AiOverview = () => {
  return (
    <section className="ai-overview-container">
      <div className="text-section">
        <h2 className="section-title">What defines us</h2>
        <p className="section-subtitle">
          Explore our beginning, what we stand for, and where we’re headed in the world of AI
        </p>
        <div className="tabs">
          <button className="tab active">Our purpose</button>
          <button className="tab">Our journey</button>
          <button className="tab">Our promise</button>
        </div>
      </div>

      <div className="content-section">
        <div className="features">
          <ul>
            <li>Human-like Conversations</li>
            <li>Seamless Interaction</li>
            <li>Real-Time Interaction</li>
            <li>Multilingual Fluency</li>
            <li>Robust Security & Privacy</li>
          </ul>
          <button className="trial-button">Start free trial</button>
        </div>
        <div className="info">
          <h3>Revolutionizing conversations, empowering connections</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
            dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip.
          </p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
            dolore magna aliqua.
          </p>
          <p>
            Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
            Excepteur sint occaecat cupidatat non proident.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AiOverview;
