import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { getTableData } from '../../redux/ducks/table';

import TableButton from './TableButton';
import TableTabs from './TableTabs';
import TableTitles from './TableTitles';

const Table = () => {
  const dispatch = useDispatch();

  const theme = useSelector((state) => state.theme.currentTheme);
  const { currentPage, totalPages, data } = useSelector((state) => state.table);

  const darkTheme = () => theme === 'Dark';

  useEffect(() => {
    dispatch(getTableData());
  }, [dispatch]);

  return (
    <div className={`ps-c-table ps-c-table__${darkTheme() ? 'dark' : 'light'}-container`}>
      <TableTabs />

      <table className={`ps-c-table__content ${darkTheme() ? 'dark' : 'light'}__container__second-container`}>
        <TableTitles darkTheme={darkTheme} />

        {data.map((line) => (
          <tr
            key={line.key}
            className={`ps-c-table__line ${darkTheme() ? 'dark' : 'light'}__font__secundary`}
          >
            <NameColumn darkTheme={darkTheme} projectName={line.projectName} />

            <DefaultColumn darkTheme={darkTheme}>{line.participants}</DefaultColumn>
            <DefaultColumn darkTheme={darkTheme}>{line.totalRaised}</DefaultColumn>
            <DefaultColumn darkTheme={darkTheme}>{line.currentPrice}</DefaultColumn>

            <td className={`ps-c-table__line__${darkTheme() ? 'dark' : 'light'}`}>
              <span className="ps-c-table__line__ath">
                {line.ath}
              </span>
            </td>

            <DefaultColumn darkTheme={darkTheme}>
              <div className="ps-c-table__line__utc">
                <div>{line.utc.date}</div>
                <div
                  className={`ps-c-table__line__subtitle-utc ${darkTheme() ? 'dark' : 'light'}__font__gray`}
                >
                  {line.utc.hour}
                </div>
              </div>
            </DefaultColumn>

            <td
              className={
                `
                  ps-c-table__line__network
                  ps-c-table__line__network__${darkTheme() ? 'dark' : 'light'}
                  ps-c-table__line__${darkTheme() ? 'dark' : 'light'}
                `
              }
            >
              {line.networks}
            </td>
          </tr>
        ))}
      </table>

      <TableButton darkTheme={darkTheme} currentPage={currentPage} totalPages={totalPages} />
    </div>
  );
};

const NameColumn = ({ darkTheme, projectName }) => (
  <td
    className={
      `
        ps-c-table__line__name
        ps-c-table__line__name__${darkTheme() ? 'dark' : 'light'}
        ps-c-table__line__${darkTheme() ? 'dark' : 'light'}
      `
    }
  >
    <div className="ps-c-table__line__name__image-container">
      <div>{projectName.name}</div>
      <div className={`ps-c-table__line__subtitle ${darkTheme() ? 'dark' : 'light'}__font__gray`}>
        {projectName.nickName}
      </div>
    </div>
  </td>
);

const DefaultColumn = ({ children, darkTheme }) => (
  <td className={`ps-c-table__line__default ps-c-table__line__${darkTheme() ? 'dark' : 'light'}`}>
    <div className="ps-c-table__align-content">{children}</div>
  </td>
);

export default Table;
