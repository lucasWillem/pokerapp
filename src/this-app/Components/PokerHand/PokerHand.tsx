import PokerCard from "../PokerCard";
import type { Hand } from "../../../global/types";
import "./PokerHand.css";

type Props = {
  pokerHand: Hand;
};

const PokerHand = function ({ pokerHand }: Props) {
  return (
    <div className="PokerHand">
      {pokerHand.map((pokerCard) => (
        <PokerCard pokerCard={pokerCard} />
      ))}
    </div>
  );
};

export default PokerHand;
