import React from 'react';
import ImageSlider from './ImageSlider';
import { SliderData } from './SliderData';
import '../styles/Portfolio.css';


function Portfolio() {
    return (
        <div className='portfolio' id='portfolio'>
            <div className='container'>
                <h2>Portfolio</h2>
                    <ImageSlider slides = {SliderData}/>
            </div>
        </div>
        
    )
}

export default Portfolio;