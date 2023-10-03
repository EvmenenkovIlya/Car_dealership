import './ComparisonPage.scss';
import { ComparisonItem } from './components/ComparisonItem';
import { Flipper } from '../../components/Flipper/Flipper';
import { RadioButtonContainer } from '../../components/RadioButton/RadioButtonContainer';
import { isAuthenticated } from '../LoginPage/currentUserSlice';
import { options } from '../../components/RadioButton/options';
import { selectComparisonItems } from './comparisonPageSlice';
import { useSelector } from 'react-redux';
import { useState } from 'react';
import useWindowDimensions from '../../hooks/useWindowDimensions';

export const ComparisonPage = () => {
  const [selectedType, setSelectedType] = useState<string>('NEW_CARS');
  const carsInComparison = useSelector(selectComparisonItems);
  const selectedCars = carsInComparison.filter((car) => car.condition === selectedType);
  const isAuth = useSelector(isAuthenticated);
  const { height, width } = useWindowDimensions();
  let isComputer = width > 850;
  // сделать route позже отдельным компонентом breadcrumbs
  return (
    <section id="comparison" className={!isAuth ? 'blur-section' : ''}>
      {isComputer ? <div className="route">Главная {'>'} Сравнение</div> : <></>}
      <div className="controls">
        <h1>Сравнение</h1>
        {isComputer ? <RadioButtonContainer onSelectedChange={setSelectedType} cars={carsInComparison} options={options} /> : <></>}
      </div>
      <div className="horizontal-line"></div>
      {!isComputer ? <RadioButtonContainer onSelectedChange={setSelectedType} cars={carsInComparison} options={options} /> : <></>}
      <div className="comparison-table">
        {isComputer ? (
          <div className="comparison-legend">
            <div className="comparison-legend-item">
              <p>Автомобили</p>
              <input type="checkbox"></input>
              <label htmlFor="checkbox">Показать различия</label>
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
            <p className="comparison-legend-item">Тип привода</p>
          </div>
        ) : (
          <></>
        )}
        {selectedCars.length === 0 ? (
          <div>
            <p className="no-cars-notification">Вы еще не выбрали не одной машины из данной категории, самое время добавить парочку в избранное!</p>
          </div>
        ) : (
          <div className="comparison-items-container">
            <Flipper
              perView={0.25}
              node={carsInComparison.map((item) =>
                selectedType === item.condition ? <ComparisonItem key={`item-${item.id}`} car={item}></ComparisonItem> : <></>,
              )}
            />
          </div>
        )}
      </div>
    </section>
  );
};
