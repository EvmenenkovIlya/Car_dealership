import './HomePage.scss';
import { AboutCompany } from '../AboutCompanyPage/AboutCompanyPage';
import { AboutTabControl } from './components/AboutTabControl/AboutTabControl';
import { Location } from '../LocationPage/LocationPage';

export const HomePage = () => {
  return (
    <>
      <AboutCompany />
      <AboutTabControl />
      <Location />
    </>
  );
};
