import React, { useState, useEffect } from 'react';
import './index.css';

const images = [
  'https://images.pexels.com/photos/327434/pexels-photo-327434.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
  'https://images.pexels.com/photos/533854/pexels-photo-533854.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
  'https://images.pexels.com/photos/389724/pexels-photo-389724.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
  'https://images.pexels.com/photos/433524/pexels-photo-433524.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
];

const slideInterval = 3000; // Interval between slides in milliseconds (3 seconds)

const App = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, slideInterval);

    return () => clearInterval(interval); // Clean up interval on component unmount
  }, []);

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
                : index <= currentIndex
                ? 'active'
                : ''
            }`}
          >
            {/* Child element that fills its parent width based on currentIndex */}
            <div className="progress-bar-fill"></div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default App;
