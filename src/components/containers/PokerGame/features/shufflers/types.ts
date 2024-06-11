import { CardDeck } from '../../../../../global/types';

export interface DeckShuffler {
  shuffle: () => CardDeck;
}

export interface DeckShufflerContext {
  shuffle: () => CardDeck;
}
