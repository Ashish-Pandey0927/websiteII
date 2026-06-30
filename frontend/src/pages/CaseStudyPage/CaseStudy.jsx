import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import DashboardHeader from '../../components/DashboardHeader';
import Footer from '../../components/Footer';
import LeaveComment from '../../components/LeaveComment';
import caseStudiesData from '../../data/caseStudies.json';
import '../../styles/commonHero.css';
import './CaseStudy.css';

const CaseStudy = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [activeLink, setActiveLink] = useState('#CaseStudy');

  // Filter categories
  const categories = ['All', 'Cloud Services', 'Quality Assurance', 'CI/CD Devops', 'SalesForce Solution'];

  const filteredCaseStudies = selectedCategory === 'All'
    ? caseStudiesData.casestudies
    : caseStudiesData.casestudies.filter(cs => cs.category === selectedCategory);

  return (
    <div className="casestudy-page-wrapper">
      {/* Hero Section */}
      <div id="casestudy-hero" className="hero-container casestudy-hero-container">
        <DashboardHeader activeLink={activeLink} setActiveLink={setActiveLink} />
        <div className="Group-Service-page-hero">
          <div className="hero-highlight-wrapper">
            <div className="hero-vector-highlight">
              <svg
                width="26"
                height="30"
                viewBox="0 0 26 30"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M12.7904 0.352417V14.8524M12.7904 29.3524V14.8524M12.7904 14.8524L1.57091 7.74457M12.7904 14.8524L24.5709 21.9603M12.7904 14.8524L1.57091 21.9603M12.7904 14.8524L24.5709 7.74457"
                  stroke="#A7F46A"
                  strokeWidth="4"
                />
              </svg>
            </div>
            <div className="hero-highlight-text">
              Real Impact, Proven Results
            </div>
          </div>
          <div className="hero-content">
            <h1 className="hero-heading">
              Our Success Stories &<br />Case Studies
            </h1>
            <p className="hero-paragraph">
              Explore how we design and deploy scalable solutions that drive tangible growth.
            </p>
          </div>
        </div>
      </div>

      {/* Main Filter and Grid Container */}
      <section className="casestudy-content-section">
        {/* Category Filters */}
        <div className="casestudy-filters-container">
          {categories.map((category) => (
            <button
              key={category}
              className={`casestudy-filter-btn ${selectedCategory === category ? 'active' : ''}`}
              onClick={() => setSelectedCategory(category)}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Case Studies Grid */}
        <div className="casestudy-grid">
          {filteredCaseStudies.length > 0 ? (
            filteredCaseStudies.map((cs, idx) => (
              <article
                key={cs.id}
                className="casestudy-card animate-fade-in"
                style={{ animationDelay: `${0.1 * idx}s` }}
              >
                <div className="casestudy-card-header">
                  <span className="casestudy-card-badge">{cs.category}</span>
                  <span className="casestudy-card-client">{cs.client}</span>
                </div>

                <div className="casestudy-card-body">
                  <h3 className="casestudy-card-title">{cs.title}</h3>
                  <p className="casestudy-card-text">{cs.paragraph}</p>
                </div>

                {/* Key Metrics Dashboard inside Card */}
                <div className="casestudy-card-metrics">
                  {cs.metrics.map((m, mIdx) => (
                    <div key={mIdx} className="casestudy-metric-pill">
                      <span className="casestudy-metric-value">{m.value}</span>
                      <span className="casestudy-metric-label">{m.label}</span>
                    </div>
                  ))}
                </div>

                <div className="casestudy-card-footer">
                  <Link to={`/casestudy/${cs.id}`} className="casestudy-read-more-btn">
                    <span>View Full Case Study</span>
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 16 16"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      className="casestudy-btn-arrow"
                    >
                      <path
                        d="M1 8H15M15 8L8 1M15 8L8 15"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </Link>
                </div>
              </article>
            ))
          ) : (
            <div className="no-casestudies-found">
              <p>No case studies found in this category.</p>
            </div>
          )}
        </div>
      </section>

      {/* Leave Comment & Footer */}
      <section className="casestudy-section-comment">
        <LeaveComment />
      </section>
      <section className="casestudy-section-footer">
        <Footer />
      </section>
    </div>
  );
};

export default CaseStudy;
