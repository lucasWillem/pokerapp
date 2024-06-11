import type { CardDeck } from '../../../../../../global/types';
import type { DeckDealer } from '../types';

export default class RandomDealer implements DeckDealer {
  constructor(private deck: CardDeck) {}

  deal() {
    const hand = [];

    for (let i = 1; i <= 5; i++) {
      const randomCard = this.deck[Math.floor(Math.random() * 52)];
      hand.push(randomCard);
    }

    return hand;
  }
}
