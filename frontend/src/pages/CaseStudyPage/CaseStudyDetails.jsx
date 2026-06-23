import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { FaArrowLeft, FaCalendarAlt } from 'react-icons/fa';
import DashboardHeader from '../../components/DashboardHeader';
import Footer from '../../components/Footer';
import caseStudiesData from '../../data/caseStudies.json';
import Blog1 from '../../assets/Blog1.png';
import Blog2 from '../../assets/Blog2.png';
import Blog3 from '../../assets/Blog3.png';
import BlogPost6 from '../../assets/BlogPost6.png';
import blog6 from '../../assets/blog6.png';
import './CaseStudyDetails.css';

const localImageMap = {
  "Blog1.png": Blog1,
  "Blog2.png": Blog2,
  "Blog3.png": Blog3,
  "Blog6.png": BlogPost6 || blog6,
};

const getCaseImage = (image) => {
  if (!image) return "https://via.placeholder.com/1200x600";
  const filename = image.split('/').pop();
  return localImageMap[filename] || "https://via.placeholder.com/1200x600";
};

const CaseStudyDetails = () => {
  const { id } = useParams();
  const [caseStudy, setCaseStudy] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Find matching case study
    const cs = caseStudiesData.find(item => item.id === id);
    setCaseStudy(cs || null);
    setLoading(false);
  }, [id]);

  const formatDate = (dateStr) => {
    if (!dateStr) return "";
    try {
      const options = { year: 'numeric', month: 'long', day: 'numeric' };
      return new Date(dateStr).toLocaleDateString(undefined, options);
    } catch (e) {
      return dateStr;
    }
  };

  return (
    <div className="cs-details-page-wrapper">
      {/* Dark background header segment matching the blog details page */}
      <div className="cs-details-header-bg">
        <DashboardHeader activeLink="#CaseStudy" />
      </div>

      <div className="cs-details-main-content">
        {loading ? (
          <div className="cs-details-loading">Loading Case Study...</div>
        ) : !caseStudy ? (
          <div className="cs-not-found">
            <h2>Case Study Not Found</h2>
            <p>The case study you are looking for does not exist or has been removed.</p>
            <Link to="/casestudy" className="cs-back-btn">
              <FaArrowLeft /> Return to Case Studies
            </Link>
          </div>
        ) : (
          <article className="cs-details-article">
            {/* Back Button */}
            <Link to="/casestudy" className="cs-back-btn">
              <FaArrowLeft className="cs-back-arrow-icon" /> <span>Back to Case Studies</span>
            </Link>

            {/* Header Meta & Title */}
            <header className="cs-details-header animate-slide-up">
              <div className="cs-details-header-meta">
                <span className="cs-tag-badge">{caseStudy.category}</span>
                <span className="cs-meta-item">
                  <FaCalendarAlt className="cs-meta-sub-icon" /> {formatDate(caseStudy.publishDate)}
                </span>
                <span className="cs-meta-bullet">•</span>
                <span className="cs-meta-item">
                  <strong>Client:</strong> {caseStudy.client}
                </span>
              </div>
              <h1 className="cs-details-title">{caseStudy.title}</h1>
            </header>

            {/* Main Featured Image */}
            <div className="cs-details-image-container animate-fade-in">
              <img
                src={getCaseImage(caseStudy.image)}
                alt={caseStudy.title}
                className="cs-details-image"
              />
            </div>

            {/* Structured Case Study Layout (Two columns on desktop) */}
            <div className="cs-details-layout animate-fade-in">
              {/* Left Column: Narrative Content */}
              <div className="cs-details-content">
                <section className="cs-section-block">
                  <h2>The Challenge</h2>
                  <p>{caseStudy.challenge}</p>
                </section>

                <section className="cs-section-block">
                  <h2>Our Solution</h2>
                  <p>{caseStudy.solution}</p>
                </section>
              </div>

              {/* Right Column: Metrics & KPI Dashboard Sidebar */}
              <aside className="cs-details-sidebar">
                <div className="cs-sidebar-card">
                  <h3>Key Performance Indicators</h3>
                  <p className="cs-sidebar-intro">Measurable improvements recorded post-implementation:</p>
                  <div className="cs-sidebar-metrics-list">
                    {caseStudy.metrics.map((metric, idx) => (
                      <div key={idx} className="cs-sidebar-metric-item">
                        <span className="cs-sidebar-metric-value">{metric.value}</span>
                        <span className="cs-sidebar-metric-label">{metric.label}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="cs-sidebar-cta-card">
                  <h4>Want similar results?</h4>
                  <p>Let's collaborate to build a scalable and secure future for your business operations.</p>
                  <Link to="/contact" className="cs-sidebar-contact-btn">
                    Get in touch
                  </Link>
                </div>
              </aside>
            </div>
          </article>
        )}
      </div>
      <Footer />
    </div>
  );
};

export default CaseStudyDetails;
