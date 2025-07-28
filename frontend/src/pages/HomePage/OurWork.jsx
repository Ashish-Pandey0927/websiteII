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
    description: "Fitness and training platform designed to help users achieve their personal wellness objectives through guided workouts. Fit Theorem is a transformative fitness experience designed to empower individuals by defeating mediocrity and unlocking their fullest potential—mind, body, and spirit. Offering a dynamic mix of strength training, conditioning, flow, and kickboxing, Fit Theorem delivers high-energy group workouts that are inclusive for all fitness levels. The program is enhanced by personalized support through mindset coaching, nutritional guidance, and 24/7 accountability via a dedicated app. With a nationwide presence, each location fosters a welcoming community through engaging events and a results-driven culture. Whether training in-studio or at-home, members benefit from a holistic approach that inspires long-term change. Fit Theorem is more than a workout—it's a movement. For those seeking not only personal transformation but also a business opportunity, the franchise model offers a proven path with scalable systems and global growth potential.",
    image: fitness1,
    overlayImage: FitnessMinImg ,
    category: "Health & Fitness",
    height: "project-height-1",
    url: "https://fittheorem.com/"
  },
  {
    id: 2,
    title: "Official app of Prothom Alo English to provide readers with news on the go",
    description: "A comprehensive news application delivering real-time updates and engaging content for readers worldwide.English News – Prothom Alo\n\nStay updated with the latest news from Bangladesh and around the world with the official English-language app of Prothom Alo. Get breaking news, in-depth analysis, and trending stories across politics, business, sports, lifestyle, entertainment, technology, and more — all in one place.\n\nKey Features:\n- Real-time updates with breaking news and top headlines\n- Latest, most-read, and trending news in a clean and easy-to-read format\n- Multimedia content: photo galleries and in-app video player\n- Push notifications for important news alerts\n- Comment and engage with other readers\n- Easy sharing via social media and messaging apps\n\nDownload now to experience trusted journalism from Bangladesh’s most respected media outlet — anytime, anywhere.",
    image:image4,
    overlayImage: newsMinImg,
    category: "News & Media",
    height: "project-height-2",
    url: "https://en.prothomalo.com/"
  },
  {
    id: 3,
    title: "The official Srilankan Matrimony app Mangal Yojna",
    description: "Srilankan Matrimony is a trusted matrimonial platform designed to help Sri Lankan brides and grooms find their ideal life partners. Catering to users in Sri Lanka and abroad, it offers a secure and culturally respectful environment focused on serious, marriage-oriented matchmaking. With advanced search filters, verified profiles, daily match suggestions, and privacy-first features, Srilankan Matrimony makes the partner search simple, efficient, and personalized. Whether you're looking for a partner based on religion, community, profession, or location, this platform connects you with genuine prospects for a meaningful relationship.",
    image: matremony,
    overlayImage: matremonyMinImg,
    category: "Social & Lifestyle",
    height: "project-height-3",
    url: "https://www.srilankanmatrimony.com/"
  },
  {
    id: 4,
    title: "CityMaps2Go Offline Maps",
    description: "Comprehensive offline mapping solution providing detailed navigation and location services without internet connectivity.Explore Munich with ease using the Munich Travel Guide — your offline companion with detailed maps and insider tips. Discover attractions, restaurants, and more without internet or roaming charges. Features include GPS-enabled offline maps, points of interest, personalized trip planning, and local reviews. Trusted by over 15 million travelers worldwide.",
    image: munchi,
    overlayImage: munichMinImg,
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
          <div className="overlay-image">
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