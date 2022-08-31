import React, { useContext } from 'react';
import { MdOutlineSdCardAlert } from 'react-icons/md';
import { PlayersContext } from '../context/context';
const Suspended = () => {
  const { players } = useContext(PlayersContext);
  const suspended = players.filter((player) => player.isSuspended);

  return (
    <>
      <h1 className='headingSus'>שחקנים מושעים</h1>
      <div className='stat-container suspended'>
        <div className='title'>קבוצה</div>
        <div className='title'>שחקן</div>
        <div className='title'></div>
        <div className='underline'></div>
        {suspended.map((player, i) => {
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
                  <MdOutlineSdCardAlert size={25} className='icon' />
                </div>
              </>
            );
        })}
      </div>
    </>
  );
};

export default Suspended;
