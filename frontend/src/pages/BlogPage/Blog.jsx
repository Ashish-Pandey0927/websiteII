import React, { useEffect, useState } from 'react';
import BlogHero from './BlogHero';
import OurBlogs from './OurBlogs';
import LatestPosts from './LatestPosts';
import BlogSkeleton from './BlogSkeleton';
import LeaveComment from '../../components/LeaveComment';
import Footer from '../../components/Footer';
import localBlogPosts from '../../data/blogPosts.json';

const Blogs = () => {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        setLoading(true);
        const response = await fetch(`${import.meta.env.VITE_API_BASE_URL}/blogs`, {
          headers: {
            Accept: "application/json",
            Authorization: import.meta.env.VITE_API_TOKEN,
          },
        });
        if (!response.ok) {
          throw new Error("Failed to fetch blogs from API");
        }
        const data = await response.json();
        if (data && data.length > 0) {
          // Sort descending by publishDate or date if available
          const sorted = [...data].sort((a, b) => new Date(b.publishDate || 0) - new Date(a.publishDate || 0));
          setBlogs(sorted);
        } else {
          // Fallback to local
          const sortedLocal = [...localBlogPosts].sort((a, b) => new Date(b.publishDate || 0) - new Date(a.publishDate || 0));
          setBlogs(sortedLocal);
        }
      } catch (error) {
        console.error("Failed to fetch blogs, using fallback data:", error);
        const sortedLocal = [...localBlogPosts].sort((a, b) => new Date(b.publishDate || 0) - new Date(a.publishDate || 0));
        setBlogs(sortedLocal);
      } finally {
        setLoading(false);
      }
    };

    fetchBlogs();
  }, []);

  // Split blogs
  const latestBlog = blogs[0] || null;
  const otherBlogs = blogs.slice(1);

  return (
    <div>
      <section id="blogs-section1">
        <BlogHero />
      </section>

      {loading ? (
        <BlogSkeleton />
      ) : (
        <>
          {latestBlog && (
            <section id="blogs-section2">
              <LatestPosts latestBlog={latestBlog} />
            </section>
          )}
          {otherBlogs.length > 0 && (
            <section id="blogs-section3">
              <OurBlogs blogs={otherBlogs} />
            </section>
          )}
        </>
      )}
      
      <section id="blogs-section4">
        <LeaveComment />
      </section>
      
      <section id="blogs-section5">
        <Footer />
      </section>
    </div>
  )
}

export default Blogs;
