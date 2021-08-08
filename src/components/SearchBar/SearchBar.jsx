import React from 'react';
import { useSelector } from 'react-redux';
import SearchDarkIcon from '../../assets/icons/SearchDarkIcon';
import SearchLightIcon from '../../assets/icons/SearchLightIcon';

const SearchBar = () => {
  const theme = useSelector((state) => state.theme.currentTheme);

  const darkTheme = () => theme === 'Dark';

  return (
    <div className={`ps-c-search-bar ${darkTheme() ? 'dark' : 'light'}__container__main-container`}>
      <div className="ps-c-search-bar__input__container">
        <input
          placeholder="Search by project name, token contract address or token symbol..."
          className={
            `
              ps-c-search-bar__input
              ${darkTheme() ? 'dark' : 'light'}__font__gray
              ${darkTheme() ? 'dark' : 'light'}__container__main-container
            `
          }
        />

        {darkTheme() ? <SearchDarkIcon /> : <SearchLightIcon />}
      </div>

      <div className={`ps-c-search-bar__${darkTheme() ? 'dark' : 'light'}-line`} />
    </div>
  );
};

export default SearchBar;
