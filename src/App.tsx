import './App.scss';
import { AboutCompany } from './pages/AboutCompanyPage/AboutCompanyPage';
import { Blog } from './pages/BlogPage/BlogPage';
import { CarAvailable } from './components/CarAvailable/CarAvailable';
import { CatalogPage } from './pages/CatalogPage/CatalogPage';
import { ComparisonPage } from './pages/ComparisonPage/ComparisonPage';
import { DetailInfoPage } from './pages/DetailInfoPage/DetailInfoPage';
import { FavoritesPage } from './pages/FavoritesPage/FavoritesPage';
import { Footer } from './components/Footer/Footer';
import { Header } from './components/Header/Header';
import { HomePage } from './pages/HomePage/HomePage';
import { Location } from './pages/LocationPage/LocationPage';
import { LoginPage } from './pages/LoginPage/LoginPage';
import { NotFoundPage } from './pages/NotFoundPage/NotFoundPage';
import { QuickSelectionPage } from './pages/QuickSelectionPage/QuickSelectionPage';
import { ReviewsPage } from './pages/ReviewsPage/ReviewsPage';
import { Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div className="main-container">
      <Header />
      <Routes>
        <Route index element={<HomePage />} />
        <Route path="detail" element={<DetailInfoPage />}></Route>
        <Route path="login" element={<LoginPage />} />
        <Route path="about" element={<AboutCompany />} />
        <Route path="blog" element={<Blog />} />
        <Route path="reviews" element={<ReviewsPage />} />
        <Route path="catalog" element={<CatalogPage />} />
        <Route path="car-available" element={<CarAvailable />} />
        <Route path="location" element={<Location />} />
        <Route path="favorites" element={<FavoritesPage />} />
        <Route path="quick-selection" element={<QuickSelectionPage />} />
        <Route path="comparison" element={<ComparisonPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
