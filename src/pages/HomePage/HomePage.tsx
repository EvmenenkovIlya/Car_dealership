import './HomePage.scss';
import { AboutTabControl } from './components/AboutTabControl/AboutTabControl';
import { Location } from '../LocationPage/LocationPage';

export const HomePage = () => {
  return (
    <>
      <AboutTabControl />
      <Location />
    </>
  );
};
