import React from 'react';
import BlogHero from './BlogHero';
import OurBlogs from './OurBlogs';
import LatestPosts from './LatestPosts';
import LeaveComment from '../../components/LeaveComment';
import Footer from '../../components/Footer';

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
       <section id="blogs-section4">
         <LeaveComment />
       </section>
      
      <section id="blogs-section5">
        <Footer />
      </section>
    </div>
  )
}

export default Blogs
