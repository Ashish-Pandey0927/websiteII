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
    // Read directly from the JSON file which Decap CMS keeps updated.
    // Netlify rebuilds the site on every CMS save, so this JSON is always current.
    const sorted = [...localBlogPosts.blogs].sort(
      (a, b) => new Date(b.publishDate || 0) - new Date(a.publishDate || 0)
    );
    setBlogs(sorted);
    setLoading(false);
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
