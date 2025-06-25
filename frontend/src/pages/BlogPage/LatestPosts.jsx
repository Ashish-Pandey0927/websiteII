import React from "react";
import { FaArrowRight } from "react-icons/fa";
import BlogPost1 from '../../assets/BlogPost1.png';
import BlogPost2 from '../../assets/BlogPost2.png';
import BlogPost3 from '../../assets/BlogPost3.png';
import BlogPost4 from '../../assets/BlogPost4.png';
import BlogPost5 from '../../assets/BlogPost5.png';
import BlogPost6 from '../../assets/BlogPost6.png';
import "./LatestPosts.css"; // Import the CSS file

const posts = [
  {
    title: "Unlock the Power of Cloud with Estonsoft",
    description: "Looking to elevate your business with secure, scalable, and reliable cloud solution?Estonsoft has you covered!",
    image:BlogPost1,
  },
  {
    title: "Unlock the Power of Cloud with Estonsoft",
    description: "Looking to elevate your business with secure, scalable, and reliable cloud solution? Estonsoft has you covered!",
    image: BlogPost2,
  },
  {
   title: "Unlock the Power of Cloud with Estonsoft",
    description: "Looking to elevate your business with secure, scalable, and reliable cloud solution? Estonsoft has you covered!",
    image:BlogPost3,
  },
  {
   title: "Unlock the Power of Cloud with Estonsoft",
    description: "Looking to elevate your business with secure, scalable, and reliable cloud solution? Estonsoft has you covered!",
    image:BlogPost4,
  },
  {
   title: "Unlock the Power of Cloud with Estonsoft",
    description: "Looking to elevate your business with secure, scalable, and reliable cloud solution? Estonsoft has you covered!",
    image: BlogPost5,
  },
  {
title: "Unlock the Power of Cloud with Estonsoft",
    description: "Looking to elevate your business with secure, scalable, and reliable cloud solution? Estonsoft has you covered!",
    image:BlogPost6,
  },
];

function LatestPosts() {
  return (
    <section className="latest-posts-section">
      <div className="latest-posts-container">
      <h2 className="section-title">Latest Post</h2>
      <div className="posts-grid">
        {posts.map((post, index) => (
          <div className="post-card" key={index}>
            <img src={post.image} alt={post.title} className="post-image" />
            <div className="post-content">
              <h3 className="post-title">{post.title}</h3>
              <p className="post-description">{post.description}</p>
              <button className="post-button">
                Read More <FaArrowRight />
              </button>
            </div>
          </div>
        ))}
      </div>
      </div>
    </section>
  );
}

export default LatestPosts;
