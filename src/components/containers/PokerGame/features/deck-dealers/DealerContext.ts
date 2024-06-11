import type { DeckDealerContext, DeckDealer } from './types';

export default class DealerContext implements DeckDealerContext {
  constructor(private deckDealer: DeckDealer) {}

  deal() {
    return this.deckDealer.deal();
  }
}
