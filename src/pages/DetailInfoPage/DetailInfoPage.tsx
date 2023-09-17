import '../../index.scss';
import './DetailInfoPage.scss';
import { Equipment } from '../../components/Equipment/Equipment';
import { Promotion } from '../../components/Promotion/Promotion';
import { ToyotaCamry } from './models/carDetailInfo';
import { TradeInPromotion } from '../../components/Promotion/models';
import { equipments } from '../../components/Equipment/models/equipment';
import Dropdown from '../../components/Dropdown/Dropdown';
import React from 'react';
import backside from './assets/backside.png';
import bottom from './assets/bottom.svg';
import front from './assets/front.png';
import frontBottom from './assets/frontBottom.svg';
import height from './assets/height.svg';
import side from './assets/side.png';

interface DetailParam {
  name: string;
  value: string;
}

interface Details {
  name: string;
  params: DetailParam[];
}

export interface CarDetailInfo {
  name: string;
  bodyLength: number;
  bodyWidth: number;
  bodyHeight: number;
  wheelbase: number;
  clearance: number;
  details: Details[];
}

export const DetailInfoPage = () => {
  return (
    <div className="main-container detail-info">
      <section>
        <div className="equipment">
          <div className="header">Что входит в комплектацию Active</div>
          <div className="list">
            {equipments.map((item) => (
              <Equipment title={item.title} vales={item.vales} key={item.title} />
            ))}
          </div>
        </div>
      </section>

      <Promotion img={TradeInPromotion.img} header={TradeInPromotion.header} text={TradeInPromotion.text} />

      <section>
        <div className="specifications">
          <div className="header">Технические характеристики {ToyotaCamry.name}</div>
          <div className="sizes">
            <div className="size-block">
              <img src={side} alt={side} />
              <img src={frontBottom} alt={frontBottom} />
              {ToyotaCamry.bodyLength}
            </div>
            <div className="size-block">
              <img src={backside} alt={backside} />
              <img src={bottom} alt={bottom} />
              {ToyotaCamry.bodyWidth}
            </div>
            <div className="size-block">
              <img src={front} alt={front} />
              <img src={bottom} alt={bottom} />
              {ToyotaCamry.bodyWidth}
              <img className="height" src={height} alt={height} />
              <span>{ToyotaCamry.bodyHeight}</span>
            </div>
            <div className="params">
              <div>Длина кузова, мм {ToyotaCamry.bodyLength}</div>
              <div>Ширина кузова, мм {ToyotaCamry.bodyWidth}</div>
              <div>Высота кузова, мм {ToyotaCamry.bodyHeight}</div>
              <div>Колесная база, мм {ToyotaCamry.wheelbase}</div>
              <div>Дорожный просвет, мм {ToyotaCamry.clearance}</div>
            </div>
          </div>

          <div className="details-info-block">
            {ToyotaCamry.details.map((detail) => (
              <>
                <Dropdown name={detail.name} options={detail.params} isText={true} />
                <hr />
              </>
            ))}
            <button className="btn">Показать еще</button>
          </div>
        </div>
      </section>
    </div>
  );
};
