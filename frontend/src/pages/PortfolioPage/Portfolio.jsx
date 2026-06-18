import React from 'react';
import PortfolioHero from './PortfolioHero';
import LeaveComment from '../../components/LeaveComment';
import OurPortfolios from './OurPortfolios';
import Footer from '../../components/Footer';

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
       <Footer />
       </section>
    </div>
  )
}
export default Portfolio
