import './HomePage.scss';
import { AboutCompany } from '../AboutCompanyPage/AboutCompanyPage';
import { AboutTabControl } from './components/AboutTabControl/AboutTabControl';
import { Location } from '../LocationPage/LocationPage';
import { QuickSelectionPage } from '../QuickSelectionPage/QuickSelectionPage';
import { Promotion } from '../../components/Promotion/Promotion';
import { discountPromotion } from '../../components/Promotion/models';

export const HomePage = () => {
  return (
    <>
      <QuickSelectionPage />
      <AboutCompany />
      <AboutTabControl />
      <Promotion img={discountPromotion.img} header={discountPromotion.header} text={discountPromotion.text} />
      <Location />
    </>
  );
};
