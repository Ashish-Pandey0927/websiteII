import React from 'react';
import { Link } from 'react-router-dom';
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
import './OurBlogs.css';

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
  if (!image) return "https://via.placeholder.com/600x400";
  if (image.startsWith("/") || image.startsWith("http://") || image.startsWith("https://") || image.startsWith("data:")) {
    return image;
  }
  const filename = image.split('/').pop();
  return localImageMap[filename] || `https://estonsoft.com/uploads/${filename}` || "https://via.placeholder.com/600x400";
};

const OurBlogs = ({ blogs = [] }) => {
  // Format publish date
  const formatDate = (dateStr) => {
    if (!dateStr) return "";
    try {
      const options = { year: 'numeric', month: 'short', day: 'numeric' };
      return new Date(dateStr).toLocaleDateString(undefined, options);
    } catch (e) {
      return dateStr;
    }
  };

  // Estimate reading time
  const readingTime = (content) => {
    if (!content) return "3 min read";
    const words = content.trim().split(/\s+/).length;
    const time = Math.ceil(words / 200);
    return `${time} min read`;
  };

  return (
    <section className="ourblogs-container">
      {/* Title Section */}
      <div className="ourblogs-title-section">
        <span className="ourblogs-subtitle">
          <span className="subtitle-line"></span> Discover Insights
        </span>
        <h2 className="ourblogs-heading">More Publications</h2>
        <p className="ourblogs-subtext">
          Explore our depth of expertise in cloud engineering, quality assurance, web development, and digital transformation.
        </p>
      </div>

      {/* Blog Cards Container */}
      <div className="ourblogs-grid">
        {blogs.length > 0 ? (
          blogs.map((blog, idx) => {
            const tag = blog.tags && blog.tags.length > 0 ? blog.tags[0] : "Insights";
            return (
              <article 
                key={blog.id || idx} 
                className="ourblogs-card"
                style={{ animationDelay: `${0.1 * idx}s` }}
              >
                {/* Image Wrap */}
                <div className="ourblogs-image-container">
                  <Link to={`/blogs/${blog.id}`}>
                    <img
                      src={getBlogImage(blog.image)}
                      alt={blog.title}
                      className="ourblogs-image"
                    />
                    <div className="ourblogs-image-hover-overlay"></div>
                    <span className="ourblogs-card-tag">{tag}</span>
                  </Link>
                </div>

                {/* Content Wrap */}
                <div className="ourblogs-content">
                  {/* Meta Details */}
                  <div className="ourblogs-card-meta">
                    <span className="ourblogs-meta-item">
                      <FaCalendarAlt className="meta-sub-icon" /> {formatDate(blog.publishDate || blog.created_at)}
                    </span>
                    <span className="ourblogs-meta-bullet">•</span>
                    <span className="ourblogs-meta-item">
                      <FaClock className="meta-sub-icon" /> {readingTime(blog.content || blog.paragraph)}
                    </span>
                  </div>

                  {/* Title */}
                  <Link to={`/blogs/${blog.id}`}>
                    <h3 className="ourblogs-card-title">
                      {blog.title || "Untitled Blog"}
                    </h3>
                  </Link>

                  {/* Description Excerpt */}
                  <p className="ourblogs-description">
                    {blog.paragraph?.slice(0, 120) || "No description available..."}
                    {blog.paragraph && blog.paragraph.length > 120 ? "..." : ""}
                  </p>

                  {/* Bottom Divider and CTA */}
                  <div className="ourblogs-card-footer">
                    <div className="ourblogs-author-pill">
                      <span className="author-avatar-small">
                        {blog.authorName ? blog.authorName.charAt(0).toUpperCase() : "E"}
                      </span>
                      <span className="author-name-small">{blog.authorName || "EstonSoft"}</span>
                    </div>

                    <Link to={`/blogs/${blog.id}`} className="ourblogs-button">
                      <span>Read More</span>
                      <FaArrowRight className="arrow-icon" />
                    </Link>
                  </div>
                </div>
              </article>
            );
          })
        ) : (
          <p className="no-blogs-text">No articles found.</p>
        )}
      </div>
    </section>
  );
};

export default OurBlogs;

