import { DeckCreatorContext, DefaultDeckCreator } from "../deck";
import { ShufflerContext, RandomShuffler } from "../shufflers";
import { DealerContext, RandomDealer } from "../deck-dealers";
import type { Hand } from "../types";

export default abstract class GameStarter {
  static getHands({ noOfPlayers = 2 }: { noOfPlayers?: number }): Hand[] {
    const hands: Hand[] = [];

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
