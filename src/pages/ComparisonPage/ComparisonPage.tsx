import './ComparisonPage.scss';
import { ComparisonItem } from './components/ComparisonItem';
import { RadioButton } from '../../components/RadioButton/RadioButton';
import { selectComparisonItems } from './comparisonPageSlice';
import { useDispatch, useSelector } from 'react-redux';
import { useState } from 'react';

const options = [
  { value: 'NEW_CARS', label: 'Новые авто 3', id: 1 },
  { value: 'OLD_CARS', label: 'С пробегом 3', id: 2 },
  { value: 'TAXIS', label: 'Такси 3', id: 3 },
];

export const ComparisonPage = () => {
  const [selectedType, setSelectedType] = useState<String>('NEW_CARS');

  const radioHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedType(event.target.value);
  };
  const dispatch = useDispatch();
  const carsInComparison = useSelector(selectComparisonItems);
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
          {carsInComparison.map((item) =>
            selectedType === item.condition ? <ComparisonItem key={`item-${item.id}`} car={item}></ComparisonItem> : <></>,
          )}
        </div>
      </div>
    </section>
  );
};
