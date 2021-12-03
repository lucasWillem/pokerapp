import PokerCard from "../PokerCard";
import type { Hand } from "../../../global/types";

type Props = {
  pokerHand: Hand;
};

const PokerHand = function ({ pokerHand }: Props) {
  return (
    <div>
      {pokerHand.map((pokerCard) => (
        <PokerCard pokerCard={pokerCard} />
      ))}
    </div>
  );
};

export default PokerHand;
