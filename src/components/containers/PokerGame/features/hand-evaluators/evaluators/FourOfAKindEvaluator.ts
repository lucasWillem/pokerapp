import type { HandEvaluator } from "../types";
import type { Hand } from "../../../PokerGame.types";

export default class FourOfAKindEvaluator implements HandEvaluator {
  constructor(private hand: Hand) {}

  public evaluate() {
    const { hand } = this;

    const frequencies: Record<number, number> = {};
    hand.forEach((card) => {
      frequencies[card.number] = (frequencies[card.number] || 0) + 1;
    });

    const isFourOfAKind =
      Object.values(frequencies).filter((value) => value === 4).length === 1;

    return isFourOfAKind;
  }
}
