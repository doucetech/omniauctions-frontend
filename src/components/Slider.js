import React from 'react';
import SliderBackground from '../Assets/Slider-background.png'; // Import your background image

const Slider = () => {
  const sliderStyle = {
    backgroundImage: `url(${SliderBackground})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    width: '100%',
    height: '500px', // Adjust height as needed
  };

  return (
    <div className="Slider-container" style={sliderStyle}>
        {/* Content of the slider */}
    </div>
  );
}

export default Slider;
