import './HomePage.scss';
import { AboutCompany } from '../AboutCompanyPage/AboutCompanyPage';
import { AboutTabControl } from './components/AboutTabControl/AboutTabControl';
import { Location } from '../LocationPage/LocationPage';
import { QuickSelectionPage } from '../QuickSelectionPage/QuickSelectionPage';
import { ReviewsSection } from '../ReviewsPage/components/ReviewsSection/ReviewsSection';

export const HomePage = () => {
  return (
    <>
      <QuickSelectionPage />
      <ReviewsSection />
      <AboutCompany />
      <AboutTabControl />
      <Location />
    </>
  );
};
