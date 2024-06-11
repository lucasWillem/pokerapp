import type { Hand } from '@global/types';

export interface DeckDealer {
  deal: () => Hand;
}

export interface DeckDealerContext {
  deal: () => Hand;
}
