import React from "react";
import "./OurWork.css";
import fitness1 from "../assets/fitness1.png";
import FitnessMinImg from "../assets/fitnessWhatsApp.png";
import matremony from "../assets/matremony.png";
import munchi from "../assets/munchi.png";
import image4 from "../assets/image 4.png";
import news11 from "../assets/news1 1.png";
import matremony1 from "../assets/matremonyWhatsApp.png";
import munich1 from "../assets/munich 1.png";

const OurWork = () => {
  return (
    <div className="our-work-section">
      <div className="rectangle-2555">
      <h2 className="heading">Explore What We Have Done</h2>
      <p className="description">
        Decisioning platforms can help you make decisions faster than ever before—and often with less effort—by giving you access to all of your current data in one place so that it's easy to find what you need when it's needed most!
      </p>
      <button className="see-work-button">
        See Our Work
        <span className="arrow-icon">↗</span>
      </button>

      <div className="project project-1">
        <img className="project1_img1"src={fitness1} alt="Fitness App" />
        <div className="rectangle-39915">
          <img
            src={FitnessMinImg}
            alt="Descriptive Alt Text"
            className="project1_img2"
          />
        </div>
       
          <h3 className="project1_h3">App for Training for real people with real goal</h3>
          <button className="view-details project-1_button">
            View Details <span className="arrow-icon">↗</span>
          </button>
      
      </div>

      <div className="project project-2">
        <img className="project2_img1" src={image4} alt="image 4 prothom" />
        <img className="project2_img2" src={news11} alt="p2minImg" />
        
          <h3 className="project2_h3">Official app of Prothom Alo English to provide readers with news on the go</h3>
          <button className="view-details project-2_button">
            View Details <span className="arrow-icon">↗</span>
          </button>

      </div>

      <div className="project project-3">
        <img className="project3_img1" src={matremony} alt="Matrimony App" />
        <img className="project3_img2" src={matremony1} alt="p2minImg" />
      
          <h3 className="project3_h3">The official Srilankan Matrimony app Mangal Yojna</h3>
          <button className="view-details project-3_button">
            View Details <span className="arrow-icon">↗</span>
          </button>
    
      </div>

      <div className="project project-4">
        <img className="project4_img1" src={munchi} alt="City Maps App" />
        <div className="rectangle39914">
        <img className="project4_img2" src={munich1} alt="City Maps App min" />
        </div>
      
          <h3 className="project4_h3">CityMaps2Go Offline Maps</h3>
          <button className="view-details project-4_button">
            View Details <span className="arrow-icon">↗</span>
          </button>
          
      </div>
    </div>
</div>
  );
};

export default OurWork;