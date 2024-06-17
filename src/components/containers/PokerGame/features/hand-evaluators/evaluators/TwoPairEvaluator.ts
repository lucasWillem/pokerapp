import type { HandEvaluator } from "../types";
import type { Hand } from "@global/types";

export default class TwoPairEvaluator implements HandEvaluator {
  constructor(private hand: Hand) {}

  public evaluate() {
    const { hand } = this;

    const frequencies: Record<number, number> = {};
    hand.forEach((card) => {
      frequencies[card.number] = (frequencies[card.number] || 0) + 1;
    });

    return (
      Object.values(frequencies).filter((value) => value === 2).length === 2
    );
  }
}
