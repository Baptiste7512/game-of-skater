import "./css/GridPlayer.css";
import "./css/Wrapper.css";

import React from "react";
import { Link } from "react-router-dom";

function GridPlayer({players, setPlayer}) {
  return (
    <div className="grid-player">
      {players.map((player, index) => (
        <div key={index} className={`player ${index === setPlayer ? "active" : ""}`}>
          {player}
        </div>
      ))}
      <div className="button-start">
        <Link to ="/game">
          <button>Lets's go</button>
        </Link>
      </div>
    </div>

  );
}

export default GridPlayer;
