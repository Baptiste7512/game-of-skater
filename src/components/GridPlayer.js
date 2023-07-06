import "./css/GridPlayer.css";
import "./css/Wrapper.css";

import React from "react";

function GridPlayer({players}) {

  return (
    <div className="grid-player">
      {/* {players.map((player, index) => (
        <div key={index} className={`player ${index === setPlayer ? "active" : ""}`}>
          {player}
        </div>
      ))} */}
      {players.map((player, index) =>
        <div key={index} className="player">{player.name}</div>
      )}
    </div>

  );
}

export default GridPlayer;
