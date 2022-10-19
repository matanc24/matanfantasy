import React, { useContext, useEffect } from 'react';
import MediaQuery, { useMediaQuery } from 'react-responsive';
import fixtures from '../context/data/fixtures';
import teams from '../context/data/teams';
import { PlayersContext } from '../context/context';
// Dividing all fixtures into 26 gameweeks
const schedule = [];
for (let i = 0; i < fixtures.length; i++) {
  schedule.push(fixtures[i].games);
}

// Getting each team fixtures
const getTeamSchedule = (teamName) => {
  const location = [];
  return (
    schedule
      // Getting each gameweek
      .map((game) =>
        // Filtering in every gameweek which game teamName is playing
        game.find((team) => {
          if (team.hostTeam === teamName) return team.hostTeam;
          if (team.hostessTeam === teamName) return team.hostTeam;
        })
      )
      // Figuring whether teamName is host or hostess
      .map((game) => {
        // console.log(game);
        if (game.hostTeam !== teamName) {
          location.push('(ח)');
          return game.hostTeam;
        } else {
          location.push('(ב)');
          return game.hostessTeam;
        }
      })
      // Getting team object from teams.js by comparing opponent to teams.teamName
      .map((opponent) => teams.find((team) => team.teamName === opponent))
      // Returning an object for every team fixture
      .map((game, i) => {
        return {
          strength: game.teamStrength,
          logo: game.teamImg,
          name: game.teamName,
          location: location[i],
        };
      })
  );
};

const mHaifa = getTeamSchedule('מכבי חיפה');
const hBeerSheva = getTeamSchedule('הפועל באר שבע');
const mTelAviv = getTeamSchedule('מכבי תל אביב');
const mNetanya = getTeamSchedule('מכבי נתניה');
const hTelAviv = getTeamSchedule('הפועל תל אביב');
const bSakhnin = getTeamSchedule('בני סכנין');
const hKiryatShemona = getTeamSchedule('הפועל קרית שמונה');
const hHadera = getTeamSchedule('הפועל חדרה');
const msAshdod = getTeamSchedule('מ.ס. אשדוד');
const bJerusalem = getTeamSchedule('בית``ר ירושלים');
const hHaifa = getTeamSchedule('הפועל חיפה');
const hJerusalem = getTeamSchedule('הפועל ירושלים');
const mbReina = getTeamSchedule('מכבי בני ריינה');
const sNesTziyona = getTeamSchedule('סקציה נס ציונה');

const Fixtures = () => {
  const { currentGw, rankings } = useContext(PlayersContext);
  const isMobile = useMediaQuery({ query: '(max-width: 600px)' });
  const showTeamSchedule = function (team, name) {
    if (rankings.length === 0) return;
    const row = rankings.find((ranking) => ranking.name === name).position + 1;
    return team.slice(currentGw - 1).map((game, i) => {
      if (isMobile) {
        return (
          i < 5 && (
            <div
              className='fixDifficulty'
              style={{
                backgroundColor: `var(--color-dif-${game.strength})`,
                gridRow: `${row}`,
                gridColumn: `${3 + i}`,
                color: `${game.strength === 3 ? 'black' : 'white'}`,
              }}
              key={i}
            >
              <div className='opp-img'>
                <img src={game.logo} alt={game.name} title={game.name} />
                {game.location}
              </div>
            </div>
          )
        );
      } else {
        return (
          i < 7 && (
            <div
              className='fixDifficulty'
              style={{
                backgroundColor: `var(--color-dif-${game.strength})`,
                gridRow: `${row}`,
                gridColumn: `${3 + i}`,
                color: `${game.strength === 3 ? 'black' : 'white'}`,
              }}
              key={i}
            >
              <div className='opp-img'>
                <img src={game.logo} alt={game.name} title={game.name} />
                {game.location}
              </div>
            </div>
          )
        );
      }
    });
  };

  return (
    <React.Fragment>
      <h2 className='fix-heading'>קושי משחקים</h2>
      <div className='fix-container'>
        {rankings.map((team, i) => {
          return (
            <React.Fragment key={i}>
              <div className='logo'>
                <img src={team.image} alt={team.name} title={team.name} />
              </div>
              <div className='team'>{team.name}</div>
            </React.Fragment>
          );
        })}
        <div className='gw dif-container'>
          <span>קל</span>
          <div className='dif one'>
            <span>1</span>
          </div>
          <div className='dif two'>
            <span>2</span>
          </div>
          <div className='dif three'>
            <span>3</span>
          </div>
          <div className='dif four'>
            <span>4</span>
          </div>
          <div className='dif five'>
            <span>5</span>
          </div>
          <span>קשה</span>
        </div>
        {isMobile
          ? fixtures.map((fixture, i) => {
              if (fixture.cycleNum > 5) return;
              return (
                <div className='gw' key={i}>
                  {currentGw + i}
                </div>
              );
            })
          : fixtures.map((fixture, i) => {
              if (fixture.cycleNum > 7) return;
              return (
                <div className='gw' key={i}>
                  {currentGw + i}
                </div>
              );
            })}

        {showTeamSchedule(mHaifa, 'מכבי חיפה')}
        {showTeamSchedule(mTelAviv, 'מכבי תל אביב')}
        {showTeamSchedule(hBeerSheva, 'הפועל באר שבע')}
        {showTeamSchedule(mbReina, 'מכבי בני ריינה')}
        {showTeamSchedule(mNetanya, 'מכבי נתניה')}
        {showTeamSchedule(hJerusalem, 'הפועל ירושלים')}
        {showTeamSchedule(hKiryatShemona, 'הפועל קרית שמונה')}
        {showTeamSchedule(hHaifa, 'הפועל חיפה')}
        {showTeamSchedule(hHadera, 'הפועל חדרה')}
        {showTeamSchedule(hTelAviv, 'הפועל תל אביב')}
        {showTeamSchedule(bJerusalem, 'בית``ר ירושלים')}
        {showTeamSchedule(sNesTziyona, 'סקציה נס ציונה')}
        {showTeamSchedule(bSakhnin, 'בני סכנין')}
        {showTeamSchedule(msAshdod, 'מ.ס. אשדוד')}
      </div>
    </React.Fragment>
  );
};

export default Fixtures;
