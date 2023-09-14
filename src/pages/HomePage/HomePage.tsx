import './HomePage.scss';
import { AboutCompany } from '../AboutCompanyPage/AboutCompanyPage';
import { AboutTabControl } from './components/AboutTabControl/AboutTabControl';
import Carousel from './components/Carousel/Carousel';
import { Location } from '../LocationPage/LocationPage';
import { QuickSelectionPage } from '../QuickSelectionPage/QuickSelectionPage';

export const HomePage = () => {
  return (
    <>
      <Carousel />
      <QuickSelectionPage />
      <AboutCompany />
      <AboutTabControl />
      <Location />
    </>
  );
};
