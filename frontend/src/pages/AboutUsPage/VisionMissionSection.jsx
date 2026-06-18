import React from "react";
import "./VisionMissionSection.css";
import visionmissionimage from '../../assets/visionmissionimage.png';
import vision from '../../assets/vision.svg';
import mission from '../../assets/mission.svg';

const InfoCard = ({ icon, title, text }) => (
    <div className="info-box">
        <div className="icon-container">
            <div className="icon-bg" />
            <img src={icon} alt={`${title} Icon`} className="icon" />
        </div>
        <div className="title-text">
            <h2 className="section-title">{title}</h2>
            <p className="section-text">{text}</p>
        </div>
    </div>
);


const VisionMissionSection = () => {
    return (
        <section className="vision-mission-container">
            <div className="vision-mission-outer">
                <div className="vision-mission-inner">
                    <div className="vision-mission-text-box">
                        <InfoCard icon={vision} title="Our Vision" text="Our vision is to empower businesses through innovative technology solutions that drive growth, efficiency, and lasting impact. We aim to be a trusted partner in digital transformation, delivering excellence through creativity, collaboration, and a commitment to customer success." />
                        <InfoCard icon={mission} title="Our Mission" text="Our mission is to deliver high-quality, reliable, and scalable digital solutions that help our clients thrive in a fast-changing world. We are dedicated to innovation, customer satisfaction, and building lasting relationships through transparency, integrity, and technical excellence." />
                    </div>
                </div>
                {/* Image Side */}
                <div className="custom-box">
                    <div className="rectangle-40060"></div>

                    <div className="image-container">
                        <img
                            src={visionmissionimage}
                            alt="Visual"
                            className="main-image"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default VisionMissionSection;
