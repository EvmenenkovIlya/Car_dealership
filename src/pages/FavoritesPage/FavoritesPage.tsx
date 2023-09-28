import './FavoritesPage.scss';
import { LoginPage } from '../LoginPage/LoginPage';
import { RadioButtonContainer } from '../../components/RadioButton/RadioButtonContainer';
import { carAvailable } from '../../components/CarAvailable/CarAvailable';
import { clearFavorites, selectFavoritesItems, selectFavoritesItemsCount, toggleToFavorites } from './favoritesPageSlice';
import { isAuthenticated } from '../LoginPage/currentUserSlice';
import { useDispatch, useSelector } from 'react-redux';
import React, { useState } from 'react';

export const FavoritesPage = () => {
  const isAuth = useSelector(isAuthenticated);
  const carsList = useSelector(selectFavoritesItems);
  const count = useSelector(selectFavoritesItemsCount);
  const dispatch = useDispatch();
  const [showModal, setShowModal] = useState(true);

  const toggleModal = () => {
    setShowModal(!showModal);
  };
  const [selectedType, setSelectedType] = useState<string>('NEW_CARS');

  return (
    <>
      {showModal && !isAuth && <LoginPage onClose={toggleModal} />}
      <section id="favorites" className={!isAuth ? 'modal' : ''}>
        <div className="route">Главная {'>'} Избранное</div>
        <div className="header-part">
          <div className="controls">
            <h1>Избранное</h1>
            <RadioButtonContainer onSelectedChange={setSelectedType} />
          </div>
          <p>
            В избранном <strong>{count} авто</strong>
          </p>
        </div>
        <div className="horizontal-line"></div>
        <p>{selectedType}</p>
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
        </div>
      </section>
    </>
  );
};
