import React from 'react';

const PolkastarterLogo = ({ word, theme }) => (
  <div className={`ps-l-polkastarter-logo ${theme === 'Dark' ? 'dark' : 'light'}__font__primary`}>
    <div className="ps-l-polkastarter-logo__circle" />
    <div className="ps-l-polkastarter-logo__letters">{word}</div>
  </div>
);

export default PolkastarterLogo;
