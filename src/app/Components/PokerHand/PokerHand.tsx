import { memo } from "react";
import PokerCard from "../PokerCard";
import type { Hand } from "../../../global/types";
import "./PokerHand.css";

type Props = {
  pokerHand: Hand;
};

const PokerHand = function ({ pokerHand }: Props) {
  return (
    <div className="PokerHand">
      {pokerHand.map((pokerCard, i) => (
        <PokerCard key={`${pokerHand}-${i}`} pokerCard={pokerCard} />
      ))}
    </div>
  );
};

export default memo(PokerHand);
