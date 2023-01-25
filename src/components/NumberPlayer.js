import "./css/NumberPlayer.css";
import "./css/Wrapper.css";
import React from "react";

class NumberPlayer extends React.Component {
  state = {
    playerName: ""
  }

  handleSubmit = (e) => {
    e.preventDefault();
    // créer un joueur avec le nom saisi ici
    console.log("Player created with name: ", this.state.playerName);
  }

  handleChange = (e) => {
    this.setState({playerName: e.target.value});
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Prénom:
          <input type="text" value={this.state.playerName} onChange={this.handleChange} />
        </label>
        <input type="submit" value="Créer joueur" />
      </form>
    );
  }
}

export default NumberPlayer
