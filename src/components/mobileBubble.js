import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Bubble from './Bubble.js';
import iyal from "./iyal_img.png";
import isai from "./isai_img.png";
import nadanam from "./nadanam_img.png";
import naadagam from "./naadagam_img.png";
import chithiram from "./chithiram_img.png";

const MobileBubble = () => {
  const responsive = {
    desktop: { breakpoint: { max: 3000, min: 1024 }, items: 3 },
    tablet: { breakpoint: { max: 1024, min: 464 }, items: 2 },
    mobile: { breakpoint: { max: 464, min: 0 }, items: 1 }
  };

  return (
    <Carousel
      swipeable
      draggable
      showDots={true} // Ensure this is enabled
      responsive={responsive}
      infinite={true} // Optional: Turn off infinite scroll
      autoPlay
      autoPlaySpeed={3000}
      keyBoardControl
      customTransition="transform 1s ease"
      transitionDuration={1000}
      containerClass="carousel-container"
      dotListClass="custom-dot-list-style" // Use this class in your CSS
      itemClass="carousel-item-padding-40-px"
    >
      <Bubble no="1" img={iyal} link="/event/iyal" />
      <Bubble no="2" img={isai} link="/event/isai" />
      <Bubble no="3" img={nadanam} link="/event/nadanam" />
      <Bubble no="4" img={naadagam} link="/event/naadagam" />
      <Bubble no="5" img={chithiram} link="/event/chithiram" />
    </Carousel>
  );
};

export default MobileBubble;
