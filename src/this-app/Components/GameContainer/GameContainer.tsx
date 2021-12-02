import React, { memo, useCallback } from "react";
import ActionButton from "../../../global/Components/ActionButton";
import PlayerContainer from "../PlayerContainer";
import GameStarter from "../../../global/play";

import "./GameContainer.css";

const GameContainer = function () {
  const startGame = useCallback(() => {
    const hands = GameStarter.getHands({ noOfPlayers: 2 });
    console.log(hands);
  }, []);

  return (
    <div className="GameContainer">
      <PlayerContainer />
      <ActionButton buttonText="Start game" action={startGame} />
    </div>
  );
};

export default memo(GameContainer);
