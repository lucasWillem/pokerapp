import type { DeckShufflerContext, DeckShuffler } from './types';

export default class ShufflerContext implements DeckShufflerContext {
  constructor(private deckShuffler: DeckShuffler) {}

  shuffle() {
    return this.deckShuffler.shuffle();
  }
}
