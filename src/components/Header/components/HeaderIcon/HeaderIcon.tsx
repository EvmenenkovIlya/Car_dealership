import './HeaderIcon.scss';

interface HeaderIconProps {
  url: string;
  src: string;
}

// добавить счетчики для избранного и сравнения

export const HeaderIcon = (props: HeaderIconProps) => {
  return (
    <a href={props.url} className="header-icon">
      <img src={props.src} alt=""></img>
    </a>
  );
};
