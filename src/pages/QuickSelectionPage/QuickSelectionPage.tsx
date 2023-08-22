import '../../components/Button/Button.scss';
import './QuickSelectionPage.scss';
import { Brand } from './components/Brand/Brand';
import { Slider } from '../../components/Header/components/Slider/Slider';
import { carBodyTypes } from './CarBodyTypes';
import { models } from './Models';
import { transmissionTypes } from './TransmissionTypes';
import Dropdown from '../../components/Dropdown/Dropdown';
import React from 'react';

export const QuickSelectionPage = () => {
  return (
    <div className="quick-selection-block">
      <div className="car-quick-selection">
        <div className="brand-list">
          {models.map((item) => (
            <Brand name={item.name} icon={item.icon} />
          ))}
        </div>
        <div className="selection">
          <div className="selection-header">Быстрый подбор авто</div>
          <Slider maxValue={500} />
          <div className="dropdown-list">
            {carBodyTypes.map((item) => (
              <Dropdown name={item.name} options={item.options} />
            ))}
            {transmissionTypes.map((item) => (
              <Dropdown name={item.name} options={item.options} />
            ))}
          </div>
          <button className="btn">Показать 73</button>
        </div>
      </div>
    </div>
  );
};
