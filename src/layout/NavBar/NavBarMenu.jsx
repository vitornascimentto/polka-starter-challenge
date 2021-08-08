import React, { useState } from 'react';
import { useSelector } from 'react-redux';

const NavBarMenu = () => {
  const [pageSelected, setPageSelected] = useState('Home');

  return (
    <div className="ps-l-navbar__menu">
      <MenuItem name="Home" pageSelected={pageSelected} setPageSelected={setPageSelected} />
      <MenuItem name="Dashboard" pageSelected={pageSelected} setPageSelected={setPageSelected} />
      <MenuItem name="Projects" pageSelected={pageSelected} setPageSelected={setPageSelected} />
      <MenuItem name="Council" pageSelected={pageSelected} setPageSelected={setPageSelected} />
    </div>
  );
};

const MenuItem = ({ name, pageSelected, setPageSelected }) => {
  const theme = useSelector((state) => state.theme.currentTheme);

  const darkTheme = () => theme === 'Dark';

  return (
    <button
      type="button"
      className={
        `
          ${
            darkTheme()
              ? 'dark__container__navbar dark__font__gray ps-l-navbar__menu__dark-item'
              : 'light__container__navbar light__font__gray ps-l-navbar__menu__light-item'
          }
        
          ${pageSelected === name && darkTheme() && 'ps-l-navbar__menu__dark-item__selected'}
          ${pageSelected === name && !darkTheme() && 'ps-l-navbar__menu__light-item__selected'}
        `
      }
      onClick={() => setPageSelected(name)}
    >
      {name}
    </button>
  );
};

export default NavBarMenu;
