import React, { useEffect, useState, useContext } from 'react';
import { PlayersContext } from '../context/context';
import { HiInformationCircle } from 'react-icons/hi';

import Loading from './Loading';

const Leaders = () => {
  const {
    players,
    leaders,
    rankings,
    teams,
    playerStat,
    fetchPlayers,
    isLoading,
    setIsLoading,
  } = useContext(PlayersContext);

  if (isLoading && leaders.length === 0) {
    return (
      <>
        <h2 className='heading players'>שחקנים מובילים</h2>
        <div className='stat-container pts-leaders'>
          <Loading />;
        </div>
      </>
    );
  }
  return (
    <>
      <h2 className='heading players'>שחקנים מובילים</h2>
      <div className='stat-container pts-leaders'>
        <div className='underline'></div>
        <div className='title'>שחקן</div>
        <div className='title'>שווי</div>
        <div className='title'>נק'</div>
        <div className='title'>זמינות</div>
        {leaders.map((player) => {
          return (
            <>
              <div className='details'>
                <img
                  src={player.shirtPicture}
                  alt={player.teamName}
                  title={player.teamName}
                  className='details__shirt'
                />
                <div className='details__name'>{player.name}</div>
                <a href='#card'>
                  <HiInformationCircle
                    onClick={() => {
                      fetchPlayers('getplayerstat&id=', player.id);
                    }}
                  />
                </a>
                <div className='details__info-box'>
                  <img
                    src={player.teamFlagPic}
                    alt={player.teamName}
                    title={player.teamName}
                    className='details__crest'
                  />
                  <div className='details__position'>
                    {player.type === 'g'
                      ? 'שוער'
                      : player.type === 'd'
                      ? 'הגנה'
                      : player.type === 'm'
                      ? 'קישור'
                      : player.type === 'a'
                      ? 'התקפה'
                      : ''}
                  </div>
                </div>
              </div>
              <div className='details__stat'>
                {player.marketValue / 1000000}M
              </div>
              <div className='details__stat'>{player.pointsValue}</div>
              <div className='details__stat'>
                {player.isSuspended
                  ? 'מושעה'
                  : player.isInjured
                  ? 'פצוע'
                  : player.isMissing
                  ? 'חסר'
                  : 'זמין'}
              </div>
              <div className='details__stat'></div>
              <div className='details__underline-small'></div>
            </>
          );
        })}
      </div>
    </>
  );
};

export default Leaders;
