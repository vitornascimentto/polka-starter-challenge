import React from 'react';
import { useSelector } from 'react-redux';
import BitEthIcon from '../../assets/icons/BitEthIcon';

import cardOne from '../../assets/images/cardOne.png';
import cardOneDark from '../../assets/images/cardOneDark.png';
import cardOneLight from '../../assets/images/cardOneLight.png';

import CardContent from './CardContent';

const MainCard = () => {
  const theme = useSelector((state) => state.theme.currentTheme);

  const darkTheme = () => theme === 'Dark';

  return (
    <div className={`ps-c-cards__card ${darkTheme() ? 'dark' : 'light'}__container__second-container`}>
      <img src={cardOne} alt="card one" className="ps-c-cards__card__image" />

      <div className="ps-c-cards__card__header">
        {
          darkTheme()
            ? <img src={cardOneDark} alt="card one dark" className="ps-c-cards__card__mini-image" />
            : <img src={cardOneLight} alt="card one light" className="ps-c-cards__card__mini-image" />
        }

        <div className="ps-c-cards__card__header__text ps-c-cards__card__header__text__main">
          <div>Token sale ends in //</div>
          <div>2d 1h 28m 48s</div>
        </div>
      </div>

      <div className="ps-c-cards__card__content">
        <CardContent
          darkTheme={darkTheme}
          title="Polychain Monsters"
          subtitle="$PMON"
          total="$300,000"
          personal="$100"
          icon={<BitEthIcon />}
        />

        <button type="button" className="ps-c-cards__card__button ps-c-cards__card__main-button">
          Invest in Polychain Monsters
        </button>
      </div>
    </div>
  );
};

export default MainCard;
