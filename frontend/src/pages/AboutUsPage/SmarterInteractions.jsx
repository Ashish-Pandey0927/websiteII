import React from "react";
import "./SmarterInteractions.css";

const SmarterInteractions = () => {
    return (
        <section className="smarter-container">
            <div className="headline-subtext">
                <div className="headline">
                    Your path to smarter interactions
                </div>

                <div className="subtext">
                    From the moment you sign in, we guide you through every step, helping you harness the potential of real-time, human-like AI communication
                </div>

            </div>

            <div className="background-image" />

            <div className="play-button-group">
                <div className="ellipse" />
                <div className="play-bg" />
                <div className="play-icon" />
            </div>

            <div className="start-trial-button">
                <span className="button-text">Start free trial</span>
            </div>
        </section>
    );
};

export default SmarterInteractions;
