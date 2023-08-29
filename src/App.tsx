import './App.scss';
import { AboutPage } from './pages/AboutPage/AboutPage';
import { CatalogPage } from './pages/CatalogPage/CatalogPage';
import { Footer } from './components/Footer/Footer';
import { Header } from './components/Header/Header';
import { HomePage } from './pages/HomePage/HomePage';
import { LoginPage } from './pages/LoginPage/LoginPage';
import { Location } from './pages/LocationPage/LocationPage';
import { NotFoundPage } from './pages/NotFoundPage/NotFoundPage';
import { ReviewsPage } from './pages/ReviewsPage/ReviewsPage';
import { Route, Routes } from 'react-router-dom';
import React from 'react';
import logo from './logo.svg';

function App() {
  return (
    <div className="main-container">
      <Header />
      <Routes>
        <Route index element={<HomePage />} />
        <Route path="login" element={<LoginPage />} />
        <Route path="about" element={<AboutPage />} />
        <Route path="reviews" element={<ReviewsPage />} />
        <Route path="catalog" element={<CatalogPage />} />
        <Route path="location" element={<Location />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
