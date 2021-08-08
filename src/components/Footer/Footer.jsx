import React from 'react';
import { useSelector } from 'react-redux';

import FooterOptions from './FooterOptions';
import FooterSubscribe from './FooterSubscribe';
import LastFooterItems from './LastFooterItems';

const Footer = () => {
  const theme = useSelector((state) => state.theme.currentTheme);

  return (
    <div className={`ps-c-footer ${theme === 'Dark' ? 'dark' : 'light'}__container__main-container`}>
      <FooterSubscribe />
      <FooterOptions />
      <LastFooterItems />
    </div>
  );
};

export default Footer;
