import './IndividualCarContainer.scss';
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

interface IndividualCarContainerProps {
  model: string;
  type: string;
  photo: string;
  profit: string;
  gift1: string;
  gift2: string;
  gift3: string;
  price: string;
  credit: string;
  horsePower: string;
  gasStation: string;
  speed: string;
  overclocking: string;
}

export const IndividualCarContainer = (props: IndividualCarContainerProps) => {
  return (
    <div className="individual-car-container">
      <div className="top-block">
        <img id="fon" src={fonCity} alt="fon" />
        <img id="car" src={props.photo} alt="carSpecial" />
        <div className='name'>
          Skoda Octavia <p className='name'>{props.model}</p>
        </div>
        <div className="top-pic">
          <img src={whiteHeart} alt="like" />
          <img src={layer} alt="layer" />
        </div>
      </div>
      <div id="vygoda">
        <img src={redSpace} alt="redSpace" />
        <p id="day-sale">Предложение дня</p>
        <div>
          <p>Выгода</p>
          <p>{props.profit}</p>
        </div>
      </div>
      <div className="information-discount">
        <img src={present} alt="present" />
        <div className="style">
          {props.gift1}
          <p className="style gift">в подарок</p>
        </div>
        <img src={present} alt="present" />
        <div className="style">
          {props.gift2}
          <p className="style gift">в подарок</p>
        </div>
        <img src={present} alt="present" />
        <div className="style">
          {props.gift3}
          <p className="style gift">в подарок</p>
        </div>
      </div>
      <div className="price">
        <p className="grid-a">{props.price}</p>
        <p className="grid-b">
          Кредит <b>{props.credit}</b>
        </p>
        <img className="grid-c" src={horsePower} alt="horsePower" />
        <img className="grid-d" src={gasStation} alt="gasStation" />
        <img className="grid-e" src={speed} alt="speed" />
        <img className="grid-f" src={overclocking} alt="overclocking" />
      </div>
      <div className="pos">
        <p>{props.horsePower}</p>
        <p>{props.gasStation}</p>
        <p>{props.speed}</p>
        <p>{props.overclocking}</p>
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
