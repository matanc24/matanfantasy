import React, { useEffect, useState, useContext } from 'react';
import { PlayersContext } from '../context/context';
import Loading from './Loading';
const LeagueTable = () => {
  const {
    players,
    leaders,
    rankings,
    teams,
    playerStat,
    fetchPlayers,
    isLoading,
  } = useContext(PlayersContext);
  // console.log(rankings);
  if (isLoading && rankings.length === 0) {
    return (
      <>
        <h2 className='heading teams' id='table'>
          טבלת ליגת העל
        </h2>
        <div className='stat-container league-table'>
          <Loading />;
        </div>
      </>
    );
  }
  return (
    <>
      <h2 className='heading teams' id='table'>
        טבלת ליגת העל
      </h2>
      <div className='stat-container league-table'>
        <div className='underline'></div>
        <div className='title'>קבוצה</div>
        <div className='title'>נצ'</div>
        <div className='title'>הפ'</div>
        <div className='title'>תיקו</div>
        <div className='title'>יחס</div>
        <div className='title'>נק'</div>
        {rankings.map((team, i) => {
          return (
            <React.Fragment key={i}>
              <div className='details'>
                <img
                  src={team.image}
                  alt={team.name}
                  title={team.name}
                  className='details__crest'
                />
                <div className='details__name'>{team.name}</div>
              </div>
              <div className='details__stat'>{team.wins}</div>
              <div className='details__stat'>{team.loss}</div>
              <div className='details__stat'>{team.ties}</div>
              <div className='details__stat'>{team.ratio}</div>
              <div className='details__stat'>{team.points}</div>
              <div className='details__underline-small'></div>
            </React.Fragment>
          );
        })}
      </div>
    </>
  );
};

export default LeagueTable;
