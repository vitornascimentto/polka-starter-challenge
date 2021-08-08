import React from 'react';

const FundedProjectsData = ({
  icon,
  mainColor,
  darkTheme,
  name,
  value,
}) => (
  <div className={`ps-c-funded-projects__data-content ${darkTheme() ? 'dark' : 'light'}__border`}>
    <div
      className={
        `
          ps-c-funded-projects__icon
          ps-c-funded-projects__icon__${darkTheme() ? 'dark' : 'light'}-background__${mainColor}
        `
        }
    >
      {icon}
    </div>

    <div>
      <div
        className={
          `
            ps-c-funded-projects__data-content__name
            ps-c-funded-projects__data-content__${darkTheme() ? 'dark' : 'light'}-font__${mainColor}
          `
        }
      >
        {name}
      </div>

      <div
        className={
          `ps-c-funded-projects__data-content__value ${darkTheme() ? 'dark' : 'light'}__font__secundary`
        }
      >
        {value}
      </div>
    </div>
  </div>
);

export default FundedProjectsData;
