import React, { memo, useCallback, useState, useEffect } from "react";

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
      <PlayerContainer pokerHands={pokerHands} />
      {pokerHands.length === 0 && (
        <div
          style={{
            maxHeight: 200,
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
          }}
        >
          <div style={{ marginRight: 20 }}>
            <DropDown
              title="Select Number Of Players"
              menuItems={[2, 3, 4, 5, 6]}
              makeSelection={storeNumberOfPlayers}
              activeItem={selection}
            />
          </div>
          <ActionButton
            disabled={selection === 0 ? true : false}
            buttonText="Start game"
            action={startGame}
          />
        </div>
      )}
    </div>
  );
};

export default memo(GameContainer);
