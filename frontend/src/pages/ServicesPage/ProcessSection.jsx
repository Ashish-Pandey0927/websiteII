import React, { useState, useEffect } from "react";
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
  const [isVisible, setIsVisible] = useState(false);
  const [stepsVisible, setStepsVisible] = useState([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          steps.forEach((_, index) => {
            setTimeout(() => {
              setStepsVisible(prev => [...prev, index]);
            }, 300 + (index * 400));
          });
        }
      },
      { threshold: 0.3 }
    );

    const element = document.querySelector('.process-section');
    if (element) observer.observe(element);

    return () => {
      if (element) observer.unobserve(element);
    };
  }, []);

  return (
    <section className={`process-section ${isVisible ? 'visible' : ''}`}>
      <div className='process-section-header'>
        <h2 className="process-heading">Agile Process We Follow</h2>
        <p className="process-subheading">
          We work together with our client to execute impactful product.
        </p>
      </div>
      <div className="process-steps">
        {steps.map((step, index) => {
          const isStepVisible = stepsVisible.includes(index);
          return (
            <div
              key={index}
              className={`process-step ${isStepVisible ? 'visible' : ''}`}
              style={{
                opacity: isStepVisible ? 1 : 0,
                transform: isStepVisible ? 'translateY(0) scale(1)' : 'translateY(50px) scale(0.9)',
                transition: `all 0.8s cubic-bezier(0.4, 0, 0.2, 1) ${index * 0.2}s`
              }}
            >
              <div className="step-circle">
                <div className="step-inner-circle">
                  <h3 className="step-title">{step.title}</h3>
                  <p className="step-description">{step.description}</p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
