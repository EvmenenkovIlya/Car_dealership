import { Car, items } from '../../models/car';
import { clearFavorites, selectFavoritesItems, selectFavoritesItemsCount, toggleToFavorites } from './favoritesPageSlice';
import { useDispatch, useSelector } from 'react-redux';
import React from 'react';

export const FavoritesPage = () => {
  const carsList = useSelector(selectFavoritesItems);
  const dispatch = useDispatch();
  const count = useSelector(selectFavoritesItemsCount);
  return (
    <div>
      FavoritesPage
      {items.map((item) => (
        <div key={`item-${item.id}`}>
          <div>{item.name}</div>
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
    </div>
  );
};
