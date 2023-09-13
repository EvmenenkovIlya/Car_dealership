import './ComparisonPage.scss';
import { ComparisonItem } from './components/ComparisonItem';
import { TabControl } from '../../components/TabControl/TabControl';
import { items } from '../../models/car';

export const ComparisonPage = () => {
  // сделать route позже отдельным компонентом breadcrumbs
  return (
    <section id="comparison">
      <div className="route">Главная {'>'} Сравнение</div>
      <div className="controls">
        <h1>Сравнение</h1>
        <TabControl />
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
          {items.map((item) => (
            <ComparisonItem key={`item-${item.id}`} car={item}></ComparisonItem>
          ))}
        </div>
      </div>
    </section>
  );
};
