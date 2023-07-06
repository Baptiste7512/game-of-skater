import React from "react";
import { Link } from "react-router-dom";

import "./css/GridPlayer.css";
import "./css/Wrapper.css";

function ButtonStart() {
  return (
  <div className="block-button-principal">
    <Link to ="/game">
      <button className="button-principal">Let's go</button>
    </Link>
  </div>
  )
}

export default ButtonStart
