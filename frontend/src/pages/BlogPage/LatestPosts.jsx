import React from "react";
import { Link } from "react-router-dom";
import { FaArrowRight, FaCalendarAlt, FaClock } from "react-icons/fa";
import Blog1 from '../../assets/Blog1.png';
import Blog2 from '../../assets/Blog2.png';
import Blog3 from '../../assets/Blog3.png';
import BlogPost1 from '../../assets/BlogPost1.png';
import BlogPost2 from '../../assets/BlogPost2.png';
import BlogPost3 from '../../assets/BlogPost3.png';
import BlogPost4 from '../../assets/BlogPost4.png';
import BlogPost5 from '../../assets/BlogPost5.png';
import BlogPost6 from '../../assets/BlogPost6.png';
import blog5 from '../../assets/blog5.png';
import blog6 from '../../assets/blog6.png';
import "./LatestPosts.css"; // Import the CSS file

const localImageMap = {
  "Blog1.png": Blog1,
  "Blog2.png": Blog2,
  "Blog3.png": Blog3,
  "Blog4.png": BlogPost4,
  "Blog5.png": BlogPost5 || blog5,
  "Blog6.png": BlogPost6 || blog6,
  "BlogPost1.png": BlogPost1,
  "BlogPost2.png": BlogPost2,
  "BlogPost3.png": BlogPost3,
  "BlogPost4.png": BlogPost4,
  "BlogPost5.png": BlogPost5,
  "BlogPost6.png": BlogPost6,
};

const getBlogImage = (image) => {
  if (!image) return "https://via.placeholder.com/800x500";
  if (image.startsWith("/") || image.startsWith("http://") || image.startsWith("https://") || image.startsWith("data:")) {
    return image;
  }
  const filename = image.split('/').pop();
  return localImageMap[filename] || `https://estonsoft.com/uploads/${filename}` || "https://via.placeholder.com/800x500";
};

function LatestPosts({ latestBlog }) {
  if (!latestBlog) return null;

  // Formatting date
  const formatDate = (dateStr) => {
    if (!dateStr) return "";
    try {
      const options = { year: 'numeric', month: 'long', day: 'numeric' };
      return new Date(dateStr).toLocaleDateString(undefined, options);
    } catch (e) {
      return dateStr;
    }
  };

  const readingTime = (content) => {
    if (!content) return "3 min read";
    const words = content.trim().split(/\s+/).length;
    const time = Math.ceil(words / 200);
    return `${time} min read`;
  };

  const tag = latestBlog.tags && latestBlog.tags.length > 0 ? latestBlog.tags[0] : "Tech Insight";

  return (
    <section className="latest-posts-section">
      <div className="latest-posts-container">
        <div className="latest-section-header">
          <span className="section-subtitle">
            <span className="glow-dot"></span> Featured Story
          </span>
          <h2 className="section-title">Latest Publication</h2>
        </div>

        <div className="featured-blog-layout animate-fade-in">
          {/* Left Column: Image Container */}
          <div className="featured-image-container">
            <Link to={`/blogs/${latestBlog.id}`}>

              <div className="featured-image-overlay"><img
                src={getBlogImage(latestBlog.image)}
                alt={latestBlog.title}
                className="featured-image"
              /></div>
              <span className="featured-tag-badge">{tag}</span>
            </Link>
          </div>

          {/* Right Column: Metadata & Content */}
          <div className="featured-content-container">
            <div className="featured-meta-row">
              <span className="featured-meta-item">
                <FaCalendarAlt className="meta-icon" /> {formatDate(latestBlog.publishDate || latestBlog.created_at)}
              </span>
              <span className="featured-meta-divider">•</span>
              <span className="featured-meta-item">
                <FaClock className="meta-icon" /> {readingTime(latestBlog.content || latestBlog.paragraph)}
              </span>
            </div>

            <Link to={`/blogs/${latestBlog.id}`}>
              <h3 className="featured-title">{latestBlog.title}</h3>
            </Link>

            <p className="featured-description">
              {latestBlog.paragraph || (latestBlog.content && latestBlog.content.slice(0, 180) + "...") || "No description available..."}
            </p>

            {/* Author info & Button */}
            <div className="featured-footer">
              <div className="featured-author">
                <div className="author-avatar">
                  {latestBlog.authorName ? latestBlog.authorName.charAt(0).toUpperCase() : "E"}
                </div>
                <div className="author-details">
                  <h4 className="author-name">{latestBlog.authorName || "EstonSoft Admin"}</h4>
                  <p className="author-designation">{latestBlog.authorDesignation || "Technical Specialist"}</p>
                </div>
              </div>

              <Link to={`/blogs/${latestBlog.id}`} className="featured-read-btn">
                <span>Read Full Article</span>
                <span className="arrow-circle">
                  <FaArrowRight />
                </span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default LatestPosts;
