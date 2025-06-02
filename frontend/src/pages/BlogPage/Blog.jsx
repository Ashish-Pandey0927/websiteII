import React from 'react';
import BlogHero from './BlogHero';
import OurBlogs from './OurBlogs';
import LatestPosts from './LatestPosts';

const Blogs = () => {
  return (
    <div>
      <section id="blogs-section1">
        <BlogHero />
      </section>
      <section id="blogs-section2">
        <OurBlogs />
      </section>
      <section id="blogs-section3">
         <LatestPosts />
       </section>
    </div>
  )
}

export default Blogs
