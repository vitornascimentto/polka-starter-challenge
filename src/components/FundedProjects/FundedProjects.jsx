import React from 'react';
import { useSelector } from 'react-redux';

import FundedProjectsDarkIcon from '../../assets/icons/FundedProjectsDarkIcon';
import FundedProjectsLightIcon from '../../assets/icons/FundedProjectsLightIcon';
import ParticipantsDarkIcon from '../../assets/icons/ParticipantsDarkIcon';
import ParticipantsLightIcon from '../../assets/icons/ParticipantsLightIcon';
import CapitalDarkIcon from '../../assets/icons/CapitalDarkIcon';
import CapitalLightIcon from '../../assets/icons/CapitalLightIcon';

import FundedProjectsData from './FundedProjectsData';

const FundedProjects = () => {
  const theme = useSelector((state) => state.theme.currentTheme);

  const darkTheme = () => theme === 'Dark';

  return (
    <div className={`ps-c-funded-projects  ${darkTheme() ? 'dark' : 'light'}__container__main-container`}>
      <div>
        <div className={`ps-c-funded-projects__title ${darkTheme() ? 'dark' : 'light'}__font__secundary`}>
          Funded Projects
        </div>
        <div className={`ps-c-funded-projects__subtitle  ${darkTheme() ? 'dark' : 'light'}__font__gray`}>
          We bring new technologies to our community
        </div>
      </div>

      <div className="ps-c-funded-projects__data-container">
        <FundedProjectsData
          icon={darkTheme() ? <FundedProjectsDarkIcon /> : <FundedProjectsLightIcon />}
          mainColor="yellow"
          darkTheme={darkTheme}
          name="Funded Projects"
          value="138"
        />

        <FundedProjectsData
          icon={darkTheme() ? <ParticipantsDarkIcon /> : <ParticipantsLightIcon />}
          mainColor="blue"
          darkTheme={darkTheme}
          name="Unique Participants"
          value="1,773,692"
        />

        <FundedProjectsData
          icon={darkTheme() ? <CapitalDarkIcon /> : <CapitalLightIcon />}
          mainColor="red"
          darkTheme={darkTheme}
          name="Raised Capital"
          value="$86,808,412"
        />
      </div>
    </div>
  );
};

export default FundedProjects;
