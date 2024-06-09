
import type { CardDeck } from "../../../../../global/types";

export interface DeckCreator {
  create: () => CardDeck;
}

export interface CreatorContext {
  create: () => CardDeck;
}
