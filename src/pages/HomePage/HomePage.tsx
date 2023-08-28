import './HomePage.scss';
import { AboutCompany } from '../AboutCompanyPage/AboutCompanyPage';
import { Location } from '../LocationPage/LocationPage';

export const HomePage = () => {
  return (
    <>
      <Location />
      <AboutCompany />
    </>
  );
};
