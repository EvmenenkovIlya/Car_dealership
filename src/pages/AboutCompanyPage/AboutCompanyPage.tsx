import '../../index.scss';
import './AboutCompanyPage.scss';
import React from 'react';
import YouTube, { YouTubeProps } from 'react-youtube';

export const AboutCompany = () => {
  const opts: YouTubeProps['opts'] = {
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      autoplay: 1,
    },
  };
  return (
    <div className="container">
      <div className="header">О компании</div>
      <span>
        Мы располагаем огромной торговой площадкой более 5000 квадратных метров, у нас в наличии не менее 200 автомобилей как отечественного, так и
        иностранного производства. В штате автосалона «Альтера» работают настоящие профессионалы, которые знают особенности каждого конкретного
        автомобиля.
      </span>
      <YouTube className="video" videoId="1rS2L2Zy3Ks?si=9j5iPMmpWZeT_U4W" opts={opts} />
    </div>
  );
};
