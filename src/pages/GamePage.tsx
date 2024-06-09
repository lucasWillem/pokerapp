import { memo, FC } from "react";
import { ScreenTemplate } from "../components/templates/ScreenTemplate";
import { PokerGame } from "../components/containers/PokerGame";

const GamePage: FC = () => {
  return (
    <ScreenTemplate>
      <PokerGame />
    </ScreenTemplate>
  );
};

export default memo(GamePage);
