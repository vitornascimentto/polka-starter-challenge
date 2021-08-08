import React from 'react';
import { useSelector } from 'react-redux';

import FoxIcon from '../../assets/icons/FoxIcon';
import PolkaIcon from '../../assets/icons/PolkaIcon';

const NavBarActions = () => {
  const theme = useSelector((state) => state.theme.currentTheme);

  return (
    <div className="ps-l-navbar__actions">
      <Polka theme={theme} />
      <ETH theme={theme} />
    </div>
  );
};

const Polka = ({ theme }) => (
  <div className={
      `
        ps-l-navbar__actions__polka
        ${
          theme === 'Dark'
            ? 'dark__font__primary dark__border'
            : 'light__font__primary light__border'
        }
      `
    }
  >
    <div className="ps-l-navbar__actions__polka__icon">
      <PolkaIcon />
    </div>
    <div>
      31,048.04
      {' '}
      <span className="ps-l-navbar__actions__cripto-name">POLS</span>
    </div>
  </div>
);

const ETH = ({ theme }) => (
  <div
    className={
      `
        ps-l-navbar__actions__ETH
        ${
          theme === 'Dark'
            ? 'dark__font__secundary dark__container__second-container'
            : 'light__font__secundary light__container__main-container'
          }
      `
    }
  >
    <div>
      0.583
      {' '}
      <span className="ps-l-navbar__actions__cripto-name">ETH</span>
    </div>

    <div
      className={
        `
          ps-l-navbar__actions__ETH__content
          ${theme === 'Dark' ? 'dark__container__main-container' : 'light__container__second-container'}
        `
      }
    >
      0x71...9d81

      <span className="ps-l-navbar__actions__ETH__fox-icon"><FoxIcon /></span>
    </div>
  </div>
);

export default NavBarActions;
