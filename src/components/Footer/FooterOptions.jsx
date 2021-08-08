import React from 'react';
import { useSelector } from 'react-redux';

import PolkastarterLogo from '../../layout/PolkastarterLogo';

const FooterOptions = () => {
  const theme = useSelector((state) => state.theme.currentTheme);

  const darkTheme = () => theme === 'Dark';

  return (
    <div className="ps-c-footer__options">
      <PolkastarterLogo word="P" theme={theme} />

      <div className="ps-c-footer__options__links">
        <OptionLinks
          darkTheme={darkTheme}
          firstOption="Company"
          otherOptions={['About us', 'Apply for IDO', 'Careers']}
        />
        <OptionLinks
          darkTheme={darkTheme}
          firstOption="Help"
          otherOptions={['Support', 'Terms & Conditions', 'Privacy Policy']}
        />
        <OptionLinks
          darkTheme={darkTheme}
          firstOption="Developers"
          otherOptions={['Documentation', 'Polkastarter.js']}
        />
        <OptionLinks
          darkTheme={darkTheme}
          firstOption="Governance"
          otherOptions={['Overview', 'Leaderboard', 'Forums']}
        />
      </div>

      <div className={
          `
            ps-c-footer__options__view
            ${darkTheme() ? 'dark__font__secundary dark__border' : 'light__font__secundary light__border'}
          `
        }
      >
        View Projects
      </div>
    </div>
  );
};

const OptionLinks = ({ darkTheme, firstOption, otherOptions }) => (
  <div className="ps-c-footer__options__links__column">
    <button
      type="button"
      className={
        `
          ps-c-footer__options__links__primary 
          ${
            darkTheme()
              ? 'dark__container__main-container dark__font__secundary'
              : 'light__container__main-container light__font__secundary'
            }
        `
      }
    >
      {firstOption}
    </button>

    {otherOptions.map((option) => (
      <button
        key={option}
        type="button"
        className={
          `
            ps-c-footer__options__links__secondary
            ${
              darkTheme()
                ? 'dark__container__main-container dark__font__footer-links'
                : 'light__container__main-container light__font__footer-links'
            }
          `
        }
      >
        {option}
      </button>
    ))}
  </div>
);

export default FooterOptions;
