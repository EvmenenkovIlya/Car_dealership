import './HeaderIcon.scss';

interface HeaderIconProps {
  url: string;
  src: string;
  count?: number;
}

// добавить счетчики для избранного и сравнения

export const HeaderIcon = (props: HeaderIconProps) => {
  return (
    <a href={props.url} className="header-icon">
      <img src={props.src} alt=""></img>
      <div className="count">{props.count}</div>
    </a>
  );
};
