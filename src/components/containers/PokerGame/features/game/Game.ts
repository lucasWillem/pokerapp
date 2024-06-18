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

import type { Hand } from "../../PokerGame.types";
import { WinningHand, type PlayerRank } from "./types";

export default abstract class Game {
  static getHands({ noOfPlayers = 2 }: { noOfPlayers?: number }): Hand[] {
    const hands: Hand[] = [];

    const deck = new DeckCreatorContext(new DefaultDeckCreator()).create();
    const shuffledDeck = new ShufflerContext(
      new RandomShuffler(deck),
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
      rankOfBadHand,
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
        new RoyalFlushEvaluator(hand),
      ).evaluate();
      isStraightFlush = new HandEvalutorsContext(
        new StraighFlushEvaluator(hand),
      ).evaluate();
      isFourOfAKind = new HandEvalutorsContext(
        new FourOfAKindEvaluator(hand),
      ).evaluate();
      isFlush = new HandEvalutorsContext(new FlushEvaluator(hand)).evaluate();
      isStraight = new HandEvalutorsContext(
        new StraightEvaluator(hand),
      ).evaluate();
      isThreeOfAKind = new HandEvalutorsContext(
        new ThreeOfAKindEvaluator(hand),
      ).evaluate();
      isPair = new HandEvalutorsContext(new PairEvaluator(hand)).evaluate();
      isTwoPair = new HandEvalutorsContext(
        new TwoPairEvaluator(hand),
      ).evaluate();

      isFullHouse = new HandEvalutorsContext(
        new FullHouseEvaluator(hand),
      ).evaluate();

      if (isRoyalFlush) {
        rankOfGoodHand.push({
          player: i,
          rank: 10,
          name: WinningHand.RoyalFlush,
        });
      } else if (isStraightFlush) {
        rankOfGoodHand.push({
          player: i,
          rank: 9,
          name: WinningHand.StraightFlush,
        });
      } else if (isFourOfAKind) {
        rankOfGoodHand.push({
          player: i,
          rank: 8,
          name: WinningHand.FourOfAKind,
        });
      } else if (isFullHouse) {
        rankOfGoodHand.push({
          player: i,
          rank: 7,
          name: WinningHand.FullHouse,
        });
      } else if (isFlush) {
        rankOfGoodHand.push({ player: i, rank: 6, name: WinningHand.Flush });
      } else if (isStraight) {
        rankOfGoodHand.push({ player: i, rank: 5, name: WinningHand.Straight });
      } else if (isThreeOfAKind) {
        rankOfGoodHand.push({
          player: i,
          rank: 4,
          name: WinningHand.ThreeOfAKind,
        });
      } else if (isTwoPair) {
        rankOfGoodHand.push({ player: i, rank: 3, name: WinningHand.TwoPair });
      } else if (isPair) {
        rankOfGoodHand.push({ player: i, rank: 2, name: WinningHand.Pair });
      } else {
        const highestCard = hand.sort((a, b) => b.number - a.number)[0].number;

        rankOfBadHand.push({
          player: i,
          rank: highestCard,
          name: WinningHand.HighCard,
        });
      }
    });

    return { rankOfGoodHand, rankOfBadHand };
  }

  static determineWinnerAndReturnMessage(
    rankOfGoodHand: PlayerRank[],
    rankOfBadHand: PlayerRank[],
  ) {
    if (rankOfGoodHand.length === 0) {
      const winners = rankOfBadHand
        .sort((a, b) => b.rank - a.rank)
        .filter((winner, i, arr) => winner.rank === arr[0].rank);

      const winnersByPlayerNumber = winners
        .map((winner) => winner.player + 1)
        .join(", ")
        .toString();

      const winningHand = winners[0].name;

      const drawMessage = `Congratulations players ${winnersByPlayerNumber} with a ${winningHand}!`;
      const singleWinnerMessage = `Congratulations player ${
        winners[0].player + 1
      } with a ${winningHand}!`;

      return winners.length > 1 ? drawMessage : singleWinnerMessage;
    }

    if (rankOfGoodHand.length === 1) {
      const singleWinnerMessage = `Congratulations player ${
        rankOfGoodHand[0].player + 1
      } with a ${rankOfGoodHand[0].name}`;
      return singleWinnerMessage;
    }

    if (rankOfGoodHand.length > 1) {
      const winners = rankOfGoodHand
        .sort((a, b) => b.rank - a.rank)
        .filter((winner, i, arr) => winner.rank === arr[0].rank);

      const winnersByPlayerNumber = winners
        .map((winner) => winner.player + 1)
        .join(", ")
        .toString();

      const winningHand = winners[0].name;

      const drawMessage = `Congratulations players ${winnersByPlayerNumber} with a ${winningHand}!`;
      const singleWinnerMessage = `Congratulations player ${
        winners[0].player + 1
      } with a ${winningHand}!`;

      return winners.length > 1 ? drawMessage : singleWinnerMessage;
    }

    return null;
  }
}
