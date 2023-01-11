import "./css/Button.css";
import { trickList } from "../datas/trickList";

function Button({randomTrick, setActiveTrick}){

  function randomTrick(){
    const len = trickList.length;
    setActiveTrick(Math.floor(Math.random() * len));
  };

  return(
    <button onClick={randomTrick}> Next trick </button>
  );
};

export default Button;
