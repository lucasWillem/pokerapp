import type { HandEvaluator } from "../types";
import type { Hand } from "@global/types";
import PairEvaluator from "./PairEvaluator";
import ThreeOfAKindEvaluator from "./ThreeOfAKindEvaluator";

export default class FullHouseEvaluator implements HandEvaluator {
  constructor(private hand: Hand) {}

  public evaluate() {
    const { hand } = this;
    const isPair = new PairEvaluator(hand).evaluate();
    const isThreeOfKind = new ThreeOfAKindEvaluator(hand).evaluate();

    return isPair && isThreeOfKind;
  }
}
