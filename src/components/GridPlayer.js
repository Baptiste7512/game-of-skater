import "./css/GridPlayer.css";
import "./css/Wrapper.css";

import React from "react";

function GridPlayer({players, setPlayer}) {
  
  return (
    <div className="grid-player">
      {players.map((player, index) => (
        <div key={index} className={`player ${index === setPlayer ? "active" : ""}`}>
          {player}
        </div>
      ))}
    </div>

  );
}

export default GridPlayer;
