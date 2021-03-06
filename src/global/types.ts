export type CardSuit = "clubs" | "spades" | "hearts" | "diamonds";
export type CardNumber = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 | 13;

export type Card = {
  number: CardNumber;
  suit: CardSuit;
};

export type Hand = Card[];
export type CardDeck = Card[];
