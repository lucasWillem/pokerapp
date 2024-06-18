import type { CardDeck } from "../../PokerGame.types";

export interface DeckShuffler {
  shuffle: () => CardDeck;
}

export interface DeckShufflerContext {
  shuffle: () => CardDeck;
}
