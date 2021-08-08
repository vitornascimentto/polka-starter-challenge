import React from 'react';

const CardContent = ({
  darkTheme,
  title,
  subtitle,
  total,
  personal,
  icon,
}) => (
  <>
    <div>
      <div
        className={`ps-c-cards__card__content__title ${darkTheme() ? 'dark' : 'light'}__font__secundary`}
      >
        {title}
        {icon}
      </div>
    </div>

    <div className={`ps-c-cards__card__content__subtitle ${darkTheme() ? 'dark' : 'light'}__font__gray`}>
      {subtitle}
    </div>

    <div
      className={`ps-c-cards__card__content__values ${darkTheme() ? 'dark' : 'light'}__font__secundary`}
    >
      <div className="ps-c-cards__card__content__values__name">Total Raise</div>
      <div className="ps-c-cards__card__content__values__dotted-line" />
      <div className="ps-c-cards__card__content__values__value">{total}</div>
    </div>

    <div
      className={`ps-c-cards__card__content__values ${darkTheme() ? 'dark' : 'light'}__font__secundary`}
    >
      <div className="ps-c-cards__card__content__values__name">Personal Allocation</div>
      <div className="ps-c-cards__card__content__values__dotted-line" />
      <div className="ps-c-cards__card__content__values__value">{personal}</div>
    </div>
  </>
);

export default CardContent;
