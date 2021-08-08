import React from 'react';

import Cards from '../../components/Cards';
import FundedProjects from '../../components/FundedProjects/FundedProjects';
import SearchBar from '../../components/SearchBar';
import Table from '../../components/Table';

const Projects = () => (
  <>
    <Cards />
    <FundedProjects />
    <SearchBar />
    <Table />
  </>
);

export default Projects;
