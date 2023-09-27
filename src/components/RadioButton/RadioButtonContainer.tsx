import { RadioButton } from './RadioButton';
import React, { useState } from 'react';

interface RadioButtonContainerProps {
  onSelectedChange: (value: string) => void;
}

const options = [
  { value: 'NEW_CARS', label: 'Новые авто 3', id: 1 },
  { value: 'OLD_CARS', label: 'С пробегом 3', id: 2 },
  { value: 'TAXIS', label: 'Такси 3', id: 3 },
];

export const RadioButtonContainer = (props: RadioButtonContainerProps) => {
  const [selectedType, setSelectedType] = useState<string>('NEW_CARS');
  const radioHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    setSelectedType(value);
    props.onSelectedChange(value);
  };
  return (
    <div className="radiobutton-container">
      {options.map((item) => (
        <RadioButton
          name="car-type"
          value={item.value}
          id={'type-' + item.id}
          onChange={radioHandler}
          checked={selectedType === item.value}
          label={item.label}
          key={'key-' + item.id}
        />
      ))}
    </div>
  );
};
