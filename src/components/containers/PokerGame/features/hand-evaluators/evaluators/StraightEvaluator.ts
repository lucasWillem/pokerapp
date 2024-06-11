import type { HandEvaluator } from '../types';
import type { Hand } from '@global/types';

export default class StraightEvaluator implements HandEvaluator {
  constructor(private hand: Hand) {}

  public evaluate() {
    const { hand } = this;

    let numOfIsInSequenceCases = 0;
    let numOfIsOfSameSuitCases = 0;

    const handOfrelevantCardsInAscendingOrder = hand.sort(
      (a, b) => a.number - b.number,
    );

    let firstPointer = 0;
    let secondPointer = 1;

    while (secondPointer <= handOfrelevantCardsInAscendingOrder.length - 1) {
      const firstCard = handOfrelevantCardsInAscendingOrder[firstPointer];
      const secondCard = handOfrelevantCardsInAscendingOrder[secondPointer];

      if (firstCard.suit === secondCard.suit) {
        numOfIsOfSameSuitCases += 1;
      }

      if (secondCard.number === firstCard.number + 1) {
        numOfIsInSequenceCases += 1;
      }

      firstPointer++;
      secondPointer++;
    }

    return numOfIsInSequenceCases === 4 && numOfIsOfSameSuitCases < 4
      ? true
      : false;
  }
}
