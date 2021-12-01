import type { CardDeck } from "../types";

export interface DeckShuffler {
  shuffle: () => CardDeck;
}

export interface DeckShufflerContext {
  shuffle: () => CardDeck;
}
