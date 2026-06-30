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
      // Always start with the CMS JSON as the base (updated on every Netlify deploy)
      const cmsBlogs = localBlogPosts.blogs || [];

      try {
        setLoading(true);
        const response = await fetch(`${import.meta.env.VITE_API_BASE_URL}/blogs`, {
          headers: {
            Accept: "application/json",
            Authorization: import.meta.env.VITE_API_TOKEN,
          },
        });

        if (!response.ok) throw new Error("API unavailable");

        const apiData = await response.json();

        if (apiData && apiData.length > 0) {
          // Merge: API blogs take priority. Append CMS-only blogs not yet in the API.
          const apiIds = new Set(apiData.map(b => b.id));
          const cmsOnlyBlogs = cmsBlogs.filter(b => !apiIds.has(b.id));
          const merged = [...apiData, ...cmsOnlyBlogs];
          const sorted = merged.sort((a, b) => new Date(b.publishDate || 0) - new Date(a.publishDate || 0));
          setBlogs(sorted);
        } else {
          // API returned nothing — use CMS JSON
          const sorted = [...cmsBlogs].sort((a, b) => new Date(b.publishDate || 0) - new Date(a.publishDate || 0));
          setBlogs(sorted);
        }
      } catch (error) {
        // API unreachable — fall back to CMS JSON only
        console.error("API unavailable, using CMS JSON:", error);
        const sorted = [...cmsBlogs].sort((a, b) => new Date(b.publishDate || 0) - new Date(a.publishDate || 0));
        setBlogs(sorted);
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
