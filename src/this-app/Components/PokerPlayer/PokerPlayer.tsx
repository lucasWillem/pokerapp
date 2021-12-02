import PokerHand from "../PokerHand/PokerHand";
import type { Hand } from "../../../global/types";

type Props = {
  pokerhand: Hand;
};

const PokerPlayer = function ({ pokerhand }: Props) {
  return (
    <div>
      <PokerHand hand={pokerhand} />
    </div>
  );
};

export default PokerPlayer;
