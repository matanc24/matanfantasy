import React, { useContext } from 'react';
import { PlayersContext } from '../context/context';
import Loading from './Loading';
const PlayerCard = () => {
  const {
    players,
    leaders,
    teams,
    playerStat,
    fetchPlayers,
    isLoading,
    setIsLoading,
  } = useContext(PlayersContext);
  console.log(playerStat);
  console.log(leaders);
  console.log(teams);

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
                  <a href='#' class='card__close'>
                    &times;
                  </a>
                  <div class='card__title'>
                    <h2 style={{ color: `${teams[indexTeam].colors[1]}` }}>
                      {leader.id === playerStat.id ? leader.name : ''}
                    </h2>
                  </div>
                  <div className='card__background crest'>
                    <img src={leader.teamFlagPic} alt={leader.teamName} />
                    {/* <img src={leader.shirtPicture} alt={leader.teamName} /> */}
                  </div>
                  <div className='card__underline'></div>
                  <div
                    className='card__value'
                    style={{
                      color: `${teams[indexTeam].colors[1]}`,
                    }}
                  >
                    {leader.marketValue / 1000000} מיליון
                  </div>
                  <div
                    className='card__points'
                    style={{
                      color: `${teams[indexTeam].colors[1]}`,
                    }}
                  >
                    {leader.pointsValue} נקודות
                  </div>
                </div>
              </>
            );
          }
        })}

        <div className='card__stat-container'></div>
      </div>
    </>
  );
};

export default PlayerCard;
