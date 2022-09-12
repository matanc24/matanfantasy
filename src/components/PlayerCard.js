import React, { useContext } from 'react';
import { PlayersContext } from '../context/context';
import Loading from './Loading';
const PlayerCard = () => {
  const { leaders, teams, playerStat, setPlayerStat, playerGw, handleChange } =
    useContext(PlayersContext);
  // console.log(playerStat);
  // console.log(leaders);
  // console.log(teams);
  const playerTotalGames = playerStat.opens + playerStat.subs_out;
  console.log(playerGw);
  return (
    <>
      <div class='card' id='card'>
        {leaders.map((leader) => {
          const indexTeam = teams.findIndex(
            (team) => team.val === leader.teamNum
          );

          if (leader.id === playerStat.id) {
            return (
              <>
                <div
                  class='card__content'
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
                    class='card__close'
                    onClick={() => {
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
                  <div class='card__title'>
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
                    <div className='head goals'>
                      <h4>שערים</h4>
                      <span>
                        {(playerStat.goals / playerTotalGames).toFixed(2)}
                      </span>
                    </div>
                    <div className='head assists'>
                      <h4>בישולים</h4>
                      <span>
                        {(playerStat.assists / playerTotalGames).toFixed(2)}
                      </span>
                    </div>
                    <div className='head y-cards'>
                      <h4>צהובים</h4>
                      <span>
                        {(playerStat.yellows / playerTotalGames).toFixed(2)}
                      </span>
                    </div>
                    <div className='head r-cards'>
                      <h4>אדומים</h4>
                      <span>
                        {(playerStat.reds / playerTotalGames).toFixed(2)}
                      </span>
                    </div>
                    <div className='head start'>
                      <h4>הרכב</h4>
                      <span>
                        {Math.round(
                          (playerStat.opens / playerTotalGames) * 100
                        )}
                        %
                      </span>
                    </div>
                    <div className='head sub-out'>
                      <h4>הוחלף</h4>
                      <span>
                        {Math.round(
                          (playerStat.subs_in / playerTotalGames) * 100
                        )}
                        %
                      </span>
                    </div>
                    <div className='head sub-in'>
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
                    <h3>למחזור</h3>
                    <select name='gw' className='gw' onChange={handleChange}>
                      <option value='0'>0</option>
                      <option value='1'>1</option>
                      <option value='2'>2</option>
                      <option value='3'>3</option>
                      <option value='4'>4</option>
                    </select>
                    <div className='head points'>
                      <h4>נקודות</h4>
                      <span>
                        {(playerGw. / playerTotalGames).toFixed(2)}
                      </span>
                    </div>
                  </div>
                </div>
              </>
            );
          }
        })}
      </div>
    </>
  );
};

export default PlayerCard;
