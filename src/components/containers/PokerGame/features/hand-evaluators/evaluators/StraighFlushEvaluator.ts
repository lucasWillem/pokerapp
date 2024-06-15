import type { HandEvaluator } from "../types";
import type { Hand } from "@global/types";

export default class StraightFlushEvaluator implements HandEvaluator {
  constructor(private hand: Hand) {}

  public evaluate() {
    const { hand } = this;
    const handOfRelevantCardsInAscendingOrder = hand.sort(
      (a, b) => a.number - b.number,
    );

    let firstPointer = 0;
    let secondPointer = 1;

    while (secondPointer <= handOfRelevantCardsInAscendingOrder.length - 1) {
      const firstCard = handOfRelevantCardsInAscendingOrder[firstPointer];
      const secondCard = handOfRelevantCardsInAscendingOrder[secondPointer];

      if (firstCard.number === 1) {
        return false;
      }

      if (secondCard.number !== firstCard.number + 1) {
        return false;
      }

      if (firstCard.suit !== secondCard.suit) {
        return false;
      }

      firstPointer++;
      secondPointer++;
    }

    return true;
  }
}
