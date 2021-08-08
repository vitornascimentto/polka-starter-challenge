import React from 'react';
import { useSelector } from 'react-redux';

import CardContent from './CardContent';

const DefaultCard = ({
  mainImage,
  imageDark,
  imageLight,
  title,
  subtitle,
  total,
  personal,
  icon,
}) => {
  const theme = useSelector((state) => state.theme.currentTheme);

  const darkTheme = () => theme === 'Dark';

  return (
    <div className={`ps-c-cards__card ${darkTheme() ? 'dark' : 'light'}__container__second-container`}>
      <img src={mainImage} alt="card one" className="ps-c-cards__card__image" />

      <div className="ps-c-cards__card__header">
        {
          darkTheme()
            ? <img src={imageDark} alt="card one dark" className="ps-c-cards__card__mini-image" />
            : <img src={imageLight} alt="card one light" className="ps-c-cards__card__mini-image" />
        }

        <div
          className={
            `ps-c-cards__card__header__text ps-c-cards__card__header__text__${darkTheme() ? 'dark' : 'light'}`
          }
        >
          <div>Token sale ends in //</div>
          <div>2d 1h 28m 48s</div>
        </div>
      </div>

      <div className="ps-c-cards__card__content">
        <CardContent
          darkTheme={darkTheme}
          title={title}
          subtitle={subtitle}
          total={total}
          personal={personal}
          icon={icon}
        />

        <Button darkTheme={darkTheme} />
      </div>
    </div>
  );
};

const Button = ({ darkTheme }) => (
  <button
    type="button"
    className={
      `
        ps-c-cards__card__button
        ${
          darkTheme()
            ? 'ps-c-cards__card__button__dark-text dark__border dark'
            : 'ps-c-cards__card__button__light-text light__border light'
        }__container__second-container
      `
    }
  >
    Know More
  </button>
);

export default DefaultCard;
