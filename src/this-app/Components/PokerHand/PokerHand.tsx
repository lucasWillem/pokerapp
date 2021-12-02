import PokerCard from "../PokerCard";
import type { Hand } from "../../../global/types";

type Props = {
  hand: Hand;
};

const PokerHand = function ({ hand }: Props) {
  return (
    <div>
      <PokerCard />
    </div>
  );
};

export default PokerHand;
