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
