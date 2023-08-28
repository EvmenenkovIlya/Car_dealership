import './CarAvailable.scss';
import React from 'react';
import blackButton from './assets/black-button.svg';
import car from './assets/car.png';
import eclipseBlack from './assets/Ellipse-black.png';
import fonCity from './assets/fon-city.png';
import greyButton from './assets/grey-button.svg';
import layer from './assets/layer.png';
import redButton from './assets/red-button.svg';
import redHeart from './assets/red-heart.png';
import redSpace from './assets/red-space.svg';
import roundB from './assets/round-b.svg';
import whiteHeart from './assets/white-heart.png';

export const CarAvailable = () => {
  return (
    <section className="car-with-pts-block">
      <h3 className="header-pts">Автомобили в наличии с ПТС</h3>
      <div className="main-car-container">
        <div className="individual-car-container">
          <div className="top-block">
            <p>
              Skoda Octavia <br /> 1.6 MPI MT Active
            </p>
            <div className="top-pic">
              <img src={whiteHeart} alt="like" />
              <img src={layer} alt="layer" />
            </div>
          </div>
          <div id="vygoda">
            <img src={redSpace} alt="redSpace" />
            <p>
              Выгода <br /> до 300 000 ₽
            </p>
          </div>
          <div className="information-discount">
            <img src={eclipseBlack} alt="circle" />
            <div>
              <p>Оборудование</p>
              <p id="gift">в подарок</p>
            </div>
            <img src={eclipseBlack} alt="circle" />
            <div>
              <p>КАСКО</p>
              <p id="gift">в подарок</p>
            </div>
            <img src={eclipseBlack} alt="circle" />
            <div>
              <p>
                Комплект <br /> резины</p>
                <p id="gift">в подарок</p>
            </div>
          </div>
          <img id="black-button" src={blackButton} alt="blackButton" />
        </div>
        <div className="individual-car-container">
          <span>2</span>
        </div>
        <div className="individual-car-container">
          <span>2</span>
        </div>
        <div className="individual-car-container">
          <span>2</span>
        </div>
        <div className="individual-car-container">
          <span>2</span>
        </div>
        <div className="individual-car-container">
          <span>2</span>
        </div>
      </div>
    </section>
  );
};
