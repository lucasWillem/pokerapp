import type { CardDeck, CardNumber } from '../../../../../../global/types';
import type { DeckCreator } from '../types';

export default class DefaultDeckCreator implements DeckCreator {
  create() {
    const deck: CardDeck = [];

    for (let c = 1; c <= 13; c++) {
      deck.push({ number: c as CardNumber, suit: 'clubs' });
      deck.push({ number: c as CardNumber, suit: 'spades' });
      deck.push({ number: c as CardNumber, suit: 'hearts' });
      deck.push({ number: c as CardNumber, suit: 'diamonds' });
    }

    return deck;
  }
}
