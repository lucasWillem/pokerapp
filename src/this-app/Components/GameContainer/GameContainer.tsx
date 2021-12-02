import React, { memo } from "react";
import ActionButton from "../../../global/Components/ActionButton";
import PlayerContainer from "../PlayerContainer";

import "./GameContainer.css";

const GameContainer = function () {
  return (
    <div className="GameContainer">
      <PlayerContainer />
      <ActionButton buttonText="Start game" />
    </div>
  );
};

export default memo(GameContainer);
