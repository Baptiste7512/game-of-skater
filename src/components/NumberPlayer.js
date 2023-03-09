import "./css/NumberPlayer.css";
import "./css/Wrapper.css";
import React from "react";


class NumberPlayer extends React.Component {


  constructor(props) {
    super(props);
    this.Players = [];
    this.state = {
      playerName: ""
    };
  }

  handleSubmit = (e) => {
    e.preventDefault();

    /* ajouter le nouveau joueur au tableau Players */
    this.Players.push(this.state.playerName);
    /* console.log(this.Players); */

    const newPlayers = [...this.Players];
    if (newPlayers.length <= 6) {
      this.props.setPlayers(newPlayers);
    /* console.log(newPlayers); */
    this.setState({
      playerName: ""
    });
    } else {
      alert("t'est un ouff bg");
    }


    // réinitialiser le nom du joueur dans le state pour effacer l'input du formulaire
    /* this.setState({playerName: ""}); */
}

  handleChange = (e) => {
    this.setState({playerName: e.target.value});
  }

  render() {
    return (

      <form onSubmit={this.handleSubmit}>
        <div className="name">
          Nom skateur
        </div>
        <div className="input">
          <input type="text"
                 className="input-text"
                 value={this.state.playerName}
                 onChange={this.handleChange} />
          <input type="submit"
                 className='input-button'
                 value="Confirme" />
        </div>
      </form>
    );
  }
}

export default NumberPlayer;
