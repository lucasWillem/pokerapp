import { DeckCreatorContext, DefaultDeckCreator } from "../deck";
import { ShufflerContext, RandomShuffler } from "../shufflers";
import { DealerContext, RandomDealer } from "../deck-dealers";

export default abstract class GameStarter {
  static getHands({ noOfPlayers = 1 }: { noOfPlayers?: number }) {
    const hands = [];

    const deck = new DeckCreatorContext(new DefaultDeckCreator()).create();
    const shuffledDeck = new ShufflerContext(
      new RandomShuffler(deck)
    ).shuffle();

    for (let x = 1; x <= noOfPlayers; x++) {
      hands.push(new DealerContext(new RandomDealer(shuffledDeck)).deal());
    }

    return hands;
  }
}
