import React from 'react';
import { useSelector } from 'react-redux';
import CardsContent from './CardsContent';

const Cards = () => {
  const theme = useSelector((state) => state.theme.currentTheme);

  const darkTheme = () => theme === 'Dark';

  return (
    <div className={`ps-c-cards  ${darkTheme() ? 'dark' : 'light'}__container__main-container`}>
      <div className={`ps-c-cards__title ${darkTheme() ? 'dark' : 'light'}__font__secundary`}>
        Upcoming Projects
      </div>

      <CardsContent />
    </div>
  );
};

export default Cards;
