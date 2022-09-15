import React from 'react';
import players from '../context/data/players';
import Leaders from './Leaders';

import Fixtures from './Fixtures';
import LeagueTable from './LeagueTable';
import PlayerCard from './PlayerCard';
import Card from './Card';
const Content = ({ children }) => {
  return (
    <div className='content'>
      <LeagueTable />
      <Leaders />
      <Fixtures />
      <Card />
    </div>
  );
};

export default Content;
