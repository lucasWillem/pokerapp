import type { CardDeck } from "../../PokerGame.types";

export interface DeckCreator {
  create: () => CardDeck;
}

export interface CreatorContext {
  create: () => CardDeck;
}
