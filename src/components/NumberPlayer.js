import "./css/NumberPlayer.css";
import "./css/Wrapper.css";
import React from "react";

class NumberPlayer extends React.Component {
  constructor(props) {
    super(props);
    this.Players = [];
    this.state = {
      playerName: "",
      playerId: 0,
      playerLifes: 5
    };
  }

  handleChange = (event) => {
    this.setState({ playerName: event.target.value });
  };

  handleSubmit = (event) => {
    event.preventDefault();

    /* Ajouter le nouveau joueur au tableau Players */
    const { playerName, playerId, playerLifes } = this.state;
    const newPlayer = {
      id: playerId,
      name: playerName,
      lifes: playerLifes
    };

    this.Players.push(newPlayer);

    /* Afficher tous les joueurs dans la console */


    const newPlayers = [...this.Players];
    if (newPlayers.length <= 6) {
      this.props.setPlayers(newPlayers);
      this.setState({
        playerName: "",
        playerId: playerId + 1,
        playerLifes: 5
      });
    } else {
      alert("Tu as atteint le nombre maximum de joueurs !");
    }
  };

  render() {
    const { playerName } = this.state;
    return (
      <form onSubmit={this.handleSubmit}>
        <div className="name">Nom skateur</div>
        <div className="input">
          <input
            type="text"
            className="input-text"
            value={playerName}
            onChange={this.handleChange}
          />
          <input type="submit" className="input-button" value="Confirme" />
        </div>
      </form>
    );
  }
}

export default NumberPlayer
