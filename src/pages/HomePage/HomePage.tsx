import './HomePage.scss';
import { AboutCompany } from '../AboutCompanyPage/AboutCompanyPage';
import { AboutTabControl } from './components/AboutTabControl/AboutTabControl';
import { Location } from '../LocationPage/LocationPage';
import { Promotion } from '../../components/Promotion/Promotion';
import { QuickSelectionPage } from '../QuickSelectionPage/QuickSelectionPage';
import { ReviewsSection } from '../ReviewsPage/components/ReviewsSection/ReviewsSection';
import { promotions } from '../../components/Promotion/models';

const promotion = promotions[Math.floor(Math.random() * promotions.length)];

export const HomePage = () => {
  return (
    <>
      <QuickSelectionPage />
      <ReviewsSection />
      <AboutCompany />
      <AboutTabControl />
      <Promotion img={promotion.img} header={promotion.header} text={promotion.text} />
      <Location />
    </>
  );
};
