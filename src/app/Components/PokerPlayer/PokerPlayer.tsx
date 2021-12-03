import { memo } from "react";
import PokerHand from "../PokerHand/PokerHand";
import type { Hand } from "../../../global/types";

type Props = {
  pokerhand: Hand;
};

const PokerPlayer = function ({ pokerhand }: Props) {
  return (
    <div>
      <PokerHand pokerHand={pokerhand} />
    </div>
  );
};

export default memo(PokerPlayer);
