import './HomePage.scss';
import { AboutCompany } from '../AboutCompanyPage/AboutCompanyPage';
import { AboutTabControl } from './components/AboutTabControl/AboutTabControl';
import { Location } from '../LocationPage/LocationPage';
import { QuickSelectionPage } from '../QuickSelectionPage/QuickSelectionPage';
import { Сarousel } from './components/Сarousel/Сarousel';

export const HomePage = () => {
  return (
    <>
      <Сarousel />
      <QuickSelectionPage />
      <AboutCompany />
      <AboutTabControl />
      <Location />
    </>
  );
};
