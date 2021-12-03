import { DeckCreatorContext, DefaultDeckCreator } from "../deck";
import { ShufflerContext, RandomShuffler } from "../shufflers";
import { DealerContext, RandomDealer } from "../deck-dealers";

import {
  HandEvalutorsContext,
  RoyalFlushEvaluator,
  StraighFlushEvaluator,
  FourOfAKindEvaluator,
  FlushEvaluator,
  StraightEvaluator,
  ThreeOfAKindEvaluator,
  PairEvaluator,
  TwoPairEvaluator,
  FullHouseEvaluator,
} from "../hand-evaluators";

import type { Hand } from "../types";
import type { PlayerRank } from "./types";

export default abstract class Game {
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

  static determineWinner(pokerHands: Hand[]): string | null {
    const { rankOfBadHand, rankOfGoodHand } = this.RankPlayers(pokerHands);

    const message = this.determineWinnerAndReturnMessage(
      rankOfGoodHand,
      rankOfBadHand
    );

    return message;
  }

  static RankPlayers(pokerHands: Hand[]) {
    let isRoyalFlush = false;
    let isStraightFlush = false;
    let isFourOfAKind = false;
    let isFlush = false;
    let isStraight = false;
    let isThreeOfAKind = false;
    let isPair = false;
    let isTwoPair = false;
    let isFullHouse = false;

    const rankOfGoodHand: PlayerRank[] = [];
    const rankOfBadHand: PlayerRank[] = [];

    pokerHands.forEach((hand, i) => {
      isRoyalFlush = new HandEvalutorsContext(
        new RoyalFlushEvaluator(hand)
      ).evaluate();
      isStraightFlush = new HandEvalutorsContext(
        new StraighFlushEvaluator(hand)
      ).evaluate();
      isFourOfAKind = new HandEvalutorsContext(
        new FourOfAKindEvaluator(hand)
      ).evaluate();
      isFlush = new HandEvalutorsContext(new FlushEvaluator(hand)).evaluate();
      isStraight = new HandEvalutorsContext(
        new StraightEvaluator(hand)
      ).evaluate();
      isThreeOfAKind = new HandEvalutorsContext(
        new ThreeOfAKindEvaluator(hand)
      ).evaluate();
      isPair = new HandEvalutorsContext(new PairEvaluator(hand)).evaluate();
      isTwoPair = new HandEvalutorsContext(
        new TwoPairEvaluator(hand)
      ).evaluate();

      isFullHouse = new HandEvalutorsContext(
        new FullHouseEvaluator(hand)
      ).evaluate();

      if (isRoyalFlush) {
        rankOfGoodHand.push({ player: i, rank: 10 });
      } else if (isStraightFlush) {
        rankOfGoodHand.push({ player: i, rank: 9 });
      } else if (isFourOfAKind) {
        rankOfGoodHand.push({ player: i, rank: 8 });
      } else if (isFullHouse) {
        rankOfGoodHand.push({ player: i, rank: 7 });
      } else if (isFlush) {
        rankOfGoodHand.push({ player: i, rank: 6 });
      } else if (isStraight) {
        rankOfGoodHand.push({ player: i, rank: 5 });
      } else if (isThreeOfAKind) {
        rankOfGoodHand.push({ player: i, rank: 4 });
      } else if (isTwoPair) {
        rankOfGoodHand.push({ player: i, rank: 3 });
      } else if (isPair) {
        rankOfGoodHand.push({ player: i, rank: 2 });
      } else {
        const highestCard = hand.sort((a, b) => b.number - a.number)[0].number;

        rankOfBadHand.push({ player: i, rank: highestCard });
      }
    });

    return { rankOfGoodHand, rankOfBadHand };
  }

  static determineWinnerAndReturnMessage(
    rankOfGoodHand: PlayerRank[],
    rankOfBadHand: PlayerRank[]
  ) {
    if (rankOfGoodHand.length === 0) {
      const winners = rankOfBadHand
        .sort((a, b) => b.rank - a.rank)
        .filter((winner, i, arr) => winner.rank === arr[0].rank);

      const winnersByPlayerNumber = winners
        .map((winner) => winner.player + 1)
        .toString();

      const drawMessage = `We have a draw between players ${winnersByPlayerNumber}`;
      const singleWinnerMessage = `The winner is player ${
        winners[0].player + 1
      }`;

      return winners.length > 1 ? drawMessage : singleWinnerMessage;
    }

    if (rankOfGoodHand.length === 1) {
      const singleWinnerMessage = `The winner is player ${
        rankOfGoodHand[0].player + 1
      }`;
      return singleWinnerMessage;
    }

    if (rankOfGoodHand.length > 1) {
      const winners = rankOfGoodHand
        .sort((a, b) => b.rank - a.rank)
        .filter((winner, i, arr) => winner.rank === arr[0].rank);

      const winnersByPlayerNumber = winners
        .map((winner) => winner.player + 1)
        .join(" & ")
        .toString();

      const drawMessage = `We have a draw between players ${winnersByPlayerNumber}`;
      const singleWinnerMessage = `The winner is player ${
        winners[0].player + 1
      }`;

      return winners.length > 1 ? drawMessage : singleWinnerMessage;
    }

    return null;
  }
}
