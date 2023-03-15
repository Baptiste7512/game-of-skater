import React from "react";
import { Link } from "react-router-dom";

import "./css/GridPlayer.css";
import "./css/Wrapper.css";

function ButtonStart() {
  return (
  <div className="button-start">
    <Link to ="/game">
      <button>Lets's go</button>
    </Link>
  </div>
  )
}

export default ButtonStart
