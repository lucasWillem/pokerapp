import type { HandEvaluator } from "../types";
import type { Hand } from "../../types";

export default class StraightFlushEvaluator implements HandEvaluator {
  constructor(private hand: Hand) {}

  public evaluate() {
    const { hand } = this;
    const handOfRelevantCardsInAscendingOrder = hand
      // .filter((card) => {
      //   return (
      //     card.number !== 1 ||
      //     card.number !== 10 ||
      //     card.number !== 11 ||
      //     card.number !== 12 ||
      //     (card.number !== 13 && card)
      //   );
      // })
      .sort((a, b) => a.number - b.number);

    console.log(handOfRelevantCardsInAscendingOrder);

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
