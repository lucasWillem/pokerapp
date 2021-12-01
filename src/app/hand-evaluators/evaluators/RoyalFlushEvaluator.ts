import type { HandEvaluator } from "../types";
import type { Hand } from "../../types";
export default class RoyalFlushEvaluator implements HandEvaluator {
  constructor(private hand: Hand) {}

  public evaluate() {
    const { hand } = this;
    console.log("evaluate this hand");
    return false;
  }
}
