import React, { memo, useCallback, useState } from "react";

import { useStoreActions, useStoreState } from "../../../redux";

import ActionButton from "../../../global/Components/ActionButton";
import PlayerContainer from "../PlayerContainer";
import Game from "../../../global/game";
import DropDown from "../../../global/Components/DropDown";

import "./GameContainer.css";

const GameContainer = function () {
  const [selection, setSelection] = useState(0);
  const [winningMessage, setWinningMessage] = useState("");

  const storeHands = useStoreActions(
    (actions) => actions.playersHands.storePokerHands
  );

  const clearHands = useStoreActions(
    (actions) => actions.playersHands.clearPokerHands
  );

  const setAlertConfiguration = useStoreActions(
    (actions) => actions.alert.setAlertConfiguration
  );

  const pokerHands = useStoreState((state) => state.playersHands.pokerHands);

  const startGame = useCallback(() => {
    const hands = Game.getHands({ noOfPlayers: selection });
    storeHands(hands);
  }, [selection, storeHands]);

  const storeNumberOfPlayers = useCallback((menuItem) => {
    setSelection(menuItem);
  }, []);

  const handleDetermineWinner = useCallback(() => {
    const winnerMessage = Game.determineWinner(pokerHands);

    if (winnerMessage) {
      setAlertConfiguration({ isVisible: true, message: winnerMessage });
      setWinningMessage(winnerMessage);
    }
  }, [pokerHands, setAlertConfiguration]);

  const handleReplay = useCallback(() => {
    setAlertConfiguration({ isVisible: false, message: "" });
    clearHands([]);
    setSelection(0);
  }, [clearHands, setAlertConfiguration]);

  return (
    <div className="GameContainer">
      {pokerHands.length === 0 && (
        <div className="ComponentFlexWrapper">
          <div className="DropDownWrapper">
            <DropDown
              title="Select Number Of Players"
              menuItems={[2, 3, 4, 5, 6]}
              makeSelection={storeNumberOfPlayers}
              activeItem={selection}
            />
          </div>
          <ActionButton
            variant="outline-primary"
            disabled={selection === 0 ? true : false}
            buttonText="Start game"
            action={startGame}
          />
        </div>
      )}
      <div>
        <PlayerContainer pokerHands={pokerHands} />

        <div className="BottomActionButtons">
          {pokerHands.length > 0 && (
            <ActionButton
              variant="primary"
              buttonText="Determine Winner"
              action={handleDetermineWinner}
            />
          )}
          {pokerHands.length > 0 && winningMessage.length > 0 && (
            <ActionButton
              style={{ marginLeft: 10 }}
              variant="secondary"
              buttonText="Replay"
              action={handleReplay}
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default memo(GameContainer);
