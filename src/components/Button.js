import "./css/Button.css";
import { trickList } from "../datas/trickList";
import React, { useState } from 'react';


function Button({ randomTrick, setActiveTrick, players }) {

  function randomTrick(){
    const len = trickList.length;
    setActiveTrick(Math.floor(Math.random() * len));
  };

  function decrementLifes(player) {
    console.log("Players before update:", players);

    const updatedPlayers = players.map(p => {
      if (p.id === player.id) {
        return { ...p, lifes: p.lifes - 1 };
      }
      return p;
    });

    console.log("Updated players:", updatedPlayers);

    return updatedPlayers;
  }

  return (
    <div className="block-game">
      <button onClick={randomTrick} className="button-principal">Next trick</button>
      <p id="text-white">Who loose?</p>
      <div className="list-gamer">
        {players.map((player) => (
          <div key={player.id} className="name-gamer">
            <button className="button-principal" onClick={() => decrementLifes(player)}>
              {player.name}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Button;
