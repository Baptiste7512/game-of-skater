import "./css/Screen.css";
import { trickList } from "../datas/trickList";

function Screen({activeTrick}) {

    return (
    <div className="screen">
      {trickList[activeTrick].name}
    </div>
  );
};

export default Screen;
