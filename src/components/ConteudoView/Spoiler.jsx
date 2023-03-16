import React, { useState } from 'react';
import './Spoiler.scss';

function Spoiler(props) {
  const [showSpoiler, setShowSpoiler] = useState(false);

  return (
    <div className="spoilers">
      <button onClick={() => setShowSpoiler(!showSpoiler)}>
        {showSpoiler ? 'Esconder' : `${props.name}`}
      </button>
      {showSpoiler && <div className="spoilers__text">{props.text}</div>}
    </div>
  );
}

export default Spoiler;