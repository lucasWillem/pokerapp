import { DeckCreatorContext, DefaultDeckCreator } from "../deck";
import { ShufflerContext, RandomShuffler } from "../shufflers";

export default abstract class GameStarter {
  static start() {
    const deck = new DeckCreatorContext(new DefaultDeckCreator()).create();
    const shuffledDeck = new ShufflerContext(
      new RandomShuffler(deck)
    ).shuffle();

    console.log(shuffledDeck);

    // shuffle the deck
    // deal cards
  }
}
