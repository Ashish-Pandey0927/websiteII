import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './OurBlogs.css';
import { FaArrowRight } from "react-icons/fa";

const OurBlogs = () => {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const response = await fetch("https://admin.estonsoft.com/blogs/", {
          headers: {
            Accept: "application/json",
            Authorization:
              "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6IndlYnNpdGVAZW1haWwuY29tIn0.0V7rd-KcWrX1_Ax1LetjLIXXXQ-ClNzN9Fgddzc9qGs",
          },
        });

        const data = await response.json();
        setBlogs(data);
      } catch (error) {
        console.error("Failed to fetch blogs", error);
      }
    };

    fetchBlogs();
  }, []);

  return (
    <section className="ourblogs-container">
      {/* Title Section */}
      <div className="ourblogs-title">
        <h2 className="ourblogs-heading">📝 Read our Blog</h2>
        <p className="ourblogs-subtext">
          Check our latest article to get inspiring content for shopping
        </p>
      </div>

      {/* Blog Cards Container */}
      <div className="ourblogs-grid">
        {blogs.length > 0 ? (
          blogs.map((blog) => (
            <div key={blog.id} className="ourblogs-card">
              <Link to={`/blogs/${blog.id}`}>
                <img
                  src={blog.image || "https://via.placeholder.com/400x250"}
                  alt={blog.title}
                  className="ourblogs-image"
                />
              </Link>
              <div className="ourblogs-content">
                <Link to={`/blogs/${blog.id}`}>
                  <h3 className="ourblogs-card-title">
                    {blog.title || "Untitled Blog"}
                  </h3>
                </Link>
                <p className="ourblogs-description">
                  {blog.paragraph?.slice(0, 150) || "No description available..."}
                </p>
                <Link to={`/blogs/${blog.id}`} className="ourblogs-button">
                  Read More <FaArrowRight />
                </Link>
              </div>
            </div>
          ))
        ) : (
          <p>Loading blogs...</p>
        )}
      </div>
    </section>
  );
};

export default OurBlogs;
