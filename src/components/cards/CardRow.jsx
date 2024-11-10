import React from 'react';
import CardsFirst from './CardsFirst';
import { FaInstagram, FaArrowRight, FaFacebook } from 'react-icons/fa6';
import AnimationInView from '../Animations/AnimationInView';

const CardRow = ({ cards }) => {
  return (
    <div className='flex flex-row gap-8 justify-center CardsWrapper'>
      {cards.map((card, index) => {
        AnimationInView(card.CardId, 0.5 * (index + 1));
        return (
          <CardsFirst
            key={card.CardId}
            CardId={card.CardId}
            ImageCover={card.ImageCover}
            Name={card.Name}
            NIM={card.NIM}
            iconBtn1={<FaInstagram size={25} />}
            iconBtn2={<FaFacebook size={25} />}
            iconBtn3={<FaArrowRight size={25} />}
            ViewProfile={card.ViewProfile}
          />
        );
      })}
    </div>
  );
};

export default CardRow;