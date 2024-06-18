type CardSuit = "clubs" | "spades" | "hearts" | "diamonds";
type CardNumber = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 | 13;

type Card = {
  number: CardNumber;
  suit: CardSuit;
};

type Hand = Card[];
type CardDeck = Card[];

export type { CardNumber, Card, Hand, CardDeck };
