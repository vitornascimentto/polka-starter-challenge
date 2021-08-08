import React from 'react';
import { useDispatch } from 'react-redux';

import ArrowLeftIcon from '../../assets/icons/ArrowLeftIcon';
import ArrowRightIcon from '../../assets/icons/ArrowRightIcon';

import { nextPage, previousPage } from '../../redux/ducks/table';

const TableButton = ({ darkTheme, totalPages, currentPage }) => {
  const dispatch = useDispatch();

  const next = async () => dispatch(nextPage());
  const previus = () => dispatch(previousPage());

  return (
    <div className="ps-c-table__button-container">
      <div className="ps-c-table__button-container__page">
        <span className={`${darkTheme() ? 'dark' : 'light'}__font__secundary`}>{currentPage}</span>
        {' '}
        <span className={`${darkTheme() ? 'dark' : 'light'}__font__gray`}>
          /
          {' '}
          {totalPages}
        </span>
      </div>

      <Button darkTheme={darkTheme} action={previus}>
        <ArrowLeftIcon darkTheme={darkTheme} />
      </Button>

      <Button darkTheme={darkTheme} action={next}>
        <ArrowRightIcon darkTheme={darkTheme} />
      </Button>
    </div>
  );
};

const Button = ({ children, darkTheme, action }) => (
  <button
    className={
      `
        ps-c-table__button-container__button
        ps-c-table__button-container__button__${darkTheme() ? 'dark' : 'light'}
      `
    }
    type="button"
    onClick={() => action()}
  >
    {children}
  </button>
);

export default TableButton;
