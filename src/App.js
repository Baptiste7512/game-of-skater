import React from "react";
import { useState } from "react";
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Wrapper from "./components/Wrapper";
import Screen from "./components/Screen";
import ButtonBox from "./components/ButtonBox";
import Button from "./components/Button";
import NumberPlayer from "./components/NumberPlayer";
import GridPlayer from "./components/GridPlayer";
import ButtonStart from "./components/ButtonStart";

const App = () => {

  const [activeTrick, setActiveTrick, randomTrick] = useState(0);
  const [setActivePlayer] = useState(0);
  const [players, setPlayers] = useState([]);

  return (
      <Router>
        <Routes>
          <Route path="/" element={
            <Wrapper>
             <NumberPlayer setPlayers={setPlayers} />
             <GridPlayer players={players} setPlayer={setActivePlayer} />
             <ButtonStart />
            </Wrapper>
          }>
          </Route>

          <Route path="/game" element={
            <Wrapper>
              <Screen activeTrick={activeTrick} setActiveTrick={setActiveTrick}/>
              <ButtonBox>
              <Button setActiveTrick={setActiveTrick} randomTrick={randomTrick} players={players} />
              </ButtonBox>
              {console.log(players)}
            </Wrapper>
          }>
          </Route>
        </Routes>
      </Router>
  );
};


export default App;
