import React, { useEffect, useState } from "react";
import './BackgroundSelector.css';

const BackgroundSelector = ({ backgrounds, currentBg, onChange }) => {
  const [buttonsVisible, setButtonsVisible] = useState([]);

  useEffect(() => {
    backgrounds.forEach((_, index) => {
      setTimeout(() => {
        setButtonsVisible(prev => [...prev, index]);
      }, 1500 + (index * 200)); // Staggered animation after main hero loads
    });
  }, [backgrounds]);

  return (
    <div className="background-selector">
      {backgrounds.map((bg, index) => {
        const isVisible = buttonsVisible.includes(index);
        return (
          <div
            key={index}
            className={`bg-button ${currentBg === bg ? 'active' : ''} ${isVisible ? 'visible' : ''}`}
            style={{
              top: ['432.42px', '432.48px', '432.55px', '432.61px'][index],
              left: ['206.16px', '246.16px', '286.16px', '326.16px'][index],
              opacity: isVisible ? (currentBg === bg ? 1 : 0.8) : 0,
              transform: isVisible ? 'scale(1) rotate(-0.1deg)' : 'scale(0.5) rotate(-0.1deg)',
              transition: `all 0.5s cubic-bezier(0.4, 0, 0.2, 1) ${index * 0.1}s`
            }}
            onClick={() => onChange(bg)}
          />
        );
      })}
    </div>
  );
};

export default BackgroundSelector;