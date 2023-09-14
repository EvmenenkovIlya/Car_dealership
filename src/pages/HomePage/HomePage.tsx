import './HomePage.scss';
import { AboutCompany } from '../AboutCompanyPage/AboutCompanyPage';
import { AboutTabControl } from './components/AboutTabControl/AboutTabControl';
import { Location } from '../LocationPage/LocationPage';
import { NavLink } from 'react-router-dom';
import { QuickSelectionPage } from '../QuickSelectionPage/QuickSelectionPage';
import useBreadcrumbs from 'use-react-router-breadcrumbs';

const routes = [{ path: '', breadcrumb: 'Главная' }];

export const HomePage = () => {
  const breadcrumbs = useBreadcrumbs(routes);

  return (
    <>
      {breadcrumbs.map(({ match, breadcrumb }) => (
        <NavLink key={match.pathname} to={match.pathname}>
          {breadcrumb}
        </NavLink>
      ))}
      <QuickSelectionPage />
      <AboutCompany />
      <AboutTabControl />
      <Location />
    </>
  );
};
