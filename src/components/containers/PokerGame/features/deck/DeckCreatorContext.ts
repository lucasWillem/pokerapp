import type { CreatorContext, DeckCreator } from './types';

export default class DeckCreatorContext implements CreatorContext {
  constructor(private deckCreator: DeckCreator) {}

  create() {
    return this.deckCreator.create();
  }
}
