import './HomePage.scss';
import { AboutCompany } from '../AboutCompanyPage/AboutCompanyPage';
import { AboutTabControl } from './components/AboutTabControl/AboutTabControl';
import { Location } from '../LocationPage/LocationPage';
import { QuickSelectionPage } from '../QuickSelectionPage/QuickSelectionPage';

export const HomePage = () => {
  return (
    <>
      <QuickSelectionPage />
      <AboutCompany />
      <AboutTabControl />
      <Location />
    </>
  );
};
