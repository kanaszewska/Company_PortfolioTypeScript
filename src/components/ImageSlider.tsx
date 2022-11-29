import React, { useState } from "react";
import { SliderData } from "./SliderData";
import { FaArrowAltCircleRight, FaArrowAltCircleLeft } from "react-icons/fa";

function ImageSlider({ slides }: any) {
  const [current, setCurrent] = useState<number>(0);

  const length = slides.length;

  const nextSlides = (): void => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  };

  const prevSlides = (): void => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  };

  if (!Array.isArray(slides) || slides.length <= 0) {
    return null;
  }

  return (
    <div className="slider">
      <FaArrowAltCircleLeft className="left-arrow" onClick={prevSlides} />
      <FaArrowAltCircleRight className="right-arrow" onClick={nextSlides} />

      {SliderData.map((slide, index) => {
        return (
          <div
            className={index === current ? "slide active" : "slide"}
            key={index}
          >
            {index === current && <img src={slide.image} alt="home_image" />}
          </div>
        );
      })}
    </div>
  );
}

export default ImageSlider;
