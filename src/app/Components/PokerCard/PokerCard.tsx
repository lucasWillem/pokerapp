import { memo } from "react";
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

  function determineNumberToShow() {
    if (pokerCard.number === 1) {
      return "A";
    }

    if (pokerCard.number === 11) {
      return "J";
    }

    if (pokerCard.number === 12) {
      return "Q";
    }

    if (pokerCard.number === 13) {
      return "K";
    }
    return pokerCard.number;
  }

  return (
    <div className="Card">
      <div className="CardTopNumberRow">{determineNumberToShow()}</div>
      <div>{determineSuiteToShow()}</div>
      <div className="CardBottomNumberRow">{determineNumberToShow()}</div>
    </div>
  );
};

export default memo(PokerCard);
