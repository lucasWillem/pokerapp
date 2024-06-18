import type { HandEvaluator } from "../types";
import type { Hand } from "../../../PokerGame.types";

export default class PairEvaluator implements HandEvaluator {
  constructor(private hand: Hand) {}

  public evaluate() {
    const { hand } = this;

    const frequencies: Record<number, number> = {};
    hand.forEach((card) => {
      frequencies[card.number] = (frequencies[card.number] || 0) + 1;
    });

    const isPair =
      Object.values(frequencies).filter((value) => value === 2).length === 1;
    const isThreeOfAKind =
      Object.values(frequencies).filter((value) => value === 3).length === 1;

    const isFullHouse = isPair && isThreeOfAKind;

    return isPair && !isFullHouse;
  }
}
