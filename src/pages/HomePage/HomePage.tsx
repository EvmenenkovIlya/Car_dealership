import './HomePage.scss';
import { Location } from '../LocationPage/LocationPage';
import { QuickSelectionPage } from '../QuickSelectionPage/QuickSelectionPage';

export const HomePage = () => {
  return (
    <>
      <QuickSelectionPage />
      <Location />
    </>
  );
};
