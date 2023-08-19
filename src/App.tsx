import React from 'react';
import logo from './logo.svg';
import './App.scss';
import { Header } from './components/Header/Header';
import { HomePage } from './pages/HomePage/HomePage';
import { Footer } from './components/Footer/Footer';
import { Route, Routes } from 'react-router-dom';
import { LoginPage } from './pages/LoginPage/LoginPage';
import { AboutPage } from './pages/AboutPage/AboutPage';
import { NotFoundPage } from './pages/NotFoundPage/NotFoundPage';
import { ReviewsPage } from './pages/ReviewsPage/ReviewsPage';
import { CatalogPage } from './pages/CatalogPage/CatalogPage';

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route index element={<HomePage />} />
        <Route path="login" element={<LoginPage />} />
        <Route path="about" element={<AboutPage />} />
        <Route path="reviews" element={<ReviewsPage />} />
        <Route path="catalog" element={<CatalogPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a className="App-link" href="https://reactjs.org" target="_blank" rel="noopener noreferrer">
          Learn React
        </a>
      </header>
      <Footer />
    </div>
  );
}

export default App;

