import '../IndividualCarContainer/IndividualCarContainer.scss';
import './CarAvailable.scss';
import { Car } from './../../../src/Models/Car';
import { IndividualCarContainer } from '../IndividualCarContainer/IndividualCarContainer';
import React from 'react';
import carSpecial from './assets/car.png';

// export interface Car {
//   id: number;
//   model: string;
//   type: string;
//   photo: string;
//   profit: string;
//   gift1: string;
//   gift2: string;
//   gift3: string;
//   price: string;
//   credit: string;
//   horsePower: string;
//   gasStation: string;
//   speed: string;
//   overclocking: string;
// }

const carAvailable: Car[] = [
  {
    id: 1,
    type: 'Skoda Octavia1',
    model: '1.6 MPI MT Active',
    photo: carSpecial,
    profit: 'до 300 000 ₽',
    gift1: 'Оборудование',
    gift2: 'КАСКО',
    gift3: 'Комплект резины',
    price: 'от 1 615 000 ₽',
    credit: 'от 115 000 ₽/мес.',
    horsePower: ' 115 л.с',
    gasStation: '5.3 л/км',
    speed: '189 км/ч',
    overclocking: '10,3 c.',
  },
  {
    id: 2,
    type: 'Skoda Octavia2',
    model: '1.6 MPI MT Active',
    photo: carSpecial,
    profit: 'до 300 000 ₽',
    gift1: 'Оборудование',
    gift2: 'КАСКО',
    gift3: 'Комплект резины',
    price: 'от 1 615 000 ₽',
    credit: 'от 115 000 ₽/мес.',
    horsePower: ' 115 л.с',
    gasStation: '5.3 л/км',
    speed: '189 км/ч',
    overclocking: '10,3 c.',
  },
  {
    id: 3,
    type: 'Skoda Octavia3',
    model: '1.6 MPI MT Active',
    photo: carSpecial,
    profit: 'до 300 000 ₽',
    gift1: 'Оборудование',
    gift2: 'КАСКО',
    gift3: 'Комплект резины',
    price: 'от 1 615 000 ₽',
    credit: 'от 115 000 ₽/мес.',
    horsePower: ' 115 л.с',
    gasStation: '5.3 л/км',
    speed: '189 км/ч',
    overclocking: '10,3 c.',
  },
  {
    id: 4,
    type: 'Skoda Octavia4',
    model: '1.6 MPI MT Active',
    photo: carSpecial,
    profit: 'до 300 000 ₽',
    gift1: 'Оборудование',
    gift2: 'КАСКО',
    gift3: 'Комплект резины',
    price: 'от 1 615 000 ₽',
    credit: 'от 115 000 ₽/мес.',
    horsePower: ' 115 л.с',
    gasStation: '5.3 л/км',
    speed: '189 км/ч',
    overclocking: '10,3 c.',
  },
  {
    id: 5,
    type: 'Skoda Octavia5',
    model: '1.6 MPI MT Active',
    photo: carSpecial,
    profit: 'до 300 000 ₽',
    gift1: 'Оборудование',
    gift2: 'КАСКО',
    gift3: 'Комплект резины',
    price: 'от 1 615 000 ₽',
    credit: 'от 115 000 ₽/мес.',
    horsePower: ' 115 л.с',
    gasStation: '5.3 л/км',
    speed: '189 км/ч',
    overclocking: '10,3 c.',
  },
  {
    id: 6,
    type: 'Skoda Octavia6',
    model: '1.6 MPI MT Active',
    photo: carSpecial,
    profit: 'до 300 000 ₽',
    gift1: 'Оборудование',
    gift2: 'КАСКО',
    gift3: 'Комплект резины',
    price: 'от 1 615 000 ₽',
    credit: 'от 115 000 ₽/мес.',
    horsePower: ' 115 л.с',
    gasStation: '5.3 л/км',
    speed: '189 км/ч',
    overclocking: '10,3 c.',
  },
];

export const CarAvailable = () => {
  return (
    <div className="car-with-pts-block">
      <h3 className="header-pts">Автомобили в наличии с ПТС</h3>
      <div className="main-car-container">
        {carAvailable.map((item) => (
          <IndividualCarContainer key={`carAvailable -${item.id}`} item={item} />
        ))}
      </div>
      <button className="show">Показать еще</button>
    </div>
  );
};
