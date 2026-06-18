import React, { useState } from "react";
import "./AiOverview.css";
import { Link } from "react-router-dom";

const AiOverview = () => {
  const [activeTab, setActiveTab] = useState("purpose");

  const renderContent = () => {
    switch (activeTab) {
      case "purpose":
        return (
          <>
            <h3>Empowering the world through responsible AI</h3>
            <p>
              At the core of our vision is a belief that artificial intelligence should be a force for good — a tool that enhances human potential, not replaces it.
              Our purpose is to create AI systems that are trustworthy, intuitive, and aligned with human values.
            </p>
            <p>
              We focus on building intelligent interfaces that not only understand natural language, but also context, nuance, and emotion. Our technology is designed to bridge gaps between people, languages, and cultures — driving better communication at global scale.
            </p>
            <p>
              By placing empathy and ethics at the forefront of our development, we aim to redefine how people engage with machines and with each other.
            </p>
          </>
        );
      case "journey":
        return (
          <>
            <h3>From a single idea to global impact</h3>
            <p>
              Our journey began with a question: "What if AI could truly understand us?" That curiosity sparked a relentless pursuit of innovation — from early prototypes to today’s large-scale, production-ready systems.
            </p>
            <p>
              Over the years, we’ve collaborated with researchers, partnered with businesses, and listened to millions of users. These experiences shaped our approach, taught us humility, and helped us fine-tune AI that feels not just smart — but genuinely helpful.
            </p>
            <p>
              Today, our solutions power customer support, education, healthcare, finance, and more — transforming how industries operate and how people connect.
            </p>
          </>
        );
      case "promise":
        return (
          <>
            <h3>Our commitment: innovation with integrity</h3>
            <p>
              We are committed to developing AI that earns your trust. That means being transparent about how our systems work, vigilant about privacy, and proactive in addressing bias or misuse.
            </p>
            <p>
              Our promise is to always put users first — designing systems that are accessible, inclusive, and secure by default. Whether you're a startup or a global enterprise, we ensure that our technology adapts to your needs without compromising safety or ethics.
            </p>
            <p>
              Innovation is nothing without responsibility. That’s why we don’t just aim to lead the AI revolution — we aim to lead it responsibly.
            </p>
          </>
        );
      default:
        return null;
    }
  };

  // Track mobile view
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 480);

  React.useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 480);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <section className="ai-overview-container">
      <div className="ai-overview-header">
        <h2 className="section-title">What defines us</h2>
        <p className="section-subtitle">
          Explore our origin, our guiding principles, and the future we're building in the world of AI.
        </p>
      </div>
      <div className="text-section">
        <div className="tabs">
          <button
            className={`tab ${activeTab === "purpose" ? "active" : ""}`}
            onClick={() => setActiveTab("purpose")}
          >
            Our purpose
          </button>
          <button
            className={`tab ${activeTab === "journey" ? "active" : ""}`}
            onClick={() => setActiveTab("journey")}
          >
            Our journey
          </button>
          <button
            className={`tab ${activeTab === "promise" ? "active" : ""}`}
            onClick={() => setActiveTab("promise")}
          >
            Our promise
          </button>
        </div>
      </div>

      <div className="content-section">
        {isMobile ? (
          <>
            <div className="info">{renderContent()}</div>
            <div className="features">
              <ul>
                <li>Human-like Conversations</li>
                <li>Seamless Interaction</li>
                <li>Real-Time Response</li>
                <li>Multilingual Fluency</li>
                <li>Robust Security & Privacy</li>
              </ul>
              <Link to="/contact#form">
                <button className="trial-button">Start free trial</button>
              </Link>
            </div>
          </>
        ) : (
          <>
            <div className="features">
              <ul>
                <li>Human-like Conversations</li>
                <li>Seamless Interaction</li>
                <li>Real-Time Response</li>
                <li>Multilingual Fluency</li>
                <li>Robust Security & Privacy</li>
              </ul>
              <Link to="/contact#form">
                <button className="trial-button">Start free trial</button>
              </Link>
            </div>
            <div className="info">{renderContent()}</div>
          </>
        )}
      </div>
    </section>
  );
};

export default AiOverview;
