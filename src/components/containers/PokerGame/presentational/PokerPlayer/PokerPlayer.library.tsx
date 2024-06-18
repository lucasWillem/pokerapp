import { FC, memo } from "react";

import { StyledPokerPlayer, PlayerName } from "./PokerPlayer.styles";
import { useSpring } from "react-spring";
import type { Hand } from "../../PokerGame.types";

type PokerPlayerProps = {
  name: string;
  hand: Hand;
  renderHand: ({ hand, index }: { hand: Hand; index: number }) => JSX.Element;
  index: number;
  shouldRenderCard: boolean;
};

const PokerPlayer: FC<PokerPlayerProps> = ({
  name,
  hand,
  renderHand,
  index,
  shouldRenderCard,
}) => {
  const fade = useSpring({
    opacity: shouldRenderCard ? 1 : 0,
  });

  return (
    <StyledPokerPlayer style={fade} key={`${name}-${hand}-${index}`}>
      <PlayerName>{name}</PlayerName>
      {renderHand({ hand, index })}
    </StyledPokerPlayer>
  );
};

export default memo(PokerPlayer);
