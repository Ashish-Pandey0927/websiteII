import React from 'react';
import PortfolioHero from './PortfolioHero';
import LeaveComment from '../BlogPage/LeaveComment';
import BlogFooter from '../BlogPage/BlogFooter';
import OurPortfolios from './OurPortfolios';

const Portfolio = () => {
  return (
    <div>
      <section id="portfolio-section1">
       <PortfolioHero />
      </section>
      <section id="portfolio-section2">
      <OurPortfolios/>
      </section>
      <section id="portfolio-section3">
       <LeaveComment />
       </section>
       <section id="portfolio-section4">
       <BlogFooter />
       </section>
    </div>
  )
}
export default Portfolio
