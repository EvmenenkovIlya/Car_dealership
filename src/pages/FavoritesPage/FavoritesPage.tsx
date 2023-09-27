//import { Car } from '../../models/car';
import { carAvailable } from '../../components/CarAvailable/CarAvailable';
import { clearFavorites, selectFavoritesItems, selectFavoritesItemsCount, toggleToFavorites } from './favoritesPageSlice';
import { useDispatch, useSelector } from 'react-redux';
import React from 'react';

export const FavoritesPage = () => {
  const carsList = useSelector(selectFavoritesItems);
  const dispatch = useDispatch();
  const count = useSelector(selectFavoritesItemsCount);
  return (
    <section id="favorites">
      <div className="route">Главная {'>'} Избранное</div>
      <div className="controls">
        <h1>Избранное</h1>
      </div>
      FavoritesPage
      {carAvailable.map((item) => (
        <div key={`item-${item.id}`}>
          <div>{item.type}</div>
          <div>{item.price}</div>
          <button onClick={() => dispatch(toggleToFavorites(item))}>Add/remove</button>
        </div>
      ))}
      <button onClick={() => dispatch(clearFavorites())}>Clear all</button>
      <div id="cars">
        {carsList.map((item) => (
          <div key={`item-${item.id}`}>Car №{item.id}</div>
        ))}
        <div>Count {count}</div>
      </div>
    </section>
  );
};
