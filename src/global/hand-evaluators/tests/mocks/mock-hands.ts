import { Hand } from "../../../types";

export const mockHandLegitRoyalFlush: Hand = [
  {
    number: 1,
    suit: "spades",
  },
  {
    number: 10,
    suit: "spades",
  },
  {
    number: 11,
    suit: "spades",
  },
  {
    number: 12,
    suit: "spades",
  },
  {
    number: 13,
    suit: "spades",
  },
];

export const mockRoyalFlushHandNotOfSameSuit: Hand = [
  {
    number: 1,
    suit: "spades",
  },
  {
    number: 10,
    suit: "clubs",
  },
  {
    number: 11,
    suit: "spades",
  },
  {
    number: 12,
    suit: "spades",
  },
  {
    number: 13,
    suit: "spades",
  },
];

export const mockRoyalFlushHandNotInSequence: Hand = [
  {
    number: 2,
    suit: "spades",
  },
  {
    number: 10,
    suit: "spades",
  },
  {
    number: 11,
    suit: "spades",
  },
  {
    number: 12,
    suit: "spades",
  },
  {
    number: 13,
    suit: "spades",
  },
];

export const mockLegitStraightFlush: Hand = [
  {
    number: 9,
    suit: "spades",
  },
  {
    number: 10,
    suit: "spades",
  },
  {
    number: 11,
    suit: "spades",
  },
  {
    number: 12,
    suit: "spades",
  },
  {
    number: 13,
    suit: "spades",
  },
];

export const mockStraightFlushHandNotInSequence: Hand = [
  {
    number: 2,
    suit: "spades",
  },
  {
    number: 9,
    suit: "spades",
  },
  {
    number: 10,
    suit: "spades",
  },
  {
    number: 12,
    suit: "spades",
  },
  {
    number: 13,
    suit: "spades",
  },
];

export const mockStraightFlushHandNotOfSameSuit: Hand = [
  {
    number: 9,
    suit: "spades",
  },
  {
    number: 10,
    suit: "clubs",
  },
  {
    number: 11,
    suit: "spades",
  },
  {
    number: 12,
    suit: "spades",
  },
  {
    number: 13,
    suit: "spades",
  },
];

export const mockStraightFlushIsRoyalFlush: Hand = [
  {
    number: 1,
    suit: "spades",
  },
  {
    number: 10,
    suit: "spades",
  },
  {
    number: 11,
    suit: "spades",
  },
  {
    number: 12,
    suit: "spades",
  },
  {
    number: 13,
    suit: "spades",
  },
];

export const mockLegitFourOfAKind: Hand = [
  {
    number: 1,
    suit: "spades",
  },
  {
    number: 1,
    suit: "hearts",
  },
  {
    number: 1,
    suit: "clubs",
  },
  {
    number: 1,
    suit: "diamonds",
  },
  {
    number: 13,
    suit: "spades",
  },
];

export const mockFourOfAKindIsActuallyThreeOfAKind: Hand = [
  {
    number: 1,
    suit: "spades",
  },
  {
    number: 1,
    suit: "hearts",
  },
  {
    number: 1,
    suit: "clubs",
  },
  {
    number: 10,
    suit: "diamonds",
  },
  {
    number: 13,
    suit: "spades",
  },
];

export const mockLegitFullHouse: Hand = [
  {
    number: 1,
    suit: "spades",
  },
  {
    number: 1,
    suit: "hearts",
  },
  {
    number: 10,
    suit: "clubs",
  },
  {
    number: 10,
    suit: "diamonds",
  },
  {
    number: 10,
    suit: "spades",
  },
];

export const mockFullHouseMissingAPair: Hand = [
  {
    number: 12,
    suit: "spades",
  },
  {
    number: 1,
    suit: "hearts",
  },
  {
    number: 10,
    suit: "clubs",
  },
  {
    number: 10,
    suit: "diamonds",
  },
  {
    number: 10,
    suit: "spades",
  },
];

export const mockFullHouseMissingThreeOfAKind: Hand = [
  {
    number: 1,
    suit: "spades",
  },
  {
    number: 1,
    suit: "hearts",
  },
  {
    number: 10,
    suit: "clubs",
  },
  {
    number: 10,
    suit: "diamonds",
  },
  {
    number: 11,
    suit: "spades",
  },
];
