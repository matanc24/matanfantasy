import React from 'react';
import { MdCardGiftcard } from 'react-icons/md';
import fixtures from '../context/data/fixtures';
import teams from '../context/data/teams';
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
  return (
    <>
      <h1 className='fix-heading'>קושי משחקים</h1>
      <div className='fix-container'>
        {teams.map((team) => {
          return (
            <>
              <div className='logo'>
                <img
                  src={team.teamImg}
                  alt={team.teamName}
                  title={team.teamName}
                />
              </div>
              <div className='team'>{team.teamName}</div>
            </>
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
        {fixtures.map((fixture) => {
          if (fixture.cycleNum > 7) return;
          return <div className='gw'>{fixture.cycleNum}</div>;
        })}
        {mHaifa.map((game, i) => {
          return (
            i < 7 && (
              <div
                className='fixDifficulty'
                style={{
                  backgroundColor: `var(--color-dif-${game.strength})`,
                  gridRow: '2',
                  gridColumn: `${3 + i}`,
                  color: `${
                    game.strength === 1 || game.strength === 3
                      ? 'black'
                      : 'white'
                  }`,
                }}
              >
                <div className='opp-img'>
                  <img src={game.logo} alt={game.name} title={game.name} />
                  {game.location}
                </div>
              </div>
            )
          );
        })}
        {hBeerSheva.map((game, i) => {
          return (
            i < 7 && (
              <div
                className='fixDifficulty'
                style={{
                  backgroundColor: `var(--color-dif-${game.strength})`,
                  gridRow: '3',
                  gridColumn: `${3 + i}`,
                  color: `${
                    game.strength === 1 || game.strength === 3
                      ? 'black'
                      : 'white'
                  }`,
                }}
              >
                <div className='opp-img'>
                  <img src={game.logo} alt={game.name} title={game.name} />
                  {game.location}
                </div>
              </div>
            )
          );
        })}
        {mTelAviv.map((game, i) => {
          return (
            i < 7 && (
              <div
                className='fixDifficulty'
                style={{
                  backgroundColor: `var(--color-dif-${game.strength})`,
                  gridRow: '4',
                  gridColumn: `${3 + i}`,
                  color: `${
                    game.strength === 1 || game.strength === 3
                      ? 'black'
                      : 'white'
                  }`,
                }}
              >
                <div className='opp-img'>
                  <img src={game.logo} alt={game.name} title={game.name} />
                  {game.location}
                </div>
              </div>
            )
          );
        })}
        {mNetanya.map((game, i) => {
          return (
            i < 7 && (
              <div
                className='fixDifficulty'
                style={{
                  backgroundColor: `var(--color-dif-${game.strength})`,
                  gridRow: '5',
                  gridColumn: `${3 + i}`,
                  color: `${
                    game.strength === 1 || game.strength === 3
                      ? 'black'
                      : 'white'
                  }`,
                }}
              >
                <div className='opp-img'>
                  <img src={game.logo} alt={game.name} title={game.name} />
                  {game.location}
                </div>
              </div>
            )
          );
        })}
        {hTelAviv.map((game, i) => {
          return (
            i < 7 && (
              <div
                className='fixDifficulty'
                style={{
                  backgroundColor: `var(--color-dif-${game.strength})`,
                  gridRow: '6',
                  gridColumn: `${3 + i}`,
                  color: `${
                    game.strength === 1 || game.strength === 3
                      ? 'black'
                      : 'white'
                  }`,
                }}
              >
                <div className='opp-img'>
                  <img src={game.logo} alt={game.name} title={game.name} />
                  {game.location}
                </div>
              </div>
            )
          );
        })}
        {bSakhnin.map((game, i) => {
          return (
            i < 7 && (
              <div
                className='fixDifficulty'
                style={{
                  backgroundColor: `var(--color-dif-${game.strength})`,
                  gridRow: '7',
                  gridColumn: `${3 + i}`,
                  color: `${
                    game.strength === 1 || game.strength === 3
                      ? 'black'
                      : 'white'
                  }`,
                }}
              >
                <div className='opp-img'>
                  <img src={game.logo} alt={game.name} title={game.name} />
                  {game.location}
                </div>
              </div>
            )
          );
        })}
        {hKiryatShemona.map((game, i) => {
          return (
            i < 7 && (
              <div
                className='fixDifficulty'
                style={{
                  backgroundColor: `var(--color-dif-${game.strength})`,
                  gridRow: '8',
                  gridColumn: `${3 + i}`,
                  color: `${
                    game.strength === 1 || game.strength === 3
                      ? 'black'
                      : 'white'
                  }`,
                }}
              >
                <div className='opp-img'>
                  <img src={game.logo} alt={game.name} title={game.name} />
                  {game.location}
                </div>
              </div>
            )
          );
        })}
        {hHadera.map((game, i) => {
          return (
            i < 7 && (
              <div
                className='fixDifficulty'
                style={{
                  backgroundColor: `var(--color-dif-${game.strength})`,
                  gridRow: '9',
                  gridColumn: `${3 + i}`,
                  color: `${
                    game.strength === 1 || game.strength === 3
                      ? 'black'
                      : 'white'
                  }`,
                }}
              >
                <div className='opp-img'>
                  <img src={game.logo} alt={game.name} title={game.name} />
                  {game.location}
                </div>
              </div>
            )
          );
        })}
        {msAshdod.map((game, i) => {
          return (
            i < 7 && (
              <div
                className='fixDifficulty'
                style={{
                  backgroundColor: `var(--color-dif-${game.strength})`,
                  gridRow: '10',
                  gridColumn: `${3 + i}`,
                  color: `${
                    game.strength === 1 || game.strength === 3
                      ? 'black'
                      : 'white'
                  }`,
                }}
              >
                <div className='opp-img'>
                  <img src={game.logo} alt={game.name} title={game.name} />
                  {game.location}
                </div>
              </div>
            )
          );
        })}
        {bJerusalem.map((game, i) => {
          return (
            i < 7 && (
              <div
                className='fixDifficulty'
                style={{
                  backgroundColor: `var(--color-dif-${game.strength})`,
                  gridRow: '11',
                  gridColumn: `${3 + i}`,
                  color: `${
                    game.strength === 1 || game.strength === 3
                      ? 'black'
                      : 'white'
                  }`,
                }}
              >
                <div className='opp-img'>
                  <img src={game.logo} alt={game.name} title={game.name} />
                  {game.location}
                </div>
              </div>
            )
          );
        })}
        {hHaifa.map((game, i) => {
          return (
            i < 7 && (
              <div
                className='fixDifficulty'
                style={{
                  backgroundColor: `var(--color-dif-${game.strength})`,
                  gridRow: '12',
                  gridColumn: `${3 + i}`,
                  color: `${
                    game.strength === 1 || game.strength === 3
                      ? 'black'
                      : 'white'
                  }`,
                }}
              >
                <div className='opp-img'>
                  <img src={game.logo} alt={game.name} title={game.name} />
                  {game.location}
                </div>
              </div>
            )
          );
        })}
        {hJerusalem.map((game, i) => {
          return (
            i < 7 && (
              <div
                className='fixDifficulty'
                style={{
                  backgroundColor: `var(--color-dif-${game.strength})`,
                  gridRow: '13',
                  gridColumn: `${3 + i}`,
                  color: `${
                    game.strength === 1 || game.strength === 3
                      ? 'black'
                      : 'white'
                  }`,
                }}
              >
                <div className='opp-img'>
                  <img src={game.logo} alt={game.name} title={game.name} />
                  {game.location}
                </div>
              </div>
            )
          );
        })}
        {mbReina.map((game, i) => {
          return (
            i < 7 && (
              <div
                className='fixDifficulty'
                style={{
                  backgroundColor: `var(--color-dif-${game.strength})`,
                  gridRow: '14',
                  gridColumn: `${3 + i}`,
                  color: `${
                    game.strength === 1 || game.strength === 3
                      ? 'black'
                      : 'white'
                  }`,
                }}
              >
                <div className='opp-img'>
                  <img src={game.logo} alt={game.name} title={game.name} />
                  {game.location}
                </div>
              </div>
            )
          );
        })}
        {sNesTziyona.map((game, i) => {
          return (
            i < 7 && (
              <div
                className='fixDifficulty'
                style={{
                  backgroundColor: `var(--color-dif-${game.strength})`,
                  gridRow: '15',
                  gridColumn: `${3 + i}`,
                  color: `${
                    game.strength === 1 || game.strength === 3
                      ? 'black'
                      : 'white'
                  }`,
                }}
              >
                <div className='opp-img'>
                  <img src={game.logo} alt={game.name} title={game.name} />
                  {game.location}
                </div>
              </div>
            )
          );
        })}
      </div>
    </>
  );
};

export default Fixtures;
