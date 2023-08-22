import './Brand.scss';
import React from 'react';

interface Model {
  name: string;
  icon: string;
}

export const Brand = (props: Model) => {
  return (
    <div className="brand">
      <img src={props.icon} alt={props.name} />
      <div className="name">{props.name}</div>
    </div>
  );
};
