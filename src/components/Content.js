import React from 'react';
import players from '../context/data/players';
import Leaders from './Leaders';

import Fixtures from './Fixtures';
import LeagueTable from './LeagueTable';
import PlayerCard from './PlayerCard';
const Content = ({ children }) => {
  return (
    <div className='content'>
      <PlayerCard />
      <LeagueTable />
      <Leaders />
      <Fixtures />
    </div>
  );
};

export default Content;
