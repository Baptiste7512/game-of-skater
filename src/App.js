import Wrapper from "./components/Wrapper";
import Screen from "./components/Screen";
import ButtonBox from "./components/ButtonBox";
import Button from "./components/Button";
import { useState } from "react";
import React from "react";

const App = () => {

  const [activeTrick, setActiveTrick, randomTrick] = useState(0);

  return (
    <Wrapper>
      <Screen activeTrick={activeTrick}
              setActiveTrick={setActiveTrick}>
      </Screen>
      <ButtonBox>
          <Button setActiveTrick={setActiveTrick}
                  randomTrick={randomTrick}/>
      </ButtonBox>
    </Wrapper>
  );
};

export default App;
