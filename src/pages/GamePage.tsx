import React, { memo, FC } from "react";
import { ScreenWrapper } from "../components/wrappers/ScreenWrapper";
import GameContainer from "../app/Components/GameContainer";

const GamePage: FC = () => {
  return (
    <ScreenWrapper>
      <GameContainer />
    </ScreenWrapper>
  );
};

export default memo(GamePage);
