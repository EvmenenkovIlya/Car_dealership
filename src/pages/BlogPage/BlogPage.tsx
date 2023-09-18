import './BlogPage.scss';
import { Article, ArticleProps } from './components/Article';
import { Flipper } from '../../components/Flipper/Flipper';
import React, { useState } from 'react';
import article from './assets/article.png';

const articles: ArticleProps[] = [
  {
    image: article,
    date: '25 октября',
    text: 'Тест Skoda Karoq Scout - городской карлик или настоящий скаут',
  },
  {
    image: article,
    date: '25 октября',
    text: 'Тест Skoda Karoq Scout - городской карлик или настоящий скаут',
  },
  {
    image: article,
    date: '25 октября',
    text: 'Тест Skoda Karoq Scout - городской карлик или настоящий скаут',
  },
  {
    image: article,
    date: '25 октября',
    text: 'Тест Skoda Karoq Scout - городской карлик или настоящий скаут',
  },
  {
    image: article,
    date: '25 октября',
    text: 'Тест Skoda Karoq Scout - городской карлик или настоящий скаут',
  },
  {
    image: article,
    date: '25 октября',
    text: 'Тест Skoda Karoq Scout - городской карлик или настоящий скаут',
  },
  {
    image: article,
    date: '25 октября',
    text: 'Тест Skoda Karoq Scout - городской карлик или настоящий скаут',
  },
  {
    image: article,
    date: '25 октября',
    text: 'Тест Skoda Karoq Scout - городской карлик или настоящий скаут',
  },
];

export const Blog = () => {
  return (
    <section>
      <div className="header">
        <div className="name">Блог</div>
        <button className="btn">Все статьи</button>
      </div>
      <Flipper
        perView={3}
        node={articles.map((item) => (
          <Article image={item.image} date={item.date} text={item.text} />
        ))}
      />
    </section>
  );
};
