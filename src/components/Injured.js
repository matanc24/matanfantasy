import React, { useContext } from 'react';
import { MdOutlineMedicalServices } from 'react-icons/md';
import { PlayersContext } from '../context/context';
const Injured = () => {
  const { players } = useContext(PlayersContext);
  const injured = players.filter(
    (player) => player.isInjured && player.marketValue > 6000000
  );
  const price = injured.sort((a, b) => b.marketValue - a.marketValue);

  return (
    <>
      <h1 className='headingInj'>שחקנים פצועים</h1>
      <div className='stat-container injured'>
        <div className='title'>קבוצה</div>
        <div className='title'>שחקן</div>
        <div className='title'></div>
        <div className='underline'></div>
        {injured.map((player, i) => {
          if (i < 5)
            return (
              <>
                <div className='logoContainer'>
                  <img
                    src={player.teamFlagPic}
                    alt={player.teamName}
                    className='crest'
                  />
                </div>
                <div className='playerName'>{player.name}</div>
                <div className='totalPts'>
                  <MdOutlineMedicalServices size={25} className='icon' />
                </div>
              </>
            );
        })}
      </div>
    </>
  );
};

export default Injured;
