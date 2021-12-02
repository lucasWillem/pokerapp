import type { HandEvaluator } from "../types";
import type { Hand } from "../../types";
export default class RoyalFlushEvaluator implements HandEvaluator {
  constructor(private hand: Hand) {}

  public evaluate() {
    const { hand } = this;

    const handOfrelevantCardsInAscendingOrder = hand
      .filter((card) => {
        return (
          (card.number === 1 ||
            card.number === 10 ||
            card.number === 11 ||
            card.number === 12 ||
            card.number === 13) &&
          card
        );
      })
      .sort((a, b) => a.number - b.number);

    if (handOfrelevantCardsInAscendingOrder.length < 5) {
      return false;
    }

    let firstPointer = 0;
    let secondPointer = 1;

    while (secondPointer <= handOfrelevantCardsInAscendingOrder.length - 1) {
      const firstCard = handOfrelevantCardsInAscendingOrder[firstPointer];
      const secondCard = handOfrelevantCardsInAscendingOrder[secondPointer];

      if (firstCard.suit !== secondCard.suit) {
        return false;
      }

      if (
        firstCard.number !== 1 &&
        secondCard.number !== firstCard.number + 1
      ) {
        return false;
      }

      firstPointer++;
      secondPointer++;
    }

    return true;
  }
}
