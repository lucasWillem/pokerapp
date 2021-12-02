import type { CardDeck } from "../types";

export interface DeckCreator {
  create: () => CardDeck;
}

export interface CreatorContext {
  create: () => CardDeck;
}
