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
    setPlayerStat,
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
        <div className='title info'>שחקן</div>
        <div className='title'>שווי</div>
        <div className='title'>זמינות</div>
        <div className='title pts'>נק'</div>
        {leaders.map((player, i) => {
          return (
            <React.Fragment key={i}>
              <a
                className='details'
                href='#card'
                onClick={() => {
                  fetchPlayers('getplayerstat&id=', player.id);
                }}
              >
                <img
                  src={player.shirtPicture}
                  alt={player.teamName}
                  title={player.teamName}
                  className='details__shirt'
                />
                <div className='details__name'>{player.name}</div>

                <HiInformationCircle className='info-logo' />

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
              </a>
              <div className='details__stat'>
                {player.marketValue / 1000000}M
              </div>
              <div className='details__stat'>
                {player.isSuspended
                  ? 'מושעה'
                  : player.isInjured
                  ? 'פצוע'
                  : player.isMissing
                  ? 'חסר'
                  : 'זמין'}
              </div>
              <div className='details__stat pts'>{player.pointsValue}</div>
              <div className='details__stat'></div>
              <div className='details__underline-small'></div>
            </React.Fragment>
          );
        })}
      </div>
    </>
  );
};

export default Leaders;
