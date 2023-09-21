import { Car } from '../../models/car';
import { clearFavorites, selectFavoritesItems, selectFavoritesItemsCount, toggleToFavorites } from './favoritesPageSlice';
import { useDispatch, useSelector } from 'react-redux';
import React from 'react';

const items: Car[] = [
  {
    id: 1,
    name: 'First car',
    price: 100,
    date: '15-07',
    image: '',
    inFavorites: false,
    inComparison: false,
  },
  {
    id: 2,
    name: 'Second car',
    price: 200,
    date: '16-07',
    image: '',
    inFavorites: false,
    inComparison: false,
  },
];

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
