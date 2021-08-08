import React from 'react';
import { useSelector } from 'react-redux';

import NavBarMenu from './NavBarMenu';
import NavBarActions from './NavBarActions';
import PolkastarterLogo from '../PolkastarterLogo';

const NavBar = () => {
  const theme = useSelector((state) => state.theme.currentTheme);

  return (
    <div className={
      `
        ps-l-navbar
        ${
          theme === 'Dark'
            ? 'dark__container__navbar ps-l-navbar__dark-border'
            : 'light__container__navbar ps-l-navbar__light-border'
        }
      `
      }
    >
      <div className="ps-l-navbar__first-container">
        <PolkastarterLogo word="Polkastarter" theme={theme} />
        <NavBarMenu />
      </div>

      <NavBarActions />
    </div>
  );
};

export default NavBar;
