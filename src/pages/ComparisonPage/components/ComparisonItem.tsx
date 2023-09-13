import './ComparisonItem.scss';
import { Car } from '../../../models/car';
import React from 'react';

interface ComparisonItemProps {
  car: Car;
}

export const ComparisonItem = (props: ComparisonItemProps) => {
  return (
    <div className="comparison-item">
      <div className="main-info">
        <h2>{props.car.name}</h2>
        <img src="" alt="" className="car-img" />
      </div>
      <p className="car-info">123</p>
      <p className="car-info">123</p>
      <p className="car-info">123</p>
      <p className="car-info">123</p>
      <p className="car-info">123</p>
      <p className="car-info">123</p>
      <p className="car-info">123</p>
      <p className="car-info">123</p>
      <p className="car-info">13</p>
      <p className="car-info">123</p>
      <p className="car-info">123</p>
      <p className="car-info">123</p>
    </div>
  );
};
