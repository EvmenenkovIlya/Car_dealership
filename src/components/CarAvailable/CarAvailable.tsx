import './CarAvailable.scss';
import React from 'react';
import blackButton from './assets/black-button.svg';
import car from './assets/car.png';
import fonCity from './assets/fon-city.png';
import greyButton from './assets/grey-button.svg';
import layer from './assets/layer.png';
import present from './assets/present.svg';
import redButton from './assets/red-button.svg';
import redHeart from './assets/red-heart.png';
import redSpace from './assets/red-space.svg';
import horsePower from './assets/horse-power.png';
import gasStation from './assets/gas-station.png';
import speed from './assets/speed.png';
import overclocking from './assets/overclocking.png';
import whiteHeart from './assets/white-heart.png';

export const CarAvailable = () => {
  return (
    <section className="car-with-pts-block">
      <h3 className="header-pts">Автомобили в наличии с ПТС</h3>
      <div className="main-car-container">
        <div className="individual-car-container">
          <div className="top-block">
            <img id="fon" src={fonCity} alt="fon" />
            <img id="car" src={car} alt="car" />
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
            <img src={present} alt="present" />
            <div>
              <p>Оборудование</p>
              <p id="gift">в подарок</p>
            </div>
            <img src={present} alt="present" />
            <div>
              <p>КАСКО</p>
              <p id="gift">в подарок</p>
            </div>
            <img src={present} alt="present" />
            <div>
              <p>
                Комплект <br /> резины
              </p>
              <p id="gift">в подарок</p>
            </div>
          </div>
          <div className="price">
            <p className="grid-a">от 1 615 000 ₽</p>
            <p className="grid-b">Кредит <b>от 115 000 ₽/мес.</b></p>
            <img className="grid-c" src={horsePower} alt="horsePower" />
            <img className="grid-d" src={gasStation} alt="gasStation" />
            <img className="grid-e" src={speed} alt="speed" />
            <img className="grid-f" src={overclocking} alt="overclocking" />
          </div>
          {/* <img id="black-button" src={blackButton} alt="blackButton" /> */}
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
