import React, { memo, useCallback } from "react";

import ActionButton from "../../../global/Components/ActionButton";
import PlayerContainer from "../PlayerContainer";
import GameStarter from "../../../global/play";
import { useStoreActions, useStoreState } from "../../../redux";

import "./GameContainer.css";

const GameContainer = function () {
  const storeHands = useStoreActions(
    (actions) => actions.playersHands.storePokerHands
  );

  const pokerHands = useStoreState((state) => state.playersHands.pokerHands);

  const startGame = useCallback(() => {
    const hands = GameStarter.getHands({ noOfPlayers: 10 });
    storeHands(hands);
  }, [storeHands]);

  return (
    <div className="GameContainer">
      <PlayerContainer pokerHands={pokerHands} />
      {pokerHands.length === 0 && (
        <ActionButton buttonText="Start game" action={startGame} />
      )}
    </div>
  );
};

export default memo(GameContainer);
