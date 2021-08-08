import React, { useState } from 'react';
import { useSelector } from 'react-redux';

const TableTabs = () => {
  const theme = useSelector((state) => state.theme.currentTheme);

  const darkTheme = () => theme === 'Dark';

  const [tab, setTab] = useState('All');

  return (
    <div className="ps-c-table__tabs">
      <Tab name="All" darkTheme={darkTheme} tab={tab} setTab={setTab} />
      <Tab name="Ethereum" darkTheme={darkTheme} tab={tab} setTab={setTab} />
      <Tab name="Binance Smart Chain" darkTheme={darkTheme} tab={tab} setTab={setTab} />
      <Tab name="Polygon" darkTheme={darkTheme} tab={tab} setTab={setTab} />
    </div>
  );
};

const Tab = ({ name, darkTheme, tab, setTab }) => (
  <button
    type="button"
    className={
      `
        ps-c-table__tabs__table
        ${
          darkTheme()
            ? 'dark__container__main-container dark__font__gray ps-c-table__tabs__dark'
            : 'light__container__main-container light__font__gray ps-c-table__tabs__light'
        }
      
        ${tab === name && darkTheme() && 'ps-c-table__tabs__dark__selected'}
        ${tab === name && !darkTheme() && 'ps-c-table__tabs__light__selected'}
      `
    }
    onClick={() => setTab(name)}
  >
    {name}
  </button>
);

export default TableTabs;
