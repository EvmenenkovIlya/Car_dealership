import './ComparisonPage.scss';
import { TabControl } from '../../components/TabControl/TabControl';

export const ComparisonPage = () => {
  // сделать route позже отдельным компонентом
  return (
    <section id="comparison">
      <div className="route">Главная {'>'} Сравнение</div>
      <div>
        <h1>Сравнение</h1>
        <TabControl />
      </div>
    </section>
  );
};
