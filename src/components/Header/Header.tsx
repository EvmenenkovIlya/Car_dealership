import './Header.scss';
import { Button } from '../Button/Button';
import { Dropdown } from '../Dropdown/Dropdown';
import { HeaderIcon } from './components/HeaderIcon/HeaderIcon';
import { HeaderInfoLink } from './components/HeaderInfoLink/HeaderInfoLink';
import { NavigationLink } from '../NavigationLink/NavigationLink';
import { catalogLinks } from './catalogLinks';
import { selectFavoritesItemsCount } from '../../pages/FavoritesPage/favoritesPageSlice';
import { useSelector } from 'react-redux';
import burgerMenu from './assets/burgerMenu.svg';
import call from './assets/redCallIcon.svg';
import comparison from './assets/comparison.svg';
import heart from './assets/heart.svg';
import logo from './assets/logo.svg';
import map from './assets/map.svg';
import redPhone from './assets/redPhone.svg';
import search from './assets/search.svg';
import time from './assets/time.svg';
import useWindowDimensions from '../../hooks/useWindowDimensions';
import whatsapp from './assets/whatsapp.svg';

export const Header = () => {
  const { height, width } = useWindowDimensions();
  let isComputer = width > 850;
  const favoritesCount = useSelector(selectFavoritesItemsCount);
  return (
    <header>
      <div id="header-info">
        {isComputer ? (
          <>
            <HeaderInfoLink url="/map" src={map} text="Россия, Москва, 38КМ МКАД, 6Бс1" />
            <HeaderInfoLink url="/worktime" src={time} text="Время работы: c 08:00 до 21:00" />
            <HeaderInfoLink url="/whatsapp" src={whatsapp} text="Whatsapp" />
          </>
        ) : (
          <>
            <a href="tel:+7 (800) 551-94-31" className="phone">
              +7 (800) 551-94-31
            </a>
            <button className="callback">
              <img src={redPhone} alt=""></img>Обратный звонок
            </button>
          </>
        )}
      </div>
      <div id="main-header">
        <div id="navigation">
          <button className="icon-btn">
            <img src={burgerMenu} alt="menu" id="menu" />
          </button>
          <a href="/">
            <img src={logo} alt="logo" id="logo" />
          </a>
          {isComputer ? (
            <>
              <div id="header-vertical-line"></div>
              <p id="slogan">
                <span className="accent"> 10 лет </span>превосходим
                <br />
                ваши ожидания
              </p>
              <nav className="unvisible">
                <NavigationLink name={'Подбор Авто'} url={'catalog'} />
                <NavigationLink name={'О компании'} url={'about'} />
                <NavigationLink name={'Техцентр'} url={'techcenter'} />
                <NavigationLink name={'Отзывы'} url={'reviews'} />
                <NavigationLink name={'Контакты'} url={'contacts'} />
              </nav>
              <div id="phones">
                <a href="tel:+7 (800) 551-94-31" className="main-phone">
                  <img src={call} alt="" className="tel-icon" />
                  +7 (800) 551-94-31
                </a>
                <a href="tel:+7 (495) 292-18-67" className="secondary-phone">
                  +7 (495) 292-18-67
                </a>
              </div>
              <Button text="Обратный звонок" />
            </>
          ) : null}
        </div>
        <div id="header-dropdowns">
          {isComputer ? (
            <>
              {catalogLinks.map((item) => (
                <Dropdown name={item.name} options={item.options} key={item.name} />
              ))}
            </>
          ) : null}
          <div id="header-icons">
            <HeaderIcon url="/favorites" src={heart} count={favoritesCount} />
            <HeaderIcon url="/comparison" src={comparison} />
            <HeaderIcon url="/search" src={search} />
          </div>
        </div>
      </div>
    </header>
  );
};
