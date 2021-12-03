import "./PokerCard.css";
import type { Card } from "../../../global/types";

import {
  SuitClubFill,
  SuitDiamondFill,
  SuitSpadeFill,
  SuitHeartFill,
} from "react-bootstrap-icons";

type Props = {
  pokerCard: Card;
};

const PokerCard = function ({ pokerCard }: Props) {
  function determineSuiteToShow() {
    if (pokerCard.suit === "spades") {
      return <SuitSpadeFill style={{ fontSize: 25 }} />;
    }

    if (pokerCard.suit === "clubs") {
      return <SuitClubFill style={{ fontSize: 25 }} />;
    }

    if (pokerCard.suit === "hearts") {
      return <SuitHeartFill style={{ fontSize: 25 }} />;
    }

    if (pokerCard.suit === "diamonds") {
      return <SuitDiamondFill style={{ fontSize: 25 }} />;
    }
  }

  return (
    <div className="Card">
      <div className="Card-Top-Number-Row">{pokerCard.number}</div>
      <div>{determineSuiteToShow()}</div>
      <div className="Card-Bottom-Number-Row">{pokerCard.number}</div>
    </div>
  );
};

export default PokerCard;
