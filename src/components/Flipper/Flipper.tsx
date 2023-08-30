import '../../index.scss';
import 'keen-slider/keen-slider.min.css';
// eslint-disable-next-line sort-imports-es6-autofix/sort-imports-es6
import './Flipper.scss'; // styles must be after native ones for correct render
import { useKeenSlider } from 'keen-slider/react';
import React, { ReactNode, useState } from 'react';
import useWindowDimensions from '../../hooks/useWindowDimensions';

interface FlipperProps {
  node: ReactNode | ReactNode[];
  perView?: 'auto' | number | (() => number | 'auto');
}

export const Flipper = (props: FlipperProps) => {
  const [currentSlide, setCurrentSlide] = React.useState(0);
  const { height, width } = useWindowDimensions();
  const [loaded, setLoaded] = useState(false);
  const [isMobile, setIsMobile] = useState(width > 1000);

  const [sliderRef, instanceRef] = useKeenSlider<HTMLDivElement>({
    initial: 0,
    slides: { origin: 'auto', perView: isMobile ? props.perView : 1, spacing: 30 },
    slideChanged(slider) {
      setCurrentSlide(slider.track.details.rel);
    },
    created() {
      setLoaded(true);
    },
  });

  function Arrow(props: { disabled: boolean; left?: boolean; onClick: (e: any) => void }) {
    const disabeld = props.disabled ? ' arrow--disabled' : '';
    return (
      <svg
        onClick={props.onClick}
        visibility={isMobile ? 'visible' : 'hidden'}
        className={`arrow ${props.left ? 'arrow--left' : 'arrow--right'} ${disabeld}`}
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
      >
        {props.left && (
          <path
            d="M2.82752 5.40594L7.98735 0.246294C8.31557 -0.0820914 8.84774 -0.0820914 9.17581 0.246294C9.5039 0.574387 9.5039 1.10652 9.17581 1.43459L4.61016 6.00009L9.17567 10.5654C9.50377 10.8937 9.50377 11.4257 9.17567 11.7538C8.84758 12.0821 8.31544 12.0821 7.98721 11.7538L2.82739 6.5941C2.66334 6.42998 2.58141 6.2151 2.58141 6.00011C2.58141 5.78502 2.6635 5.56999 2.82752 5.40594Z"
            fill="#262626"
          />
        )}
        {!props.left && (
          <path
            d="M9.17248 6.59406L4.01265 11.7537C3.68443 12.0821 3.15226 12.0821 2.82419 11.7537C2.4961 11.4256 2.4961 10.8935 2.82419 10.5654L7.38984 5.99991L2.82433 1.43457C2.49623 1.10635 2.49623 0.574263 2.82433 0.24617C3.15242 -0.0820564 3.68456 -0.0820563 4.01279 0.24617L9.17261 5.4059C9.33666 5.57002 9.41859 5.7849 9.41859 5.99989C9.41859 6.21498 9.3365 6.43001 9.17248 6.59406Z"
            fill="white"
          />
        )}
      </svg>
    );
  }

  return (
    <>
      <div className="navigation-wrapper">
        <div ref={sliderRef} className="keen-slider">
          {loaded && instanceRef.current && (
            <>
              <Arrow left onClick={(e: any) => e.stopPropagation() || instanceRef.current?.prev()} disabled={currentSlide === 0} />

              <Arrow
                onClick={(e: any) => e.stopPropagation() || instanceRef.current?.next()}
                disabled={currentSlide === instanceRef.current.track.details.slides.length - 1}
              />
            </>
          )}
          <div className="sliders-block">
            {React.Children.map(props.node, (item, index) => (
              <div className="keen-slider__slide number-slide2">{item}</div>
            ))}
          </div>
        </div>
      </div>
      {loaded && instanceRef.current && (
        <div className="dots">
          {[...Array(instanceRef.current.track.details.slides.length).keys()].map((idx) => {
            return (
              <button
                key={idx}
                onClick={() => {
                  instanceRef.current?.moveToIdx(idx);
                }}
                className={'dot' + (currentSlide === idx ? ' active' : '')}
              ></button>
            );
          })}
        </div>
      )}
    </>
  );
};
