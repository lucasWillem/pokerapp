import type { HandEvaluator } from '../types';
import type { Hand } from '@global/types';

interface Frequencies {
  [key: string]: number;
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

    // eslint-disable-next-line
    for (const [_, cardNumberFrequency] of Object.entries(
      frequencies,
    )) {
      if (cardNumberFrequency === 3) {
        isThreeOfKind = true;
      }
    }

    return isThreeOfKind;
  }
}
