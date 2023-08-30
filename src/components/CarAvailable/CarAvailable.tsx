import './CarAvailable.scss';
import React from 'react';
import blackButton from './assets/black-button.svg';
import car from './assets/car.png';
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
            <p id="day-sale">Предложение дня</p>
            <p>
              Выгода <br /> до 300 000 ₽
            </p>
          </div>
          <div className="information-discount">
            <img src={present} alt="present" />
            <div>
              <p className="style">Оборудование</p>
              <p className="style gift">в подарок</p>
            </div>
            <img src={present} alt="present" />
            <div>
              <p className="style">КАСКО</p>
              <p className="style gift">в подарок</p>
            </div>
            <img src={present} alt="present" />
            <div>
              <p className="style">
                Комплект <br /> резины
              </p>
              <p className="style gift">в подарок</p>
            </div>
          </div>
          <div className="price">
            <p className="grid-a">от 1 615 000 ₽</p>
            <p className="grid-b">
              Кредит <b>от 115 000 ₽/мес.</b>
            </p>
            <img className="grid-c" src={horsePower} alt="horsePower" />
            <img className="grid-d" src={gasStation} alt="gasStation" />
            <img className="grid-e" src={speed} alt="speed" />
            <img className="grid-f" src={overclocking} alt="overclocking" />
          </div>
          <div className="pos">
            <p>115 л.с</p>
            <p>5.3 л/км</p>
            <p>189 км/ч</p>
            <p>10,3 c.</p>
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
            <p id="day-sale">Предложение дня</p>
            <p>
              Выгода <br /> до 300 000 ₽
            </p>
          </div>
          <div className="information-discount">
            <img src={present} alt="present" />
            <div>
              <p className="style">Оборудование</p>
              <p className="style gift">в подарок</p>
            </div>
            <img src={present} alt="present" />
            <div>
              <p className="style">КАСКО</p>
              <p className="style gift">в подарок</p>
            </div>
            <img src={present} alt="present" />
            <div>
              <p className="style">
                Комплект <br /> резины
              </p>
              <p className="style gift">в подарок</p>
            </div>
          </div>
          <div className="price">
            <p className="grid-a">от 1 615 000 ₽</p>
            <p className="grid-b">
              Кредит <b>от 115 000 ₽/мес.</b>
            </p>
            <img className="grid-c" src={horsePower} alt="horsePower" />
            <img className="grid-d" src={gasStation} alt="gasStation" />
            <img className="grid-e" src={speed} alt="speed" />
            <img className="grid-f" src={overclocking} alt="overclocking" />
          </div>
          <div className="pos">
            <p>115 л.с</p>
            <p>5.3 л/км</p>
            <p>189 км/ч</p>
            <p>10,3 c.</p>
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
            <p id="day-sale">Предложение дня</p>
            <p>
              Выгода <br /> до 300 000 ₽
            </p>
          </div>
          <div className="information-discount">
            <img src={present} alt="present" />
            <div>
              <p className="style">Оборудование</p>
              <p className="style gift">в подарок</p>
            </div>
            <img src={present} alt="present" />
            <div>
              <p className="style">КАСКО</p>
              <p className="style gift">в подарок</p>
            </div>
            <img src={present} alt="present" />
            <div>
              <p className="style">
                Комплект <br /> резины
              </p>
              <p className="style gift">в подарок</p>
            </div>
          </div>
          <div className="price">
            <p className="grid-a">от 1 615 000 ₽</p>
            <p className="grid-b">
              Кредит <b>от 115 000 ₽/мес.</b>
            </p>
            <img className="grid-c" src={horsePower} alt="horsePower" />
            <img className="grid-d" src={gasStation} alt="gasStation" />
            <img className="grid-e" src={speed} alt="speed" />
            <img className="grid-f" src={overclocking} alt="overclocking" />
          </div>
          <div className="pos">
            <p>115 л.с</p>
            <p>5.3 л/км</p>
            <p>189 км/ч</p>
            <p>10,3 c.</p>
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
            <p id="day-sale">Предложение дня</p>
            <p>
              Выгода <br /> до 300 000 ₽
            </p>
          </div>
          <div className="information-discount">
            <img src={present} alt="present" />
            <div>
              <p className="style">Оборудование</p>
              <p className="style gift">в подарок</p>
            </div>
            <img src={present} alt="present" />
            <div>
              <p className="style">КАСКО</p>
              <p className="style gift">в подарок</p>
            </div>
            <img src={present} alt="present" />
            <div>
              <p className="style">
                Комплект <br /> резины
              </p>
              <p className="style gift">в подарок</p>
            </div>
          </div>
          <div className="price">
            <p className="grid-a">от 1 615 000 ₽</p>
            <p className="grid-b">
              Кредит <b>от 115 000 ₽/мес.</b>
            </p>
            <img className="grid-c" src={horsePower} alt="horsePower" />
            <img className="grid-d" src={gasStation} alt="gasStation" />
            <img className="grid-e" src={speed} alt="speed" />
            <img className="grid-f" src={overclocking} alt="overclocking" />
          </div>
          <div className="pos">
            <p>115 л.с</p>
            <p>5.3 л/км</p>
            <p>189 км/ч</p>
            <p>10,3 c.</p>
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
            <p id="day-sale">Предложение дня</p>
            <p>
              Выгода <br /> до 300 000 ₽
            </p>
          </div>
          <div className="information-discount">
            <img src={present} alt="present" />
            <div>
              <p className="style">Оборудование</p>
              <p className="style gift">в подарок</p>
            </div>
            <img src={present} alt="present" />
            <div>
              <p className="style">КАСКО</p>
              <p className="style gift">в подарок</p>
            </div>
            <img src={present} alt="present" />
            <div>
              <p className="style">
                Комплект <br /> резины
              </p>
              <p className="style gift">в подарок</p>
            </div>
          </div>
          <div className="price">
            <p className="grid-a">от 1 615 000 ₽</p>
            <p className="grid-b">
              Кредит <b>от 115 000 ₽/мес.</b>
            </p>
            <img className="grid-c" src={horsePower} alt="horsePower" />
            <img className="grid-d" src={gasStation} alt="gasStation" />
            <img className="grid-e" src={speed} alt="speed" />
            <img className="grid-f" src={overclocking} alt="overclocking" />
          </div>
          <div className="pos">
            <p>115 л.с</p>
            <p>5.3 л/км</p>
            <p>189 км/ч</p>
            <p>10,3 c.</p>
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
            <p id="day-sale">Предложение дня</p>
            <p>
              Выгода <br /> до 300 000 ₽
            </p>
          </div>
          <div className="information-discount">
            <img src={present} alt="present" />
            <div>
              <p className="style">Оборудование</p>
              <p className="style gift">в подарок</p>
            </div>
            <img src={present} alt="present" />
            <div>
              <p className="style">КАСКО</p>
              <p className="style gift">в подарок</p>
            </div>
            <img src={present} alt="present" />
            <div>
              <p className="style">
                Комплект <br /> резины
              </p>
              <p className="style gift">в подарок</p>
            </div>
          </div>
          <div className="price">
            <p className="grid-a">от 1 615 000 ₽</p>
            <p className="grid-b">
              Кредит <b>от 115 000 ₽/мес.</b>
            </p>
            <img className="grid-c" src={horsePower} alt="horsePower" />
            <img className="grid-d" src={gasStation} alt="gasStation" />
            <img className="grid-e" src={speed} alt="speed" />
            <img className="grid-f" src={overclocking} alt="overclocking" />
          </div>
          <div className="pos">
            <p>115 л.с</p>
            <p>5.3 л/км</p>
            <p>189 км/ч</p>
            <p>10,3 c.</p>
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
      </div>
    </section>
  );
};
