import React from 'react'
import './OurPortfolios.css';
import Portfolio1 from '../../assets/Portfolio1.png';
import Portfolio2 from '../../assets/Portfolio2.png';
import Portfolio3 from '../../assets/Portfolio3.png';
import Portfolio4 from '../../assets/Portfolio4.png';
import Portfolio5 from '../../assets/Portfolio5.png';
import Portfolio6 from '../../assets/Portfolio6.png';

function OurPortfolios() {
  return (
    <section className="ourportfolios-container">
      {/* Title Section */}
      <div className="ourportfolios-title">
         <div className='ourportfolio'>
        Our Portfolio
      </div>
        <h2 className="ourportfolios-heading">Explore our work</h2>
        <p className="ourportfolios-subtext">A showcase of our diverse projects, highlighting innovative solutions tailored to meet each client's unique vision.</p>
      </div>

      {/* Blog Cards Container */}
      <div className="ourportfolios-grid">

        {/* Blog Card */}
        <div className="ourportfolios-card">
          <img src={Portfolio1} alt="Blog Cover" className="ourportfolios-image" />
          <div className="ourportfolios-content">
            <h3 className="ourportfolios-card-title">App for Training for real people with real goal</h3>
           <button className="ourportfolios-button">
            View Details <span className="arrow-icon">↗</span>
            </button>
          </div>
        </div>

        {/* Blog Card */}
        <div className="ourportfolios-card">
          <img src={Portfolio2} alt="Blog Cover" className="ourportfolios-image" />
          <div className="ourportfolios-content">
            <h3 className="ourportfolios-card-title">App for Training for real people with real goal</h3>
           <button className="ourportfolios-button">
            View Details <span className="arrow-icon">↗</span>
            </button>
          </div>
        </div>

        {/* Blog Card */}
        <div className="ourportfolios-card">
          <img src={Portfolio3} alt="Blog Cover" className="ourportfolios-image" />
          <div className="ourportfolios-content">
            <h3 className="ourportfolios-card-title">App for Training for real people with real goal</h3>
            <button className="ourportfolios-button">
            View Details <span className="arrow-icon">↗</span>
            </button>
          </div>
        </div>
        <div className="ourportfolios-card">
          <img src={Portfolio4} alt="Blog Cover" className="ourportfolios-image" />
          <div className="ourportfolios-content">
            <h3 className="ourportfolios-card-title">App for Training for real people with real goal</h3>
            <button className="ourportfolios-button">
            View Details <span className="arrow-icon">↗</span>
            </button>
          </div>
        </div>
        <div className="ourportfolios-card">
          <img src={Portfolio5} alt="Blog Cover" className="ourportfolios-image" />
          <div className="ourportfolios-content">
            <h3 className="ourportfolios-card-title">App for Training for real people with real goal</h3>
           <button className="ourportfolios-button">
            View Details <span className="arrow-icon">↗</span>
            </button>
          </div>
        </div>
        <div className="ourportfolios-card">
          <img src={Portfolio6} alt="Blog Cover" className="ourportfolios-image" />
          <div className="ourportfolios-content">
            <h3 className="ourportfolios-card-title">App for Training for real people with real goal</h3>
             <button className="ourportfolios-button">
            View Details <span className="arrow-icon">↗</span>
            </button>
          </div>
        </div>

      </div>
    </section>
  );
};

export default OurPortfolios