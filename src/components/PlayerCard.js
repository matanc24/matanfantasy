import React, { useContext } from 'react';
import { PlayersContext } from '../context/context';
import { TiWarning } from 'react-icons/ti';
import Loading from './Loading';
const PlayerCard = () => {
  const {
    leaders,
    teams,
    playerStat,
    setPlayerStat,
    playerGw,
    setPlayerGw,
    handleChange,
    currentGw,
  } = useContext(PlayersContext);

  const playerTotalGames = playerStat.opens + playerStat.subs_out;
  const gwNumbersArr = new Array(currentGw);
  gwNumbersArr.fill(0, 0, currentGw);

  return (
    <>
      {leaders.map((leader, i) => {
        const indexTeam = teams.findIndex(
          (team) => team.val === leader.teamNum
        );

        if (leader.id === playerStat.id) {
          return (
            <React.Fragment key={i}>
              <div
                className='card__content'
                style={{
                  backgroundColor: `${teams[indexTeam].colors[0]}`,
                }}
              >
                <img
                  src={`${teams[indexTeam].teamImg}`}
                  alt={leader.teamName}
                  className='card__background-img'
                />
                <a
                  href='#'
                  className='card__close'
                  id='close-card'
                  onClick={() => {
                    setPlayerGw([]);
                    setPlayerStat({});
                  }}
                >
                  &times;
                </a>
                <div className='card__background crest'>
                  <img src={leader.teamFlagPic} alt={leader.teamName} />
                </div>
                <div className='card__background shirt'>
                  <img src={leader.shirtPicture} alt={leader.teamName} />
                </div>
                <div className='card__title'>
                  <h2 style={{ color: `${teams[indexTeam].colors[1]}` }}>
                    {leader.id === playerStat.id ? leader.name : ''}
                  </h2>
                </div>
                <div
                  className='card__info'
                  style={{ color: `${teams[indexTeam].colors[1]}` }}
                >
                  {leader.teamName} -{' '}
                  {leader.type === 'a'
                    ? ' חלוץ'
                    : leader.type === 'm'
                    ? ' קשר'
                    : leader.type === 'd'
                    ? ' מגן'
                    : leader.type === 'g'
                    ? ' שוער'
                    : ''}
                  <div
                    className='vl'
                    style={{
                      backgroundColor: `${teams[indexTeam].colors[1]}`,
                    }}
                  >
                    {' '}
                  </div>
                  {leader.marketValue / 1000000} מיליון
                </div>

                <div className='card__stat total'>
                  <h3>סך הכל</h3>
                  <div className='head points'>
                    <h4>נקודות</h4>
                    <span>{leader.pointsValue}</span>
                  </div>
                  <div className='head goals'>
                    <h4>שערים</h4>
                    <span>{playerStat.goals}</span>
                  </div>
                  <div className='head assists'>
                    <h4>בישולים</h4>
                    <span>{playerStat.assists}</span>
                  </div>
                  <div className='head y-cards'>
                    <h4>צהובים</h4>
                    <span>{playerStat.yellows}</span>
                  </div>
                  <div className='head r-cards'>
                    <h4>אדומים</h4>
                    <span>{playerStat.reds}</span>
                  </div>
                  <div className='head start'>
                    <h4>הרכב</h4>
                    <span>{playerStat.opens}</span>
                  </div>
                  <div className='head sub-out'>
                    <h4>הוחלף</h4>
                    <span>{playerStat.subs_in}</span>
                  </div>
                  <div className='head sub-in'>
                    <h4>החליף</h4>
                    <span>{playerStat.subs_out}</span>
                  </div>
                </div>
                <div className='card__stat average'>
                  <h3>ממוצע למשחק</h3>
                  <div className='head points'>
                    <h4>נקודות</h4>
                    <span>
                      {(leader.pointsValue / playerTotalGames).toFixed(2)}
                    </span>
                  </div>
                  <div className='head'>
                    <h4>שערים</h4>
                    <span>
                      {(playerStat.goals / playerTotalGames).toFixed(2)}
                    </span>
                  </div>
                  <div className='head'>
                    <h4>בישולים</h4>
                    <span>
                      {(playerStat.assists / playerTotalGames).toFixed(2)}
                    </span>
                  </div>
                  <div className='head'>
                    <h4>צהובים</h4>
                    <span>
                      {(playerStat.yellows / playerTotalGames).toFixed(2)}
                    </span>
                  </div>
                  <div className='head'>
                    <h4>אדומים</h4>
                    <span>
                      {(playerStat.reds / playerTotalGames).toFixed(2)}
                    </span>
                  </div>
                  <div className='head'>
                    <h4>הרכב</h4>
                    <span>
                      {Math.round((playerStat.opens / playerTotalGames) * 100)}%
                    </span>
                  </div>
                  <div className='head'>
                    <h4>הוחלף</h4>
                    <span>
                      {Math.round(
                        (playerStat.subs_in / playerTotalGames) * 100
                      )}
                      %
                    </span>
                  </div>
                  <div className='head'>
                    <h4>החליף</h4>
                    <span>
                      {Math.round(
                        (playerStat.subs_out / playerTotalGames) * 100
                      )}
                      %
                    </span>
                  </div>
                </div>
                <div className='card__stat gameWeek'>
                  <h3>מחזור</h3>
                  <select
                    name='gw'
                    className='gwOptions'
                    onChange={handleChange}
                  >
                    <option value='0'>בחר</option>
                    {gwNumbersArr.map((item, i) => {
                      return (
                        <option value={i + 1} key={i}>
                          {i + 1}
                        </option>
                      );
                    })}
                  </select>
                  <div className='head opponent'>
                    <h4>יריבה</h4>
                    <span>{playerGw.otherTeam}</span>
                  </div>
                  {playerGw.roundNum === playerGw.maxRoundNum &&
                  playerGw.roundNum > 0 ? (
                    <div className='head played'>
                      <h4>טרם שוחק</h4>
                      <span>
                        <TiWarning size={'3rem'} />
                      </span>
                    </div>
                  ) : (
                    ''
                  )}
                  <div className='head'>
                    <h4>שערים</h4>
                    <span>{playerGw.goals_r}</span>
                  </div>
                  <div className='head'>
                    <h4>בישולים</h4>
                    <span>{playerGw.assists_r}</span>
                  </div>
                  <div className='head'>
                    <h4>הרכב</h4>
                    <span>
                      {playerGw.opens_r === 1
                        ? 'כן'
                        : playerGw.opens_r === 0
                        ? 'לא'
                        : ''}
                    </span>
                  </div>
                  <div className='head'>
                    <h4>צהוב</h4>
                    <span>
                      {playerGw.yellows_r === 1
                        ? 'כן'
                        : playerGw.yellows_r === 0
                        ? 'לא'
                        : ''}
                    </span>
                  </div>
                  <div className='head'>
                    <h4>אדום</h4>
                    <span>
                      {playerGw.reds_r === 1
                        ? 'כן'
                        : playerGw.reds_r === 0
                        ? 'לא'
                        : ''}
                    </span>
                  </div>
                  <div className='head'>
                    <h4>נבחר ע"י</h4>
                    <span>{playerGw.most_popular}</span>
                  </div>
                </div>
              </div>
            </React.Fragment>
          );
        }
      })}
    </>
  );
};
// window.onload

export default PlayerCard;
