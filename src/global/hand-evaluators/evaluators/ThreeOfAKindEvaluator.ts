import type { HandEvaluator } from "../types";
import type { Hand } from "../../types";
interface Frequencies {
  [key: string]: any;
}

export default class ThreeOfAKindEvaluator implements HandEvaluator {
  constructor(private hand: Hand) {}

  public evaluate() {
    const { hand } = this;
    const frequencies: Frequencies = {};
    let isThreeOfKind = false;

    for (const card of hand) {
      const cardProperty = card.number;
      frequencies[cardProperty] = ++frequencies[cardProperty] || 1;
    }

    for (const [cardNumber, cardNumberFrequency] of Object.entries(
      frequencies
    )) {
      if (cardNumberFrequency === 3) {
        isThreeOfKind = true;
      }
    }

    return isThreeOfKind;
  }
}
