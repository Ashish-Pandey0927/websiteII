import React from "react";
import "./VisionMissionSection.css";
import visionmissionimage from '../../assets/visionmissionimage.png';
import vision from '../../assets/vision.svg';
import mission from '../../assets/mission.svg';


const VisionMissionSection = () => {
    return (
        <section className="vision-mission-container">
            {/* Background */}
            <div className="background-layer" />

            <div className="vision-mission-inner">
                {/* Text Content (Vision + Mission) */}
                <div className="vision-mission-content">

                    <div className="info-box">
                        <div className="icon-container">
                            <div className="icon-bg" />
                            <img src={vision} alt="Vision Icon" className="icon" />
                        </div>
                        <h2 className="section-title">Our Vision</h2>
                        <p className="section-text">
                            We code your apps, websites, and platforms with purpose and precision—
                            making your vision a reality with cutting-edge technology and design.
                        </p>
                    </div>

                    <div className="info-box">
                        <div className="icon-container">
                            <div className="icon-bg" />
                            <img src={mission} alt="Mission Icon" className="icon" />
                        </div>
                        <h2 className="section-title">Our Mission</h2>
                        <p className="section-text">
                            We code your apps, websites, and platforms with precision and creativity—
                            delivering scalable solutions that empower your business.
                        </p>
                    </div>
                </div>

                {/* Image Side */}
                <div className="image-container">
                    <img
                        src={visionmissionimage}
                        alt="Visual"
                        className="main-image"
                    />
                </div>
            </div>
        </section>
    );
};

export default VisionMissionSection;
