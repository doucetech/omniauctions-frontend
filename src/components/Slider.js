import React from 'react'
import SliderTabs from './SliderTabs'

const Slider = () => {
    const sliderStyle = {
        backgroundImage: 'url(images/Slider-background.png)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        width: '100%',
        height: '667px',
    }

    return (
        <div className="Slider-container" style={sliderStyle}>
            {<SliderTabs />}
        </div>
    )
}

export default Slider
