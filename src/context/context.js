import React, { useState, useEffect, createContext } from 'react';
import teams from './data/teams';
const API_ENDPOINT = `https://tom.tovel.co.il/mtn.php?key=${process.env.REACT_APP_FANTASY_API_KEY}&type=`;
const PlayersContext = createContext();

const PlayersProvider = ({ children }) => {
  const [players, setPlayers] = useState([]);
  const [rankings, setRankings] = useState([]);
  const [leaders, setLeaders] = useState([]);
  const [playerStat, setPlayerStat] = useState([]);
  const [current, setCurrent] = useState(null);
  // Loading
  const [isLoading, setIsLoading] = useState(false);
  // error
  const [error, setError] = useState({ show: false, msg: '' });

  const fetchPlayers = async (type, id = '') => {
    setIsLoading(true);
    const res = await fetch(`${API_ENDPOINT}${type}${id}`);
    if (!res.ok) {
      throw new Error(`HTTP error! status: ${res.status}`);
    }
    const data = await res.json();
    // const data = JSON.parse(dataObj);

    if (type === 'players') {
      const topPlayers = JSON.parse(data)
        .sort((a, b) => {
          return b.pointsValue - a.pointsValue;
        })
        .slice(0, 10);
      setIsLoading(false);
      setPlayers(JSON.parse(data));
      setLeaders(topPlayers);
    }
    if (type === 'rankingtable') {
      console.log(data);
      setRankings(data.ranks);
    }
    if (type === 'getplayerstat&id=') {
      setIsLoading(false);
      setPlayerStat(data.otherTeam);
      return data.otherTeam;
    }

    // )
  };
  useEffect(() => {
    fetchPlayers('players');
    fetchPlayers('rankingtable');
  }, []);

  return (
    <PlayersContext.Provider
      value={{
        players,
        leaders,
        rankings,
        teams,
        playerStat,
        fetchPlayers,
        current,
        setCurrent,
        isLoading,
        setIsLoading,
      }}
    >
      {children}
    </PlayersContext.Provider>
  );
};

export { PlayersProvider, PlayersContext };
