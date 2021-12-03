import React, { memo, useCallback, useState } from "react";

import { useStoreActions, useStoreState } from "../../../redux";

import ActionButton from "../../../global/Components/ActionButton";
import PlayerContainer from "../PlayerContainer";
import GameStarter from "../../../global/play";
import DropDown from "../../../global/Components/DropDown";

import "./GameContainer.css";

const GameContainer = function () {
  const [selection, setSelection] = useState(0);

  const storeHands = useStoreActions(
    (actions) => actions.playersHands.storePokerHands
  );

  const setAlertConfiguration = useStoreActions(
    (actions) => actions.alert.setAlertConfiguration
  );

  const pokerHands = useStoreState((state) => state.playersHands.pokerHands);

  const startGame = useCallback(() => {
    const hands = GameStarter.getHands({ noOfPlayers: selection });
    storeHands(hands);
  }, [selection, storeHands]);

  const storeNumberOfPlayers = useCallback((menuItem) => {
    setSelection(menuItem);
  }, []);

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
        {pokerHands.length > 0 && (
          <ActionButton
            style={{ margin: 50 }}
            variant="primary"
            buttonText="Determine Winner"
            action={() =>
              setAlertConfiguration({ isVisible: true, message: "test" })
            }
          />
        )}
      </div>
    </div>
  );
};

export default memo(GameContainer);
