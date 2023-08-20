import './Dropdown.scss';
import React, { useState } from 'react';
import arrow from './dropdownArrow.svg';

interface Option {
  name: string;
  url: string;
}

interface DropdownProps {
  name: string;
  options: Option[];
}

export const Dropdown = (props: DropdownProps) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="dropdown">
      <button onClick={toggleDropdown}>
        {props.name}
        <img src={arrow} className={`dropdown-arrow ${isOpen ? 'open' : ''}`} alt="" />
      </button>
      {isOpen && (
        <ul className="dropdown-options">
          {props.options.map((option) => (
            <li>
              <a href={option.url}>{option.name}</a>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Dropdown;
