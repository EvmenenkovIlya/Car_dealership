import './Header.scss';
import { Button } from '../Button/Button';
import { Dropdown } from '../Dropdown/Dropdown';
import { HeaderInfoLink } from './components/HeaderInfoLink/HeaderInfoLink';
import { NavigationLink } from '../NavigationLink/NavigationLink';
import { catalogLinks } from './catalogLinks';
import burgerMenu from './assets/burgerMenu.svg';
import filters from './assets/filtres.svg';
import heart from './assets/heart.svg';
import logo from './assets/logo.svg';
import map from './assets/map.svg';
import search from './assets/search.svg';
import time from './assets/time.svg';
import whatsapp from './assets/whatsapp.svg';

export const Header = () => {
  const showMenu = () => {
    let el = document.querySelector('nav');
    el?.classList.toggle('unvisible');
  };

  return (
    <header>
      <div id="header-info" className="computer-only">
        <HeaderInfoLink url="/map" src={map} text="Россия, Москва, 38КМ МКАД, 6Бс1" />
        <HeaderInfoLink url="/worktime" src={time} text="Время работы: c 08:00 до 21:00" />
        <HeaderInfoLink url="/whatsapp" src={whatsapp} text="Whatsapp" />
      </div>
      <div id="main-header">
        <div id="navigation">
          <button className="icon-btn" onClick={showMenu}>
            <img src={burgerMenu} alt="menu" />
          </button>
          <a href="/">
            <img src={logo} alt="logo" />
          </a>

          <nav className="unvisible">
            <NavigationLink name={'Подбор Авто'} url={'catalog'} />
            <NavigationLink name={'О компании'} url={'about'} />
            <NavigationLink name={'Техцентр'} url={'techcenter'} />
            <NavigationLink name={'Отзывы'} url={'reviews'} />
            <NavigationLink name={'Контакты'} url={'contacts'} />
          </nav>
          <Button text="Обратный звонок" />
        </div>
        <div id="header-dropdowns">
          {catalogLinks.map((item) => (
            <Dropdown name={item.name} options={item.options} />
          ))}
          <div id="header-icons">
            <img src={heart} alt="" />
            <img src={filters} alt="" />
            <img src={search} alt="" />
          </div>
        </div>
      </div>
    </header>
  );
};
