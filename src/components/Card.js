import React from 'react';
import PlayerCard from './PlayerCard';
const Card = () => {
  return (
    <div className='card' id='card'>
      <PlayerCard />
    </div>
  );
};
window.addEventListener('click', (e) => {
  const cardContentEl = document.getElementById('card');
  if (cardContentEl === e.target) {
    const closeAnchor = document.getElementById('close-card');
    closeAnchor.click();
  }
});

export default Card;
