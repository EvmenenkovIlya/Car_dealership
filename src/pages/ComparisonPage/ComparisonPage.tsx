import './ComparisonPage.scss';
import { ComparisonItem } from './components/ComparisonItem';
import { RadioButton } from '../../components/RadioButton/RadioButton';
import { items } from '../../models/car';
import { useState } from 'react';

const options = [
  { value: 'NEW_CARS', label: 'Новые авто 3', id: 1 },
  { value: 'OLD_CARS', label: 'С пробегом 3', id: 2 },
  { value: 'TAXIS', label: 'Такси 3', id: 3 },
];

export const ComparisonPage = () => {
  const [selectedType, setSelectedType] = useState<String>();

  // This function will be triggered when a radio button is selected
  const radioHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedType(event.target.value);
  };
  //const isChecked = (value: string) => selectedType === value;
  // сделать route позже отдельным компонентом breadcrumbs
  return (
    <section id="comparison">
      <div className="route">Главная {'>'} Сравнение</div>
      <div className="controls">
        <h1>Сравнение</h1>
        <div className="radiobutton-container">
          {options.map((item) => (
            <RadioButton
              name="car-type"
              value={item.value}
              id={'type-' + item.id}
              onChange={radioHandler}
              checked={selectedType === item.value}
              label={item.label}
              key={'key-' + item.id}
            />
          ))}
        </div>
      </div>
      <p>
        You have selected the <strong>{selectedType}</strong> car{' '}
      </p>
      <div className="horizontal-line"></div>
      <div className="comparison-table">
        <div className="comparison-legend">
          <div className="comparison-legend-item">
            <p>Автомобили</p>
            <button>Показать различия</button>
          </div>
          <p className="comparison-legend-item">Стоимость</p>
          <p className="comparison-legend-item">Стоимость со скидкой</p>
          <p className="comparison-legend-item">Состояние</p>
          <p className="comparison-legend-item">Регион</p>
          <p className="comparison-legend-item">Марка</p>
          <p className="comparison-legend-item">Модель</p>
          <p className="comparison-legend-item">Модификация</p>
          <p className="comparison-legend-item">Тип двигателя</p>
          <p className="comparison-legend-item">КПП</p>
          <p className="comparison-legend-item">Тип кузова</p>
          <p className="comparison-legend-item">Кол-во дверей</p>
          <p className="comparison-legend-item">Кол-во дверей</p>
        </div>
        <div className="comparison-items-container">
          {items.map((item) => (
            <ComparisonItem key={`item-${item.id}`} car={item}></ComparisonItem>
          ))}
        </div>
      </div>
    </section>
  );
};
