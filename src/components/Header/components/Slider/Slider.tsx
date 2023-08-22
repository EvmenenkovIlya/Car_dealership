import MultiRangeSlider from 'multi-range-slider-react';
// eslint-disable-next-line sort-imports-es6-autofix/sort-imports-es6
import './Slider.scss'; //must be lower for redrawing default styles
import React, { useState } from 'react';

interface SliderProps {
  maxValue: number;
}

export const Slider = (props: SliderProps) => {
  const [minValue, setMinValue] = useState(0);
  const [maxValue, setMaxValue] = useState(props.maxValue);
  const max = props.maxValue;
  const step = props.maxValue / 100;
  const handleInput = (e: any) => {
    setMinValue(e.minValue);
    setMaxValue(e.maxValue);
  };

  const rows: any = [];
  for (let i = 0; i < 11; i++) {
    rows.push(
      <div className="line-block">
        <div className="line"></div>
        <div className="value">{max * i * 0.1}</div>
      </div>,
    );
  }

  return (
    <div>
      <div className="scroll-block">
        <div className="price-block">
          <div className="name">Цена</div>
          <div className="range">0 - {max}</div>
        </div>
        <MultiRangeSlider
          min={0}
          max={max}
          step={step}
          ruler={true}
          preventWheel={false}
          minValue={minValue}
          maxValue={props.maxValue}
          onInput={(e) => {
            handleInput(e);
          }}
        />
        <div className="lines">{rows}</div>
      </div>
    </div>
  );
};
