import './RadioButton.scss';
import React, { EventHandler } from 'react';

interface RadioButtonProps {
  name: string;
  id: string;
  value: string;
  label: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  checked: boolean;
}

export const RadioButton = (props: RadioButtonProps) => {
  return (
    <div className="radiobutton">
      <label htmlFor={props.id} className="radiobutton-label">
        <input type="radio" name={props.name} value={props.value} id={props.id} onChange={props.onChange} className="radiobutton-input" />
        <span className="custom-radiobutton">{props.label}</span>
      </label>
    </div>
  );
};
