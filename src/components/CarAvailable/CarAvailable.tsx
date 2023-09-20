import '../IndividualCarContainer/IndividualCarContainer.scss';
import './CarAvailable.scss';
import { CarPts } from './../../../src/Models/carPts';
import { IndividualCarContainer } from '../IndividualCarContainer/IndividualCarContainer';
import React from 'react';
import carSpecial from './assets/car.png';

const carAvailable: CarPts[] = [
  {
    id: 1,
    type: 'Skoda Octavia1',
    model: '1.6 MPI MT Active',
    photo: carSpecial,
    profit: 'до 300 000 ₽',
    gifts: ['Оборудование', 'КАСКО', 'Комплект резины'],
    price: 'от 1 615 000 ₽',
    credit: 'от 115 000 ₽/мес.',
    horsePower: ' 115',
    gasStation: '5.3',
    speed: '189',
    overclocking: '10,3',
  },
  {
    id: 2,
    type: 'Skoda Octavia2',
    model: '1.6 MPI MT Active',
    photo: carSpecial,
    profit: 'до 300 000 ₽',
    gifts: ['Оборудование', 'КАСКО', 'Комплект резины'],
    price: 'от 1 615 000 ₽',
    credit: 'от 125 000 ₽/мес.',
    horsePower: ' 115',
    gasStation: '5.3',
    speed: '189',
    overclocking: '10,3',
  },
  {
    id: 3,
    type: 'Skoda Octavia3',
    model: '1.6 MPI MT Active',
    photo: carSpecial,
    profit: 'до 300 000 ₽',
    gifts: ['Оборудование', 'КАСКО', 'Комплект резины'],
    price: 'от 1 620 000 ₽',
    credit: 'от 115 000 ₽/мес.',
    horsePower: ' 115',
    gasStation: '5.3',
    speed: '189',
    overclocking: '10,3',
  },
  {
    id: 4,
    type: 'Skoda Octavia4',
    model: '1.6 MPI MT Active',
    photo: carSpecial,
    profit: 'до 300 000 ₽',
    gifts: ['Оборудование', 'КАСКО', 'Комплект резины'],
    price: 'от 1 615 000 ₽',
    credit: 'от 115 000 ₽/мес.',
    horsePower: ' 115',
    gasStation: '5.3',
    speed: '189',
    overclocking: '10,3',
  },
  {
    id: 5,
    type: 'Skoda Octavia5',
    model: '1.6 MPI MT Active',
    photo: carSpecial,
    profit: 'до 300 000 ₽',
    gifts: ['Оборудование', 'КАСКО', 'Комплект резины'],
    price: 'от 1 615 000 ₽',
    credit: 'от 115 000 ₽/мес.',
    horsePower: ' 115',
    gasStation: '5.3',
    speed: '189',
    overclocking: '10,3',
  },
  {
    id: 6,
    type: 'Skoda Octavia6',
    model: '1.6 MPI MT Active',
    photo: carSpecial,
    profit: 'до 300 000 ₽',
    gifts: ['Оборудование', 'КАСКО', 'Комплект резины'],
    price: 'от 1 615 000 ₽',
    credit: 'от 115 000 ₽/мес.',
    horsePower: ' 115',
    gasStation: '5.3',
    speed: '189',
    overclocking: '10,3',
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
