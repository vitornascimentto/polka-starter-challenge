import React from 'react';
import { useSelector } from 'react-redux';

const FooterSubscribe = () => {
  const theme = useSelector((state) => state.theme.currentTheme);

  const darkTheme = () => theme === 'Dark';

  return (
    <div className={`ps-c-footer__subscribe ${darkTheme() ? 'dark' : 'light'}__border`}>
      <div>
        <div className={`ps-c-footer__subscribe__title ${darkTheme() ? 'dark' : 'light'}__font__primary`}>
          Get Alerts for
        </div>
        <div
          className={
            `
              ps-c-footer__subscribe__subtitle
              ps-c-footer__subscribe__subtitle__${darkTheme() ? 'dark' : 'light'}
            `
          }
        >
          New Projects
        </div>
      </div>

      <div
        className={
          `ps-c-footer__subscribe__button ps-c-footer__subscribe__button__${darkTheme() ? 'dark' : 'light'}`
        }
      >
        Subscribe to Upcoming Polls
      </div>
    </div>
  );
};

export default FooterSubscribe;
