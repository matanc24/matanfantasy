import React, { useState, useEffect, createContext } from 'react';
import teams from './data/teams';
const API_ENDPOINT = `https://tom.tovel.co.il/mtn.php?key=${process.env.REACT_APP_FANTASY_API_KEY}&type=`;
const PlayersContext = createContext();

const PlayersProvider = ({ children }) => {
  const [players, setPlayers] = useState([]);
  const [rankings, setRankings] = useState([]);
  const [leaders, setLeaders] = useState([]);
  const [playerStat, setPlayerStat] = useState({});
  const [currentGw, setCurrentGw] = useState(null);
  const [playerGw, setPlayerGw] = useState([]);
  // Loading
  const [isLoading, setIsLoading] = useState(false);
  // Error
  const [error, setError] = useState({ show: false, msg: '' });

  const fetchPlayers = async (type, id = '') => {
    setIsLoading(true);
    const res = await fetch(`${API_ENDPOINT}${type}${id}`);
    if (!res.ok) {
      throw new Error(`HTTP error! status: ${res.status}`);
    }
    const data = await res.json();

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
    if (type === 'games') {
      setCurrentGw(data.cycleNum);
    }
    if (type === 'rankingtable') {
      setIsLoading(false);
      setRankings(data.ranks);
    }
    if (type === 'getplayerstat&id=') {
      console.log('check');
      setIsLoading(false);
      setPlayerStat({ id, ...data });
    }
    if (type.length > 20) {
      setPlayerGw(data);
    }
  };
  const handleChange = (e) => {
    const value = e.target.value;
    console.log(value, playerStat.id);
    fetchPlayers(`getplayerstat&id=${playerStat.id}&roundNum=`, value);
  };
  useEffect(() => {
    fetchPlayers('players');
    fetchPlayers('games');
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
        setPlayerStat,
        fetchPlayers,
        handleChange,
        currentGw,
        setCurrentGw,
        playerGw,
        isLoading,
        setIsLoading,
      }}
    >
      {children}
    </PlayersContext.Provider>
  );
};

export { PlayersProvider, PlayersContext };
