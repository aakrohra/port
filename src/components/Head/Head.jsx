import './Head.css';

import React, { useState } from 'react';

import headshot from '../../assets/headshot.jpg';

function Head() {
  const [pfp, setPfp] = useState(false);
  function pfpClick() {
    setPfp(prev => !prev);
  }
  return (
    <div>
      <div className='all'>
        <span className="header">Sensory Memory </span>
        <span className="subheader"><a className="clickabletext" onClick={pfpClick}>Aakaash Rohra</a>'s Digital Portfolio </span>
      </div>
      {pfp && <div className="headshot"><img src={headshot}/></div>}
    </div>
  );
}

export default Head;