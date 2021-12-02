import type { Hand } from "../types";

export interface DeckDealer {
  deal: () => Hand;
}

export interface DeckDealerContext {
  deal: () => Hand;
}
