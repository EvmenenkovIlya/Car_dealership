import './HomePage.scss';
import { AboutCompany } from '../AboutCompanyPage/AboutCompanyPage';
import { AboutTabControl } from './components/AboutTabControl/AboutTabControl';
import { Blog } from '../BlogPage/BlogPage';
import { Location } from '../LocationPage/LocationPage';
import { Promotion } from '../../components/Promotion/Promotion';
import { QuickSelectionPage } from '../QuickSelectionPage/QuickSelectionPage';
import { ReviewsSection } from '../ReviewsPage/components/ReviewsSection/ReviewsSection';
import Carousel from './components/Carousel/Carousel';

export const HomePage = () => {
  return (
    <>
      <Carousel />
      <QuickSelectionPage />
      <ReviewsSection />
      <AboutCompany />
      <AboutTabControl />
      <Promotion />
      <Blog />
      <Location />
    </>
  );
};
