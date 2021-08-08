import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import Dropdown from 'react-dropdown';

import GitHubIcon from '../../assets/icons/GitHubIcon';
import LinkedInIcon from '../../assets/icons/LinkedInIcon';
import MediumIcon from '../../assets/icons/MediumIcon';
import MoonIcon from '../../assets/icons/MoonIcon';
import SunIcon from '../../assets/icons/SunIcon';
import TelegramIcon from '../../assets/icons/TelegramIcon';
import TwitterIcon from '../../assets/icons/TwitterIcon';

import 'react-dropdown/style.css';

import { setCurrentTheme } from '../../redux/ducks/themes';

const dropDownOptions = [
  {
    value: 'Dark',
    label: (
      <div>
        <MoonIcon />
        {' '}
        Dark
      </div>
    ),
  },
  {
    value: 'Light',
    label: (
      <div>
        <SunIcon />
        {' '}
        Light
      </div>
    ),
  },
];

const LastFooterItems = () => {
  const dispatch = useDispatch();

  const theme = useSelector((state) => state.theme.currentTheme);

  const darkTheme = () => theme === 'Dark';
  const changeTheme = ({ currentTheme }) => dispatch(setCurrentTheme(currentTheme));

  return (
    <div className="ps-c-footer__last-items">
      <div
        className={`ps-c-footer__last-items__company-signature ${darkTheme() ? 'dark' : 'light'}__font__gray`}
      >
        Copyright © 2021 Polkastarter, Inc. All rights reserved.
      </div>

      <div className="ps-c-footer__last-items__right-items">
        <FooterIcons><TwitterIcon /></FooterIcons>
        <FooterIcons><MediumIcon /></FooterIcons>
        <FooterIcons><TelegramIcon /></FooterIcons>
        <FooterIcons><LinkedInIcon /></FooterIcons>
        <FooterIcons><GitHubIcon /></FooterIcons>

        <div
          className={
            `ps-c-footer__last-items__right-items__version ${darkTheme() ? 'dark' : 'light'}__font__gray`
          }
        >
          v2.0.0
        </div>

        <Dropdown
          options={dropDownOptions}
          onChange={(e) => changeTheme({ currentTheme: e.value })}
          value={theme}
          controlClassName={
            `
              ps-c-footer__last-items__right-items__theme-button
              ${
                darkTheme()
                  ? 'dark__border dark__container__main-container dark__font__secundary'
                  : 'light__border light__container__main-container light__font__secundary'
              }
            `
          }
          menuClassName={
            `
              ps-c-footer__dropdown
              Dropdown-option.is-selected__${darkTheme() ? 'dark' : 'light'}
              ${
                darkTheme()
                  ? 'dark__border dark__container__main-container dark__font__secundary '
                  : 'light__border light__container__main-container light__font__secundary'
              }
            `
          }
        />
      </div>
    </div>
  );
};

const FooterIcons = ({ children }) => (
  <div className="ps-c-footer__last-items__right-items__icon">{children}</div>
);

export default LastFooterItems;
