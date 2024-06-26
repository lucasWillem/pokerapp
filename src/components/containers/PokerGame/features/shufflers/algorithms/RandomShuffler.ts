import type { CardDeck } from "../../../PokerGame.types";
import type { DeckShuffler } from "../types";

export default class RandomShuffler implements DeckShuffler {
  constructor(private deck: CardDeck) {}

  public shuffle() {
    const shuffledDeck = [...this.deck];

    for (let i = shuffledDeck.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));

      const temp = shuffledDeck[i];
      shuffledDeck[i] = shuffledDeck[j];
      shuffledDeck[j] = temp;
    }

    return shuffledDeck;
  }
}
