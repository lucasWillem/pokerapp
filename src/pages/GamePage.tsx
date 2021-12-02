import React, { memo } from "react";
import ScreenContainer from "../global/Components/ScreenContainer";
import GameContainer from "../global/Components/GameContainer";

const GamePage = function () {
  return (
    <ScreenContainer>
      <GameContainer />
    </ScreenContainer>
  );
};

export default memo(GamePage);
