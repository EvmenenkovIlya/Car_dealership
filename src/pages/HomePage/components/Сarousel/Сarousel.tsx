import './Carousel.scss';
import React from 'react';
import background from './components/background.jpg';

export const Сarousel = () => {
  return (
    <div className="basic-carousel">
      <img src={background} alt="background" />
    </div>
  );
};
