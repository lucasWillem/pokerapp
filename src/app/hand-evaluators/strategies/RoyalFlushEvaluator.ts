import type { HandEvaluator } from "../types";
import type { Hand } from "../../types";
export default class RoyalFlushEvaluator implements HandEvaluator {
  private hand;

  constructor(hand: Hand) {
    this.hand = hand;
  }

  public evaluate() {
    const { hand } = this;
    console.log("evaluate this hand");
    return false;
  }
}
