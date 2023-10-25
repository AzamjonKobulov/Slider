import React, { useState, useEffect } from 'react';
import './index.css';

const Slider = ({ images, slideInterval = 1000 }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleProgressBarClick = (index) => {
    setCurrentIndex(index);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, slideInterval);

    return () => clearInterval(interval);
  }, [images.length, slideInterval]);

  return (
    <div className="slider-container">
      <div
        className="slider"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {images.map((image, index) => (
          <img
            key={index}
            src={image}
            alt={`slide-${index}`}
            className="slide"
          />
        ))}
      </div>
      <div className="progress-bar">
        {images.map((_, index) => (
          <div
            key={index}
            className={`progress-bar-child ${
              index === currentIndex
                ? 'active'
                : index < currentIndex
                ? 'filled'
                : ''
            }`}
            onClick={() => handleProgressBarClick(index)}
          >
            {/* Child element that fills its parent width based on currentIndex */}
            <div className="progress-bar-fill"></div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Slider;
