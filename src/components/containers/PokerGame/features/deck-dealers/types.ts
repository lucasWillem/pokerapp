import type { Hand } from "../../PokerGame.types";

export interface DeckDealer {
  deal: () => Hand;
}

export interface DeckDealerContext {
  deal: () => Hand;
}
