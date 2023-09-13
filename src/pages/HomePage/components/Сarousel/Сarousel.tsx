import './Сarousel.scss';
import React from 'react';
import background from './components/background.png';

export const Сarousel = () => {
  return (
    <div className="basic-carousel">
      <img id="back" src={background} alt="background" />
      <div className='full-ad'>
      <p id="advertisement">Грандиозная распродажа <br/>тестового парка!</p>

      </div>
    </div>
  );
};
