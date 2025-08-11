import React from 'react';
import "./OurWork.css";
import { ArrowUpRight } from "lucide-react";
import fitness1 from "../../assets/fitness1.png";
import FitnessMinImg from "../../assets/fitnessWhatsApp.png";
import matremony from "../../assets/matremony.png";
import munchi from "../../assets/munchi.png";
import image4 from "../../assets/image 4.png";
import newsMinImg from "../../assets/news1 1.png";
import matremonyMinImg from "../../assets/matremonyWhatsApp.png";
import munichMinImg from "../../assets/munich 1.png";

// const projects = [
//   {
//     id: 1,
//     title: "App for Training for real people with real goal",
//     image: fitness1,
//     miniImage: FitnessMinImg,
//     url: "https://fittheorem.com/"
//   },
//   {
//     id: 2,
//     title: "Official app of Prothom Alo English to provide readers with news on the go",
//     image: image4,
//     miniImage: newsMinImg,
//     url: "https://en.prothomalo.com/"
//   },
//   {
//     id: 3,
//     title: "The official Srilankan Matrimony app Mangal Yojna",
//     image: matremony,
//     miniImage: matremonyMinImg,
//     url: "https://www.srilankanmatrimony.com/"
//   },
//   {
//     id: 4,
//     title: "CityMaps2Go Offline Maps",
//     image: munchi,
//     miniImage: munichMinImg,
//     url: "https://play.google.com/store/apps/details?id=com.ulmon.android.playmunich&hl=en_IN&pli=1"
//   },
// ];
const projects = [
  {
    id: 1,
    title: "App for Training for real people with real goal",
    description: "Fit Theorem offers high-energy group workouts, mindset coaching, and nutrition guidance for all fitness levels — in-studio or at-home.",
    image: fitness1,
    overlayImage: FitnessMinImg,
    overlayHeight: "overlayImage-height-1",
    category: "Health & Fitness",
    height: "project-height-1",
    url: "https://fittheorem.com/"
  },
  {
    id: 2,
    title: "Official app of Prothom Alo English to provide readers with news on the go",
    description: "Stay updated with breaking news, trending stories, and multimedia content from Bangladesh and around the world — anytime, anywhere.",
    image: image4,
    overlayImage: newsMinImg,
    overlayHeight: "overlayImage-height-2",
    category: "News & Media",
    height: "project-height-2",
    url: "https://en.prothomalo.com/"
  },
  {
    id: 3,
    title: "The official Srilankan Matrimony app Mangal Yojna",
    description: "A trusted platform for Sri Lankan brides and grooms to find compatible, verified partners for meaningful, marriage-focused relationships.",
    image: matremony,
    overlayImage: matremonyMinImg,
    overlayHeight: "overlayImage-height-3",
    category: "Social & Lifestyle",
    height: "project-height-3",
    url: "https://www.srilankanmatrimony.com/"
  },
  {
    id: 4,
    title: "CityMaps2Go Offline Maps",
    description: "GPS-enabled offline maps with attractions, restaurants, and tips — perfect for exploring Munich without internet or roaming charges.",
    image: munchi,
    overlayImage: munichMinImg,
    overlayHeight: "overlayImage-height-4",
    category: "Travel & Navigation",
    height: "project-height-4",
    url: "https://play.google.com/store/apps/details?id=com.ulmon.android.playmunich&hl=en_IN&pli=1"
  }
];


const ProjectCard = ({ project }) => {
  return (
    <div className={`project-card ${project.height}`}>
      <div className="card-inner">
        {/* Front of card - Image */}
        <div className="card-front">
          {/* Large background image */}
          <img
            src={project.image}
            alt={project.title}
            className="main-image"
          />
          
          {/* Small overlay image */}
          <div className={`overlay-image ${project.overlayHeight}`}>
            <img
              src={project.overlayImage}
              alt={`${project.title} preview`}
              className="overlay-img"
            />
          </div>
          
          <div className="image-gradient" />
          <div className="category-badge">
            <span className="category-text">
              {project.category}
            </span>
          </div>
        </div>

        {/* Back of card - Details */}
        <div className="card-back">
          <div className="card-content">
            <span className="category-badge-back">
              {project.category}
            </span>
            <h3 className="project-title">
              {project.title}
            </h3>
            <p className="project-description">
              {project.description}
            </p>
          </div>
          
          <button 
            className="view-details-btn"
            onClick={() => window.open(project.url, '_blank')}
          >
            <span className="btn-text">View Details</span>
            <ArrowUpRight className="btn-icon" />
            <div className="btn-underline" />
          </button>
        </div>
      </div>
      
      {/* Title below the card */}
      <div className="card-title-below">
        <h3 className="project-title-below">
          {project.title}
        </h3>
        
        {/* View Details Button */}
        <button 
          className="view-details-btn-below"
          onClick={() => window.open(project.url, '_blank')}
        >
          <span className="btn-text-below">View Details</span>
          <ArrowUpRight className="btn-icon-below" />
        </button>
      </div>
    </div>
  );
};

const OurWork = () => {
  return (
    <section className="our-work-section">
      <div className="container">
        {/* Header */}
        <div className="header-section">
          <div className="header-content">
            <h2 className="main-title">
              Explore What <br/> We Have Done
            </h2>
            <p className="main-description">
              Decisioning platforms can help you make decisions faster than ever before—and often with less effort—by giving you access to all of your current data in one place so that it's easy to find what you need when it's needed most!
            </p>
          </div>
          
          <button className="see-work-btn">
            <span className="see-work-text">See Our Work</span>
            <ArrowUpRight className="see-work-icon" />
            <div className="see-work-underline" />
          </button>
        </div>

        {/* Projects Grid */}
        <div className="projects-grid">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurWork;