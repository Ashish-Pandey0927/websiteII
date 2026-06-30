import { useParams, Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { FaArrowLeft, FaCalendarAlt, FaClock } from 'react-icons/fa';
import DashboardHeader from '../../components/DashboardHeader';
import Footer from '../../components/Footer';
import localBlogPosts from '../../data/blogPosts.json';
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
import './BlogDetails.css';

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
  if (!image) return "https://via.placeholder.com/1200x600";
  if (image.startsWith("http://") || image.startsWith("https://") || image.startsWith("data:")) {
    return image;
  }
  const filename = image.split('/').pop();
  return localImageMap[filename] || `https://estonsoft.com/uploads/${filename}` || "https://via.placeholder.com/1200x600";
};

const BlogDetailSkeleton = () => {
  return (
    <div className="blog-details-skeleton">
      <div className="skeleton-back-btn skeleton-shimmer"></div>
      
      <div className="skeleton-title-container">
        <div className="skeleton-title-line skeleton-shimmer"></div>
        <div className="skeleton-title-line short skeleton-shimmer"></div>
      </div>

      <div className="skeleton-meta-profile">
        <div className="skeleton-avatar-circle skeleton-shimmer"></div>
        <div className="skeleton-meta-text">
          <div className="skeleton-meta-line name skeleton-shimmer"></div>
          <div className="skeleton-meta-line role skeleton-shimmer"></div>
        </div>
      </div>

      <div className="skeleton-image-block skeleton-shimmer"></div>

      <div className="skeleton-content-lines">
        <div className="skeleton-text-line skeleton-shimmer"></div>
        <div className="skeleton-text-line skeleton-shimmer"></div>
        <div className="skeleton-text-line short skeleton-shimmer"></div>
        <div className="skeleton-text-line skeleton-shimmer"></div>
        <div className="skeleton-text-line skeleton-shimmer"></div>
        <div className="skeleton-text-line last skeleton-shimmer"></div>
      </div>
    </div>
  );
};

const BlogDetails = () => {
    const { id } = useParams();
    const [blog, setBlog] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchBlog = async () => {
            try {
                setLoading(true);
                const response = await fetch(`${import.meta.env.VITE_API_BASE_URL}/blogs/${id}`, {
                    headers: {
                        'Content-Type': 'application/json',
                        'Authorization': import.meta.env.VITE_API_TOKEN,
                    },
                });

                if (!response.ok) throw new Error('Blog not found from API');
                const data = await response.json();
                setBlog(data);
            } catch (error) {
                console.error('Error fetching blog from API, trying local fallback:', error);
                const localBlog = localBlogPosts.blogs.find(b => b.id === id);
                if (localBlog) {
                    setBlog(localBlog);
                } else {
                    setBlog(null);
                }
            } finally {
                setLoading(false);
            }
        };

        if (id) {
            fetchBlog();
        }
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

    const readingTime = (content) => {
        if (!content) return "3 min read";
        const words = content.trim().split(/\s+/).length;
        const time = Math.ceil(words / 200);
        return `${time} min read`;
    };

    const tag = blog && blog.tags && blog.tags.length > 0 ? blog.tags[0] : "Tech Insight";

    return (
        <div className="blog-details-page-wrapper">
          {/* Header wrapper for proper layout positioning */}
          <div className="blog-details-header-bg">
            <DashboardHeader activeLink="#Blogs" />
          </div>

          <div className="blog-details-main-content">
            {loading ? (
                <BlogDetailSkeleton />
            ) : !blog ? (
                <div className="blog-not-found">
                    <h2>Blog Post Not Found</h2>
                    <p>The publication you are looking for might have been removed or renamed.</p>
                    <Link to="/blogs" className="back-to-blogs-btn">
                      <FaArrowLeft /> Return to Blogs
                    </Link>
                </div>
            ) : (
                <article className="blog-details-article">
                    <Link to="/blogs" className="back-to-blogs-btn">
                      <FaArrowLeft className="back-arrow-icon" /> <span>Back to Publications</span>
                    </Link>

                    <header className="blog-details-header animate-slide-up">
                      <div className="blog-details-header-meta">
                        <span className="details-tag-badge">{tag}</span>
                        <span className="details-meta-item">
                          <FaCalendarAlt className="meta-sub-icon" /> {formatDate(blog.publishDate || blog.created_at)}
                        </span>
                        <span className="details-meta-bullet">•</span>
                        <span className="details-meta-item">
                          <FaClock className="meta-sub-icon" /> {readingTime(blog.content || blog.paragraph)}
                        </span>
                      </div>
                      
                      <h1 className="blog-details-title">{blog.title}</h1>

                      {/* Author Card Row */}
                      <div className="blog-details-author-row">
                        <div className="details-avatar">
                          {blog.authorName ? blog.authorName.charAt(0).toUpperCase() : "E"}
                        </div>
                        <div className="details-author-info">
                          <h4 className="details-author-name">{blog.authorName || "EstonSoft Admin"}</h4>
                          <p className="details-author-designation">{blog.authorDesignation || "Technical Specialist"}</p>
                        </div>
                      </div>
                    </header>

                    <div className="blog-details-image-container animate-fade-in">
                      <img
                          src={getBlogImage(blog.image)}
                          alt={blog.title}
                          className="blog-details-image"
                      />
                    </div>

                    <div className="blog-details-body-wrapper animate-fade-in">
                      {blog.paragraph && (
                        <p className="blog-details-lead-paragraph">{blog.paragraph}</p>
                      )}

                      <div
                          className="blog-details-content"
                          dangerouslySetInnerHTML={{ __html: blog.content }}
                      />
                    </div>
                </article>
            )}
          </div>
          <Footer />
        </div>
    );
};

export default BlogDetails;

