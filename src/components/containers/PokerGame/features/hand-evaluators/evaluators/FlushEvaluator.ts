import type { HandEvaluator } from "../types";
import type { Hand } from "@global/types";

export default class FlushEvaluator implements HandEvaluator {
  constructor(private hand: Hand) {}

  public evaluate() {
    const { hand } = this;
    let numOfInSequenceCases = 0;

    const handOfRelevantCardsInAscendingOrder = hand
      .filter((card, i, arr) => card.suit === arr[0].suit)
      .sort((a, b) => a.number - b.number);

    let firstPointer = 0;
    let secondPointer = 1;

    while (secondPointer <= handOfRelevantCardsInAscendingOrder.length - 1) {
      const firstCard = handOfRelevantCardsInAscendingOrder[firstPointer];
      const secondCard = handOfRelevantCardsInAscendingOrder[secondPointer];

      if (secondCard.number === firstCard.number + 1) {
        numOfInSequenceCases += 1;
      }

      firstPointer++;
      secondPointer++;
    }

    return handOfRelevantCardsInAscendingOrder.length < 5 ||
      numOfInSequenceCases >= 3
      ? false
      : true;
  }
}
