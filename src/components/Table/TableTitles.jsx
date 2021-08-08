import React from 'react';

const TableTitles = ({ darkTheme }) => (
  <tr
    className={
      `
        ${darkTheme() ? 'dark__border dark' : 'light__border light'}__font__gray
      `
    }
  >
    <th className="ps-c-table__title ps-c-table__columns">Project Name</th>
    <th className="ps-c-table__title ps-c-table__columns">Participants</th>
    <th className="ps-c-table__title ps-c-table__columns">Total Raised</th>
    <th className="ps-c-table__title ps-c-table__columns">Current Price</th>
    <th className="ps-c-table__title ps-c-table__columns">ATH Since IDO</th>
    <th className="ps-c-table__title ps-c-table__columns">Ended in (UTC)</th>
    <th className="ps-c-table__title ps-c-table__columns">Networks</th>
  </tr>
);

export default TableTitles;
