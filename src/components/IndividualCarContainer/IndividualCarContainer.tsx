import './IndividualCarContainer.scss';
import { CarPts } from './../../../src/Models/carPts';
import { string } from 'prop-types';
import React from 'react';
import blackButton from './assets/black-button.svg';
import fonCity from './assets/fon-city.png';
import gasStation from './assets/gas-station.png';
import greyButton from './assets/grey-button.svg';
import horsePower from './assets/horse-power.png';
import layer from './assets/layer.png';
import overclocking from './assets/overclocking.png';
import present from './assets/present.svg';
import redButton from './assets/red-button.svg';
import redHeart from './assets/red-heart.png';
import redSpace from './assets/red-space.svg';
import speed from './assets/speed.png';
import whiteHeart from './assets/white-heart.png';

interface IndividualCarItem {
  item: CarPts;
}
export const IndividualCarContainer = (car: IndividualCarItem) => {
  const myArray: string[] = car.item.gifts;
  return (
    <div className="individual-car-container">
      <div className="top-block">
        <img id="background" src={fonCity} alt="background" />
        <img id="car" src={car.item.photo} alt="carSpecial" />
        <div className="name">
          {car.item.type} <p className="name">{car.item.model}</p>
        </div>
        <div className="top-pic">
          <img src={whiteHeart} alt="like" />
          <img src={layer} alt="layer" />
        </div>
      </div>
      <div id="benefit">
        <img src={redSpace} alt="redSpace" />
        <p id="day-sale">Предложение дня</p>
        <div>
          <p>Выгода</p>
          <p>{car.item.profit}</p>
        </div>
      </div>

      <div className="information-discount">
        {myArray.map((element: string, index: number) => (
          <>
            <img src={present} alt="present" />
            <div key={index} className="style">
              {element}
              <p className="style gift">в подарок</p>
            </div>
          </>
        ))}
      </div>
      <div className="price">
        <p className="grid-a">{car.item.price}</p>
        <p className="grid-b">
          Кредит <b>{car.item.credit}</b>
        </p>
        <img className="grid-c" src={horsePower} alt="horsePower" />
        <img className="grid-d" src={gasStation} alt="gasStation" />
        <img className="grid-e" src={speed} alt="speed" />
        <img className="grid-f" src={overclocking} alt="overclocking" />
      </div>
      <div className="pos">
        <p>{car.item.horsePower} л.с</p>
        <p>{car.item.gasStation} л/км</p>
        <p>{car.item.speed} км/ч</p>
        <p>{car.item.overclocking} c.</p>
      </div>
      <div className="buttons">
        <img className="red-b" src={redButton} alt="redButton" />
        <img className="black-b" src={blackButton} alt="blackButton" />
        <img className="grey-b" src={greyButton} alt="greyButton" />
        <div className="button-text">
          <button>Резерв онлайн</button>
          <button>Купить</button>
          <button>Подробнее</button>
        </div>
      </div>
    </div>
  );
};
