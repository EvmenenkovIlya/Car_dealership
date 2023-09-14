import './Сarousel.scss';
import React from 'react';
import background from './assets/background.png';
import carPhoto from './assets/ad-car.png';

export const Сarousel = () => {
  return (
    <div className="basic-carousel">
      <img id="back" src={background} alt="background" />
      <div className="full-ad">
        <p id="left-only">Осталось всего 10 авто!</p>
        <p id="advertisement">
          Грандиозная распродажа тестового парка!
        </p>
      </div>
      <div className="picture-with-ad">
        <img className="pic-ad" src={carPhoto} alt="carPhoto" />
      </div>
    </div>
  );
};
