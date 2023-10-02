import './ComparisonItem.scss';
import { Car } from '../../../models/car';
import { ReactComponent as Cross } from '../../../components/assets/cross.svg';
import { ReactComponent as Heart } from '../../../components/assets/comparisonHeart.svg';
import { RootState } from '../../../store/store';
import { checkInFavorites, toggleToFavorites } from '../../FavoritesPage/favoritesPageSlice';
import { toggleToComparison } from '../comparisonPageSlice';
import { useDispatch, useSelector } from 'react-redux';
import React from 'react';
import useWindowDimensions from '../../../hooks/useWindowDimensions';

interface ComparisonItemProps {
  car: Car;
}

export const ComparisonItem = (props: ComparisonItemProps) => {
  const { height, width } = useWindowDimensions();
  let isComputer = width > 850;
  const dispatch = useDispatch();
  const inFavorites = useSelector((state: RootState) => checkInFavorites(state, props.car.id));
  return (
    <div className="comparison-item">
      <div className="main-info">
        <div className="info-header">
          <h2>{props.car.type}</h2>
          <div className="top-pic">
            <button onClick={() => dispatch(toggleToFavorites(props.car))}>
              <Heart className={inFavorites ? 'in-favorites' : ''} />
            </button>
            <button onClick={() => dispatch(toggleToComparison(props.car))}>
              <Cross />
            </button>
          </div>
        </div>
        <img src={props.car.photo} alt="" className="car-img" />
      </div>

      <p className="car-info">
        <span className="label">Стоимость</span>
        {props.car.price}
      </p>
      <p className="car-info">
        <span className="label">Стоимость со скидкой</span>
        {props.car.credit}
      </p>
      <p className="car-info">
        <span className="label">Состояние</span>
        {props.car.condition === 'NEW_CARS' ? 'Новые авто' : props.car.condition === 'OLD_CARS' ? 'С пробегом' : 'Такси'}
      </p>
      <p className="car-info">
        <span className="label">Регион</span>
        {props.car.speed}
      </p>
      <p className="car-info">
        <span className="label">Марка</span>
        {props.car.type}
      </p>
      <p className="car-info">
        <span className="label">Модель</span>
        {props.car.model}
      </p>
      <p className="car-info">
        <span className="label">Модификация</span>
        {props.car.model}
      </p>
      {isComputer ? <p className="car-info">1</p> : <></>}
      {isComputer ? <p className="car-info">1</p> : <></>}
      {isComputer ? <p className="car-info">1</p> : <></>}
      {isComputer ? <p className="car-info">1</p> : <></>}
      {isComputer ? <p className="car-info">1</p> : <></>}
    </div>
  );
};
