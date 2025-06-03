import React from 'react';
import './OurBlogs.css';
import Blog1 from '../../assets/Blog1.png';
import Blog2 from '../../assets/Blog2.png';
import Blog3 from '../../assets/Blog3.png';
import { FaArrowRight } from "react-icons/fa";
// import { GiNotebook } from "react-icons/gi";

const OurBlogs = () => {
  return (
    <section className="ourblogs-container">
      {/* Title Section */}
      <div className="ourblogs-title">
        {/* <div className="ourblogs-icon"><GiNotebook/></div> */}
        <h2 className="ourblogs-heading">📝 Read our Blog</h2>
        <p className="ourblogs-subtext">Check our latest article to get inspiring content for shopping</p>
      </div>

      {/* Blog Cards Container */}
      <div className="ourblogs-grid">

        {/* Blog Card */}
        <div className="ourblogs-card">
          <img src={Blog1} alt="Blog Cover" className="ourblogs-image" />
          <div className="ourblogs-content">
            <h3 className="ourblogs-card-title">Unlock the Power of Cloud with Estonsoft</h3>
            <p className="ourblogs-description">Looking to elevate your business with secure, scalable, and reliable cloud solution? 
Estonsoft has you covered!</p>
            <button className="ourblogs-button">
              Read More <FaArrowRight/>
            </button>
          </div>
        </div>

        {/* Blog Card */}
        <div className="ourblogs-card">
          <img src={Blog2} alt="Blog Cover" className="ourblogs-image" />
          <div className="ourblogs-content">
            <h3 className="ourblogs-card-title">Elevate Your Software Quality with Estonsoft</h3>
            <p className="ourblogs-description">Deliver flawless digital experiences with estonSoft’s expert testing services! In today’s competitive market, your Software quality, re...</p>
            <button className="ourblogs-button">
              Read More <FaArrowRight/>
            </button>
          </div>
        </div>

        {/* Blog Card */}
        <div className="ourblogs-card">
          <img src={Blog3} alt="Blog Cover" className="ourblogs-image" />
          <div className="ourblogs-content">
            <h3 className="ourblogs-card-title">Unlocking Business Growth with Web App Solution</h3>
            <p className="ourblogs-description">In today’s fast-paced digital landscape, businesses must adapt to thrive. Web app solutions are a game-changer, offering the....</p>
            <button className="ourblogs-button">
              Read More <FaArrowRight/>
            </button>
          </div>
        </div>

      </div>
    </section>
  );
};

export default OurBlogs;
                                