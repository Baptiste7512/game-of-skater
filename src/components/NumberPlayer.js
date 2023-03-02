import "./css/NumberPlayer.css";
import "./css/Wrapper.css";
import React from "react";

class NumberPlayer extends React.Component {
  Players = [];

  state = {
    playerName: ""
  }

  handleSubmit = (e) => {
    e.preventDefault();
    // créer un joueur avec le nom saisi ici
    /* console.log("Joueur ajouter: ", this.state.playerName); */
    // ajouter le nouveau joueur au tableau Players
    this.Players.push(this.state.playerName)
    console.log(this.Players)
    // réinitialiser le nom du joueur dans le state pour effacer l'input du formulaire
    this.setState({playerName: ""});
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
        {/*
          A faire dans un autre Module autre fichier Js
        <div className="Players">
           Pour chaque joueurs il faut une case soit itéré dessus afin de construire la div
          { for (let i = 0; i < Players.length) {
            const element = array[i];
            i++;
          }}
        </div> */}
      </form>
    );
  }
}

export default NumberPlayer
