type Suit = "clubs" | "spades" | "hearts" | "diamonds";
type Number = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 | 13;

type Card = {
  number: Number;
  suit: Suit;
};

export interface HandEvaluator {
  evaluate: () => boolean;
}

export interface HandEvaluatorContext {
  evaluate: () => boolean;
}

export type Hand = Card[];
