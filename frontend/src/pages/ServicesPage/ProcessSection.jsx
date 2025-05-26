import React from "react";
import "./ProcessSection.css";

const steps = [
  {
    title: "Plan",
    description:
      "First, Plan the task by defining the requirements and prioritizing them based on business needs.",
  },
  {
    title: "Build & Test",
    description:
      "Next, Build & Test the update, ensuring the development is done efficiently with quick testing for quality assurance.",
  },
  {
    title: "Deploy & Review",
    description:
      "Finally, Deploy & Review the changes, releasing them to the live website and collecting feedback for any future improvements.",
  },
];

export default function ProcessSection() {
  return (
    <section className="process-section">
       <div className='process-section-header'>
      <h2 className="process-heading">Agile Process We Follow</h2>
      <p className="process-subheading">
       We work together with our client to execute impactful product.
      </p>
      </div>
      <div className="process-steps">
        {steps.map((step, index) => (
          <div key={index} className="process-step">
            <div className="step-circle">
              <div className="step-inner-circle">
                <h3 className="step-title">{step.title}</h3>
                <p className="step-description">{step.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
