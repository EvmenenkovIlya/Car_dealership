import './Article.scss';
import React from 'react';

export interface ArticleProps {
  image?: string;
  date?: string;
  text: string;
}

export const Article = (props: ArticleProps) => {
  return (
    <div className="article">
      <img src={props.image} alt={props.image} />
      <div className="date">{props.date}</div>
      <div className="text">{props.text}</div>
    </div>
  );
};
