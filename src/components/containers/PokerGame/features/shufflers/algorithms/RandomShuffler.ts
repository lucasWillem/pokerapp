import type { CardDeck } from '../../../../../../global/types';
import type { DeckShuffler } from '../types';

export default class RandomShuffler implements DeckShuffler {
  constructor(private deck: CardDeck) {}

  public shuffle() {
    const shuffledDeck = [...this.deck];

    for (var i = shuffledDeck.length - 1; i > 0; i--) {
      var j = Math.floor(Math.random() * (i + 1));

      var temp = shuffledDeck[i];
      shuffledDeck[i] = shuffledDeck[j];
      shuffledDeck[j] = temp;
    }

    return shuffledDeck;
  }
}
