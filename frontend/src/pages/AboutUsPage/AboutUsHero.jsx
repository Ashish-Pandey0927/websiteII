// import React, { useState } from 'react';
// import './AboutUsHero.css';
// import DashboardHeader from '../../components/DashboardHeader';
// import AboutUsHeroBG from '../../assets/AboutUsHero.png';

// const AboutUsHero = () => {
//   const [activeLink, setActiveLink] = useState('#Aboutus');

//   return (
//     <div className="aboutus-container">
//         <DashboardHeader activeLink={activeLink} setActiveLink={setActiveLink} />
//       <div className="aboutus-button">
//         <span className="aboutus-button-text">About us</span>
//       </div>

//       <h2 className="aboutus-heading">
//         Our Journey to smarter conversations
//       </h2>
//       <p className="aboutus-subtitle">
//         Explore how our passion for innovation fuels intelligent, human-like AI solution.
//       </p>

//       <div className="aboutus-image-wrapper">
//         <img
//           src={AboutUsHeroBG}
//           alt="AI Background"
//           className="aboutus-image"
//         />
//       </div>
//       <div className="aboutus-metrics">
//         <div className="metric">
//           <div className="metric-label">User satisfaction Rate</div>
//           <div className="metric-value">98%</div>
//         </div>
//         <div className="metric">
//           <div className="metric-label">Faster response time</div>
//           <div className="metric-value">5X</div>
//         </div>
//         <div className="metric">
//           <div className="metric-label">Availability</div>
//           <div className="metric-value">24/7</div>
//         </div>
//         <div className="metric">
//           <div className="metric-label">Interaction handled</div>
//           <div className="metric-value">1M+</div>
//         </div>
//       </div>

//     </div>
//   );
// };

// export default AboutUsHero;
import React, { useState } from "react";
import './AboutUsHero.css';
import AboutUsHeroBG from '../../assets/AboutUsHero.png';
import DashboardHeader from "../../components/DashboardHeader";

const AboutUsHero = () => {
  const [activeLink, setActiveLink] = useState('#Services');
  return (

      <div
        className="aboutus-page-container"
        style={{
          backgroundImage: `url(${AboutUsHeroBG}), linear-gradient(270deg, rgba(0, 0, 0, 0.0001) 0%, #161C2D 99.54%)`,
          backgroundBlendMode: 'multiply',
        }}
      >
        <DashboardHeader activeLink={activeLink} setActiveLink={setActiveLink} />
        <div className="Group-1171274896">
          <div
            className="aboutus-page-hero-content">
            <h1 className="aboutus-page-hero-heading" >
              About Us
            </h1>
            <p className="aboutus-page-hero-paragraph">We blend technology, creativity, and strategy to help businesses grow in the digital era. Our team is driven by innovation, guided by integrity, and committed to delivering solutions that make a real impact. With every project, we aim to build trust, exceed expectations, and shape a smarter future together.</p>
          </div>
        </div>
      </div>
  );
};

export default AboutUsHero;

