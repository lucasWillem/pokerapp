import type { HandEvaluator } from "../types";
import type { Hand } from "../../types";

export default class ThreeOfAKindEvaluator implements HandEvaluator {
  constructor(private hand: Hand) {}

  public evaluate() {
    const { hand } = this;
    const handSortedAscending = hand.sort((a, b) => a.number - b.number);

    let numOfmatches = 0;

    let firstPointer = 0;
    let secondPointer = 2;

    while (secondPointer <= handSortedAscending.length - 1) {
      const firstCard = handSortedAscending[firstPointer];
      const secondCard = handSortedAscending[secondPointer];

      if (firstCard.number === secondCard.number) {
        numOfmatches += 1;
      }
      firstPointer++;
      secondPointer++;
    }

    return numOfmatches === 1 ? true : false;
  }
}
