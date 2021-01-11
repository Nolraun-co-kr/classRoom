import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import SlideItem from './SlideItem';

const settings = {
  dots: true,
  infinite: true,
  arrows: false,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1
};

const SlideList = () => {
  return (
    <div className="programDetail__slide">
      <Slider {...settings}>
        {Array(5).fill('').map((_, idx) => (
          <SlideItem key={idx} />
        ))}
      </Slider>
    </div>
  );
};

export default SlideList;
