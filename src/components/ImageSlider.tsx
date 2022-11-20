import React, { useState } from 'react'
import { FaArrowAltCircleRight, FaArrowAltCircleLeft } from 'react-icons/fa'


export interface Slide {
  image: string
}

function ImageSlider(props:{slides : Slide[]} ) {
  const [current, setCurrent] = useState<number>(0)
  
  const length = props.slides.length

  const nextSlides = (): void => {
    setCurrent(current === length - 1 ? 0 : current + 1)
  }

  const prevSlides = (): void => {
    setCurrent(current === 0 ? length - 1 : current - 1)
  }

  if (!Array.isArray(props.slides) || props.slides.length <= 0) {
    return null
  }

  return (
    <div className="slider">
      <FaArrowAltCircleLeft className="left-arrow" onClick={prevSlides} />
      <FaArrowAltCircleRight className="right-arrow" onClick={nextSlides} />

      {props.slides.map((slide, index) => {
        return (
          <div
            className={index === current ? 'slide active' : 'slide'}
            key={index}
          >
            {index === current && <img src={slide.image} alt="home_image" />}
          </div>
        )
      })}
    </div>
  )
}

export default ImageSlider
