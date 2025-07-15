import React from 'react';
import "./OurWork.css";
import fitness1 from "../../assets/fitness1.png";
import FitnessMinImg from "../../assets/fitnessWhatsApp.png";
import matremony from "../../assets/matremony.png";
import munchi from "../../assets/munchi.png";
import image4 from "../../assets/image 4.png";
import newsMinImg from "../../assets/news1 1.png";
import matremonyMinImg from "../../assets/matremonyWhatsApp.png";
import munichMinImg from "../../assets/munich 1.png";

const projects = [
  {
    id: 1,
    title: "App for Training for real people with real goal",
    image: fitness1,
    miniImage: FitnessMinImg,
    url: "https://fittheorem.com/"
  },
  {
    id: 2,
    title: "Official app of Prothom Alo English to provide readers with news on the go",
    image: image4,
    miniImage: newsMinImg,
    url: "https://en.prothomalo.com/"
  },
  {
    id: 3,
    title: "The official Srilankan Matrimony app Mangal Yojna",
    image: matremony,
    miniImage: matremonyMinImg,
    url: "https://www.srilankanmatrimony.com/"
  },
  {
    id: 4,
    title: "CityMaps2Go Offline Maps",
    image: munchi,
    miniImage: munichMinImg,
    url: "https://play.google.com/store/apps/details?id=com.ulmon.android.playmunich&hl=en_IN&pli=1"
  },
];

export default function OurWork() {
  return (
    <section className="our-work">
      <div className="our-work-container">
        <h2 className="our-work-heading">Explore What We Have Done</h2>
        <div className="our-work-cta">
          <p className="our-work-description">
            Decisioning platforms can help you make decisions faster than ever before—and often with less effort—by giving you access to all of your current data in one place so that it's easy to find what you need when it's needed most!
          </p>
          <button className="view-work-btn">
            See Our Work <span className="arrow-icon">↗</span>
          </button>
          <div className="underline"></div>
        </div>

        <div className="projects-grid">
          {projects.map((project) => (
            <div className="project-card" key={project.id}>
              <div className="project-image">
                <img
                  src={project.image}
                  alt={project.title}
                  className={
                    project.id === 1
                      ? "fitness-image"
                      : project.id === 2
                      ? "news-image"
                      : project.id === 3
                      ? "matrimony-image"
                      : project.id === 4
                      ? "munchi-image "
                      : ""
                  }
                />
                <img
                  src={project.miniImage}
                  alt={project.title+'miniImage'}
                  className={
                    project.id === 1
                      ? "fitness-mini-image"
                      : project.id === 2
                      ? "news-mini-image"
                      : project.id === 3
                      ? "matrimony-mini-image"
                      : project.id === 4
                      ? "munchi-mini-image "
                      : ""
                  }
                />
              </div>
              <div className={
                    project.id === 1
                      ? "fitness-project-cta"
                      : project.id === 2
                      ? "news-project-cta"
                      : project.id === 3
                      ? "matrimony-project-cta"
                      : project.id === 4
                      ? "munchi-project-cta "
                      : ""
                  }>
              <h3 className="project-title">{project.title}</h3>
                <a 
                  href={project.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="view-details-btn"
                >
                  View Details <span className="arrow-icon">↗</span>
                </a>
                <div className="underline"></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
