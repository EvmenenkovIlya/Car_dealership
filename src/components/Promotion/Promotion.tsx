import '../../index.scss';
import './Promotion.scss';
import InputMask from 'react-input-mask';
import React from 'react';

export interface PromotionProps {
  img: string;
  header: string;
  text: string;
}

export const Promotion = (props: PromotionProps) => {
  return (
    <section>
      <div className="promotion-block">
        <div className="images-block">
          <img src={props.img} alt={props.img}></img>
        </div>
        <div className="promotion">
          <div className="header">{props.header}</div>
          <div className="text">{props.text}</div>
          <div className="contact-block">
            <InputMask className="input" mask="+7 999 999 99 99" placeholder="Ваш телефон" />
            <button className="btn">Получить предложение</button>
          </div>
          <div className="footer">Нажимая кнопку “Отправить” Вы даете согласие на обработку своих персональных данных</div>
        </div>
      </div>
    </section>
  );
};
