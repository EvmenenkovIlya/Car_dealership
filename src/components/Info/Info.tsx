import './Info.scss';
import React from 'react';
import background from './assets/background.svg';
import clock from './assets/clock.svg';
import location from './assets/location.svg';
import phone from './assets/phone.svg';

export const Info = () => {
  return (
    <div className="info">
      <div className="phones">
        <div className="icons">
          <img src={background} alt={background} />
          <img className="main-icon" src={phone} alt={phone} />
        </div>
        <div className="numbers">
          <div>+7 (800) 551-94-31</div>
          <div>+7 (495) 292-18-67</div>
        </div>
      </div>
      <div className="work-time">
        <div className="icons">
          <img src={background} alt={background} />
          <img className="main-icon" src={clock} alt={clock} />
        </div>
        <div>Ежедневно с 08:00 до 21:00</div>
      </div>
      <div className="location">
        <div className="icons">
          <img src={background} alt={background} />
          <img className="main-icon" src={location} alt={location} />
        </div>
        <div>Россия, Москва, 38КМ МКАД, 6Бс1</div>
      </div>
      <button className="btn">как до нас добраться</button>
    </div>
  );
};
